import{w as n,e as t,u as s}from"./index-CGuyH0k-.js";import"./custom-element-Bwx7otrT.js";function l(a){return new Promise(e=>setTimeout(e,a))}function B(a){const{title:e,body:c}=a;return`
        <fieldset>
            <legend>${e}</legend>
            ${c}
        </fieldset>
  `}const C={title:"slice-events",render:B},u={args:{title:"Slice initialization, change on event",body:`
    <p>initial value should be 0; + and - should change the number in input field</p>
    <custom-element>
            <template>
                <button slice="clickcount" slice-event="click" slice-value="//clickcount + 1">+</button>
                <button slice="clickcount" slice-event="click" slice-value="//clickcount - 1">-</button>
                <input  slice="clickcount" type="number" value="{//clickcount ?? 0}">
                <code data-testid="slice-value">{ //clickcount }</code>
            </template>
        </custom-element>
`},play:async({canvasElement:a})=>{const e=u.args.title,c=n(a);await c.findByText(e);const i=await c.findByTestId("slice-value"),o=await a.querySelector('[type="number"]');await t(i).toBeInTheDocument(),t(i.textContent).to.equal("0","initial slot value 0"),t(o.value).to.equal("0","initial input value 0"),a.querySelector('[slice-value="//clickcount + 1"]').click(),await l(10),t(i.textContent).to.equal("1","increment to 1"),t(o.value).to.equal("1","increment input 1"),a.querySelector('[slice-value="//clickcount + 1"]').click(),await l(10),a.querySelector('[slice-value="//clickcount + 1"]').click(),await l(10),t(i.textContent).to.equal("3","double increment to 3"),t(o.value).to.equal("3","double increment input to 3"),a.querySelector('[slice-value="//clickcount - 1"]').click(),await l(10),t(i.textContent).to.equal("2","decrement to 2"),t(o.value).to.equal("2","decrement input to 2")}},p={args:{title:"Realtime Slice data on event",body:`
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
`},play:async({canvasElement:a})=>{const e=p.args.title,c=n(a);await c.findByText(e);const i=()=>c.getByTestId("//slice/s").textContent,o=()=>c.getByTestId("//slice/s/event/@offsetY").textContent,w=()=>c.getByTestId("//slice/s/event/@type").textContent,k=await a.querySelector("textarea");t(i()).to.equal("","initial slot value blank"),t(o()).to.equal("","initial slot offsetY blank"),t(w()).to.equal("","initial slot event blank"),((h,x,T)=>{const g=new MouseEvent(T,{screenX:h,screenY:x,clientX:h,clientY:x,offsetX:h,offsetY:x});k.dispatchEvent(g)})(20,20,"click"),await l(10),t(i()).to.equal("x:20","click slot value 20"),t(Number(o())).to.be.lessThan(0,"offsetY click"),t(w()).to.equal("click","click event type")}},d={args:{title:'slice-event="change submit change submit" ',body:`
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
`},play:async({canvasElement:a})=>{const e=n(a),c=await e.findByTestId("f1");c.focus(),await s.type(c,"AB"),e.getByRole("button").focus(),await s.clear(c),await s.click(e.getByRole("button")),t(await e.findByText("slices count 2")).toBeInTheDocument()}},r={args:{title:'slice="/datadom/attributes/emotion | s1" ',body:`
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
`},play:async({canvasElement:a})=>{const e=n(a),c=await e.findByTestId("f1");c.focus(),await s.type(c,"AB"),await t(await e.findByText("s1: AB")).toBeInTheDocument(),await t(await e.findByText("s2: AB")).toBeInTheDocument()}},m={args:{title:'slice="/datadom/attributes/emotion | s1" ',body:`
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
`},play:async({canvasElement:a})=>{const e=n(a),c=await e.findByTestId("f1");c.focus(),await s.type(c,"AB"),await t(await e.findByText("emotion attribute: AB")).toBeInTheDocument()}},v={args:{title:"Checkbox value in slice ",body:`
    <p> Checked value propagated into slice</p>
    <custom-element>
        <template>
            <input type="checkbox"  slice="s1" value="V1" checked/>
            <p>slice: {//s1}</p>
        </template>
    </custom-element>
`},play:async({canvasElement:a})=>{const e=n(a);await t(await e.findByText("slice: V1")).toBeInTheDocument()}},y={args:{title:"UncheckedCheckbox value not in slice ",body:`
    <p> Check to see the value propagated into slice. Uncheck to observe the empty string in the slice. </p>
    <custom-element>
        <template>
            <input type="checkbox"  slice="s1" value="V1" data-testid="i1"/>
            <p data-testid="t1">slice: {//s1}</p>
        </template>
    </custom-element>
`},play:async({canvasElement:a})=>{const e=n(a),c=await e.findByTestId("t1");await t(c.textContent).toEqual("slice: ");const i=await e.findByTestId("i1");await s.click(i),await t(await e.findByText("slice: V1")).toBeInTheDocument(),await s.click(i),await t(c.textContent).toEqual("slice: ")}},b={args:{title:"UncheckedCheckbox slice-value not in slice ",body:`
    <p> Check to see the value propagated into slice. Uncheck to observe the empty string in the slice. </p>
    <custom-element>
        <template>
            <input type="checkbox"  slice="s1" slice-value="'V1'" data-testid="i1"/>
            <p data-testid="t1">slice: {//s1}</p>
        </template>
    </custom-element>
`},play:async({canvasElement:a})=>{const e=n(a),c=await e.findByTestId("t1");await t(c.textContent).toEqual("slice: ");const i=await e.findByTestId("i1");await s.click(i),await t(await e.findByText("slice: V1")).toBeInTheDocument(),await s.click(i),await t(c.textContent).toEqual("slice: ")}},f={args:{title:"Radiogroup value",body:`
    <p> The value propagated into slice from the last checked radiobutton. </p>
    <custom-element>
        <template>
            <p>V1: <input type="radio"  slice="s1" value="V1" data-testid="i1" name="group1"/></p>
            <p>V2: <input type="radio"  slice="s1" value="V2" data-testid="i2" name="group1"/></p>
            <p data-testid="t1">slice: {//s1}</p>
        </template>
    </custom-element>
`},play:async({canvasElement:a})=>{const e=n(a);await s.click(await e.findByTestId("i1")),await t(await e.findByText("slice: V1")).toBeInTheDocument(),await s.click(await e.findByTestId("i2")),await t(await e.findByText("slice: V2")).toBeInTheDocument()}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    const titleText = SliceInitChangeEvent.args!.title as string;
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    const code = await canvas.findByTestId('slice-value');
    const input = (await canvasElement.querySelector('[type="number"]')) as HTMLInputElement;
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    const titleText = RealtimeEventInSlice.args!.title as string;
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Checkbox value in slice ',
    body: \`
    <p> Checked value propagated into slice</p>
    <custom-element>
        <template>
            <input type="checkbox"  slice="s1" value="V1" checked/>
            <p>slice: {//s1}</p>
        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('slice: V1')).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'UncheckedCheckbox value not in slice ',
    body: \`
    <p> Check to see the value propagated into slice. Uncheck to observe the empty string in the slice. </p>
    <custom-element>
        <template>
            <input type="checkbox"  slice="s1" value="V1" data-testid="i1"/>
            <p data-testid="t1">slice: {//s1}</p>
        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const p = await canvas.findByTestId('t1');
    await expect(p.textContent).toEqual("slice: ");
    const cb = await canvas.findByTestId('i1');
    await userEvent.click(cb);
    await expect(await canvas.findByText('slice: V1')).toBeInTheDocument();
    await userEvent.click(cb);
    await expect(p.textContent).toEqual('slice: ');
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'UncheckedCheckbox slice-value not in slice ',
    body: \`
    <p> Check to see the value propagated into slice. Uncheck to observe the empty string in the slice. </p>
    <custom-element>
        <template>
            <input type="checkbox"  slice="s1" slice-value="'V1'" data-testid="i1"/>
            <p data-testid="t1">slice: {//s1}</p>
        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const p = await canvas.findByTestId('t1');
    await expect(p.textContent).toEqual("slice: ");
    const cb = await canvas.findByTestId('i1');
    await userEvent.click(cb);
    await expect(await canvas.findByText('slice: V1')).toBeInTheDocument();
    await userEvent.click(cb);
    await expect(p.textContent).toEqual('slice: ');
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Radiogroup value',
    body: \`
    <p> The value propagated into slice from the last checked radiobutton. </p>
    <custom-element>
        <template>
            <p>V1: <input type="radio"  slice="s1" value="V1" data-testid="i1" name="group1"/></p>
            <p>V2: <input type="radio"  slice="s1" value="V2" data-testid="i2" name="group1"/></p>
            <p data-testid="t1">slice: {//s1}</p>
        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByTestId('i1'));
    await expect(await canvas.findByText('slice: V1')).toBeInTheDocument();
    await userEvent.click(await canvas.findByTestId('i2'));
    await expect(await canvas.findByText('slice: V2')).toBeInTheDocument();
  }
}`,...f.parameters?.docs?.source}}};const S=["SliceInitChangeEvent","RealtimeEventInSlice","DoubleEventInSlice","MultipleSlices","SlicesInAttrAndName","CheckboxChecked","CheckboxUnchecked","CheckboxSliceValue","RadiogroupSliceValue"];export{v as CheckboxChecked,b as CheckboxSliceValue,y as CheckboxUnchecked,d as DoubleEventInSlice,r as MultipleSlices,f as RadiogroupSliceValue,p as RealtimeEventInSlice,u as SliceInitChangeEvent,m as SlicesInAttrAndName,S as __namedExportsOrder,C as default};
