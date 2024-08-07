// noinspection DuplicatedCode

import type { StoryObj }                        from '@storybook/web-components';
import {expect, within} from '@storybook/test';

import '../custom-element/custom-element.js';
import '../custom-element/http-request.js';

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
{        title: 'site'
// ,         tags: ['autodocs']
,       render
};

export default meta;

export const VersionsSelect:Story  =
{   args : {title: 'Versions of custom-element', body:`
    <p>Select the version of custom-element StoryBook.</p>
    <custom-element >
        <template>
            <http-request 
                url="https://registry.npmjs.org/@epa-wg/custom-element-dist" 
                method="GET" 
                header-accept="application/json"
                slice="versions-ajax" ></http-request>
            
            <xhtml:select slice="selected-version">
                <for-each select="//versions/*">
                    <option>
                       {./@version} 
                    </option>
                </for-each>
            </xhtml:select>
        </template>
    </custom-element>
    <dce-link id="dce1"></dce-link>
`}
,   play: async ({canvasElement}) =>
    {
        const titleText = VersionsSelect.args!.title as string;
        const canvas = within(canvasElement)
        , code = async (id) => (await canvas.findByTestId(id)).textContent.trim();

        await sleep(20)
        // expect( await code('p1') ).toEqual('default_P1' );
        // expect( await code('p2') ).toEqual('always_p2'  );
        // expect( await code('p3') ).toEqual('def_P3'     );
    },
};


/* istanbul ignore else -- @preserve */
if(  'test' === import.meta.env.MODE &&
    !import.meta.url.includes('skiptest') )
{
    const mod = await import('./attributes.test.stories.ts?skiptest');
    const { testStoryBook } = await import('./testStoryBook')
    const { describe } = await import('vitest')
    describe(meta.title, () => testStoryBook( mod, meta ) );
}
