import{w as o,e}from"./index-BASH1HpE.js";import"./custom-element--HC2GPP6.js";function d(a){return new Promise(n=>setTimeout(n,a))}function f(a){const{title:n,body:t}=a;return`
        <fieldset>
            <legend>${n}</legend>
            ${t}
        </fieldset>
  `}const k={title:"attributes",render:f},i={args:{title:"Attributes definition",body:`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also is used by IDE and validation.</p>
    <custom-element tag="dce-link" >
        <template>
            <attribute name="p1">default_P1                </attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="p1">{$p1}</code> <br/> 
            p2: <code data-testid="p2">{$p2}</code> <br/> 
            p3: <code data-testid="p3">{$p3}</code>
        </template>
    </custom-element>
    <dce-link id="dce1"></dce-link>
`},play:async({canvasElement:a})=>{i.args.title;const n=o(a),t=async s=>(await n.findByTestId(s)).textContent.trim();await d(20),e(await t("p1")).toEqual("default_P1"),e(await t("p2")).toEqual("always_p2"),e(await t("p3")).toEqual("def_P3")}},c={args:{title:"Attributes runtime change",body:`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also be used by IDE and validation.</p>
    <custom-element tag="dce-link2" >
        <template>
            <attribute name="p1">default_P1                </attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="p1">{$p1}</code> <br/> 
            p2: <code data-testid="p2">{$p2}</code> <br/> 
            p3: <code data-testid="p3">{$p3}</code>
        </template>
    </custom-element>
    <section>
        <dce-link2   id="dce2" p1="123" p2="override ignored as select is defined"></dce-link2> <br>
        <div><input id="i1" value="p1">  <button onclick="dce2.setAttribute('p1',i1.value)"> set p1</button> </div>
        <div><input id="i2" value="p2">  <button onclick="dce2.setAttribute('p2',i2.value)"> set p2</button> </div>
        <div><input id="i3" value="p3">  <button onclick="dce2.setAttribute('p3',i3.value)"> set p3</button> </div>
    </section>
`},play:async({canvasElement:a})=>{i.args.title;const n=o(a),t=async s=>(await n.findByTestId(s)).textContent.trim();await d(20),e(await t("p1")).toEqual("123"),e(await t("p2")).toEqual("always_p2","no overrides due to value is hardcoded"),e(await t("p3")).toEqual("def_P3"),dce2.setAttribute("p1",i1.value),await d(10),e(await t("p1")).toEqual("p1","set p1 in runtime"),dce2.setAttribute("p2",i2.value),await d(10),e(await t("p2")).toEqual("always_p2","can not set p2 in runtime"),dce2.setAttribute("p3",i3.value),await d(10),e(await t("p3")).toEqual("p3","set p3 in runtime")}},p={args:{title:"Instance Attributes",body:`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also is used by IDE and validation.</p>
    <custom-element tag="dce-link3" >
        <template>
            <attribute name="p1">default_P1                </attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="p1">{$p1}</code> <br/> 
            p2: <code data-testid="p2">{$p2}</code> <br/> 
            p3: <code data-testid="p3">{$p3}</code>
        </template>
    </custom-element>
    <dce-link3 id="dce3" p1="123" p3="qwe"></dce-link3> |
`},play:async({canvasElement:a})=>{i.args.title;const n=o(a),t=async s=>(await n.findByTestId(s)).textContent.trim();await d(20),e(await t("p1")).toEqual("123"),e(await t("p2")).toEqual("always_p2"),e(await t("p3")).toEqual("qwe")}};var r,u,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'Attributes definition',
    body: \`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also is used by IDE and validation.</p>
    <custom-element tag="dce-link" >
        <template>
            <attribute name="p1">default_P1                </attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="p1">{$p1}</code> <br/> 
            p2: <code data-testid="p2">{$p2}</code> <br/> 
            p3: <code data-testid="p3">{$p3}</code>
        </template>
    </custom-element>
    <dce-link id="dce1"></dce-link>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = (AttributeDefaults.args!.title as string);
    const canvas = within(canvasElement),
      code = async id => (await canvas.findByTestId(id)).textContent.trim();
    await sleep(20);
    expect(await code('p1')).toEqual('default_P1');
    expect(await code('p2')).toEqual('always_p2');
    expect(await code('p3')).toEqual('def_P3');
  }
}`,...(l=(u=i.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var b,m,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Attributes runtime change',
    body: \`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also be used by IDE and validation.</p>
    <custom-element tag="dce-link2" >
        <template>
            <attribute name="p1">default_P1                </attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="p1">{$p1}</code> <br/> 
            p2: <code data-testid="p2">{$p2}</code> <br/> 
            p3: <code data-testid="p3">{$p3}</code>
        </template>
    </custom-element>
    <section>
        <dce-link2   id="dce2" p1="123" p2="override ignored as select is defined"></dce-link2> <br>
        <div><input id="i1" value="p1">  <button onclick="dce2.setAttribute('p1',i1.value)"> set p1</button> </div>
        <div><input id="i2" value="p2">  <button onclick="dce2.setAttribute('p2',i2.value)"> set p2</button> </div>
        <div><input id="i3" value="p3">  <button onclick="dce2.setAttribute('p3',i3.value)"> set p3</button> </div>
    </section>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = (AttributeDefaults.args!.title as string);
    const canvas = within(canvasElement),
      code = async id => (await canvas.findByTestId(id)).textContent.trim();
    await sleep(20);
    expect(await code('p1')).toEqual('123');
    expect(await code('p2')).toEqual('always_p2', 'no overrides due to value is hardcoded');
    expect(await code('p3')).toEqual('def_P3');
    dce2.setAttribute('p1', i1.value);
    await sleep(10);
    expect(await code('p1')).toEqual('p1', 'set p1 in runtime');
    dce2.setAttribute('p2', i2.value);
    await sleep(10);
    expect(await code('p2')).toEqual('always_p2', 'can not set p2 in runtime');
    dce2.setAttribute('p3', i3.value);
    await sleep(10);
    expect(await code('p3')).toEqual('p3', 'set p3 in runtime');
  }
}`,...(w=(m=c.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var v,y,E;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Instance Attributes',
    body: \`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also is used by IDE and validation.</p>
    <custom-element tag="dce-link3" >
        <template>
            <attribute name="p1">default_P1                </attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="p1">{$p1}</code> <br/> 
            p2: <code data-testid="p2">{$p2}</code> <br/> 
            p3: <code data-testid="p3">{$p3}</code>
        </template>
    </custom-element>
    <dce-link3 id="dce3" p1="123" p3="qwe"></dce-link3> |
\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = (AttributeDefaults.args!.title as string);
    const canvas = within(canvasElement),
      code = async id => (await canvas.findByTestId(id)).textContent.trim();
    await sleep(20);
    expect(await code('p1')).toEqual('123');
    expect(await code('p2')).toEqual('always_p2');
    expect(await code('p3')).toEqual('qwe');
  }
}`,...(E=(y=p.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const q=["AttributeDefaults","AttributesRuntimeChange","InstanceAttributes"];export{i as AttributeDefaults,c as AttributesRuntimeChange,p as InstanceAttributes,q as __namedExportsOrder,k as default};
