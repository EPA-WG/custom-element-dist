import{w as c,e as t,u as v}from"./index-CxRwF5Or.js";import{m as y,c as x}from"./custom-element-uuAtIYWS.js";function w(i){return new Promise(a=>setTimeout(a,i))}function f(i){const{title:a,body:e}=i;return`
        <fieldset>
            <legend>${a}</legend>
            ${e}
        </fieldset>
  `}const T={title:"attributes",render:f},r={args:{title:"cloneAs(el,newTag)",body:`
    <p><code>cloneAs()</code> used for conversion of <code>attribute</code> to <code>xsl:param</code></p>
    <attribute data-testid="t1" >default_P1                </attribute>
    <attribute data-testid="t2" select="'always_p2'"      ></attribute>
    <attribute data-testid="t3" ></attribute>
`},play:async({canvasElement:i})=>{const a=c(i),e=async s=>{const o=await a.findByTestId(s),n=x(o,"xsl:param");for(let p of o.attributes)await t(p.value).toEqual(n.getAttribute(p.name));await t(n.textContent).toEqual(o.textContent)};await e("t1"),await e("t2"),await e("t3")}},u={args:{title:"mix(to,from)",body:`
    <p><code>mix(to,from)</code> used for <code>attribute</code> collections</p>
`},play:async()=>{await t(y({},{a:1,b:"2"})).toEqual({a:1,b:"2"})}},d={args:{title:"Attributes definition",body:`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also is used by IDE and validation.</p>
    <custom-element tag="dce-link" >
        <template>
            <attribute name="p1">default_P1</attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="p1">{$p1}</code> <br/>
            p2: <code data-testid="p2">{$p2}</code> <br/>
            p3: <code data-testid="p3">{$p3}</code>
        </template>
    </custom-element>
    <dce-link id="dce1"></dce-link>
`},play:async({canvasElement:i})=>{d.args.title;const a=c(i);t(await await a.findByTestId("p1")).toHaveTextContent("default_P1"),t(await await a.findByTestId("p2")).toHaveTextContent("always_p2"),t(await await a.findByTestId("p3")).toHaveTextContent("def_P3")}},l={args:{title:"Attributes runtime change",body:`
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
`},play:async({canvasElement:i})=>{const a=c(i),e=async o=>await a.findByTestId(o);await w(20),t(await e("t1")).toHaveTextContent("123"),t(await e("t2")).toHaveTextContent("always_p2"),t(await e("t3")).toHaveTextContent("def_P3");const s=window.dce2;s.setAttribute("P1",i1.value),await t(await a.findByText("P1")).toBeInTheDocument(),t(await e("t1")).toHaveTextContent("P1"),s.setAttribute("p2",i2.value),t(a.getByTestId("t2")).toHaveTextContent("always_p2"),s.setAttribute("p3",i3.value),await t(await a.findByText("P3")).toBeInTheDocument(),t(a.getByTestId("t3")).toHaveTextContent("P3")}},b={args:{title:"Instance Attributes",body:`
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
`},play:async({canvasElement:i})=>{d.args.title;const a=c(i),e=async s=>(await a.findByTestId(s)).textContent.trim();await w(20),t(await e("p1")).toEqual("123"),t(await e("p2")).toEqual("always_p2"),t(await e("p3")).toEqual("qwe")}},m={args:{title:"Instance Attributes",body:`
    <p>Attributes with value(p2) or <code>select</code>(p3) should be propagated to DCE</p>
    <p>p1 attribute is not propagated as does not have the value.</p>
    <custom-element tag="sample-el">
    <template>
        <attribute name="data-testid"></attribute>
        <attribute name="p1"></attribute>
        <attribute name="p2">DEFAULT VALUE</attribute>
        <attribute name="p3" select=" //from-input ?? 'abc' "></attribute>
        <input slice="from-input" slice-event="input"/><br/>
        p1:<code data-testid="{$data-testid}-p1" >{ $p1 }</code><br/>
        p2:<code data-testid="{$data-testid}-p2" >{ $p2 }</code><br/>
        p2:<code data-testid="{$data-testid}-p3" >{ $p3 }</code><br/>  
        //from-input: {//from-input}      <hr/>
    </template>
</custom-element>

<sample-el data-testid="t1" value="123"                 ></sample-el>
<sample-el data-testid="t2" p1="P1" p2="123" p3="P3"    ></sample-el>
<sample-el data-testid="t3"                             ></sample-el>
`},play:async({canvasElement:i})=>{const a=c(i),e=async p=>(await a.findByTestId(p)).textContent?.trim();await w(20),await t(await e("t1-p1")).toEqual(""),await t(await e("t1-p2")).toEqual("DEFAULT VALUE"),await t(await e("t1-p3")).toEqual("abc");const s=await a.findByTestId("t1");await t(s).toHaveAttribute("value","123"),await t(s).toHaveAttribute("p2","DEFAULT VALUE"),await t(s).toHaveAttribute("p3","abc"),await t(s).not.toHaveAttribute("p1"),await t(await e("t2-p1")).toEqual("P1"),await t(await e("t2-p2")).toEqual("123"),await t(await e("t2-p3")).toEqual("abc");const o=await a.findByTestId("t2");await t(o).toHaveAttribute("p1","P1"),await t(o).toHaveAttribute("p2","123"),await t(o).toHaveAttribute("p3","abc"),await t(await e("t3-p1")).toEqual(""),await t(await e("t3-p2")).toEqual("DEFAULT VALUE"),await t(await e("t3-p3")).toEqual("abc");const n=await a.findByTestId("t3");await t(s).not.toHaveAttribute("p1"),await t(n).toHaveAttribute("p2","DEFAULT VALUE"),await t(n).toHaveAttribute("p3","abc"),n.querySelector("input")?.focus(),await v.keyboard("DCE"),await t(n).toHaveAttribute("p3","DCE")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'cloneAs(el,newTag)',
    body: \`
    <p><code>cloneAs()</code> used for conversion of <code>attribute</code> to <code>xsl:param</code></p>
    <attribute data-testid="t1" >default_P1                </attribute>
    <attribute data-testid="t2" select="'always_p2'"      ></attribute>
    <attribute data-testid="t3" ></attribute>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const cmp = async (tid: string) => {
      const t1 = await canvas.findByTestId(tid);
      const c1 = cloneAs(t1, 'xsl:param');
      for (let a of t1.attributes) {
        await expect(a.value).toEqual(c1.getAttribute(a.name));
      }
      await expect(c1.textContent).toEqual(t1.textContent);
    };
    await cmp('t1');
    await cmp('t2');
    await cmp('t3');
  }
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'mix(to,from)',
    body: \`
    <p><code>mix(to,from)</code> used for <code>attribute</code> collections</p>
\`
  },
  play: async () => {
    await expect(mix({}, {
      a: 1,
      b: '2'
    })).toEqual({
      a: 1,
      b: '2'
    });
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Attributes definition',
    body: \`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also is used by IDE and validation.</p>
    <custom-element tag="dce-link" >
        <template>
            <attribute name="p1">default_P1</attribute>
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Instance Attributes',
    body: \`
    <p>Attributes with value(p2) or <code>select</code>(p3) should be propagated to DCE</p>
    <p>p1 attribute is not propagated as does not have the value.</p>
    <custom-element tag="sample-el">
    <template>
        <attribute name="data-testid"></attribute>
        <attribute name="p1"></attribute>
        <attribute name="p2">DEFAULT VALUE</attribute>
        <attribute name="p3" select=" //from-input ?? 'abc' "></attribute>
        <input slice="from-input" slice-event="input"/><br/>
        p1:<code data-testid="{$data-testid}-p1" >{ $p1 }</code><br/>
        p2:<code data-testid="{$data-testid}-p2" >{ $p2 }</code><br/>
        p2:<code data-testid="{$data-testid}-p3" >{ $p3 }</code><br/>  
        //from-input: {//from-input}      <hr/>
    </template>
</custom-element>

<sample-el data-testid="t1" value="123"                 ></sample-el>
<sample-el data-testid="t2" p1="P1" p2="123" p3="P3"    ></sample-el>
<sample-el data-testid="t3"                             ></sample-el>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement),
      code = async (id: string) => (await canvas.findByTestId(id)).textContent?.trim();
    await sleep(20);
    await expect(await code('t1-p1')).toEqual('');
    await expect(await code('t1-p2')).toEqual('DEFAULT VALUE');
    await expect(await code('t1-p3')).toEqual('abc');
    const t1 = await canvas.findByTestId('t1');
    await expect(t1).toHaveAttribute('value', '123');
    await expect(t1).toHaveAttribute('p2', 'DEFAULT VALUE');
    await expect(t1).toHaveAttribute('p3', 'abc');
    await expect(t1).not.toHaveAttribute('p1');
    await expect(await code('t2-p1')).toEqual('P1');
    await expect(await code('t2-p2')).toEqual('123');
    await expect(await code('t2-p3')).toEqual('abc');
    const t2 = await canvas.findByTestId('t2');
    await expect(t2).toHaveAttribute('p1', 'P1');
    await expect(t2).toHaveAttribute('p2', '123');
    await expect(t2).toHaveAttribute('p3', 'abc');
    await expect(await code('t3-p1')).toEqual('');
    await expect(await code('t3-p2')).toEqual('DEFAULT VALUE');
    await expect(await code('t3-p3')).toEqual('abc');
    const t3 = await canvas.findByTestId('t3');
    await expect(t1).not.toHaveAttribute('p1');
    await expect(t3).toHaveAttribute('p2', 'DEFAULT VALUE');
    await expect(t3).toHaveAttribute('p3', 'abc');
    t3.querySelector('input')?.focus();
    await userEvent.keyboard('DCE');
    await expect(t3).toHaveAttribute('p3', 'DCE');
  }
}`,...m.parameters?.docs?.source}}};const g=["CloneAs","Mix","AttributeDefaults","AttributesRuntimeChange","InstanceAttributes","AttributesPropagationUp"];export{d as AttributeDefaults,m as AttributesPropagationUp,l as AttributesRuntimeChange,r as CloneAs,b as InstanceAttributes,u as Mix,g as __namedExportsOrder,T as default};
