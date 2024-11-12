import{w as s,e as a}from"./index-CxRwF5Or.js";import"./custom-element-D59Fok1f.js";const c=(t,e)=>t.getAttribute(e);class b extends HTMLElement{static observedAttributes=["slice","src"];sliceInit(){let e=c(this,"src");try{const l=e.charAt(0)==="."?new URL(e,this.closest("[base]")?.getAttribute("base")||location.href).href:import.meta.resolve(e);this.setAttribute("value",this.value=l)}catch(l){this.setAttribute("error",l.message),this.setAttribute("value",e),console.error(l.message??l,e)}this.dispatchEvent(new Event("change"))}attributeChangedCallback(e,l,u){e==="src"&&this.sliceInit()}}window.customElements.define("module-url",b);function d(t){const{title:e,body:l}=t;return`
        <fieldset>
            <legend>${e}</legend>
            ${l}
        </fieldset>
  `}const f={title:"module-url",render:d},i={args:{title:"1. relative to page path",body:`
    <custom-element>
        <a href="../../../demo/embed-1.html">
            <custom-element src="../../../demo/embed-1.html"></custom-element>
        </a>
    </custom-element>
`},play:async({canvasElement:t})=>{const e=s(t);await e.findByText(i.args.title),await a(await e.findByText("🖖")).toBeInTheDocument(),await a(await e.findByText("embed-1.html")).toBeInTheDocument()}},o={args:{title:"2. module by symbolic name",body:`
    <custom-element>
            <template>
                <module-url slice="lib-url" src="embed-lib"></module-url>
                <if test="//lib-url/@error">
                    <p>error: <b>{//lib-url/@error}</b></p>
                </if>
                check the link:
                <a href="{//lib-url}">
                    <custom-element src="embed-lib#embed-lib-component">
                        failed to load
                    </custom-element>
                </a>
            </template>
        </custom-element>
`},play:async({canvasElement:t})=>{import.meta.resolve("embed-lib");const e=s(t);await e.findByText(o.args.title),await a(await e.findByText("check the link:")).toBeInTheDocument(),await a(await e.findByText("👋 from embed-lib-component")).toBeInTheDocument()}},m={args:{title:"3. module by symbolic name with missing importmap entry",body:`
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
`},play:async({canvasElement:t})=>{const e=s(t);await e.findByText(m.args.title),await a(await e.findByText("error:")).toBeInTheDocument(),await a(await e.findByText("failed to load")).toBeInTheDocument()}},r={args:{title:"4. module path by symbolic name",body:`
    <custom-element>
        <template>
            <module-url slice="lib-url" src="lib-root/embed-lib.html#embed-relative-hash"></module-url>
            <module-url slice="img-url" src="lib-root/Smiley.svg"></module-url>
            <if test="//lib-url/@error">
                <p>error: <b>{//lib-url/@error}</b></p>
            </if>
            check the link:
            <a href="{//lib-url}"> lib-root/embed-lib.html#embed-relative-hash <img src="{//img-url}" alt=""/></a>
            <custom-element src="lib-root/embed-lib.html#embed-relative-hash">
                failed to load
            </custom-element>

        </template>
    </custom-element>
`},play:async({canvasElement:t})=>{const e=s(t);await e.findByText(r.args.title),await a(await e.findByText("👌 from embed-relative-hash invoking")).toBeInTheDocument(),await a(await e.findByText("lib-root/embed-lib.html#embed-relative-hash")).toBeInTheDocument(),await a(await e.findByText("#embed-lib-component")).toBeInTheDocument()}},n={args:{title:"5. module path by symbolic name to internal link within lib",body:`
    <custom-element>
        <template>
            <module-url slice="lib-url" src="lib-root/embed-lib.html#embed-relative-file"></module-url>
            <if test="//lib-url/@error">
                <p>error: <b>{//lib-url/@error}</b></p>
            </if>
            check the link:
            <a href="{//lib-url}"> lib-root/embed-lib.html#embed-relative-file </a>
            <custom-element src="lib-root/embed-lib.html#embed-relative-file">
                failed to load
            </custom-element>
        </template>
    </custom-element>
`},play:async({canvasElement:t})=>{const e=s(t);await e.findByText(n.args.title),await a(await e.findByText("lib-root/embed-lib.html#embed-relative-file")).toBeInTheDocument(),await a(await e.findByText("👍 from embed-relative-file invoking")).toBeInTheDocument(),await a(await e.findByText("../embed-1.html")).toBeInTheDocument(),await a(await e.findByText("embed-1.html")).toBeInTheDocument(),await a(await e.findByText("🖖")).toBeInTheDocument()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: '1. relative to page path',
    body: \`
    <custom-element>
        <a href="../../../demo/embed-1.html">
            <custom-element src="../../../demo/embed-1.html"></custom-element>
        </a>
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: '2. module by symbolic name',
    body: \`
    <custom-element>
            <template>
                <module-url slice="lib-url" src="embed-lib"></module-url>
                <if test="//lib-url/@error">
                    <p>error: <b>{//lib-url/@error}</b></p>
                </if>
                check the link:
                <a href="{//lib-url}">
                    <custom-element src="embed-lib#embed-lib-component">
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
    const p = import.meta.resolve('embed-lib');
    const canvas = within(canvasElement);
    await canvas.findByText(ModuleBySymbolicName.args!.title as string);
    await expect(await canvas.findByText('check the link:')).toBeInTheDocument();
    await expect(await canvas.findByText('👋 from embed-lib-component')).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: '4. module path by symbolic name',
    body: \`
    <custom-element>
        <template>
            <module-url slice="lib-url" src="lib-root/embed-lib.html#embed-relative-hash"></module-url>
            <module-url slice="img-url" src="lib-root/Smiley.svg"></module-url>
            <if test="//lib-url/@error">
                <p>error: <b>{//lib-url/@error}</b></p>
            </if>
            check the link:
            <a href="{//lib-url}"> lib-root/embed-lib.html#embed-relative-hash <img src="{//img-url}" alt=""/></a>
            <custom-element src="lib-root/embed-lib.html#embed-relative-hash">
                failed to load
            </custom-element>

        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(ModuleByName.args!.title as string);
    await expect(await canvas.findByText('👌 from embed-relative-hash invoking')).toBeInTheDocument();
    await expect(await canvas.findByText('lib-root/embed-lib.html#embed-relative-hash')).toBeInTheDocument();
    await expect(await canvas.findByText('#embed-lib-component')).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: '5. module path by symbolic name to internal link within lib',
    body: \`
    <custom-element>
        <template>
            <module-url slice="lib-url" src="lib-root/embed-lib.html#embed-relative-file"></module-url>
            <if test="//lib-url/@error">
                <p>error: <b>{//lib-url/@error}</b></p>
            </if>
            check the link:
            <a href="{//lib-url}"> lib-root/embed-lib.html#embed-relative-file </a>
            <custom-element src="lib-root/embed-lib.html#embed-relative-file">
                failed to load
            </custom-element>
        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(HashWithinLib.args!.title as string);
    await expect(await canvas.findByText('lib-root/embed-lib.html#embed-relative-file')).toBeInTheDocument();
    await expect(await canvas.findByText('👍 from embed-relative-file invoking')).toBeInTheDocument();
    await expect(await canvas.findByText('../embed-1.html')).toBeInTheDocument();
    await expect(await canvas.findByText('embed-1.html')).toBeInTheDocument();
    await expect(await canvas.findByText('🖖')).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const y=["RelativeToPagePath","ModuleBySymbolicName","MissingImportmapEntry","ModuleByName","HashWithinLib"];export{n as HashWithinLib,m as MissingImportmapEntry,r as ModuleByName,o as ModuleBySymbolicName,i as RelativeToPagePath,y as __namedExportsOrder,f as default};
