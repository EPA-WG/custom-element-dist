import{w as x,u as y,e as c}from"./index-CGuyH0k-.js";import"./custom-element-CnmjNo0g.js";import"./http-request-BWeEEBkP.js";import"./location-element-hKpcXCdn.js";const g=(l,t)=>{if(l==="text")return t;if(l==="json")try{return JSON.parse(t)}catch{return null}const a=document.createElement("input");return a.setAttribute("type",l),l==="number"?(a.value=t,a.valueAsNumber):l==="date"?t?(a.valueAsDate=new Date(t),a.value):null:(a.value=t,a.value)};let b,S,w;function I(l,t){b.call(localStorage,l,t),window.dispatchEvent(new CustomEvent("local-storage",{detail:{key:l,value:t}}))}function B(l){S.call(localStorage,l),window.dispatchEvent(new CustomEvent("local-storage",{detail:{key:l}}))}function p(){w.call(localStorage),window.dispatchEvent(new CustomEvent("local-storage",{detail:{}}))}function T(){b||(b=localStorage.setItem,localStorage.setItem=I,S=localStorage.removeItem,localStorage.removeItem=B,w=localStorage.clear,localStorage.clear=p)}T();function V(l,t){I(l,t)}class K extends HTMLElement{static observedAttributes=["value","slice","key","type","live"];#e;get value(){return this.#e===null?void 0:this.#e}set value(t){return this.#e=t}async connectedCallback(){const t=i=>this.getAttribute(i),a=()=>{this.#e=g(t("type"),localStorage.getItem(t("key"))),this.dispatchEvent(new Event("change"))};if(this.#e=g(t("type"),localStorage.getItem(t("key"))),this.hasAttribute("value")?V(t("key"),this.#e=t("value")):a(),this.hasAttribute("live")){const i=e=>(e.detail.key===t("key")||!e.detail.key)&&a();window.addEventListener("local-storage",i),T(),this._destroy=()=>window.removeEventListener("local-storage",i)}}disconnectedCallback(){this._destroy?.()}}window.customElements.define("local-storage",K);const r={title:"",slice:"ls-slice",key:"sb-ls-key",value:"",live:"",body:""};function o(l){return new Promise(t=>setTimeout(t,l))}function f(l){const{title:t,slice:a,key:i,value:e,live:n,body:u}={...r,...l};return`
        <fieldset>
            <legend>${t}</legend>

            <custom-element>
<template><!-- wrapping into template to prevent images loading within DCE declaration -->
    <local-storage
        key="${i}"
        slice="${a}"
        ${n?`live="${n}"`:""}
        ${e?`value="${e}"`:""}
        ></local-storage>

    <br/>
    <var>${i}</var>:<code data-testid="slice-value">{ //slice/${a} }</code>
    <br/>
    ${u}
</template>
            </custom-element>
      </fieldset>
  `}const h={title:"local-storage",render:f};window.localStorageSetItem=V;window.localStorage_clear=p;window.localStorage_removeItem=B;const k={args:{title:"live value",live:"live",body:`
    <input placeholder="value for localStorage" id="textinput"
        slice="${r.slice}"
        value="{ //${r.slice} ?? '${r.value}' }"/>
    <button onclick="localStorageSetItem('${r.key}',textinput.value  )">set</button>
    <button onclick="localStorageSetItem('${r.key}','text value'  )">text value</button>
    <button onclick="localStorageSetItem('${r.key}','another text')">another text</button>
    <button onclick="localStorage_removeItem('${r.key}'            )">set blank</button>
`},play:async({canvasElement:l})=>{p();const t=x(l);await t.findByText(k.args.title);const a=()=>t.getByTestId("slice-value").textContent;await y.click(await t.findByText("set blank")),await c(localStorage.getItem(r.key)).toEqual(null,"from localStorage"),await c(a()).toEqual(""),await y.click(t.getByText("text value")),await o(10),await c(localStorage.getItem(r.key)).toEqual("text value","from localStorage"),await c(a()).toEqual("text value"),window.textinput.value="textinput.value",await y.click(t.getByText("set")),await o(10),c(a()).toEqual("textinput.value"),await y.click(t.getByText("another text")),await o(10),c(a()).toEqual("another text"),await y.click(t.getByText("set blank")),await o(10),c(a()).toEqual("")}},m={args:{title:"AlwaysOverride",live:"",value:"ABC",body:`
    buttons are changing the localStorage value, but without 'live' attribute slice ^^ from <i>local-storage</i> is not updated<br/>
    <button onclick="localStorageSetItem('${r.key}','text value')">text value</button>
    <button onclick="localStorage_removeItem('${r.key}')">set blank</button>
    `},play:async({canvasElement:l})=>{const t=x(l);await t.findByText(m.args.title);const a=()=>t.getByTestId("slice-value").textContent,i=async e=>await y.click(await t.findByText(e));await o(10),await c(localStorage.getItem(r.key)).toEqual("ABC"),await i("set blank"),await c(localStorage.getItem(r.key)).toEqual(null,"from localStorage"),await o(10),await c(a()).toEqual("ABC"),await i("text value"),await o(10),await c(localStorage.getItem(r.key)).toEqual("text value","from localStorage"),await c(a()).toEqual("ABC"),await i("set blank"),await o(10),await c(a()).toEqual("ABC")}},d={args:{title:"live value with defaults",live:"",value:"ABC",body:`

    <local-storage key="attr2Key" slice="attr2-key" type="text" live="live" slice-value="@value ?? 'DEF2'"></local-storage>
    <button onclick="localStorage_removeItem('attr2Key')">clear key</button>
    <button onclick="localStorageSetItem('attr2Key','attr2Key value')">update attr2-key value</button>
    //attr2-key: <code data-testid="key2-value">{//attr2-key}</code><br/>

    <local-storage key="attr3Key" slice="attr3-key" type="text" live="live" slice-value="@value ?? 'DEF3'"></local-storage>
    <button onclick="localStorage_removeItem('attr3Key')">clear attr3-key key</button>
    <button onclick="localStorageSetItem('attr3Key','attr3Key value')">update attr3-key value</button>
    //attr3-key: <code data-testid="key3-value">{//attr3-key}</code><br/>
    <button onclick="localStorage_clear()">clear localStorage</button>
    `},play:async({canvasElement:l})=>{const t=x(l);await t.findByText(d.args.title);const a=i=>t.getByText(i);c(localStorage.getItem(r.key)).toEqual("ABC","from localStorage"),a("clear localStorage").click(),c(t.getByTestId("slice-value").textContent).toEqual("ABC"),c(t.getByTestId("key2-value").textContent).toEqual("DEF2"),c(t.getByTestId("key3-value").textContent).toEqual("DEF3"),a("update attr2-key value").click(),c(localStorage.getItem("attr2Key")).toEqual("attr2Key value","from localStorage"),await o(10),c(t.getByTestId("slice-value").textContent).toEqual("ABC"),c(t.getByTestId("key2-value").textContent).toEqual("attr2Key value"),c(t.getByTestId("key3-value").textContent).toEqual("DEF3"),a("update attr3-key value").click(),c(localStorage.getItem("attr3Key")).toEqual("attr3Key value","from localStorage"),await o(10),c(t.getByTestId("slice-value").textContent).toEqual("ABC"),c(t.getByTestId("key2-value").textContent).toEqual("attr2Key value"),c(t.getByTestId("key3-value").textContent).toEqual("attr3Key value")}},v={args:{title:"local-storage type attribute variations",body:`

                <local-storage key="textKey" slice="text-key" type="text" live="live"></local-storage>
                <local-storage key="dateKey" slice="date-key" type="date" live="live"></local-storage>
                <local-storage key="timeKey" slice="time-key" type="time" live="live"></local-storage>
                <local-storage key="localDateTimeKey" slice="local-date-time" type="datetime-local" live="live"></local-storage>
                <local-storage key="numberKey" slice="number-key" type="number" live="live"></local-storage>
                <local-storage key="jsonKey" slice="json-key" type="json" live="live"></local-storage>
                <input id="typesinput" placeholder="set value"><button onclick="
                        'textKey,dateKey,timeKey,localDateTimeKey,numberKey,jsonKey'.split(',')
                            .map( k=> localStorageSetItem(k, typesinput.value) )
                    "> set to all</button><br>
                <hr>
                text-key:
                    <button onclick="localStorageSetItem('textKey', 'ABC'  )">ABC</button>
                    <code data-testid="text-key">{//text-key       }</code><br>
                date-key:
                    <button onclick="localStorageSetItem('dateKey', '2024-04-20T03:58:42.131Z')">2024-04-21T03:58:42.131Z           </button>
                    <button onclick="localStorageSetItem('dateKey', new Date(Date.now()).toISOString())">now                                </button>
                    <button onclick="localStorageSetItem('dateKey', 'ABC'  )">date ABC - invalid                 </button>
                    <code data-testid="date-key">{//date-key       }</code><br>
                time-key:
                    <button onclick="localStorageSetItem('timeKey', '13:30')">13:30                              </button>
                    <code data-testid="time-key">{//time-key       }</code><br>
                local-date-time:
                    <button onclick="localStorageSetItem('localDateTimeKey', '1977-04-01T14:00:30')">1977-04-01T14:00:30 - local       </button>
                    <code data-testid="local-date-time">{//local-date-time}</code><br>
                number-key:
                    <button onclick="localStorageSetItem('numberKey', '2024'       )">2024 - number                      </button>
                    <button onclick="localStorageSetItem('numberKey', '24'         )">24   - number                      </button>
                    <button onclick="localStorageSetItem('numberKey', '1.23456e+5' )">1.23456e+5                         </button>
                    <button onclick="localStorageSetItem('numberKey', '0001'       )">0001                               </button>
                    <button onclick="localStorageSetItem('numberKey', '000'        )">000                                </button>
                    <button onclick="localStorageSetItem('numberKey', '0'          )">0                                  </button>
                    <button onclick="localStorageSetItem('numberKey', 'ABC'        )">ABC - invalid, NaN                 </button>
                    <code data-testid="number-key">{//number-key     }</code> <br>
                <fieldset>
                    <legend>json-key: </legend>

                    <button onclick="localStorageSetItem('jsonKey', JSON.stringify('ABC'))">'ABC'   - string  </button>
                    <button onclick="localStorageSetItem('jsonKey', JSON.stringify(12.345))">12.345  - number  </button>
                    <button onclick="localStorageSetItem('jsonKey', JSON.stringify(window.JsonSample) )">a:1,b:'B'  -json  </button>
                    <button onclick="localStorageSetItem('jsonKey', 'ABC'  )">ABC - invalid     </button><br>
                    json-key:<code data-testid="json-key"><xsl:apply-templates select="//json-key/value/@*|//json-key/text()|//json-key/value/text()" mode="json"></xsl:apply-templates></code>
                </fieldset>
                <xsl:template mode="json" match="*|@*">
                    <div>{name()} : {.}</div>
            </xsl:template>
    `},play:async({canvasElement:l})=>{window.JsonSample={a:1,b:"B"};const t=x(l);await t.findByText(v.args.title);const a=s=>t.getByText(s),i=s=>t.getByTestId(s).textContent,e=(s,E)=>{c(i(s).trim()).toEqual(E,s)};p(),await o(10),e("text-key",""),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","NaN"),e("json-key","");const n=l.querySelector("input");n.value="ABC",a("set to all").click(),await o(10),e("text-key","ABC"),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","NaN"),e("json-key",""),n.value="22",a("set to all").click(),await o(10),e("text-key","22"),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","22"),e("json-key","22"),n.value="2024",a("set to all").click(),await o(10),e("text-key","2024"),e("date-key","2024-01-01"),e("time-key",""),e("local-date-time",""),e("number-key","2024"),e("json-key","2024"),n.value="2024-04-20T03:58:42.131Z",a("set to all").click(),await o(10),e("text-key","2024-04-20T03:58:42.131Z"),e("date-key","2024-04-20"),e("time-key",""),e("local-date-time",""),e("number-key","NaN"),e("json-key","");const u=new Date(Date.now()).toISOString();n.value=u,a("set to all").click(),await o(10),e("text-key",u),e("date-key",u.substring(0,10)),e("time-key",""),e("local-date-time",""),e("number-key","NaN"),e("json-key",""),n.value="23:25",a("set to all").click(),await o(10),e("text-key","23:25"),e("date-key",""),e("time-key","23:25"),e("local-date-time",""),e("number-key","NaN"),e("json-key",""),n.value="1977-04-01T14:00:30",a("set to all").click(),await o(10),e("text-key","1977-04-01T14:00:30"),e("date-key","1977-04-01"),e("time-key",""),e("local-date-time","1977-04-01T14:00:30"),e("number-key","NaN"),e("json-key",""),n.value="1.23456e+5",a("set to all").click(),await o(10),e("text-key","1.23456e+5"),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","123456"),e("json-key","123456"),n.value="0001",a("set to all").click(),await o(10),e("text-key","0001"),e("date-key","0001-01-01"),e("time-key",""),e("local-date-time",""),e("number-key","1"),e("json-key",""),n.value="001",a("set to all").click(),await o(10),e("text-key","001"),e("date-key","2001-01-01"),e("time-key",""),e("local-date-time",""),e("number-key","1"),e("json-key",""),n.value="000",a("set to all").click(),await o(10),e("text-key","000"),e("date-key","2000-01-01"),e("time-key",""),e("local-date-time",""),e("number-key","0"),e("json-key",""),n.value="0",a("set to all").click(),await o(10),e("text-key","0"),e("date-key","2000-01-01"),e("time-key",""),e("local-date-time",""),e("number-key","0"),e("json-key","0"),n.value='"abc"',a("set to all").click(),await o(10),e("text-key",'"abc"'),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","NaN"),e("json-key","abc"),n.value="12.345",a("set to all").click(),await o(10),e("text-key","12.345"),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","12.345"),e("json-key","12.345"),n.value='{"a":1,"b":"B"}',a("set to all").click(),await o(10),e("text-key",'{"a":1,"b":"B"}'),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","NaN"),e("json-key","a : 1b : B")}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'live value',
    live: 'live',
    body: \`
    <input placeholder="value for localStorage" id="textinput"
        slice="\${defs.slice}"
        value="{ //\${defs.slice} ?? '\${defs.value}' }"/>
    <button onclick="localStorageSetItem('\${defs.key}',textinput.value  )">set</button>
    <button onclick="localStorageSetItem('\${defs.key}','text value'  )">text value</button>
    <button onclick="localStorageSetItem('\${defs.key}','another text')">another text</button>
    <button onclick="localStorage_removeItem('\${defs.key}'            )">set blank</button>
\`
  },
  play: async ({
    canvasElement
  }) => {
    localStorage_clear();
    const canvas = within(canvasElement);
    await canvas.findByText(Demo.args!.title as string);
    const val = () => canvas.getByTestId('slice-value').textContent;
    await userEvent.click(await canvas.findByText('set blank'));
    await expect(localStorage.getItem(defs.key)).toEqual(null, 'from localStorage');
    await expect(val()).toEqual('');
    await userEvent.click(canvas.getByText('text value'));
    await sleep(10);
    await expect(localStorage.getItem(defs.key)).toEqual('text value', 'from localStorage');
    await expect(val()).toEqual('text value');
    window['textinput'].value = 'textinput.value';
    await userEvent.click(canvas.getByText('set'));
    await sleep(10);
    expect(val()).toEqual('textinput.value');
    await userEvent.click(canvas.getByText('another text'));
    await sleep(10);
    expect(val()).toEqual('another text');
    await userEvent.click(canvas.getByText('set blank'));
    await sleep(10);
    expect(val()).toEqual('');
  }
}`,...k.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'AlwaysOverride',
    live: '',
    value: 'ABC',
    body: \`
    buttons are changing the localStorage value, but without 'live' attribute slice ^^ from <i>local-storage</i> is not updated<br/>
    <button onclick="localStorageSetItem('\${defs.key}','text value')">text value</button>
    <button onclick="localStorage_removeItem('\${defs.key}')">set blank</button>
    \`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(AlwaysOverride.args!.title as string);
    const val = () => canvas.getByTestId('slice-value').textContent;
    const click = async text => await userEvent.click(await canvas.findByText(text));
    await sleep(10);
    await expect(localStorage.getItem(defs.key)).toEqual('ABC');
    await click('set blank');
    await expect(localStorage.getItem(defs.key)).toEqual(null, 'from localStorage');
    await sleep(10);
    await expect(val()).toEqual('ABC');
    await click('text value');
    await sleep(10);
    await expect(localStorage.getItem(defs.key)).toEqual('text value', 'from localStorage');
    await expect(val()).toEqual('ABC');
    await click('set blank');
    await sleep(10);
    await expect(val()).toEqual('ABC');
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'live value with defaults',
    live: '',
    value: 'ABC',
    body: \`

    <local-storage key="attr2Key" slice="attr2-key" type="text" live="live" slice-value="@value ?? 'DEF2'"></local-storage>
    <button onclick="localStorage_removeItem('attr2Key')">clear key</button>
    <button onclick="localStorageSetItem('attr2Key','attr2Key value')">update attr2-key value</button>
    //attr2-key: <code data-testid="key2-value">{//attr2-key}</code><br/>

    <local-storage key="attr3Key" slice="attr3-key" type="text" live="live" slice-value="@value ?? 'DEF3'"></local-storage>
    <button onclick="localStorage_removeItem('attr3Key')">clear attr3-key key</button>
    <button onclick="localStorageSetItem('attr3Key','attr3Key value')">update attr3-key value</button>
    //attr3-key: <code data-testid="key3-value">{//attr3-key}</code><br/>
    <button onclick="localStorage_clear()">clear localStorage</button>
    \`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(FromStorageWithDefault.args!.title as string);
    const byText = txt => canvas.getByText(txt);
    expect(localStorage.getItem(defs.key)).toEqual('ABC', 'from localStorage');
    byText('clear localStorage').click();
    expect(canvas.getByTestId('slice-value').textContent).toEqual('ABC');
    expect(canvas.getByTestId('key2-value').textContent).toEqual('DEF2');
    expect(canvas.getByTestId('key3-value').textContent).toEqual('DEF3');
    byText('update attr2-key value').click();
    expect(localStorage.getItem('attr2Key')).toEqual('attr2Key value', 'from localStorage');
    await sleep(10);
    expect(canvas.getByTestId('slice-value').textContent).toEqual('ABC');
    expect(canvas.getByTestId('key2-value').textContent).toEqual('attr2Key value');
    expect(canvas.getByTestId('key3-value').textContent).toEqual('DEF3');
    byText('update attr3-key value').click();
    expect(localStorage.getItem('attr3Key')).toEqual('attr3Key value', 'from localStorage');
    await sleep(10);
    expect(canvas.getByTestId('slice-value').textContent).toEqual('ABC');
    expect(canvas.getByTestId('key2-value').textContent).toEqual('attr2Key value');
    expect(canvas.getByTestId('key3-value').textContent).toEqual('attr3Key value');
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'local-storage type attribute variations',
    body: \`

                <local-storage key="textKey" slice="text-key" type="text" live="live"></local-storage>
                <local-storage key="dateKey" slice="date-key" type="date" live="live"></local-storage>
                <local-storage key="timeKey" slice="time-key" type="time" live="live"></local-storage>
                <local-storage key="localDateTimeKey" slice="local-date-time" type="datetime-local" live="live"></local-storage>
                <local-storage key="numberKey" slice="number-key" type="number" live="live"></local-storage>
                <local-storage key="jsonKey" slice="json-key" type="json" live="live"></local-storage>
                <input id="typesinput" placeholder="set value"><button onclick="
                        'textKey,dateKey,timeKey,localDateTimeKey,numberKey,jsonKey'.split(',')
                            .map( k=> localStorageSetItem(k, typesinput.value) )
                    "> set to all</button><br>
                <hr>
                text-key:
                    <button onclick="localStorageSetItem('textKey', 'ABC'  )">ABC</button>
                    <code data-testid="text-key">{//text-key       }</code><br>
                date-key:
                    <button onclick="localStorageSetItem('dateKey', '2024-04-20T03:58:42.131Z')">2024-04-21T03:58:42.131Z           </button>
                    <button onclick="localStorageSetItem('dateKey', new Date(Date.now()).toISOString())">now                                </button>
                    <button onclick="localStorageSetItem('dateKey', 'ABC'  )">date ABC - invalid                 </button>
                    <code data-testid="date-key">{//date-key       }</code><br>
                time-key:
                    <button onclick="localStorageSetItem('timeKey', '13:30')">13:30                              </button>
                    <code data-testid="time-key">{//time-key       }</code><br>
                local-date-time:
                    <button onclick="localStorageSetItem('localDateTimeKey', '1977-04-01T14:00:30')">1977-04-01T14:00:30 - local       </button>
                    <code data-testid="local-date-time">{//local-date-time}</code><br>
                number-key:
                    <button onclick="localStorageSetItem('numberKey', '2024'       )">2024 - number                      </button>
                    <button onclick="localStorageSetItem('numberKey', '24'         )">24   - number                      </button>
                    <button onclick="localStorageSetItem('numberKey', '1.23456e+5' )">1.23456e+5                         </button>
                    <button onclick="localStorageSetItem('numberKey', '0001'       )">0001                               </button>
                    <button onclick="localStorageSetItem('numberKey', '000'        )">000                                </button>
                    <button onclick="localStorageSetItem('numberKey', '0'          )">0                                  </button>
                    <button onclick="localStorageSetItem('numberKey', 'ABC'        )">ABC - invalid, NaN                 </button>
                    <code data-testid="number-key">{//number-key     }</code> <br>
                <fieldset>
                    <legend>json-key: </legend>

                    <button onclick="localStorageSetItem('jsonKey', JSON.stringify('ABC'))">'ABC'   - string  </button>
                    <button onclick="localStorageSetItem('jsonKey', JSON.stringify(12.345))">12.345  - number  </button>
                    <button onclick="localStorageSetItem('jsonKey', JSON.stringify(window.JsonSample) )">a:1,b:'B'  -json  </button>
                    <button onclick="localStorageSetItem('jsonKey', 'ABC'  )">ABC - invalid     </button><br>
                    json-key:<code data-testid="json-key"><xsl:apply-templates select="//json-key/value/@*|//json-key/text()|//json-key/value/text()" mode="json"></xsl:apply-templates></code>
                </fieldset>
                <xsl:template mode="json" match="*|@*">
                    <div>{name()} : {.}</div>
            </xsl:template>
    \`
  },
  play: async ({
    canvasElement
  }) => {
    window['JsonSample'] = {
      a: 1,
      b: 'B'
    };
    const canvas = within(canvasElement);
    await canvas.findByText(TypeAttribute.args!.title as string);
    const byText = txt => canvas.getByText(txt),
      val = testId => canvas.getByTestId(testId).textContent,
      expectVal = (key, value) => {
        expect(val(key).trim()).toEqual(value, key);
      };
    localStorage_clear(); // cleanup before test
    await sleep(10);
    expectVal('text-key', '');
    expectVal('date-key', '');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', 'NaN');
    expectVal('json-key', '');
    const input = canvasElement.querySelector('input');
    input.value = 'ABC';
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', 'ABC');
    expectVal('date-key', '');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', 'NaN');
    expectVal('json-key', '');
    input.value = '22';
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '22');
    expectVal('date-key', '');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', '22');
    expectVal('json-key', '22');
    input.value = '2024';
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '2024');
    expectVal('date-key', '2024-01-01');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', '2024');
    expectVal('json-key', '2024');
    input.value = '2024-04-20T03:58:42.131Z';
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '2024-04-20T03:58:42.131Z');
    expectVal('date-key', '2024-04-20');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', 'NaN');
    expectVal('json-key', '');
    const nowStr = new Date(Date.now()).toISOString();
    input.value = nowStr;
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', nowStr);
    expectVal('date-key', nowStr.substring(0, 10));
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', 'NaN');
    expectVal('json-key', '');
    input.value = '23:25';
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '23:25');
    expectVal('date-key', '');
    expectVal('time-key', '23:25');
    expectVal('local-date-time', '');
    expectVal('number-key', 'NaN');
    expectVal('json-key', '');
    input.value = '1977-04-01T14:00:30';
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '1977-04-01T14:00:30');
    expectVal('date-key', '1977-04-01');
    expectVal('time-key', '');
    expectVal('local-date-time', '1977-04-01T14:00:30');
    expectVal('number-key', 'NaN');
    expectVal('json-key', '');
    input.value = '1.23456e+5';
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '1.23456e+5');
    expectVal('date-key', '');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', '123456');
    expectVal('json-key', '123456');
    input.value = '0001'; // as YYYY for year
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '0001');
    expectVal('date-key', '0001-01-01');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', '1');
    expectVal('json-key', '');
    input.value = '001'; // as 2001 year
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '001');
    expectVal('date-key', '2001-01-01');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', '1');
    expectVal('json-key', '');
    input.value = '000'; // as 2001 year
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '000');
    expectVal('date-key', '2000-01-01');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', '0');
    expectVal('json-key', '');
    input.value = '0'; // as 2000 year
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '0');
    expectVal('date-key', '2000-01-01');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', '0');
    expectVal('json-key', '0');
    input.value = '"abc"';
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '"abc"');
    expectVal('date-key', '');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', 'NaN');
    expectVal('json-key', 'abc');
    input.value = '12.345';
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '12.345');
    expectVal('date-key', '');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', '12.345');
    expectVal('json-key', '12.345');
    input.value = '{"a":1,"b":"B"}';
    byText('set to all').click();
    await sleep(10);
    expectVal('text-key', '{"a":1,"b":"B"}');
    expectVal('date-key', '');
    expectVal('time-key', '');
    expectVal('local-date-time', '');
    expectVal('number-key', 'NaN');
    expectVal('json-key', 'a : 1b : B');
  }
}`,...v.parameters?.docs?.source}}};const N=["Demo","AlwaysOverride","FromStorageWithDefault","TypeAttribute"];export{m as AlwaysOverride,k as Demo,d as FromStorageWithDefault,v as TypeAttribute,N as __namedExportsOrder,h as default};
