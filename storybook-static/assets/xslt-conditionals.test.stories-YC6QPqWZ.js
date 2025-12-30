import{w as n,e,u as I}from"./index-CGuyH0k-.js";import"./custom-element-Bwx7otrT.js";function o(a){return new Promise(s=>setTimeout(s,a))}function B(a){const{title:s,tag:t,template:i,payload:r}=a;return`
        <fieldset>
            <legend>${s}</legend>
            <custom-element tag="${t}" hidden>
                <template>
                    ${i}
                </template>
            </custom-element>
            ${r}
        </fieldset>
    `}const H={title:"xslt-conditionals",render:B},c={args:{title:"xsl:if - condition is true",tag:"if-true-test",template:`
            <attribute name="show-message"></attribute>
            <if test="//@show-message">
                <span data-testid="result">Message is visible</span>
            </if>
        `,payload:'<if-true-test show-message="yes"></if-true-test>'},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("result");e(t).toBeInTheDocument(),e(t).toHaveTextContent("Message is visible")}},u={args:{title:"xsl:if - condition is false",tag:"if-false-test",template:`
            <attribute name="show-message"></attribute>
            <if test="//@show-message = 'yes'">
                <span data-testid="hidden-result">Should not appear</span>
            </if>
            <span data-testid="fallback">Fallback content</span>
        `,payload:'<if-false-test show-message="no"></if-false-test>'},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("fallback");e(t).toBeInTheDocument(),e(a.querySelector('[data-testid="hidden-result"]')).toBeNull()}},l={args:{title:"xsl:if - attribute not exists",tag:"if-not-exists-test",template:`
            <attribute name="optional"></attribute>
            <if test="not(//attributes/@optional)">
                <span data-testid="result">No attribute provided</span>
            </if>
            <if test="//attributes/@optional">
                <span data-testid="has-attr">Attribute exists</span>
            </if>
        `,payload:"<if-not-exists-test></if-not-exists-test>"},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("result");e(t).toBeInTheDocument(),e(t).toHaveTextContent("No attribute provided"),e(a.querySelector('[data-testid="has-attr"]')).toBeNull()}},d={args:{title:"xsl:choose/when/otherwise - basic switch",tag:"choose-basic-test",template:`
            <attribute name="status"></attribute>
            <choose>
                <when test="//attributes/@status = 'success'">
                    <span data-testid="result" class="success">Operation succeeded</span>
                </when>
                <when test="//attributes/@status = 'error'">
                    <span data-testid="result" class="error">Operation failed</span>
                </when>
                <otherwise>
                    <span data-testid="result" class="unknown">Unknown status</span>
                </otherwise>
            </choose>
        `,payload:'<choose-basic-test status="success"></choose-basic-test>'},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("result");e(t).toBeInTheDocument(),e(t).toHaveTextContent("Operation succeeded"),e(t).toHaveClass("success")}},p={args:{title:"xsl:choose - second when branch",tag:"choose-second-test",template:`
            <attribute name="status"></attribute>
            <choose>
                <when test="//attributes/@status = 'success'">
                    <span data-testid="result" class="success">Operation succeeded</span>
                </when>
                <when test="//attributes/@status = 'error'">
                    <span data-testid="result" class="error">Operation failed</span>
                </when>
                <otherwise>
                    <span data-testid="result" class="unknown">Unknown status</span>
                </otherwise>
            </choose>
        `,payload:'<choose-second-test status="error"></choose-second-test>'},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("result");e(t).toBeInTheDocument(),e(t).toHaveTextContent("Operation failed"),e(t).toHaveClass("error")}},m={args:{title:"xsl:choose - otherwise fallback",tag:"choose-otherwise-test",template:`
            <attribute name="status"></attribute>
            <choose>
                <when test="//attributes/@status = 'success'">
                    <span data-testid="result" class="success">Operation succeeded</span>
                </when>
                <when test="//attributes/@status = 'error'">
                    <span data-testid="result" class="error">Operation failed</span>
                </when>
                <otherwise>
                    <span data-testid="result" class="unknown">Unknown status</span>
                </otherwise>
            </choose>
        `,payload:'<choose-otherwise-test status="pending"></choose-otherwise-test>'},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("result");e(t).toBeInTheDocument(),e(t).toHaveTextContent("Unknown status"),e(t).toHaveClass("unknown")}},h={args:{title:"xsl:choose - no attribute provided",tag:"choose-no-attr-test",template:`
            <attribute name="level"></attribute>
            <choose>
                <when test="//attributes/@level = 'high'">
                    <span data-testid="result">High priority</span>
                </when>
                <when test="//attributes/@level = 'low'">
                    <span data-testid="result">Low priority</span>
                </when>
                <otherwise>
                    <span data-testid="result">Default priority</span>
                </otherwise>
            </choose>
        `,payload:"<choose-no-attr-test></choose-no-attr-test>"},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("result");e(t).toBeInTheDocument(),e(t).toHaveTextContent("Default priority")}},w={args:{title:"Nested conditionals",tag:"nested-cond-test",template:`
            <attribute name="type"></attribute>
            <attribute name="active"></attribute>
            <choose>
                <when test="//attributes/@type = 'user'">
                    <if test="//attributes/@active = 'true'">
                        <span data-testid="result">Active user</span>
                    </if>
                    <if test="//attributes/@active != 'true'">
                        <span data-testid="result">Inactive user</span>
                    </if>
                </when>
                <otherwise>
                    <span data-testid="result">Not a user</span>
                </otherwise>
            </choose>
        `,payload:'<nested-cond-test type="user" active="true"></nested-cond-test>'},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("result");e(t).toBeInTheDocument(),e(t).toHaveTextContent("Active user")}},b={args:{title:"Nested conditionals - inactive user",tag:"nested-cond-inactive-test",template:`
            <attribute name="type"></attribute>
            <attribute name="active"></attribute>
            <choose>
                <when test="//attributes/@type = 'user'">
                    <if test="//attributes/@active = 'true'">
                        <span data-testid="result">Active user</span>
                    </if>
                    <if test="//attributes/@active != 'true'">
                        <span data-testid="result">Inactive user</span>
                    </if>
                </when>
                <otherwise>
                    <span data-testid="result">Not a user</span>
                </otherwise>
            </choose>
        `,payload:'<nested-cond-inactive-test type="user" active="false"></nested-cond-inactive-test>'},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("result");e(t).toBeInTheDocument(),e(t).toHaveTextContent("Inactive user")}},v={args:{title:"Numeric comparison in conditions",tag:"numeric-cond-test",template:`
            <attribute name="count"></attribute>
            <choose>
                <when test="//attributes/@count > 10">
                    <span data-testid="result">Many items</span>
                </when>
                <when test="//attributes/@count > 0">
                    <span data-testid="result">Some items</span>
                </when>
                <otherwise>
                    <span data-testid="result">No items</span>
                </otherwise>
            </choose>
        `,payload:'<numeric-cond-test count="15"></numeric-cond-test>'},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("result");e(t).toBeInTheDocument(),e(t).toHaveTextContent("Many items")}},y={args:{title:"Numeric comparison - low value",tag:"numeric-cond-low-test",template:`
            <attribute name="count"></attribute>
            <choose>
                <when test="//attributes/@count > 10">
                    <span data-testid="result">Many items</span>
                </when>
                <when test="//attributes/@count > 0">
                    <span data-testid="result">Some items</span>
                </when>
                <otherwise>
                    <span data-testid="result">No items</span>
                </otherwise>
            </choose>
        `,payload:'<numeric-cond-low-test count="5"></numeric-cond-low-test>'},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("result");e(t).toBeInTheDocument(),e(t).toHaveTextContent("Some items")}},f={args:{title:"Boolean AND condition",tag:"and-cond-test",template:`
            <attribute name="logged-in"></attribute>
            <attribute name="admin"></attribute>
            <if test="//attributes/@logged-in = 'true' and //attributes/@admin = 'true'">
                <span data-testid="result">Admin panel access granted</span>
            </if>
            <if test="not(//attributes/@logged-in = 'true' and //attributes/@admin = 'true')">
                <span data-testid="result">Access denied</span>
            </if>
        `,payload:'<and-cond-test logged-in="true" admin="true"></and-cond-test>'},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("result");e(t).toBeInTheDocument(),e(t).toHaveTextContent("Admin panel access granted")}},g={args:{title:"Boolean OR condition",tag:"or-cond-test",template:`
            <attribute name="role"></attribute>
            <if test="//attributes/@role = 'admin' or //attributes/@role = 'moderator'">
                <span data-testid="result">Elevated privileges</span>
            </if>
            <if test="not(//attributes/@role = 'admin' or //attributes/@role = 'moderator')">
                <span data-testid="result">Standard user</span>
            </if>
        `,payload:'<or-cond-test role="moderator"></or-cond-test>'},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("result");e(t).toBeInTheDocument(),e(t).toHaveTextContent("Elevated privileges")}},x={args:{title:"Multiple instances with different conditions",tag:"multi-instance-test",template:`
            <attribute name="data-testid"></attribute>
            <attribute name="variant"></attribute>
            <choose>
                <when test="//attributes/@variant = 'primary'">
                    <button data-testid="{$data-testid}-primary" class="primary">Primary Button</button>
                </when>
                <when test="//attributes/@variant = 'secondary'">
                    <button data-testid="{$data-testid}-secondary" class="secondary">Secondary Button</button>
                </when>
                <otherwise>
                    <button data-testid="{$data-testid}-otherwise" class="default">Default Button</button>
                </otherwise>
            </choose>
        `,payload:`
            <multi-instance-test data-testid="btn1" variant="primary"></multi-instance-test>
            <multi-instance-test data-testid="btn2" variant="secondary"></multi-instance-test>
            <multi-instance-test data-testid="btn3" variant="unknown"></multi-instance-test>
        `},play:async({canvasElement:a})=>{const s=n(a);await o(50);const t=await s.findByTestId("btn1-primary");e(t).toHaveTextContent("Primary Button"),e(t).toHaveClass("primary");const i=await s.findByTestId("btn2-secondary");e(i).toHaveTextContent("Secondary Button"),e(i).toHaveClass("secondary");const r=await s.findByTestId("btn3-otherwise");e(r).toHaveTextContent("Default Button"),e(r).toHaveClass("default")}},T={args:{title:"KNOWN ISSUE: Multiple IF blocks - out of order",tag:"multi-if-order-issue",template:`
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
        `},play:async({canvasElement:a})=>{const s=n(a),t=await s.findByTestId("whole-text");e(t.textContent).to.toMatch(/▶\s+◀/);const i=await s.findByTestId("toggle-a");debugger;await I.click(i),e(await await s.findByTestId("t-1")).toBeInTheDocument(),e(t.textContent).to.toMatch(/\!A/),e(t.textContent).to.toMatch(/▶\s+\!A/),e(t.textContent).to.toMatch(/\!A\s+◀/)}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'xsl:if - condition is true',
    tag: 'if-true-test',
    template: \`
            <attribute name="show-message"></attribute>
            <if test="//@show-message">
                <span data-testid="result">Message is visible</span>
            </if>
        \`,
    payload: \`<if-true-test show-message="yes"></if-true-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const result = await canvas.findByTestId('result');
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('Message is visible');
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'xsl:if - condition is false',
    tag: 'if-false-test',
    template: \`
            <attribute name="show-message"></attribute>
            <if test="//@show-message = 'yes'">
                <span data-testid="hidden-result">Should not appear</span>
            </if>
            <span data-testid="fallback">Fallback content</span>
        \`,
    payload: \`<if-false-test show-message="no"></if-false-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const fallback = await canvas.findByTestId('fallback');
    expect(fallback).toBeInTheDocument();
    expect(canvasElement.querySelector('[data-testid="hidden-result"]')).toBeNull();
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'xsl:if - attribute not exists',
    tag: 'if-not-exists-test',
    template: \`
            <attribute name="optional"></attribute>
            <if test="not(//attributes/@optional)">
                <span data-testid="result">No attribute provided</span>
            </if>
            <if test="//attributes/@optional">
                <span data-testid="has-attr">Attribute exists</span>
            </if>
        \`,
    payload: \`<if-not-exists-test></if-not-exists-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const result = await canvas.findByTestId('result');
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('No attribute provided');
    expect(canvasElement.querySelector('[data-testid="has-attr"]')).toBeNull();
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'xsl:choose/when/otherwise - basic switch',
    tag: 'choose-basic-test',
    template: \`
            <attribute name="status"></attribute>
            <choose>
                <when test="//attributes/@status = 'success'">
                    <span data-testid="result" class="success">Operation succeeded</span>
                </when>
                <when test="//attributes/@status = 'error'">
                    <span data-testid="result" class="error">Operation failed</span>
                </when>
                <otherwise>
                    <span data-testid="result" class="unknown">Unknown status</span>
                </otherwise>
            </choose>
        \`,
    payload: \`<choose-basic-test status="success"></choose-basic-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const result = await canvas.findByTestId('result');
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('Operation succeeded');
    expect(result).toHaveClass('success');
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'xsl:choose - second when branch',
    tag: 'choose-second-test',
    template: \`
            <attribute name="status"></attribute>
            <choose>
                <when test="//attributes/@status = 'success'">
                    <span data-testid="result" class="success">Operation succeeded</span>
                </when>
                <when test="//attributes/@status = 'error'">
                    <span data-testid="result" class="error">Operation failed</span>
                </when>
                <otherwise>
                    <span data-testid="result" class="unknown">Unknown status</span>
                </otherwise>
            </choose>
        \`,
    payload: \`<choose-second-test status="error"></choose-second-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const result = await canvas.findByTestId('result');
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('Operation failed');
    expect(result).toHaveClass('error');
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'xsl:choose - otherwise fallback',
    tag: 'choose-otherwise-test',
    template: \`
            <attribute name="status"></attribute>
            <choose>
                <when test="//attributes/@status = 'success'">
                    <span data-testid="result" class="success">Operation succeeded</span>
                </when>
                <when test="//attributes/@status = 'error'">
                    <span data-testid="result" class="error">Operation failed</span>
                </when>
                <otherwise>
                    <span data-testid="result" class="unknown">Unknown status</span>
                </otherwise>
            </choose>
        \`,
    payload: \`<choose-otherwise-test status="pending"></choose-otherwise-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const result = await canvas.findByTestId('result');
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('Unknown status');
    expect(result).toHaveClass('unknown');
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'xsl:choose - no attribute provided',
    tag: 'choose-no-attr-test',
    template: \`
            <attribute name="level"></attribute>
            <choose>
                <when test="//attributes/@level = 'high'">
                    <span data-testid="result">High priority</span>
                </when>
                <when test="//attributes/@level = 'low'">
                    <span data-testid="result">Low priority</span>
                </when>
                <otherwise>
                    <span data-testid="result">Default priority</span>
                </otherwise>
            </choose>
        \`,
    payload: \`<choose-no-attr-test></choose-no-attr-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const result = await canvas.findByTestId('result');
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('Default priority');
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Nested conditionals',
    tag: 'nested-cond-test',
    template: \`
            <attribute name="type"></attribute>
            <attribute name="active"></attribute>
            <choose>
                <when test="//attributes/@type = 'user'">
                    <if test="//attributes/@active = 'true'">
                        <span data-testid="result">Active user</span>
                    </if>
                    <if test="//attributes/@active != 'true'">
                        <span data-testid="result">Inactive user</span>
                    </if>
                </when>
                <otherwise>
                    <span data-testid="result">Not a user</span>
                </otherwise>
            </choose>
        \`,
    payload: \`<nested-cond-test type="user" active="true"></nested-cond-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const result = await canvas.findByTestId('result');
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('Active user');
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Nested conditionals - inactive user',
    tag: 'nested-cond-inactive-test',
    template: \`
            <attribute name="type"></attribute>
            <attribute name="active"></attribute>
            <choose>
                <when test="//attributes/@type = 'user'">
                    <if test="//attributes/@active = 'true'">
                        <span data-testid="result">Active user</span>
                    </if>
                    <if test="//attributes/@active != 'true'">
                        <span data-testid="result">Inactive user</span>
                    </if>
                </when>
                <otherwise>
                    <span data-testid="result">Not a user</span>
                </otherwise>
            </choose>
        \`,
    payload: \`<nested-cond-inactive-test type="user" active="false"></nested-cond-inactive-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const result = await canvas.findByTestId('result');
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('Inactive user');
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Numeric comparison in conditions',
    tag: 'numeric-cond-test',
    template: \`
            <attribute name="count"></attribute>
            <choose>
                <when test="//attributes/@count > 10">
                    <span data-testid="result">Many items</span>
                </when>
                <when test="//attributes/@count > 0">
                    <span data-testid="result">Some items</span>
                </when>
                <otherwise>
                    <span data-testid="result">No items</span>
                </otherwise>
            </choose>
        \`,
    payload: \`<numeric-cond-test count="15"></numeric-cond-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const result = await canvas.findByTestId('result');
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('Many items');
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Numeric comparison - low value',
    tag: 'numeric-cond-low-test',
    template: \`
            <attribute name="count"></attribute>
            <choose>
                <when test="//attributes/@count > 10">
                    <span data-testid="result">Many items</span>
                </when>
                <when test="//attributes/@count > 0">
                    <span data-testid="result">Some items</span>
                </when>
                <otherwise>
                    <span data-testid="result">No items</span>
                </otherwise>
            </choose>
        \`,
    payload: \`<numeric-cond-low-test count="5"></numeric-cond-low-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const result = await canvas.findByTestId('result');
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('Some items');
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Boolean AND condition',
    tag: 'and-cond-test',
    template: \`
            <attribute name="logged-in"></attribute>
            <attribute name="admin"></attribute>
            <if test="//attributes/@logged-in = 'true' and //attributes/@admin = 'true'">
                <span data-testid="result">Admin panel access granted</span>
            </if>
            <if test="not(//attributes/@logged-in = 'true' and //attributes/@admin = 'true')">
                <span data-testid="result">Access denied</span>
            </if>
        \`,
    payload: \`<and-cond-test logged-in="true" admin="true"></and-cond-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const result = await canvas.findByTestId('result');
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('Admin panel access granted');
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Boolean OR condition',
    tag: 'or-cond-test',
    template: \`
            <attribute name="role"></attribute>
            <if test="//attributes/@role = 'admin' or //attributes/@role = 'moderator'">
                <span data-testid="result">Elevated privileges</span>
            </if>
            <if test="not(//attributes/@role = 'admin' or //attributes/@role = 'moderator')">
                <span data-testid="result">Standard user</span>
            </if>
        \`,
    payload: \`<or-cond-test role="moderator"></or-cond-test>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const result = await canvas.findByTestId('result');
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('Elevated privileges');
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Multiple instances with different conditions',
    tag: 'multi-instance-test',
    template: \`
            <attribute name="data-testid"></attribute>
            <attribute name="variant"></attribute>
            <choose>
                <when test="//attributes/@variant = 'primary'">
                    <button data-testid="{$data-testid}-primary" class="primary">Primary Button</button>
                </when>
                <when test="//attributes/@variant = 'secondary'">
                    <button data-testid="{$data-testid}-secondary" class="secondary">Secondary Button</button>
                </when>
                <otherwise>
                    <button data-testid="{$data-testid}-otherwise" class="default">Default Button</button>
                </otherwise>
            </choose>
        \`,
    payload: \`
            <multi-instance-test data-testid="btn1" variant="primary"></multi-instance-test>
            <multi-instance-test data-testid="btn2" variant="secondary"></multi-instance-test>
            <multi-instance-test data-testid="btn3" variant="unknown"></multi-instance-test>
        \`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await sleep(50);
    const btn1 = await canvas.findByTestId('btn1-primary');
    expect(btn1).toHaveTextContent('Primary Button');
    expect(btn1).toHaveClass('primary');
    const btn2 = await canvas.findByTestId('btn2-secondary');
    expect(btn2).toHaveTextContent('Secondary Button');
    expect(btn2).toHaveClass('secondary');
    const btn3 = await canvas.findByTestId('btn3-otherwise');
    expect(btn3).toHaveTextContent('Default Button');
    expect(btn3).toHaveClass('default');
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const N=["IfTrue","IfFalse","IfNotExists","ChooseWhenOtherwise","ChooseSecondWhen","ChooseOtherwise","ChooseNoAttribute","NestedConditions","NestedConditionsInactive","NumericComparison","NumericComparisonLow","BooleanAndCondition","BooleanOrCondition","MultipleInstances","MultipleIfOrderingIssue"];export{f as BooleanAndCondition,g as BooleanOrCondition,h as ChooseNoAttribute,m as ChooseOtherwise,p as ChooseSecondWhen,d as ChooseWhenOtherwise,u as IfFalse,l as IfNotExists,c as IfTrue,T as MultipleIfOrderingIssue,x as MultipleInstances,w as NestedConditions,b as NestedConditionsInactive,v as NumericComparison,y as NumericComparisonLow,N as __namedExportsOrder,H as default};
