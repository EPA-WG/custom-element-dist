import{w as c,e as t,u as E}from"./index-CGuyH0k-.js";import{m as g,a as y,c as H}from"./custom-element-CnmjNo0g.js";function x(o){return new Promise(e=>setTimeout(e,o))}function T(o){const{title:e,body:a}=o;return`
        <fieldset>
            <legend>${e}</legend>
            ${a}
        </fieldset>
  `}const I={title:"attributes",render:T};function n(o){const e=document.createElement("div");return e.innerHTML=o,e.firstElementChild}const u={args:{title:"cloneAs(el,newTag)",body:`
    <p><code>cloneAs()</code> used for conversion of <code>attribute</code> to <code>xsl:param</code></p>
    <attribute data-testid="t1" >default_P1                </attribute>
    <attribute data-testid="t2" select="'always_p2'"      ></attribute>
    <attribute data-testid="t3" ></attribute>
`},play:async({canvasElement:o})=>{const e=c(o),a=async i=>{const r=await e.findByTestId(i),d=H(r,"xsl:param");for(let p of r.attributes)await t(p.value).toEqual(d.getAttribute(p.name));await t(d.textContent).toEqual(r.textContent)};await a("t1"),await a("t2"),await a("t3")}},l={args:{title:"mix(to,from)",body:`
    <p><code>mix(to,from)</code> used for <code>attribute</code> collections</p>
`},play:async()=>{await t(g({},{a:1,b:"2"})).toEqual({a:1,b:"2"})}},b={args:{title:"mergeAttr( from, to )",body:`
    <p><code>mergeAttr( from, to )</code> used for <code>attribute</code> collections</p>
`},play:async()=>{const o=n('<br title="a" id="b" readonly />'),e=n("<br removed/>");await t(e).toHaveAttribute("removed"),y(o,e),await t(e).toHaveAttribute("title","a"),await t(e).toHaveAttribute("id","b"),await t(e).toHaveAttribute("readonly"),await t(e.getAttributeNames().length).toEqual(3),await t(e).not.toHaveAttribute("removed")}},m={args:{title:"mergeAttr( from, to )",body:`
    <p><code>mergeAttr( from, to )</code> used for <code>attribute</code> collections</p>
    <p><code>dceExportedAttributes</code> property on target element defines the set of attributes which 
    would not be removed from target element</p>
`},play:async()=>{const o=n('<br id="b" readonly />'),e=n("<br removed/>");e.dceExportedAttributes=new Set(["enforced"]),e.setAttribute("enforced","defined by inner component"),await t(e).toHaveAttribute("enforced"),y(o,e),await t(e).toHaveAttribute("id","b"),await t(e).toHaveAttribute("readonly"),await t(e).not.toHaveAttribute("removed"),await t(e).toHaveAttribute("enforced","defined by inner component")}},w={args:{title:"mergeAttr( from, to )",body:`
    <p><code>mergeAttr( from, to )</code> used for <code>attribute</code> collections</p>
    <p><code>dce-exported-attributes</code> attribute on target element defines the space separated list of attributes which 
    would not be removed from target element</p>
`},play:async()=>{const o=n('<br id="b" readonly />'),e=n('<br removed dce-exported-attributes="enforced"/>');e.setAttribute("enforced","defined by inner component"),await t(e).toHaveAttribute("enforced"),y(o,e),await t(e).toHaveAttribute("id","b"),await t(e).toHaveAttribute("readonly"),await t(e).not.toHaveAttribute("removed"),await t(e).toHaveAttribute("enforced","defined by inner component")}},s={args:{title:"Attributes definition",body:`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also is used by IDE and validation.</p>
    <custom-element tag="dce-link" >
        <template>
            <attribute name="p1">default_P1</attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//attributes/@p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="p1">{$p1}</code> <br/>
            p2: <code data-testid="p2">{$p2}</code> <br/>
            p3: <code data-testid="p3">{$p3}</code>
        </template>
    </custom-element>
    <dce-link id="dce1"></dce-link>
`},play:async({canvasElement:o})=>{const e=c(o);t(await await e.findByTestId("p1")).toHaveTextContent("default_P1"),t(await await e.findByTestId("p2")).toHaveTextContent("always_p2"),t(await await e.findByTestId("p3")).toHaveTextContent("def_P3")}},v={args:{title:"Attributes runtime change",body:`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also be used by IDE and validation.</p>
    <custom-element tag="dce-link2" >
        <template>
            <attribute name="p1">default_P1                </attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//attributes/@p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="t1">{$p1}</code> <br/>
            p2: <code data-testid="t2">{$p2}</code> <br/>
            p3: <code data-testid="t3">{$p3}</code>
        </template>
    </custom-element>
    <section>
        <dce-link2  id="dce2" p1="123" p2="override ignored as select is defined"></dce-link2> <br/>
        <div><input id="i1" value="P1">  <button onclick="dce2.setAttribute('p1',i1.value)"> set p1</button> </div>
        <div><input id="i2" value="P2">  <button onclick="dce2.setAttribute('p2',i2.value)"> set p2</button> </div>
        <div><input id="i3" value="P3">  <button onclick="dce2.setAttribute('p3',i3.value)"> set p3</button> </div>
    </section>
`},play:async({canvasElement:o})=>{const e=c(o),a=async r=>await e.findByTestId(r);await x(20),t(await a("t1")).toHaveTextContent("123"),t(await a("t2")).toHaveTextContent("always_p2"),t(await a("t3")).toHaveTextContent("def_P3");const i=window.dce2;i.setAttribute("P1",i1.value),await t(await e.findByText("P1")).toBeInTheDocument(),t(await a("t1")).toHaveTextContent("P1"),i.setAttribute("p2",i2.value),t(e.getByTestId("t2")).toHaveTextContent("always_p2"),i.setAttribute("p3",i3.value),await t(await e.findByText("P3")).toBeInTheDocument(),t(e.getByTestId("t3")).toHaveTextContent("P3")}},f={args:{title:"Instance Attributes",body:`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also is used by IDE and validation.</p>
    <custom-element tag="dce-link3" >
        <template>
            <attribute name="p1">default_P1                </attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//attributes/p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="p1">{$p1}</code> <br/>
            p2: <code data-testid="p2">{$p2}</code> <br/>
            p3: <code data-testid="p3">{$p3}</code>
        </template>
    </custom-element>
    <dce-link3 id="dce3" p1="123" p3="qwe"></dce-link3> |
`},play:async({canvasElement:o})=>{s.args.title;const e=c(o),a=async i=>(await e.findByTestId(i)).textContent.trim();await x(200),t(await a("p1")).toEqual("123"),t(await a("p2")).toEqual("always_p2"),t(await a("p3")).toEqual("qwe")}},A={args:{title:"Instance Attributes",body:`
    <p>Attributes with value(p2) or <code>select</code>(p3) should be propagated to DCE</p>
    <p>p1 attribute is not propagated as does not have the value.</p>
    <custom-element tag="sample-el">
    <template>
        <attribute name="data-testid"></attribute>
        <attribute name="p1"></attribute>
        <attribute name="p2">DEFAULT VALUE</attribute>
        <attribute name="p3" select=" //from-input "></attribute>
        <input slice="from-input" slice-event="input"/><br/>
        p1:<code data-testid="{$data-testid}-p1" >{ $p1 }</code><br/>
        p2:<code data-testid="{$data-testid}-p2" >{ $p2 }</code><br/>
        p3:<code data-testid="{$data-testid}-p3" >{ $p3 }</code><br/>  
        //from-input: {//from-input}      <hr/>
    </template>
</custom-element>

<sample-el data-testid="t1" value="123"                 ></sample-el>
<sample-el data-testid="t2" p1="P1" p2="123" p3="P3"    ></sample-el>
<sample-el data-testid="t3"                             ></sample-el>
`},play:async({canvasElement:o})=>{const e=c(o),a=async p=>(await e.findByTestId(p)).textContent?.trim();await x(20),await t(await a("t1-p1")).toEqual(""),await t(await a("t1-p2")).toEqual("DEFAULT VALUE"),await t(await a("t1-p3")).toEqual("");const i=await e.findByTestId("t1");await t(i).toHaveAttribute("value","123"),await t(i).toHaveAttribute("p2","DEFAULT VALUE"),await t(i).toHaveAttribute("p3",""),await t(i).not.toHaveAttribute("p1"),await t(await a("t2-p1")).toEqual("P1"),await t(await a("t2-p2")).toEqual("123"),await t(await a("t2-p3")).toEqual("");const r=await e.findByTestId("t2");await t(r).toHaveAttribute("p1","P1"),await t(r).toHaveAttribute("p2","123"),await t(r).toHaveAttribute("p3",""),await t(await a("t3-p1")).toEqual(""),await t(await a("t3-p2")).toEqual("DEFAULT VALUE"),await t(await a("t3-p3")).toEqual("");const d=await e.findByTestId("t3");await t(i).not.toHaveAttribute("p1"),await t(d).toHaveAttribute("p2","DEFAULT VALUE"),await t(d).toHaveAttribute("p3",""),d.querySelector("input")?.focus(),await E.keyboard("DCE"),await t(d).toHaveAttribute("p3","DCE")}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'mergeAttr( from, to )',
    body: \`
    <p><code>mergeAttr( from, to )</code> used for <code>attribute</code> collections</p>
\`
  },
  play: async () => {
    const from = html2Element('<br title="a" id="b" readonly />');
    const to = html2Element('<br removed/>');
    await expect(to).toHaveAttribute('removed');
    mergeAttr(from!, to);
    await expect(to).toHaveAttribute('title', 'a');
    await expect(to).toHaveAttribute('id', 'b');
    await expect(to).toHaveAttribute('readonly');
    await expect(to.getAttributeNames().length).toEqual(3);
    await expect(to).not.toHaveAttribute('removed');
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'mergeAttr( from, to )',
    body: \`
    <p><code>mergeAttr( from, to )</code> used for <code>attribute</code> collections</p>
    <p><code>dceExportedAttributes</code> property on target element defines the set of attributes which 
    would not be removed from target element</p>
\`
  },
  play: async () => {
    const from = html2Element('<br id="b" readonly />');
    const to = html2Element('<br removed/>') as (HTMLElement & {
      dceExportedAttributes: Set<string>;
    });
    to.dceExportedAttributes = new Set(['enforced']);
    to.setAttribute('enforced', "defined by inner component");
    await expect(to).toHaveAttribute('enforced');
    mergeAttr(from, to);
    await expect(to).toHaveAttribute('id', 'b');
    await expect(to).toHaveAttribute('readonly');
    await expect(to).not.toHaveAttribute('removed');
    await expect(to).toHaveAttribute('enforced', "defined by inner component");
  }
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'mergeAttr( from, to )',
    body: \`
    <p><code>mergeAttr( from, to )</code> used for <code>attribute</code> collections</p>
    <p><code>dce-exported-attributes</code> attribute on target element defines the space separated list of attributes which 
    would not be removed from target element</p>
\`
  },
  play: async () => {
    const from = html2Element('<br id="b" readonly />');
    const to = html2Element('<br removed dce-exported-attributes="enforced"/>') as (HTMLElement & {
      dceExportedAttributes: Set<string>;
    });
    to.setAttribute('enforced', "defined by inner component");
    await expect(to).toHaveAttribute('enforced');
    mergeAttr(from, to);
    await expect(to).toHaveAttribute('id', 'b');
    await expect(to).toHaveAttribute('readonly');
    await expect(to).not.toHaveAttribute('removed');
    await expect(to).toHaveAttribute('enforced', "defined by inner component");
  }
}`,...w.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Attributes definition',
    body: \`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also is used by IDE and validation.</p>
    <custom-element tag="dce-link" >
        <template>
            <attribute name="p1">default_P1</attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//attributes/@p3 ?? 'def_P3' "></attribute>
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
    const canvas = within(canvasElement);
    expect(await await canvas.findByTestId('p1')).toHaveTextContent('default_P1');
    expect(await await canvas.findByTestId('p2')).toHaveTextContent('always_p2');
    expect(await await canvas.findByTestId('p3')).toHaveTextContent('def_P3');
  }
}`,...s.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Attributes runtime change',
    body: \`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also be used by IDE and validation.</p>
    <custom-element tag="dce-link2" >
        <template>
            <attribute name="p1">default_P1                </attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//attributes/@p3 ?? 'def_P3' "></attribute>
            p1: <code data-testid="t1">{$p1}</code> <br/>
            p2: <code data-testid="t2">{$p2}</code> <br/>
            p3: <code data-testid="t3">{$p3}</code>
        </template>
    </custom-element>
    <section>
        <dce-link2  id="dce2" p1="123" p2="override ignored as select is defined"></dce-link2> <br/>
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Instance Attributes',
    body: \`
    <p>Params needed to declare DCE attributes and track the attributes changes. It also is used by IDE and validation.</p>
    <custom-element tag="dce-link3" >
        <template>
            <attribute name="p1">default_P1                </attribute>
            <attribute name="p2" select="'always_p2'"      ></attribute>
            <attribute name="p3" select="//attributes/p3 ?? 'def_P3' "></attribute>
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
    await sleep(200);
    expect(await code('p1')).toEqual('123');
    expect(await code('p2')).toEqual('always_p2');
    expect(await code('p3')).toEqual('qwe');
  }
}`,...f.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
        <attribute name="p3" select=" //from-input "></attribute>
        <input slice="from-input" slice-event="input"/><br/>
        p1:<code data-testid="{$data-testid}-p1" >{ $p1 }</code><br/>
        p2:<code data-testid="{$data-testid}-p2" >{ $p2 }</code><br/>
        p3:<code data-testid="{$data-testid}-p3" >{ $p3 }</code><br/>  
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
    await expect(await code('t1-p3')).toEqual('');
    const t1 = await canvas.findByTestId('t1');
    await expect(t1).toHaveAttribute('value', '123');
    await expect(t1).toHaveAttribute('p2', 'DEFAULT VALUE');
    await expect(t1).toHaveAttribute('p3', '');
    await expect(t1).not.toHaveAttribute('p1');
    await expect(await code('t2-p1')).toEqual('P1');
    await expect(await code('t2-p2')).toEqual('123');
    await expect(await code('t2-p3')).toEqual('');
    const t2 = await canvas.findByTestId('t2');
    await expect(t2).toHaveAttribute('p1', 'P1');
    await expect(t2).toHaveAttribute('p2', '123');
    await expect(t2).toHaveAttribute('p3', '');
    await expect(await code('t3-p1')).toEqual('');
    await expect(await code('t3-p2')).toEqual('DEFAULT VALUE');
    await expect(await code('t3-p3')).toEqual('');
    const t3 = await canvas.findByTestId('t3');
    await expect(t1).not.toHaveAttribute('p1');
    await expect(t3).toHaveAttribute('p2', 'DEFAULT VALUE');
    await expect(t3).toHaveAttribute('p3', '');
    t3.querySelector('input')?.focus();
    await userEvent.keyboard('DCE');
    await expect(t3).toHaveAttribute('p3', 'DCE');
  }
}`,...A.parameters?.docs?.source}}};const C=["CloneAs","Mix","MergeAttr","dceExportedAttributes","dceExportedAttributes_attr","AttributeDefaults","AttributesRuntimeChange","InstanceAttributes","AttributesPropagationUp"];export{s as AttributeDefaults,A as AttributesPropagationUp,v as AttributesRuntimeChange,u as CloneAs,f as InstanceAttributes,b as MergeAttr,l as Mix,C as __namedExportsOrder,m as dceExportedAttributes,w as dceExportedAttributes_attr,I as default};
