import{b as j,aF as F,e as r,aj as ee,aG as te,u as ae,ac as re,$ as se,M as ne,n as C,p as a,C as oe,J as c,K as W,t as ce,B as ie,W as E,h as le,f as he,aH as pe}from"./index-5a706f37.js";import{u as ue,f as me,s as de,a as ge,T as fe,S as ye}from"./StarDisplay-1fad4729.js";import{d as Ce}from"./TeamCard-565a5931.js";import{E as we,C as xe,a as Te,c as N,b as Se,d as be,e as ke,f as Ke}from"./CharacterRarityToggle-9d7d4040.js";import{W as ve}from"./WeaponCard-bd91dce4.js";import{g as D}from"./index-9dea7102.js";import{g as Me}from"./index-8fcef7ba.js";import{c as w}from"./totalUtils-0de6113d.js";import"./DropdownButton-320eb783.js";import"./ColoredText-cc0087fc.js";import"./BootstrapTooltip-b2964170.js";import"./DataContext-a0c67d24.js";import"./Artifact-9d522088.js";import"./StatIcon-6780fc24.js";import"./SqBadge-5bdd6c1a.js";import"./index-5b9f4e7c.js";import"./SlotIcon-9edfebfb.js";import"./useWeapon-a72220e5.js";import"./CardActionArea-554bd7a4.js";import"./Close-012bf053.js";import"./WeaponEditor-d43e3ffe.js";import"./ConditionalWrapper-cbaae205.js";import"./InfoTooltip-6f296f8c.js";import"./Groups-c0596d6b.js";import"./ArtifactSort-d9edd437.js";import"./CheckBoxOutlineBlank-598af3e7.js";import"./ChevronRight-19eee2cb.js";import"./SolidToggleButtonGroup-07ad13b1.js";import"./WeaponSelectionModal-2da8b6aa.js";import"./Settings-3aed717e.js";function We(){const e=j(),i=F();return r.useCallback(p=>{e.chars.get(p)||e.chars.getWithInitWeapon(p),i(`/characters/${p}`)},[i,e])}const Ee={xs:1,sm:2,md:3,lg:4,xl:4},De={xs:5,sm:8,md:9,lg:12,xl:12},je=Object.keys(N);function it(){const e=j(),i=F(),{params:{characterKey:l}}=ee({path:"/characters/:characterKey",end:!1})??{params:{}},p=r.useMemo(()=>l?te(l)?(e.chars.get(l)||e.chars.getWithInitWeapon(l),l):(i("/characters"),null):null,[l,i,e]),{t:u}=ae(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:g}=r.useContext(re),[x,T]=r.useState(()=>e.displayCharacter.get());r.useEffect(()=>e.displayCharacter.follow((t,n)=>T(n)),[e,T]);const[S,I]=r.useState(""),b=r.useDeferredValue(S),_=ue(),[$,k]=r.useState(!1),[A,m]=se();r.useEffect(()=>(ne.send({hitType:"pageview",page:"/characters"}),e.chars.followAny((t,n)=>(n==="new"||n==="remove")&&m())),[m,e]),r.useEffect(()=>e.charMeta.followAny(t=>m()),[m,e]);const B=We(),K=r.useDeferredValue(x),v=r.useDeferredValue(A),{charKeys:s,totalCharNum:f}=r.useMemo(()=>{const n=e.chars.keys.length,{element:h,weaponType:o,rarity:d,sortType:X,ascending:Y}=K,Z=e.chars.keys.filter(me({element:h,weaponType:o,rarity:d,name:b},Se(e,g))).sort(de(N[X]??[],Y,be(e,g),["new","favorite"]));return v&&{charKeys:Z,totalCharNum:n}},[e,K,b,g,v]),{weaponType:O,element:P,rarity:R,sortType:z,ascending:G}=x,H=r.useMemo(()=>w(le,t=>Object.entries(e.chars.data).forEach(([n,h])=>{const o=e.weapons.get(h.equippedWeapon);if(!o)return;const d=Me(o.key).weaponType;t[d].total++,s.includes(n)&&t[d].current++})),[e,s]),U=r.useMemo(()=>w(he,t=>Object.entries(e.chars.data).forEach(([n,h])=>{const o=D(h.key,e.gender).elementKey;t[o].total++,s.includes(n)&&t[o].current++})),[e,s]),V=r.useMemo(()=>w(pe,t=>Object.entries(e.chars.data).forEach(([n,h])=>{const o=D(h.key,e.gender).rarity;t[o].total++,s.includes(n)&&t[o].current++})),[e,s]),{numShow:M,setTriggerElement:q}=ge(De[_],s.length),y=r.useMemo(()=>s.slice(0,M),[s,M]),J=s.length!==f?`${s.length}/${f}`:`${f}`,Q={numShowing:y.length,total:J,t:u,namespace:"page_character"},L={sortKeys:[...je],value:z,onChange:t=>e.displayCharacter.set({sortType:t}),ascending:G,onChangeAsc:t=>e.displayCharacter.set({ascending:t})};return C(W,{my:1,display:"flex",flexDirection:"column",gap:1,children:[p&&a(ke,{characterKey:p,onClose:()=>i("/characters")}),a(r.Suspense,{fallback:!1,children:a(Ke,{newFirst:!0,show:$,onHide:()=>k(!1),onSelect:B})}),a(ce,{children:C(oe,{sx:{display:"flex",flexDirection:"column",gap:1},children:[C(c,{container:!0,spacing:1,children:[a(c,{item:!0,children:a(ve,{sx:{height:"100%"},onChange:t=>e.displayCharacter.set({weaponType:t}),value:O,totals:H,size:"small"})}),a(c,{item:!0,children:a(we,{sx:{height:"100%"},onChange:t=>e.displayCharacter.set({element:t}),value:P,totals:U,size:"small"})}),a(c,{item:!0,children:a(xe,{sx:{height:"100%"},onChange:t=>e.displayCharacter.set({rarity:t}),value:R,totals:V,size:"small"})}),a(c,{item:!0,flexGrow:1}),a(c,{item:!0,children:a(fe,{autoFocus:!0,value:S,onChange:t=>I(t.target.value),label:u("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),a(W,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:a(ye,{showingTextProps:Q,sortByButtonProps:L})})]})}),a(ie,{fullWidth:!0,onClick:()=>k(!0),color:"info",startIcon:a(Ce,{}),children:u`addNew`}),a(r.Suspense,{fallback:a(E,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:a(c,{container:!0,spacing:1,columns:Ee,children:y.map(t=>a(c,{item:!0,xs:1,children:a(Te,{characterKey:t,onClick:()=>i(`${t}`),hideStats:!0})},t))})}),s.length!==y.length&&a(E,{ref:t=>{t&&q(t)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{it as default};
