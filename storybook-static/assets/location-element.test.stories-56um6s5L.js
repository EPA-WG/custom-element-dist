import{w as m,e}from"./index-CxRwF5Or.js";import"./custom-element-D59Fok1f.js";import"./location-element-hKpcXCdn.js";const u={title:"",slice:"url-slice",href:"",live:"",body:""};function h(c){return new Promise(o=>setTimeout(o,c))}function x(c){const{title:o,slice:t,href:l,live:r,body:i}={...u,...c};return`
        <fieldset>
            <legend>${o}</legend>

            <custom-element>
<template><!-- wrapping into template to prevent images loading within DCE declaration -->
    <location-element
        slice="${t}"
        ${l?`href="${l}"`:""}
        live="${r}"
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
  `}const b={title:"location-element",render:x},p={args:{title:"live value",live:"live",body:`
    <button onclick="history.pushState( {'{}'},'', '/location.html?pushstate=p1&p2=P2#h1')">history.pushState</button>
    <button onclick="history.replaceState( {'{}'},'', '/vacation.html?replaceState=r1&r2=R2#h2')">history.replaceState</button>
`},play:async({canvasElement:c})=>{const o=m(c);await o.findByText(p.args.title);const t=a=>o.getByTestId("param-"+a).textContent.trim(),l=a=>o.getByText(a),r=(a,n)=>e(t(n)).toEqual(a[n],n),i="href,origin,protocol,host,hostname,port,pathname,search,hash".split(",");i.forEach(a=>r(window.location,a)),l("history.pushState").click(),await h(100),e(t("pathname")).toEqual("/location.html"),e(t("search")).toEqual("?pushstate=p1&p2=P2"),i.forEach(a=>r(window.location,a)),l("history.replaceState").click(),await h(100),e(t("pathname")).toEqual("/vacation.html"),e(t("search")).toEqual("?replaceState=r1&r2=R2"),i.forEach(a=>r(window.location,a))}},s={args:{title:"scr attribute as URL",live:"live",href:"/some/path?param1=/story/location-element--href-attribute?p1=P1&p2=P2#h1",body:`
    <button onclick="document.querySelector('location-element').setAttribute('href','/location.html?a1=A1&b2=B2#h2')">/location.html?a1=A1&b2=B2#h2</button>
    <button onclick="document.querySelector('location-element').setAttribute('href','/vacation.html?c1=C1&d2=D2#h3')">/vacation.html?c1=C1&d2=D2#h3</button>
`},play:async({canvasElement:c})=>{const o=m(c);await o.findByText(s.args.title);const t=a=>o.getByTestId("param-"+a).textContent.trim(),l=a=>o.getByText(a),r=(a,n)=>e(t(n)).toEqual(a[n],n);"origin,protocol,host,hostname,port".split(",").forEach(a=>r(window.location,a)),l("/location.html?a1=A1&b2=B2#h2").click(),await h(10),e(t("pathname")).toEqual("/location.html","pathname #2"),e(t("search")).toEqual("?a1=A1&b2=B2"),e(t("hash")).toEqual("#h2"),e(t("a1")).toEqual("A1"),e(t("b2")).toEqual("B2"),l("/vacation.html?c1=C1&d2=D2#h3").click(),await h(10),e(t("pathname")).toEqual("/vacation.html","pathname #3"),e(t("search")).toEqual("?c1=C1&d2=D2"),e(t("hash")).toEqual("#h3"),e(t("c1")).toEqual("C1"),e(t("d2")).toEqual("D2")}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    await canvas.findByText(Demo.args!.title as string);
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
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    await canvas.findByText(SrcAttribute.args!.title as string);
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
}`,...s.parameters?.docs?.source}}};const E=["Demo","SrcAttribute"];export{p as Demo,s as SrcAttribute,E as __namedExportsOrder,b as default};
