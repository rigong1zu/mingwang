import{c as J,b5 as K,b6 as L,u as b,r as h,j as e,b7 as S,J as O,K as Q,O as Y,Q as W,B as f,b8 as X,z as E,b9 as Z,n as M,ba as A,bb as ee,bc as ae,bd as R,be as w,bf as se,d as te,bg as re,bh as ne,bi as le,bj as ie,bk as de,bl as ce,bm as oe,bn as me,bo as pe,bp as ue,bq as xe,br as he,bs as T,I as z,bt as ge,Y as fe,b2 as P,bu as _,bv as ye,bw as je,U as H,bx as ke,H as we,by as ve,bz as be,bA as Ne,bB as Ce}from"./index.b12a37b1.js";import{u as Me,a as Se}from"./hook.04a71eda.js";import{A as ze}from"./activity.591f45b2.js";import{M as F}from"./minimize.cf972035.js";import{S as Ie}from"./save.418a132c.js";/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=J("Import",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);async function Ae(a){try{return(await K.post("/admin/market/update",a)).data}catch(t){return console.warn(t),{status:!1,error:L(t)}}}const v=()=>he(8);function Te(a,t){switch(t.type){case"set":return[...t.payload.map(s=>({...s,seed:v()}))];case"add":return[...a,{...t.payload,seed:v()}];case"add-multiple":return[...a,...t.payload.map(s=>({id:s.id||"",name:s.name||"",free:!1,auth:!1,description:s.description||"",high_context:s.high_context||!1,default:s.default||!1,tag:s.tag||[],avatar:s.avatar||w[0],seed:v()}))];case"new":return[...a,{id:"",name:"",free:!1,auth:!1,description:"",high_context:!1,default:!1,tag:[],avatar:w[0],seed:v()}];case"new-template":return[{id:t.payload.id,name:t.payload.name,free:!1,auth:!1,description:"",high_context:!1,default:!0,tag:[],avatar:w[0],seed:v()},...a];case"batch-new-template":return[...t.payload.map(s=>({id:s.id,name:s.name,free:!1,auth:!1,description:"",high_context:!1,default:!0,tag:[],avatar:w[0],seed:v()})),...a];case"remove":let{idx:u}=t.payload;return[...a.slice(0,u),...a.slice(u+1)];case"update":let{index:l,data:r}=t.payload;return[...a.slice(0,l),r,...a.slice(l+1)];case"update-id":return[...a.map((s,o)=>o===t.payload.idx?{...s,id:t.payload.id}:s)];case"update-name":return[...a.map((s,o)=>o===t.payload.idx?{...s,name:t.payload.name}:s)];case"update-description":return[...a.map((s,o)=>o===t.payload.idx?{...s,description:t.payload.description}:s)];case"update-context":return[...a.map((s,o)=>o===t.payload.idx?{...s,high_context:t.payload.context}:s)];case"update-default":return[...a.map((s,o)=>o===t.payload.idx?{...s,default:t.payload.default}:s)];case"update-tags":return[...a.map((s,o)=>o===t.payload.idx?{...s,tag:t.payload.tags}:s)];case"add-tag":return[...a.map((s,o)=>{if(o===t.payload.idx){const k=s.tag||[];return k.push(t.payload.tag),{...s,tag:[...k]}}return s})];case"remove-tag":return[...a.map((s,o)=>{if(o===t.payload.idx){const k=s.tag||[];return{...s,tag:k.filter(C=>C!==t.payload.tag)}}return s})];case"set-avatar":return[...a.map((s,o)=>o===t.payload.idx?{...s,avatar:t.payload.avatar}:s)];case"replace":const{from:n,to:d}=t.payload,[p]=a.splice(n,1);return a.splice(d,0,p),[...a];case"add-below":return[...a.slice(0,t.payload.idx+1),{id:"",name:"",free:!1,auth:!1,description:"",high_context:!1,default:!1,tag:[],avatar:w[0],seed:v()},...a.slice(t.payload.idx+1)];case"upward":if(t.payload.idx===0)return a;const c=a[t.payload.idx];return a[t.payload.idx]=a[t.payload.idx-1],a[t.payload.idx-1]=c,[...a];case"downward":if(t.payload.idx===a.length-1)return a;const g=a[t.payload.idx];return a[t.payload.idx]=a[t.payload.idx+1],a[t.payload.idx+1]=g,[...a];case"move":const{fromIndex:i,toIndex:x}=t.payload,y=a[i];return a.splice(i,1),a.splice(x,0,y),[...a];default:throw new Error}}function Pe({tag:a,idx:t,dispatch:u}){const{t:l}=b(),r=h.useMemo(()=>{const n=a||[];return je.reduce((d,p)=>(d[p]=n.includes(p),d),{})},[a]);return e.jsx("div",{className:"market-tags",children:r&&Object.keys(r).map(n=>e.jsx(H,{variant:"outline",size:"sm",pressed:r[n],className:"market-tag",onPressedChange:d=>{u({type:d?"add-tag":"remove-tag",payload:{idx:t,tag:n}})},children:l(`tag.${n}`)},n))})}function _e({image:a,idx:t,dispatch:u}){const{t:l}=b(),[r,n]=h.useState(!1),[d,p]=h.useState(""),c=h.useMemo(()=>r?[...w,a]:w,[r,a]),g=i=>u({type:"set-avatar",payload:{idx:t,avatar:i}});return e.jsxs("div",{className:"market-image-wrapper",children:[e.jsx("div",{className:"market-images",children:c.map(i=>e.jsx(H,{variant:"outline",size:"sm",pressed:i===a,className:M("market-image",i===a?"active":""),onPressedChange:x=>{x&&(r&&n(!1),g(i))},children:i?e.jsx("img",{src:ke(i)?d:`/icons/${i}`,alt:i}):e.jsx(we,{className:"h-6 w-6"})},i))}),e.jsxs("div",{className:"market-custom-image",children:[e.jsxs("div",{className:"market-checkbox",children:[e.jsx(ve,{checked:r,onCheckedChange:i=>{const x=!!i;n(x),g(x?d:w[0])}}),l("admin.market.custom-image")]}),e.jsx(z,{value:d,placeholder:l("admin.market.custom-image-placeholder"),onChange:i=>{p(i.target.value),g(i.target.value)},disabled:!r})]})]})}function Ee({model:a,form:t,stacked:u,dispatch:l,index:r,channelModels:n,forwardRef:d,...p}){const{t:c}=b(),[g,i]=h.useState(!1),x=h.useMemo(()=>a.id.trim().length>0&&a.name.trim().length>0,[a]);h.useEffect(()=>{i(u)},[u]);const y=({stacked:s})=>e.jsxs("div",{className:"market-row",children:[!s&&e.jsx("div",{className:"grow"}),e.jsx(f,{size:"icon",variant:"outline",onClick:()=>l({type:"add-below",payload:{idx:r}}),children:e.jsx(R,{className:"h-4 w-4"})}),!s&&e.jsx(f,{size:"icon",variant:"outline",onClick:()=>l({type:"upward",payload:{idx:r}}),disabled:r===0,children:e.jsx(be,{className:"h-4 w-4"})}),!s&&e.jsx(f,{size:"icon",variant:"outline",onClick:()=>l({type:"downward",payload:{idx:r}}),disabled:r===t.length-1,children:e.jsx(Ne,{className:"h-4 w-4"})}),e.jsx(f,{size:"icon",variant:"outline",onClick:()=>i(!g),children:g?e.jsx(E,{className:"h-4 w-4"}):e.jsx(F,{className:"h-4 w-4"})}),e.jsx(f,{size:"icon",onClick:()=>l({type:"remove",payload:{idx:r}}),children:e.jsx(Ce,{className:"h-4 w-4"})})]});return g?e.jsx("div",{className:M("market-item",!x&&"error"),...p,ref:d,children:e.jsxs("div",{className:"model-wrapper",children:[e.jsxs("div",{className:"market-row",children:[e.jsxs("span",{children:[e.jsx(T,{}),c("admin.market.model-name")]}),e.jsx(z,{value:a.name,placeholder:c("admin.market.model-name-placeholder"),onChange:s=>{l({type:"update-name",payload:{idx:r,name:s.target.value}})}})]}),e.jsxs("div",{className:"market-row",children:[e.jsxs("span",{children:[e.jsx(T,{}),c("admin.market.model-id")]}),e.jsx(ge,{value:a.id,onChange:s=>{l({type:"update-id",payload:{idx:r,id:s}})},className:"model-combobox",list:n,placeholder:c("admin.market.model-id-placeholder")})]}),e.jsxs("div",{className:"market-row",children:[e.jsx("span",{children:c("admin.market.model-description")}),e.jsx(fe,{value:a.description||"",placeholder:c("admin.market.model-description-placeholder"),onChange:s=>{l({type:"update-description",payload:{idx:r,description:s.target.value}})}})]}),e.jsxs("div",{className:"market-row",children:[e.jsxs("span",{children:[c("admin.market.model-context"),e.jsx(P,{content:c("admin.market.model-context-tip")})]}),e.jsx(_,{className:"ml-auto",checked:a.high_context,onCheckedChange:s=>{l({type:"update-context",payload:{idx:r,context:s}})}})]}),e.jsxs("div",{className:"market-row",children:[e.jsxs("span",{children:[c("admin.market.model-is-default"),e.jsx(P,{content:c("admin.market.model-is-default-tip")})]}),e.jsx(_,{className:"ml-auto",checked:a.default,onCheckedChange:s=>{l({type:"update-default",payload:{idx:r,default:s}})}})]}),e.jsxs("div",{className:"market-row",children:[e.jsx("span",{children:c("admin.market.model-tag")}),e.jsx(Pe,{tag:a.tag,idx:r,dispatch:l})]}),e.jsxs("div",{className:"market-row",children:[e.jsx("span",{children:c("admin.market.model-image")}),e.jsx(_e,{image:a.avatar,idx:r,dispatch:l})]}),e.jsx(y,{})]})}):e.jsxs("div",{className:M("market-item stacked",!x&&"error"),...p,ref:d,children:[e.jsx(ye,{className:"h-4 w-4 mr-2 cursor-pointer"}),e.jsx(z,{value:a.name,placeholder:c("admin.market.model-name-placeholder"),className:"grow mr-2",onChange:s=>{l({type:"update-name",payload:{idx:r,name:s.target.value}})}}),e.jsx(y,{stacked:!0})]})}function Re({form:a,dispatch:t,stacked:u,channelModels:l}){return a.map((r,n)=>e.jsx(se,{draggableId:r.seed,index:n,children:d=>e.jsx(Ee,{model:r,form:a,stacked:u,dispatch:t,index:n,channelModels:l,forwardRef:d.innerRef,...d.draggableProps,...d.dragHandleProps},n)},r.seed))}function He({open:a,setOpen:t,allModels:u,supportModels:l,onConfirm:r}){const{t:n}=b(),[d,p]=h.useState([]),{toast:c}=te(),g=h.useMemo(()=>d.map(s=>s.id),[d]),i=h.useMemo(()=>l.filter(s=>g.includes(s.id)).map(s=>s.id),[g,l]),x=h.useMemo(()=>g.filter(s=>!i.includes(s)),[g,i]),y=h.useMemo(()=>x.filter(s=>u.includes(s)),[x,u]);return e.jsxs(e.Fragment,{children:[e.jsx(re,{open:d.length>0,onOpenChange:s=>{s||(t(!1),p([]))},children:e.jsxs(ne,{children:[e.jsxs(le,{children:[e.jsx(ie,{children:n("admin.market.sync-option")}),e.jsx(de,{children:n("admin.market.sync-items",{length:g.length,exist:i.length,new:x.length,support:y.length})})]}),e.jsxs(ce,{children:[e.jsx(f,{variant:"outline",loading:!0,onClick:async()=>{const s=d.filter(o=>x.includes(o.id));await r(s)&&(p([]),t(!1))},disabled:x.length===0,children:n("admin.market.sync-all",{length:x.length})}),e.jsx(f,{loading:!0,onClick:async()=>{const s=d.filter(o=>y.includes(o.id));await r(s)&&(p([]),t(!1))},disabled:y.length===0,children:n("admin.market.sync-self",{length:y.length})})]})]})}),e.jsx(oe,{title:n("admin.market.sync"),name:n("admin.market.sync-site"),placeholder:n("admin.market.sync-placeholder"),open:a,setOpen:t,type:me.Text,defaultValue:"https://api.chatnio.net",onSubmit:async s=>{const o=pe("/v1/market",{endpoint:s}),k=await ue({endpoint:s});return k.length===0?(c({title:n("admin.market.sync-failed"),description:n("admin.market.sync-failed-prompt",{endpoint:o})}),!1):(p(k),!1)}})]})}function Fe({open:a,models:t,onImport:u,onImportAll:l}){const{t:r}=b();return a&&t.length>0&&e.jsxs("div",{className:"market-alert",children:[e.jsxs("div",{className:"flex flex-row items-center mb-2 whitespace-nowrap select-none",children:[e.jsx(xe,{className:"h-4 w-4 mr-2 translate-y-[1px]"}),e.jsx("span",{children:r("admin.market.not-use")}),e.jsxs(f,{variant:"outline",size:"sm",className:"ml-auto",onClick:l,children:[e.jsx(De,{className:"h-4 w-4 mr-2"}),r("admin.market.import-all")]})]}),e.jsx("div",{className:"market-alert-wrapper",children:t.map((n,d)=>e.jsx(f,{variant:"outline",size:"sm",className:"text-sm",onClick:()=>u(n),children:n},d))})]})}function $e(){const{t:a}=b(),[t,u]=h.useState(!1),[l,r]=h.useState(!1),[n,d]=h.useState(!0),[p,c]=h.useReducer(Te,[]),[g,i]=h.useState(!1),{supportModels:x,update:y}=Me((m,j)=>{u(!m),m&&c({type:"set",payload:j})}),{allModels:s,channelModels:o,update:k}=Se(m=>r(!m)),C=h.useMemo(()=>s.filter(m=>!p.map(j=>j.id).includes(m)),[p,s]),I=t||l,V=async()=>{await y(),await k()},B=async()=>{},U=m=>{const{destination:j,source:N}=m;if(!j||j.index===N.index||j.index===-1)return;const G=N.index,$=j.index;c({type:"move",payload:{fromIndex:G,toIndex:$}})},D=async()=>{const m=p.filter(N=>N.id.trim().length>0&&N.name.trim().length>0),j=await Ae(m);if(!j.status){S(a("admin.market.update-failed"),{description:a("admin.market.update-failed-prompt",{reason:j.error})});return}S(a("admin.market.update-success"),{description:a("admin.market.update-success-prompt")}),await B()},q=async m=>{m.length!==0&&c({type:"add-multiple",payload:[...m]})};return e.jsxs("div",{className:"market",children:[e.jsx(He,{open:g,setOpen:i,allModels:s,supportModels:x,onConfirm:async m=>(await q(m),S(a("admin.market.sync-success"),{description:a("admin.market.sync-success-prompt",{length:m.length})}),!0)}),e.jsxs(O,{className:"admin-card market-card",children:[e.jsx(Q,{children:e.jsx(Y,{children:a("admin.market.title")})}),e.jsxs(W,{children:[e.jsxs("div",{className:"market-actions flex flex-row items-center mb-4",children:[e.jsxs(f,{variant:"outline",className:"whitespace-nowrap",onClick:()=>i(!0),children:[e.jsx(ze,{className:"h-4 w-4 mr-2"}),a("admin.market.sync")]}),e.jsx("div",{className:"grow"}),e.jsx(f,{variant:"outline",size:"icon",className:"mr-2",onClick:()=>d(!n),children:e.jsx(X,{icon:n?e.jsx(E,{}):e.jsx(F,{}),className:"h-4 w-4"})}),e.jsx(f,{size:"icon",variant:"outline",className:"mr-2",onClick:V,children:e.jsx(Z,{className:M("h-4 w-4",I&&"animate-spin")})}),e.jsx(f,{size:"icon",className:"mr-2",loading:!0,onClick:D,children:e.jsx(Ie,{className:"h-4 w-4"})})]}),e.jsx(Fe,{open:!I,models:C,onImport:m=>{c({type:"new-template",payload:{id:m,name:A(m)}})},onImportAll:()=>{c({type:"batch-new-template",payload:C.map(m=>({id:m,name:A(m)}))})}}),e.jsx(ee,{onDragEnd:U,children:e.jsx(ae,{droppableId:"market-list",children:m=>e.jsx("div",{className:"market-list cursor-default",...m.droppableProps,ref:m.innerRef,children:p.length>0?e.jsx(Re,{form:p,dispatch:c,stacked:n,channelModels:o}):e.jsx("p",{className:"align-center text-sm empty",children:a("admin.empty")})})})}),e.jsxs("div",{className:"market-footer flex flex-row items-center mt-4",children:[e.jsx("div",{className:"grow"}),e.jsxs(f,{size:"sm",variant:"outline",className:"mr-2",onClick:()=>c({type:"new"}),children:[e.jsx(R,{className:"h-4 w-4 mr-2"}),a("admin.market.new-model")]}),e.jsx(f,{size:"sm",onClick:D,loading:!0,children:a("admin.market.migrate")})]})]})]})]})}export{$e as default};