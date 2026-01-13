// noinspection DuplicatedCode

import type { StoryObj } from '@storybook/web-components';
import { expect, within }      from '@storybook/test';

import '../custom-element/custom-element.js';
import '../custom-element/http-request.js';
import {handlers} from '../mocks/handlers.ts';

type TProps = { title: string; slice: string; url: string; };
const defs: TProps =
{   title:  ''
,   slice:  'page'
,     url:  '/pokemon?limit=6'
};
type Story = StoryObj<TProps>;
function sleep(ms: number) {    return new Promise((resolve) => setTimeout(resolve, ms)); }

function Template({title, slice, url}: TProps)
{
    return `
        <fieldset>
            <legend>${title}</legend>
            <custom-element>
<template><!-- wrapping into template to prevent images loading within DCE declaration -->
    <http-request
        url="{ //slice/url  }"
        slice="${slice}"
        ></http-request>
    <input placeholder="URL for fetch" slice="url" value="{ //url ?? '${ url }' }"/>
    <button>set</button>
    <button slice="url" slice-value="''" slice-event="click">set blank</button>
    <button slice="url" slice-value="'/reflect'" slice-event="click">/reflect</button>
    <button slice="url" slice-value="'/pokemon'"         slice-event="click">/pokemon</button>
    <button slice="url" slice-value="'/pokemon?limit=6'" slice-event="click">/pokemon?limit=6</button>
    <button slice="url" slice-value="'/pokemon?limit=3'" slice-event="click">/pokemon?limit=3</button>

    <p>Pokemon Count: {count(/datadom/slice/${slice}//results)}</p>
    <if test="count(/datadom/slice/${slice}//results) &lt; 0">
        <h3>loading...</h3>
    </if>
    <for-each select="/datadom/slice/${slice}//results">
        <variable name="pokeid"
            select="substring-before( substring-after( @url, 'https://pokeapi.co/api/v2/pokemon/'),'/')"
            ></variable>
        <button>
            <value-of select='@name'/>
        </button>
    </for-each>
    <for-each select="//slice/${slice}/value/*">
        <ul>
            <var data-testid="request-section"><value-of select='name(.)'/></var>
            <for-each select="@*">
                <div>
                    <var>@{local-name(.)}</var>
                    =
                    <code data-testid="attr-{local-name(.)}">{.}</code>
                </div>
            </for-each>
        </ul>
    </for-each>
</template>
            </custom-element>
      </fieldset>
  `;
}
const meta =
{   title:      'http-request'
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
    }
,   parameters: { test:{ dangerouslyIgnoreUnhandledErrors: true}}
};

export default meta;

export const Demo:Story  =
{   args : {title: 'url and slice',url:'/pokemon?limit=4'}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(Demo.args!.title as string);
        expect( await canvas.findByText('bulbasaur')).toBeInTheDocument();
        expect( await canvas.findByText('Pokemon Count: 4')).toBeInTheDocument(canvasElement);
    },
    parameters: { msw: handlers  },
};

export const UrlChange:Story  =
{   args : {title: 'url change',url:''}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(UrlChange.args!.title as string);
        const byText = txt => canvas.getByText(txt)
        const requestElement = canvasElement.querySelector('http-request')
        ,     urlAttr = () => requestElement.getAttribute('url');

        expect( byText('Pokemon Count: 0') ).toBeInTheDocument();
        expect( urlAttr() ).toEqual('');

        byText( '/pokemon' ).click();
        await sleep(100);
        expect( urlAttr() ).toEqual('/pokemon');
        expect( byText('Pokemon Count: 6') ).toBeInTheDocument();

        byText( '/pokemon?limit=6' ).click();
        await sleep(100);
        expect( urlAttr() ).toEqual('/pokemon?limit=6');
        expect( byText('Pokemon Count: 6') ).toBeInTheDocument();

        byText( '/pokemon?limit=3' ).click();
        await sleep(100);
        expect( urlAttr() ).toEqual('/pokemon?limit=3');
        expect( byText('Pokemon Count: 3') ).toBeInTheDocument();

        byText( 'set blank' ).click();
        await sleep(100);
        expect( urlAttr() ).toEqual('');
        expect( byText('Pokemon Count: 0') ).toBeInTheDocument();
    },
    parameters: { msw: handlers  },
};

