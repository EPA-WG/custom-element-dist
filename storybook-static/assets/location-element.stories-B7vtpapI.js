var S=Object.defineProperty;var T=(a,e,t)=>e in a?S(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var v=(a,e,t)=>(T(a,typeof e!="symbol"?e+"":e,t),t);import{w as g,e as n}from"./index-BASH1HpE.js";import"./custom-element--HC2GPP6.js";const B=(a,e)=>a.getAttribute(e);let m;function A(){m||(m={},"back,forward,go,pushState,replaceState".split(",").forEach(a=>{m[a]=history[a],history[a]=function(...e){m[a].apply(history,e),window.dispatchEvent(new CustomEvent("dce-location",{detail:{k:a}}))}}))}class q extends HTMLElement{constructor(){super();const e={},t=()=>setTimeout(i,1),i=()=>{const c=B(this,"href");c||A();const l=c?new URL(c,window.location):window.location,o={},r=new URLSearchParams(l.search);for(const s of r.keys())o[s]=r.getAll(s);const d={params:o};for(const s in l)typeof l[s]=="string"&&(d[s]=l[s]);this.value=d,this.dispatchEvent(new Event("change"))};this.sliceInit=c=>{var l;return!e.listener&&this.hasAttribute("live")&&(e.listener=1,(l=window.navigation)==null||l.addEventListener("navigate",t),window.addEventListener("popstate",t),window.addEventListener("hashchange",t),window.addEventListener("dce-location",t)),i(),c||{}},this._destroy=()=>{window.removeEventListener("popstate",t),window.removeEventListener("hashchange",t),window.removeEventListener("dce-location",t),delete e.listener}}attributeChangedCallback(e,t,i){e==="href"&&this.sliceInit&&this.sliceInit()}connectedCallback(){this.sliceInit()}disconnectedCallback(){this._destroy()}}v(q,"observedAttributes",["value","slice","href","type","live"]);window.customElements.define("location-element",q);const C={title:"",slice:"url-slice",href:"",live:"",body:""};function u(a){return new Promise(e=>setTimeout(e,a))}function k(a){const{title:e,slice:t,href:i,live:c,body:l}={...C,...a};return`
        <fieldset>
            <legend>${e}</legend>

            <custom-element>
<template><!-- wrapping into template to prevent images loading within DCE declaration -->
    <location-element 
        slice="${t}" 
        ${i?`href="${i}"`:""} 
        live="${c}"
        ></location-element>
    
    
    ${l}
    <xhtml:table>
        <xhtml:tbody>
            <xhtml:tr>
                <xhtml:th><h3> URL properties </h3></xhtml:th>
                <xhtml:td>{count(//value/@*)}</xhtml:td>
            </xhtml:tr>
            <apply-templates mode="attrs" select="//value/@*"></apply-templates>
        </xhtml:tbody>
    </xhtml:table>
    <xhtml:table>
            <h3> URL parameters </h3>
            <apply-templates mode="attrs" select="//params/*/*"></apply-templates>
    </xhtml:table>
    <xsl:template mode="attrs" match="*|@*">
        <xhtml:tr>
            <xhtml:th>{name()}</xhtml:th>
            <xhtml:td data-testid="param-{name()}">{.}</xhtml:td>
        </xhtml:tr>
    </xsl:template>
</template>
            </custom-element>
      </fieldset>
  `}const R={title:"location-element",render:k},h={args:{title:"live value",live:"live",body:`
    <button onclick="history.pushState( {'{}'},'', '/location.html?pushstate=p1&p2=P2#h1')">history.pushState</button>
    <button onclick="history.replaceState( {'{}'},'', '/vacation.html?replaceState=r1&r2=R2#h2')">history.replaceState</button>
`},play:async({canvasElement:a})=>{const e=g(a);await e.findByText(h.args.title);const t=o=>e.getByTestId("param-"+o).textContent.trim(),i=o=>e.getByText(o),c=(o,r)=>n(t(r)).toEqual(o[r],r),l="href,origin,protocol,host,hostname,port,pathname,search,hash".split(",");l.forEach(o=>c(window.location,o)),i("history.pushState").click(),await u(100),n(t("pathname")).toEqual("/location.html"),n(t("search")).toEqual("?pushstate=p1&p2=P2"),l.forEach(o=>c(window.location,o)),i("history.replaceState").click(),await u(100),n(t("pathname")).toEqual("/vacation.html"),n(t("search")).toEqual("?replaceState=r1&r2=R2"),l.forEach(o=>c(window.location,o))}},p={args:{title:"scr attribute as URL",live:"live",href:"/some/path?param1=/story/location-element--href-attribute?p1=P1&p2=P2#h1",body:`
    <button onclick="document.querySelector('location-element').setAttribute('href','/location.html?a1=A1&b2=B2#h2')">/location.html?a1=A1&b2=B2#h2</button>
    <button onclick="document.querySelector('location-element').setAttribute('href','/vacation.html?c1=C1&d2=D2#h3')">/vacation.html?c1=C1&d2=D2#h3</button>
`},play:async({canvasElement:a})=>{const e=g(a);await e.findByText(p.args.title);const t=o=>e.getByTestId("param-"+o).textContent.trim(),i=o=>e.getByText(o),c=(o,r)=>n(t(r)).toEqual(o[r],r);"origin,protocol,host,hostname,port".split(",").forEach(o=>c(window.location,o)),i("/location.html?a1=A1&b2=B2#h2").click(),await u(10),n(t("pathname")).toEqual("/location.html","pathname #2"),n(t("search")).toEqual("?a1=A1&b2=B2"),n(t("hash")).toEqual("#h2"),n(t("a1")).toEqual("A1"),n(t("b2")).toEqual("B2"),i("/vacation.html?c1=C1&d2=D2#h3").click(),await u(10),n(t("pathname")).toEqual("/vacation.html","pathname #3"),n(t("search")).toEqual("?c1=C1&d2=D2"),n(t("hash")).toEqual("#h3"),n(t("c1")).toEqual("C1"),n(t("d2")).toEqual("D2")}};var x,y,b;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'live value',
    live: 'live',
    body: \`
    <button onclick="history.pushState( {'{}'},'', '/location.html?pushstate=p1&p2=P2#h1')">history.pushState</button>
    <button onclick="history.replaceState( {'{}'},'', '/vacation.html?replaceState=r1&r2=R2#h2')">history.replaceState</button>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((Demo.args!.title as string));
    const val = prop => canvas.getByTestId('param-' + prop).textContent.trim(),
      byText = txt => canvas.getByText(txt),
      expectMatch = (l, prop) => expect(val(prop)).toEqual(l[prop], prop),
      locationProps = 'href,origin,protocol,host,hostname,port,pathname,search,hash'.split(',');
    locationProps.forEach(prop => expectMatch(window.location, prop));
    byText('history.pushState').click();
    await sleep(100);
    expect(val('pathname')).toEqual('/location.html');
    expect(val('search')).toEqual('?pushstate=p1&p2=P2');
    locationProps.forEach(prop => expectMatch(window.location, prop));
    byText('history.replaceState').click();
    await sleep(100);
    expect(val('pathname')).toEqual('/vacation.html');
    expect(val('search')).toEqual('?replaceState=r1&r2=R2');
    locationProps.forEach(prop => expectMatch(window.location, prop));
  }
}`,...(b=(y=h.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,E,f;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'scr attribute as URL',
    live: 'live',
    href: '/some/path?param1=/story/location-element--href-attribute?p1=P1&p2=P2#h1',
    body: \`
    <button onclick="document.querySelector('location-element').setAttribute('href','/location.html?a1=A1&b2=B2#h2')">/location.html?a1=A1&b2=B2#h2</button>
    <button onclick="document.querySelector('location-element').setAttribute('href','/vacation.html?c1=C1&d2=D2#h3')">/vacation.html?c1=C1&d2=D2#h3</button>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((SrcAttribute.args!.title as string));
    const val = prop => canvas.getByTestId('param-' + prop).textContent.trim(),
      byText = txt => canvas.getByText(txt),
      expectMatch = (l, prop) => expect(val(prop)).toEqual(l[prop], prop),
      locationProps = 'origin,protocol,host,hostname,port'.split(',');
    locationProps.forEach(prop => expectMatch(window.location, prop));
    byText('/location.html?a1=A1&b2=B2#h2').click();
    await sleep(10);
    expect(val('pathname')).toEqual('/location.html', 'pathname #2');
    expect(val('search')).toEqual('?a1=A1&b2=B2');
    expect(val('hash')).toEqual('#h2');
    expect(val('a1')).toEqual('A1');
    expect(val('b2')).toEqual('B2');
    byText('/vacation.html?c1=C1&d2=D2#h3').click();
    await sleep(10);
    expect(val('pathname')).toEqual('/vacation.html', 'pathname #3');
    expect(val('search')).toEqual('?c1=C1&d2=D2');
    expect(val('hash')).toEqual('#h3');
    expect(val('c1')).toEqual('C1');
    expect(val('d2')).toEqual('D2');
  }
}`,...(f=(E=p.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const M=["Demo","SrcAttribute"];export{h as Demo,p as SrcAttribute,M as __namedExportsOrder,R as default};
