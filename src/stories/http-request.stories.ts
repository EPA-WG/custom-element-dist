import '../custom-element.js';
import '../http-request.js';
import type { Meta, StoryObj, composeStories } from '@storybook/web-components';
import { expect, within }      from '@storybook/test';
import {handlers}                              from '../handlers.ts';

type TProps = { title: string; tag: string; slice: string; url: string; };
const defs: TProps =
{   title:  ''
,     tag:  'hr-test-component'
,   slice:  'page'
,     url:  '/pokemon?limit=6'
};
type Story = StoryObj<TProps>;
function sleep(ms: number) {    return new Promise((resolve) => setTimeout(resolve, ms)); }

function Template({title, tag, slice='s', url}: TProps)
{
    return `
        <fieldset>
            <legend>${title}</legend>
            <custom-element
                ${tag ? `tag="${tag}"`:''}
                >
<template><!-- wrapping into template to prevent images loading within DCE declaration -->
    <http-request
        url="${url ?? defs.url}"
        slice="${slice}"
        ></http-request>
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
            <${tag}></${tag}>
      </fieldset>
  `;
}
const meta =
{   title:      'http-request'
,   render:     (args: TProps) => Template(args)
,   renderPlay: async function renderPlay(story: StoryObj)
    {   document.body.innerHTML = meta.render({...defs, ...story.args});
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
{   args : {title: 'url and slice'}
,   play: async ({canvasElement}) =>
    {   const canvas = within(canvasElement);
        await canvas.findByText(Demo.args!.title as string);
        expect( await canvas.findByText('bulbasaur')).toBeInTheDOM(canvasElement);
        expect( await canvas.findByText('Pokemon Count: 6')).toBeInTheDOM(canvasElement);
    },
    parameters: { msw: handlers  },
};

export const Http404:Story  =
{   args : {title: 'http-request with error', url: '/404'}
,   play: async ({canvasElement}) =>
    {   const canvas = within(canvasElement)
        ,   $ = css=> canvasElement.querySelector(css)
        ,   $t = async testId=> (await canvas.findByTestId(testId)).textContent;
        await canvas.findByText(Http404.args!.title as string);
        await sleep(200);
        expect( await $t('attr-status')).to.include('404');
    },
    parameters: { msw: handlers  },
};

export const LifecycleInitialized:Story  =
{   args: { title: 'http-request with delayed 10 seconds response', url: '/noreturn'}
,   play: async ({canvasElement}) =>
    {   const canvas = within(canvasElement);
        await canvas.findByText(LifecycleInitialized.args!.title as string);
        expect( await canvas.findByText('request') ).toBeInTheDOM(canvasElement); // after DCE initiated
        expect( canvas.queryByText('response') ).toBe(null);              // response is not available
        // wait while response appears ~ 0.5 seconds
        expect( await canvas.findByText('response') ).toBeInTheDOM(canvasElement); // only after delay is shown

        expect( await canvas.findByText('bulbasaur') ).toBeInTheDOM(canvasElement);
        expect( await canvas.findByText('Pokemon Count: 6') ).toBeInTheDOM(canvasElement);
    },
    parameters: { msw: handlers  },
};

// export const
//     RequestResponceHeaders  = ({url}) => `
//         <fieldset>
//             <legend>http-request headers and responce status and headers</legend>
//             <p> <b>request</b> headers are populated into dedicated <b>slice/request/headers</b>
//             </p>
//
//             <custom-element
//                 tag="headers-demo"
//                 hidden
//                 >
// <http-request
//     url="${url}"
//     slice="request_slice"
//     type="text"
//     mode="cors"
//     header-x-test="testing"
//     ></http-request>
// Content of <code>//slice/request_slice</code> is filled by <b>request</b> and <b>response</b>
// from <code>${url}</code>
//
// <h3>Samples</h3>
// <table>
// <tr><th>//slice/request_slice/value/request/headers/@mode</th>
//     <td><value-of select="//slice/request_slice/value/request/@mode"/></td></tr>
// <tr><th>//slice/request_slice/value/response/headers/@content-type</th>
//     <td><value-of select="//slice/request_slice/value/response/headers/@content-type"/></td></tr>
// <tr><th>//slice/request_slice/value/response/@status</th>
//     <td><value-of select="//slice/request_slice/value/response/@status"/></td></tr>
// </table>
// <for-each select="//slice/request_slice/value/*">
//     <ul data-request-section="{name(.)}">
//         <b data-testid="request-section"><value-of select='name(.)'/></b>
//         <for-each select="@*">
//             <div>
//                 <var data-testid="section-attribute">@<value-of select='local-name(.)'/></var>
//                 =
//                 <code><value-of select='.'/></code>
//             </div>
//         </for-each>
//         <for-each select="*">
//             <div>
//                 <b data-testid="section-deep"><value-of select='local-name(.)'/></b>
//                 <ul>
//                     <for-each select="@*">
//                         <li>
//                             <var data-testid="section-attribute">@<value-of select='local-name(.)'/></var>
//                             =
//                             <code><value-of select='.'/></code>
//                         </li>
//                     </for-each>
//                     <code><value-of select='.'/></code>
//                 </ul>
//             </div>
//         </for-each>
//     </ul>
// </for-each>
//             </custom-element>
//             <headers-demo></headers-demo>
//       </fieldset>
// `;
// RequestResponceHeaders.args =
//     {
//         url: 'https://pokeapi.co/api/v2/reflect'
//
//     };
// export const
//     GetByUrl                = ({url}) => `
//         <fieldset>
//             <legend>http-request from any URL</legend>
//             <p> <b>request</b> headers are populated into dedicated <b>slice/request/headers</b>
//             </p>
//
//             <custom-element>
//                 <template>
//                     <button slice="url-string" slice-value="'${url}'" slice-event="click">⬇️${url}</button>
//                     <input slice="url-string" value="{ //url-string ?? '' }" style="width:100%"/>
//                     <button slice="fetch-url" slice-event="click" slice-value="//url-string"> GET </button>
//                     <http-request
//                         url="{//fetch-url}"
//                         slice="request_slice"
//                         type="text"
//                         mode="cors"
//                         ></http-request>
//                     <code>//fetch-url</code> from <code>{//fetch-url}</code>
//                     <for-each select="//slice/request_slice/value/*">
//                         <ul>
//                             <var data-testid="request-section"><value-of select='name(.)'/></var>
//                             <for-each select="@*">
//                                 <div>
//                                     <var data-testid="section-attribute">@<value-of select='local-name(.)'/></var>
//                                     =
//                                     <code><value-of select='.'/></code>
//                                 </div>
//                             </for-each>
//                         </ul>
//                     </for-each>
//                 </template>
//             </custom-element>
//       </fieldset>
// `;
// GetByUrl.args               =
//     {
//         url: 'https://pokeapi.co/api/v2/pokemon?limit=6'
//
//     };
