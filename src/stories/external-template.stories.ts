// noinspection DuplicatedCode

import type { StoryObj }             from '@storybook/web-components';
import {expect, getByTestId, within} from '@storybook/test';

import '../custom-element/custom-element.js';

type TProps = { title: string; body:string};

type Story = StoryObj<TProps>;
function sleep(ms: number) {    return new Promise((resolve) => setTimeout(resolve, ms)); }

function Template(args: TProps)
{
    const {title,  body} = args;
    return `
        <fieldset>
            <legend>${ title }</legend>
            ${ body }
        </fieldset>
  `;
}
const meta =
{   title:      'external-templates'
,   render:     (args: TProps) => Template(args)
,   renderPlay: async function renderPlay(story: StoryObj)
    {
        // @ts-ignore
        document.body.innerHTML = ( story.render ? story : meta ).render(story.args);
        await new Promise(resolve => setTimeout(async () =>
        {
            // @ts-ignore
            await story.play({canvasElement: document.body.firstElementChild as HTMLElement});
            resolve(0);
        }, 0));
    },
};

export default meta;

export const TemplateInPage:Story  =
{   args : {title: 'Template in page DOM', body:`
    <template id="template1">
    <slot>Hello</slot> World!
    </template>
    
    <custom-element tag="dce-internal" src="#template1"></custom-element>
    <!-- no need for loading fallback as the template exists -->
    
    <dce-internal data-testid="slot-override">👋</dce-internal>
    <dce-internal  data-testid="slot-default"></dce-internal>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(TemplateInPage.args!.title as string);
        const         val = (prop)=> canvas.getByTestId(prop).textContent.trim();

        expect(val('slot-override')).toEqual('👋 World!');
        expect(val('slot-default' )).toEqual('Hello World!');
    },
};

export const NoTag:Story  =
{   args : {title: 'no tag, template in same DOM', body:`
<template id="template2">
    🏗️ construction
</template>

<custom-element src="#template2"></custom-element>
<custom-element src="#template2"></custom-element>`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(NoTag.args!.title as string);

        expect(canvasElement.querySelectorAll('custom-element')[0].textContent.trim()).toEqual('🏗️ construction');
        expect(canvasElement.querySelectorAll('custom-element')[1].textContent.trim()).toEqual('🏗️ construction');
    },
};

export const ExternalSvg:Story  =
{   args : {title: 'External SVG as template', body:`
    <custom-element tag="dce-external" src="/confused.svg">
        <template><i>loading from SVG ...</i></template>
    </custom-element>
    <dce-external></dce-external>
    <custom-element src="confused.svg">
        <i>inline DCE loading from SVG ...</i>
    </custom-element>
    <custom-element src="no.svg">
        <i>fallback for missing image</i>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(ExternalSvg.args!.title as string);
        expect(canvasElement.querySelector('[src="confused.svg"]').innerHTML).to.include('loading from SVG ...');
        await sleep(100);
        expect(canvasElement.querySelector('dce-external').innerHTML).to.include('<svg');
        expect(canvasElement.querySelector('[src="no.svg"]').innerHTML).to.include('Vitest Browser Tester');
        // "fallback for missing image" is not shown in test as test does not return 404, see test on 404 instead
    },
};

export const ExternalXsltFile:Story  =
{   args : {title: 'External XSLT file', body:`
    <custom-element tag="dce-external-4" src="/tree.xsl">
        <template><i>loading from XSLT ...</i></template>
    </custom-element>
    <dce-external-4 title="DCE with external XSLT template" data-fruit="🍌">Hi</dce-external-4>
    <hr/>
    <custom-element src="/tree.xsl" data-smile="👼" data-basket="🍒">
        <i>inline DCE loading from XSLT ...</i>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(ExternalXsltFile.args!.title as string);
        expect(canvasElement.querySelector('dce-external-4').innerHTML).to.include('Hi');
        expect(canvasElement.querySelector('[data-smile="👼"]').innerHTML).to.include('loading from XSLT ...');
        await sleep(100);
        expect(canvas.getByTestId('data-fruit').innerHTML).to.include('🍌');
        expect(canvas.getByTestId('data-smile').innerHTML).to.include('👼');
    },
};
