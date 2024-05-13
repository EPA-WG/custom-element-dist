import{w as U,e as w}from"./index-CDavW7r9.js";import"./custom-element-BLZZ00dz.js";import{i as be,d as X,s as Q,R as xe,t as Te}from"./index-CQA5dlr6.js";const Ee=(t,e)=>t.getAttribute(e);class _e extends HTMLElement{static observedAttributes=["value","slice","url","method","header-accept"];get requestHeaders(){const e={};return[...this.attributes].filter(r=>r.name.startsWith("header-")).map(r=>e[r.name.substring(7)]=r.value),e}get requestProps(){const e={};return[...this.attributes].filter(r=>!r.name.startsWith("header-")).filter(r=>!r.name.startsWith("slice")).map(r=>e[r.name]=r.value),e}disconnectedCallback(){this.#e?.()}connectedCallback(){setTimeout(()=>this.fetch(),0)}#t="";#e=()=>{};async fetch(){if(!this.closest("body"))return;const e=Ee(this,"url")||"";if(!e)return this.#e?.(),this.value={};if(this.#t===e)return;this.#t=e;const r=new AbortController;this.#e=()=>{r.abort(this.localName+" disconnected"),this.#t=""};const n={...this.requestProps,headers:this.requestHeaders},a={request:n},l=()=>this.dispatchEvent(new Event("change"));this.value=a,l();const u=await fetch(e,{...this.requestProps,signal:r.signal,headers:this.requestHeaders}),d={headers:{}};if([...u.headers].map(([s,o])=>d.headers[s]=o),"ok,status,statusText,type,url,redirected".split(",").map(s=>d[s]=u[s]),a.response=d,l(),d.headers["content-type"]?.includes("json"))try{a.data=await u.json(),l()}catch{}}attributeChangedCallback(e,r,n){e==="url"&&r!==n&&(r&&this.#e?.(),n?setTimeout(()=>this.fetch(),10):(this.value={},setTimeout(()=>this.dispatchEvent(new Event("change")),10)))}}window.customElements.define("http-request",_e);function Ce(){be(typeof URL<"u",X.formatMessage(`Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`))}function Pe(t,e){return t.toLowerCase()===e.toLowerCase()}function Re(t){return t<300?"#69AB32":t<400?"#F0BB4B":"#E95F5D"}function ke(){const t=new Date;return[t.getHours(),t.getMinutes(),t.getSeconds()].map(String).map(e=>e.slice(0,2)).map(e=>e.padStart(2,"0")).join(":")}async function qe(t){const r=await t.clone().text();return{url:new URL(t.url),method:t.method,headers:Object.fromEntries(t.headers.entries()),body:r}}var Se=Object.create,ie=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,ce=Object.getOwnPropertyNames,Oe=Object.getPrototypeOf,Be=Object.prototype.hasOwnProperty,le=(t,e)=>function(){return e||(0,t[ce(t)[0]])((e={exports:{}}).exports,e),e.exports},$e=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of ce(e))!Be.call(t,a)&&a!==r&&ie(t,a,{get:()=>e[a],enumerable:!(n=Ae(e,a))||n.enumerable});return t},Ie=(t,e,r)=>(r=t!=null?Se(Oe(t)):{},$e(e||!t||!t.__esModule?ie(r,"default",{value:t,enumerable:!0}):r,t)),De=le({"node_modules/statuses/codes.json"(t,e){e.exports={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}}}),Ne=le({"node_modules/statuses/index.js"(t,e){var r=De();e.exports=d,d.message=r,d.code=n(r),d.codes=a(r),d.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},d.empty={204:!0,205:!0,304:!0},d.retry={502:!0,503:!0,504:!0};function n(s){var o={};return Object.keys(s).forEach(function(f){var c=s[f],h=Number(f);o[c.toLowerCase()]=h}),o}function a(s){return Object.keys(s).map(function(i){return Number(i)})}function l(s){var o=s.toLowerCase();if(!Object.prototype.hasOwnProperty.call(d.code,o))throw new Error('invalid status message: "'+s+'"');return d.code[o]}function u(s){if(!Object.prototype.hasOwnProperty.call(d.message,s))throw new Error("invalid status code: "+s);return d.message[s]}function d(s){if(typeof s=="number")return u(s);if(typeof s!="string")throw new TypeError("code must be a number or string");var o=parseInt(s,10);return isNaN(o)?l(s):u(o)}}}),je=Ie(Ne(),1),ue=je.default;/*! Bundled license information:

statuses/index.js:
  (*!
   * statuses
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2016 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/const{message:Le}=ue;async function Ue(t){const e=t.clone(),r=await e.text(),n=e.status||200,a=e.statusText||Le[n]||"OK";return{status:n,statusText:a,headers:Object.fromEntries(e.headers.entries()),body:r}}function He(t){for(var e=[],r=0;r<t.length;){var n=t[r];if(n==="*"||n==="+"||n==="?"){e.push({type:"MODIFIER",index:r,value:t[r++]});continue}if(n==="\\"){e.push({type:"ESCAPED_CHAR",index:r++,value:t[r++]});continue}if(n==="{"){e.push({type:"OPEN",index:r,value:t[r++]});continue}if(n==="}"){e.push({type:"CLOSE",index:r,value:t[r++]});continue}if(n===":"){for(var a="",l=r+1;l<t.length;){var u=t.charCodeAt(l);if(u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||u===95){a+=t[l++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(r));e.push({type:"NAME",index:r,value:a}),r=l;continue}if(n==="("){var d=1,s="",l=r+1;if(t[l]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(l));for(;l<t.length;){if(t[l]==="\\"){s+=t[l++]+t[l++];continue}if(t[l]===")"){if(d--,d===0){l++;break}}else if(t[l]==="("&&(d++,t[l+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(l));s+=t[l++]}if(d)throw new TypeError("Unbalanced pattern at ".concat(r));if(!s)throw new TypeError("Missing pattern at ".concat(r));e.push({type:"PATTERN",index:r,value:s}),r=l;continue}e.push({type:"CHAR",index:r,value:t[r++]})}return e.push({type:"END",index:r,value:""}),e}function Me(t,e){e===void 0&&(e={});for(var r=He(t),n=e.prefixes,a=n===void 0?"./":n,l="[^".concat(A(e.delimiter||"/#?"),"]+?"),u=[],d=0,s=0,o="",i=function(x){if(s<r.length&&r[s].type===x)return r[s++].value},f=function(x){var R=i(x);if(R!==void 0)return R;var k=r[s],z=k.type,F=k.index;throw new TypeError("Unexpected ".concat(z," at ").concat(F,", expected ").concat(x))},c=function(){for(var x="",R;R=i("CHAR")||i("ESCAPED_CHAR");)x+=R;return x};s<r.length;){var h=i("CHAR"),m=i("NAME"),p=i("PATTERN");if(m||p){var v=h||"";a.indexOf(v)===-1&&(o+=v,v=""),o&&(u.push(o),o=""),u.push({name:m||d++,prefix:v,suffix:"",pattern:p||l,modifier:i("MODIFIER")||""});continue}var y=h||i("ESCAPED_CHAR");if(y){o+=y;continue}o&&(u.push(o),o="");var b=i("OPEN");if(b){var v=c(),T=i("NAME")||"",g=i("PATTERN")||"",P=c();f("CLOSE"),u.push({name:T||(g?d++:""),pattern:T&&!g?l:g,prefix:v,suffix:P,modifier:i("MODIFIER")||""});continue}f("END")}return u}function ze(t,e){var r=[],n=pe(t,r,e);return Fe(n,r,e)}function Fe(t,e,r){r===void 0&&(r={});var n=r.decode,a=n===void 0?function(l){return l}:n;return function(l){var u=t.exec(l);if(!u)return!1;for(var d=u[0],s=u.index,o=Object.create(null),i=function(c){if(u[c]===void 0)return"continue";var h=e[c-1];h.modifier==="*"||h.modifier==="+"?o[h.name]=u[c].split(h.prefix+h.suffix).map(function(m){return a(m,h)}):o[h.name]=a(u[c],h)},f=1;f<u.length;f++)i(f);return{path:d,index:s,params:o}}}function A(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function de(t){return t&&t.sensitive?"":"i"}function Ve(t,e){if(!e)return t;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,a=r.exec(t.source);a;)e.push({name:a[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),a=r.exec(t.source);return t}function We(t,e,r){var n=t.map(function(a){return pe(a,e,r).source});return new RegExp("(?:".concat(n.join("|"),")"),de(r))}function Ge(t,e,r){return Je(Me(t,r),e,r)}function Je(t,e,r){r===void 0&&(r={});for(var n=r.strict,a=n===void 0?!1:n,l=r.start,u=l===void 0?!0:l,d=r.end,s=d===void 0?!0:d,o=r.encode,i=o===void 0?function(F){return F}:o,f=r.delimiter,c=f===void 0?"/#?":f,h=r.endsWith,m=h===void 0?"":h,p="[".concat(A(m),"]|$"),v="[".concat(A(c),"]"),y=u?"^":"",b=0,T=t;b<T.length;b++){var g=T[b];if(typeof g=="string")y+=A(i(g));else{var P=A(i(g.prefix)),x=A(i(g.suffix));if(g.pattern)if(e&&e.push(g),P||x)if(g.modifier==="+"||g.modifier==="*"){var R=g.modifier==="*"?"?":"";y+="(?:".concat(P,"((?:").concat(g.pattern,")(?:").concat(x).concat(P,"(?:").concat(g.pattern,"))*)").concat(x,")").concat(R)}else y+="(?:".concat(P,"(").concat(g.pattern,")").concat(x,")").concat(g.modifier);else g.modifier==="+"||g.modifier==="*"?y+="((?:".concat(g.pattern,")").concat(g.modifier,")"):y+="(".concat(g.pattern,")").concat(g.modifier);else y+="(?:".concat(P).concat(x,")").concat(g.modifier)}}if(s)a||(y+="".concat(v,"?")),y+=r.endsWith?"(?=".concat(p,")"):"$";else{var k=t[t.length-1],z=typeof k=="string"?v.indexOf(k[k.length-1])>-1:k===void 0;a||(y+="(?:".concat(v,"(?=").concat(p,"))?")),z||(y+="(?=".concat(v,"|").concat(p,")"))}return new RegExp(y,de(r))}function pe(t,e,r){return t instanceof RegExp?Ve(t,e):Array.isArray(t)?We(t,e,r):Ge(t,e,r)}new TextEncoder;function fe(){if(typeof navigator<"u"&&navigator.product==="ReactNative")return!0;if(typeof process<"u"){const t=process.type;return t==="renderer"||t==="worker"?!1:!!(process.versions&&process.versions.node)}return!1}var Xe=Object.defineProperty,Ke=(t,e)=>{for(var r in e)Xe(t,r,{get:e[r],enumerable:!0})},Qe={};Ke(Qe,{blue:()=>Ye,gray:()=>et,green:()=>rt,red:()=>tt,yellow:()=>Ze});function Ze(t){return`\x1B[33m${t}\x1B[0m`}function Ye(t){return`\x1B[34m${t}\x1B[0m`}function et(t){return`\x1B[90m${t}\x1B[0m`}function tt(t){return`\x1B[31m${t}\x1B[0m`}function rt(t){return`\x1B[32m${t}\x1B[0m`}fe();function nt(t,e=!0){return[e&&t.origin,t.pathname].filter(Boolean).join("")}const at=/[\?|#].*$/g;function st(t){return new URL(`/${t}`,"http://localhost").searchParams}function he(t){return t.replace(at,"")}function ot(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}function it(t,e){if(ot(t)||t.startsWith("*"))return t;const r=e||typeof document<"u"&&document.baseURI;return r?decodeURI(new URL(encodeURI(t),r).href):t}function ct(t,e){if(t instanceof RegExp)return t;const r=it(t,e);return he(r)}function lt(t){return t.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g,(e,r,n)=>{const a="(.*)";return r?r.startsWith(":")?`${r}${n}`:`${r}${a}`:a}).replace(/([^\/])(:)(?=\d+)/,"$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/,"$1\\$2")}function ut(t,e,r){const n=ct(e,r),a=typeof n=="string"?lt(n):n,l=nt(t),u=ze(a,{decode:decodeURIComponent})(l),d=u&&u.params||{};return{matches:u!==!1,params:d}}var dt=Object.create,me=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,ve=Object.getOwnPropertyNames,ft=Object.getPrototypeOf,ht=Object.prototype.hasOwnProperty,mt=(t,e)=>function(){return e||(0,t[ve(t)[0]])((e={exports:{}}).exports,e),e.exports},vt=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of ve(e))!ht.call(t,a)&&a!==r&&me(t,a,{get:()=>e[a],enumerable:!(n=pt(e,a))||n.enumerable});return t},yt=(t,e,r)=>(r=t!=null?dt(ft(t)):{},vt(e||!t||!t.__esModule?me(r,"default",{value:t,enumerable:!0}):r,t)),gt=mt({"node_modules/cookie/index.js"(t){t.parse=n,t.serialize=a;var e=Object.prototype.toString,r=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function n(o,i){if(typeof o!="string")throw new TypeError("argument str must be a string");for(var f={},c=i||{},h=c.decode||l,m=0;m<o.length;){var p=o.indexOf("=",m);if(p===-1)break;var v=o.indexOf(";",m);if(v===-1)v=o.length;else if(v<p){m=o.lastIndexOf(";",p-1)+1;continue}var y=o.slice(m,p).trim();if(f[y]===void 0){var b=o.slice(p+1,v).trim();b.charCodeAt(0)===34&&(b=b.slice(1,-1)),f[y]=s(b,h)}m=v+1}return f}function a(o,i,f){var c=f||{},h=c.encode||u;if(typeof h!="function")throw new TypeError("option encode is invalid");if(!r.test(o))throw new TypeError("argument name is invalid");var m=h(i);if(m&&!r.test(m))throw new TypeError("argument val is invalid");var p=o+"="+m;if(c.maxAge!=null){var v=c.maxAge-0;if(isNaN(v)||!isFinite(v))throw new TypeError("option maxAge is invalid");p+="; Max-Age="+Math.floor(v)}if(c.domain){if(!r.test(c.domain))throw new TypeError("option domain is invalid");p+="; Domain="+c.domain}if(c.path){if(!r.test(c.path))throw new TypeError("option path is invalid");p+="; Path="+c.path}if(c.expires){var y=c.expires;if(!d(y)||isNaN(y.valueOf()))throw new TypeError("option expires is invalid");p+="; Expires="+y.toUTCString()}if(c.httpOnly&&(p+="; HttpOnly"),c.secure&&(p+="; Secure"),c.priority){var b=typeof c.priority=="string"?c.priority.toLowerCase():c.priority;switch(b){case"low":p+="; Priority=Low";break;case"medium":p+="; Priority=Medium";break;case"high":p+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(c.sameSite){var T=typeof c.sameSite=="string"?c.sameSite.toLowerCase():c.sameSite;switch(T){case!0:p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"strict":p+="; SameSite=Strict";break;case"none":p+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return p}function l(o){return o.indexOf("%")!==-1?decodeURIComponent(o):o}function u(o){return encodeURIComponent(o)}function d(o){return e.call(o)==="[object Date]"||o instanceof Date}function s(o,i){try{return i(o)}catch{return o}}}}),wt=yt(gt(),1),K=wt.default;/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/function Z(){return K.parse(document.cookie)}function bt(t){if(typeof document>"u"||typeof location>"u")return{};switch(t.credentials){case"same-origin":{const e=new URL(t.url);return location.origin===e.origin?Z():{}}case"include":return Z();default:return{}}}function xt(t){const e=t.headers.get("cookie"),r=e?K.parse(e):{};Q.hydrate();const n=Array.from(Q.get(t)?.entries()).reduce((u,[d,{value:s}])=>Object.assign(u,{[d.trim()]:s}),{}),l={...bt(t),...n};for(const[u,d]of Object.entries(l))t.headers.append("cookie",K.serialize(u,d));return{...l,...r}}var C=(t=>(t.HEAD="HEAD",t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.OPTIONS="OPTIONS",t.DELETE="DELETE",t))(C||{});class Tt extends xe{constructor(e,r,n,a){super({info:{header:`${e} ${r}`,path:r,method:e},resolver:n,options:a}),this.checkRedundantQueryParameters()}checkRedundantQueryParameters(){const{method:e,path:r}=this.info;if(r instanceof RegExp||he(r)===r)return;st(r).forEach((l,u)=>{}),X.warn(`Found a redundant usage of query parameters in the request handler URL for "${e} ${r}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/recipes/query-parameters`)}async parse(e){const r=new URL(e.request.url),n=ut(r,this.info.path,e.resolutionContext?.baseUrl),a=xt(e.request);return{match:n,cookies:a}}predicate(e){const r=this.matchMethod(e.request.method),n=e.parsedResult.match.matches;return r&&n}matchMethod(e){return this.info.method instanceof RegExp?this.info.method.test(e):Pe(this.info.method,e)}extendResolverArgs(e){return{params:e.parsedResult.match?.params||{},cookies:e.parsedResult.cookies}}async log(e){const r=Te(e.request.url),n=await qe(e.request),a=await Ue(e.response),l=Re(a.status);console.groupCollapsed(X.formatMessage(`${ke()} ${e.request.method} ${r} (%c${a.status} ${a.statusText}%c)`),`color:${l}`,"color:inherit"),console.log("Request",n),console.log("Handler:",this),console.log("Response",a),console.groupEnd()}}function _(t){return(e,r,n={})=>new Tt(t,e,r,n)}const M={all:_(/.+/),head:_(C.HEAD),get:_(C.GET),post:_(C.POST),put:_(C.PUT),delete:_(C.DELETE),patch:_(C.PATCH),options:_(C.OPTIONS)};var Et=Object.create,ye=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,ge=Object.getOwnPropertyNames,Ct=Object.getPrototypeOf,Pt=Object.prototype.hasOwnProperty,Rt=(t,e)=>function(){return e||(0,t[ge(t)[0]])((e={exports:{}}).exports,e),e.exports},kt=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of ge(e))!Pt.call(t,a)&&a!==r&&ye(t,a,{get:()=>e[a],enumerable:!(n=_t(e,a))||n.enumerable});return t},qt=(t,e,r)=>(r=t!=null?Et(Ct(t)):{},kt(e||!t||!t.__esModule?ye(r,"default",{value:t,enumerable:!0}):r,t)),St=Rt({"node_modules/set-cookie-parser/lib/set-cookie.js"(t,e){var r={decodeValues:!0,map:!1,silent:!1};function n(s){return typeof s=="string"&&!!s.trim()}function a(s,o){var i=s.split(";").filter(n),f=i.shift(),c=l(f),h=c.name,m=c.value;o=o?Object.assign({},r,o):r;try{m=o.decodeValues?decodeURIComponent(m):m}catch(v){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+m+"'. Set options.decodeValues to false to disable this feature.",v)}var p={name:h,value:m};return i.forEach(function(v){var y=v.split("="),b=y.shift().trimLeft().toLowerCase(),T=y.join("=");b==="expires"?p.expires=new Date(T):b==="max-age"?p.maxAge=parseInt(T,10):b==="secure"?p.secure=!0:b==="httponly"?p.httpOnly=!0:b==="samesite"?p.sameSite=T:p[b]=T}),p}function l(s){var o="",i="",f=s.split("=");return f.length>1?(o=f.shift(),i=f.join("=")):i=s,{name:o,value:i}}function u(s,o){if(o=o?Object.assign({},r,o):r,!s)return o.map?{}:[];if(s.headers)if(typeof s.headers.getSetCookie=="function")s=s.headers.getSetCookie();else if(s.headers["set-cookie"])s=s.headers["set-cookie"];else{var i=s.headers[Object.keys(s.headers).find(function(c){return c.toLowerCase()==="set-cookie"})];!i&&s.headers.cookie&&!o.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),s=i}if(Array.isArray(s)||(s=[s]),o=o?Object.assign({},r,o):r,o.map){var f={};return s.filter(n).reduce(function(c,h){var m=a(h,o);return c[m.name]=m,c},f)}else return s.filter(n).map(function(c){return a(c,o)})}function d(s){if(Array.isArray(s))return s;if(typeof s!="string")return[];var o=[],i=0,f,c,h,m,p;function v(){for(;i<s.length&&/\s/.test(s.charAt(i));)i+=1;return i<s.length}function y(){return c=s.charAt(i),c!=="="&&c!==";"&&c!==","}for(;i<s.length;){for(f=i,p=!1;v();)if(c=s.charAt(i),c===","){for(h=i,i+=1,v(),m=i;i<s.length&&y();)i+=1;i<s.length&&s.charAt(i)==="="?(p=!0,i=m,o.push(s.substring(f,h)),f=i):i=h+1}else i+=1;(!p||i>=s.length)&&o.push(s.substring(f,s.length))}return o}e.exports=u,e.exports.parse=u,e.exports.parseString=a,e.exports.splitCookiesString=d}}),At=qt(St()),Ot=/[^a-z0-9\-#$%&'*+.^_`|~]/i;function B(t){if(Ot.test(t)||t.trim()==="")throw new TypeError("Invalid character in header field name");return t.trim().toLowerCase()}var Y=[`
`,"\r","	"," "],Bt=new RegExp(`(^[${Y.join("")}]|$[${Y.join("")}])`,"g");function V(t){return t.replace(Bt,"")}function $(t){if(typeof t!="string"||t.length===0)return!1;for(let e=0;e<t.length;e++){const r=t.charCodeAt(e);if(r>127||!$t(r))return!1}return!0}function $t(t){return![127,32,"(",")","<",">","@",",",";",":","\\",'"',"/","[","]","?","=","{","}"].includes(t)}function ee(t){if(typeof t!="string"||t.trim()!==t)return!1;for(let e=0;e<t.length;e++){const r=t.charCodeAt(e);if(r===0||r===10||r===13)return!1}return!0}var q=Symbol("normalizedHeaders"),W=Symbol("rawHeaderNames"),te=", ",re,ne,ae,It=class we{constructor(e){this[re]={},this[ne]=new Map,this[ae]="Headers",["Headers","HeadersPolyfill"].includes(e?.constructor.name)||e instanceof we||typeof globalThis.Headers<"u"&&e instanceof globalThis.Headers?e.forEach((n,a)=>{this.append(a,n)},this):Array.isArray(e)?e.forEach(([r,n])=>{this.append(r,Array.isArray(n)?n.join(te):n)}):e&&Object.getOwnPropertyNames(e).forEach(r=>{const n=e[r];this.append(r,Array.isArray(n)?n.join(te):n)})}[(re=q,ne=W,ae=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}*keys(){for(const[e]of this.entries())yield e}*values(){for(const[,e]of this.entries())yield e}*entries(){let e=Object.keys(this[q]).sort((r,n)=>r.localeCompare(n));for(const r of e)if(r==="set-cookie")for(const n of this.getSetCookie())yield[r,n];else yield[r,this.get(r)]}has(e){if(!$(e))throw new TypeError(`Invalid header name "${e}"`);return this[q].hasOwnProperty(B(e))}get(e){if(!$(e))throw TypeError(`Invalid header name "${e}"`);return this[q][B(e)]??null}set(e,r){if(!$(e)||!ee(r))return;const n=B(e),a=V(r);this[q][n]=V(a),this[W].set(n,e)}append(e,r){if(!$(e)||!ee(r))return;const n=B(e),a=V(r);let l=this.has(n)?`${this.get(n)}, ${a}`:a;this.set(e,l)}delete(e){if(!$(e)||!this.has(e))return;const r=B(e);delete this[q][r],this[W].delete(r)}forEach(e,r){for(const[n,a]of this.entries())e.call(r,a,n,this)}getSetCookie(){const e=this.get("set-cookie");return e===null?[]:e===""?[""]:(0,At.splitCookiesString)(e)}};const{message:Dt}=ue;function S(t={}){const e=t?.status||200,r=t?.statusText||Dt[e]||"",n=new Headers(t?.headers);return{...t,headers:n,status:e,statusText:r}}function Nt(t,e){if(e.type&&Object.defineProperty(t,"type",{value:e.type,enumerable:!0,writable:!1}),typeof document<"u"){const r=It.prototype.getSetCookie.call(e.headers);for(const n of r)document.cookie=n}return t}class E extends Response{constructor(e,r){const n=S(r);super(e,n),Nt(this,n)}static text(e,r){const n=S(r);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/plain"),n.headers.has("Content-Length")||n.headers.set("Content-Length",e?new Blob([e]).size.toString():"0"),new E(e,n)}static json(e,r){const n=S(r);n.headers.has("Content-Type")||n.headers.set("Content-Type","application/json");const a=JSON.stringify(e);return n.headers.has("Content-Length")||n.headers.set("Content-Length",a?new Blob([a]).size.toString():"0"),new E(a,n)}static xml(e,r){const n=S(r);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/xml"),new E(e,n)}static arrayBuffer(e,r){const n=S(r);return e&&n.headers.set("Content-Length",e.byteLength.toString()),new E(e,n)}static formData(e,r){return new E(e,S(r))}}const G=2147483647,se=100,jt=400,Lt=5;function oe(){return fe()?Lt:Math.floor(Math.random()*(jt-se)+se)}async function Ut(t){let e;if(typeof t=="string")switch(t){case"infinite":{e=G;break}case"real":{e=oe();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${t}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}else if(typeof t>"u")e=oe();else{if(t>G)throw new Error(`Failed to delay a response: provided delay duration (${t}) exceeds the maximum allowed duration for "setTimeout" (${G}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);e=t}return new Promise(r=>setTimeout(r,e))}Ce();const J={count:1279,next:"https://pokeapi.co/api/v2/pokemon?offset=6&limit=6",previous:null,results:[{name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"},{name:"ivysaur",url:"https://pokeapi.co/api/v2/pokemon/2/"},{name:"venusaur",url:"https://pokeapi.co/api/v2/pokemon/3/"},{name:"charmander",url:"https://pokeapi.co/api/v2/pokemon/4/"},{name:"charmeleon",url:"https://pokeapi.co/api/v2/pokemon/5/"},{name:"charizard",url:"https://pokeapi.co/api/v2/pokemon/6/"}]},H=[M.get("/pokemon",({request:t})=>{const r=new URL(t.url).searchParams.get("limit"),n=structuredClone(J);return r&&(n.results=n.results.slice(0,Number(r))),E.json(n)}),M.get("/noreturn",async()=>(await Ut(500),E.json(J))),M.get("/reflect",({request:t})=>{const e={};return[...t.headers.entries()].map(([r,n])=>e[r]="reflected-"+n),e["x-added"]="abc",E.json(J,{headers:e})}),M.get("/404",()=>new E(null,{status:404,statusText:"not found"}))],Ht={title:"",slice:"page",url:"/pokemon?limit=6"};function O(t){return new Promise(e=>setTimeout(e,t))}function Mt({title:t,slice:e,url:r}){return`
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
  `}const zt={title:"http-request",render:t=>Mt(t),renderPlay:async function(e){document.body.innerHTML=(e.render?e:zt).render({...Ht,...e.args}),await new Promise(r=>setTimeout(async()=>{await e.play({canvasElement:document.body.firstElementChild}),r(0)},0))}},I={args:{title:"url and slice",url:"/pokemon?limit=4"},play:async({canvasElement:t})=>{const e=U(t);await e.findByText(I.args.title),w(await e.findByText("bulbasaur")).toBeInTheDocument(),w(await e.findByText("Pokemon Count: 4")).toBeInTheDocument(t)},parameters:{msw:H}},D={args:{title:"url change",url:""},play:async({canvasElement:t})=>{const e=U(t);await e.findByText(D.args.title);const r=l=>e.getByText(l),n=t.querySelector("http-request"),a=()=>n.getAttribute("url");w(r("Pokemon Count: 0")).toBeInTheDocument(),w(a()).toEqual(""),r("/pokemon").click(),await O(100),w(a()).toEqual("/pokemon"),w(r("Pokemon Count: 6")).toBeInTheDocument(),r("/pokemon?limit=6").click(),await O(100),w(a()).toEqual("/pokemon?limit=6"),w(r("Pokemon Count: 6")).toBeInTheDocument(),r("/pokemon?limit=3").click(),await O(100),w(a()).toEqual("/pokemon?limit=3"),w(r("Pokemon Count: 3")).toBeInTheDocument(),r("set blank").click(),await O(100),w(a()).toEqual(""),w(r("Pokemon Count: 0")).toBeInTheDocument()},parameters:{msw:H}},N={args:{title:"http-request with error",url:"/404"},play:async({canvasElement:t})=>{const e=U(t),r=async n=>(await e.findByTestId(n)).textContent;await e.findByText(N.args.title),await O(200),w(await r("attr-status")).to.include("404")},parameters:{msw:H}},j={args:{title:"http-request with delayed .5 seconds response",url:"/noreturn"},play:async({canvasElement:t})=>{const e=U(t);await e.findByText(j.args.title),w(await e.findByText("request")).toBeInTheDocument(),w(e.queryByText("response")).toBe(null),w(await e.findByText("response")).toBeInTheDocument(),w(await e.findByText("bulbasaur")).toBeInTheDocument(),w(await e.findByText("Pokemon Count: 6")).toBeInTheDocument()},parameters:{msw:H}},L={args:{title:"http-request headers and response status and headers",url:"/reflect"},play:async({canvasElement:t})=>{const e=U(t);await e.findByText(L.args.title),await O(200);const r=await e.findByTestId("section-request-attr-x-test");w(r).toBeInTheDocument(),w(r.textContent.trim()).toEqual("testing");const n=await e.findByTestId("section-response-attr-x-test");w(n).toBeInTheDocument(),w(n.textContent.trim()).toEqual("reflected-testing");const a=await e.findByTestId("section-response-attr-x-added");w(a).toBeInTheDocument(),w(a.textContent.trim()).toEqual("abc")},parameters:{msw:H},render:({url:t,title:e})=>`
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
`};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const Gt=["Demo","UrlChange","Http404","LifecycleInitialized","RequestResponseHeaders"];export{I as Demo,N as Http404,j as LifecycleInitialized,L as RequestResponseHeaders,D as UrlChange,Gt as __namedExportsOrder,zt as default};
