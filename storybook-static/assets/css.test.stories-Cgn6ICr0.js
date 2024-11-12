import{w as i,e as t}from"./index-CxRwF5Or.js";import"./custom-element-D59Fok1f.js";const g={title:"",tag:"",style:"",slot:"",payload:""};function p(n){const{title:e,tag:o,style:s,slot:a,payload:l}={...g,...n};return`
        <fieldset>
            <legend>${e}</legend>
            <custom-element ${o?`tag="${o}"`:""} >
                <template>
                    <style>
                        ${s}
                    </style>
                    <u><slot>${a}</slot></u>
                </template>
            </custom-element>
            ${l}
        </fieldset>
  `}const b={title:"Css",render:p},u='<b style="color:green">green</b>',y='<i style="color:red">red</i>',c={args:{title:`The default color should stay on this label, the message inside should be ${u}`,style:"color:green",slot:"text has to be green",payload:"<u>no tags</u>"},play:async({canvasElement:n})=>{const o=await i(n).findByText("text has to be green"),a=getComputedStyle(o).getPropertyValue("color");t(a).to.equal("rgb(0, 128, 0)"),await t(o.closest("custom-element")).toBeInTheDocument();const l=o.closest("custom-element");await t(l.xsltString).toContain("<xsl:stylesheet"),await t(l.dce.localName).toEqual("custom-element"),await t(l.dce.xsltString).toEqual(l.xsltString),await t(l.dce.xslt.documentElement.tagName).toEqual("xsl:stylesheet")}},r={args:{title:`The default color should apply ${u} in all instances`,style:"color:green",slot:"text has to be green",tag:"dce-2",payload:'<u>2 instances:</u> <dce-2 id="dce21"></dce-2> * <dce-2 id="dce22"></dce-2>'},play:async({canvasElement:n})=>{await i(n).findByText("2 instances:");const e=o=>{const s=n.querySelector(o);return getComputedStyle(s).getPropertyValue("color")};t(e("legend")).to.not.equal(e("b")),t(e("legend")).to.not.equal(e("b")),t(e("#dce21 u")).to.equal(e("b")),t(e("#dce22 u")).to.equal(e("b"))}},d={args:{title:`${u} in instance style can be overridden in payload as ${y} in 1st instance`,style:"color:green",slot:"is green",tag:"dce-3",payload:`<u>should be</u> ${y}:
                <dce-3 id="dce32">
                    <template>
                        <style> color:red; </style>
                        <u>red</u>
                    </template>
                </dce-3> <br/>
                should be ${u}: 
                <dce-3 id="dce31">green</dce-3>   `},play:async({canvasElement:n})=>{await i(n).findByText("should be");const e=o=>{const s=n.querySelector(o);return getComputedStyle(s).getPropertyValue("color")};t(e("legend")).to.not.equal(e("b")),t(e("#dce31 u")).to.equal(e("b")),t(e("#dce32 u")).to.equal(e("i"))}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: \`The default color should stay on this label, the message inside should be \${GREEN}\`,
    style: \`color:green\`,
    slot: 'text has to be green',
    payload: '<u>no tags</u>'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = await canvas.findByText('text has to be green');
    const st = getComputedStyle(el);
    const color = st.getPropertyValue('color');
    // @ts-ignore
    expect(color).to.equal('rgb(0, 128, 0)');
    await expect(el.closest('custom-element')).toBeInTheDocument();
    const dce = el.closest('custom-element');
    await expect(dce.xsltString).toContain('<xsl:stylesheet');
    await expect(dce.dce.localName).toEqual('custom-element');
    await expect(dce.dce.xsltString).toEqual(dce.xsltString);
    await expect(dce.dce.xslt.documentElement.tagName).toEqual('xsl:stylesheet');
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: \`The default color should apply \${GREEN} in all instances\`,
    style: \`color:green\`,
    slot: 'text has to be green',
    tag: 'dce-2',
    payload: \`<u>2 instances:</u> <dce-2 id="dce21"></dce-2> * <dce-2 id="dce22"></dce-2>\`
  },
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByText('2 instances:');
    const color = (css: string) => {
      const el = canvasElement.querySelector(css);
      const st = getComputedStyle(el!);
      return st.getPropertyValue('color');
    };
    expect(color('legend')).to.not.equal(color('b'));
    expect(color('legend')).to.not.equal(color('b'));
    expect(color('#dce21 u')).to.equal(color('b'));
    expect(color('#dce22 u')).to.equal(color('b'));
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: \`\${GREEN} in instance style can be overridden in payload as \${RED} in 1st instance\`,
    style: \`color:green\`,
    slot: 'is green',
    tag: 'dce-3',
    payload: \`<u>should be</u> \${RED}:
                <dce-3 id="dce32">
                    <template>
                        <style> color:red; </style>
                        <u>red</u>
                    </template>
                </dce-3> <br/>
                should be \${GREEN}: 
                <dce-3 id="dce31">green</dce-3>   \`
  },
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByText('should be');
    const color = (css: string) => {
      const el = canvasElement.querySelector(css);
      const st = getComputedStyle(el!);
      return st.getPropertyValue('color');
    };
    expect(color('legend')).to.not.equal(color('b'));
    expect(color('#dce31 u')).to.equal(color('b'));
    expect(color('#dce32 u')).to.equal(color('i'));
  }
}`,...d.parameters?.docs?.source}}};const h=["StyleDoesNotLeak","StyleIn2Instances","OverrideInPayload"];export{d as OverrideInPayload,c as StyleDoesNotLeak,r as StyleIn2Instances,h as __namedExportsOrder,b as default};
