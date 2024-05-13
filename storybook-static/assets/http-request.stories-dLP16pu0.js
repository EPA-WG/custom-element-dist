var ze=Object.defineProperty;var Fe=(t,e,r)=>e in t?ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var re=(t,e,r)=>(Fe(t,typeof e!="symbol"?e+"":e,r),r),ne=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var I=(t,e,r)=>(ne(t,e,"read from private field"),r?r.call(t):e.get(t)),X=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},V=(t,e,r,n)=>(ne(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);import{w as z,e as w}from"./index-BASH1HpE.js";import"./custom-element--HC2GPP6.js";import{i as Ve,d as ee,s as ae,R as We,t as Ge}from"./index-zmhHS-aW.js";const Je=(t,e)=>t.getAttribute(e);var $,q;class qe extends HTMLElement{constructor(){super(...arguments);X(this,$,"");X(this,q,()=>{})}get requestHeaders(){const r={};return[...this.attributes].filter(n=>n.name.startsWith("header-")).map(n=>r[n.name.substring(7)]=n.value),r}get requestProps(){const r={};return[...this.attributes].filter(n=>!n.name.startsWith("header-")).filter(n=>!n.name.startsWith("slice")).map(n=>r[n.name]=n.value),r}disconnectedCallback(){var r;(r=I(this,q))==null||r.call(this)}connectedCallback(){setTimeout(()=>this.fetch(),0)}async fetch(){var o,i;if(!this.closest("body"))return;const r=Je(this,"url")||"";if(!r)return(o=I(this,q))==null||o.call(this),this.value={};if(I(this,$)===r)return;V(this,$,r);const n=new AbortController;V(this,q,()=>{n.abort(this.localName+" disconnected"),V(this,$,"")});const a={...this.requestProps,headers:this.requestHeaders},c={request:a},u=()=>this.dispatchEvent(new Event("change"));this.value=c,u();const p=await fetch(r,{...this.requestProps,signal:n.signal,headers:this.requestHeaders}),s={headers:{}};if([...p.headers].map(([f,l])=>s.headers[f]=l),"ok,status,statusText,type,url,redirected".split(",").map(f=>s[f]=p[f]),c.response=s,u(),(i=s.headers["content-type"])!=null&&i.includes("json"))try{c.data=await p.json(),u()}catch{}}attributeChangedCallback(r,n,a){var c;r==="url"&&n!==a&&(n&&((c=I(this,q))==null||c.call(this)),a?setTimeout(()=>this.fetch(),10):(this.value={},setTimeout(()=>this.dispatchEvent(new Event("change")),10)))}}$=new WeakMap,q=new WeakMap,re(qe,"observedAttributes",["value","slice","url","method","header-accept"]);window.customElements.define("http-request",qe);function Xe(){Ve(typeof URL<"u",ee.formatMessage(`Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`))}function Ke(t,e){return t.toLowerCase()===e.toLowerCase()}function Qe(t){return t<300?"#69AB32":t<400?"#F0BB4B":"#E95F5D"}function Ze(){const t=new Date;return[t.getHours(),t.getMinutes(),t.getSeconds()].map(String).map(e=>e.slice(0,2)).map(e=>e.padStart(2,"0")).join(":")}async function Ye(t){const r=await t.clone().text();return{url:new URL(t.url),method:t.method,headers:Object.fromEntries(t.headers.entries()),body:r}}var et=Object.create,Se=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,Ae=Object.getOwnPropertyNames,rt=Object.getPrototypeOf,nt=Object.prototype.hasOwnProperty,Oe=(t,e)=>function(){return e||(0,t[Ae(t)[0]])((e={exports:{}}).exports,e),e.exports},at=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Ae(e))!nt.call(t,a)&&a!==r&&Se(t,a,{get:()=>e[a],enumerable:!(n=tt(e,a))||n.enumerable});return t},st=(t,e,r)=>(r=t!=null?et(rt(t)):{},at(e||!t||!t.__esModule?Se(r,"default",{value:t,enumerable:!0}):r,t)),ot=Oe({"node_modules/statuses/codes.json"(t,e){e.exports={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}}}),it=Oe({"node_modules/statuses/index.js"(t,e){var r=ot();e.exports=p,p.message=r,p.code=n(r),p.codes=a(r),p.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},p.empty={204:!0,205:!0,304:!0},p.retry={502:!0,503:!0,504:!0};function n(s){var o={};return Object.keys(s).forEach(function(f){var l=s[f],h=Number(f);o[l.toLowerCase()]=h}),o}function a(s){return Object.keys(s).map(function(i){return Number(i)})}function c(s){var o=s.toLowerCase();if(!Object.prototype.hasOwnProperty.call(p.code,o))throw new Error('invalid status message: "'+s+'"');return p.code[o]}function u(s){if(!Object.prototype.hasOwnProperty.call(p.message,s))throw new Error("invalid status code: "+s);return p.message[s]}function p(s){if(typeof s=="number")return u(s);if(typeof s!="string")throw new TypeError("code must be a number or string");var o=parseInt(s,10);return isNaN(o)?c(s):u(o)}}}),ct=st(it(),1),Be=ct.default;/*! Bundled license information:

statuses/index.js:
  (*!
   * statuses
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2016 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/const{message:lt}=Be;async function ut(t){const e=t.clone(),r=await e.text(),n=e.status||200,a=e.statusText||lt[n]||"OK";return{status:n,statusText:a,headers:Object.fromEntries(e.headers.entries()),body:r}}function dt(t){for(var e=[],r=0;r<t.length;){var n=t[r];if(n==="*"||n==="+"||n==="?"){e.push({type:"MODIFIER",index:r,value:t[r++]});continue}if(n==="\\"){e.push({type:"ESCAPED_CHAR",index:r++,value:t[r++]});continue}if(n==="{"){e.push({type:"OPEN",index:r,value:t[r++]});continue}if(n==="}"){e.push({type:"CLOSE",index:r,value:t[r++]});continue}if(n===":"){for(var a="",c=r+1;c<t.length;){var u=t.charCodeAt(c);if(u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||u===95){a+=t[c++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(r));e.push({type:"NAME",index:r,value:a}),r=c;continue}if(n==="("){var p=1,s="",c=r+1;if(t[c]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(c));for(;c<t.length;){if(t[c]==="\\"){s+=t[c++]+t[c++];continue}if(t[c]===")"){if(p--,p===0){c++;break}}else if(t[c]==="("&&(p++,t[c+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(c));s+=t[c++]}if(p)throw new TypeError("Unbalanced pattern at ".concat(r));if(!s)throw new TypeError("Missing pattern at ".concat(r));e.push({type:"PATTERN",index:r,value:s}),r=c;continue}e.push({type:"CHAR",index:r,value:t[r++]})}return e.push({type:"END",index:r,value:""}),e}function pt(t,e){e===void 0&&(e={});for(var r=dt(t),n=e.prefixes,a=n===void 0?"./":n,c="[^".concat(O(e.delimiter||"/#?"),"]+?"),u=[],p=0,s=0,o="",i=function(x){if(s<r.length&&r[s].type===x)return r[s++].value},f=function(x){var k=i(x);if(k!==void 0)return k;var R=r[s],G=R.type,J=R.index;throw new TypeError("Unexpected ".concat(G," at ").concat(J,", expected ").concat(x))},l=function(){for(var x="",k;k=i("CHAR")||i("ESCAPED_CHAR");)x+=k;return x};s<r.length;){var h=i("CHAR"),m=i("NAME"),d=i("PATTERN");if(m||d){var v=h||"";a.indexOf(v)===-1&&(o+=v,v=""),o&&(u.push(o),o=""),u.push({name:m||p++,prefix:v,suffix:"",pattern:d||c,modifier:i("MODIFIER")||""});continue}var y=h||i("ESCAPED_CHAR");if(y){o+=y;continue}o&&(u.push(o),o="");var b=i("OPEN");if(b){var v=l(),T=i("NAME")||"",g=i("PATTERN")||"",P=l();f("CLOSE"),u.push({name:T||(g?p++:""),pattern:T&&!g?c:g,prefix:v,suffix:P,modifier:i("MODIFIER")||""});continue}f("END")}return u}function ft(t,e){var r=[],n=Ie(t,r,e);return ht(n,r,e)}function ht(t,e,r){r===void 0&&(r={});var n=r.decode,a=n===void 0?function(c){return c}:n;return function(c){var u=t.exec(c);if(!u)return!1;for(var p=u[0],s=u.index,o=Object.create(null),i=function(l){if(u[l]===void 0)return"continue";var h=e[l-1];h.modifier==="*"||h.modifier==="+"?o[h.name]=u[l].split(h.prefix+h.suffix).map(function(m){return a(m,h)}):o[h.name]=a(u[l],h)},f=1;f<u.length;f++)i(f);return{path:p,index:s,params:o}}}function O(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function $e(t){return t&&t.sensitive?"":"i"}function mt(t,e){if(!e)return t;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,a=r.exec(t.source);a;)e.push({name:a[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),a=r.exec(t.source);return t}function vt(t,e,r){var n=t.map(function(a){return Ie(a,e,r).source});return new RegExp("(?:".concat(n.join("|"),")"),$e(r))}function yt(t,e,r){return gt(pt(t,r),e,r)}function gt(t,e,r){r===void 0&&(r={});for(var n=r.strict,a=n===void 0?!1:n,c=r.start,u=c===void 0?!0:c,p=r.end,s=p===void 0?!0:p,o=r.encode,i=o===void 0?function(J){return J}:o,f=r.delimiter,l=f===void 0?"/#?":f,h=r.endsWith,m=h===void 0?"":h,d="[".concat(O(m),"]|$"),v="[".concat(O(l),"]"),y=u?"^":"",b=0,T=t;b<T.length;b++){var g=T[b];if(typeof g=="string")y+=O(i(g));else{var P=O(i(g.prefix)),x=O(i(g.suffix));if(g.pattern)if(e&&e.push(g),P||x)if(g.modifier==="+"||g.modifier==="*"){var k=g.modifier==="*"?"?":"";y+="(?:".concat(P,"((?:").concat(g.pattern,")(?:").concat(x).concat(P,"(?:").concat(g.pattern,"))*)").concat(x,")").concat(k)}else y+="(?:".concat(P,"(").concat(g.pattern,")").concat(x,")").concat(g.modifier);else g.modifier==="+"||g.modifier==="*"?y+="((?:".concat(g.pattern,")").concat(g.modifier,")"):y+="(".concat(g.pattern,")").concat(g.modifier);else y+="(?:".concat(P).concat(x,")").concat(g.modifier)}}if(s)a||(y+="".concat(v,"?")),y+=r.endsWith?"(?=".concat(d,")"):"$";else{var R=t[t.length-1],G=typeof R=="string"?v.indexOf(R[R.length-1])>-1:R===void 0;a||(y+="(?:".concat(v,"(?=").concat(d,"))?")),G||(y+="(?=".concat(v,"|").concat(d,")"))}return new RegExp(y,$e(r))}function Ie(t,e,r){return t instanceof RegExp?mt(t,e):Array.isArray(t)?vt(t,e,r):yt(t,e,r)}new TextEncoder;function De(){if(typeof navigator<"u"&&navigator.product==="ReactNative")return!0;if(typeof process<"u"){const t=process.type;return t==="renderer"||t==="worker"?!1:!!(process.versions&&process.versions.node)}return!1}var wt=Object.defineProperty,bt=(t,e)=>{for(var r in e)wt(t,r,{get:e[r],enumerable:!0})},xt={};bt(xt,{blue:()=>Et,gray:()=>_t,green:()=>Pt,red:()=>Ct,yellow:()=>Tt});function Tt(t){return`\x1B[33m${t}\x1B[0m`}function Et(t){return`\x1B[34m${t}\x1B[0m`}function _t(t){return`\x1B[90m${t}\x1B[0m`}function Ct(t){return`\x1B[31m${t}\x1B[0m`}function Pt(t){return`\x1B[32m${t}\x1B[0m`}De();function kt(t,e=!0){return[e&&t.origin,t.pathname].filter(Boolean).join("")}const Rt=/[\?|#].*$/g;function qt(t){return new URL(`/${t}`,"http://localhost").searchParams}function Ne(t){return t.replace(Rt,"")}function St(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}function At(t,e){if(St(t)||t.startsWith("*"))return t;const r=e||typeof document<"u"&&document.baseURI;return r?decodeURI(new URL(encodeURI(t),r).href):t}function Ot(t,e){if(t instanceof RegExp)return t;const r=At(t,e);return Ne(r)}function Bt(t){return t.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g,(e,r,n)=>{const a="(.*)";return r?r.startsWith(":")?`${r}${n}`:`${r}${a}`:a}).replace(/([^\/])(:)(?=\d+)/,"$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/,"$1\\$2")}function $t(t,e,r){const n=Ot(e,r),a=typeof n=="string"?Bt(n):n,c=kt(t),u=ft(a,{decode:decodeURIComponent})(c),p=u&&u.params||{};return{matches:u!==!1,params:p}}var It=Object.create,je=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,Le=Object.getOwnPropertyNames,Nt=Object.getPrototypeOf,jt=Object.prototype.hasOwnProperty,Lt=(t,e)=>function(){return e||(0,t[Le(t)[0]])((e={exports:{}}).exports,e),e.exports},Ut=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Le(e))!jt.call(t,a)&&a!==r&&je(t,a,{get:()=>e[a],enumerable:!(n=Dt(e,a))||n.enumerable});return t},Ht=(t,e,r)=>(r=t!=null?It(Nt(t)):{},Ut(e||!t||!t.__esModule?je(r,"default",{value:t,enumerable:!0}):r,t)),Mt=Lt({"node_modules/cookie/index.js"(t){t.parse=n,t.serialize=a;var e=Object.prototype.toString,r=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function n(o,i){if(typeof o!="string")throw new TypeError("argument str must be a string");for(var f={},l=i||{},h=l.decode||c,m=0;m<o.length;){var d=o.indexOf("=",m);if(d===-1)break;var v=o.indexOf(";",m);if(v===-1)v=o.length;else if(v<d){m=o.lastIndexOf(";",d-1)+1;continue}var y=o.slice(m,d).trim();if(f[y]===void 0){var b=o.slice(d+1,v).trim();b.charCodeAt(0)===34&&(b=b.slice(1,-1)),f[y]=s(b,h)}m=v+1}return f}function a(o,i,f){var l=f||{},h=l.encode||u;if(typeof h!="function")throw new TypeError("option encode is invalid");if(!r.test(o))throw new TypeError("argument name is invalid");var m=h(i);if(m&&!r.test(m))throw new TypeError("argument val is invalid");var d=o+"="+m;if(l.maxAge!=null){var v=l.maxAge-0;if(isNaN(v)||!isFinite(v))throw new TypeError("option maxAge is invalid");d+="; Max-Age="+Math.floor(v)}if(l.domain){if(!r.test(l.domain))throw new TypeError("option domain is invalid");d+="; Domain="+l.domain}if(l.path){if(!r.test(l.path))throw new TypeError("option path is invalid");d+="; Path="+l.path}if(l.expires){var y=l.expires;if(!p(y)||isNaN(y.valueOf()))throw new TypeError("option expires is invalid");d+="; Expires="+y.toUTCString()}if(l.httpOnly&&(d+="; HttpOnly"),l.secure&&(d+="; Secure"),l.priority){var b=typeof l.priority=="string"?l.priority.toLowerCase():l.priority;switch(b){case"low":d+="; Priority=Low";break;case"medium":d+="; Priority=Medium";break;case"high":d+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(l.sameSite){var T=typeof l.sameSite=="string"?l.sameSite.toLowerCase():l.sameSite;switch(T){case!0:d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"strict":d+="; SameSite=Strict";break;case"none":d+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return d}function c(o){return o.indexOf("%")!==-1?decodeURIComponent(o):o}function u(o){return encodeURIComponent(o)}function p(o){return e.call(o)==="[object Date]"||o instanceof Date}function s(o,i){try{return i(o)}catch{return o}}}}),zt=Ht(Mt(),1),te=zt.default;/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/function se(){return te.parse(document.cookie)}function Ft(t){if(typeof document>"u"||typeof location>"u")return{};switch(t.credentials){case"same-origin":{const e=new URL(t.url);return location.origin===e.origin?se():{}}case"include":return se();default:return{}}}function Vt(t){var u;const e=t.headers.get("cookie"),r=e?te.parse(e):{};ae.hydrate();const n=Array.from((u=ae.get(t))==null?void 0:u.entries()).reduce((p,[s,{value:o}])=>Object.assign(p,{[s.trim()]:o}),{}),c={...Ft(t),...n};for(const[p,s]of Object.entries(c))t.headers.append("cookie",te.serialize(p,s));return{...c,...r}}var C=(t=>(t.HEAD="HEAD",t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.OPTIONS="OPTIONS",t.DELETE="DELETE",t))(C||{});class Wt extends We{constructor(e,r,n,a){super({info:{header:`${e} ${r}`,path:r,method:e},resolver:n,options:a}),this.checkRedundantQueryParameters()}checkRedundantQueryParameters(){const{method:e,path:r}=this.info;if(r instanceof RegExp||Ne(r)===r)return;qt(r).forEach((c,u)=>{}),ee.warn(`Found a redundant usage of query parameters in the request handler URL for "${e} ${r}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/recipes/query-parameters`)}async parse(e){var c;const r=new URL(e.request.url),n=$t(r,this.info.path,(c=e.resolutionContext)==null?void 0:c.baseUrl),a=Vt(e.request);return{match:n,cookies:a}}predicate(e){const r=this.matchMethod(e.request.method),n=e.parsedResult.match.matches;return r&&n}matchMethod(e){return this.info.method instanceof RegExp?this.info.method.test(e):Ke(this.info.method,e)}extendResolverArgs(e){var r;return{params:((r=e.parsedResult.match)==null?void 0:r.params)||{},cookies:e.parsedResult.cookies}}async log(e){const r=Ge(e.request.url),n=await Ye(e.request),a=await ut(e.response),c=Qe(a.status);console.groupCollapsed(ee.formatMessage(`${Ze()} ${e.request.method} ${r} (%c${a.status} ${a.statusText}%c)`),`color:${c}`,"color:inherit"),console.log("Request",n),console.log("Handler:",this),console.log("Response",a),console.groupEnd()}}function _(t){return(e,r,n={})=>new Wt(t,e,r,n)}const W={all:_(/.+/),head:_(C.HEAD),get:_(C.GET),post:_(C.POST),put:_(C.PUT),delete:_(C.DELETE),patch:_(C.PATCH),options:_(C.OPTIONS)};var Gt=Object.create,Ue=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,He=Object.getOwnPropertyNames,Xt=Object.getPrototypeOf,Kt=Object.prototype.hasOwnProperty,Qt=(t,e)=>function(){return e||(0,t[He(t)[0]])((e={exports:{}}).exports,e),e.exports},Zt=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of He(e))!Kt.call(t,a)&&a!==r&&Ue(t,a,{get:()=>e[a],enumerable:!(n=Jt(e,a))||n.enumerable});return t},Yt=(t,e,r)=>(r=t!=null?Gt(Xt(t)):{},Zt(e||!t||!t.__esModule?Ue(r,"default",{value:t,enumerable:!0}):r,t)),er=Qt({"node_modules/set-cookie-parser/lib/set-cookie.js"(t,e){var r={decodeValues:!0,map:!1,silent:!1};function n(s){return typeof s=="string"&&!!s.trim()}function a(s,o){var i=s.split(";").filter(n),f=i.shift(),l=c(f),h=l.name,m=l.value;o=o?Object.assign({},r,o):r;try{m=o.decodeValues?decodeURIComponent(m):m}catch(v){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+m+"'. Set options.decodeValues to false to disable this feature.",v)}var d={name:h,value:m};return i.forEach(function(v){var y=v.split("="),b=y.shift().trimLeft().toLowerCase(),T=y.join("=");b==="expires"?d.expires=new Date(T):b==="max-age"?d.maxAge=parseInt(T,10):b==="secure"?d.secure=!0:b==="httponly"?d.httpOnly=!0:b==="samesite"?d.sameSite=T:d[b]=T}),d}function c(s){var o="",i="",f=s.split("=");return f.length>1?(o=f.shift(),i=f.join("=")):i=s,{name:o,value:i}}function u(s,o){if(o=o?Object.assign({},r,o):r,!s)return o.map?{}:[];if(s.headers)if(typeof s.headers.getSetCookie=="function")s=s.headers.getSetCookie();else if(s.headers["set-cookie"])s=s.headers["set-cookie"];else{var i=s.headers[Object.keys(s.headers).find(function(l){return l.toLowerCase()==="set-cookie"})];!i&&s.headers.cookie&&!o.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),s=i}if(Array.isArray(s)||(s=[s]),o=o?Object.assign({},r,o):r,o.map){var f={};return s.filter(n).reduce(function(l,h){var m=a(h,o);return l[m.name]=m,l},f)}else return s.filter(n).map(function(l){return a(l,o)})}function p(s){if(Array.isArray(s))return s;if(typeof s!="string")return[];var o=[],i=0,f,l,h,m,d;function v(){for(;i<s.length&&/\s/.test(s.charAt(i));)i+=1;return i<s.length}function y(){return l=s.charAt(i),l!=="="&&l!==";"&&l!==","}for(;i<s.length;){for(f=i,d=!1;v();)if(l=s.charAt(i),l===","){for(h=i,i+=1,v(),m=i;i<s.length&&y();)i+=1;i<s.length&&s.charAt(i)==="="?(d=!0,i=m,o.push(s.substring(f,h)),f=i):i=h+1}else i+=1;(!d||i>=s.length)&&o.push(s.substring(f,s.length))}return o}e.exports=u,e.exports.parse=u,e.exports.parseString=a,e.exports.splitCookiesString=p}}),tr=Yt(er()),rr=/[^a-z0-9\-#$%&'*+.^_`|~]/i;function D(t){if(rr.test(t)||t.trim()==="")throw new TypeError("Invalid character in header field name");return t.trim().toLowerCase()}var oe=[`
`,"\r","	"," "],nr=new RegExp(`(^[${oe.join("")}]|$[${oe.join("")}])`,"g");function K(t){return t.replace(nr,"")}function N(t){if(typeof t!="string"||t.length===0)return!1;for(let e=0;e<t.length;e++){const r=t.charCodeAt(e);if(r>127||!ar(r))return!1}return!0}function ar(t){return![127,32,"(",")","<",">","@",",",";",":","\\",'"',"/","[","]","?","=","{","}"].includes(t)}function ie(t){if(typeof t!="string"||t.trim()!==t)return!1;for(let e=0;e<t.length;e++){const r=t.charCodeAt(e);if(r===0||r===10||r===13)return!1}return!0}var S=Symbol("normalizedHeaders"),Q=Symbol("rawHeaderNames"),ce=", ",le,ue,de,sr=class Me{constructor(e){this[le]={},this[ue]=new Map,this[de]="Headers",["Headers","HeadersPolyfill"].includes(e==null?void 0:e.constructor.name)||e instanceof Me||typeof globalThis.Headers<"u"&&e instanceof globalThis.Headers?e.forEach((n,a)=>{this.append(a,n)},this):Array.isArray(e)?e.forEach(([r,n])=>{this.append(r,Array.isArray(n)?n.join(ce):n)}):e&&Object.getOwnPropertyNames(e).forEach(r=>{const n=e[r];this.append(r,Array.isArray(n)?n.join(ce):n)})}[(le=S,ue=Q,de=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}*keys(){for(const[e]of this.entries())yield e}*values(){for(const[,e]of this.entries())yield e}*entries(){let e=Object.keys(this[S]).sort((r,n)=>r.localeCompare(n));for(const r of e)if(r==="set-cookie")for(const n of this.getSetCookie())yield[r,n];else yield[r,this.get(r)]}has(e){if(!N(e))throw new TypeError(`Invalid header name "${e}"`);return this[S].hasOwnProperty(D(e))}get(e){if(!N(e))throw TypeError(`Invalid header name "${e}"`);return this[S][D(e)]??null}set(e,r){if(!N(e)||!ie(r))return;const n=D(e),a=K(r);this[S][n]=K(a),this[Q].set(n,e)}append(e,r){if(!N(e)||!ie(r))return;const n=D(e),a=K(r);let c=this.has(n)?`${this.get(n)}, ${a}`:a;this.set(e,c)}delete(e){if(!N(e)||!this.has(e))return;const r=D(e);delete this[S][r],this[Q].delete(r)}forEach(e,r){for(const[n,a]of this.entries())e.call(r,a,n,this)}getSetCookie(){const e=this.get("set-cookie");return e===null?[]:e===""?[""]:(0,tr.splitCookiesString)(e)}};const{message:or}=Be;function A(t={}){const e=(t==null?void 0:t.status)||200,r=(t==null?void 0:t.statusText)||or[e]||"",n=new Headers(t==null?void 0:t.headers);return{...t,headers:n,status:e,statusText:r}}function ir(t,e){if(e.type&&Object.defineProperty(t,"type",{value:e.type,enumerable:!0,writable:!1}),typeof document<"u"){const r=sr.prototype.getSetCookie.call(e.headers);for(const n of r)document.cookie=n}return t}class E extends Response{constructor(e,r){const n=A(r);super(e,n),ir(this,n)}static text(e,r){const n=A(r);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/plain"),n.headers.has("Content-Length")||n.headers.set("Content-Length",e?new Blob([e]).size.toString():"0"),new E(e,n)}static json(e,r){const n=A(r);n.headers.has("Content-Type")||n.headers.set("Content-Type","application/json");const a=JSON.stringify(e);return n.headers.has("Content-Length")||n.headers.set("Content-Length",a?new Blob([a]).size.toString():"0"),new E(a,n)}static xml(e,r){const n=A(r);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/xml"),new E(e,n)}static arrayBuffer(e,r){const n=A(r);return e&&n.headers.set("Content-Length",e.byteLength.toString()),new E(e,n)}static formData(e,r){return new E(e,A(r))}}const Z=2147483647,pe=100,cr=400,lr=5;function fe(){return De()?lr:Math.floor(Math.random()*(cr-pe)+pe)}async function ur(t){let e;if(typeof t=="string")switch(t){case"infinite":{e=Z;break}case"real":{e=fe();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${t}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}else if(typeof t>"u")e=fe();else{if(t>Z)throw new Error(`Failed to delay a response: provided delay duration (${t}) exceeds the maximum allowed duration for "setTimeout" (${Z}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);e=t}return new Promise(r=>setTimeout(r,e))}Xe();const Y={count:1279,next:"https://pokeapi.co/api/v2/pokemon?offset=6&limit=6",previous:null,results:[{name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"},{name:"ivysaur",url:"https://pokeapi.co/api/v2/pokemon/2/"},{name:"venusaur",url:"https://pokeapi.co/api/v2/pokemon/3/"},{name:"charmander",url:"https://pokeapi.co/api/v2/pokemon/4/"},{name:"charmeleon",url:"https://pokeapi.co/api/v2/pokemon/5/"},{name:"charizard",url:"https://pokeapi.co/api/v2/pokemon/6/"}]},F=[W.get("/pokemon",({request:t})=>{const r=new URL(t.url).searchParams.get("limit"),n=structuredClone(Y);return r&&(n.results=n.results.slice(0,Number(r))),E.json(n)}),W.get("/noreturn",async()=>(await ur(500),E.json(Y))),W.get("/reflect",({request:t})=>{const e={};return[...t.headers.entries()].map(([r,n])=>e[r]="reflected-"+n),e["x-added"]="abc",E.json(Y,{headers:e})}),W.get("/404",()=>new E(null,{status:404,statusText:"not found"}))],dr={title:"",slice:"page",url:"/pokemon?limit=6"};function B(t){return new Promise(e=>setTimeout(e,t))}function pr({title:t,slice:e,url:r}){return`
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
  `}const fr={title:"http-request",render:t=>pr(t),renderPlay:async function(e){document.body.innerHTML=(e.render?e:fr).render({...dr,...e.args}),await new Promise(r=>setTimeout(async()=>{await e.play({canvasElement:document.body.firstElementChild}),r(0)},0))}},j={args:{title:"url and slice",url:"/pokemon?limit=4"},play:async({canvasElement:t})=>{const e=z(t);await e.findByText(j.args.title),w(await e.findByText("bulbasaur")).toBeInTheDocument(),w(await e.findByText("Pokemon Count: 4")).toBeInTheDocument(t)},parameters:{msw:F}},L={args:{title:"url change",url:""},play:async({canvasElement:t})=>{const e=z(t);await e.findByText(L.args.title);const r=c=>e.getByText(c),n=t.querySelector("http-request"),a=()=>n.getAttribute("url");w(r("Pokemon Count: 0")).toBeInTheDocument(),w(a()).toEqual(""),r("/pokemon").click(),await B(100),w(a()).toEqual("/pokemon"),w(r("Pokemon Count: 6")).toBeInTheDocument(),r("/pokemon?limit=6").click(),await B(100),w(a()).toEqual("/pokemon?limit=6"),w(r("Pokemon Count: 6")).toBeInTheDocument(),r("/pokemon?limit=3").click(),await B(100),w(a()).toEqual("/pokemon?limit=3"),w(r("Pokemon Count: 3")).toBeInTheDocument(),r("set blank").click(),await B(100),w(a()).toEqual(""),w(r("Pokemon Count: 0")).toBeInTheDocument()},parameters:{msw:F}},U={args:{title:"http-request with error",url:"/404"},play:async({canvasElement:t})=>{const e=z(t),r=async n=>(await e.findByTestId(n)).textContent;await e.findByText(U.args.title),await B(200),w(await r("attr-status")).to.include("404")},parameters:{msw:F}},H={args:{title:"http-request with delayed .5 seconds response",url:"/noreturn"},play:async({canvasElement:t})=>{const e=z(t);await e.findByText(H.args.title),w(await e.findByText("request")).toBeInTheDocument(),w(e.queryByText("response")).toBe(null),w(await e.findByText("response")).toBeInTheDocument(),w(await e.findByText("bulbasaur")).toBeInTheDocument(),w(await e.findByText("Pokemon Count: 6")).toBeInTheDocument()},parameters:{msw:F}},M={args:{title:"http-request headers and response status and headers",url:"/reflect"},play:async({canvasElement:t})=>{const e=z(t);await e.findByText(M.args.title),await B(200);const r=await e.findByTestId("section-request-attr-x-test");w(r).toBeInTheDocument(),w(r.textContent.trim()).toEqual("testing");const n=await e.findByTestId("section-response-attr-x-test");w(n).toBeInTheDocument(),w(n.textContent.trim()).toEqual("reflected-testing");const a=await e.findByTestId("section-response-attr-x-added");w(a).toBeInTheDocument(),w(a.textContent.trim()).toEqual("abc")},parameters:{msw:F},render:({url:t,title:e})=>`
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
`};var he,me,ve;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ve=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var ye,ge,we;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var be,xe,Te;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Te=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Ee,_e,Ce;H.parameters={...H.parameters,docs:{...(Ee=H.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=(_e=H.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var Pe,ke,Re;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Re=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};const gr=["Demo","UrlChange","Http404","LifecycleInitialized","RequestResponseHeaders"];export{j as Demo,U as Http404,H as LifecycleInitialized,M as RequestResponseHeaders,L as UrlChange,gr as __namedExportsOrder,fr as default};
