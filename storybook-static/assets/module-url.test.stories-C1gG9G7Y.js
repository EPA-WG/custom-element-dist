import{w as l,e as i}from"./index-CGuyH0k-.js";import"./custom-element-Bwx7otrT.js";import{f as c}from"./frame.canvas-E5n9h6j1.js";const d=(a,e)=>a.getAttribute(e);class b extends HTMLElement{static observedAttributes=["slice","src"];sliceInit(){let e=d(this,"src");try{const t=e.charAt(0)==="."?new URL(e,this.closest("[base]")?.getAttribute("base")||location.href).href:import.meta.resolve(e);this.setAttribute("value",this.value=t)}catch(t){this.setAttribute("error",t.message),this.setAttribute("value",e),console.error(t.message??t,e)}this.dispatchEvent(new Event("change"))}attributeChangedCallback(e,t,f){e==="src"&&this.sliceInit()}}window.customElements.define("module-url",b);function u(a){const{title:e,body:t}=a;return`
        <fieldset>
            <legend>${e}</legend>
            ${t}
        </fieldset>
  `}const p={title:"module-url",render:u},n={args:{title:"1. relative to page path",body:`
    <custom-element>
        <template>
            <a href="/demo/embed-1.html">
                <custom-element src="/demo/embed-1.html"></custom-element>
            </a>
        </template>
    </custom-element>
`},play:async({canvasElement:a})=>{const e=l(a);await e.findByText(n.args.title),await i(await e.findByText("🖖")).toBeInTheDocument(),await i(await e.findByText("embed-1.html")).toBeInTheDocument()}},s={args:{title:"2. module by symbolic name",body:`
<iframe src="/demo/module-url-sb-2.html" name="sb" data-testid="fr"></iframe>
`},play:async({canvasElement:a})=>{const e=l(a);await e.findByText(s.args.title);const t=await c("fr",e);await i(await t.findByText("check the link:")).toBeInTheDocument(),await i(await t.findByText("👋 from embed-lib-component")).toBeInTheDocument()}},o={args:{title:"3. module by symbolic name with missing importmap entry",body:`
    <custom-element>
        <template>
            <module-url slice="lib-url" src="fakedemo-lib/embed-lib.html"></module-url>
            <if test="//lib-url/@error">
                <p>error: <b>{//lib-url/@error}</b></p>
            </if>
            the link is broken:
            <a href="{//lib-url}">
                <custom-element src="fakedemo-lib/embed-lib.html#embed-lib-component">
                    failed to load
                </custom-element>
            </a>
        </template>
    </custom-element>
`},play:async({canvasElement:a})=>{const e=l(a);await e.findByText(o.args.title),await i(await e.findByText("error:")).toBeInTheDocument(),await i(await e.findByText("failed to load")).toBeInTheDocument()}},m={args:{title:"4. module path by symbolic name",body:`
    <iframe src="/demo/module-url-sb-4.html" name="sb" data-testid="fr"></iframe>

`},play:async({canvasElement:a})=>{const e=l(a);await e.findByText(m.args.title);const t=await c("fr",e);await i(await t.findByText("👌 from embed-relative-hash invoking")).toBeInTheDocument(),await i(await t.findByText("lib-root/embed-lib.html#embed-relative-hash")).toBeInTheDocument(),await i(await t.findByText("#embed-lib-component")).toBeInTheDocument()}},r={args:{title:"5. module path by symbolic name to internal link within lib",body:`
        <iframe src="/demo/module-url-sb-5.html" 
            data-testid="fr" 
            style="height:22rem;width: 80vw;"></iframe>
`},play:async({canvasElement:a})=>{const e=l(a);await e.findByText(r.args.title);const t=await c("fr",e);await i(await t.findByText("lib-root/embed-lib.html#embed-relative-file")).toBeInTheDocument(),await i(await t.findByText("👍 from embed-relative-file invoking")).toBeInTheDocument(),await i(await t.findByText("embed-1.html")).toBeInTheDocument(),await i(await t.findByText("embed-1.html")).toBeInTheDocument(),await i(await t.findByText("🖖")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: '1. relative to page path',
    body: \`
    <custom-element>
        <template>
            <a href="/demo/embed-1.html">
                <custom-element src="/demo/embed-1.html"></custom-element>
            </a>
        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(RelativeToPagePath.args!.title as string);
    await expect(await canvas.findByText('🖖')).toBeInTheDocument();
    await expect(await canvas.findByText('embed-1.html')).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: '2. module by symbolic name',
    body: \`
<iframe src="/demo/module-url-sb-2.html" name="sb" data-testid="fr"></iframe>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(ModuleBySymbolicName.args!.title as string);
    const frCanvas = await frameCanvas('fr', canvas);
    await expect(await frCanvas.findByText('check the link:')).toBeInTheDocument();
    await expect(await frCanvas.findByText('👋 from embed-lib-component')).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: '3. module by symbolic name with missing importmap entry',
    body: \`
    <custom-element>
        <template>
            <module-url slice="lib-url" src="fakedemo-lib/embed-lib.html"></module-url>
            <if test="//lib-url/@error">
                <p>error: <b>{//lib-url/@error}</b></p>
            </if>
            the link is broken:
            <a href="{//lib-url}">
                <custom-element src="fakedemo-lib/embed-lib.html#embed-lib-component">
                    failed to load
                </custom-element>
            </a>
        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(MissingImportmapEntry.args!.title as string);
    await expect(await canvas.findByText('error:')).toBeInTheDocument();
    await expect(await canvas.findByText('failed to load')).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: '4. module path by symbolic name',
    body: \`
    <iframe src="/demo/module-url-sb-4.html" name="sb" data-testid="fr"></iframe>

\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(ModuleByName.args!.title as string);
    const frCanvas = await frameCanvas('fr', canvas);
    await expect(await frCanvas.findByText('👌 from embed-relative-hash invoking')).toBeInTheDocument();
    await expect(await frCanvas.findByText('lib-root/embed-lib.html#embed-relative-hash')).toBeInTheDocument();
    await expect(await frCanvas.findByText('#embed-lib-component')).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: '5. module path by symbolic name to internal link within lib',
    body: \`
        <iframe src="/demo/module-url-sb-5.html" 
            data-testid="fr" 
            style="height:22rem;width: 80vw;"></iframe>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(HashWithinLib.args!.title as string);
    const frCanvas = await frameCanvas('fr', canvas);
    await expect(await frCanvas.findByText('lib-root/embed-lib.html#embed-relative-file')).toBeInTheDocument();
    await expect(await frCanvas.findByText('👍 from embed-relative-file invoking')).toBeInTheDocument();
    await expect(await frCanvas.findByText('embed-1.html')).toBeInTheDocument();
    await expect(await frCanvas.findByText('embed-1.html')).toBeInTheDocument();
    await expect(await frCanvas.findByText('🖖')).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const v=["RelativeToPagePath","ModuleBySymbolicName","MissingImportmapEntry","ModuleByName","HashWithinLib"];export{r as HashWithinLib,o as MissingImportmapEntry,m as ModuleByName,s as ModuleBySymbolicName,n as RelativeToPagePath,v as __namedExportsOrder,p as default};
