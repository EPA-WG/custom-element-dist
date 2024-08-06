import{w as U,e as w}from"./custom-element-DpIq8E2p.js";import"./http-request-DNq59pnj.js";import{i as ve,d as J,s as Q,R as ye,t as ge}from"./index-DuIEV_9C.js";import"./index-CVRyq5ci.js";function we(){ve(typeof URL<"u",J.formatMessage(`Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`))}function xe(t,e){return t.toLowerCase()===e.toLowerCase()}function be(t){return t<300?"#69AB32":t<400?"#F0BB4B":"#E95F5D"}function Te(){const t=new Date;return[t.getHours(),t.getMinutes(),t.getSeconds()].map(String).map(e=>e.slice(0,2)).map(e=>e.padStart(2,"0")).join(":")}async function Ee(t){const r=await t.clone().text();return{url:new URL(t.url),method:t.method,headers:Object.fromEntries(t.headers.entries()),body:r}}var Ce=Object.create,ae=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,oe=Object.getOwnPropertyNames,Pe=Object.getPrototypeOf,ke=Object.prototype.hasOwnProperty,se=(t,e)=>function(){return e||(0,t[oe(t)[0]])((e={exports:{}}).exports,e),e.exports},qe=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of oe(e))!ke.call(t,a)&&a!==r&&ae(t,a,{get:()=>e[a],enumerable:!(n=_e(e,a))||n.enumerable});return t},Re=(t,e,r)=>(r=t!=null?Ce(Pe(t)):{},qe(ae(r,"default",{value:t,enumerable:!0}),t)),Oe=se({"node_modules/statuses/codes.json"(t,e){e.exports={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}}}),Ae=se({"node_modules/statuses/index.js"(t,e){var r=Oe();e.exports=p,p.message=r,p.code=n(r),p.codes=a(r),p.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},p.empty={204:!0,205:!0,304:!0},p.retry={502:!0,503:!0,504:!0};function n(o){var s={};return Object.keys(o).forEach(function(f){var c=o[f],m=Number(f);s[c.toLowerCase()]=m}),s}function a(o){return Object.keys(o).map(function(i){return Number(i)})}function l(o){var s=o.toLowerCase();if(!Object.prototype.hasOwnProperty.call(p.code,s))throw new Error('invalid status message: "'+o+'"');return p.code[s]}function u(o){if(!Object.prototype.hasOwnProperty.call(p.message,o))throw new Error("invalid status code: "+o);return p.message[o]}function p(o){if(typeof o=="number")return u(o);if(typeof o!="string")throw new TypeError("code must be a number or string");var s=parseInt(o,10);return isNaN(s)?l(o):u(s)}}}),Se=Re(Ae()),ie=Se.default;/*! Bundled license information:

statuses/index.js:
  (*!
   * statuses
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2016 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/const{message:Be}=ie;async function $e(t){const e=t.clone(),r=await e.text(),n=e.status||200,a=e.statusText||Be[n]||"OK";return{status:n,statusText:a,headers:Object.fromEntries(e.headers.entries()),body:r}}function De(t){for(var e=[],r=0;r<t.length;){var n=t[r];if(n==="*"||n==="+"||n==="?"){e.push({type:"MODIFIER",index:r,value:t[r++]});continue}if(n==="\\"){e.push({type:"ESCAPED_CHAR",index:r++,value:t[r++]});continue}if(n==="{"){e.push({type:"OPEN",index:r,value:t[r++]});continue}if(n==="}"){e.push({type:"CLOSE",index:r,value:t[r++]});continue}if(n===":"){for(var a="",l=r+1;l<t.length;){var u=t.charCodeAt(l);if(u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||u===95){a+=t[l++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(r));e.push({type:"NAME",index:r,value:a}),r=l;continue}if(n==="("){var p=1,o="",l=r+1;if(t[l]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(l));for(;l<t.length;){if(t[l]==="\\"){o+=t[l++]+t[l++];continue}if(t[l]===")"){if(p--,p===0){l++;break}}else if(t[l]==="("&&(p++,t[l+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(l));o+=t[l++]}if(p)throw new TypeError("Unbalanced pattern at ".concat(r));if(!o)throw new TypeError("Missing pattern at ".concat(r));e.push({type:"PATTERN",index:r,value:o}),r=l;continue}e.push({type:"CHAR",index:r,value:t[r++]})}return e.push({type:"END",index:r,value:""}),e}function Ie(t,e){e===void 0&&(e={});for(var r=De(t),n=e.prefixes,a=n===void 0?"./":n,l="[^".concat(A(e.delimiter||"/#?"),"]+?"),u=[],p=0,o=0,s="",i=function(b){if(o<r.length&&r[o].type===b)return r[o++].value},f=function(b){var k=i(b);if(k!==void 0)return k;var q=r[o],z=q.type,F=q.index;throw new TypeError("Unexpected ".concat(z," at ").concat(F,", expected ").concat(b))},c=function(){for(var b="",k;k=i("CHAR")||i("ESCAPED_CHAR");)b+=k;return b};o<r.length;){var m=i("CHAR"),h=i("NAME"),d=i("PATTERN");if(h||d){var v=m||"";a.indexOf(v)===-1&&(s+=v,v=""),s&&(u.push(s),s=""),u.push({name:h||p++,prefix:v,suffix:"",pattern:d||l,modifier:i("MODIFIER")||""});continue}var y=m||i("ESCAPED_CHAR");if(y){s+=y;continue}s&&(u.push(s),s="");var x=i("OPEN");if(x){var v=c(),T=i("NAME")||"",g=i("PATTERN")||"",P=c();f("CLOSE"),u.push({name:T||(g?p++:""),pattern:T&&!g?l:g,prefix:v,suffix:P,modifier:i("MODIFIER")||""});continue}f("END")}return u}function Ne(t,e){var r=[],n=le(t,r,e);return je(n,r,e)}function je(t,e,r){r===void 0&&(r={});var n=r.decode,a=n===void 0?function(l){return l}:n;return function(l){var u=t.exec(l);if(!u)return!1;for(var p=u[0],o=u.index,s=Object.create(null),i=function(c){if(u[c]===void 0)return"continue";var m=e[c-1];m.modifier==="*"||m.modifier==="+"?s[m.name]=u[c].split(m.prefix+m.suffix).map(function(h){return a(h,m)}):s[m.name]=a(u[c],m)},f=1;f<u.length;f++)i(f);return{path:p,index:o,params:s}}}function A(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ce(t){return t&&t.sensitive?"":"i"}function Le(t,e){if(!e)return t;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,a=r.exec(t.source);a;)e.push({name:a[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),a=r.exec(t.source);return t}function Ue(t,e,r){var n=t.map(function(a){return le(a,e,r).source});return new RegExp("(?:".concat(n.join("|"),")"),ce(r))}function He(t,e,r){return Me(Ie(t,r),e,r)}function Me(t,e,r){r===void 0&&(r={});for(var n=r.strict,a=n===void 0?!1:n,l=r.start,u=l===void 0?!0:l,p=r.end,o=p===void 0?!0:p,s=r.encode,i=s===void 0?function(F){return F}:s,f=r.delimiter,c=f===void 0?"/#?":f,m=r.endsWith,h=m===void 0?"":m,d="[".concat(A(h),"]|$"),v="[".concat(A(c),"]"),y=u?"^":"",x=0,T=t;x<T.length;x++){var g=T[x];if(typeof g=="string")y+=A(i(g));else{var P=A(i(g.prefix)),b=A(i(g.suffix));if(g.pattern)if(e&&e.push(g),P||b)if(g.modifier==="+"||g.modifier==="*"){var k=g.modifier==="*"?"?":"";y+="(?:".concat(P,"((?:").concat(g.pattern,")(?:").concat(b).concat(P,"(?:").concat(g.pattern,"))*)").concat(b,")").concat(k)}else y+="(?:".concat(P,"(").concat(g.pattern,")").concat(b,")").concat(g.modifier);else g.modifier==="+"||g.modifier==="*"?y+="((?:".concat(g.pattern,")").concat(g.modifier,")"):y+="(".concat(g.pattern,")").concat(g.modifier);else y+="(?:".concat(P).concat(b,")").concat(g.modifier)}}if(o)a||(y+="".concat(v,"?")),y+=r.endsWith?"(?=".concat(d,")"):"$";else{var q=t[t.length-1],z=typeof q=="string"?v.indexOf(q[q.length-1])>-1:q===void 0;a||(y+="(?:".concat(v,"(?=").concat(d,"))?")),z||(y+="(?=".concat(v,"|").concat(d,")"))}return new RegExp(y,ce(r))}function le(t,e,r){return t instanceof RegExp?Le(t,e):Array.isArray(t)?Ue(t,e,r):He(t,e,r)}new TextEncoder;function ze(){if(typeof navigator<"u"&&navigator.product==="ReactNative")return!0;if(typeof process<"u"){const t=process.type;return t==="renderer"||t==="worker"?!1:!!(process.versions&&process.versions.node)}return!1}var Fe=Object.defineProperty,Ve=(t,e)=>{for(var r in e)Fe(t,r,{get:e[r],enumerable:!0})},We={};Ve(We,{blue:()=>Je,gray:()=>Ke,green:()=>Xe,red:()=>Qe,yellow:()=>Ge});function Ge(t){return`\x1B[33m${t}\x1B[0m`}function Je(t){return`\x1B[34m${t}\x1B[0m`}function Ke(t){return`\x1B[90m${t}\x1B[0m`}function Qe(t){return`\x1B[31m${t}\x1B[0m`}function Xe(t){return`\x1B[32m${t}\x1B[0m`}ze();function Ze(t,e=!0){return[e&&t.origin,t.pathname].filter(Boolean).join("")}const Ye=/[\?|#].*$/g;function et(t){return new URL(`/${t}`,"http://localhost").searchParams}function ue(t){return t.endsWith("?")?t:t.replace(Ye,"")}function tt(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}function rt(t,e){if(tt(t)||t.startsWith("*"))return t;const r=e||typeof document<"u"&&document.baseURI;return r?decodeURI(new URL(encodeURI(t),r).href):t}function nt(t,e){if(t instanceof RegExp)return t;const r=rt(t,e);return ue(r)}function at(t){return t.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g,(e,r,n)=>{const a="(.*)";return r?r.startsWith(":")?`${r}${n}`:`${r}${a}`:a}).replace(/([^\/])(:)(?=\d+)/,"$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/,"$1\\$2")}function ot(t,e,r){const n=nt(e,r),a=typeof n=="string"?at(n):n,l=Ze(t),u=Ne(a,{decode:decodeURIComponent})(l),p=u&&u.params||{};return{matches:u!==!1,params:p}}var st=Object.create,de=Object.defineProperty,it=Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyNames,ct=Object.getPrototypeOf,lt=Object.prototype.hasOwnProperty,ut=(t,e)=>function(){return e||(0,t[pe(t)[0]])((e={exports:{}}).exports,e),e.exports},dt=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of pe(e))!lt.call(t,a)&&a!==r&&de(t,a,{get:()=>e[a],enumerable:!(n=it(e,a))||n.enumerable});return t},pt=(t,e,r)=>(r=t!=null?st(ct(t)):{},dt(de(r,"default",{value:t,enumerable:!0}),t)),ft=ut({"node_modules/cookie/index.js"(t){t.parse=n,t.serialize=a;var e=Object.prototype.toString,r=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function n(s,i){if(typeof s!="string")throw new TypeError("argument str must be a string");for(var f={},c=i||{},m=c.decode||l,h=0;h<s.length;){var d=s.indexOf("=",h);if(d===-1)break;var v=s.indexOf(";",h);if(v===-1)v=s.length;else if(v<d){h=s.lastIndexOf(";",d-1)+1;continue}var y=s.slice(h,d).trim();if(f[y]===void 0){var x=s.slice(d+1,v).trim();x.charCodeAt(0)===34&&(x=x.slice(1,-1)),f[y]=o(x,m)}h=v+1}return f}function a(s,i,f){var c=f||{},m=c.encode||u;if(typeof m!="function")throw new TypeError("option encode is invalid");if(!r.test(s))throw new TypeError("argument name is invalid");var h=m(i);if(h&&!r.test(h))throw new TypeError("argument val is invalid");var d=s+"="+h;if(c.maxAge!=null){var v=c.maxAge-0;if(isNaN(v)||!isFinite(v))throw new TypeError("option maxAge is invalid");d+="; Max-Age="+Math.floor(v)}if(c.domain){if(!r.test(c.domain))throw new TypeError("option domain is invalid");d+="; Domain="+c.domain}if(c.path){if(!r.test(c.path))throw new TypeError("option path is invalid");d+="; Path="+c.path}if(c.expires){var y=c.expires;if(!p(y)||isNaN(y.valueOf()))throw new TypeError("option expires is invalid");d+="; Expires="+y.toUTCString()}if(c.httpOnly&&(d+="; HttpOnly"),c.secure&&(d+="; Secure"),c.priority){var x=typeof c.priority=="string"?c.priority.toLowerCase():c.priority;switch(x){case"low":d+="; Priority=Low";break;case"medium":d+="; Priority=Medium";break;case"high":d+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(c.sameSite){var T=typeof c.sameSite=="string"?c.sameSite.toLowerCase():c.sameSite;switch(T){case!0:d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"strict":d+="; SameSite=Strict";break;case"none":d+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return d}function l(s){return s.indexOf("%")!==-1?decodeURIComponent(s):s}function u(s){return encodeURIComponent(s)}function p(s){return e.call(s)==="[object Date]"||s instanceof Date}function o(s,i){try{return i(s)}catch{return s}}}}),mt=pt(ft()),K=mt.default;/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/function X(){return K.parse(document.cookie)}function ht(t){if(typeof document>"u"||typeof location>"u")return{};switch(t.credentials){case"same-origin":{const e=new URL(t.url);return location.origin===e.origin?X():{}}case"include":return X();default:return{}}}function vt(t){const e=t.headers.get("cookie"),r=e?K.parse(e):{};Q.hydrate();const n=Array.from(Q.get(t)?.entries()).reduce((u,[p,{value:o}])=>Object.assign(u,{[p.trim()]:o}),{}),l={...ht(t),...n};for(const[u,p]of Object.entries(l))t.headers.append("cookie",K.serialize(u,p));return{...l,...r}}var _=(t=>(t.HEAD="HEAD",t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.OPTIONS="OPTIONS",t.DELETE="DELETE",t))(_||{});class yt extends ye{constructor(e,r,n,a){super({info:{header:`${e} ${r}`,path:r,method:e},resolver:n,options:a}),this.checkRedundantQueryParameters()}checkRedundantQueryParameters(){const{method:e,path:r}=this.info;if(r instanceof RegExp||ue(r)===r)return;et(r).forEach((l,u)=>{}),J.warn(`Found a redundant usage of query parameters in the request handler URL for "${e} ${r}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/recipes/query-parameters`)}async parse(e){const r=new URL(e.request.url),n=ot(r,this.info.path,e.resolutionContext?.baseUrl),a=vt(e.request);return{match:n,cookies:a}}predicate(e){const r=this.matchMethod(e.request.method),n=e.parsedResult.match.matches;return r&&n}matchMethod(e){return this.info.method instanceof RegExp?this.info.method.test(e):xe(this.info.method,e)}extendResolverArgs(e){return{params:e.parsedResult.match?.params||{},cookies:e.parsedResult.cookies}}async log(e){const r=ge(e.request.url),n=await Ee(e.request),a=await $e(e.response),l=be(a.status);console.groupCollapsed(J.formatMessage(`${Te()} ${e.request.method} ${r} (%c${a.status} ${a.statusText}%c)`),`color:${l}`,"color:inherit"),console.log("Request",n),console.log("Handler:",this),console.log("Response",a),console.groupEnd()}}function C(t){return(e,r,n={})=>new yt(t,e,r,n)}const M={all:C(/.+/),head:C(_.HEAD),get:C(_.GET),post:C(_.POST),put:C(_.PUT),delete:C(_.DELETE),patch:C(_.PATCH),options:C(_.OPTIONS)};var gt=Object.create,fe=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,me=Object.getOwnPropertyNames,xt=Object.getPrototypeOf,bt=Object.prototype.hasOwnProperty,Tt=(t,e)=>function(){return e||(0,t[me(t)[0]])((e={exports:{}}).exports,e),e.exports},Et=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of me(e))!bt.call(t,a)&&a!==r&&fe(t,a,{get:()=>e[a],enumerable:!(n=wt(e,a))||n.enumerable});return t},Ct=(t,e,r)=>(r=t!=null?gt(xt(t)):{},Et(!t||!t.__esModule?fe(r,"default",{value:t,enumerable:!0}):r,t)),_t=Tt({"node_modules/set-cookie-parser/lib/set-cookie.js"(t,e){var r={decodeValues:!0,map:!1,silent:!1};function n(o){return typeof o=="string"&&!!o.trim()}function a(o,s){var i=o.split(";").filter(n),f=i.shift(),c=l(f),m=c.name,h=c.value;s=s?Object.assign({},r,s):r;try{h=s.decodeValues?decodeURIComponent(h):h}catch(v){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+h+"'. Set options.decodeValues to false to disable this feature.",v)}var d={name:m,value:h};return i.forEach(function(v){var y=v.split("="),x=y.shift().trimLeft().toLowerCase(),T=y.join("=");x==="expires"?d.expires=new Date(T):x==="max-age"?d.maxAge=parseInt(T,10):x==="secure"?d.secure=!0:x==="httponly"?d.httpOnly=!0:x==="samesite"?d.sameSite=T:d[x]=T}),d}function l(o){var s="",i="",f=o.split("=");return f.length>1?(s=f.shift(),i=f.join("=")):i=o,{name:s,value:i}}function u(o,s){if(s=s?Object.assign({},r,s):r,!o)return s.map?{}:[];if(o.headers)if(typeof o.headers.getSetCookie=="function")o=o.headers.getSetCookie();else if(o.headers["set-cookie"])o=o.headers["set-cookie"];else{var i=o.headers[Object.keys(o.headers).find(function(c){return c.toLowerCase()==="set-cookie"})];!i&&o.headers.cookie&&!s.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),o=i}if(Array.isArray(o)||(o=[o]),s=s?Object.assign({},r,s):r,s.map){var f={};return o.filter(n).reduce(function(c,m){var h=a(m,s);return c[h.name]=h,c},f)}else return o.filter(n).map(function(c){return a(c,s)})}function p(o){if(Array.isArray(o))return o;if(typeof o!="string")return[];var s=[],i=0,f,c,m,h,d;function v(){for(;i<o.length&&/\s/.test(o.charAt(i));)i+=1;return i<o.length}function y(){return c=o.charAt(i),c!=="="&&c!==";"&&c!==","}for(;i<o.length;){for(f=i,d=!1;v();)if(c=o.charAt(i),c===","){for(m=i,i+=1,v(),h=i;i<o.length&&y();)i+=1;i<o.length&&o.charAt(i)==="="?(d=!0,i=h,s.push(o.substring(f,m)),f=i):i=m+1}else i+=1;(!d||i>=o.length)&&s.push(o.substring(f,o.length))}return s}e.exports=u,e.exports.parse=u,e.exports.parseString=a,e.exports.splitCookiesString=p}}),Pt=Ct(_t()),kt=/[^a-z0-9\-#$%&'*+.^_`|~]/i;function B(t){if(kt.test(t)||t.trim()==="")throw new TypeError("Invalid character in header field name");return t.trim().toLowerCase()}var Z=[`
`,"\r","	"," "],qt=new RegExp(`(^[${Z.join("")}]|$[${Z.join("")}])`,"g");function V(t){return t.replace(qt,"")}function $(t){if(typeof t!="string"||t.length===0)return!1;for(let e=0;e<t.length;e++){const r=t.charCodeAt(e);if(r>127||!Rt(r))return!1}return!0}function Rt(t){return![127,32,"(",")","<",">","@",",",";",":","\\",'"',"/","[","]","?","=","{","}"].includes(t)}function Y(t){if(typeof t!="string"||t.trim()!==t)return!1;for(let e=0;e<t.length;e++){const r=t.charCodeAt(e);if(r===0||r===10||r===13)return!1}return!0}var R=Symbol("normalizedHeaders"),W=Symbol("rawHeaderNames"),ee=", ",te,re,ne,Ot=class he{constructor(e){this[te]={},this[re]=new Map,this[ne]="Headers",["Headers","HeadersPolyfill"].includes(e?.constructor.name)||e instanceof he||typeof globalThis.Headers<"u"&&e instanceof globalThis.Headers?e.forEach((n,a)=>{this.append(a,n)},this):Array.isArray(e)?e.forEach(([r,n])=>{this.append(r,Array.isArray(n)?n.join(ee):n)}):e&&Object.getOwnPropertyNames(e).forEach(r=>{const n=e[r];this.append(r,Array.isArray(n)?n.join(ee):n)})}[(te=R,re=W,ne=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}*keys(){for(const[e]of this.entries())yield e}*values(){for(const[,e]of this.entries())yield e}*entries(){let e=Object.keys(this[R]).sort((r,n)=>r.localeCompare(n));for(const r of e)if(r==="set-cookie")for(const n of this.getSetCookie())yield[r,n];else yield[r,this.get(r)]}has(e){if(!$(e))throw new TypeError(`Invalid header name "${e}"`);return this[R].hasOwnProperty(B(e))}get(e){if(!$(e))throw TypeError(`Invalid header name "${e}"`);return this[R][B(e)]??null}set(e,r){if(!$(e)||!Y(r))return;const n=B(e),a=V(r);this[R][n]=V(a),this[W].set(n,e)}append(e,r){if(!$(e)||!Y(r))return;const n=B(e),a=V(r);let l=this.has(n)?`${this.get(n)}, ${a}`:a;this.set(e,l)}delete(e){if(!$(e)||!this.has(e))return;const r=B(e);delete this[R][r],this[W].delete(r)}forEach(e,r){for(const[n,a]of this.entries())e.call(r,a,n,this)}getSetCookie(){const e=this.get("set-cookie");return e===null?[]:e===""?[""]:(0,Pt.splitCookiesString)(e)}};const{message:At}=ie;function O(t={}){const e=t?.status||200,r=t?.statusText||At[e]||"",n=new Headers(t?.headers);return{...t,headers:n,status:e,statusText:r}}function St(t,e){if(e.type&&Object.defineProperty(t,"type",{value:e.type,enumerable:!0,writable:!1}),typeof document<"u"){const r=Ot.prototype.getSetCookie.call(e.headers);for(const n of r)document.cookie=n}return t}class E extends Response{constructor(e,r){const n=O(r);super(e,n),St(this,n)}static text(e,r){const n=O(r);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/plain"),n.headers.has("Content-Length")||n.headers.set("Content-Length",e?new Blob([e]).size.toString():"0"),new E(e,n)}static json(e,r){const n=O(r);n.headers.has("Content-Type")||n.headers.set("Content-Type","application/json");const a=JSON.stringify(e);return n.headers.has("Content-Length")||n.headers.set("Content-Length",a?new Blob([a]).size.toString():"0"),new E(a,n)}static xml(e,r){const n=O(r);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/xml"),new E(e,n)}static arrayBuffer(e,r){const n=O(r);return e&&n.headers.set("Content-Length",e.byteLength.toString()),new E(e,n)}static formData(e,r){return new E(e,O(r))}}async function Bt(t){let e;return e=t,new Promise(r=>setTimeout(r,e))}we();const G={count:1279,next:"https://pokeapi.co/api/v2/pokemon?offset=6&limit=6",previous:null,results:[{name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"},{name:"ivysaur",url:"https://pokeapi.co/api/v2/pokemon/2/"},{name:"venusaur",url:"https://pokeapi.co/api/v2/pokemon/3/"},{name:"charmander",url:"https://pokeapi.co/api/v2/pokemon/4/"},{name:"charmeleon",url:"https://pokeapi.co/api/v2/pokemon/5/"},{name:"charizard",url:"https://pokeapi.co/api/v2/pokemon/6/"}]},H=[M.get("/pokemon",({request:t})=>{const r=new URL(t.url).searchParams.get("limit"),n=structuredClone(G);return r&&(n.results=n.results.slice(0,Number(r))),E.json(n)}),M.get("/noreturn",async()=>(await Bt(500),E.json(G))),M.get("/reflect",({request:t})=>{const e={};return[...t.headers.entries()].map(([r,n])=>e[r]="reflected-"+n),e["x-added"]="abc",E.json(G,{headers:e})}),M.get("/404",()=>new E(null,{status:404,statusText:"not found"}))],$t={title:"",slice:"page",url:"/pokemon?limit=6"};function S(t){return new Promise(e=>setTimeout(e,t))}function Dt({title:t,slice:e,url:r}){return`
        <fieldset>
            <legend>${t}</legend>
            <custom-element>
<template><!-- wrapping into template to prevent images loading within DCE declaration -->
    <http-request
        url="{ //slice/url  }"
        slice="${e}"
        ></http-request>
    <input placeholder="URL for fetch" slice="url" value="{ //url ?? '${r}' }"/>
    <button>set</button>
    <button slice="url" slice-value="''" slice-event="click">set blank</button>
    <button slice="url" slice-value="'/reflect'" slice-event="click">/reflect</button>
    <button slice="url" slice-value="'/pokemon'"         slice-event="click">/pokemon</button>
    <button slice="url" slice-value="'/pokemon?limit=6'" slice-event="click">/pokemon?limit=6</button>
    <button slice="url" slice-value="'/pokemon?limit=3'" slice-event="click">/pokemon?limit=3</button>

    <p>Pokemon Count: {count(/datadom/slice/${e}//results)}</p>
    <if test="count(/datadom/slice/${e}//results) &lt; 0">
        <h3>loading...</h3>
    </if>
    <for-each select="/datadom/slice/${e}//results">
        <variable name="pokeid"
            select="substring-before( substring-after( @url, 'https://pokeapi.co/api/v2/pokemon/'),'/')"
            ></variable>
        <button>
            <value-of select='@name'/>
        </button>
    </for-each>
    <for-each select="//slice/${e}/value/*">
        <ul>
            <var data-testid="request-section"><value-of select='name(.)'/></var>
            <for-each select="@*">
                <div>
                    <var>@{local-name(.)}</var>
                    =
                    <code data-testid="attr-{local-name(.)}">{.}</code>
                </div>
            </for-each>
        </ul>
    </for-each>
</template>
            </custom-element>
      </fieldset>
  `}const It={title:"http-request",render:t=>Dt(t),renderPlay:async function(e){document.body.innerHTML=(e.render?e:It).render({...$t,...e.args}),await new Promise(r=>setTimeout(async()=>{await e.play({canvasElement:document.body.firstElementChild}),r(0)},0))}},D={args:{title:"url and slice",url:"/pokemon?limit=4"},play:async({canvasElement:t})=>{const e=U(t);await e.findByText(D.args.title),w(await e.findByText("bulbasaur")).toBeInTheDocument(),w(await e.findByText("Pokemon Count: 4")).toBeInTheDocument(t)},parameters:{msw:H}},I={args:{title:"url change",url:""},play:async({canvasElement:t})=>{const e=U(t);await e.findByText(I.args.title);const r=l=>e.getByText(l),n=t.querySelector("http-request"),a=()=>n.getAttribute("url");w(r("Pokemon Count: 0")).toBeInTheDocument(),w(a()).toEqual(""),r("/pokemon").click(),await S(100),w(a()).toEqual("/pokemon"),w(r("Pokemon Count: 6")).toBeInTheDocument(),r("/pokemon?limit=6").click(),await S(100),w(a()).toEqual("/pokemon?limit=6"),w(r("Pokemon Count: 6")).toBeInTheDocument(),r("/pokemon?limit=3").click(),await S(100),w(a()).toEqual("/pokemon?limit=3"),w(r("Pokemon Count: 3")).toBeInTheDocument(),r("set blank").click(),await S(100),w(a()).toEqual(""),w(r("Pokemon Count: 0")).toBeInTheDocument()},parameters:{msw:H}},N={args:{title:"http-request with error",url:"/404"},play:async({canvasElement:t})=>{const e=U(t),r=async n=>(await e.findByTestId(n)).textContent;await e.findByText(N.args.title),await S(200),w(await r("attr-status")).to.include("404")},parameters:{msw:H}},j={args:{title:"http-request with delayed .5 seconds response",url:"/noreturn"},play:async({canvasElement:t})=>{const e=U(t);await e.findByText(j.args.title),w(await e.findByText("request")).toBeInTheDocument(),w(e.queryByText("response")).toBe(null),w(await e.findByText("response")).toBeInTheDocument(),w(await e.findByText("bulbasaur")).toBeInTheDocument(),w(await e.findByText("Pokemon Count: 6")).toBeInTheDocument()},parameters:{msw:H}},L={args:{title:"http-request headers and response status and headers",url:"/reflect"},play:async({canvasElement:t})=>{const e=U(t);await e.findByText(L.args.title),await S(200);const r=await e.findByTestId("section-request-attr-x-test");w(r).toBeInTheDocument(),w(r.textContent.trim()).toEqual("testing");const n=await e.findByTestId("section-response-attr-x-test");w(n).toBeInTheDocument(),w(n.textContent.trim()).toEqual("reflected-testing");const a=await e.findByTestId("section-response-attr-x-added");w(a).toBeInTheDocument(),w(a.textContent.trim()).toEqual("abc")},parameters:{msw:H},render:({url:t,title:e})=>`
        <fieldset>
            <legend>${e}</legend>
            <p> <b>request</b> headers are populated into dedicated <b>slice/request/headers</b></p>

            <custom-element tag="headers-demo" >
                <template>
<http-request
    url="${t}"
    slice="request_slice"
    type="text"
    mode="cors"
    header-x-test="testing"
    ></http-request>
Content of <code>//slice/request_slice</code> is filled by <b>request</b> and <b>response</b>
from <code>${t}</code>

<h3>Samples</h3>
<table>
<tr><th>//slice/request_slice/value/request/headers/@mode</th>
    <td><value-of select="//slice/request_slice/value/request/@mode"/></td></tr>
<tr><th>//slice/request_slice/value/response/headers/@content-type</th>
    <td><value-of select="//slice/request_slice/value/response/headers/@content-type"/></td></tr>
<tr><th>//slice/request_slice/value/response/@status</th>
    <td><value-of select="//slice/request_slice/value/response/@status"/></td></tr>
</table>
<for-each select="//slice/request_slice/value/*">
    <xsl:variable name="section">{name(.)}</xsl:variable>
    <ul date-testid="section-{$section}">
        <b data-testid="request-section"><value-of select='name(.)'/></b>
        <for-each select="@*">
            <div>
                <var >@{local-name(.)}</var>
                =
                <code data-testid="section-{$section}-prop-{local-name(.)}">{.}</code>
            </div>
        </for-each>
        <for-each select="*">
            <div>
                <b data-testid="section-deep"><value-of select='local-name(.)'/></b>
                <ul>
                    <for-each select="@*">
                        <li>
                            <var data-testid="section-attribute">@{local-name(.)}</var>
                            =
                            <code data-testid="section-{$section}-attr-{local-name(.)}">{.}</code>
                        </li>
                    </for-each>
                    <code><value-of select='.'/></code>
                </ul>
            </div>
        </for-each>
    </ul>
</for-each>
</template>
            </custom-element>
            <headers-demo></headers-demo>
      </fieldset>
`};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'url and slice',
    url: '/pokemon?limit=4'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((Demo.args!.title as string));
    expect(await canvas.findByText('bulbasaur')).toBeInTheDocument();
    expect(await canvas.findByText('Pokemon Count: 4')).toBeInTheDocument(canvasElement);
  },
  parameters: {
    msw: handlers
  }
}`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'url change',
    url: ''
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((UrlChange.args!.title as string));
    const byText = txt => canvas.getByText(txt);
    const requestElement = canvasElement.querySelector('http-request'),
      urlAttr = () => requestElement.getAttribute('url');
    expect(byText('Pokemon Count: 0')).toBeInTheDocument();
    expect(urlAttr()).toEqual('');
    byText('/pokemon').click();
    await sleep(100);
    expect(urlAttr()).toEqual('/pokemon');
    expect(byText('Pokemon Count: 6')).toBeInTheDocument();
    byText('/pokemon?limit=6').click();
    await sleep(100);
    expect(urlAttr()).toEqual('/pokemon?limit=6');
    expect(byText('Pokemon Count: 6')).toBeInTheDocument();
    byText('/pokemon?limit=3').click();
    await sleep(100);
    expect(urlAttr()).toEqual('/pokemon?limit=3');
    expect(byText('Pokemon Count: 3')).toBeInTheDocument();
    byText('set blank').click();
    await sleep(100);
    expect(urlAttr()).toEqual('');
    expect(byText('Pokemon Count: 0')).toBeInTheDocument();
  },
  parameters: {
    msw: handlers
  }
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'http-request with error',
    url: '/404'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement),
      $t = async testId => (await canvas.findByTestId(testId)).textContent;
    await canvas.findByText((Http404.args!.title as string));
    await sleep(200);
    expect(await $t('attr-status')).to.include('404');
  },
  parameters: {
    msw: handlers
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'http-request with delayed .5 seconds response',
    url: '/noreturn'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((LifecycleInitialized.args!.title as string));
    expect(await canvas.findByText('request')).toBeInTheDocument(); // after DCE initiated
    expect(canvas.queryByText('response')).toBe(null); // response is not available
    // wait while response appears ~ 0.5 seconds
    expect(await canvas.findByText('response')).toBeInTheDocument(); // only after delay is shown

    expect(await canvas.findByText('bulbasaur')).toBeInTheDocument();
    expect(await canvas.findByText('Pokemon Count: 6')).toBeInTheDocument();
  },
  parameters: {
    msw: handlers
  }
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'http-request headers and response status and headers',
    url: '/reflect'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((RequestResponseHeaders.args!.title as string));
    await sleep(200);

    // see response made by /reflect handler

    const te = await canvas.findByTestId('section-request-attr-x-test');
    expect(te).toBeInTheDocument();
    expect(te.textContent.trim()).toEqual('testing');
    const t1 = await canvas.findByTestId('section-response-attr-x-test');
    expect(t1).toBeInTheDocument();
    expect(t1.textContent.trim()).toEqual('reflected-testing');
    const tAdded = await canvas.findByTestId('section-response-attr-x-added');
    expect(tAdded).toBeInTheDocument();
    expect(tAdded.textContent.trim()).toEqual('abc');
  },
  parameters: {
    msw: handlers
  },
  render: ({
    url,
    title
  }) => \`
        <fieldset>
            <legend>\${title}</legend>
            <p> <b>request</b> headers are populated into dedicated <b>slice/request/headers</b></p>

            <custom-element tag="headers-demo" >
                <template>
<http-request
    url="\${url}"
    slice="request_slice"
    type="text"
    mode="cors"
    header-x-test="testing"
    ></http-request>
Content of <code>//slice/request_slice</code> is filled by <b>request</b> and <b>response</b>
from <code>\${url}</code>

<h3>Samples</h3>
<table>
<tr><th>//slice/request_slice/value/request/headers/@mode</th>
    <td><value-of select="//slice/request_slice/value/request/@mode"/></td></tr>
<tr><th>//slice/request_slice/value/response/headers/@content-type</th>
    <td><value-of select="//slice/request_slice/value/response/headers/@content-type"/></td></tr>
<tr><th>//slice/request_slice/value/response/@status</th>
    <td><value-of select="//slice/request_slice/value/response/@status"/></td></tr>
</table>
<for-each select="//slice/request_slice/value/*">
    <xsl:variable name="section">{name(.)}</xsl:variable>
    <ul date-testid="section-{$section}">
        <b data-testid="request-section"><value-of select='name(.)'/></b>
        <for-each select="@*">
            <div>
                <var >@{local-name(.)}</var>
                =
                <code data-testid="section-{$section}-prop-{local-name(.)}">{.}</code>
            </div>
        </for-each>
        <for-each select="*">
            <div>
                <b data-testid="section-deep"><value-of select='local-name(.)'/></b>
                <ul>
                    <for-each select="@*">
                        <li>
                            <var data-testid="section-attribute">@{local-name(.)}</var>
                            =
                            <code data-testid="section-{$section}-attr-{local-name(.)}">{.}</code>
                        </li>
                    </for-each>
                    <code><value-of select='.'/></code>
                </ul>
            </div>
        </for-each>
    </ul>
</for-each>
</template>
            </custom-element>
            <headers-demo></headers-demo>
      </fieldset>
\`
}`,...L.parameters?.docs?.source}}};const Ht=["Demo","UrlChange","Http404","LifecycleInitialized","RequestResponseHeaders"];export{D as Demo,N as Http404,j as LifecycleInitialized,L as RequestResponseHeaders,I as UrlChange,Ht as __namedExportsOrder,It as default};
