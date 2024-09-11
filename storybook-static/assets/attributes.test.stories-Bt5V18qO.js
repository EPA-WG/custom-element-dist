import{w as o,e}from"./custom-element-D8hcDZHh.js";import"./index-C8k3Z-3Y.js";function s(i){return new Promise(a=>setTimeout(a,i))}function r(i){const{title:a,body:t}=i;return`
        <fieldset>
            <legend>${a}</legend>
            ${t}
        </fieldset>
  `}const b={title:"attributes",render:r},d={args:{title:"Attributes definition",body:`
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
`},play:async({canvasElement:i})=>{d.args.title;const a=o(i);e(await await a.findByTestId("p1")).toHaveTextContent("default_P1"),e(await await a.findByTestId("p2")).toHaveTextContent("always_p2"),e(await await a.findByTestId("p3")).toHaveTextContent("def_P3")}},n={args:{title:"Attributes runtime change",body:`
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
`},play:async({canvasElement:i})=>{d.args.title;const a=o(i),t=async p=>(await a.findByTestId(p)).textContent.trim();await s(20),e(await t("p1")).toEqual("123"),e(await t("p2")).toEqual("always_p2","no overrides due to value is hardcoded"),e(await t("p3")).toEqual("def_P3"),dce2.setAttribute("p1",i1.value),await s(10),e(await t("p1")).toEqual("p1","set p1 in runtime"),dce2.setAttribute("p2",i2.value),await s(10),e(await t("p2")).toEqual("always_p2","can not set p2 in runtime"),dce2.setAttribute("p3",i3.value),await s(10),e(await t("p3")).toEqual("p3","set p3 in runtime")}},c={args:{title:"Instance Attributes",body:`
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
`},play:async({canvasElement:i})=>{d.args.title;const a=o(i),t=async p=>(await a.findByTestId(p)).textContent.trim();await s(20),e(await t("p1")).toEqual("123"),e(await t("p2")).toEqual("always_p2"),e(await t("p3")).toEqual("qwe")}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    expect(await await canvas.findByTestId('p1')).toHaveTextContent('default_P1');
    expect(await await canvas.findByTestId('p2')).toHaveTextContent('always_p2');
    expect(await await canvas.findByTestId('p3')).toHaveTextContent('def_P3');
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const m=["AttributeDefaults","AttributesRuntimeChange","InstanceAttributes"];export{d as AttributeDefaults,n as AttributesRuntimeChange,c as InstanceAttributes,m as __namedExportsOrder,b as default};
