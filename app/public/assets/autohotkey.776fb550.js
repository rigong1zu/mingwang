import{ak as l}from"./index.b12a37b1.js";function c(a,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in a)){const o=Object.getOwnPropertyDescriptor(r,n);o&&Object.defineProperty(a,n,o.get?o:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var i,s;function _(){if(s)return i;s=1;function a(e){const t={begin:"`[\\s\\S]"};return{name:"AutoHotkey",case_insensitive:!0,aliases:["ahk"],keywords:{keyword:"Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group",literal:"true false NOT AND OR",built_in:"ComSpec Clipboard ClipboardAll ErrorLevel"},contains:[t,e.inherit(e.QUOTE_STRING_MODE,{contains:[t]}),e.COMMENT(";","$",{relevance:0}),e.C_BLOCK_COMMENT_MODE,{className:"number",begin:e.NUMBER_RE,relevance:0},{className:"variable",begin:"%[a-zA-Z0-9#_$@]+%"},{className:"built_in",begin:"^\\s*\\w+\\s*(,|%)"},{className:"title",variants:[{begin:'^[^\\n";]+::(?!=)'},{begin:'^[^\\n";]+:(?!=)',relevance:0}]},{className:"meta",begin:"^\\s*#\\w+",end:"$",relevance:0},{className:"built_in",begin:"A_[a-zA-Z0-9]+"},{begin:",\\s*,"}]}}return i=a,i}var u=_();const b=l(u),k=c({__proto__:null,default:b},[u]);export{k as a};
