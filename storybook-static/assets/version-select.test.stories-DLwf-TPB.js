import{w as c,e as a}from"./custom-element-DpIq8E2p.js";import"./http-request-DNq59pnj.js";import"./index-CVRyq5ci.js";function i(e){return new Promise(t=>setTimeout(t,e))}function l(e){const{title:t,body:s}=e;return`
        <fieldset>
            <legend>${t}</legend>
            ${s}
        </fieldset>
  `}const d={title:"site/VersionSelect",render:l},o={args:{title:"Versions of custom-element",body:`
    <p>Select the version of custom-element StoryBook.</p>
    <custom-element >
        <template>
            <http-request 
                url="https://registry.npmjs.org/@epa-wg/custom-element-dist" 
                method="GET" 
                header-accept="application/json"
                slice="page" ></http-request>
            <xhtml:select>
                <for-each select="//versions/*">
                    <option>
                        {./@version} 
                    </option>
                </for-each>
            </xhtml:select>
        </template>
    </custom-element>
    <dce-link id="dce1"></dce-link>
`},play:async({canvasElement:e})=>{o.args.title;const t=c(e),s=async n=>(await t.findByTestId(n)).textContent.trim();await i(20),a(await s("p1")).toEqual("default_P1"),a(await s("p2")).toEqual("always_p2"),a(await s("p3")).toEqual("def_P3")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Versions of custom-element',
    body: \`
    <p>Select the version of custom-element StoryBook.</p>
    <custom-element >
        <template>
            <http-request 
                url="https://registry.npmjs.org/@epa-wg/custom-element-dist" 
                method="GET" 
                header-accept="application/json"
                slice="page" ></http-request>
            <xhtml:select>
                <for-each select="//versions/*">
                    <option>
                        {./@version} 
                    </option>
                </for-each>
            </xhtml:select>
        </template>
    </custom-element>
    <dce-link id="dce1"></dce-link>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = (VersionsSelect.args!.title as string);
    const canvas = within(canvasElement),
      code = async id => (await canvas.findByTestId(id)).textContent.trim();
    await sleep(20);
    expect(await code('p1')).toEqual('default_P1');
    expect(await code('p2')).toEqual('always_p2');
    expect(await code('p3')).toEqual('def_P3');
  }
}`,...o.parameters?.docs?.source}}};const u=["VersionsSelect"];export{o as VersionsSelect,u as __namedExportsOrder,d as default};
