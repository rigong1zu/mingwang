import{ak as a}from"./index.b12a37b1.js";function N(T,e){for(var n=0;n<e.length;n++){const O=e[n];if(typeof O!="string"&&!Array.isArray(O)){for(const t in O)if(t!=="default"&&!(t in T)){const r=Object.getOwnPropertyDescriptor(O,t);r&&Object.defineProperty(T,t,r.get?r:{enumerable:!0,get:()=>O[t]})}}}return Object.freeze(Object.defineProperty(T,Symbol.toStringTag,{value:"Module"}))}var E,R;function o(){if(R)return E;R=1;function T(e){const n={className:"number",begin:"[1-9][0-9]*",relevance:0},O={className:"symbol",begin:":[^\\]]+"},t={className:"built_in",begin:"(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[",end:"\\]",contains:["self",n,O]},r={className:"built_in",begin:"(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[",end:"\\]",contains:["self",n,e.QUOTE_STRING_MODE,O]};return{name:"TP",keywords:{keyword:"ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN SUBSTR FINDSTR VOFFSET PROG ATTR MN POS",literal:"ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET"},contains:[t,r,{className:"keyword",begin:"/(PROG|ATTR|MN|POS|END)\\b"},{className:"keyword",begin:"(CALL|RUN|POINT_LOGIC|LBL)\\b"},{className:"keyword",begin:"\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)"},{className:"number",begin:"\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b",relevance:0},e.COMMENT("//","[;$]"),e.COMMENT("!","[;$]"),e.COMMENT("--eg:","$"),e.QUOTE_STRING_MODE,{className:"string",begin:"'",end:"'"},e.C_NUMBER_MODE,{className:"variable",begin:"\\$[A-Za-z0-9_]+"}]}}return E=T,E}var s=o();const i=a(s),A=N({__proto__:null,default:i},[s]);export{A as t};
