import{ak as M}from"./index.b12a37b1.js";function v(c,_){for(var i=0;i<_.length;i++){const r=_[i];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in c)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(c,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var f,N;function k(){if(N)return f;N=1;function c(e){return e?typeof e=="string"?e:e.source:null}function _(e){return r("(?=",e,")")}function i(e){return r("(",e,")?")}function r(...e){return e.map(s=>c(s)).join("")}function a(e){const t=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),s="decltype\\(auto\\)",u="[a-zA-Z_]\\w*::",y="<[^<>]+>",O="("+s+"|"+i(u)+"[a-zA-Z_]\\w*"+i(y)+")",d={className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},T="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",o={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+T+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},p={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},m={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{"meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(o,{className:"meta-string"}),{className:"meta-string",begin:/<.*?>/},t,e.C_BLOCK_COMMENT_MODE]},w={className:"title",begin:i(u)+e.IDENT_RE,relevance:0},E=i(u)+e.IDENT_RE+"\\s*\\(",n={keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",built_in:"_Bool _Complex _Imaginary",_relevance_hints:["asin","atan2","atan","calloc","ceil","cosh","cos","exit","exp","fabs","floor","fmod","fprintf","fputs","free","frexp","auto_ptr","deque","list","queue","stack","vector","map","set","pair","bitset","multiset","multimap","unordered_set","fscanf","future","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","tolower","toupper","labs","ldexp","log10","log","malloc","realloc","memchr","memcmp","memcpy","memset","modf","pow","printf","putchar","puts","scanf","sinh","sin","snprintf","sprintf","sqrt","sscanf","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","tanh","tan","unordered_map","unordered_multiset","unordered_multimap","priority_queue","make_pair","array","shared_ptr","abort","terminate","abs","acos","vfprintf","vprintf","vsprintf","endl","initializer_list","unique_ptr","complex","imaginary","std","string","wstring","cin","cout","cerr","clog","stdin","stdout","stderr","stringstream","istringstream","ostringstream"],literal:"true false nullptr NULL"},b={className:"function.dispatch",relevance:0,keywords:n,begin:r(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!while)/,e.IDENT_RE,_(/\s*\(/))},g=[b,m,d,t,e.C_BLOCK_COMMENT_MODE,p,o],h={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:n,contains:g.concat([{begin:/\(/,end:/\)/,keywords:n,contains:g.concat(["self"]),relevance:0}]),relevance:0},L={className:"function",begin:"("+O+"[\\*&\\s]+)+"+E,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:n,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:s,keywords:n,relevance:0},{begin:E,returnBegin:!0,contains:[w],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[o,p]},{className:"params",begin:/\(/,end:/\)/,keywords:n,relevance:0,contains:[t,e.C_BLOCK_COMMENT_MODE,o,p,d,{begin:/\(/,end:/\)/,keywords:n,relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,o,p,d]}]},d,t,e.C_BLOCK_COMMENT_MODE,m]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:n,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(h,L,b,g,[m,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",end:">",keywords:n,contains:["self",d]},{begin:e.IDENT_RE+"::",keywords:n},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:m,strings:o,keywords:n}}}function l(e){const t=a(e),s=["c","h"],u=["cc","c++","h++","hpp","hh","hxx","cxx"];return t.disableAutodetect=!0,t.aliases=[],e.getLanguage("c")||t.aliases.push(...s),e.getLanguage("cpp")||t.aliases.push(...u),t}return f=l,f}var C=k();const A=M(C),x=v({__proto__:null,default:A},[C]);export{x as c};
