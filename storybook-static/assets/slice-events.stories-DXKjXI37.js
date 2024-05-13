import{w as d,e}from"./index-CDavW7r9.js";import"./custom-element-BLZZ00dz.js";function a(t){return new Promise(l=>setTimeout(l,t))}function y(t){const{title:l,body:n}=t;return`
        <fieldset>
            <legend>${l}</legend>
            ${n}
        </fieldset>
  `}const q={title:"slice-events",render:y},s={args:{title:"Slice initialization, change on event",body:`
    <p>initial value should be 0; + and - should change the number in input field</p>
    <custom-element>
            <template>
                <button slice="clickcount" slice-event="click" slice-value="//clickcount + 1">+</button>
                <button slice="clickcount" slice-event="click" slice-value="//clickcount - 1">-</button>
                <input  slice="clickcount" type="number" value="{//clickcount ?? 0}">
                <code data-testid="slice-value">{ //clickcount }</code>
            </template>
        </custom-element>
`},play:async({canvasElement:t})=>{const l=s.args.title,n=d(t);await n.findByText(l);const c=await n.findByTestId("slice-value"),i=await t.querySelector('[type="number"]');await e(c).toBeInTheDocument(),e(c.textContent).to.equal("0","initial slot value 0"),e(i.value).to.equal("0","initial input value 0"),t.querySelector('[slice-value="//clickcount + 1"]').click(),await a(10),e(c.textContent).to.equal("1","increment to 1"),e(i.value).to.equal("1","increment input 1"),t.querySelector('[slice-value="//clickcount + 1"]').click(),await a(10),t.querySelector('[slice-value="//clickcount + 1"]').click(),await a(10),e(c.textContent).to.equal("3","double increment to 3"),e(i.value).to.equal("3","double increment input to 3"),t.querySelector('[slice-value="//clickcount - 1"]').click(),await a(10),e(c.textContent).to.equal("2","decrement to 2"),e(i.value).to.equal("2","decrement input to 2")}},o={args:{title:"Realtime Slice data on event",body:`
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
`},play:async({canvasElement:t})=>{const l=o.args.title,n=d(t);await n.findByText(l);const c=()=>n.getByTestId("//slice/s").textContent,i=()=>n.getByTestId("//slice/s/event/@offsetY").textContent,v=()=>n.getByTestId("//slice/s/event/@type").textContent,p=await t.querySelector("textarea");e(c()).to.equal("","initial slot value blank"),e(i()).to.equal("","initial slot offsetY blank"),e(v()).to.equal("","initial slot event blank"),((u,r,m)=>{const x=new MouseEvent(m,{screenX:u,screenY:r,clientX:u,clientY:r,offsetX:u,offsetY:r});p.dispatchEvent(x)})(10,20,"click"),await a(10),e(c()).to.equal("x:10","click slot value 10"),e(Number(i())).to.be.lessThan(0,"offsetY click"),e(v()).to.equal("click","click event type")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    emitXy(10, 20, 'click');
    await sleep(10);
    expect(sliceText()).to.equal('x:10', 'click slot value 10');
    expect(Number(offsetY())).to.be.lessThan(0, 'offsetY click');
    expect(eventType()).to.equal('click', 'click event type');
  }
}`,...o.parameters?.docs?.source}}};const T=["SliceInitChangeEvent","RealtimeEventInSlice"];export{o as RealtimeEventInSlice,s as SliceInitChangeEvent,T as __namedExportsOrder,q as default};
