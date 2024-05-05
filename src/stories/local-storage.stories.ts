// noinspection DuplicatedCode

import type { StoryObj } from '@storybook/web-components';
import { expect, within }      from '@storybook/test';

import '../custom-element/custom-element.js';
import '../custom-element/local-storage.js';

type TProps = { title: string; tag: string; slice: string; key: string; value:string; type:string; live:string; body:string};
const defs: TProps =
{   title:  ''
,     tag:  ''
,   slice:  'ls-slice'
,     key:  'sb-ls-key'
,   value:  ''
,    type:  ''
,    live:  ''
,    body:  ``
};
type Story = StoryObj<TProps>;
function sleep(ms: number) {    return new Promise((resolve) => setTimeout(resolve, ms)); }

function Template(args: TProps)
{
    const {title, tag, slice, key, value, type, live, body} = {...defs, ...args};
    return `
        <fieldset>
            <legend>${ title }</legend>

            <custom-element ${ tag ? `tag="${tag}"`:''} >
<template><!-- wrapping into template to prevent images loading within DCE declaration -->
    <local-storage 
        key="${ key }" 
        slice="${ slice }" 
        ${ type  ? `type="${type    }"`:''} 
        ${ live  ? `live="${live    }"`:''} 
        ${ value ? `value="${value  }"`:''} 
        ></local-storage>
    
    <br/>
    <var>${key}</var>:<code data-testid="slice-value">{ //slice/${slice} }</code>
    <br/>
    ${ body }
</template>
            </custom-element>
            ${ tag ? `<${tag}></${tag}>` : ''}            
      </fieldset>
  `;
}
const meta =
{   title:      'local-storage'
,   render:     (args: TProps) => Template(args)
,   renderPlay: async function renderPlay(story: StoryObj)
    {
        // @ts-ignore
        document.body.innerHTML = ( story.render ? story : meta ).render({...defs, ...story.args});
        await new Promise(resolve => setTimeout(async () =>
        {
            // @ts-ignore
            await story.play({canvasElement: document.body.firstElementChild as HTMLElement});
            resolve(0);
        }, 0));
    },
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
        await sleep(20);
        expect( val() ).toEqual('text value');

        window['textinput'].value = 'textinput.value';
        byText('set').click();
        await sleep(20);
        expect( val() ).toEqual('textinput.value');

        byText('another text').click();
        await sleep(20);
        expect( val() ).toEqual('another text');


        byText('set blank').click();
        await sleep(20);
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
        await sleep(20);
        expect( val() ).toEqual('ABC');

        byText('text value').click();
        await sleep(20);
        expect(localStorage.getItem(defs.key)).toEqual('text value', 'from localStorage');
        expect( val() ).toEqual('ABC');

        byText('set blank').click();
        await sleep(20);
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
        const val = ()=> canvas.getByTestId('slice-value').textContent
        ,  byText = txt => canvas.getByText(txt);

        expect(localStorage.getItem(defs.key)).toEqual('ABC', 'from localStorage');
        byText('clear localStorage').click();

        expect( canvas.getByTestId('slice-value').textContent).toEqual('ABC')
        expect( canvas.getByTestId('key2-value' ).textContent).toEqual('DEF2')
        expect( canvas.getByTestId('key3-value' ).textContent).toEqual('DEF3')

        byText('update attr2-key value').click();
        expect(localStorage.getItem('attr2Key')).toEqual('attr2Key value', 'from localStorage');
        await sleep(20);
        expect( canvas.getByTestId('slice-value').textContent).toEqual('ABC')
        expect( canvas.getByTestId('key2-value' ).textContent).toEqual('attr2Key value')
        expect( canvas.getByTestId('key3-value' ).textContent).toEqual('DEF3')

        byText('update attr3-key value').click();
        expect(localStorage.getItem('attr3Key')).toEqual('attr3Key value', 'from localStorage');
        await sleep(20);
        expect( canvas.getByTestId('slice-value').textContent).toEqual('ABC')
        expect( canvas.getByTestId('key2-value' ).textContent).toEqual('attr2Key value')
        expect( canvas.getByTestId('key3-value' ).textContent).toEqual('attr3Key value')

    },
};



