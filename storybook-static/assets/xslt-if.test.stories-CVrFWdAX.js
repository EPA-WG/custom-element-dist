import{w as l,e as a,u as c}from"./index-CGuyH0k-.js";import"./custom-element-wuk8gYiP.js";function d(i){const{title:e,tag:t,template:s,payload:n}=i;return`
        <fieldset>
            <legend>${e}</legend>
            <custom-element tag="${t}" hidden>
                <template>
                    ${s}
                </template>
            </custom-element>
            ${n}
        </fieldset>
    `}const f={title:"xslt/if",render:d},o={args:{title:"KNOWN ISSUE: Multiple IF blocks - out of order",tag:"multi-if-order-issue",template:`
            <div data-testid="whole-text">
                <label><input type="checkbox" data-testid="toggle-a" slice="show-a" value="AA"  /> A</label>
               
                <hr/>
                ▶
                <if test="//show-a = 'AA'">
                    !A
                </if>            
                ◀
            </div>
            <if test="//show-a = 'AA'">
                <div data-testid="t-1">T1</div>
            </if>            
        `,payload:`
            <multi-if-order-issue></multi-if-order-issue>
        `},play:async({canvasElement:i})=>{const e=l(i),t=await e.findByTestId("whole-text");a(t.textContent).to.toMatch(/▶\s+◀/);const s=await e.findByTestId("toggle-a");debugger;await c.click(s),a(await await e.findByTestId("t-1")).toBeInTheDocument(),a(t.textContent).to.toMatch(/\!A/),a(t.textContent).to.toMatch(/▶\s+\!A/),a(t.textContent).to.toMatch(/\!A\s+◀/)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'KNOWN ISSUE: Multiple IF blocks - out of order',
    tag: 'multi-if-order-issue',
    template: \`
            <div data-testid="whole-text">
                <label><input type="checkbox" data-testid="toggle-a" slice="show-a" value="AA"  /> A</label>
               
                <hr/>
                ▶
                <if test="//show-a = 'AA'">
                    !A
                </if>            
                ◀
            </div>
            <if test="//show-a = 'AA'">
                <div data-testid="t-1">T1</div>
            </if>            
        \`,
    payload: \`
            <multi-if-order-issue></multi-if-order-issue>
        \`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Initially ▶\\s+◀ should be visible, !A should not
    const container = await canvas.findByTestId('whole-text');
    expect(container.textContent).to.toMatch(/▶\\s+◀/);

    // check A - show !A
    const toggleA = await canvas.findByTestId('toggle-a');
    debugger;
    await userEvent.click(toggleA);
    expect(await await canvas.findByTestId('t-1')).toBeInTheDocument();
    // !A is rendered
    expect(container.textContent).to.toMatch(/\\!A/);
    // !A afer ▶
    expect(container.textContent).to.toMatch(/▶\\s+\\!A/);
    // !A before ◀
    expect(container.textContent).to.toMatch(/\\!A\\s+◀/);
  }
}`,...o.parameters?.docs?.source}}};const p=["MultipleIfOrderingIssue"];export{o as MultipleIfOrderingIssue,p as __namedExportsOrder,f as default};
