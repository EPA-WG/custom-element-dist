// noinspection DuplicatedCode

import type { StoryObj }             from '@storybook/web-components';
import {expect, getByTestId, within} from '@storybook/test';

import '../custom-element/custom-element.js';
import '../custom-element/location-element.js';

type TProps = { title: string; tag: string; slice: string; href: string; value:string; type:string; live:string; body:string};
const defs: TProps =
{   title:  ''
,     tag:  ''
,   slice:  'url-slice'
,     href:  ''
,   value:  ''
,    type:  ''
,    live:  ''
,    body:  ``
};
type Story = StoryObj<TProps>;
function sleep(ms: number) {    return new Promise((resolve) => setTimeout(resolve, ms)); }

function Template(args: TProps)
{
    const {title, tag, slice, href, value, type, live, body} = {...defs, ...args};
    return `
        <fieldset>
            <legend>${ title }</legend>

            <custom-element ${ tag ? `tag="${tag}"`:''} >
<template><!-- wrapping into template to prevent images loading within DCE declaration -->
    <location-element 
        slice="${ slice }" 
        ${ href   ? `href="${ href     }"`:''} 
        ${ type  ? `type="${type    }"`:''} 
        ${ live  ? `live="${live    }"`:''} 
        ${ value ? `value="${value  }"`:''} 
        ></location-element>
    
    
    ${ body }
    <xhtml:table>
        <xhtml:tbody>
            <xhtml:tr>
                <xhtml:th><h3> URL properties </h3></xhtml:th>
                <xhtml:td>{count(//value/@*)}</xhtml:td>
            </xhtml:tr>
            <apply-templates mode="attrs" select="//value/@*"></apply-templates>
        </xhtml:tbody>
    </xhtml:table>
    <xhtml:table>
            <h3> URL parameters </h3>
            <apply-templates mode="attrs" select="//params/*/*"></apply-templates>
    </xhtml:table>
    <xsl:template mode="attrs" match="*|@*">
        <xhtml:tr>
            <xhtml:th>{name()}</xhtml:th>
            <xhtml:td data-testid="param-{name()}">{.}</xhtml:td>
        </xhtml:tr>
    </xsl:template>
</template>
            </custom-element>
            ${ tag ? `<${tag}></${tag}>` : ''}            
      </fieldset>
  `;
}
const meta =
{   title:      'location-element'
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
    <button onclick="history.pushState( {'{}'},'', '/location.html?pushstate=p1&p2=P2#h1')">history.pushState</button>
    <button onclick="history.replaceState( {'{}'},'', '/vacation.html?replaceState=r1&r2=R2#h2')">history.replaceState</button>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(Demo.args!.title as string);
        const         val = (prop)=> canvas.getByTestId('param-'+prop).textContent.trim()
        ,          byText = txt =>canvas.getByText(txt)
        ,     expectMatch = (l,prop) => expect( val(prop)).toEqual(l[prop],prop)
        ,   locationProps = 'href,origin,protocol,host,hostname,port,pathname,search,hash'.split(',');

        locationProps.forEach( prop=>expectMatch(window.location,prop) )
        byText('history.pushState').click();
        await sleep(100);

        expect(val('pathname')).toEqual('/location.html');
        expect(val('search')).toEqual('?pushstate=p1&p2=P2');
        locationProps.forEach( prop=>expectMatch(window.location,prop) )

        byText('history.replaceState').click();
        await sleep(100);

        expect(val('pathname')).toEqual('/vacation.html');
        expect(val('search')).toEqual('?replaceState=r1&r2=R2');
        locationProps.forEach( prop=>expectMatch(window.location,prop) )
    },
};

export const SrcAttribute:Story  =
{   args : {title: 'scr attribute as URL', live:'live'
         , href:'/some/path?param1=/story/location-element--href-attribute?p1=P1&p2=P2#h1'
         , body:`
    <button onclick="document.querySelector('location-element').setAttribute('href','/location.html?a1=A1&b2=B2#h2')">/location.html?a1=A1&b2=B2#h2</button>
    <button onclick="document.querySelector('location-element').setAttribute('href','/vacation.html?c1=C1&d2=D2#h3')">/vacation.html?c1=C1&d2=D2#h3</button>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(SrcAttribute.args!.title as string);
        const         val = (prop)=> canvas.getByTestId('param-'+prop).textContent.trim()
        ,          byText = txt =>canvas.getByText(txt)
        ,     expectMatch = (l,prop) => expect( val(prop)).toEqual(l[prop],prop)
        ,   locationProps = 'origin,protocol,host,hostname,port'.split(',');
        locationProps.forEach( prop=>expectMatch(window.location,prop) )

        byText('/location.html?a1=A1&b2=B2#h2').click();
        await sleep(10);
        expect(val('pathname')).toEqual('/location.html', 'pathname #2');
        expect(val('search')).toEqual('?a1=A1&b2=B2');
        expect(val('hash')).toEqual('#h2');
        expect(val('a1')).toEqual('A1');
        expect(val('b2')).toEqual('B2');

        byText('/vacation.html?c1=C1&d2=D2#h3').click();
        await sleep(10);
        expect(val('pathname')).toEqual('/vacation.html', 'pathname #3');
        expect(val('search')).toEqual('?c1=C1&d2=D2');
        expect(val('hash')).toEqual('#h3');
        expect(val('c1')).toEqual('C1');
        expect(val('d2')).toEqual('D2');

    },
};
