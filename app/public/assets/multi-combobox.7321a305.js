import{u as S,am as d,j as s,cP as g,cQ as y,B as I,n as p,Z as x,d6 as M,cR as R,bV as $,bW as B,d7 as E,bX as L,bY as O}from"./index.b12a37b1.js";function D({value:t,onChange:c,list:m,listTranslate:i,placeholder:h,searchPlaceholder:j,defaultOpen:u,className:w,align:b,disabled:C,disabledSearch:v,children:f}){const{t:l}=S(),[r,N]=d.useState(u??!1),P=d.useMemo(()=>{const e=[...m,...t??[]].filter(o=>o);return[...new Set(e)]},[m]),a=t??[];return s.jsxs(g,{open:r,onOpenChange:N,children:[s.jsx(y,{asChild:!0,children:f??s.jsxs(I,{variant:"outline",role:"combobox","aria-expanded":r,className:p("w-[320px] max-w-[60vw] justify-between",w),disabled:C,children:[s.jsx(x,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),h??`${a.length} Items Selected`,s.jsx(M,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),s.jsx(R,{className:"w-[320px] max-w-[60vw] p-0",align:b,children:s.jsxs($,{children:[!v&&s.jsx(B,{placeholder:j}),s.jsx(E,{children:l("admin.empty")}),s.jsx(L,{className:"thin-scrollbar",children:P.map(e=>s.jsxs(O,{value:e,onSelect:n=>{a.includes(n)?c(a.filter(o=>o!==n)):c([...a,n])},children:[s.jsx(x,{className:p("mr-2 h-4 w-4",a.includes(e)?"opacity-100":"opacity-0")}),i?l(`${i}.${e}`):e]},e))})]})})]})}export{D as M};
