import{u as j,b as g,a4 as f,r as i,m as C,cT as u,j as a,B as o,cU as v,cl as N,bq as D,cn as T,L as y,d as B,bg as S,c2 as k,bd as M,bh as E,bi as A,bj as H,bk as I,Y as L,bl as O,bG as R,cV as V,v as z,bR as J,bS as P,cW as U,bU as Y,cJ as q,cX as F,cY as G,J as K,K as Q,O as W,Q as X}from"./index.b12a37b1.js";import{T as _,a as Z,b as w,e as l,d as $,c as d}from"./table.ee96bcb4.js";function aa(s){const{t:e}=j(),{toast:n}=B(),[t,r]=i.useState(!1),[c,x]=i.useState("");async function m(){var b;const h=c.trim();if(h.length===0)return;const p=await G(h);p.status?(n({title:e("admin.post-success"),description:e("admin.post-success-prompt")}),x(""),r(!1),(b=s.onCreated)==null||b.call(s)):n({title:e("admin.post-failed"),description:e("admin.post-failed-prompt",{reason:p.error})})}return a.jsxs(S,{open:t,onOpenChange:r,children:[a.jsx(k,{asChild:!0,children:a.jsxs(o,{variant:"default",children:[a.jsx(M,{className:"w-4 h-4 mr-1"}),e("admin.create-broadcast")]})}),a.jsxs(E,{children:[a.jsxs(A,{children:[a.jsx(H,{children:e("admin.create-broadcast")}),a.jsx(I,{asChild:!0,children:a.jsx("div",{className:"pt-4",children:a.jsx(L,{placeholder:e("admin.broadcast-placeholder"),value:c,rows:5,onChange:h=>x(h.target.value)})})})]}),a.jsxs(O,{children:[a.jsx(R,{asChild:!0,children:a.jsx(o,{variant:"outline",children:e("admin.cancel")})}),a.jsx(o,{variant:"default",onClick:m,loading:!0,children:e("admin.post")})]})]})]})}function sa({item:s}){const{t:e}=j(),[n,t]=i.useState(!1),[r,c]=i.useState("");return a.jsxs(w,{children:[a.jsx(V,{title:e("admin.view"),value:r||s.content,onChange:c,open:n,setOpen:t}),a.jsx(d,{children:s.index}),a.jsx(d,{children:z(s.content,25)}),a.jsx(d,{children:s.poster}),a.jsx(d,{children:s.created_at}),a.jsx(d,{children:a.jsxs(J,{children:[a.jsx(P,{asChild:!0,children:a.jsx(o,{variant:"outline",size:"icon",children:a.jsx(U,{className:"w-4 h-4"})})}),a.jsx(Y,{align:"end",children:a.jsxs(q,{onClick:()=>t(!0),children:[a.jsx(F,{className:"w-4 h-4 mr-1"}),e("admin.view")]})})]})})]})}function ea(){const{t:s}=j(),e=g(f),[n,t]=i.useState([]),[r,c]=i.useState(!1);return C(async()=>{e&&(c(!0),t(await u()),c(!1))},[e]),a.jsxs("div",{className:"broadcast-table whitespace-nowrap",children:[a.jsxs("div",{className:"broadcast-action flex flex-row flex-nowrap w-full mb-4",children:[a.jsx(o,{variant:"outline",size:"icon",className:"select-none",onClick:async()=>{t(await u())},children:a.jsx(v,{className:"w-4 h-4"})}),a.jsx("div",{className:"grow"}),a.jsx(aa,{onCreated:async()=>t(await u())})]}),a.jsxs(N,{className:"pb-2 mb-4",children:[a.jsx(D,{className:"h-4 w-4"}),a.jsx(T,{className:"break-all whitespace-pre-wrap",children:s("admin.broadcast-tip")})]}),n.length?a.jsxs(_,{children:[a.jsx(Z,{children:a.jsxs(w,{className:"select-none whitespace-nowrap",children:[a.jsx(l,{children:"ID"}),a.jsx(l,{children:s("admin.broadcast-content")}),a.jsx(l,{children:s("admin.poster")}),a.jsx(l,{children:s("admin.post-at")}),a.jsx(l,{children:s("admin.action")})]})}),a.jsx($,{children:n.map((x,m)=>a.jsx(sa,{item:x},m))})]}):a.jsx("div",{className:"text-center select-none my-8",children:r?a.jsx(y,{className:"w-6 h-6 inline-block animate-spin"}):a.jsx("p",{className:"empty",children:s("admin.empty")})})]})}function ca(){const{t:s}=j();return a.jsx("div",{className:"broadcast",children:a.jsxs(K,{className:"admin-card broadcast-card",children:[a.jsx(Q,{className:"select-none",children:a.jsx(W,{children:s("admin.broadcast")})}),a.jsx(X,{children:a.jsx(ea,{})})]})})}export{ca as default};
