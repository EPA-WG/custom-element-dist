const W="http://www.w3.org/1999/XSL/Transform",V="http://www.w3.org/1999/xhtml",ue="http://exslt.org/common",f=(e,l)=>e.getAttribute?.(l),Z=e=>e.nodeType===3,de=e=>typeof e=="string",pe=e=>e&&typeof e.nodeType=="number",$=(e,l)=>(e.ownerDocument||e).createTextNode(l),se=e=>{for(;e.firstChild;)e.firstChild.remove();return e},_=e=>(e.getAttributeNames().map(l=>e.removeAttribute(l)),se(e)),le=e=>(e?.setAttribute("xmlns:xsl",W),e),ne=e=>(e?.setAttribute("xmlns:xhtml",V),le(e)),ae=e=>/^[_a-zA-Z][-_:a-zA-Z0-9]*$/.test(e),w=(e,l="",t=document)=>{const s=i=>(r=>(l&&r.append($(t.ownerDocument||t,l)),r))((t.ownerDocument||t).createElement(i));if(ae(e))return s(e);const n=s("dce-object");return n.setAttribute("dce-object-name",e),n},J=(e,l)=>{const t=e.ownerDocument.createElementNS(e.namespaceURI,l);for(let s of e.attributes)t.setAttribute(s.name,s.value);for(;e.firstChild;)t.append(e.firstChild);return t};function j(e){return new DOMParser().parseFromString(e,"application/xml")}function X(e){return new XMLSerializer().serializeToString(e)}function H(e,l,t,s){const n=x=>e.ownerDocument.createElement(x),r=((x,p,u)=>(p.append(u=n(x)),u))(l,e);return[...t].forEach(x=>r.append(s(x))),r}function fe(e){return e.slot||(e.setAttribute||(e=w("span",e.textContent.replaceAll(`
`,""))),e.setAttribute("slot","")),e}function K(e,l){e.getAttributeNames().forEach(t=>l.includes(t)||e.removeAttribute(t))}const Q=e=>[...e].filter(l=>!(l.nodeType===3&&l.data.trim()===""));function D(e,l,t){const s=typeof e;if(s==="string")return w(l,e,t);if(s==="number")return w(l,""+e,t);if(e instanceof Array){const i=w("array","",t);return e.map(r=>i.append(D(r,l,t))),i}if(e instanceof FormData){const i=w("form-data","",t);for(const r of e)i.append(D(r[1],r[0],t));return i}const n=w(l,"",t);for(let i in e)pe(e[i])||typeof e[i]=="function"||e[i]instanceof Window||(typeof e[i]!="object"&&ae(i)?n.setAttribute(i,e[i]):n.append(D(e[i],i,t)));return n}function ee(e){if(L(e,"*",l=>[...l.childNodes].filter(t=>t.nodeType===3&&t.parentNode.localName!=="style"&&t.data).forEach(t=>{const s=t.data,n=s.matchAll(/{([^}]*)}/g);if(n){let i=0,r=p=>$(t,p),x=[];if([...n].forEach(p=>{p.index>i&&x.push(r(p.input.substring(i,p.index)));const u=e.querySelector("value-of").cloneNode();u.setAttribute("select",p[1]),x.push(u),i=p.index+p[0].length}),i<s.length&&x.push(r(s.substring(i,s.length))),x.length){for(let p of x)l.insertBefore(p,t);l.removeChild(t)}}})),"all"in e){let l=1;for(let t of e.all)t.setAttribute&&!t.tagName.startsWith("xsl:")&&t.setAttribute("data-dce-id",""+l++)}return e}function he(e,l="xsl:stylesheet"){if(e.tagName===l||e.documentElement?.tagName===l)return ee(e);const t=j(`<xsl:stylesheet version="1.0" xmlns:xsl="${W}" xmlns:xhtml="${V}" xmlns:exsl="${ue}" exclude-result-prefixes="exsl" >
    <xsl:output method="xml"/>
        <xsl:template match="/"><dce-root xmlns="${V}"><xsl:apply-templates select="*" /></dce-root></xsl:template>
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
            <xsl:apply-templates mode="sanitize" select="*|@*|text()"/>
        </xsl:element>
        <xsl:for-each select="*">
            <xsl:copy>
                <xsl:attribute name="for" >^</xsl:attribute>
                <xsl:apply-templates mode="sanitize" select="*|@*|text()"/>
            </xsl:copy>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>`),s=new XSLTProcessor,n=(a=>{L(a,"custom-element",b=>{b.firstElementChild.localName==="template"&&([...b.firstElementChild.content.childNodes].forEach(y=>b.append(y)),b.firstElementChild.remove())}),L(a,"script",b=>b.remove());const c=a.content??a.firstElementChild?.content??a.body??a;Ae.forEach(b=>L(c,b,y=>we(y,c)));const N=a.firstElementChild?.content||a.content,E=b=>{const y=j("<xhtml/>"),M=y.importNode(b,!0);return y.replaceChild(M,y.documentElement),ne(M)};if(N){const b=w("div");return[...N.childNodes].map(y=>b.append(y.cloneNode(!0))),E(b)}return E(a.documentElement||a.body||a)})(e),i=j(`<xsl:stylesheet version="1.0"
        xmlns:xsl="${W}"
        xmlns:xhtml="${V}"
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
</xsl:stylesheet>`);s.importStylesheet(t);const r=s.transformToFragment(n,document),x=(a,c)=>a.querySelector(c),p=x(i,'template[mode="payload"]');if(!r)return console.error("transformation error",{xml:n.outerHTML,xsl:X(t)});if(r.firstElementChild.localName!=="dce-root"){const a=r.ownerDocument.createElement("dce-root");[...r.childNodes].forEach(c=>a.append(c)),r.append(a)}const u=[];[...r.querySelectorAll("dce-root>attribute")].forEach(a=>{K(a,"namespace,name,select");const c=J(a,"xsl:param"),N=f(a,"name");p.append(c),K(c,"select,name");let E=f(c,"select")?.split("??");E||(E=["//"+N,`'${c.textContent}'`],_(c),c.setAttribute("name",N));let b;if(E?.length>1){c.removeAttribute("select");const y=x(i,'template[match="ignore"]>choose').cloneNode(!0);_(y.firstElementChild).append($(y,"{"+E[0]+"}")),_(y.lastElementChild).append($(y,"{"+E[1]+"}")),y.firstElementChild.setAttribute("test",E[0]),c.append(y),b=y.cloneNode(!0)}else b=J(a,"xsl:value-of");b.removeAttribute("name"),a.append(b),a.removeAttribute("select"),u.push(c)}),[...r.querySelectorAll("[value]")].filter(a=>a.getAttribute("value").match(/\{(.*)\?\?(.*)\}/g)).forEach(a=>{const c=f(a,"value");c&&a.setAttribute("value",Ne(c))});for(const a of r.childNodes)p.append(i.importNode(a,!0));[...p.getElementsByTagName("xsl:template")].forEach(a=>p.ownerDocument.documentElement.append(a));const q=x(i,'call-template[name="slot"]'),d=a=>{const c=q.cloneNode(!0),N=f(a,"name");N&&c.firstElementChild.setAttribute("select",`'${N}'`);for(let E of a.childNodes)c.lastElementChild.append(E);return c};L(p,"slot",a=>a.parentNode.replaceChild(d(a),a));const m=ee(i);return m.params=u,m}async function xe(e){return await new Promise((t,s)=>{const n=new XMLHttpRequest;n.open("GET",e),n.responseType="document",n.onload=()=>{n.readyState===n.DONE&&n.status===200?t(n.responseXML?.body||n.responseXML||w("div",n.responseText)):s(`${n.statusText} - ${e}`)},n.addEventListener("error",i=>s(i)),n.send()})}const ie=e=>e.split("|").map(l=>l.trim()).filter(l=>l),be=(e,l)=>ie(l).map(t=>{let s=e.ownerDocument,n=i=>(e.append(i),i);if(t.includes("/")){const i=[],r=s.evaluate(t,e);for(let x;x=r.iterateNext();)i.push(x);return i}return[...e.childNodes].find(i=>i.localName===t)||n(w(t,"",s))}).flat();function te(e,l,t,s){if(!t.sliceProcessed)return t.sliceProcessed=1,be(e,l??"").map(n=>{const i=e.ownerDocument,r=t.sliceEventSource,x=t.sliceElement,p=()=>[...n.childNodes].filter(u=>u.nodeType===3||u.localName==="value"||u.localName==="form-data").map(u=>u.remove());if(r.getAttributeNames().map(u=>n.setAttribute(u,f(r,u))),[...n.childNodes].filter(u=>u.localName==="event").map(u=>u.remove()),"validationMessage"in r&&n.setAttribute("validation-message",r.validationMessage),t.type==="init"&&p(),n.append(D(t,"event",i)),x.hasAttribute("slice-value")){r.value===void 0?n.removeAttribute("value"):n.setAttribute("value",r.value);const u=z(f(x,"slice-value"),n);p(),n.append($(i,u))}else{if("elements"in r)return p(),n.append(D(new FormData(r),"value",n.ownerDocument)),n;const u=r.value??f(r,"value");p(),u==null?[...n.childNodes].filter(T=>T.localName!=="event").map(T=>T.remove()):de(u)?n.append($(i,u)):n.append(D(u,"value",n.ownerDocument))}return n})}function L(e,l,t){e.querySelectorAll&&[...e.querySelectorAll(l)].forEach(t)}const ye=async(e,l)=>{if(!e||!e.trim())return[l];if(e.startsWith("#"))return(t=>{const s=t.querySelectorAll(e);return[...s.length?s:t.getRootNode().querySelectorAll(e)]})(l.parentElement);try{const[t,s]=e.split("#");if(e.charAt(0)===".")e=new URL(t,l.closest("[base]")?.getAttribute("base")||location).href;else try{e=import.meta.resolve(t),s&&(e+="#"+s)}catch(i){console.error(i.message)}const n=await xe(e);if(l.setAttributeNS("xml","base",e),s){const i=n.querySelectorAll("#"+s);return i.length?[...i]:(console.error("template not found",e+"#"+s),[l])}return[n]}catch{return[l]}};function ve(e,l){for(let t of e.attributes)t.namespaceURI?l.setAttributeNS(t.namespaceURI,t.name,t.value):l.setAttribute(t.name,t.value),t.name==="value"&&(l.value=t.value)}function oe(e,l=0){const t={};for(const s of e.childNodes){const n=f(s,"data-dce-id")||s.dceId||0;if(!t[n])n?t[n]=1:(t[n]=s.dceId=++l,s.setAttribute&&s.setAttribute("data-dce-id",s.dceId));else{const i=s.dceId=n+"-"+t[n]++;s.setAttribute&&s.setAttribute("data-dce-id",i)}s.childNodes.length&&oe(s)}}function ge(e,l,t){t=1*t;for(let s of e.childNodes)if((s.dceId??s.getAttribute("data-dce-id")*1)>t)return e.insertBefore(l,s);e.append(l)}function re(e,l){if(e.firstElementChild?.localName==="dce-root"&&l[0].localName!=="dce-root")return;if(!l.length)return e.firstElementChild?.localName!=="dce-root"&&se(e);const t={};for(let s of e.childNodes)t[s.dceId],Z(s)?(s.data.trim(),t[s.dceId||0]=s):t[f(s,"data-dce-id")||0]=s;for(let s of[...l]){const n=f(s,"data-dce-id")||s.dceId,i=t[n];i?(Z(s)?i.nodeValue!==s.nodeValue&&(i.nodeValue=s.nodeValue):(ve(s,i),(i.childNodes.length||s.childNodes.length)&&re(i,s.childNodes)),delete t[n]):ge(e,s,n)}for(let s of Object.values(t))s.localName!=="dce-root"&&s.remove()}function Ee(e,l){return e.hasAttribute(l)||e.setAttribute(l,crypto.randomUUID()),e.getAttribute(l)}const Ne=e=>[...e?.matchAll(/([^{}]*)(\{)([^}]+)}([^{}]*)/g)].map(t=>`${t[1]}{${Y(t[3])}}${t[4]}`).join(""),Y=e=>{if(!e.trim())return e;const l=e.split("??"),t=l.shift(),s=Y(l.join("??"));return l.length?`concat( ${t} , substring( ${s} , (1+string-length( ${s} )) * string-length( ${t} ) ) )`:e},z=(e,l)=>{const t=e.split("??");if(t.length>1)return z(t[0],l)||z(t[1],l);e=Y(e);const s=l.ownerDocument.evaluate(e,l);switch(s.resultType){case XPathResult.NUMBER_TYPE:return s.numberValue;case XPathResult.STRING_TYPE:return s.stringValue;case XPathResult.BOOLEAN_TYPE:return s.booleanValue}let n="";for(let i;i=s.iterateNext();)n+=i.textContent;return n},Ae="stylesheet,transform,import,include,strip-space,preserve-space,output,key,decimal-format,namespace-alias,value-of,copy-of,number,apply-templates,apply-imports,for-each,sort,if,choose,when,otherwise,attribute-set,call-template,with-param,variable,param,text,processing-instruction,element,attribute,comment,copy,message,fallback".split(","),we=(e,l)=>{const t=w("xsl:"+e.localName);for(let s of e.attributes)t.setAttribute(s.name,s.value);for(;e.firstChild;)t.append(e.firstChild);if(e.parentElement)e.parentElement.replaceChild(t,e);else{const s=e.parentElement||l,n=[...s.childNodes];n.forEach((i,r)=>{i===e&&(n[r]=t)}),s.replaceChildren(...n)}};class Te extends HTMLElement{static observedAttributes=["src","tag","hidden"];async connectedCallback(){this.firstElementChild&&this.firstElementChild.localName!=="template"&&console.warn(`custom-element used without template wrapping content
`,this.outerHTML);const l=await ye(f(this,"src"),this),t=f(this,"tag"),s=t||"dce-"+crypto.randomUUID();for(const d of l)L(d.templateNode||d.content||d,"style",m=>{const a=m.closest("slot"),c=a?`slot[name="${a.name}"]`:"";m.innerHTML=`${s} ${c}{${m.innerHTML}}`,this.append(m)});const n=l.map(d=>he(d)),i=n.map((d,m)=>{m=new XSLTProcessor;try{m.importStylesheet(d)}catch(a){console.error(a,X(d))}return m});Object.defineProperty(this,"xsltString",{get:()=>n.map(d=>X(d)).join(`
`)});const r=this,x=[...this.templateNode.querySelectorAll("[slice]")],p=x.map(d=>f(d,"slice")).filter(d=>!d.includes("/")).filter((d,m,a)=>a.indexOf(d)===m).map(ie).flat(),u=n.reduce((d,m)=>(m.params&&d.push(...m.params),d),[]);class T extends HTMLElement{static get observedAttributes(){return u.map(m=>f(m,"name"))}#e=0;connectedCallback(){let m=Q(this.childNodes);if(this.firstElementChild?.tagName==="TEMPLATE"){this.firstElementChild!==this.lastElementChild&&console.error("payload should have TEMPLATE as only child",this.outerHTML);const h=this.firstElementChild;h.remove(),m=Q(h.content.childNodes);for(const v of m)if(v.localName==="style"){const o=Ee(this,"data-dce-style");v.innerHTML=`${s}[data-dce-style="${o}"]{${v.innerHTML}}`,h.insertAdjacentElement("beforebegin",v)}else v.nodeType===1?h.insertAdjacentElement("beforebegin",v):v.nodeType===3&&h.insertAdjacentText("beforebegin",v.data)}const a=j("<datadom/>").documentElement,c=(h,v="")=>(o=>(v&&o.append($(a,v)),o))(a.ownerDocument.createElement(h)),N=H(a,"payload",m,fe);le(N),ne(N),this.innerHTML="";const E=H(a,"attributes",this.attributes,h=>c(h.nodeName,h.value));H(a,"dataset",Object.keys(this.dataset),h=>c(h,this.dataset[h]));const b=H(a,"slice",p,h=>c(h,"")),y=h=>z(h,b);this.xml=a;const M=[],G=()=>{const h={};for(let v;v=M.pop();){const o=f(v.sliceElement,"slice");h[o]||(te(b,o,v),h[o]=v)}Object.keys(h).length!==0&&U()};let O;this.onSlice=h=>{M.push(h),O||(O=setTimeout(()=>{G(),O=0},1))};const U=this.transform=()=>{if(this.#e)debugger;this.#e=1,i.map((o,g)=>{const S=o.transformToFragment(a.ownerDocument,document);return S||console.error(`XSLT transformation error. xsl:
`,X(n[g]),`
xml:
`,X(a)),S}).map(o=>{o&&(oe(o),re(this,o.childNodes))}),T.observedAttributes.map(o=>{let g=f(this.firstElementChild,o);g!==f(this,o)&&(this.setAttribute(o,g),this.#t(o,g))});function v(o){let g=o;if(o.localName==="slice"){const S=f(o,"for");if(S||(g=o.parentElement),S==="^")do g=g.previousElementSibling;while(g.localName==="slice");else g=this.querySelector(S);if(!g)return console.warn(`can not find selector in "slice for=${S}" `,o.outerHTML);f(o,"slice")||o.setAttribute("slice",f(o,"name"))}return g}L(this,"[slice],[slice-event]",o=>{let g=f(o,"slice-event");const S=o.hasAttribute("slice-value")||o.hasAttribute("value")||o.value,P=v(o);o.dceInitialized||(o.dceInitialized=1,P.hasAttribute("custom-validity")&&(g+=" change submit"),[...new Set((g||"change").split(" "))].forEach(ce=>P.addEventListener(ce,A=>{A.sliceElement=o,A.sliceEventSource=A.currentTarget||A.target,A.sliceProcessed=0;const me=te(b,f(A.sliceElement,"slice"),A);L(this,"[custom-validity]",R=>{if(!R.setCustomValidity)return;const F=f(R,"custom-validity");try{const I=F&&z(F,E);R.setCustomValidity(I===!0?"":I===!1?"invalid":I)}catch(I){console.error(I,"xPath",F)}});const k=f(P,"custom-validity"),C=k&&z(k,E),B=C===!0?"":C;if(k){if(o.setCustomValidity?o.setCustomValidity(B):o.validationMessage=B,me.map(R=>R.setAttribute("validation-message",B)),A.type==="submit")return C===!0?void 0:(setTimeout(U,1),!!C===C?(C||A.preventDefault(),C):C?(A.preventDefault(),!1):void 0);setTimeout(U,1)}this.onSlice(A)})),(!g||g.includes("init"))&&(S?this.onSlice({type:"init",target:P,sliceElement:o,sliceEventSource:P}):o.value=y(f(o,"slice"))))}),this.#e=0};U(),G()}#t(m,a){m==="value"&&(this.value=a);let c=this.xml.querySelector(`attributes>${m}`);c?_(c).append($(c,a)):(c=w(m,a,this.xml),this.xml.querySelector("attributes").append(c)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{[m]:a}}))}attributeChangedCallback(m,a,c){!this.xml||this.#e||(this.#t(m,c),this.transform())}get dce(){return r}}const q=d=>{window.customElements.get(d)!==T&&window.customElements.define(d,T)};if(t)q(t);else{const d=s;this.setAttribute("tag",d),q(d);const m=document.createElement(d);this.getAttributeNames().forEach(a=>m.setAttribute(a,this.getAttribute(a))),m.append(...[...this.childNodes].filter(a=>a.localName!=="style")),this.append(m)}}get templateNode(){return this.firstElementChild?.tagName==="TEMPLATE"?this.firstElementChild.content:this}get dce(){return this}get xslt(){return j(this.xsltString)}}window.customElements.define("custom-element",Te);
