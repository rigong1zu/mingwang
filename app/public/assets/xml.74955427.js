import{ak as E}from"./index.b12a37b1.js";function p(a,r){for(var i=0;i<r.length;i++){const n=r[i];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in a)){const c=Object.getOwnPropertyDescriptor(n,t);c&&Object.defineProperty(a,t,c.get?c:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var u,f;function T(){if(f)return u;f=1;function a(e){return e?typeof e=="string"?e:e.source:null}function r(e){return n("(?=",e,")")}function i(e){return n("(",e,")?")}function n(...e){return e.map(o=>a(o)).join("")}function t(...e){return"("+e.map(o=>a(o)).join("|")+")"}function c(e){const s=n(/[A-Z_]/,i(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),o=/[A-Za-z0-9._:-]+/,l={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},m={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},d=e.inherit(m,{begin:/\(/,end:/\)/}),_=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),b=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),g={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:o,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[l]},{begin:/'/,end:/'/,contains:[l]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[m,b,_,d,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[m,d,b,_]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},l,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[g],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[g],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n(/</,r(n(s,t(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:s,relevance:0,starts:g}]},{className:"tag",begin:n(/<\//,r(n(s,/>/))),contains:[{className:"name",begin:s,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}return u=c,u}var N=T();const v=E(N),M=p({__proto__:null,default:v},[N]);export{M as x};
