import{w as u,e as n}from"./index-CDavW7r9.js";import"./custom-element-BLZZ00dz.js";const g={title:"",tag:"",style:"",slot:"",payload:""};function p(t){const{title:e,tag:o,style:s,slot:l,payload:y}={...g,...t};return`
        <fieldset>
            <legend>${e}</legend>
            <custom-element ${o?`tag="${o}"`:""} >
                <template>
                    <style>
                        ${s}
                    </style>
                    <u><slot>${l}</slot></u>
                </template>
            </custom-element>
            ${y}
        </fieldset>
  `}const h={title:"Css",render:p},d='<b style="color:green">green</b>',i='<i style="color:red">red</i>',a={args:{title:`The default color should stay on this label, the message inside should be ${d}`,style:"color:green",slot:"text has to be green",payload:"<u>no tags</u>"},play:async({canvasElement:t})=>{const o=await u(t).findByText("text has to be green"),l=getComputedStyle(o).getPropertyValue("color");n(l).to.equal("rgb(0, 128, 0)")}},c={args:{title:`The default color should apply ${d} in all instances`,style:"color:green",slot:"text has to be green",tag:"dce-2",payload:'<u>2 instances:</u> <dce-2 id="dce21"></dce-2> * <dce-2 id="dce22"></dce-2>'},play:async({canvasElement:t})=>{await u(t).findByText("2 instances:");const e=o=>{const s=t.querySelector(o);return getComputedStyle(s).getPropertyValue("color")};n(e("legend")).to.not.equal(e("b")),n(e("legend")).to.not.equal(e("b")),n(e("#dce21 u")).to.equal(e("b")),n(e("#dce22 u")).to.equal(e("b"))}},r={args:{title:`${d} in instance style can be overridden in payload as ${i} in 1st instance`,style:"color:green",slot:"is green",tag:"dce-3",payload:`  <u>should be</u> ${i}:<dce-3 id="dce32">
                        <template>
                            <style> color:red; </style>
                            <u>red</u>
                        </template>
                    </dce-3> <br/>
                     should be ${d}: <dce-3 id="dce31">green</dce-3>   `},play:async({canvasElement:t})=>{await u(t).findByText("should be");const e=o=>{const s=t.querySelector(o);return getComputedStyle(s).getPropertyValue("color")};n(e("legend")).to.not.equal(e("b")),n(e("#dce31 u")).to.equal(e("b")),n(e("#dce32 u")).to.equal(e("i"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: \`\${GREEN} in instance style can be overridden in payload as \${RED} in 1st instance\`,
    style: \`color:green\`,
    slot: 'is green',
    tag: 'dce-3',
    payload: \`  <u>should be</u> \${RED}:<dce-3 id="dce32">
                        <template>
                            <style> color:red; </style>
                            <u>red</u>
                        </template>
                    </dce-3> <br/>
                     should be \${GREEN}: <dce-3 id="dce31">green</dce-3>   \`
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
}`,...r.parameters?.docs?.source}}};const x=["StyleDoesNotLeak","StyleIn2Instances","OverrideInPayload"];export{r as OverrideInPayload,a as StyleDoesNotLeak,c as StyleIn2Instances,x as __namedExportsOrder,h as default};
