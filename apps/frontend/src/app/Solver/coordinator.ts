import { FIFO } from '@genshin-optimizer/util'

export interface WorkerRecvMessage<T = any> {
  command: 'workerRecvMessage'
  from: number | 'master'
  data: T
}
export interface WorkerSendMessage<T = any> {
  messageType: 'send'
  to?: number | 'all' | 'master'
  data: T
}

export abstract class WorkerCoordinator<
  Command extends { command: string; resultType?: never; messageType?: never },
  Response extends { command?: never; resultType: string; messageType?: never }
> {
  prio: Map<Command['command'], number>
  commands: FIFO<Command>[]
  workers: Promise<Worker>[]
  workDone: Map<Worker, () => void> = new Map()
  _workers: Worker[]

  commandsSent = 0
  commandsFinished = 0
  numIdleWorkers() {
    return this.workers.length - this.commandsSent + this.commandsFinished
  }

  cancel: (e?: Error) => void
  cancelled: Promise<never>
  callback: (_: Response, w: Worker) => void
  notifyNonEmpty: (() => void) | undefined
  notifyEmpty: (() => void) | undefined
  notifyCommandOverflow: (() => void) | undefined
  handleWorkerRecvMessage: ((msg: WorkerSendMessage) => void) | undefined

  constructor(
    workers: Worker[],
    prio: Command['command'][],
    callback: (_: Response, w: Worker) => void
  ) {
    this.commands = prio.map((_) => new FIFO())
    this.prio = new Map(prio.map((p, i) => [p, i]))
    this.callback = callback

    workers.forEach((worker, i) => {
      worker.onmessage = (x) => this.onMessage(x.data, worker, i)
      worker.onerror = (e) => this.onError(e)
    })
    this._workers = workers
    this.workers = workers.map((w) => Promise.resolve(w))
    this.cancel = () => {}
    this.cancelled = new Promise<never>((_, rej) => (this.cancel = rej))
    this.cancelled.catch((_) => workers.forEach((w) => w.terminate()))
  }

  /**
   * Send `commands` to available workers. If a worker sends back a `Command`,
   * that command is further sent to an available worker (may be the same worker).
   * If a worker sends back a `Response`, `this.callback` is invoked.
   *
   * Always await execute(), or at least avoid calling it twice while the first one is still running.
   *
   * Note that `{ resultType: 'done' }` is a special type that the worker is
   * expected to send back when completing its `command`.
   */
  async execute(commands: Iterable<Command> | AsyncIterable<Command>) {
    this.commandsSent = 0
    this.commandsFinished = 0
    const processingInput = (async () => {
      for await (const command of commands) this.add(command)
    })()

    while (true) {
      const command = this.commands.find((x) => x.length)?.pop()
      if (command === undefined) {
        this.notifyEmpty?.()
        this.notifyEmpty = undefined
        const hasCommand = await Promise.race([
          new Promise<boolean>(
            (res) => (this.notifyNonEmpty = () => res(true))
          ),
          Promise.all([...this.workers, processingInput]).then((_) => false),
          this.cancelled,
        ])

        this.notifyNonEmpty = undefined
        if (hasCommand) continue
        break
      }

      const { i, w } = await Promise.race([
        ...this.workers.map((w, i) => w.then((w) => ({ i, w }))),
        this.cancelled,
      ])
      this.workers[i] = new Promise((res) => this.workDone.set(w, () => res(w)))
      this.commandsSent += 1
      w.postMessage(command)
    }

    this.notifyEmpty = undefined
  }

  onError(e: { message: string }) {
    this.cancel(new Error(`Worker Error: ${e.message}`))
  }
  onMessage(
    msg: Command | Response | WorkerSendMessage,
    worker: Worker,
    workerIx: number
  ) {
    if (msg.messageType !== undefined) this.handleWorkerMessage(msg, workerIx)
    else if (msg.command !== undefined) this.add(msg)
    else if (msg.resultType === 'done') {
      this.commandsFinished += 1
      this.workDone.get(worker)!()
    } else this.callback(msg, worker)
  }
  handleWorkerMessage(msg: WorkerSendMessage, from: number) {
    const out: WorkerRecvMessage = {
      command: 'workerRecvMessage',
      from,
      data: msg.data,
    }
    if (msg.to === undefined || msg.to === 'all')
      this._workers.forEach((w, i) => i !== from && w.postMessage(out))
    else if (msg.to === 'master') this.handleWorkerRecvMessage?.(msg)
    else this._workers[msg.to].postMessage(out)
  }
  /** May be ignored after `execute` ends */
  add(command: Command) {
    console.log(`add ${command.command}`)
    const prio = this.prio.get(command.command)!
    this.commands[prio].push(command)
    if (this.commands[prio].length > this.workers.length ** 2) {
      this.notifyCommandOverflow?.()
      console.warn(
        `Too many commands in queue in queue ${prio} (${command.command}), elem ${this.commands[prio].length}`
      )
    }
    this.notifyNonEmpty?.()
  }
  /** May be ignored after `execute` ends */
  broadcast(command: Command | WorkerRecvMessage) {
    this._workers.forEach((w) => w.postMessage(command))
  }
  /** MUST be followed by `execute` and cannot be called while `execute` is running */
  notifiedBroadcast(command: Command) {
    this.workers = this.workers.map((worker) =>
      worker.then(
        (w) =>
          new Promise((res) => {
            this.workDone.set(w, () => res(w))
          })
      )
    )
    this._workers.forEach((w) => w.postMessage(command))
  }
}
