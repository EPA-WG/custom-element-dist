// noinspection DuplicatedCode

import type { StoryObj }             from '@storybook/web-components';
import {expect, getByTestId, within} from '@storybook/test';

import '../custom-element/custom-element.js';
import '../custom-element/local-storage.js';

type TProps = { title: string; slice: string; key: string; value:string; live:string; body:string};
const defs: TProps =
{   title:  ''
,   slice:  'ls-slice'
,     key:  'sb-ls-key'
,   value:  ''
,    live:  ''
,    body:  ``
};
type Story = StoryObj<TProps>;
function sleep(ms: number) {    return new Promise((resolve) => setTimeout(resolve, ms)); }

function render(args: TProps)
{
    const {title, slice, key, value, live, body} = {...defs, ...args};
    return `
        <fieldset>
            <legend>${ title }</legend>

            <custom-element>
<template><!-- wrapping into template to prevent images loading within DCE declaration -->
    <local-storage 
        key="${ key }" 
        slice="${ slice }" 
        ${ live  ? `live="${live    }"`:''} 
        ${ value ? `value="${value  }"`:''} 
        ></local-storage>
    
    <br/>
    <var>${key}</var>:<code data-testid="slice-value">{ //slice/${slice} }</code>
    <br/>
    ${ body }
</template>
            </custom-element>
      </fieldset>
  `;
}
const meta =
{   title:      'local-storage'
,   render
};

export default meta;

