import{ak as D}from"./index.b12a37b1.js";function R(n,a){for(var t=0;t<a.length;t++){const i=a[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const e=Object.getOwnPropertyDescriptor(i,r);e&&Object.defineProperty(n,r,e.get?e:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var N,u;function T(){if(u)return N;u=1;var n="[0-9](_*[0-9])*",a=`\\.(${n})`,t="[0-9a-fA-F](_*[0-9a-fA-F])*",i={className:"number",variants:[{begin:`(\\b(${n})((${a})|\\.)?|(${a}))[eE][+-]?(${n})[fFdD]?\\b`},{begin:`\\b(${n})((${a})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${a})[fFdD]?\\b`},{begin:`\\b(${n})[fFdD]\\b`},{begin:`\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?(${n})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${t})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function r(e){const l={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},f={className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},O={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"},E={className:"subst",begin:/\$\{/,end:/\}/,contains:[e.C_NUMBER_MODE]},g={className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},s={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[g,E]},{begin:"'",end:"'",illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,g,E]}]};E.contains.push(s);const b={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"},d={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[e.inherit(s,{className:"meta-string"})]}]},p=i,o=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),c={variants:[{className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},_=c;return _.variants[1].contains=[c],c.variants[1].contains=[_],{name:"Kotlin",aliases:["kt","kts"],keywords:l,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,o,f,O,b,d,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:l,relevance:5,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:l,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[c,e.C_LINE_COMMENT_MODE,o],relevance:0},e.C_LINE_COMMENT_MODE,o,b,d,s,e.C_NUMBER_MODE]},o]},{className:"class",beginKeywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,]|$/,excludeBegin:!0,returnEnd:!0},b,d]},s,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:`
`},p]}}return N=r,N}var m=T();const v=D(m),C=R({__proto__:null,default:v},[m]);export{C as k};
