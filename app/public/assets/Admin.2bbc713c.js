import{c as s,u as x,b as o,_ as m,j as e,n as l,$ as u,a0 as j,a1 as g,R as M,r as y,a as d,a2 as v,a3 as b,a4 as f,a5 as C,S as w,a6 as H}from"./index.b12a37b1.js";/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=s("BookCopy",[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12",key:"1owzki"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=s("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=s("FileClock",[["path",{d:"M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",key:"9lo3o3"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=s("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=s("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=s("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=s("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=s("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);function t({title:a,icon:i,path:n,exit:r}){const c=g(),h=M(),k=y.useMemo(()=>!r&&(c.pathname===`/admin${n}`||c.pathname+"/"==`/admin${n}`),[c.pathname,n]),p=async()=>{if(r)return await d.navigate("/");v&&h(b()),await d.navigate(`/admin${n}`)};return e.jsxs("div",{className:l("menu-item",k&&"active"),onClick:p,children:[e.jsx("div",{className:"menu-item-icon",children:i}),e.jsx("div",{className:"menu-item-title",children:a})]})}function S(){const{t:a}=x(),i=o(m);return e.jsxs("div",{className:l("admin-menu",i&&"open"),children:[e.jsx(t,{title:a("admin.dashboard"),icon:e.jsx(z,{}),path:"/"}),e.jsx(t,{title:a("admin.user"),icon:e.jsx(G,{}),path:"/users"}),e.jsx(t,{title:a("admin.market.title"),icon:e.jsx(N,{}),path:"/market"}),e.jsx(t,{title:a("admin.broadcast"),icon:e.jsx(F,{}),path:"/broadcast"}),e.jsx(t,{title:a("admin.channel"),icon:e.jsx(L,{}),path:"/channel"}),e.jsx(t,{title:a("admin.prize"),icon:e.jsx(u,{}),path:"/charge"}),e.jsx(t,{title:a("admin.subscription"),icon:e.jsx(R,{}),path:"/subscription"}),e.jsx(t,{title:a("admin.settings"),icon:e.jsx(j,{}),path:"/system"}),e.jsx(t,{title:a("admin.logger.title"),icon:e.jsx(V,{}),path:"/logger"}),e.jsx(t,{title:a("admin.exit"),icon:e.jsx(q,{}),path:"",exit:!0})]})}function A(){const a=o(f),i=o(C);return y.useEffect(()=>{a&&!i&&d.navigate("/")},[a]),e.jsxs("div",{className:"admin-page",children:[e.jsx(S,{}),e.jsx(w,{className:"admin-content",children:e.jsx(H,{})})]})}export{A as default};