export const Demo:Story  =
{   args : {title: 'live value', live:'live', body:`
    <input placeholder="value for localStorage" id="textinput"
        slice="${defs.slice}" 
        value="{ //${defs.slice} ?? '${ defs.value }' }"/>
    <button onclick="localStorage.setItem('${defs.key}',textinput.value  )">set</button>
    <button onclick="localStorage.setItem('${defs.key}','text value'  )">text value</button>
    <button onclick="localStorage.setItem('${defs.key}','another text')">another text</button>   
    <button onclick="localStorage.removeItem('${defs.key}'            )">set blank</button>   
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(Demo.args!.title as string);
        const val = ()=> canvas.getByTestId('slice-value').textContent
        ,  byText = txt => canvas.getByText(txt);

        byText('set blank').click();
        expect(localStorage.getItem(defs.key)).toEqual(null, 'from localStorage');
        expect( val() ).toEqual('');
        byText('text value').click();
        await sleep(10);
        expect( val() ).toEqual('text value');

        window['textinput'].value = 'textinput.value';
        byText('set').click();
        await sleep(10);
        expect( val() ).toEqual('textinput.value');

        byText('another text').click();
        await sleep(10);
        expect( val() ).toEqual('another text');


        byText('set blank').click();
        await sleep(10);
        expect( val() ).toEqual('');
    },
};


export const AlwaysOverride:Story  =
{   args : {title: 'AlwaysOverride', live:'', value:'ABC', body:`
    buttons are changing the localStorage value, but without 'live' attribute slice ^^ from <i>local-storage</i> is not updated<br/>
    <button onclick="localStorage.setItem('${defs.key}','text value'  )">text value</button>  
    <button onclick="localStorage.removeItem('${defs.key}'            )">set blank</button>   
    `}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(AlwaysOverride.args!.title as string);
        const val = ()=> canvas.getByTestId('slice-value').textContent
        ,  byText = txt => canvas.getByText(txt);

        expect(localStorage.getItem(defs.key)).toEqual('ABC', 'from localStorage');

        byText('set blank').click();
        expect(localStorage.getItem(defs.key)).toEqual(null, 'from localStorage');
        await sleep(10);
        expect( val() ).toEqual('ABC');

        byText('text value').click();
        await sleep(10);
        expect(localStorage.getItem(defs.key)).toEqual('text value', 'from localStorage');
        expect( val() ).toEqual('ABC');

        byText('set blank').click();
        await sleep(10);
        expect( val() ).toEqual('ABC');
    },
};

export const FromStorageWithDefault:Story  =
{   args : {title: 'live value with defaults', live:'', value:'ABC', body:`

    <local-storage key="attr2Key" slice="attr2-key" type="text" live="live" slice-value="@value ?? 'DEF2'"></local-storage>
    <button onclick="localStorage.removeItem('attr2Key')">clear key</button>
    <button onclick="localStorage.setItem('attr2Key','attr2Key value')">update attr2-key value</button>
    //attr2-key: <code data-testid="key2-value">{//attr2-key}</code><br/>

    <local-storage key="attr3Key" slice="attr3-key" type="text" live="live" slice-value="@value ?? 'DEF3'"></local-storage>
    <button onclick="localStorage.removeItem('attr3Key')">clear attr3-key key</button>
    <button onclick="localStorage.setItem('attr3Key','attr3Key value')">update attr3-key value</button>
    //attr3-key: <code data-testid="key3-value">{//attr3-key}</code><br/>
    <button onclick="localStorage.clear()">clear localStorage</button>
    `}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(FromStorageWithDefault.args!.title as string);
        const byText = txt => canvas.getByText(txt);

        expect(localStorage.getItem(defs.key)).toEqual('ABC', 'from localStorage');
        byText('clear localStorage').click();

        expect( canvas.getByTestId('slice-value').textContent).toEqual('ABC')
        expect( canvas.getByTestId('key2-value' ).textContent).toEqual('DEF2')
        expect( canvas.getByTestId('key3-value' ).textContent).toEqual('DEF3')

        byText('update attr2-key value').click();
        expect(localStorage.getItem('attr2Key')).toEqual('attr2Key value', 'from localStorage');
        await sleep(10);
        expect( canvas.getByTestId('slice-value').textContent).toEqual('ABC')
        expect( canvas.getByTestId('key2-value' ).textContent).toEqual('attr2Key value')
        expect( canvas.getByTestId('key3-value' ).textContent).toEqual('DEF3')

        byText('update attr3-key value').click();
        expect(localStorage.getItem('attr3Key')).toEqual('attr3Key value', 'from localStorage');
        await sleep(10);
        expect( canvas.getByTestId('slice-value').textContent).toEqual('ABC')
        expect( canvas.getByTestId('key2-value' ).textContent).toEqual('attr2Key value')
        expect( canvas.getByTestId('key3-value' ).textContent).toEqual('attr3Key value')

    },
};

export const TypeAttribute:Story  =
{   args : {title: 'local-storage type attribute variations', body:`
    
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
    `}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(TypeAttribute.args!.title as string);
        const byText = txt => canvas.getByText(txt)
        ,        val = testId => canvas.getByTestId(testId).textContent
        ,  expectVal = (key,value) => { expect(val( key )).toEqual( value, key ) };
        localStorage.clear(); // cleanup before test
        await sleep(10);

        expectVal('text-key'       ,'');
        expectVal('date-key'       ,'');
        expectVal('time-key'       ,'');
        expectVal('local-date-time','');
        expectVal('number-key'     ,'NaN');
        expectVal('json-key'       ,'');

        const input = canvasElement.querySelector('input');
        input.value='ABC';
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'ABC');
        expectVal('date-key'       ,''  );
        expectVal('time-key'       ,''  );
        expectVal('local-date-time',''  );
        expectVal('number-key'     ,'NaN');
        expectVal('json-key'       ,'');

        input.value='22';
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'22');
        expectVal('date-key'       ,''  );
        expectVal('time-key'       ,''  );
        expectVal('local-date-time',''  );
        expectVal('number-key'     ,'22');
        expectVal('json-key'       ,'22');

        input.value='2024';
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'2024'       );
        expectVal('date-key'       ,'2024-01-01' );
        expectVal('time-key'       ,''           );
        expectVal('local-date-time',''           );
        expectVal('number-key'     ,'2024'       );
        expectVal('json-key'       ,'2024'       );

        input.value='2024-04-20T03:58:42.131Z';
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'2024-04-20T03:58:42.131Z' );
        expectVal('date-key'       ,'2024-04-20' );
        expectVal('time-key'       ,''           );
        expectVal('local-date-time',''           );
        expectVal('number-key'     ,'NaN'        );
        expectVal('json-key'       ,''           );

        const nowStr = new Date(Date.now()).toISOString();
        input.value=nowStr;
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,nowStr       );
        expectVal('date-key'       ,nowStr.substring(0,10) );
        expectVal('time-key'       ,''           );
        expectVal('local-date-time',''           );
        expectVal('number-key'     ,'NaN'        );
        expectVal('json-key'       ,''           );

        input.value='23:25';
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'23:25' );
        expectVal('date-key'       ,''      );
        expectVal('time-key'       ,'23:25' );
        expectVal('local-date-time',''      );
        expectVal('number-key'     ,'NaN'   );
        expectVal('json-key'       ,''      );

        input.value='1977-04-01T14:00:30';
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'1977-04-01T14:00:30' );
        expectVal('date-key'       ,'1977-04-01'          );
        expectVal('time-key'       ,'' );
        expectVal('local-date-time','1977-04-01T14:00:30' );
        expectVal('number-key'     ,'NaN'   );
        expectVal('json-key'       ,''      );

        input.value='1.23456e+5';
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'1.23456e+5');
        expectVal('date-key'       ,''          );
        expectVal('time-key'       ,''          );
        expectVal('local-date-time',''          );
        expectVal('number-key'     ,'123456'    );
        expectVal('json-key'       ,'123456'    );

        input.value='0001';// as YYYY for year
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'0001');
        expectVal('date-key'       ,'0001-01-01');
        expectVal('time-key'       ,''          );
        expectVal('local-date-time',''          );
        expectVal('number-key'     ,'1'         );
        expectVal('json-key'       ,''          );

        input.value='001'; // as 2001 year
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'001'       );
        expectVal('date-key'       ,'2001-01-01');
        expectVal('time-key'       ,''          );
        expectVal('local-date-time',''          );
        expectVal('number-key'     ,'1'         );
        expectVal('json-key'       ,''          );

        input.value='000'; // as 2001 year
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'000'       );
        expectVal('date-key'       ,'2000-01-01');
        expectVal('time-key'       ,''          );
        expectVal('local-date-time',''          );
        expectVal('number-key'     ,'0'         );
        expectVal('json-key'       ,''          );

        input.value='0'; // as 2000 year
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'0'         );
        expectVal('date-key'       ,'2000-01-01');
        expectVal('time-key'       ,''          );
        expectVal('local-date-time',''          );
        expectVal('number-key'     ,'0'         );
        expectVal('json-key'       ,'0'         );

        input.value='"abc"';
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'"abc"'     );
        expectVal('date-key'       ,''          );
        expectVal('time-key'       ,''          );
        expectVal('local-date-time',''          );
        expectVal('number-key'     ,'NaN'       );
        expectVal('json-key'       ,'abc'       );

        input.value='12.345';
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'12.345'    );
        expectVal('date-key'       ,''          );
        expectVal('time-key'       ,''          );
        expectVal('local-date-time',''          );
        expectVal('number-key'     ,'12.345'    );
        expectVal('json-key'       ,'12.345'    );

        input.value='{"a":1,"b":"B"}';
        byText('set to all').click();
        await sleep(10);
        expectVal('text-key'       ,'{"a":1,"b":"B"}'   );
        expectVal('date-key'       ,''                  );
        expectVal('time-key'       ,''                  );
        expectVal('local-date-time',''                  );
        expectVal('number-key'     ,'NaN'               );
        expectVal('json-key'       ,'\na : 1b : B'      );
    },
};
