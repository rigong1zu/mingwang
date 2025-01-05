import{b5 as s,b6 as n}from"./index.b12a37b1.js";async function c(){try{return(await s.get("/admin/analytics/info")).data}catch(e){return console.warn(e),{subscription_count:0,billing_today:0,billing_month:0}}}async function i(){try{const a=(await s.get("/admin/analytics/model")).data;return{date:a.date,value:a.value||[]}}catch(e){return console.warn(e),{date:[],value:[]}}}async function u(){try{return(await s.get("/admin/analytics/request")).data}catch(e){return console.warn(e),{date:[],value:[]}}}async function p(){try{return(await s.get("/admin/analytics/billing")).data}catch(e){return console.warn(e),{date:[],value:[]}}}async function d(){try{return(await s.get("/admin/analytics/error")).data}catch(e){return console.warn(e),{date:[],value:[]}}}async function l(){try{return(await s.get("/admin/analytics/user")).data}catch(e){return console.warn(e),{total:0,normal:0,api_paid:0,basic_plan:0,standard_plan:0,pro_plan:0}}}async function m(e){try{return(await s.get(`/admin/invitation/list?page=${e}`)).data}catch(a){return{status:!1,message:n(a),data:[],total:0}}}async function y(e){try{return(await s.post("/admin/invitation/delete",{code:e})).data}catch(a){return{status:!1,message:n(a)}}}async function g(e,a,t){try{return(await s.post("/admin/invitation/generate",{type:e,quota:a,number:t})).data}catch(r){return{status:!1,data:[],message:n(r)}}}async function f(e){try{return(await s.get(`/admin/redeem/list?page=${e}`)).data}catch(a){return console.warn(a),{status:!1,message:n(a),data:[],total:0}}}async function w(e){try{return(await s.post("/admin/redeem/delete",{code:e})).data}catch(a){return{status:!1,message:n(a)}}}async function h(e,a){try{return(await s.post("/admin/redeem/generate",{quota:e,number:a})).data}catch(t){return{status:!1,data:[],message:n(t)}}}async function v(e,a){try{return(await s.get(`/admin/user/list?page=${e}&search=${a}`)).data}catch(t){return{status:!1,message:n(t),data:[],total:0}}}async function b(e,a){try{return(await s.post("/admin/user/password",{id:e,password:a})).data}catch(t){return{status:!1,message:n(t)}}}async function _(e,a){try{return(await s.post("/admin/user/email",{id:e,email:a})).data}catch(t){return{status:!1,message:n(t)}}}async function O(e,a,t){try{return(await s.post("/admin/user/quota",{id:e,quota:a,override:t??!1})).data}catch(r){return{status:!1,message:n(r)}}}async function q(e,a){try{return(await s.post("/admin/user/subscription",{id:e,expired:a})).data}catch(t){return{status:!1,message:n(t)}}}async function C(e,a){try{return(await s.post("/admin/user/ban",{id:e,ban:a})).data}catch(t){return{status:!1,message:n(t)}}}async function I(e,a){try{return(await s.post("/admin/user/admin",{id:e,admin:a})).data}catch(t){return{status:!1,message:n(t)}}}async function L(e,a){try{return(await s.post("/admin/user/level",{id:e,level:a})).data}catch(t){return{status:!1,message:n(t)}}}async function R(e){try{return(await s.post("/admin/user/release",{id:e})).data}catch(a){return{status:!1,message:n(a)}}}export{i as a,u as b,p as c,d,l as e,y as f,c as g,m as h,g as i,_ as j,L as k,C as l,I as m,v as n,w as o,f as p,O as q,R as r,q as s,h as t,b as u};