export const Http404:Story  =
{   args : {title: 'http-request with error', url: '/404'}
,   play: async ({canvasElement}) =>
    {   const canvas = within(canvasElement)
        ,   $t = async testId=> (await canvas.findByTestId(testId)).textContent;
        await canvas.findByText(Http404.args!.title as string);
        await sleep(200);
        expect( await $t('attr-status')).to.include('404');
    },
    parameters: { msw: handlers  },
};

export const LifecycleInitialized:Story  =
{   args: { title: 'http-request with delayed .5 seconds response', url: '/noreturn'}
,   play: async ({canvasElement}) =>
    {   const canvas = within(canvasElement);
        await canvas.findByText(LifecycleInitialized.args!.title as string);
        expect( await canvas.findByText('request') ).toBeInTheDocument(); // after DCE initiated
        expect( canvas.queryByText('response') ).toBe(null);     // response is not available
        // wait while response appears ~ 0.5 seconds
        expect( await canvas.findByText('response') ).toBeInTheDocument(); // only after delay is shown

        expect( await canvas.findByText('bulbasaur') ).toBeInTheDocument();
        expect( await canvas.findByText('Pokemon Count: 6') ).toBeInTheDocument();
    },
    parameters: { msw: handlers  },
};

export const RequestResponseHeaders:Story  =
{   args: { title: 'http-request headers and response status and headers', url: '/reflect'}
,   play: async ({canvasElement}) =>
    {   const canvas = within(canvasElement);
        await canvas.findByText(RequestResponseHeaders.args!.title as string);
        await sleep(200);

        // see response made by /reflect handler

        const te = await canvas.findByTestId('section-request-attr-x-test');
        expect( te ).toBeInTheDocument();
        expect( te.textContent.trim() ).toEqual('testing');

        const t1 = await canvas.findByTestId('section-response-attr-x-test');
        expect( t1 ).toBeInTheDocument();
        expect( t1.textContent.trim() ).toEqual('reflected-testing');

        const tAdded = await canvas.findByTestId('section-response-attr-x-added');
        expect( tAdded ).toBeInTheDocument();
        expect( tAdded.textContent.trim() ).toEqual('abc');

    },
    parameters: { msw: handlers  },
    render : ({url,title}) => `
        <fieldset>
            <legend>${title}</legend>
            <p> <b>request</b> headers are populated into dedicated <b>slice/request/headers</b></p>

            <custom-element tag="headers-demo" >
                <template>
<http-request
    url="${url}"
    slice="request_slice"
    type="text"
    mode="cors"
    header-x-test="testing"
    ></http-request>
Content of <code>//slice/request_slice</code> is filled by <b>request</b> and <b>response</b>
from <code>${url}</code>

<h3>Samples</h3>
<table>
<tr><th>//slice/request_slice/value/request/headers/@mode</th>
    <td><value-of select="//slice/request_slice/value/request/@mode"/></td></tr>
<tr><th>//slice/request_slice/value/response/headers/@content-type</th>
    <td><value-of select="//slice/request_slice/value/response/headers/@content-type"/></td></tr>
<tr><th>//slice/request_slice/value/response/@status</th>
    <td><value-of select="//slice/request_slice/value/response/@status"/></td></tr>
</table>
<for-each select="//slice/request_slice/value/*">
    <xsl:variable name="section">{name(.)}</xsl:variable>
    <ul date-testid="section-{$section}">
        <b data-testid="request-section"><value-of select='name(.)'/></b>
        <for-each select="@*">
            <div>
                <var >@{local-name(.)}</var>
                =
                <code data-testid="section-{$section}-prop-{local-name(.)}">{.}</code>
            </div>
        </for-each>
        <for-each select="*">
            <div>
                <b data-testid="section-deep"><value-of select='local-name(.)'/></b>
                <ul>
                    <for-each select="@*">
                        <li>
                            <var data-testid="section-attribute">@{local-name(.)}</var>
                            =
                            <code data-testid="section-{$section}-attr-{local-name(.)}">{.}</code>
                        </li>
                    </for-each>
                    <code><value-of select='.'/></code>
                </ul>
            </div>
        </for-each>
    </ul>
</for-each>
</template>
            </custom-element>
            <headers-demo></headers-demo>
      </fieldset>
`
};

