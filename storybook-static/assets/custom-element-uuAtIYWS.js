const G="http://www.w3.org/1999/XSL/Transform",k="http://www.w3.org/1999/xhtml",fe="http://exslt.org/common",h=(e,l)=>e.getAttribute?.(l),ee=e=>e.nodeType===3,xe=e=>typeof e=="string",be=e=>e&&typeof e.nodeType=="number",$=(e,l)=>(e.ownerDocument||e).createTextNode(l),ie=e=>{for(;e.firstChild;)e.firstChild.remove();return e},Z=e=>(e.getAttributeNames().map(l=>e.removeAttribute(l)),ie(e)),oe=e=>(e?.setAttribute("xmlns:xsl",G),e),re=e=>(e?.setAttribute("xmlns:xhtml",k),oe(e)),ce=e=>/^[_a-zA-Z][-_:a-zA-Z0-9]*$/.test(e),te=(e,l)=>(Object.keys(l).map(t=>e[t]=l[t]),e),S=(e,l="",t=document)=>{const s=i=>(r=>(l&&r.append($(t.ownerDocument||t,l)),r))((t.ownerDocument||t).createElement(i));if(ce(e))return s(e);const n=s("dce-object");return n.setAttribute("dce-object-name",e),n},se=(e,l)=>{const t=e.ownerDocument.createElementNS(e.namespaceURI,l);for(let s of e.attributes)t.setAttribute(s.name,s.value);for(let s of e.childNodes)t.append(s.cloneNode(!0));return t};function X(e){return new DOMParser().parseFromString(e,"application/xml")}function I(e){return new XMLSerializer().serializeToString(e)}function O(e,l,t,s){const n=x=>e.ownerDocument.createElement(x),r=((x,f,v)=>(f.append(v=n(x)),v))(l,e);return[...t].forEach(x=>r.append(s(x))),r}function ye(e){return e.slot||(e.setAttribute||(e=S("span",e.textContent.replaceAll(`
`,""))),e.setAttribute("slot","")),e}function Y(e,l){e.getAttributeNames().forEach(t=>l.includes(t)||e.removeAttribute(t))}const le=e=>[...e].filter(l=>!(l.nodeType===3&&l.data.trim()===""));function z(e,l,t){const s=typeof e;if(s==="string")return S(l,e,t);if(s==="number")return S(l,""+e,t);if(e instanceof Array){const i=S("array","",t);return e.map(r=>i.append(z(r,l,t))),i}if(e instanceof FormData){const i=S("form-data","",t);for(const r of e)i.append(z(r[1],r[0],t));return i}const n=S(l,"",t);for(let i in e)be(e[i])||typeof e[i]=="function"||e[i]instanceof Window||(typeof e[i]!="object"&&ce(i)?n.setAttribute(i,e[i]):n.append(z(e[i],i,t)));return n}function ne(e){if(D(e,"*",l=>[...l.childNodes].filter(t=>t.nodeType===3&&t.parentNode.localName!=="style"&&t.data).forEach(t=>{const s=t.data,n=s.matchAll(/{([^}]*)}/g);if(n){let i=0,r=f=>$(t,f),x=[];if([...n].forEach(f=>{f.index>i&&x.push(r(f.input.substring(i,f.index)));const v=e.querySelector("value-of").cloneNode();v.setAttribute("select",f[1]),x.push(v),i=f.index+f[0].length}),i<s.length&&x.push(r(s.substring(i,s.length))),x.length){for(let f of x)l.insertBefore(f,t);l.removeChild(t)}}})),"all"in e){let l=1;for(let t of e.all)t.setAttribute&&!t.tagName.startsWith("xsl:")&&t.setAttribute("data-dce-id",""+l++)}return e}function ge(e,l="xsl:stylesheet"){const t=[],s={},n={};if(e.tagName===l||e.documentElement?.tagName===l)return ne(te(e,{declaredAttributes:t,hardcodedAttributes:s,exposedAttributes:n}));const i=X(`<xsl:stylesheet version="1.0" xmlns:xsl="${G}" xmlns:xhtml="${k}" xmlns:exsl="${fe}" exclude-result-prefixes="exsl" >
    <xsl:output method="xml"/>
        <xsl:template match="/"><dce-root xmlns="${k}"><xsl:apply-templates select="*" /></dce-root></xsl:template>
    <xsl:template match="*[name()='template']">
        <xsl:apply-templates mode="sanitize" select="*|text()"/>
    </xsl:template>
    <xsl:template match="*">
        <xsl:apply-templates mode="sanitize" select="*|text()"/>
    </xsl:template>
    <xsl:template match="*[name()='svg']|*[name()='math']">
        <xsl:apply-templates mode="sanitize" select="."/>
    </xsl:template>
    <xsl:template mode="sanitize" match="*[count(text())=1 and count(*)=0]">
        <xsl:copy>
            <xsl:apply-templates mode="sanitize" select="@*"/>
            <xsl:value-of select="text()"></xsl:value-of>
        </xsl:copy>
    </xsl:template>
    <xsl:template mode="sanitize" match="xhtml:*[count(text())=1 and count(*)=0]">
        <xsl:element name="{local-name()}">
            <xsl:apply-templates mode="sanitize" select="@*"/>
            <xsl:value-of select="text()"></xsl:value-of>
        </xsl:element>
    </xsl:template>
    <xsl:template mode="sanitize" match="*|@*">
        <xsl:copy>
            <xsl:apply-templates mode="sanitize" select="*|@*|text()"/>
        </xsl:copy>
    </xsl:template>
    <xsl:template mode="sanitize" match="text()[normalize-space(.) = '']"/>
    <xsl:template mode="sanitize" match="text()">
        <dce-text>
            <xsl:copy/>
        </dce-text>
    </xsl:template>
    <xsl:template mode="sanitize" match="xsl:value-of|*[name()='slot']">
        <xsl:copy>
            <xsl:apply-templates mode="sanitize" select="*|@*|text()"/>
        </xsl:copy>
    </xsl:template>
    <xsl:template mode="sanitize" match="xhtml:*">
        <xsl:element name="{local-name()}">
            <xsl:apply-templates mode="sanitize" select="*|@*|text()"/>
        </xsl:element>
    </xsl:template>
    <xsl:template mode="sanitize" match="xhtml:input">
        <xsl:element name="{local-name()}">
            <xsl:apply-templates mode="sanitize" select="*[not(name()='slice')]|@*|text()"/>
        </xsl:element>
        <xsl:for-each select="slice">
            <xsl:copy>
                <xsl:attribute name="for" >^</xsl:attribute>
                <xsl:apply-templates mode="sanitize" select="*|@*|text()"/>
            </xsl:copy>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>`),r=new XSLTProcessor,x=(a=>{D(a,"custom-element",y=>{y.firstElementChild.localName==="template"&&([...y.firstElementChild.content.childNodes].forEach(g=>y.append(g)),y.firstElementChild.remove())}),D(a,"script",y=>y.remove());const c=a.content??a.firstElementChild?.content??a.body??a;Ce.forEach(y=>D(c,y,g=>Le(g,c)));const A=a.firstElementChild?.content||a.content,N=y=>{const g=X("<xhtml/>"),U=g.importNode(y,!0);return g.replaceChild(U,g.documentElement),re(U)};if(A){const y=S("div");return[...A.childNodes].map(g=>y.append(g.cloneNode(!0))),N(y)}return N(a.documentElement||a.body||a)})(e),f=X(`<xsl:stylesheet version="1.0"
        xmlns:xsl="${G}"
        xmlns:xhtml="${k}"
        xmlns:dce="urn:schemas-epa-wg:dce"
        xmlns:exsl="http://exslt.org/common"
        exclude-result-prefixes="exsl"
    >
    <xsl:template match="ignore">
        <xsl:choose>
            <xsl:when test="//attr">{//attr}</xsl:when>
            <xsl:otherwise>{def}</xsl:otherwise>
        </xsl:choose><xsl:value-of select="."></xsl:value-of></xsl:template>
    <xsl:template mode="payload"  match="attributes"></xsl:template>
    <xsl:template match="/">
        <xsl:apply-templates mode="payload" select="/datadom/attributes"/>
    </xsl:template>
    <xsl:template name="slot" >
        <xsl:param name="slotname" />
        <xsl:param name="defaultvalue" />
        <xsl:choose>
            <xsl:when test="//payload/*[@slot=$slotname]">
               <xsl:copy-of select="//payload/*[@slot=$slotname]"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:copy-of select="$defaultvalue"/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:variable name="js-injected-body">
        <xsl:call-template name="slot" >
            <xsl:with-param name="slotname" select="''"/>
            <xsl:with-param name="defaultvalue"/>
        </xsl:call-template>
    </xsl:variable>
</xsl:stylesheet>`);r.importStylesheet(i);const v=r.transformToFragment(x,document),d=(a,c)=>a.querySelector(c),w=d(f,'template[mode="payload"]');if(!v)return console.error("transformation error",{xml:x.outerHTML,xsl:I(i)});if(v.firstElementChild.localName!=="dce-root"){const a=v.ownerDocument.createElement("dce-root");[...v.childNodes].forEach(c=>a.append(c)),v.append(a)}[...v.querySelectorAll("dce-root>attribute")].forEach(a=>{Y(a,"namespace,name,select");const c=se(a,"xsl:param"),A=h(a,"name");if(t.push(A),a.childNodes.length&&(s[A]=a.textContent),w.append(c),a.hasAttribute("select")){n[A]=h(a,"select"),Y(c,"select,name");let N=h(a,"select").split("??"),y;if(N?.length>1){c.removeAttribute("select");const g=d(f,'template[match="ignore"]>choose').cloneNode(!0);Z(g.firstElementChild).append($(g,"{"+N[0]+"}")),Z(g.lastElementChild).append($(g,"{"+N[1]+"}")),g.firstElementChild.setAttribute("test","string-length("+N[0]+")"),c.append(g),y=g.cloneNode(!0)}else y=se(a,"xsl:value-of");y.removeAttribute("name"),a.append(y),a.removeAttribute("select")}else Y(c,"name"),c.setAttribute("select","/datadom/attributes/"+A)}),[...v.querySelectorAll("[value]")].filter(a=>a.getAttribute("value").match(/\{(.*)\?\?(.*)\}/g)).forEach(a=>{const c=h(a,"value");c&&a.setAttribute("value",Se(c))});for(const a of v.childNodes)w.append(f.importNode(a,!0));[...w.getElementsByTagName("xsl:template")].forEach(a=>w.ownerDocument.documentElement.append(a));const q=d(f,'call-template[name="slot"]'),p=a=>{const c=q.cloneNode(!0),A=h(a,"name");A&&c.firstElementChild.setAttribute("select",`'${A}'`);for(let N of a.childNodes)c.lastElementChild.append(N);return c};D(w,"slot",a=>a.parentNode.replaceChild(p(a),a));const u=ne(f);return te(u,{declaredAttributes:t,hardcodedAttributes:s,exposedAttributes:n}),u}async function ve(e){return await new Promise((t,s)=>{const n=new XMLHttpRequest;n.open("GET",e),n.responseType="document",n.onload=()=>{n.readyState===n.DONE&&n.status===200?t(n.responseXML?.body||n.responseXML||S("div",n.responseText)):s(`${n.statusText} - ${e}`)},n.addEventListener("error",i=>s(i)),n.send()})}const me=e=>e.split("|").map(l=>l.trim()).filter(l=>l),Ee=(e,l)=>me(l).map(t=>{let s=e.ownerDocument,n=i=>(e.append(i),i);if(t.includes("/")){const i=[],r=s.evaluate(t,e);for(let x;x=r.iterateNext();)i.push(x);return i}return[...e.childNodes].find(i=>i.localName===t)||n(S(t,"",s))}).flat();function ae(e,l,t,s){if(!t.sliceProcessed)return t.sliceProcessed=1,Ee(e,l??"").map(n=>{const i=e.ownerDocument,r=t.sliceEventSource,x=t.sliceElement,f=()=>[...n.childNodes].filter(d=>d.nodeType===3||d.localName==="value"||d.localName==="form-data").map(d=>d.remove());r.getAttributeNames().map(d=>n.setAttribute(d,h(r,d))),[...n.childNodes].filter(d=>d.localName==="event").map(d=>d.remove()),"validationMessage"in r&&n.setAttribute("validation-message",r.validationMessage),t.type==="init"&&f(),n.append(z(t,"event",i));const v=(r.type==="checkbox"||r.type==="radio")&&!r.checked;if(x.hasAttribute("slice-value")){r.value===void 0?n.removeAttribute("value"):n.setAttribute("value",r.value);const d=v?"":M(h(x,"slice-value"),n);f(),n.append($(i,d))}else{if("elements"in r)return f(),n.append(z(new FormData(r),"value",n.ownerDocument)),n;const d=v?"":r.value??h(r,"value");f(),d==null?[...n.childNodes].filter(w=>w.localName!=="event").map(w=>w.remove()):xe(d)?n.append($(i,d)):n.append(z(d,"value",n.ownerDocument))}return n})}function D(e,l,t){e.querySelectorAll&&[...e.querySelectorAll(l)].forEach(t)}const Ne=async(e,l)=>{if(!e||!e.trim())return[l];if(e.startsWith("#"))return(t=>{const s=t.querySelectorAll(e);return[...s.length?s:t.getRootNode().querySelectorAll(e)]})(l.parentElement);try{const[t,s]=e.split("#");if(e.charAt(0)===".")e=new URL(t,l.closest("[base]")?.getAttribute("base")||location).href;else try{e=import.meta.resolve(t),s&&(e+="#"+s)}catch(i){console.error(i.message)}const n=await ve(e);if(l.setAttributeNS("xml","base",e),s){const i=n.querySelectorAll("#"+s);return i.length?[...i]:(console.error("template not found",e+"#"+s),[l])}return[n]}catch{return[l]}};function Ae(e,l){for(let t of e.attributes)try{t.namespaceURI?l.setAttributeNS(t.namespaceURI,t.name,t.value):l.setAttribute(t.name,t.value),t.name==="value"&&(l.value=t.value)}catch(s){console.warn("attribute assignment error",s?.message||s)}}function de(e,l=0){const t={};for(const s of e.childNodes){const n=h(s,"data-dce-id")||s.dceId||0;if(!t[n])n?t[n]=1:(t[n]=s.dceId=++l,s.setAttribute&&s.setAttribute("data-dce-id",s.dceId));else{const i=s.dceId=n+"-"+t[n]++;s.setAttribute&&s.setAttribute("data-dce-id",i)}s.childNodes.length&&de(s)}}function we(e,l,t){t=1*t;for(let s of e.childNodes)if((s.dceId??s.getAttribute("data-dce-id")*1)>t)return e.insertBefore(l,s);e.append(l)}function ue(e,l){if(e.firstElementChild?.localName==="dce-root"&&l[0]?.localName!=="dce-root")return;if(!l.length)return e.firstElementChild?.localName!=="dce-root"&&ie(e);const t={};for(let s of e.childNodes)t[s.dceId],ee(s)?(s.data.trim(),t[s.dceId||0]=s):t[h(s,"data-dce-id")||0]=s;for(let s of[...l]){const n=h(s,"data-dce-id")||s.dceId,i=t[n];i?(ee(s)?i.nodeValue!==s.nodeValue&&(i.nodeValue=s.nodeValue):(Ae(s,i),(i.childNodes.length||s.childNodes.length)&&ue(i,s.childNodes)),delete t[n]):we(e,s,n)}for(let s of Object.values(t))s.localName!=="dce-root"&&s.remove()}function Te(e,l){return e.hasAttribute(l)||e.setAttribute(l,crypto.randomUUID()),e.getAttribute(l)}const Se=e=>[...e?.matchAll(/([^{}]*)(\{)([^}]+)}([^{}]*)/g)].map(t=>`${t[1]}{${J(t[3])}}${t[4]}`).join(""),J=e=>{if(!e.trim())return e;const l=e.split("??"),t=l.shift(),s=J(l.join("??"));return l.length?`concat( ${t} , substring( ${s} , (1+string-length( ${s} )) * string-length( ${t} ) ) )`:e},M=(e,l)=>{const t=e.split("??");if(t.length>1)return M(t[0],l)||M(t[1],l);e=J(e);const s=l.ownerDocument.evaluate(e,l);switch(s.resultType){case XPathResult.NUMBER_TYPE:return s.numberValue;case XPathResult.STRING_TYPE:return s.stringValue;case XPathResult.BOOLEAN_TYPE:return s.booleanValue}let n="";for(let i;i=s.iterateNext();)n+=i.textContent;return n},Ce="stylesheet,transform,import,include,strip-space,preserve-space,output,key,decimal-format,namespace-alias,value-of,copy-of,number,apply-templates,apply-imports,for-each,sort,if,choose,when,otherwise,attribute-set,call-template,with-param,variable,param,text,processing-instruction,element,attribute,comment,copy,message,fallback".split(","),Le=(e,l)=>{const t=S("xsl:"+e.localName);for(let s of e.attributes)t.setAttribute(s.name,s.value);for(;e.firstChild;)t.append(e.firstChild);if(e.parentElement)e.parentElement.replaceChild(t,e);else{const s=e.parentElement||l,n=[...s.childNodes];n.forEach((i,r)=>{i===e&&(n[r]=t)}),s.replaceChildren(...n)}};class De extends HTMLElement{static observedAttributes=["src","tag","hidden"];async connectedCallback(){this.firstElementChild&&this.firstElementChild.localName!=="template"&&console.warn(`custom-element used without template wrapping content
`,this.outerHTML);const l=await Ne(h(this,"src"),this),t=h(this,"tag"),s=t||"dce-"+crypto.randomUUID();for(const p of l)D(p.templateNode||p.content||p,"style",u=>{const a=u.closest("slot"),c=a?`slot[name="${a.name}"]`:"";u.innerHTML=`${s} ${c}{${u.innerHTML}}`,this.append(u)});const n=l.map(p=>ge(p)),i=n.map((p,u)=>{u=new XSLTProcessor;try{u.importStylesheet(p)}catch(a){console.error(a,I(p))}return u});Object.defineProperty(this,"xsltString",{get:()=>n.map(p=>I(p)).join(`
`)});const r=this,x=[...this.templateNode.querySelectorAll("[slice]")],f=x.map(p=>h(p,"slice")).filter(p=>!p.includes("/")).filter((p,u,a)=>a.indexOf(p)===u).map(me).flat(),{declaredAttributes:v,hardcodedAttributes:d,exposedAttributes:w}=n[0];class V extends HTMLElement{static get observedAttributes(){return v}#e=0;connectedCallback(){let u=le(this.childNodes);if(this.firstElementChild?.tagName==="TEMPLATE"){this.firstElementChild!==this.lastElementChild&&console.error("payload should have TEMPLATE as only child",this.outerHTML);const m=this.firstElementChild;m.remove(),u=le(m.content.childNodes);for(const E of u)if(E.localName==="style"){const o=Te(this,"data-dce-style");E.innerHTML=`${s}[data-dce-style="${o}"]{${E.innerHTML}}`,m.insertAdjacentElement("beforebegin",E)}else E.nodeType===1?m.insertAdjacentElement("beforebegin",E):E.nodeType===3&&m.insertAdjacentText("beforebegin",E.data)}const a=X("<datadom/>").documentElement,c=(m,E="")=>(o=>(E&&o.append($(a,E)),o))(a.ownerDocument.createElement(m)),A=O(a,"payload",u,ye);oe(A),re(A),this.innerHTML="";const N=O(a,"attributes",this.attributes,m=>c(m.nodeName,m.value)),y=m=>this.hasAttribute(m)||[...N.children].find(E=>E.localName===m);Object.keys(d).map(m=>y(m)||N.append(c(m,d[m]))),v.map(m=>y(m)||N.append(c(m))),O(a,"dataset",Object.keys(this.dataset),m=>c(m,this.dataset[m]));const g=O(a,"slice",f,m=>c(m,"")),U=m=>M(m,g);this.xml=a;const K=[],Q=()=>{const m={};for(let E;E=K.pop();){const o=h(E.sliceElement,"slice");m[o]||(ae(g,o,E),m[o]=E)}Object.keys(m).length!==0&&H()};let _;this.onSlice=m=>{K.push(m),_||(_=setTimeout(()=>{Q(),_=0},1))};const H=this.transform=()=>{if(this.#e)debugger;this.#e=1,i.map((o,b)=>{const C=o.transformToFragment(a.ownerDocument,document);return C||console.error(`XSLT transformation error. xsl:
`,I(n[b]),`
xml:
`,I(a)),C}).map(o=>{o&&(de(o),ue(this,o.childNodes))}),Object.entries(d).map(([o,b])=>{!this.hasAttribute(o)&&b!==h(this,o)&&(this.setAttribute(o,b),this.#t(o,b))}),Object.keys(w).map(o=>{let b=h(this.firstElementChild,o);b!==h(this,o)&&(this.setAttribute(o,b),this.#t(o,b))});function E(o){let b=o;if(o.localName==="slice"){const C=h(o,"for");if(C||(b=o.parentElement),C==="^")do b=b.previousElementSibling;while(b.localName==="slice");else b=this.querySelector(C);if(!b)return console.warn(`can not find selector in "slice for=${C}" `,o.outerHTML);h(o,"slice")||o.setAttribute("slice",h(o,"name"))}return b}D(this,"[slice],[slice-event]",o=>{let b=h(o,"slice-event");const C=o.hasAttribute("slice-value")||o.hasAttribute("value")||o.value,j=E(o);o.dceInitialized||(o.dceInitialized=1,j.hasAttribute("custom-validity")&&(b+=" change submit"),[...new Set((b||"change").split(" "))].forEach(pe=>j.addEventListener(pe,T=>{T.sliceElement=o,T.sliceEventSource=T.currentTarget||T.target,T.sliceProcessed=0;const he=ae(g,h(T.sliceElement,"slice"),T);D(this,"[custom-validity]",P=>{if(!P.setCustomValidity)return;const W=h(P,"custom-validity");try{const R=W&&M(W,N);P.setCustomValidity(R===!0?"":R===!1?"invalid":R)}catch(R){console.error(R,"xPath",W)}});const B=h(j,"custom-validity"),L=B&&M(B,N),F=L===!0?"":L;if(B){if(o.setCustomValidity?o.setCustomValidity(F):o.validationMessage=F,he.map(P=>P.setAttribute("validation-message",F)),T.type==="submit")return L===!0?void 0:(setTimeout(H,1),!!L===L?(L||T.preventDefault(),L):L?(T.preventDefault(),!1):void 0);setTimeout(H,1)}this.onSlice(T)})),(!b||b.includes("init"))&&(C?this.onSlice({type:"init",target:j,sliceElement:o,sliceEventSource:j}):o.value=U(h(o,"slice"))))}),this.#e=0};H(),Q()}#t(u,a){u==="value"&&(this.value=a);let c=this.xml.querySelector(`attributes>${u}`);c?Z(c).append($(c,a)):(c=S(u,a,this.xml),this.xml.querySelector("attributes").append(c)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{[u]:a}}))}attributeChangedCallback(u,a,c){!this.xml||this.#e||(this.#t(u,c),this.transform())}get dce(){return r}}const q=p=>{window.customElements.get(p)!==V&&window.customElements.define(p,V)};if(t)q(t);else{const p=s;this.setAttribute("tag",p),q(p);const u=document.createElement(p);this.getAttributeNames().forEach(a=>u.setAttribute(a,this.getAttribute(a))),u.append(...[...this.childNodes].filter(a=>a.localName!=="style")),this.append(u)}}get templateNode(){return this.firstElementChild?.tagName==="TEMPLATE"?this.firstElementChild.content:this}get dce(){return this}get xslt(){return X(this.xsltString)}}window.customElements.define("custom-element",De);export{se as c,te as m};
