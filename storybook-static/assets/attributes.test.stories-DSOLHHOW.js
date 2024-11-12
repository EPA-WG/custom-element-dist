import{w as o,e}from"./index-CxRwF5Or.js";import"./custom-element-D59Fok1f.js";function p(i){return new Promise(t=>setTimeout(t,i))}function u(i){const{title:t,body:a}=i;return`
        <fieldset>
            <legend>${t}</legend>
            ${a}
        </fieldset>
  `}const m={title:"attributes",render:u},n={args:{title:"Attributes definition",body:`
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
`},play:async({canvasElement:i})=>{n.args.title;const t=o(i);e(await await t.findByTestId("p1")).toHaveTextContent("default_P1"),e(await await t.findByTestId("p2")).toHaveTextContent("always_p2"),e(await await t.findByTestId("p3")).toHaveTextContent("def_P3")}},s={args:{title:"Attributes runtime change",body:`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also be used by IDE and validation.</p>
    <custom-element tag="dce-link2" >
        <template>
            <attribute name="p1">default_P1                </attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="t1">{$p1}</code> <br/>
            p2: <code data-testid="t2">{$p2}</code> <br/>
            p3: <code data-testid="t3">{$p3}</code>
        </template>
    </custom-element>
    <section>
        <dce-link2  id="dce2" p1="123" p2="override ignored as select is defined"></dce-link2> <br>
        <div><input id="i1" value="P1">  <button onclick="dce2.setAttribute('p1',i1.value)"> set p1</button> </div>
        <div><input id="i2" value="P2">  <button onclick="dce2.setAttribute('p2',i2.value)"> set p2</button> </div>
        <div><input id="i3" value="P3">  <button onclick="dce2.setAttribute('p3',i3.value)"> set p3</button> </div>
    </section>
`},play:async({canvasElement:i})=>{const t=o(i),a=async r=>await t.findByTestId(r);await p(20),e(await a("t1")).toHaveTextContent("123"),e(await a("t2")).toHaveTextContent("always_p2"),e(await a("t3")).toHaveTextContent("def_P3");const d=window.dce2;d.setAttribute("P1",i1.value),await e(await t.findByText("P1")).toBeInTheDocument(),e(await a("t1")).toHaveTextContent("P1"),d.setAttribute("p2",i2.value),e(t.getByTestId("t2")).toHaveTextContent("always_p2"),d.setAttribute("p3",i3.value),await e(await t.findByText("P3")).toBeInTheDocument(),e(t.getByTestId("t3")).toHaveTextContent("P3")}},c={args:{title:"Instance Attributes",body:`
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
`},play:async({canvasElement:i})=>{n.args.title;const t=o(i),a=async d=>(await t.findByTestId(d)).textContent.trim();await p(20),e(await a("p1")).toEqual("123"),e(await a("p2")).toEqual("always_p2"),e(await a("p3")).toEqual("qwe")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    const titleText = AttributeDefaults.args!.title as string;
    const canvas = within(canvasElement),
      code = async id => (await canvas.findByTestId(id)).textContent.trim();
    expect(await await canvas.findByTestId('p1')).toHaveTextContent('default_P1');
    expect(await await canvas.findByTestId('p2')).toHaveTextContent('always_p2');
    expect(await await canvas.findByTestId('p3')).toHaveTextContent('def_P3');
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Attributes runtime change',
    body: \`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also be used by IDE and validation.</p>
    <custom-element tag="dce-link2" >
        <template>
            <attribute name="p1">default_P1                </attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="t1">{$p1}</code> <br/>
            p2: <code data-testid="t2">{$p2}</code> <br/>
            p3: <code data-testid="t3">{$p3}</code>
        </template>
    </custom-element>
    <section>
        <dce-link2  id="dce2" p1="123" p2="override ignored as select is defined"></dce-link2> <br>
        <div><input id="i1" value="P1">  <button onclick="dce2.setAttribute('p1',i1.value)"> set p1</button> </div>
        <div><input id="i2" value="P2">  <button onclick="dce2.setAttribute('p2',i2.value)"> set p2</button> </div>
        <div><input id="i3" value="P3">  <button onclick="dce2.setAttribute('p3',i3.value)"> set p3</button> </div>
    </section>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement),
      code = async (id: string) => await canvas.findByTestId(id);
    await sleep(20);
    expect(await code('t1')).toHaveTextContent('123');
    expect(await code('t2')).toHaveTextContent('always_p2'); // no overrides due to value is hardcoded
    expect(await code('t3')).toHaveTextContent('def_P3');
    const dce2 = window.dce2;
    dce2.setAttribute('P1', i1.value);
    await expect(await canvas.findByText('P1')).toBeInTheDocument();
    expect(await code('t1')).toHaveTextContent('P1'); // 4. set p1 in runtime'

    dce2.setAttribute('p2', i2.value);
    // await expect(await canvas.findByText('P2')).toBeInTheDocument();
    expect(canvas.getByTestId('t2')).toHaveTextContent('always_p2'); // can not set p2 in runtime

    dce2.setAttribute('p3', i3.value);
    await expect(await canvas.findByText('P3')).toBeInTheDocument();
    expect(canvas.getByTestId('t3')).toHaveTextContent('P3'); // set p3 in runtime
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    const titleText = AttributeDefaults.args!.title as string;
    const canvas = within(canvasElement),
      code = async id => (await canvas.findByTestId(id)).textContent.trim();
    await sleep(20);
    expect(await code('p1')).toEqual('123');
    expect(await code('p2')).toEqual('always_p2');
    expect(await code('p3')).toEqual('qwe');
  }
}`,...c.parameters?.docs?.source}}};const v=["AttributeDefaults","AttributesRuntimeChange","InstanceAttributes"];export{n as AttributeDefaults,s as AttributesRuntimeChange,c as InstanceAttributes,v as __namedExportsOrder,m as default};
