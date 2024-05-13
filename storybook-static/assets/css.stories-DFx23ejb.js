import{w as u,e as n}from"./index-BASH1HpE.js";import"./custom-element--HC2GPP6.js";const S={title:"",tag:"",style:"",slot:"",payload:""};function f(t){const{title:e,tag:o,style:s,slot:l,payload:$}={...S,...t};return`
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
            ${$}
        </fieldset>
  `}const T={title:"Css",render:f},d='<b style="color:green">green</b>',i='<i style="color:red">red</i>',a={args:{title:`The default color should stay on this label, the message inside should be ${d}`,style:"color:green",slot:"text has to be green",payload:"<u>no tags</u>"},play:async({canvasElement:t})=>{const o=await u(t).findByText("text has to be green"),l=getComputedStyle(o).getPropertyValue("color");n(l).to.equal("rgb(0, 128, 0)")}},c={args:{title:`The default color should apply ${d} in all instances`,style:"color:green",slot:"text has to be green",tag:"dce-2",payload:'<u>2 instances:</u> <dce-2 id="dce21"></dce-2> * <dce-2 id="dce22"></dce-2>'},play:async({canvasElement:t})=>{await u(t).findByText("2 instances:");const e=o=>{const s=t.querySelector(o);return getComputedStyle(s).getPropertyValue("color")};n(e("legend")).to.not.equal(e("b")),n(e("legend")).to.not.equal(e("b")),n(e("#dce21 u")).to.equal(e("b")),n(e("#dce22 u")).to.equal(e("b"))}},r={args:{title:`${d} in instance style can be overridden in payload as ${i} in 1st instance`,style:"color:green",slot:"is green",tag:"dce-3",payload:`  <u>should be</u> ${i}:<dce-3 id="dce32">
                        <template>
                            <style> color:red; </style>
                            <u>red</u>
                        </template>
                    </dce-3> <br/>
                     should be ${d}: <dce-3 id="dce31">green</dce-3>   `},play:async({canvasElement:t})=>{await u(t).findByText("should be");const e=o=>{const s=t.querySelector(o);return getComputedStyle(s).getPropertyValue("color")};n(e("legend")).to.not.equal(e("b")),n(e("#dce31 u")).to.equal(e("b")),n(e("#dce32 u")).to.equal(e("i"))}};var y,g,p;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,b,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,q,E;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(q=r.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const P=["StyleDoesNotLeak","StyleIn2Instances","OverrideInPayload"];export{r as OverrideInPayload,a as StyleDoesNotLeak,c as StyleIn2Instances,P as __namedExportsOrder,T as default};
