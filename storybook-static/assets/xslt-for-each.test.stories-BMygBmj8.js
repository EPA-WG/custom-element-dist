import{w as i,e,f as m}from"./index-CGuyH0k-.js";import"./custom-element-wuk8gYiP.js";function w(a){const{title:t,tag:d,template:o,payload:s}=a;return`
        <fieldset>
            <legend>${t}</legend>
            <custom-element tag="${d}" hidden>
                <template>
                    ${o}
                </template>
            </custom-element>
            ${s}
        </fieldset>
    `}const y={title:"xslt/for-each",render:w,parameters:{test:{dangerouslyIgnoreUnhandledErrors:!0}}},x=`
<h6 id="cem-color-hue-variant" tabindex="-1">cem-color-hue-variant</h6>
<table>
    <thead>
    <tr>
        <th>Token</th>
        <th>Hue</th>
        <th>Variant</th>
        <th>Hex</th>
        <th>Label</th>
        <th>Intended use</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>--cem-color-blue-xl</code></td>
        <td>blue</td>
        <td>xl</td>
        <td><code>#faf9fd</code></td>
        <td>Lightest blue</td>
        <td>Comfort/trust emotion (light scene)</td>
    </tr>
    <tr>
        <td><code>--cem-color-blue-l</code></td>
        <td>blue</td>
        <td>l</td>
        <td><code>#d7e3ff</code></td>
        <td>Light blue</td>
        <td>Trust palette, attention semantic</td>
    </tr>
    <tr>
        <td><code>--cem-color-blue-d</code></td>
        <td>blue</td>
        <td>d</td>
        <td><code>#002f65</code></td>
        <td>Dark blue</td>
        <td>Trust palette (dark theme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-blue-xd</code></td>
        <td>blue</td>
        <td>xd</td>
        <td><code>#1a1b1f</code></td>
        <td>Darkest blue</td>
        <td>Comfort/trust emotion (dark scene)</td>
    </tr>
    <tr>
        <td><code>--cem-color-brown-xl</code></td>
        <td>brown</td>
        <td>xl</td>
        <td><code>#d7ccc8</code></td>
        <td>Extra light brown</td>
        <td>Conservative palette (light theme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-brown-l</code></td>
        <td>brown</td>
        <td>l</td>
        <td><code>#a1887f</code></td>
        <td>Light brown</td>
        <td>Conservative emotion, brand-3</td>
    </tr>
    <tr>
        <td><code>--cem-color-brown-d</code></td>
        <td>brown</td>
        <td>d</td>
        <td><code>#4e342e</code></td>
        <td>Dark brown</td>
        <td>Conservative palette (dark theme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-brown-xd</code></td>
        <td>brown</td>
        <td>xd</td>
        <td><code>#3e2723</code></td>
        <td>Extra dark brown</td>
        <td>Conservative palette (dark theme, extreme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-cyan-xl</code></td>
        <td>cyan</td>
        <td>xl</td>
        <td><code>#f1fefe</code></td>
        <td>Extra light cyan</td>
        <td>Used for comfort palette (light scenes)</td>
    </tr>
    <tr>
        <td><code>--cem-color-cyan-l</code></td>
        <td>cyan</td>
        <td>l</td>
        <td><code>#00fbfb</code></td>
        <td>Light cyan</td>
        <td>Calm palette, creativity accent</td>
    </tr>
    <tr>
        <td><code>--cem-color-cyan-d</code></td>
        <td>cyan</td>
        <td>d</td>
        <td><code>#006a6a</code></td>
        <td>Dark cyan</td>
        <td>Calm palette (dark theme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-cyan-xd</code></td>
        <td>cyan</td>
        <td>xd</td>
        <td><code>#001010</code></td>
        <td>Extra dark cyan</td>
        <td>Used for comfort palette (dark scenes)</td>
    </tr>
    <tr>
        <td><code>--cem-color-grey-l</code></td>
        <td>grey</td>
        <td>l</td>
        <td><code>#f1f1eb</code></td>
        <td>Light grey</td>
        <td>Conservative palette, neutral backgrounds</td>
    </tr>
    <tr>
        <td><code>--cem-color-grey-d</code></td>
        <td>grey</td>
        <td>d</td>
        <td><code>#1a1c18</code></td>
        <td>Dark grey</td>
        <td>Conservative palette (dark theme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-orange-xl</code></td>
        <td>orange</td>
        <td>xl</td>
        <td><code>#f0f070</code></td>
        <td>Extra light yellow</td>
        <td>Enthusiasm palette (light theme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-orange-l</code></td>
        <td>orange</td>
        <td>l</td>
        <td><code>#ffe082</code></td>
        <td>Light orange</td>
        <td>Enthusiasm emotion, brand-2</td>
    </tr>
    <tr>
        <td><code>--cem-color-orange-d</code></td>
        <td>orange</td>
        <td>d</td>
        <td><code>#723600</code></td>
        <td>Dark orange</td>
        <td>Enthusiasm hype (dark theme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-orange-xd</code></td>
        <td>orange</td>
        <td>xd</td>
        <td><code>#502400</code></td>
        <td>Extra dark orange</td>
        <td>Enthusiasm palette (dark theme, extreme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-purple-xl</code></td>
        <td>purple</td>
        <td>xl</td>
        <td><code>#f3e5f5</code></td>
        <td>Extra light purple</td>
        <td>Creativity palette (light theme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-purple-l</code></td>
        <td>purple</td>
        <td>l</td>
        <td><code>#e1bee7</code></td>
        <td>Light purple</td>
        <td>Creativity emotion, brand-1</td>
    </tr>
    <tr>
        <td><code>--cem-color-purple-d</code></td>
        <td>purple</td>
        <td>d</td>
        <td><code>#6a1b9a</code></td>
        <td>Dark purple</td>
        <td>Creativity palette (dark theme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-purple-xd</code></td>
        <td>purple</td>
        <td>xd</td>
        <td><code>#4a148c</code></td>
        <td>Extra dark purple</td>
        <td>Creativity palette (dark theme, extreme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-red-xl</code></td>
        <td>red</td>
        <td>xl</td>
        <td><code>#ffb4ab</code></td>
        <td>Extra light red</td>
        <td>Danger palette (light theme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-red-l</code></td>
        <td>red</td>
        <td>l</td>
        <td><code>#ba1a1a</code></td>
        <td>Light red</td>
        <td>Danger emotion, alert semantic</td>
    </tr>
    <tr>
        <td><code>--cem-color-red-d</code></td>
        <td>red</td>
        <td>d</td>
        <td><code>#690005</code></td>
        <td>Dark red</td>
        <td>Danger palette (dark theme)</td>
    </tr>
    <tr>
        <td><code>--cem-color-red-xd</code></td>
        <td>red</td>
        <td>xd</td>
        <td><code>#410002</code></td>
        <td>Extra dark red</td>
        <td>Danger palette (dark theme, extreme)</td>
    </tr>
    </tbody>
</table>`,l={args:{title:"KNOWN ISSUE: Multiple IF blocks - out of order",tag:"multi-for-each",template:`
            <div data-testid="whole-text">
                <xsl:variable name="test-data">${x}</xsl:variable>
                <hr/>
                <variable name="cem-color-hue-variant" select="exsl:node-set($test-data)//*[@id='cem-color-hue-variant']/following-sibling::table[1]/tbody"></variable>
                <for-each select="$cem-color-hue-variant/*">
                
                    <div data-testid="color-{position()}"> {./*[1]}</div>
                </for-each>
            </div>
                        
        `,payload:`
            <multi-for-each></multi-for-each>
        `},play:async({canvasElement:a})=>{const t=i(a);e(await await t.findByTestId("color-1")).toBeInTheDocument(),e(await await t.findByText("--cem-color-blue-l")).toBeInTheDocument(),e(await await t.findByTestId("color-26")).toBeInTheDocument(),e(await await t.findByText("--cem-color-red-xd")).toBeInTheDocument()}},c={args:{title:"initially none, on check - all items in order 0 to N. N should be in the end",tag:"for-each-0-to-n",template:`
            <div data-testid="whole-text">
                <xsl:variable name="test-data">${x}</xsl:variable>
                <label><input type="checkbox" data-testid="toggle-all" slice="show-all" value="ALL"  /> ALL </label>
                <variable name="cem-color-hue-variant" select="exsl:node-set($test-data)//*[@id='cem-color-hue-variant']/following-sibling::table[1]/tbody"></variable>
                <variable name="show-all" select="//show-all = 'ALL'"></variable>
<hr/>
                0
                <for-each select="$cem-color-hue-variant/*[ $show-all ]">
                
                    <div data-testid="color-{position()}"> {position()} {./*[1]}</div>
                </for-each>
                N
            </div>
                        
        `,payload:`
            <for-each-0-to-n></for-each-0-to-n>
        `},play:async({canvasElement:a})=>{const t=i(a),d=await t.findByTestId("whole-text");await e(d.textContent).toMatch(/0\s+N/),await m.click(await t.findByTestId("toggle-all")),await t.findByText("1--cem-color-blue-xl"),await e(await t.findByText("1--cem-color-blue-xl")).toBeInTheDocument(),await e(d.textContent).toMatch(/0\s+1--cem-color-blue-xl[\s\S]*26--cem-color-red-xd\s+N/)}},T=`
<rows>
    <r id="1"><d>A1</d><d>A2</d><d>A3</d></r>
    <r id="2"><d>B1</d><d>B2</d><d>B3</d></r>
    <r id="3"><d>C1</d><d>C2</d><d>C3</d></r>
</rows>`,n={args:{title:"Table 3x3: initially empty, rows shown by checkbox, content stays inside table",tag:"for-each-table-3x3",template:`
            <xsl:variable name="rows-data">${T}</xsl:variable>
            <variable name="rows" select="exsl:node-set($rows-data)/*/*"></variable>
            <label><input type="checkbox" data-testid="toggle-rows" slice="show-rows" value="yes" /> Show rows</label>
            <variable name="show-rows" select="//show-rows = 'yes'"></variable>
<pre data-testid="just-text">
JUST_TEXT_BEFORE
    <for-each select="$rows[$show-rows]">
        <for-each select="*">
            {.} #
        </for-each>
    </for-each>
JUST_TEXT_AFTER
</pre>
            <div data-testid="container">
                TEXT_BEFORE
                <xhtml:table data-testid="the-table">
                    <xhtml:thead>
                        <xhtml:tr><xhtml:th>Col A</xhtml:th><xhtml:th>Col B</xhtml:th><xhtml:th>Col C</xhtml:th></xhtml:tr>
                    </xhtml:thead>
                    <xhtml:tbody data-testid="table-body">
                        <for-each select="$rows[$show-rows]">
                            <xhtml:tr data-testid="row-{@id}">
                                <for-each select="*">
                                    <xhtml:td>{.}</xhtml:td>
                                </for-each>
                            </xhtml:tr>
                        </for-each>
                    </xhtml:tbody>
                </xhtml:table>
                TEXT_AFTER
            </div>
        `,payload:`
            <for-each-table-3x3></for-each-table-3x3>
        `},play:async({canvasElement:a})=>{const t=i(a),d=await t.findByTestId("just-text");e(d.textContent).toMatch(/JUST_TEXT_BEFORE[\s\S]*JUST_TEXT_AFTER/);const o=await t.findByTestId("container"),s=await t.findByTestId("the-table"),r=await t.findByTestId("table-body");e(r.querySelectorAll("tr").length).toBe(0),e(o.textContent).toMatch(/TEXT_BEFORE[\s\S]*Col A[\s\S]*TEXT_AFTER/),await m.click(await t.findByTestId("toggle-rows")),e(await t.findByTestId("row-1")).toBeInTheDocument(),e(await t.findByTestId("row-2")).toBeInTheDocument(),e(await t.findByTestId("row-3")).toBeInTheDocument(),e(r.querySelectorAll("tr").length).toBe(3),e(d.textContent).toMatch(/JUST_TEXT_BEFORE[\s\S]*A1 #/),e(d.textContent).toMatch(/C3 #[\s\S]*JUST_TEXT_AFTER/),r.querySelectorAll("tr").forEach(b=>{e(b.parentElement).toBe(r)}),e(o.textContent).toMatch(/TEXT_BEFORE[\s\S]*?Col A[\s\S]*?Col B[\s\S]*?Col C[\s\S]*?A1[\s\S]*?A2[\s\S]*?A3[\s\S]*?B1[\s\S]*?B2[\s\S]*?B3[\s\S]*?C1[\s\S]*?C2[\s\S]*?C3[\s\S]*?TEXT_AFTER/);const h=s.outerHTML;e(h).toContain("A1"),e(h).toContain("C3")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'KNOWN ISSUE: Multiple IF blocks - out of order',
    tag: 'multi-for-each',
    template: \`
            <div data-testid="whole-text">
                <xsl:variable name="test-data">\${Head6Table}</xsl:variable>
                <hr/>
                <variable name="cem-color-hue-variant" select="exsl:node-set($test-data)//*[@id='cem-color-hue-variant']/following-sibling::table[1]/tbody"></variable>
                <for-each select="$cem-color-hue-variant/*">
                
                    <div data-testid="color-{position()}"> {./*[1]}</div>
                </for-each>
            </div>
                        
        \`,
    payload: \`
            <multi-for-each></multi-for-each>
        \`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(await await canvas.findByTestId('color-1')).toBeInTheDocument();
    expect(await await canvas.findByText('--cem-color-blue-l')).toBeInTheDocument();
    expect(await await canvas.findByTestId('color-26')).toBeInTheDocument();
    expect(await await canvas.findByText('--cem-color-red-xd')).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'initially none, on check - all items in order 0 to N. N should be in the end',
    tag: 'for-each-0-to-n',
    template: \`
            <div data-testid="whole-text">
                <xsl:variable name="test-data">\${Head6Table}</xsl:variable>
                <label><input type="checkbox" data-testid="toggle-all" slice="show-all" value="ALL"  /> ALL </label>
                <variable name="cem-color-hue-variant" select="exsl:node-set($test-data)//*[@id='cem-color-hue-variant']/following-sibling::table[1]/tbody"></variable>
                <variable name="show-all" select="//show-all = 'ALL'"></variable>
<hr/>
                0
                <for-each select="$cem-color-hue-variant/*[ $show-all ]">
                
                    <div data-testid="color-{position()}"> {position()} {./*[1]}</div>
                </for-each>
                N
            </div>
                        
        \`,
    payload: \`
            <for-each-0-to-n></for-each-0-to-n>
        \`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('whole-text');
    await expect(container.textContent).toMatch(/0\\s+N/);
    await fireEvent.click(await canvas.findByTestId('toggle-all'));
    await canvas.findByText('1--cem-color-blue-xl');
    await expect(await canvas.findByText('1--cem-color-blue-xl')).toBeInTheDocument();
    // should start with 0 and end with N
    await expect(container.textContent).toMatch(/0\\s+1--cem-color-blue-xl[\\s\\S]*26--cem-color-red-xd\\s+N/);
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Table 3x3: initially empty, rows shown by checkbox, content stays inside table',
    tag: 'for-each-table-3x3',
    template: \`
            <xsl:variable name="rows-data">\${Table3x3Data}</xsl:variable>
            <variable name="rows" select="exsl:node-set($rows-data)/*/*"></variable>
            <label><input type="checkbox" data-testid="toggle-rows" slice="show-rows" value="yes" /> Show rows</label>
            <variable name="show-rows" select="//show-rows = 'yes'"></variable>
<pre data-testid="just-text">
JUST_TEXT_BEFORE
    <for-each select="$rows[$show-rows]">
        <for-each select="*">
            {.} #
        </for-each>
    </for-each>
JUST_TEXT_AFTER
</pre>
            <div data-testid="container">
                TEXT_BEFORE
                <xhtml:table data-testid="the-table">
                    <xhtml:thead>
                        <xhtml:tr><xhtml:th>Col A</xhtml:th><xhtml:th>Col B</xhtml:th><xhtml:th>Col C</xhtml:th></xhtml:tr>
                    </xhtml:thead>
                    <xhtml:tbody data-testid="table-body">
                        <for-each select="$rows[$show-rows]">
                            <xhtml:tr data-testid="row-{@id}">
                                <for-each select="*">
                                    <xhtml:td>{.}</xhtml:td>
                                </for-each>
                            </xhtml:tr>
                        </for-each>
                    </xhtml:tbody>
                </xhtml:table>
                TEXT_AFTER
            </div>
        \`,
    payload: \`
            <for-each-table-3x3></for-each-table-3x3>
        \`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const justTextContainer = await canvas.findByTestId('just-text');
    expect(justTextContainer.textContent).toMatch(/JUST_TEXT_BEFORE[\\s\\S]*JUST_TEXT_AFTER/);
    const container = await canvas.findByTestId('container');
    const table = await canvas.findByTestId('the-table');
    const tbody = await canvas.findByTestId('table-body');

    // Initially no rows visible
    expect(tbody.querySelectorAll('tr').length).toBe(0);
    // TEXT_BEFORE ... TEXT_AFTER with table in between (but no row content)
    expect(container.textContent).toMatch(/TEXT_BEFORE[\\s\\S]*Col A[\\s\\S]*TEXT_AFTER/);

    // Toggle checkbox to show rows
    await fireEvent.click(await canvas.findByTestId('toggle-rows'));

    // Now 3 rows should be visible
    expect(await canvas.findByTestId('row-1')).toBeInTheDocument();
    expect(await canvas.findByTestId('row-2')).toBeInTheDocument();
    expect(await canvas.findByTestId('row-3')).toBeInTheDocument();
    expect(tbody.querySelectorAll('tr').length).toBe(3);
    expect(justTextContainer.textContent).toMatch(/JUST_TEXT_BEFORE[\\s\\S]*A1 #/);
    expect(justTextContainer.textContent).toMatch(/C3 #[\\s\\S]*JUST_TEXT_AFTER/);

    // Verify rows are inside the table (TR should be children of TBODY)
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => {
      expect(row.parentElement).toBe(tbody);
    });

    // Verify table content is between TEXT_BEFORE and TEXT_AFTER
    expect(container.textContent).toMatch(/TEXT_BEFORE[\\s\\S]*?Col A[\\s\\S]*?Col B[\\s\\S]*?Col C[\\s\\S]*?A1[\\s\\S]*?A2[\\s\\S]*?A3[\\s\\S]*?B1[\\s\\S]*?B2[\\s\\S]*?B3[\\s\\S]*?C1[\\s\\S]*?C2[\\s\\S]*?C3[\\s\\S]*?TEXT_AFTER/);

    // Verify no content leaked outside the table
    const tableHtml = table.outerHTML;
    expect(tableHtml).toContain('A1');
    expect(tableHtml).toContain('C3');
  }
}`,...n.parameters?.docs?.source}}};const v=["ForEach","ForEach_0_2_N","ForEach_Table_3x3"];export{l as ForEach,c as ForEach_0_2_N,n as ForEach_Table_3x3,v as __namedExportsOrder,y as default};
