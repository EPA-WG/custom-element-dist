// noinspection DuplicatedCode

import type { StoryObj }             from '@storybook/web-components';
import {expect, getByTestId, within} from '@storybook/test';

import '../custom-element/custom-element.js';
import {frameCanvas} from "./frame.canvas";

type TProps = { title: string; body:string};

type Story = StoryObj<TProps>;
function sleep(ms: number) {    return new Promise((resolve) => setTimeout(resolve, ms)); }

function render(args: TProps)
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
,   render
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
        const val = (prop:string)=> canvas.getByTestId(prop).textContent?.trim();

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
    <custom-element src="/confused.svg">
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

        await expect(canvas.getByText('inline DCE loading from SVG ...')).toBeInTheDocument();

        // needs separate test
        // await expect( await canvas.findByText('loading from SVG ...')).toBeInTheDocument();

        expect(canvasElement.querySelector('[src="/confused.svg"]').innerHTML).to.include('loading from SVG ...');
        await expect(await canvas.findByText('fallback for missing image')).toBeInTheDocument();
        await expect(await canvas.findByTitle('Confused')).toBeInTheDocument();
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
        await expect(await canvas.findByTestId('data-fruit')).toHaveTextContent('🍌');
        await expect(await canvas.findByTestId('data-smile')).toHaveTextContent('👼');
    },
};

export const ExternalHtmlFile:Story  =
{   args : {title: 'external HTML template', body:`
    <custom-element tag="dce-external-5" src="/html-template.html">
                <template><i>loading from HTML file ...</i></template>
            </custom-element>
            <dce-external-5 title="DCE with external XSLT template" data-fruit="🍌">Hi</dce-external-5>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(ExternalHtmlFile.args!.title as string);
        await canvas.findByText('👋');
        const t5 = canvasElement.querySelector('dce-external-5').innerHTML;
        expect(t5).to.include('👋');
        expect(t5).to.include('👌');
        expect(t5).to.include('<svg');
        expect(t5).to.include('<math');
    },
};

export const ExternalHtmlFileInline:Story  =
{   args : {title: 'external HTML template', body:`
            <custom-element src="/html-template.html" data-smile="👼" data-basket="🍒">
                <i>inline DCE loading from HTML file ...</i>
            </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(ExternalHtmlFileInline.args!.title as string);
        await canvas.findByText('👋');
        const t5 = canvasElement.innerHTML;
        expect(t5).to.include('👋');
        expect(t5).to.include('👌');
        expect(t5).to.include('<svg');
        expect(t5).to.include('<math');
    },
};

export const HtmlWithinHtmlFile:Story  =
{   args : {title: 'external HTML template - html by id', body:`
        <custom-element src="/html-template.html#wave">
            <template><i>loading HTML from templates file ...</i></template>
        </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(HtmlWithinHtmlFile.args!.title as string);
        expect(await canvas.findByText('👋')).toBeInTheDocument();
    },
};

export const SvgWithinHtmlFile:Story  =
{   args : {title: 'external HTML template - SVG by id', body:`
        <custom-element src="/html-template.html#dwc-logo">
            <template><i>loading  SVG from templates file ...</i></template>
        </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(SvgWithinHtmlFile.args!.title as string);
        expect(await canvas.findByTestId('svg-test')).toBeInTheDocument();
    },
};

export const MathMLWithinHtmlFile:Story  =
{   args : {title: '6. external HTML template - MathML by id', body:`
                <iframe src="/demo/external-templates-sb-6.html" data-testid="fr"></iframe>

`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(MathMLWithinHtmlFile.args!.title as string);
        const frCanvas = await frameCanvas('fr',canvas);

        const ml = await frCanvas.findByTestId('ml-test');
        expect(ml.firstElementChild.localName).toEqual('mrow');
    },
};

export const ByIdWithinXsltFile:Story  =
{   args : {title: '7. external XHTML template - xsl by id', body:`
        <iframe src="/demo/external-templates-sb-7.html" data-testid="fr"></iframe>

`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(ByIdWithinXsltFile.args!.title as string);
        const frCanvas = await frameCanvas('fr',canvas);

        await expect( await frCanvas.findByText('whole XSLT is embedded into HTML body') ).toBeInTheDocument();
        await expect( await frCanvas.findByText('./html-template.xhtml#embedded-xsl') ).toBeInTheDocument();
    },
};
export const MissingIdWithinXsltFile:Story  =
{   args : {title: 'external HTML template - missing id', body:`
    <custom-element src="/html-template.html#none">
        <template><i data-testid="no-id">element with id=none is missing in template</i></template>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(MissingIdWithinXsltFile.args!.title as string);
        await sleep(100);
        const ml = await canvas.findByTestId('no-id');
        expect(ml.textContent).to.include('element with id=none is missing in template');
    },
};
export const EmbeddingInAnotherFile:Story  =
{   args : {title: 'external file with embedding of another external DCE', body:`
    <custom-element src="/embed-1.html">
        loading from embed-1.html ...
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(EmbeddingInAnotherFile.args!.title as string);
        await sleep(1);
        expect(await canvas.findByText('embed-1.html')).toBeInTheDocument();
        expect(await canvas.findByText('🖖')).toBeInTheDocument();
    },
};

//#region unit tests
/* istanbul ignore else -- @preserve */
if(  'test' === import.meta.env.MODE &&
    !import.meta.url.includes('skiptest') )
{
    const mod = await import('./external-template.test.stories.ts?skiptest');
    const { testStoryBook } = await import('./testStoryBook')
    const { describe } = await import('vitest')
    describe(meta.title, () => testStoryBook( mod, meta ) );
}
//#endregion
