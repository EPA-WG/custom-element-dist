import{w as d,e as a,u as c,f as u}from"./custom-element-D8hcDZHh.js";import"./index-C8k3Z-3Y.js";function p(n){return new Promise(e=>setTimeout(e,n))}function m(n){const{title:e,body:t}=n;return`
        <fieldset>
            <legend>${e}</legend>
            ${t}
        </fieldset>
  `}const h={title:"dom-merge",render:m},s={args:{title:"Chars count in textarea",body:`
    <p>Counter update happens on change event(focus change). The update should not interfere with the input</p>
    <custom-element>
        <form>
            <label>
                <textarea slice="text-container" data-testid="textarea-id">Hello world!</textarea>
                <span> Chars count:
                    <code data-testid="counter-id">{string-length(//slice/text-container/text())}</code>
                </span>
            </label>
             <br/><input placeholder="after textarea input, click here " data-testid="refocus-id" />
        </form>
    </custom-element>
`},play:async({canvasElement:n})=>{const e=s.args.title,t=d(n);await t.findByText(e),await p(100),a(await t.findByTestId("textarea-id")).toBeInTheDocument();const i=t.getByTestId("textarea-id");i.value="",i.focus(),await c.keyboard(e),a(i.value).toEqual(e),a(i.value.length).toEqual(e.length),t.getByTestId("refocus-id").focus(),await p(10),a(t.getByTestId("counter-id").textContent).toEqual(""+e?.length,"counter of symbols")}},o={args:{title:"Word count in HTML input field",body:`
    <p>Counter update happens on keyup event. The update should not interfere with the input</p>
    <custom-element>
            <form>
                <label>
                    <input type="text" value="{//txt ?? 'Type time update'}" slice="txt" slice-event="init input" data-testid="input-id">

                    <span> Character count:
                        <code data-testid="chars-id"
                            >{
                                string-length(//slice/txt)
                            }</code>
                    </span>
                    <span> Word count:
                        <code data-testid="words-id"
                            >{
                                string-length(normalize-space(//slice/txt)) -
                                string-length(translate(normalize-space(//slice/txt), ' ', '')) + 1
                            }</code>
                        <!-- The expression first normalizes the string by removing leading and trailing whitespace and
                            collapsing internal whitespace into a single space. It then subtracts the length of the string
                            with all spaces removed from the length of the original string,
                            and adds 1 to account for the last word.
                        -->
                    </span>

                </label>
                <p><b>txt</b> slice:</p> <blockquote> {//slice/txt} </blockquote>
            </form>
        </custom-element>
`},play:async({canvasElement:n})=>{const e=o.args.title,t=d(n);await t.findByText(e);const i=await t.findByTestId("input-id");i.value="",i.focus(),a(i).toBeInTheDocument(),await c.keyboard(e),await p(10),a(i.value).toEqual(e),a(t.getByTestId("chars-id").textContent.trim()).toEqual(""+e.length,"counter of symbols"),a(e.split(" ").length).toEqual(6,"counter of words in text sample"),a(t.getByTestId("words-id").textContent.trim()).toEqual("6","counter of words in render")}},r={args:{title:"Order preserving on 2nd transform",body:`
    <p>IF condition content should be displayed in place where it is defined (not shifted down on the parent children)</p>
    <custom-element>
        <form slice="f1">
            <label data-testid="cb1">
                <input type="checkbox"  name="c1" />
                click to display #1 bellow
            </label>
            <br data-testid="beforeC1"/>
            <if test="//c1">
                <p data-testid="isC1">#1</p>
            </if>
            <label data-testid="cb2">
                <input type="checkbox"  name="c2" />
                click to display #2 bellow
            </label>
            <br data-testid="beforeC2"/>
            <if test="//c2">
                <p>#2</p>
            </if>
        </form>
    </custom-element>
`},play:async({canvasElement:n})=>{const e=r.args.title,t=d(n);await t.findByText(e),await u.click(await t.findByTestId("cb1")),await a(await t.findByText("#1")).toBeInTheDocument(),await u.click(t.getByTestId("cb2")),await a(await t.findByText("#2")).toBeInTheDocument(),await a(t.getByTestId("beforeC1").nextElementSibling).toEqual(t.getByTestId("isC1"))}},l={args:{title:"read system validity message",body:`
    <p>validationMessage propagated into slice as 'validation-message' attribute</p>
    <ol>
        <li> type in input field</li>
        <li> delete input field content</li>
        <li> observe the warning in string after input</li>
        <li> Click Next observe the system warning in dropdown over input</li>
    </ol>
    <custom-element>
        <template>
            <form slice="email-form">
                <label> Email
                    <input slice="username" slice-event="input" placeholder="non-empty" required data-testid="inp1">
                </label>
                <if test="//username/@validation-message">
                    <var data-testid="var1">{//username/@validation-message}</var>
                </if>
                <button data-testid="btn1">Next</button>
            </form>
        </template>
    </custom-element>
`},play:async({canvasElement:n})=>{const e=l.args.title,t=d(n);await t.findByText(e),await c.type(t.getByTestId("inp1"),"Hi"),await c.clear(t.getByTestId("inp1")),await c.click(t.getByTestId("btn1")),await a(await t.findByTestId("var1")).toBeInTheDocument(),await a(t.getByTestId("var1").textContent).toEqual(t.getByTestId("inp1").validationMessage),await a(t.getByTestId("var1").textContent.length>1).toEqual(!0)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Chars count in textarea',
    body: \`
    <p>Counter update happens on change event(focus change). The update should not interfere with the input</p>
    <custom-element>
        <form>
            <label>
                <textarea slice="text-container" data-testid="textarea-id">Hello world!</textarea>
                <span> Chars count:
                    <code data-testid="counter-id">{string-length(//slice/text-container/text())}</code>
                </span>
            </label>
             <br/><input placeholder="after textarea input, click here " data-testid="refocus-id" />
        </form>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = (CharsCountInTextarea.args!.title as string);
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    await sleep(100);
    expect(await canvas.findByTestId('textarea-id')).toBeInTheDocument();
    const textarea = canvas.getByTestId('textarea-id');
    textarea.value = '';
    textarea.focus();
    await userEvent.keyboard(titleText);
    expect(textarea.value).toEqual(titleText);
    expect(textarea.value.length).toEqual(titleText.length);
    canvas.getByTestId('refocus-id').focus();
    await sleep(10);
    expect(canvas.getByTestId('counter-id').textContent).toEqual('' + titleText?.length, 'counter of symbols');
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Word count in HTML input field',
    body: \`
    <p>Counter update happens on keyup event. The update should not interfere with the input</p>
    <custom-element>
            <form>
                <label>
                    <input type="text" value="{//txt ?? 'Type time update'}" slice="txt" slice-event="init input" data-testid="input-id">

                    <span> Character count:
                        <code data-testid="chars-id"
                            >{
                                string-length(//slice/txt)
                            }</code>
                    </span>
                    <span> Word count:
                        <code data-testid="words-id"
                            >{
                                string-length(normalize-space(//slice/txt)) -
                                string-length(translate(normalize-space(//slice/txt), ' ', '')) + 1
                            }</code>
                        <!-- The expression first normalizes the string by removing leading and trailing whitespace and
                            collapsing internal whitespace into a single space. It then subtracts the length of the string
                            with all spaces removed from the length of the original string,
                            and adds 1 to account for the last word.
                        -->
                    </span>

                </label>
                <p><b>txt</b> slice:</p> <blockquote> {//slice/txt} </blockquote>
            </form>
        </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = (WordCountOnType.args!.title as string);
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    const input = await canvas.findByTestId('input-id');
    input.value = '';
    input.focus();
    expect(input).toBeInTheDocument();
    await userEvent.keyboard(titleText);
    await sleep(10);
    expect(input.value).toEqual(titleText);
    expect(canvas.getByTestId('chars-id').textContent.trim()).toEqual('' + titleText.length, 'counter of symbols');
    expect(titleText.split(' ').length).toEqual(6, 'counter of words in text sample');
    expect(canvas.getByTestId('words-id').textContent.trim()).toEqual('6', 'counter of words in render');
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Order preserving on 2nd transform',
    body: \`
    <p>IF condition content should be displayed in place where it is defined (not shifted down on the parent children)</p>
    <custom-element>
        <form slice="f1">
            <label data-testid="cb1">
                <input type="checkbox"  name="c1" />
                click to display #1 bellow
            </label>
            <br data-testid="beforeC1"/>
            <if test="//c1">
                <p data-testid="isC1">#1</p>
            </if>
            <label data-testid="cb2">
                <input type="checkbox"  name="c2" />
                click to display #2 bellow
            </label>
            <br data-testid="beforeC2"/>
            <if test="//c2">
                <p>#2</p>
            </if>
        </form>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = (OrderPreservingOn2ndTransform.args!.title as string);
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);

    // userEvent breaks under FF in vitest, fireEvent works
    await fireEvent.click(await canvas.findByTestId('cb1'));
    await expect(await canvas.findByText('#1')).toBeInTheDocument();
    await fireEvent.click(canvas.getByTestId('cb2'));
    await expect(await canvas.findByText('#2')).toBeInTheDocument();
    await expect(canvas.getByTestId("beforeC1").nextElementSibling).toEqual(canvas.getByTestId("isC1"));
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'read system validity message',
    body: \`
    <p>validationMessage propagated into slice as 'validation-message' attribute</p>
    <ol>
        <li> type in input field</li>
        <li> delete input field content</li>
        <li> observe the warning in string after input</li>
        <li> Click Next observe the system warning in dropdown over input</li>
    </ol>
    <custom-element>
        <template>
            <form slice="email-form">
                <label> Email
                    <input slice="username" slice-event="input" placeholder="non-empty" required data-testid="inp1">
                </label>
                <if test="//username/@validation-message">
                    <var data-testid="var1">{//username/@validation-message}</var>
                </if>
                <button data-testid="btn1">Next</button>
            </form>
        </template>
    </custom-element>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = (ReadSystemValidityMessage.args!.title as string);
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    await userEvent.type(canvas.getByTestId('inp1'), 'Hi');
    await userEvent.clear(canvas.getByTestId('inp1'));
    await userEvent.click(canvas.getByTestId('btn1'));
    await expect(await canvas.findByTestId('var1')).toBeInTheDocument();
    await expect(canvas.getByTestId("var1").textContent).toEqual(canvas.getByTestId("inp1").validationMessage);
    await expect(canvas.getByTestId("var1").textContent.length > 1).toEqual(true);
  }
}`,...l.parameters?.docs?.source}}};const y=["CharsCountInTextarea","WordCountOnType","OrderPreservingOn2ndTransform","ReadSystemValidityMessage"];export{s as CharsCountInTextarea,r as OrderPreservingOn2ndTransform,l as ReadSystemValidityMessage,o as WordCountOnType,y as __namedExportsOrder,h as default};
