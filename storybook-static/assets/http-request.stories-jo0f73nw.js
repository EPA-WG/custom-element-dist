import{w as m,e as t}from"./index-Dr4PwNfd.js";import"./custom-element-CPnvJnn8.js";import"./http-request-DNq59pnj.js";import{h as p}from"./handlers-CLkps6Nz.js";const v={title:"",slice:"page",url:"/pokemon?limit=6"};function r(a){return new Promise(e=>setTimeout(e,a))}function f({title:a,slice:e,url:n}){return`
        <fieldset>
            <legend>${a}</legend>
            <custom-element>
<template><!-- wrapping into template to prevent images loading within DCE declaration -->
    <http-request
        url="{ //slice/url  }"
        slice="${e}"
        ></http-request>
    <input placeholder="URL for fetch" slice="url" value="{ //url ?? '${n}' }"/>
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
  `}const y={title:"http-request",render:a=>f(a),renderPlay:async function(e){document.body.innerHTML=(e.render?e:y).render({...v,...e.args}),await new Promise(n=>setTimeout(async()=>{await e.play({canvasElement:document.body.firstElementChild}),n(0)},0))}},l={args:{title:"url and slice",url:"/pokemon?limit=4"},play:async({canvasElement:a})=>{const e=m(a);await e.findByText(l.args.title),t(await e.findByText("bulbasaur")).toBeInTheDocument(),t(await e.findByText("Pokemon Count: 4")).toBeInTheDocument(a)},parameters:{msw:p}},c={args:{title:"url change",url:""},play:async({canvasElement:a})=>{const e=m(a);await e.findByText(c.args.title);const n=h=>e.getByText(h),o=a.querySelector("http-request"),s=()=>o.getAttribute("url");t(n("Pokemon Count: 0")).toBeInTheDocument(),t(s()).toEqual(""),n("/pokemon").click(),await r(100),t(s()).toEqual("/pokemon"),t(n("Pokemon Count: 6")).toBeInTheDocument(),n("/pokemon?limit=6").click(),await r(100),t(s()).toEqual("/pokemon?limit=6"),t(n("Pokemon Count: 6")).toBeInTheDocument(),n("/pokemon?limit=3").click(),await r(100),t(s()).toEqual("/pokemon?limit=3"),t(n("Pokemon Count: 3")).toBeInTheDocument(),n("set blank").click(),await r(100),t(s()).toEqual(""),t(n("Pokemon Count: 0")).toBeInTheDocument()},parameters:{msw:p}},i={args:{title:"http-request with error",url:"/404"},play:async({canvasElement:a})=>{const e=m(a),n=async o=>(await e.findByTestId(o)).textContent;await e.findByText(i.args.title),await r(200),t(await n("attr-status")).to.include("404")},parameters:{msw:p}},u={args:{title:"http-request with delayed .5 seconds response",url:"/noreturn"},play:async({canvasElement:a})=>{const e=m(a);await e.findByText(u.args.title),t(await e.findByText("request")).toBeInTheDocument(),t(e.queryByText("response")).toBe(null),t(await e.findByText("response")).toBeInTheDocument(),t(await e.findByText("bulbasaur")).toBeInTheDocument(),t(await e.findByText("Pokemon Count: 6")).toBeInTheDocument()},parameters:{msw:p}},d={args:{title:"http-request headers and response status and headers",url:"/reflect"},play:async({canvasElement:a})=>{const e=m(a);await e.findByText(d.args.title),await r(200);const n=await e.findByTestId("section-request-attr-x-test");t(n).toBeInTheDocument(),t(n.textContent.trim()).toEqual("testing");const o=await e.findByTestId("section-response-attr-x-test");t(o).toBeInTheDocument(),t(o.textContent.trim()).toEqual("reflected-testing");const s=await e.findByTestId("section-response-attr-x-added");t(s).toBeInTheDocument(),t(s.textContent.trim()).toEqual("abc")},parameters:{msw:p},render:({url:a,title:e})=>`
        <fieldset>
            <legend>${e}</legend>
            <p> <b>request</b> headers are populated into dedicated <b>slice/request/headers</b></p>

            <custom-element tag="headers-demo" >
                <template>
<http-request
    url="${a}"
    slice="request_slice"
    type="text"
    mode="cors"
    header-x-test="testing"
    ></http-request>
Content of <code>//slice/request_slice</code> is filled by <b>request</b> and <b>response</b>
from <code>${a}</code>

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
`};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'url and slice',
    url: '/pokemon?limit=4'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(Demo.args!.title as string);
    expect(await canvas.findByText('bulbasaur')).toBeInTheDocument();
    expect(await canvas.findByText('Pokemon Count: 4')).toBeInTheDocument(canvasElement);
  },
  parameters: {
    msw: handlers
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'url change',
    url: ''
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(UrlChange.args!.title as string);
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'http-request with error',
    url: '/404'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement),
      $t = async testId => (await canvas.findByTestId(testId)).textContent;
    await canvas.findByText(Http404.args!.title as string);
    await sleep(200);
    expect(await $t('attr-status')).to.include('404');
  },
  parameters: {
    msw: handlers
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'http-request with delayed .5 seconds response',
    url: '/noreturn'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(LifecycleInitialized.args!.title as string);
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'http-request headers and response status and headers',
    url: '/reflect'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(RequestResponseHeaders.args!.title as string);
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
}`,...d.parameters?.docs?.source}}};const w=["Demo","UrlChange","Http404","LifecycleInitialized","RequestResponseHeaders"];export{l as Demo,i as Http404,u as LifecycleInitialized,d as RequestResponseHeaders,c as UrlChange,w as __namedExportsOrder,y as default};
