import{av as Le,au as we,aw as J,ax as C,e as m,ay as De,az as oe,dv as E,j as A,aA as z,aB as Re,b0 as W,dL as Ee,cm as ze,d6 as Ue,aR as He,dd as be,aV as qe,Q as Ae,p as n,u as ce,n as f,K as v,bo as ge,by as ae,ao as ie,T as S,V as Je,b8 as Qe,D as Q,c9 as Ye,dM as g,dN as Ke,dO as Xe,bW as Ce,B as Y,dP as Me,dQ as Ze,dR as et,a4 as tt,dS as nt,dT as st,a3 as at,a2 as ot,b2 as de,b as K,b6 as O,cI as $,dU as T,br as Pe,bq as Oe,C as re,Y as $e,dV as it,J as w,U as ve,t as rt,s as lt,W as ct,R as dt,_ as ut}from"./index-bfebd7fd.js";import{E as Ie,n as pt,T as mt,x as ft,v as ht,w as xt,u as _}from"./index-cf51de3d.js";import{u as yt}from"./useWeapon-6f6754ab.js";import{d as bt}from"./Close-34ee9a70.js";import{L as gt,a as Ct,b as vt}from"./ConditionalWrapper-a52d1b9a.js";import{D as I}from"./DataContext-a9439cc8.js";import{d as It,a as St}from"./InfoTooltip-7e5b7354.js";import{C as U,B as ue}from"./ColoredText-4c99d74a.js";import{S as H}from"./SqBadge-a8aaf110.js";import{B as kt}from"./BootstrapTooltip-3862c538.js";import{G as Lt}from"./Groups-fb117259.js";import{M as q,D as pe}from"./DropdownButton-216f8e5f.js";import{e as wt}from"./StarDisplay-45015a21.js";import{g as Dt}from"./index-e2a4221c.js";import{C as Rt}from"./CardHeader-38cbf163.js";function At(e){return we("MuiListItem",e)}const Mt=Le("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),P=Mt;function Pt(e){return we("MuiListItemSecondaryAction",e)}Le("MuiListItemSecondaryAction",["root","disableGutters"]);const Ot=["className"],$t=e=>{const{disableGutters:t,classes:s}=e;return Re({root:["root",t&&"disableGutters"]},Pt,s)},Tt=J("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.disableGutters&&t.disableGutters]}})(({ownerState:e})=>C({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),Te=m.forwardRef(function(t,s){const a=De({props:t,name:"MuiListItemSecondaryAction"}),{className:d}=a,i=oe(a,Ot),c=m.useContext(E),r=C({},a,{disableGutters:c.disableGutters}),u=$t(r);return A.jsx(Tt,C({className:z(u.root,d),ownerState:r,ref:s},i))});Te.muiName="ListItemSecondaryAction";const jt=Te,Bt=["className"],Ft=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Nt=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.alignItems==="flex-start"&&t.alignItemsFlexStart,s.divider&&t.divider,!s.disableGutters&&t.gutters,!s.disablePadding&&t.padding,s.button&&t.button,s.hasSecondaryAction&&t.secondaryAction]},Vt=e=>{const{alignItems:t,button:s,classes:a,dense:d,disabled:i,disableGutters:c,disablePadding:r,divider:u,hasSecondaryAction:o,selected:p}=e;return Re({root:["root",d&&"dense",!c&&"gutters",!r&&"padding",u&&"divider",i&&"disabled",s&&"button",t==="flex-start"&&"alignItemsFlexStart",o&&"secondaryAction",p&&"selected"],container:["container"]},At,a)},Gt=J("div",{name:"MuiListItem",slot:"Root",overridesResolver:Nt})(({theme:e,ownerState:t})=>C({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&C({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${Ee.root}`]:{paddingRight:48}},{[`&.${P.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${P.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:W(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${P.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:W(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${P.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:W(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:W(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),Wt=J("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),_t=m.forwardRef(function(t,s){const a=De({props:t,name:"MuiListItem"}),{alignItems:d="center",autoFocus:i=!1,button:c=!1,children:r,className:u,component:o,components:p={},componentsProps:b={},ContainerComponent:x="li",ContainerProps:{className:h}={},dense:l=!1,disabled:k=!1,disableGutters:j=!1,disablePadding:X=!1,divider:Z=!1,focusVisibleClassName:ee,secondaryAction:N,selected:te=!1,slotProps:B={},slots:y={}}=a,L=oe(a.ContainerProps,Bt),_e=oe(a,Ft),fe=m.useContext(E),ne=m.useMemo(()=>({dense:l||fe.dense||!1,alignItems:d,disableGutters:j}),[d,fe.dense,l,j]),se=m.useRef(null);ze(()=>{i&&se.current&&se.current.focus()},[i]);const M=m.Children.toArray(r),he=M.length&&Ue(M[M.length-1],["ListItemSecondaryAction"]),V=C({},a,{alignItems:d,autoFocus:i,button:c,dense:ne.dense,disabled:k,disableGutters:j,disablePadding:X,divider:Z,hasSecondaryAction:he,selected:te}),xe=Vt(V),ye=He(se,s),G=y.root||p.Root||Gt,F=B.root||b.root||{},D=C({className:z(xe.root,F.className,u),disabled:k},_e);let R=o||"li";return c&&(D.component=o||"div",D.focusVisibleClassName=z(P.focusVisible,ee),R=qe),he?(R=!D.component&&!o?"div":R,x==="li"&&(R==="li"?R="div":D.component==="li"&&(D.component="div")),A.jsx(E.Provider,{value:ne,children:A.jsxs(Wt,C({as:x,className:z(xe.container,h),ref:ye,ownerState:V},L,{children:[A.jsx(G,C({},F,!be(G)&&{as:R,ownerState:C({},V,F.ownerState)},D,{children:M})),M.pop()]}))})):A.jsx(E.Provider,{value:ne,children:A.jsxs(G,C({},F,{as:R,ref:ye},!be(G)&&{ownerState:C({},V,F.ownerState)},D,{children:[M,N&&A.jsx(jt,{children:N})]}))})}),je=_t,Be=m.createContext({setFormulaData:()=>{},onModalOpen:()=>{},onModalClose:()=>{}});function Sn({children:e}){const[t,s,a]=Ae(),[[d,i],c]=m.useState([void 0,void 0]),r=m.useCallback((u,o)=>{u&&o?s():a(),c([u,o])},[s,a]);return n(Be.Provider,{value:{setFormulaData:r,data:d,node:i,modalOpen:t,onModalOpen:s,onModalClose:a},children:e})}const Se={melt:{cryo:"pyro",pyro:"cryo"},vaporize:{hydro:"pyro",pyro:"hydro"}},ke={mx:.25,px:.25};function Et({reaction:e,trigger:t}){const{t:s}=ce("sheet_gen");t||(t=Object.keys(Se[e])[0]);const a=Se[e][t];return a?f(v,{display:"flex",alignItems:"center",children:[n(U,{color:"melt",children:s(`reaction.${e}`)}),n(H,{sx:ke,color:a,children:n(Ie,{ele:a,iconProps:ge})}),"+",n(H,{sx:ke,color:t,children:n(Ie,{ele:t,iconProps:ge})})]}):null}function Fe({fields:e,bgt:t="normal"}){return n(Ne,{sx:{m:0},bgt:t,children:e.map((s,a)=>n(zt,{field:s,component:je},a))})}function zt({field:e,component:t}){const{data:s,oldData:a}=m.useContext(I);if(!m.useMemo(()=>{var i;return((i=e==null?void 0:e.canShow)==null?void 0:i.call(e,s))??!0},[e,s]))return null;if("node"in e){const i=s.get(e.node);if(i.isEmpty)return null;if(a){const c=a.get(e.node),r=c.isEmpty?0:c.value;return n(le,{node:i,oldValue:r,component:t})}else return n(le,{node:i,component:t})}return n(Ut,{field:e,component:t})}function Ut({field:e,component:t}){var r;const{data:s}=m.useContext(I),a=g(e.value,s),d=g(e.variant,s),i=e.text&&n("span",{children:e.text}),c=e.textSuffix&&f("span",{children:[" ",e.textSuffix]});return f(v,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:t,children:[f(S,{color:`${d}.main`,children:[i,c]}),f(S,{children:[typeof a=="number"?(r=a.toFixed)==null?void 0:r.call(a,e.fixed):a,e.unit]})]})}function le({node:e,oldValue:t,component:s,emphasize:a}){const{data:d}=m.useContext(I),{setFormulaData:i}=m.useContext(Be),c=m.useCallback(()=>i(d,e),[i,d,e]);if(e.isEmpty)return null;const{multi:r}=e.info,u=r&&f("span",{children:[r,"×"]});let o=!1;if(t!==void 0){const p=e.value-t,b=ae(Math.abs(p/t),"%",e.info.fixed);o=f(ie,{children:[n("span",{children:ae(t,e.info.unit,e.info.fixed)}),Math.abs(p)>1e-4&&f(ie,{children:[f(U,{color:p>0?"success":"error",children:[p>0?"+":"",ae(p,e.info.unit,e.info.fixed)]}),e.info.unit!=="%"&&t!==0&&f(U,{color:p>0?"success":"error",children:["(",b,")"]})]})]})}else o=n("span",{children:pt(e)});return f(v,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1,boxShadow:a?"0px 0px 0px 2px red inset":void 0},component:s,children:[n(Ht,{node:e}),f(S,{sx:{display:"flex",gap:.5,alignItems:"center",justifyContent:"flex-end",flexWrap:"wrap"},children:[u,o]}),!!e.formula&&n(kt,{placement:"top",title:n(S,{children:f(m.Suspense,{fallback:n(Je,{variant:"rectangular",width:300,height:30}),children:[Qe.includes(e.info.variant)&&f(v,{sx:{display:"inline-flex",gap:1,mr:1},children:[n(v,{children:n(Et,{reaction:e.info.variant,trigger:e.info.subVariant})}),n(Q,{orientation:"vertical",flexItem:!0})]}),n("span",{children:e.formula})]})}),children:n(It,{onClick:c,fontSize:"inherit",sx:{cursor:"help"}})})]})}function Ht({node:e}){const{textSuffix:t}=e.info,s=t&&f("span",{children:[" ",t]});return f(S,{component:"div",sx:{display:"flex",gap:1,alignItems:"center",marginRight:"auto"},children:[!!e.info.isTeamBuff&&n(Lt,{}),e.info.icon,f(U,{color:e.info.variant,children:[e.info.name,s]})]})}const Ne=J(Ye)(({theme:e,bgt:t="normal"})=>{const s=t==="light"?"contentLight":t==="dark"?"contentDark":"contentNormal";return{borderRadius:e.shape.borderRadius,overflow:"hidden",margin:0,"> .MuiListItem-root:nth-of-type(even)":{backgroundColor:e.palette[s].main},"> .MuiListItem-root:nth-of-type(odd)":{backgroundColor:e.palette[s].dark}}});function qt({level:e,ascension:t,setBoth:s,useLow:a=!1,disabled:d=!1}){const{t:i}=ce("ui"),c=a?et:Ce,r=m.useCallback((o=1)=>{o=tt(o,1,a?nt:st);const p=c.findIndex(b=>o<=b);s({level:o,ascension:p})},[s,c,a]),u=m.useCallback(()=>{const o=c.findIndex(p=>e!==90&&e===p);s(t===o?{ascension:t+1}:{ascension:o})},[s,c,t,e]);return f(ue,{sx:{bgcolor:o=>o.palette.contentNormal.main},children:[n(ot,{children:n(at,{onChange:r,value:e,startAdornment:"Lv. ",disabled:d,inputProps:{min:1,max:90,sx:{textAlign:"center",width:"3em"}},sx:{height:"100%",pl:2}})}),n(Y,{sx:{pl:1,whiteSpace:"nowrap"},disabled:!(a?Ke:Xe)(e)||d,onClick:u,children:f("strong",{children:["/ ",Ce[t]]})}),n(pe,{title:i("selectlevel"),sx:{flexGrow:1},disabled:d,children:[...a?Me:Ze].map(([o,p])=>{const b=o===e&&p===t;return n(q,{selected:b,disabled:b,onClick:()=>s({level:o,ascension:p}),children:o===c[p]?`Lv. ${o}`:`Lv. ${o}/${c[p]}`},`${o}/${p}`)})})]})}function Jt({avatar:e,title:t,action:s}){return f(v,{display:"flex",gap:1,p:2,alignItems:"center",children:[e,n(S,{variant:"subtitle1",sx:{flexGrow:1},children:t}),s&&n(S,{variant:"caption",children:s})]})}function Qt({conditional:e,disabled:t=!1}){const{data:s}=m.useContext(I);return Object.keys(g(e.states,s)).length===1&&"path"in e?n(Yt,{conditional:e,disabled:t}):"path"in e?n(Kt,{conditional:e,disabled:t}):n(Xt,{conditional:e,disabled:t})}function Yt({conditional:e,disabled:t}){const{teamId:s,teamCharId:a}=m.useContext(de),{data:d}=m.useContext(I),i=K(),c=m.useCallback(x=>{e.path[0]==="resonance"?i.teams.set(s,h=>{const l=O(h.conditional);x?$(l,e.path,x):T(l,e.path),h.conditional=l}):i.teamChars.set(a,h=>{const l=O(h.conditional);x?$(l,e.path,x):T(l,e.path),h.conditional=l})},[i,e.path,a,s]),r=d.get(e.value).value,[u,o]=Object.entries(g(e.states,d))[0],p=Ge(o.name),b=me(e.name);return f(Y,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:r?"success":"primary",onClick:()=>c(r?void 0:u),disabled:t,startIcon:r?n(Pe,{}):n(Oe,{}),children:[b," ",p]})}function Kt({conditional:e,disabled:t}){const{teamId:s,teamCharId:a}=m.useContext(de),{data:d}=m.useContext(I),i=K(),c=m.useCallback(x=>{e.path[0]==="resonance"?i.teams.set(s,h=>{const l=O(h.conditional);x?$(l,e.path,x):T(l,e.path),h.conditional=l}):i.teamChars.set(a,h=>{const l=O(h.conditional);x?$(l,e.path,x):T(l,e.path),h.conditional=l})},[i,e.path,a,s]),r=d.get(e.value).value,u=g(e.states,d),o=r?u[r]:void 0,p=o?Ge(o.name):n(H,{color:"secondary",children:"Not Active"}),b=me(e.name);return f(pe,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:r&&o?"success":"primary",title:f("span",{children:[b," ",p]}),disabled:t,children:[n(q,{onClick:()=>c(),selected:!o,disabled:!o,children:n("span",{children:"Not Active"})}),n(Q,{}),Object.entries(u).map(([x,h])=>n(q,{onClick:()=>c(x),selected:r===x,disabled:r===x,children:h.name},x))]})}function Xt({conditional:e,disabled:t}){const{teamId:s,teamCharId:a}=m.useContext(de),{data:d}=m.useContext(I),i=K(),c=m.useCallback((r,u)=>{r[0]==="resonance"?i.teamChars.set(s,o=>{const p=O(o.conditional);u?$(p,r,u):T(p,r),o.conditional=p}):i.teamChars.set(a,o=>{const p=O(o.conditional);u?$(p,r,u):T(p,r),o.conditional=p})},[i,a,s]);return n(ue,{fullWidth:!0,orientation:"vertical",disableElevation:!0,color:"secondary",children:Object.entries(g(e.states,d)).map(([r,u])=>{const o=d.get(u.value).value,p=o===r;return n(Y,{color:p?"success":"primary",disabled:t,fullWidth:!0,onClick:()=>c(u.path,o?void 0:r),size:"small",startIcon:p?n(Pe,{}):n(Oe,{}),sx:{borderRadius:0},children:me(u.name)},r)})})}function Ve(e){return typeof e!="string"}function Ge(e){if(!e)return"";let t="primary",s=e;return e&&Ve(e)&&e.props.color&&(t=e.props.color,s=n("span",{children:e.props.children})),n(H,{sx:{ml:.5},color:t,children:s})}function me(e){if(Ve(e)){const t=e.props.key18,s=e.props.ns,a=e.props.values;return n(mt,{ns:s,key18:t,values:a,useBadge:!0})}return e}function Zt({conditional:e,hideHeader:t=!1,hideDesc:s=!1,disabled:a=!1,bgt:d="normal"}){var r;const{data:i}=m.useContext(I);let c;if("path"in e){const u=i.get(e.value).value,o=g(e.states,i);c=u&&((r=o[u])==null?void 0:r.fields)}else{const u=g(e.states,i);c=Object.values(u).flatMap(o=>i.get(o.value).value?o.fields:[])}return f($e,{bgt:d,children:[!g(t,e)&&n(We,{header:e.header,hideDesc:s}),n(re,{sx:{p:0,"&:last-child":{pb:0}},children:n(Qt,{conditional:e,disabled:a})}),c&&n(Fe,{bgt:d,fields:c})]})}function en({sections:e,teamBuffOnly:t,hideDesc:s=!1,hideHeader:a=!1,disabled:d=!1,bgt:i="normal"}){const{data:c}=m.useContext(I);if(!e.length)return null;const r=e.map((u,o)=>u.canShow&&!c.get(u.canShow).value||t&&!u.teamBuff?null:n(tn,{section:u,hideDesc:s,hideHeader:a,disabled:d,bgt:i},o)).filter(u=>u);return r.length?n(v,{display:"flex",flexDirection:"column",gap:1,children:r}):null}function tn({section:e,hideDesc:t=!1,hideHeader:s=!1,disabled:a=!1,bgt:d="normal"}){return"fields"in e?n(nn,{section:e,hideDesc:t,hideHeader:s,bgt:d}):"states"in e?n(Zt,{conditional:e,hideDesc:t,hideHeader:s,disabled:a,bgt:d}):n(sn,{section:e})}function nn({section:e,hideDesc:t,hideHeader:s,bgt:a="normal"}){return f($e,{bgt:a,children:[!g(s,e)&&e.header&&n(We,{header:e.header,hideDesc:t,hideDivider:e.fields.length===0}),n(Fe,{bgt:a,fields:e.fields})]})}function sn({section:e}){const{data:t}=m.useContext(I);return n("div",{children:g(e.text,t)})}function We({header:e,hideDesc:t,hideDivider:s}){const{data:a}=m.useContext(I),{icon:d,title:i,action:c}=e,r=g(d,a),u=!t&&g(e.description,a);return f(ie,{children:[n(Jt,{avatar:r,title:t?i:f("span",{children:[i,n(St,{title:n(S,{children:u})})]}),action:c}),!s&&n(Q,{})]})}function an({refinement:e,setRefinement:t,disabled:s=!1}){const{t:a}=ce("ui");return n(pe,{title:a("refinement",{value:e}),disabled:s,children:it.map(d=>n(q,{onClick:()=>t(d),selected:e===d,disabled:e===d,children:a("refinement",{value:d})},d))})}const on=dt.lazy(()=>ut(()=>import("./WeaponSelectionModal-b564035a.js"),["./WeaponSelectionModal-b564035a.js","./index-bfebd7fd.js","./index-5769a372.css","./index-cf51de3d.js","./ColoredText-4c99d74a.js","./SqBadge-a8aaf110.js","./Close-34ee9a70.js","./index-e2a4221c.js","./totalUtils-bb93e1e1.js","./StarDisplay-45015a21.js","./DropdownButton-216f8e5f.js","./WeaponCard-97767c2b.js","./SolidToggleButtonGroup-dfbfec47.js","./useWeapon-6f6754ab.js","./ConditionalWrapper-a52d1b9a.js","./CardActionArea-8acd5ee2.js"],import.meta.url));function rn({weaponId:e,footer:t=!1,onClose:s,extraButtons:a}){const{data:d}=m.useContext(I),i=K(),c=yt(e),{key:r="",level:u=0,refinement:o=1,ascension:p=0,lock:b,location:x="",id:h}=c??{},l=r?Dt(r):void 0,k=m.useCallback(y=>{i.weapons.set(e,y)},[e,i]),j=m.useCallback(y=>h&&i.weapons.set(h,{location:y}),[i,h]),X=m.useCallback(y=>y.weaponTypeKey===(l==null?void 0:l.weaponType),[l]),[Z,ee,N]=Ae(),te=r?ft(r,p>=2):"";m.useEffect(()=>{if(!(!l||!k||l.key!==(c==null?void 0:c.key))&&l.rarity<=2&&(u>70||p>4)){const[y,L]=Me[0];k({level:y,ascension:L})}},[l,c,k,u,p]);const B=m.useMemo(()=>l&&c&&ht([l.data,xt(c)]),[l,c]);return n(ct,{open:!!e,onClose:s,containerProps:{maxWidth:"md"},children:f(lt,{children:[n(on,{ascension:p,show:Z,onHide:N,onSelect:y=>k({key:y}),weaponTypeFilter:l&&l.weaponType}),n(re,{children:l&&B&&f(w,{container:!0,spacing:1.5,children:[n(w,{item:!0,xs:12,sm:3,children:f(w,{container:!0,spacing:1.5,children:[n(w,{item:!0,xs:6,sm:12,children:f(v,{sx:{position:"relative",display:"flex"},children:[n(v,{component:"img",src:te,className:`grad-${l.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}}),n(ve,{color:"primary",onClick:()=>h&&i.weapons.set(h,{lock:!b}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:b?n(gt,{}):n(Ct,{})})]})}),n(w,{item:!0,xs:6,sm:12,children:n(S,{children:n("small",{children:l.description})})})]})}),f(w,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[f(v,{display:"flex",gap:1,flexWrap:"wrap",children:[f(ue,{children:[n(Y,{color:"info",onClick:ee,children:(l==null?void 0:l.name)??"Select a Weapon"}),(l==null?void 0:l.hasRefinement)&&n(an,{refinement:o,setRefinement:y=>k({refinement:y})}),a]}),s&&n(ve,{onClick:s,sx:{marginLeft:"auto"},children:n(bt,{})})]}),n(v,{display:"flex",gap:1,flexWrap:"wrap",children:l&&n(qt,{level:u,ascension:p,setBoth:k,useLow:!l.hasRefinement})}),n(wt,{stars:l.rarity}),n(S,{variant:"subtitle1",children:n("strong",{children:l.passiveName})}),n(S,{gutterBottom:!0,children:l.passiveName&&l.passiveDescription(B.get(_.weapon.refinement).value-1)}),f(v,{display:"flex",flexDirection:"column",gap:1,children:[f(rt,{children:[n(Rt,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),n(Q,{}),n(Ne,{children:[_.weapon.main,_.weapon.sub,_.weapon.sub2].map(y=>{const L=B.get(y);return L.isEmpty||!L.value?null:n(le,{node:L,component:je},JSON.stringify(L.info))})})]}),d&&l.document&&n(en,{sections:l.document})]})]})]})}),t&&h&&n(re,{sx:{py:1},children:n(w,{container:!0,spacing:1,children:n(w,{item:!0,flexGrow:1,children:n(vt,{location:x,setLocation:j,filter:X,autoCompleteProps:{getOptionDisabled:y=>!y.key}})})})})]})})}const kn=Object.freeze(Object.defineProperty({__proto__:null,default:rn},Symbol.toStringTag,{value:"Module"}));export{Et as A,Jt as C,en as D,Be as F,je as L,Ht as N,an as R,rn as W,le as a,Ne as b,qt as c,Sn as d,kn as e};
