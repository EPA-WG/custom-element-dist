import{w as l,e as a}from"./custom-element-wn23PUwN.js";import"./index-C8k3Z-3Y.js";function T(t){return new Promise(e=>setTimeout(e,t))}function h(t){const{title:e,body:n}=t;return`
        <fieldset>
            <legend>${e}</legend>
            ${n}
        </fieldset>
  `}const B={title:"external-templates",render:h},s={args:{title:"Template in page DOM",body:`
    <template id="template1">
    <slot>Hello</slot> World!
    </template>

    <custom-element tag="dce-internal" src="#template1"></custom-element>
    <!-- no need for loading fallback as the template exists -->

    <dce-internal data-testid="slot-override">👋</dce-internal>
    <dce-internal  data-testid="slot-default"></dce-internal>
`},play:async({canvasElement:t})=>{const e=l(t);await e.findByText(s.args.title);const n=f=>e.getByTestId(f).textContent.trim();a(n("slot-override")).toEqual("👋 World!"),a(n("slot-default")).toEqual("Hello World!")}},i={args:{title:"no tag, template in same DOM",body:`
<template id="template2">
    🏗️ construction
</template>

<custom-element src="#template2"></custom-element>
<custom-element src="#template2"></custom-element>`},play:async({canvasElement:t})=>{await l(t).findByText(i.args.title),a(t.querySelectorAll("custom-element")[0].textContent.trim()).toEqual("🏗️ construction"),a(t.querySelectorAll("custom-element")[1].textContent.trim()).toEqual("🏗️ construction")}},m={args:{title:"External SVG as template",body:`
    <custom-element tag="dce-external" src="/confused.svg">
        <template><i>loading from SVG ...</i></template>
    </custom-element>
    <dce-external></dce-external>
    <custom-element src="confused.svg">
        <i>inline DCE loading from SVG ...</i>
    </custom-element>
    <custom-element src="no.svg">
        <i>fallback for missing image</i>
    </custom-element>
`},play:async({canvasElement:t})=>{const e=l(t);await e.findByText(m.args.title),await a(e.getByText("inline DCE loading from SVG ...")).toBeInTheDocument(),a(t.querySelector('[src="confused.svg"]').innerHTML).to.include("loading from SVG ..."),await a(await e.findByText("fallback for missing image")).toBeInTheDocument(),await a(await e.findByTitle("Confused")).toBeInTheDocument()}},o={args:{title:"External XSLT file",body:`
    <custom-element tag="dce-external-4" src="/tree.xsl">
        <template><i>loading from XSLT ...</i></template>
    </custom-element>
    <dce-external-4 title="DCE with external XSLT template" data-fruit="🍌">Hi</dce-external-4>
    <hr/>
    <custom-element src="/tree.xsl" data-smile="👼" data-basket="🍒">
        <i>inline DCE loading from XSLT ...</i>
    </custom-element>
`},play:async({canvasElement:t})=>{const e=l(t);await e.findByText(o.args.title),a(t.querySelector("dce-external-4").innerHTML).to.include("Hi"),a(t.querySelector('[data-smile="👼"]').innerHTML).to.include("loading from XSLT ..."),await T(100),a(e.getByTestId("data-fruit").innerHTML).to.include("🍌"),a(e.getByTestId("data-smile").innerHTML).to.include("👼")}},c={args:{title:"external HTML template",body:`
    <custom-element tag="dce-external-5" src="/html-template.html">
                <template><i>loading from HTML file ...</i></template>
            </custom-element>
            <dce-external-5 title="DCE with external XSLT template" data-fruit="🍌">Hi</dce-external-5>
`},play:async({canvasElement:t})=>{const e=l(t);await e.findByText(c.args.title),await e.findByText("👋");const n=t.querySelector("dce-external-5").innerHTML;a(n).to.include("👋"),a(n).to.include("👌"),a(n).to.include("<svg"),a(n).to.include("<math")}},r={args:{title:"external HTML template",body:`
            <custom-element src="/html-template.html" data-smile="👼" data-basket="🍒">
                <i>inline DCE loading from HTML file ...</i>
            </custom-element>
`},play:async({canvasElement:t})=>{const e=l(t);await e.findByText(r.args.title),await e.findByText("👋");const n=t.innerHTML;a(n).to.include("👋"),a(n).to.include("👌"),a(n).to.include("<svg"),a(n).to.include("<math")}},d={args:{title:"external HTML template - html by id",body:`
        <custom-element src="/html-template.html#wave">
            <template><i>loading HTML from templates file ...</i></template>
        </custom-element>
`},play:async({canvasElement:t})=>{const e=l(t);await e.findByText(d.args.title),a(await e.findByText("👋")).toBeInTheDocument()}},p={args:{title:"external HTML template - SVG by id",body:`
        <custom-element src="/html-template.html#dwc-logo">
            <template><i>loading  SVG from templates file ...</i></template>
        </custom-element>
`},play:async({canvasElement:t})=>{const e=l(t);await e.findByText(p.args.title),a(await e.findByTestId("svg-test")).toBeInTheDocument()}},u={args:{title:"external HTML template - MathML by id",body:`
        <custom-element src="/html-template.html#sophomores-dream">
            <template><i>loading MathML from HTML file ...</i></template>
        </custom-element>
`},play:async({canvasElement:t})=>{const e=l(t);await e.findByText(u.args.title);const n=await e.findByTestId("ml-test");a(n.firstElementChild.localName).toEqual("mrow")}},g={args:{title:"external XHTML template - xsl by id",body:`
        <custom-element src="/html-template.xhtml#embedded-xsl">
            <template>whole XSLT is  embedded into HTML body</template>
        </custom-element>
`},play:async({canvasElement:t})=>{const e=l(t);await e.findByText(g.args.title);const n=await e.findByTestId("src");a(n.textContent).to.include("/html-template.xhtml#embedded-xsl")}},x={args:{title:"external HTML template - missing id",body:`
    <custom-element src="/html-template.html#none">
        <template><i data-testid="no-id">element with id=none is missing in template</i></template>
    </custom-element>
`},play:async({canvasElement:t})=>{const e=l(t);await e.findByText(x.args.title),await T(100);const n=await e.findByTestId("no-id");a(n.textContent).to.include("element with id=none is missing in template")}},y={args:{title:"external file with embedding of another external DCE",body:`
    <custom-element src="/embed-1.html">
        loading from embed-1.html ...
    </custom-element>
`},play:async({canvasElement:t})=>{const e=l(t);await e.findByText(y.args.title),await T(1),a(await e.findByText("embed-1.html")).toBeInTheDocument(),a(await e.findByText("🖖")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Template in page DOM',
    body: \`
    <template id="template1">
    <slot>Hello</slot> World!
    </template>

    <custom-element tag="dce-internal" src="#template1"></custom-element>
    <!-- no need for loading fallback as the template exists -->

    <dce-internal data-testid="slot-override">👋</dce-internal>
    <dce-internal  data-testid="slot-default"></dce-internal>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((TemplateInPage.args!.title as string));
    const val = prop => canvas.getByTestId(prop).textContent.trim();
    expect(val('slot-override')).toEqual('👋 World!');
    expect(val('slot-default')).toEqual('Hello World!');
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'no tag, template in same DOM',
    body: \`
<template id="template2">
    🏗️ construction
</template>

<custom-element src="#template2"></custom-element>
<custom-element src="#template2"></custom-element>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((NoTag.args!.title as string));
    expect(canvasElement.querySelectorAll('custom-element')[0].textContent.trim()).toEqual('🏗️ construction');
    expect(canvasElement.querySelectorAll('custom-element')[1].textContent.trim()).toEqual('🏗️ construction');
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'External SVG as template',
    body: \`
    <custom-element tag="dce-external" src="/confused.svg">
        <template><i>loading from SVG ...</i></template>
    </custom-element>
    <dce-external></dce-external>
    <custom-element src="confused.svg">
        <i>inline DCE loading from SVG ...</i>
    </custom-element>
    <custom-element src="no.svg">
        <i>fallback for missing image</i>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((ExternalSvg.args!.title as string));
    await expect(canvas.getByText('inline DCE loading from SVG ...')).toBeInTheDocument();

    // needs separate test
    // await expect( await canvas.findByText('loading from SVG ...')).toBeInTheDocument();

    expect(canvasElement.querySelector('[src="confused.svg"]').innerHTML).to.include('loading from SVG ...');
    await expect(await canvas.findByText('fallback for missing image')).toBeInTheDocument();
    await expect(await canvas.findByTitle('Confused')).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'External XSLT file',
    body: \`
    <custom-element tag="dce-external-4" src="/tree.xsl">
        <template><i>loading from XSLT ...</i></template>
    </custom-element>
    <dce-external-4 title="DCE with external XSLT template" data-fruit="🍌">Hi</dce-external-4>
    <hr/>
    <custom-element src="/tree.xsl" data-smile="👼" data-basket="🍒">
        <i>inline DCE loading from XSLT ...</i>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((ExternalXsltFile.args!.title as string));
    expect(canvasElement.querySelector('dce-external-4').innerHTML).to.include('Hi');
    expect(canvasElement.querySelector('[data-smile="👼"]').innerHTML).to.include('loading from XSLT ...');
    await sleep(100);
    expect(canvas.getByTestId('data-fruit').innerHTML).to.include('🍌');
    expect(canvas.getByTestId('data-smile').innerHTML).to.include('👼');
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'external HTML template',
    body: \`
    <custom-element tag="dce-external-5" src="/html-template.html">
                <template><i>loading from HTML file ...</i></template>
            </custom-element>
            <dce-external-5 title="DCE with external XSLT template" data-fruit="🍌">Hi</dce-external-5>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((ExternalHtmlFile.args!.title as string));
    await canvas.findByText('👋');
    const t5 = canvasElement.querySelector('dce-external-5').innerHTML;
    expect(t5).to.include('👋');
    expect(t5).to.include('👌');
    expect(t5).to.include('<svg');
    expect(t5).to.include('<math');
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'external HTML template',
    body: \`
            <custom-element src="/html-template.html" data-smile="👼" data-basket="🍒">
                <i>inline DCE loading from HTML file ...</i>
            </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((ExternalHtmlFileInline.args!.title as string));
    await canvas.findByText('👋');
    const t5 = canvasElement.innerHTML;
    expect(t5).to.include('👋');
    expect(t5).to.include('👌');
    expect(t5).to.include('<svg');
    expect(t5).to.include('<math');
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'external HTML template - html by id',
    body: \`
        <custom-element src="/html-template.html#wave">
            <template><i>loading HTML from templates file ...</i></template>
        </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((HtmlWithinHtmlFile.args!.title as string));
    expect(await canvas.findByText('👋')).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'external HTML template - SVG by id',
    body: \`
        <custom-element src="/html-template.html#dwc-logo">
            <template><i>loading  SVG from templates file ...</i></template>
        </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((SvgWithinHtmlFile.args!.title as string));
    expect(await canvas.findByTestId('svg-test')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'external HTML template - MathML by id',
    body: \`
        <custom-element src="/html-template.html#sophomores-dream">
            <template><i>loading MathML from HTML file ...</i></template>
        </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((MathMLWithinHtmlFile.args!.title as string));
    const ml = await canvas.findByTestId('ml-test');
    expect(ml.firstElementChild.localName).toEqual('mrow');
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'external XHTML template - xsl by id',
    body: \`
        <custom-element src="/html-template.xhtml#embedded-xsl">
            <template>whole XSLT is  embedded into HTML body</template>
        </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((ByIdWithinXsltFile.args!.title as string));
    const ml = await canvas.findByTestId('src');
    expect(ml.textContent).to.include('/html-template.xhtml#embedded-xsl');
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'external HTML template - missing id',
    body: \`
    <custom-element src="/html-template.html#none">
        <template><i data-testid="no-id">element with id=none is missing in template</i></template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((MissingIdWithinXsltFile.args!.title as string));
    await sleep(100);
    const ml = await canvas.findByTestId('no-id');
    expect(ml.textContent).to.include('element with id=none is missing in template');
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'external file with embedding of another external DCE',
    body: \`
    <custom-element src="/embed-1.html">
        loading from embed-1.html ...
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((EmbeddingInAnotherFile.args!.title as string));
    await sleep(1);
    expect(await canvas.findByText('embed-1.html')).toBeInTheDocument();
    expect(await canvas.findByText('🖖')).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}};const E=["TemplateInPage","NoTag","ExternalSvg","ExternalXsltFile","ExternalHtmlFile","ExternalHtmlFileInline","HtmlWithinHtmlFile","SvgWithinHtmlFile","MathMLWithinHtmlFile","ByIdWithinXsltFile","MissingIdWithinXsltFile","EmbeddingInAnotherFile"];export{g as ByIdWithinXsltFile,y as EmbeddingInAnotherFile,c as ExternalHtmlFile,r as ExternalHtmlFileInline,m as ExternalSvg,o as ExternalXsltFile,d as HtmlWithinHtmlFile,u as MathMLWithinHtmlFile,x as MissingIdWithinXsltFile,i as NoTag,p as SvgWithinHtmlFile,s as TemplateInPage,E as __namedExportsOrder,B as default};
