import{w as x,e as a,u as g}from"./index-BASH1HpE.js";import"./custom-element--HC2GPP6.js";function r(s){return new Promise(t=>setTimeout(t,s))}function m(s){const{title:t,body:e}=s;return`
        <fieldset>
            <legend>${t}</legend>
            ${e}
        </fieldset>
  `}const y={title:"dom-merge",render:m},o={args:{title:"Chars count in textarea",body:`
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
`},play:async({canvasElement:s})=>{const t=o.args.title,e=x(s);await e.findByText(t),await r(100),a(await e.findByTestId("textarea-id")).toBeInTheDocument();const n=e.getByTestId("textarea-id");n.value="",n.focus(),await g.keyboard(t),a(n.value).toEqual(t),a(n.value.length).toEqual(t.length);debugger;e.getByTestId("refocus-id").focus(),await r(10),a(e.getByTestId("counter-id").textContent).toEqual(""+(t==null?void 0:t.length),"counter of symbols")}},i={args:{title:"Word count in HTML input field",body:`
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
`},play:async({canvasElement:s})=>{const t=i.args.title,e=x(s);await e.findByText(t);const n=await e.findByTestId("input-id");n.value="",n.focus(),a(n).toBeInTheDocument(),await g.keyboard(t),await r(10),a(n.value).toEqual(t),a(e.getByTestId("chars-id").textContent.trim()).toEqual(""+t.length,"counter of symbols"),a(t.split(" ").length).toEqual(6,"counter of words in text sample"),a(e.getByTestId("words-id").textContent.trim()).toEqual("6","counter of words in render")}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    debugger;
    canvas.getByTestId('refocus-id').focus();
    await sleep(10);
    expect(canvas.getByTestId('counter-id').textContent).toEqual('' + titleText?.length, 'counter of symbols');
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const w=["CharsCountInTextarea","WordCountOnType"];export{o as CharsCountInTextarea,i as WordCountOnType,w as __namedExportsOrder,y as default};
