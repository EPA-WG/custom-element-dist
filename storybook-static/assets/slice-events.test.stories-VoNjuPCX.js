import{w as d,e as c,u}from"./custom-element-DpIq8E2p.js";import"./index-CVRyq5ci.js";function i(e){return new Promise(t=>setTimeout(t,e))}function h(e){const{title:t,body:a}=e;return`
        <fieldset>
            <legend>${t}</legend>
            ${a}
        </fieldset>
  `}const B={title:"slice-events",render:h},o={args:{title:"Slice initialization, change on event",body:`
    <p>initial value should be 0; + and - should change the number in input field</p>
    <custom-element>
            <template>
                <button slice="clickcount" slice-event="click" slice-value="//clickcount + 1">+</button>
                <button slice="clickcount" slice-event="click" slice-value="//clickcount - 1">-</button>
                <input  slice="clickcount" type="number" value="{//clickcount ?? 0}">
                <code data-testid="slice-value">{ //clickcount }</code>
            </template>
        </custom-element>
`},play:async({canvasElement:e})=>{const t=o.args.title,a=d(e);await a.findByText(t);const n=await a.findByTestId("slice-value"),s=await e.querySelector('[type="number"]');await c(n).toBeInTheDocument(),c(n.textContent).to.equal("0","initial slot value 0"),c(s.value).to.equal("0","initial input value 0"),e.querySelector('[slice-value="//clickcount + 1"]').click(),await i(10),c(n.textContent).to.equal("1","increment to 1"),c(s.value).to.equal("1","increment input 1"),e.querySelector('[slice-value="//clickcount + 1"]').click(),await i(10),e.querySelector('[slice-value="//clickcount + 1"]').click(),await i(10),c(n.textContent).to.equal("3","double increment to 3"),c(s.value).to.equal("3","double increment input to 3"),e.querySelector('[slice-value="//clickcount - 1"]').click(),await i(10),c(n.textContent).to.equal("2","decrement to 2"),c(s.value).to.equal("2","decrement input to 2")}},l={args:{title:"Realtime Slice data on event",body:`
    <p>move the mouse over TEXTAREA and click to see slice and slice event changed</p>
    <custom-element>
        <template>
            <textarea   slice="s" slice-value="concat('x:', //@pageX)" slice-event="mousemove click"
                        style="width:16rem;height:16rem;box-shadow: inset {//@offsetX}px {//@offsetY}px gold;"></textarea><br/>
            //slice/s                   : <code data-testid="//slice/s"                 >{ //slice/s                }</code>  <br/>
            //slice/s/event/@offsetY    : <code data-testid="//slice/s/event/@offsetY"  >{ //slice/s/event/@offsetY }</code>  <br/>
            event type                  : <code data-testid="//slice/s/event/@type"     >{ //slice/s/event/@type    }</code>
        </template>
    </custom-element>
`},play:async({canvasElement:e})=>{const t=l.args.title,a=d(e);await a.findByText(t);const n=()=>a.getByTestId("//slice/s").textContent,s=()=>a.getByTestId("//slice/s/event/@offsetY").textContent,y=()=>a.getByTestId("//slice/s/event/@type").textContent,b=await e.querySelector("textarea");c(n()).to.equal("","initial slot value blank"),c(s()).to.equal("","initial slot offsetY blank"),c(y()).to.equal("","initial slot event blank"),((v,f,x)=>{const w=new MouseEvent(x,{screenX:v,screenY:f,clientX:v,clientY:f,offsetX:v,offsetY:f});b.dispatchEvent(w)})(20,20,"click"),await i(10),c(n()).to.equal("x:20","click slot value 20"),c(Number(s())).to.be.lessThan(0,"offsetY click"),c(y()).to.equal("click","click event type")}},p={args:{title:'slice-event="change submit change submit" ',body:`
    <p> double same event should be treated as one.</p>
    <custom-element>
        <template>
            <form slice-event="submit submit change change" slice="form-1">
                <input slice-event="change change" required slice="field-1" data-testid="f1" name="f1"/>
                <input name="f2" value="populated in form-data"/>
                <button>next</button> <code>slices count {count(/datadom/slice/*)}</code>
            </form>
        </template>
    </custom-element>
`},play:async({canvasElement:e})=>{const t=d(e),a=await t.findByTestId("f1");a.focus(),await u.type(a,"AB"),t.getByRole("button").focus(),await u.clear(a),await u.click(t.getByRole("button")),c(await t.findByText("slices count 2")).toBeInTheDocument()}},r={args:{title:'slice="/datadom/attributes/emotion | s1" ',body:`
    <p> double same event should be treated as one.</p>
    <custom-element>
        <template>
            <input  slice="s1|s2" 
                    slice-event="input"
                    data-testid="f1"
                    /><br/>
            Type to update s1 and s2 slices <br/>
            slice <code>s1: {//slice/s1}</code><br/>
            slice <code>s2: {//slice/s2}</code><br/>
        </template>
    </custom-element>
`},play:async({canvasElement:e})=>{const t=d(e),a=await t.findByTestId("f1");a.focus(),await u.type(a,"AB"),await c(await t.findByText("s1: AB")).toBeInTheDocument(),await c(await t.findByText("s2: AB")).toBeInTheDocument()}},m={args:{title:'slice="/datadom/attributes/emotion | s1" ',body:`
    <p> double same event should be treated as one.</p>
    <custom-element>
        <template>
            <attribute name="emotion">😃</attribute>
            <input  slice-event="input" slice="/datadom/attributes/emotion | s1" data-testid="f1"/>
            <p>Type to update </p>
            <p>emotion attribute: {emotion}</p>
            <p>slice: {//slice/s1}</p>
        </template>
    </custom-element>
`},play:async({canvasElement:e})=>{const t=d(e),a=await t.findByTestId("f1");a.focus(),await u.type(a,"AB"),await c(await t.findByText("emotion attribute: AB")).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Slice initialization, change on event',
    body: \`
    <p>initial value should be 0; + and - should change the number in input field</p>
    <custom-element>
            <template>
                <button slice="clickcount" slice-event="click" slice-value="//clickcount + 1">+</button>
                <button slice="clickcount" slice-event="click" slice-value="//clickcount - 1">-</button>
                <input  slice="clickcount" type="number" value="{//clickcount ?? 0}">
                <code data-testid="slice-value">{ //clickcount }</code>
            </template>
        </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = (SliceInitChangeEvent.args!.title as string);
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    const code = await canvas.findByTestId('slice-value');
    const input = (await canvasElement.querySelector('[type="number"]') as HTMLInputElement);
    await expect(code).toBeInTheDocument();
    expect(code.textContent).to.equal('0', 'initial slot value 0');
    expect(input.value).to.equal('0', 'initial input value 0');
    canvasElement.querySelector('[slice-value="//clickcount + 1"]').click();
    await sleep(10);
    expect(code.textContent).to.equal('1', 'increment to 1');
    expect(input.value).to.equal('1', 'increment input 1');
    canvasElement.querySelector('[slice-value="//clickcount + 1"]').click();
    await sleep(10);
    canvasElement.querySelector('[slice-value="//clickcount + 1"]').click();
    await sleep(10);
    expect(code.textContent).to.equal('3', 'double increment to 3');
    expect(input.value).to.equal('3', 'double increment input to 3');
    canvasElement.querySelector('[slice-value="//clickcount - 1"]').click();
    await sleep(10);
    expect(code.textContent).to.equal('2', 'decrement to 2');
    expect(input.value).to.equal('2', 'decrement input to 2');
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Realtime Slice data on event',
    body: \`
    <p>move the mouse over TEXTAREA and click to see slice and slice event changed</p>
    <custom-element>
        <template>
            <textarea   slice="s" slice-value="concat('x:', //@pageX)" slice-event="mousemove click"
                        style="width:16rem;height:16rem;box-shadow: inset {//@offsetX}px {//@offsetY}px gold;"></textarea><br/>
            //slice/s                   : <code data-testid="//slice/s"                 >{ //slice/s                }</code>  <br/>
            //slice/s/event/@offsetY    : <code data-testid="//slice/s/event/@offsetY"  >{ //slice/s/event/@offsetY }</code>  <br/>
            event type                  : <code data-testid="//slice/s/event/@type"     >{ //slice/s/event/@type    }</code>
        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = (RealtimeEventInSlice.args!.title as string);
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    const sliceText = () => canvas.getByTestId('//slice/s').textContent,
      offsetY = () => canvas.getByTestId('//slice/s/event/@offsetY').textContent,
      eventType = () => canvas.getByTestId('//slice/s/event/@type').textContent;
    const input = await canvasElement.querySelector('textarea');
    // expect(input).toBeInTheDocument();
    expect(sliceText()).to.equal('', 'initial slot value blank');
    expect(offsetY()).to.equal('', 'initial slot offsetY blank');
    expect(eventType()).to.equal('', 'initial slot event blank');
    const emitXy = (x, y, eventName) => {
      const ev = new MouseEvent(eventName, {
        screenX: x,
        screenY: y,
        clientX: x,
        clientY: y,
        offsetX: x,
        offsetY: y
      });
      input.dispatchEvent(ev);
    };
    emitXy(20, 20, 'click');
    await sleep(10);
    expect(sliceText()).to.equal('x:20', 'click slot value 20');
    expect(Number(offsetY())).to.be.lessThan(0, 'offsetY click');
    expect(eventType()).to.equal('click', 'click event type');
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'slice-event="change submit change submit" ',
    body: \`
    <p> double same event should be treated as one.</p>
    <custom-element>
        <template>
            <form slice-event="submit submit change change" slice="form-1">
                <input slice-event="change change" required slice="field-1" data-testid="f1" name="f1"/>
                <input name="f2" value="populated in form-data"/>
                <button>next</button> <code>slices count {count(/datadom/slice/*)}</code>
            </form>
        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId('f1');
    input.focus();
    await userEvent.type(input, 'AB');
    canvas.getByRole('button').focus();
    await userEvent.clear(input);
    await userEvent.click(canvas.getByRole('button'));
    expect(await canvas.findByText('slices count 2')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'slice="/datadom/attributes/emotion | s1" ',
    body: \`
    <p> double same event should be treated as one.</p>
    <custom-element>
        <template>
            <input  slice="s1|s2" 
                    slice-event="input"
                    data-testid="f1"
                    /><br/>
            Type to update s1 and s2 slices <br/>
            slice <code>s1: {//slice/s1}</code><br/>
            slice <code>s2: {//slice/s2}</code><br/>
        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId('f1');
    input.focus();
    await userEvent.type(input, 'AB');
    await expect(await canvas.findByText('s1: AB')).toBeInTheDocument();
    await expect(await canvas.findByText('s2: AB')).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'slice="/datadom/attributes/emotion | s1" ',
    body: \`
    <p> double same event should be treated as one.</p>
    <custom-element>
        <template>
            <attribute name="emotion">😃</attribute>
            <input  slice-event="input" slice="/datadom/attributes/emotion | s1" data-testid="f1"/>
            <p>Type to update </p>
            <p>emotion attribute: {emotion}</p>
            <p>slice: {//slice/s1}</p>
        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId('f1');
    input.focus();
    await userEvent.type(input, 'AB');
    await expect(await canvas.findByText('emotion attribute: AB')).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};const q=["SliceInitChangeEvent","RealtimeEventInSlice","DoubleEventInSlice","MultipleSlices","SlicesInAttrAndName"];export{p as DoubleEventInSlice,r as MultipleSlices,l as RealtimeEventInSlice,o as SliceInitChangeEvent,m as SlicesInAttrAndName,q as __namedExportsOrder,B as default};
