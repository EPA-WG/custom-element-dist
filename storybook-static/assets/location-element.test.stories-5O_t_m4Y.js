import{w as v,e as l}from"./custom-element-BV8-hRQS.js";import"./index-CVRyq5ci.js";const x=(o,a)=>o.getAttribute(a);let m;function y(){m||(m={},"back,forward,go,pushState,replaceState".split(",").forEach(o=>{m[o]=history[o],history[o]=function(...a){m[o].apply(history,a),window.dispatchEvent(new CustomEvent("dce-location",{detail:{k:o}}))}}))}class b extends HTMLElement{static observedAttributes=["value","slice","href","type","live"];constructor(){super();const a={},t=()=>setTimeout(c,1),c=()=>{const n=x(this,"href");n||y();const i=n?new URL(n,window.location):window.location,e={},r=new URLSearchParams(i.search);for(const s of r.keys())e[s]=r.getAll(s);const d={params:e};for(const s in i)typeof i[s]=="string"&&(d[s]=i[s]);this.value=d,this.dispatchEvent(new Event("change"))};this.sliceInit=n=>(!a.listener&&this.hasAttribute("live")&&(a.listener=1,window.navigation?.addEventListener("navigate",t),window.addEventListener("popstate",t),window.addEventListener("hashchange",t),window.addEventListener("dce-location",t)),c(),n||{}),this._destroy=()=>{window.removeEventListener("popstate",t),window.removeEventListener("hashchange",t),window.removeEventListener("dce-location",t),delete a.listener}}attributeChangedCallback(a,t,c){a==="href"&&this.sliceInit&&this.sliceInit()}connectedCallback(){this.sliceInit()}disconnectedCallback(){this._destroy()}}window.customElements.define("location-element",b);const w={title:"",slice:"url-slice",href:"",live:"",body:""};function u(o){return new Promise(a=>setTimeout(a,o))}function E(o){const{title:a,slice:t,href:c,live:n,body:i}={...w,...o};return`
        <fieldset>
            <legend>${a}</legend>

            <custom-element>
<template><!-- wrapping into template to prevent images loading within DCE declaration -->
    <location-element
        slice="${t}"
        ${c?`href="${c}"`:""}
        live="${n}"
        ></location-element>


    ${i}
    <xhtml:table>
        <xhtml:tbody>
            <xhtml:tr>
                <xhtml:th><h3> URL properties </h3></xhtml:th>
                <xhtml:td>{count(//value/@*)}</xhtml:td>
            </xhtml:tr>
            <apply-templates mode="attrs" select="//${t}/value/@*"></apply-templates>
        </xhtml:tbody>
    </xhtml:table>
    <xhtml:table>
            <h3> URL parameters </h3>
            <apply-templates mode="attrs" select="//${t}/value/params/*/*"></apply-templates>
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
  `}const q={title:"location-element",render:E},h={args:{title:"live value",live:"live",body:`
    <button onclick="history.pushState( {'{}'},'', '/location.html?pushstate=p1&p2=P2#h1')">history.pushState</button>
    <button onclick="history.replaceState( {'{}'},'', '/vacation.html?replaceState=r1&r2=R2#h2')">history.replaceState</button>
`},play:async({canvasElement:o})=>{const a=v(o);await a.findByText(h.args.title);const t=e=>a.getByTestId("param-"+e).textContent.trim(),c=e=>a.getByText(e),n=(e,r)=>l(t(r)).toEqual(e[r],r),i="href,origin,protocol,host,hostname,port,pathname,search,hash".split(",");i.forEach(e=>n(window.location,e)),c("history.pushState").click(),await u(100),l(t("pathname")).toEqual("/location.html"),l(t("search")).toEqual("?pushstate=p1&p2=P2"),i.forEach(e=>n(window.location,e)),c("history.replaceState").click(),await u(100),l(t("pathname")).toEqual("/vacation.html"),l(t("search")).toEqual("?replaceState=r1&r2=R2"),i.forEach(e=>n(window.location,e))}},p={args:{title:"scr attribute as URL",live:"live",href:"/some/path?param1=/story/location-element--href-attribute?p1=P1&p2=P2#h1",body:`
    <button onclick="document.querySelector('location-element').setAttribute('href','/location.html?a1=A1&b2=B2#h2')">/location.html?a1=A1&b2=B2#h2</button>
    <button onclick="document.querySelector('location-element').setAttribute('href','/vacation.html?c1=C1&d2=D2#h3')">/vacation.html?c1=C1&d2=D2#h3</button>
`},play:async({canvasElement:o})=>{const a=v(o);await a.findByText(p.args.title);const t=e=>a.getByTestId("param-"+e).textContent.trim(),c=e=>a.getByText(e),n=(e,r)=>l(t(r)).toEqual(e[r],r);"origin,protocol,host,hostname,port".split(",").forEach(e=>n(window.location,e)),c("/location.html?a1=A1&b2=B2#h2").click(),await u(10),l(t("pathname")).toEqual("/location.html","pathname #2"),l(t("search")).toEqual("?a1=A1&b2=B2"),l(t("hash")).toEqual("#h2"),l(t("a1")).toEqual("A1"),l(t("b2")).toEqual("B2"),c("/vacation.html?c1=C1&d2=D2#h3").click(),await u(10),l(t("pathname")).toEqual("/vacation.html","pathname #3"),l(t("search")).toEqual("?c1=C1&d2=D2"),l(t("hash")).toEqual("#h3"),l(t("c1")).toEqual("C1"),l(t("d2")).toEqual("D2")}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const S=["Demo","SrcAttribute"];export{h as Demo,p as SrcAttribute,S as __namedExportsOrder,q as default};
