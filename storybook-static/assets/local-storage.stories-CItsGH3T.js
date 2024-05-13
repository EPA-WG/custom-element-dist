var Z=Object.defineProperty;var L=(l,a,t)=>a in l?Z(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;var S=(l,a,t)=>(L(l,typeof a!="symbol"?a+"":a,t),t),w=(l,a,t)=>{if(!a.has(l))throw TypeError("Cannot "+t)};var v=(l,a,t)=>(w(l,a,"read from private field"),t?t.call(l):a.get(l)),I=(l,a,t)=>{if(a.has(l))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(l):a.set(l,t)},k=(l,a,t,c)=>(w(l,a,"write to private field"),c?c.call(l,t):a.set(l,t),t);import{w as p,e as o}from"./index-BASH1HpE.js";import"./custom-element--HC2GPP6.js";const T=(l,a)=>{if(l==="text")return a;if(l==="json")try{return JSON.parse(a)}catch{return null}const t=document.createElement("input");return t.setAttribute("type",l),l==="number"?(t.value=a,t.valueAsNumber):l==="date"?a?(t.valueAsDate=new Date(a),t.value):null:(t.value=a,t.value)};let g,V,B;function Y(){g||(g=localStorage.setItem,localStorage.setItem=function(l,a,...t){g.apply(this,[l,a,...t]),window.dispatchEvent(new CustomEvent("local-storage",{detail:{key:l,value:a}}))},V=localStorage.removeItem,localStorage.removeItem=function(l,...a){V.apply(this,[l,...a]),window.dispatchEvent(new CustomEvent("local-storage",{detail:{key:l}}))},B=localStorage.clear,localStorage.clear=function(...l){B.apply(this,[...l]),window.dispatchEvent(new CustomEvent("local-storage",{detail:{}}))})}function _(l,a){localStorage.setItem(l,a),window.dispatchEvent(new CustomEvent("local-storage",{detail:{key:l,value:a}}))}var r;class F extends HTMLElement{constructor(){super(...arguments);I(this,r,void 0)}get value(){return v(this,r)===null?void 0:v(this,r)}set value(t){return k(this,r,t)}async connectedCallback(){const t=e=>this.getAttribute(e),c=()=>{k(this,r,T(t("type"),localStorage.getItem(t("key")))),this.dispatchEvent(new Event("change"))};if(k(this,r,T(t("type"),localStorage.getItem(t("key")))),this.hasAttribute("value")?_(t("key"),k(this,r,t("value"))):c(),this.hasAttribute("live")){const e=i=>(i.detail.key===t("key")||!i.detail.key)&&c();window.addEventListener("local-storage",e),Y(),this._destroy=()=>window.removeEventListener("local-storage",e)}}disconnectedCallback(){var t;(t=this._destroy)==null||t.call(this)}}r=new WeakMap,S(F,"observedAttributes",["value","slice","key","type","live"]);window.customElements.define("local-storage",F);const s={title:"",slice:"ls-slice",key:"sb-ls-key",value:"",live:"",body:""};function n(l){return new Promise(a=>setTimeout(a,l))}function W(l){const{title:a,slice:t,key:c,value:e,live:i,body:u}={...s,...l};return`
        <fieldset>
            <legend>${a}</legend>

            <custom-element>
<template><!-- wrapping into template to prevent images loading within DCE declaration -->
    <local-storage 
        key="${c}" 
        slice="${t}" 
        ${i?`live="${i}"`:""} 
        ${e?`value="${e}"`:""} 
        ></local-storage>
    
    <br/>
    <var>${c}</var>:<code data-testid="slice-value">{ //slice/${t} }</code>
    <br/>
    ${u}
</template>
            </custom-element>
      </fieldset>
  `}const R={title:"local-storage",render:W},m={args:{title:"live value",live:"live",body:`
    <input placeholder="value for localStorage" id="textinput"
        slice="${s.slice}" 
        value="{ //${s.slice} ?? '${s.value}' }"/>
    <button onclick="localStorage.setItem('${s.key}',textinput.value  )">set</button>
    <button onclick="localStorage.setItem('${s.key}','text value'  )">text value</button>
    <button onclick="localStorage.setItem('${s.key}','another text')">another text</button>   
    <button onclick="localStorage.removeItem('${s.key}'            )">set blank</button>   
`},play:async({canvasElement:l})=>{const a=p(l);await a.findByText(m.args.title);const t=()=>a.getByTestId("slice-value").textContent,c=e=>a.getByText(e);c("set blank").click(),o(localStorage.getItem(s.key)).toEqual(null,"from localStorage"),o(t()).toEqual(""),c("text value").click(),await n(10),o(t()).toEqual("text value"),window.textinput.value="textinput.value",c("set").click(),await n(10),o(t()).toEqual("textinput.value"),c("another text").click(),await n(10),o(t()).toEqual("another text"),c("set blank").click(),await n(10),o(t()).toEqual("")}},d={args:{title:"AlwaysOverride",live:"",value:"ABC",body:`
    buttons are changing the localStorage value, but without 'live' attribute slice ^^ from <i>local-storage</i> is not updated<br/>
    <button onclick="localStorage.setItem('${s.key}','text value'  )">text value</button>  
    <button onclick="localStorage.removeItem('${s.key}'            )">set blank</button>   
    `},play:async({canvasElement:l})=>{const a=p(l);await a.findByText(d.args.title);const t=()=>a.getByTestId("slice-value").textContent,c=e=>a.getByText(e);o(localStorage.getItem(s.key)).toEqual("ABC","from localStorage"),c("set blank").click(),o(localStorage.getItem(s.key)).toEqual(null,"from localStorage"),await n(10),o(t()).toEqual("ABC"),c("text value").click(),await n(10),o(localStorage.getItem(s.key)).toEqual("text value","from localStorage"),o(t()).toEqual("ABC"),c("set blank").click(),await n(10),o(t()).toEqual("ABC")}},x={args:{title:"live value with defaults",live:"",value:"ABC",body:`

    <local-storage key="attr2Key" slice="attr2-key" type="text" live="live" slice-value="@value ?? 'DEF2'"></local-storage>
    <button onclick="localStorage.removeItem('attr2Key')">clear key</button>
    <button onclick="localStorage.setItem('attr2Key','attr2Key value')">update attr2-key value</button>
    //attr2-key: <code data-testid="key2-value">{//attr2-key}</code><br/>

    <local-storage key="attr3Key" slice="attr3-key" type="text" live="live" slice-value="@value ?? 'DEF3'"></local-storage>
    <button onclick="localStorage.removeItem('attr3Key')">clear attr3-key key</button>
    <button onclick="localStorage.setItem('attr3Key','attr3Key value')">update attr3-key value</button>
    //attr3-key: <code data-testid="key3-value">{//attr3-key}</code><br/>
    <button onclick="localStorage.clear()">clear localStorage</button>
    `},play:async({canvasElement:l})=>{const a=p(l);await a.findByText(x.args.title);const t=c=>a.getByText(c);o(localStorage.getItem(s.key)).toEqual("ABC","from localStorage"),t("clear localStorage").click(),o(a.getByTestId("slice-value").textContent).toEqual("ABC"),o(a.getByTestId("key2-value").textContent).toEqual("DEF2"),o(a.getByTestId("key3-value").textContent).toEqual("DEF3"),t("update attr2-key value").click(),o(localStorage.getItem("attr2Key")).toEqual("attr2Key value","from localStorage"),await n(10),o(a.getByTestId("slice-value").textContent).toEqual("ABC"),o(a.getByTestId("key2-value").textContent).toEqual("attr2Key value"),o(a.getByTestId("key3-value").textContent).toEqual("DEF3"),t("update attr3-key value").click(),o(localStorage.getItem("attr3Key")).toEqual("attr3Key value","from localStorage"),await n(10),o(a.getByTestId("slice-value").textContent).toEqual("ABC"),o(a.getByTestId("key2-value").textContent).toEqual("attr2Key value"),o(a.getByTestId("key3-value").textContent).toEqual("attr3Key value")}},b={args:{title:"local-storage type attribute variations",body:`
    
                <local-storage key="textKey" slice="text-key" type="text" live="live"></local-storage>
                <local-storage key="dateKey" slice="date-key" type="date" live="live"></local-storage>
                <local-storage key="timeKey" slice="time-key" type="time" live="live"></local-storage>
                <local-storage key="localDateTimeKey" slice="local-date-time" type="datetime-local" live="live"></local-storage>
                <local-storage key="numberKey" slice="number-key" type="number" live="live"></local-storage>
                <local-storage key="jsonKey" slice="json-key" type="json" live="live"></local-storage>
                <input id="typesinput" placeholder="set value"><button onclick="
                        'textKey,dateKey,timeKey,localDateTimeKey,numberKey,jsonKey'.split(',')
                            .map( k=> localStorage.setItem(k, typesinput.value) )
                    "> set to all</button><br>
                <hr>
                text-key:
                    <button onclick="localStorage.setItem('textKey', 'ABC'  )">ABC</button>
                    <code data-testid="text-key">{//text-key       }</code><br>
                date-key:
                    <button onclick="localStorage.setItem('dateKey', '2024-04-20T03:58:42.131Z')">2024-04-21T03:58:42.131Z           </button>
                    <button onclick="localStorage.setItem('dateKey', new Date(Date.now()).toISOString())">now                                </button>
                    <button onclick="localStorage.setItem('dateKey', 'ABC'  )">date ABC - invalid                 </button>
                    <code data-testid="date-key">{//date-key       }</code><br>
                time-key:
                    <button onclick="localStorage.setItem('timeKey', '13:30')">13:30                              </button>
                    <code data-testid="time-key">{//time-key       }</code><br>
                local-date-time:
                    <button onclick="localStorage.setItem('localDateTimeKey', '1977-04-01T14:00:30')">1977-04-01T14:00:30 - local       </button>
                    <code data-testid="local-date-time">{//local-date-time}</code><br>
                number-key:
                    <button onclick="localStorage.setItem('numberKey', '2024'       )">2024 - number                      </button>
                    <button onclick="localStorage.setItem('numberKey', '24'         )">24   - number                      </button>
                    <button onclick="localStorage.setItem('numberKey', '1.23456e+5' )">1.23456e+5                         </button>
                    <button onclick="localStorage.setItem('numberKey', '0001'       )">0001                               </button>
                    <button onclick="localStorage.setItem('numberKey', '000'        )">000                                </button>
                    <button onclick="localStorage.setItem('numberKey', '0'          )">0                                  </button>
                    <button onclick="localStorage.setItem('numberKey', 'ABC'        )">ABC - invalid, NaN                 </button>
                    <code data-testid="number-key">{//number-key     }</code> <br>
                <fieldset>
                    <legend>json-key: </legend>

                    <button onclick="localStorage.setItem('jsonKey', JSON.stringify('ABC'))">'ABC'   - string  </button>
                    <button onclick="localStorage.setItem('jsonKey', JSON.stringify(12.345))">12.345  - number  </button>
                    <button onclick="localStorage.setItem('jsonKey', JSON.stringify(window.JsonSample) )">a:1,b:'B'  -json  </button>
                    <button onclick="localStorage.setItem('jsonKey', 'ABC'  )">ABC - invalid     </button><br>
                    json-key:<code data-testid="json-key"><xsl:apply-templates select="//json-key/value/@*|//json-key/text()|//json-key/value/text()" mode="json"></xsl:apply-templates></code>
                </fieldset>
                <xsl:template mode="json" match="*|@*">
                    <div>{name()} : {.}</div>
            </xsl:template>
    `},play:async({canvasElement:l})=>{const a=p(l);await a.findByText(b.args.title);const t=y=>a.getByText(y),c=y=>a.getByTestId(y).textContent,e=(y,J)=>{o(c(y)).toEqual(J,y)};localStorage.clear(),await n(10),e("text-key",""),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","NaN"),e("json-key","");const i=l.querySelector("input");i.value="ABC",t("set to all").click(),await n(10),e("text-key","ABC"),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","NaN"),e("json-key",""),i.value="22",t("set to all").click(),await n(10),e("text-key","22"),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","22"),e("json-key","22"),i.value="2024",t("set to all").click(),await n(10),e("text-key","2024"),e("date-key","2024-01-01"),e("time-key",""),e("local-date-time",""),e("number-key","2024"),e("json-key","2024"),i.value="2024-04-20T03:58:42.131Z",t("set to all").click(),await n(10),e("text-key","2024-04-20T03:58:42.131Z"),e("date-key","2024-04-20"),e("time-key",""),e("local-date-time",""),e("number-key","NaN"),e("json-key","");const u=new Date(Date.now()).toISOString();i.value=u,t("set to all").click(),await n(10),e("text-key",u),e("date-key",u.substring(0,10)),e("time-key",""),e("local-date-time",""),e("number-key","NaN"),e("json-key",""),i.value="23:25",t("set to all").click(),await n(10),e("text-key","23:25"),e("date-key",""),e("time-key","23:25"),e("local-date-time",""),e("number-key","NaN"),e("json-key",""),i.value="1977-04-01T14:00:30",t("set to all").click(),await n(10),e("text-key","1977-04-01T14:00:30"),e("date-key","1977-04-01"),e("time-key",""),e("local-date-time","1977-04-01T14:00:30"),e("number-key","NaN"),e("json-key",""),i.value="1.23456e+5",t("set to all").click(),await n(10),e("text-key","1.23456e+5"),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","123456"),e("json-key","123456"),i.value="0001",t("set to all").click(),await n(10),e("text-key","0001"),e("date-key","0001-01-01"),e("time-key",""),e("local-date-time",""),e("number-key","1"),e("json-key",""),i.value="001",t("set to all").click(),await n(10),e("text-key","001"),e("date-key","2001-01-01"),e("time-key",""),e("local-date-time",""),e("number-key","1"),e("json-key",""),i.value="000",t("set to all").click(),await n(10),e("text-key","000"),e("date-key","2000-01-01"),e("time-key",""),e("local-date-time",""),e("number-key","0"),e("json-key",""),i.value="0",t("set to all").click(),await n(10),e("text-key","0"),e("date-key","2000-01-01"),e("time-key",""),e("local-date-time",""),e("number-key","0"),e("json-key","0"),i.value='"abc"',t("set to all").click(),await n(10),e("text-key",'"abc"'),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","NaN"),e("json-key","abc"),i.value="12.345",t("set to all").click(),await n(10),e("text-key","12.345"),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","12.345"),e("json-key","12.345"),i.value='{"a":1,"b":"B"}',t("set to all").click(),await n(10),e("text-key",'{"a":1,"b":"B"}'),e("date-key",""),e("time-key",""),e("local-date-time",""),e("number-key","NaN"),e("json-key",`
a : 1b : B`)}};var K,E,f;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'live value',
    live: 'live',
    body: \`
    <input placeholder="value for localStorage" id="textinput"
        slice="\${defs.slice}" 
        value="{ //\${defs.slice} ?? '\${defs.value}' }"/>
    <button onclick="localStorage.setItem('\${defs.key}',textinput.value  )">set</button>
    <button onclick="localStorage.setItem('\${defs.key}','text value'  )">text value</button>
    <button onclick="localStorage.setItem('\${defs.key}','another text')">another text</button>   
    <button onclick="localStorage.removeItem('\${defs.key}'            )">set blank</button>   
\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((Demo.args!.title as string));
    const val = () => canvas.getByTestId('slice-value').textContent,
      byText = txt => canvas.getByText(txt);
    byText('set blank').click();
    expect(localStorage.getItem(defs.key)).toEqual(null, 'from localStorage');
    expect(val()).toEqual('');
    byText('text value').click();
    await sleep(10);
    expect(val()).toEqual('text value');
    window['textinput'].value = 'textinput.value';
    byText('set').click();
    await sleep(10);
    expect(val()).toEqual('textinput.value');
    byText('another text').click();
    await sleep(10);
    expect(val()).toEqual('another text');
    byText('set blank').click();
    await sleep(10);
    expect(val()).toEqual('');
  }
}`,...(f=(E=m.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var C,j,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'AlwaysOverride',
    live: '',
    value: 'ABC',
    body: \`
    buttons are changing the localStorage value, but without 'live' attribute slice ^^ from <i>local-storage</i> is not updated<br/>
    <button onclick="localStorage.setItem('\${defs.key}','text value'  )">text value</button>  
    <button onclick="localStorage.removeItem('\${defs.key}'            )">set blank</button>   
    \`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((AlwaysOverride.args!.title as string));
    const val = () => canvas.getByTestId('slice-value').textContent,
      byText = txt => canvas.getByText(txt);
    expect(localStorage.getItem(defs.key)).toEqual('ABC', 'from localStorage');
    byText('set blank').click();
    expect(localStorage.getItem(defs.key)).toEqual(null, 'from localStorage');
    await sleep(10);
    expect(val()).toEqual('ABC');
    byText('text value').click();
    await sleep(10);
    expect(localStorage.getItem(defs.key)).toEqual('text value', 'from localStorage');
    expect(val()).toEqual('ABC');
    byText('set blank').click();
    await sleep(10);
    expect(val()).toEqual('ABC');
  }
}`,...(A=(j=d.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var h,q,N;x.parameters={...x.parameters,docs:{...(h=x.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'live value with defaults',
    live: '',
    value: 'ABC',
    body: \`

    <local-storage key="attr2Key" slice="attr2-key" type="text" live="live" slice-value="@value ?? 'DEF2'"></local-storage>
    <button onclick="localStorage.removeItem('attr2Key')">clear key</button>
    <button onclick="localStorage.setItem('attr2Key','attr2Key value')">update attr2-key value</button>
    //attr2-key: <code data-testid="key2-value">{//attr2-key}</code><br/>

    <local-storage key="attr3Key" slice="attr3-key" type="text" live="live" slice-value="@value ?? 'DEF3'"></local-storage>
    <button onclick="localStorage.removeItem('attr3Key')">clear attr3-key key</button>
    <button onclick="localStorage.setItem('attr3Key','attr3Key value')">update attr3-key value</button>
    //attr3-key: <code data-testid="key3-value">{//attr3-key}</code><br/>
    <button onclick="localStorage.clear()">clear localStorage</button>
    \`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText((FromStorageWithDefault.args!.title as string));
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
}`,...(N=(q=x.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var D,$,O;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
                            .map( k=> localStorage.setItem(k, typesinput.value) )
                    "> set to all</button><br>
                <hr>
                text-key:
                    <button onclick="localStorage.setItem('textKey', 'ABC'  )">ABC</button>
                    <code data-testid="text-key">{//text-key       }</code><br>
                date-key:
                    <button onclick="localStorage.setItem('dateKey', '2024-04-20T03:58:42.131Z')">2024-04-21T03:58:42.131Z           </button>
                    <button onclick="localStorage.setItem('dateKey', new Date(Date.now()).toISOString())">now                                </button>
                    <button onclick="localStorage.setItem('dateKey', 'ABC'  )">date ABC - invalid                 </button>
                    <code data-testid="date-key">{//date-key       }</code><br>
                time-key:
                    <button onclick="localStorage.setItem('timeKey', '13:30')">13:30                              </button>
                    <code data-testid="time-key">{//time-key       }</code><br>
                local-date-time:
                    <button onclick="localStorage.setItem('localDateTimeKey', '1977-04-01T14:00:30')">1977-04-01T14:00:30 - local       </button>
                    <code data-testid="local-date-time">{//local-date-time}</code><br>
                number-key:
                    <button onclick="localStorage.setItem('numberKey', '2024'       )">2024 - number                      </button>
                    <button onclick="localStorage.setItem('numberKey', '24'         )">24   - number                      </button>
                    <button onclick="localStorage.setItem('numberKey', '1.23456e+5' )">1.23456e+5                         </button>
                    <button onclick="localStorage.setItem('numberKey', '0001'       )">0001                               </button>
                    <button onclick="localStorage.setItem('numberKey', '000'        )">000                                </button>
                    <button onclick="localStorage.setItem('numberKey', '0'          )">0                                  </button>
                    <button onclick="localStorage.setItem('numberKey', 'ABC'        )">ABC - invalid, NaN                 </button>
                    <code data-testid="number-key">{//number-key     }</code> <br>
                <fieldset>
                    <legend>json-key: </legend>

                    <button onclick="localStorage.setItem('jsonKey', JSON.stringify('ABC'))">'ABC'   - string  </button>
                    <button onclick="localStorage.setItem('jsonKey', JSON.stringify(12.345))">12.345  - number  </button>
                    <button onclick="localStorage.setItem('jsonKey', JSON.stringify(window.JsonSample) )">a:1,b:'B'  -json  </button>
                    <button onclick="localStorage.setItem('jsonKey', 'ABC'  )">ABC - invalid     </button><br>
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
    const canvas = within(canvasElement);
    await canvas.findByText((TypeAttribute.args!.title as string));
    const byText = txt => canvas.getByText(txt),
      val = testId => canvas.getByTestId(testId).textContent,
      expectVal = (key, value) => {
        expect(val(key)).toEqual(value, key);
      };
    localStorage.clear(); // cleanup before test
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
    expectVal('json-key', '\\na : 1b : B');
  }
}`,...(O=($=b.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const z=["Demo","AlwaysOverride","FromStorageWithDefault","TypeAttribute"];export{d as AlwaysOverride,m as Demo,x as FromStorageWithDefault,b as TypeAttribute,z as __namedExportsOrder,R as default};
