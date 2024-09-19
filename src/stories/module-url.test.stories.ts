// noinspection DuplicatedCode

// importmap is located at .storybook/preview-head.html
// for vitest wrap `pathe.resolve` method to capture /tester/tester.html and redirect to its clone with ^^ injected
//      as in vite.config.js
// test requires bin/vitest/vitest-browser-importmaps.mjs to inject importmap into tester.html
// the relative path prefix in vitest is `../../..`

import type { StoryObj }             from '@storybook/web-components';
import {expect, getByTestId, within} from '@storybook/test';

import '../custom-element/custom-element.js';
import '../custom-element/module-url.js';
import {Demo, SrcAttribute}          from './location-element.test.stories';

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
{   title:      'module-url'
,   render
};

export default meta;

// for StoryBook './demo/embed-1.html' is sufficient as current page is on root level
// vitest page needs 3 levels up

export const RelativeToPagePath:Story  =
{   args : {title: '1. relative to page path', body:`
    <custom-element>
        <a href="../../../demo/embed-1.html">
            <custom-element src="../../../demo/embed-1.html"></custom-element>
        </a>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(RelativeToPagePath.args!.title as string);

        await expect(await canvas.findByText('🖖')).toBeInTheDocument();
        await expect(await canvas.findByText('embed-1.html')).toBeInTheDocument();
    },
};


export const ModuleBySymbolicName:Story  =
{   args : {title: '2. module by symbolic name', body:`
    <custom-element>
            <template>
                <module-url slice="lib-url" src="embed-lib"></module-url>
                <if test="//lib-url/@error">
                    <p>error: <b>{//lib-url/@error}</b></p>
                </if>
                check the link:
                <a href="{//lib-url}">
                    <custom-element src="embed-lib#embed-lib-component">
                        failed to load
                    </custom-element>
                </a>
            </template>
        </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const p = import.meta.resolve('embed-lib');
        const canvas = within(canvasElement);
        await canvas.findByText(ModuleBySymbolicName.args!.title as string);

        await expect(await canvas.findByText('check the link:')).toBeInTheDocument();
        await expect(await canvas.findByText('👋 from embed-lib-component')).toBeInTheDocument();
    },
};

export const MissingImportmapEntry:Story  =
{   args : {title: '3. module by symbolic name with missing importmap entry', body:`
    <custom-element>
        <template>
            <module-url slice="lib-url" src="fakedemo-lib/embed-lib.html"></module-url>
            <if test="//lib-url/@error">
                <p>error: <b>{//lib-url/@error}</b></p>
            </if>
            the link is broken:
            <a href="{//lib-url}">
                <custom-element src="fakedemo-lib/embed-lib.html#embed-lib-component">
                    failed to load
                </custom-element>
            </a>
        </template>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(MissingImportmapEntry.args!.title as string);

        await expect(await canvas.findByText('error:')).toBeInTheDocument();
        await expect(await canvas.findByText('failed to load')).toBeInTheDocument();
    },
};


export const ModuleByName:Story  =
{   args : {title: '4. module path by symbolic name', body:`
    <custom-element>
        <template>
            <module-url slice="lib-url" src="lib-root/embed-lib.html#embed-relative-hash"></module-url>
            <module-url slice="img-url" src="lib-root/Smiley.svg"></module-url>
            <if test="//lib-url/@error">
                <p>error: <b>{//lib-url/@error}</b></p>
            </if>
            check the link:
            <a href="{//lib-url}"> lib-root/embed-lib.html#embed-relative-hash <img src="{//img-url}" alt=""/></a>
            <custom-element src="lib-root/embed-lib.html#embed-relative-hash">
                failed to load
            </custom-element>

        </template>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(ModuleByName.args!.title as string);
        await expect(await canvas.findByText('👌 from embed-relative-hash invoking')).toBeInTheDocument();
        await expect(await canvas.findByText('lib-root/embed-lib.html#embed-relative-hash')).toBeInTheDocument();
        await expect(await canvas.findByText('#embed-lib-component')).toBeInTheDocument();
    },
};


export const HashWithinLib:Story  =
{   args : {title: '5. module path by symbolic name to internal link within lib', body:`
    <custom-element>
        <template>
            <module-url slice="lib-url" src="lib-root/embed-lib.html#embed-relative-file"></module-url>
            <if test="//lib-url/@error">
                <p>error: <b>{//lib-url/@error}</b></p>
            </if>
            check the link:
            <a href="{//lib-url}"> lib-root/embed-lib.html#embed-relative-file </a>
            <custom-element src="lib-root/embed-lib.html#embed-relative-file">
                failed to load
            </custom-element>
        </template>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(HashWithinLib.args!.title as string);

        await expect(await canvas.findByText('lib-root/embed-lib.html#embed-relative-file')).toBeInTheDocument();
        await expect(await canvas.findByText('👍 from embed-relative-file invoking')).toBeInTheDocument();
        await expect(await canvas.findByText('../embed-1.html')).toBeInTheDocument();
        await expect(await canvas.findByText('embed-1.html')).toBeInTheDocument();
        await expect(await canvas.findByText('🖖')).toBeInTheDocument();
    },
};


//#region unit tests
/* istanbul ignore else -- @preserve */
if(  'test' === import.meta.env.MODE &&
    !import.meta.url.includes('skiptest') )
{
    const mod = await import('./module-url.test.stories.ts?skiptest');
    const { testStoryBook } = await import('./testStoryBook')
    const { describe } = await import('vitest')
    describe(meta.title, () => testStoryBook( mod, meta ) );
}
//#endregion
