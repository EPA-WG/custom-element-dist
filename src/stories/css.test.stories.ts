import type {StoryObj}                         from "@storybook/web-components";
import {within, expect}                        from "@storybook/test";

import '../custom-element/custom-element.js';
import {CharsCountInTextarea, WordCountOnType} from './dom-merge.test.stories';

type CssProps = { title: string; tag: string; style: string; slot: string; payload: string };
const defs = {title: '', tag: '', style: '', slot: '', payload: ''};

type Story = StoryObj<CssProps>;

function render(args: CssProps) {
    const {title, tag, style, slot, payload} = { ...defs, ...args };
    return `
        <fieldset>
            <legend>${ title }</legend>
            <custom-element ${ tag ? `tag="${tag}"` : ''} >
                <template>
                    <style>
                        ${ style }
                    </style>
                    <u><slot>${ slot }</slot></u>
                </template>
            </custom-element>
            ${ payload }
        </fieldset>
  `;
}

const meta = { title: 'Css', render };

export default meta;

const GREEN = `<b style="color:green">green</b>`
const RED = `<i style="color:red">red</i>`

export const StyleDoesNotLeak: Story =
{   args:
    {   title: `The default color should stay on this label, the message inside should be ${GREEN}`
    ,   style: `color:green`
    ,    slot: 'text has to be green'
    , payload: '<u>no tags</u>'
    }
,   play: async ({canvasElement}) =>
    {   const canvas = within(canvasElement);
        const el = await canvas.findByText('text has to be green');
        const st = getComputedStyle(el);
        const color = st.getPropertyValue('color');
        // @ts-ignore
        expect(color).to.equal('rgb(0, 128, 0)')
        await expect( el.closest('custom-element')).toBeInTheDocument();
        const dce = el.closest('custom-element');
        await expect( dce.xsltString).toContain('<xsl:stylesheet');
        await expect( dce.dce.localName).toEqual('custom-element');
        await expect( dce.dce.xsltString).toEqual(dce.xsltString);
        await expect( dce.dce.xslt.documentElement.tagName ).toEqual('xsl:stylesheet');
    },
};

export const StyleIn2Instances: Story =
{   args:
    {   title:  `The default color should apply ${GREEN} in all instances`
    ,   style:  `color:green`
    ,    slot:  'text has to be green'
    ,     tag:  'dce-2'
    , payload:  `<u>2 instances:</u> <dce-2 id="dce21"></dce-2> * <dce-2 id="dce22"></dce-2>`
    }
,   play: async ({canvasElement}) =>
    {
        await within(canvasElement).findByText('2 instances:');
        const color = ( css:string )=>
        {   const el = canvasElement.querySelector(css);
            const st =  getComputedStyle( el! );
            return  st.getPropertyValue('color');
        };
        expect( color('legend'  )        ).to.not.equal(color('b'));
        expect( color('legend'  )        ).to.not.equal(color('b'));
        expect( color('#dce21 u')        ).to    .equal(color('b'));
        expect( color('#dce22 u')        ).to    .equal(color('b'));
    },
};

// noinspection CssInvalidPseudoSelector
export const OverrideInPayload: Story =
{   args:
    {   title:  `${GREEN} in instance style can be overridden in payload as ${RED} in 1st instance`
    ,   style:  `color:green`
    ,    slot:  'is green'
    ,     tag:  'dce-3'
    , payload:  `<u>should be</u> ${RED}:
                <dce-3 id="dce32">
                    <template>
                        <style> color:red; </style>
                        <u>red</u>
                    </template>
                </dce-3> <br/>
                should be ${GREEN}: 
                <dce-3 id="dce31">green</dce-3>   `
    }
,   play: async ({canvasElement}) =>
    {
        await within(canvasElement).findByText('should be');

        const color = ( css:string )=>
        {   const el = canvasElement.querySelector(css);
            const st =  getComputedStyle( el! );
            return  st.getPropertyValue('color');
        };
        expect( color('legend'  )        ).to.not.equal(color('b'));
        expect( color('#dce31 u')        ).to    .equal(color('b'));
        expect( color('#dce32 u')        ).to    .equal(color('i'));
    },
};

//#region unit tests
/* istanbul ignore else -- @preserve */
if(  'test' === import.meta.env.MODE &&
    !import.meta.url.includes('skiptest') )
{
    const mod = await import('./css.test.stories.ts?skiptest');
    const { testStoryBook } = await import('./testStoryBook')
    const { describe } = await import('vitest')
    describe(meta.title, () => testStoryBook( mod, meta ) );
}
//#endregion
