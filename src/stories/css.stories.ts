import type {Meta, StoryObj} from "@storybook/web-components";
import {within, expect} from "@storybook/test";
import {describe, it, } from 'vitest';

import '../custom-element.js';

type CssProps = { title: string; tag: string; style: string; slot: string; payload: string };
const defs = { title: '', tag: '', style: '', slot: '', payload: '' };

type Story = StoryObj<CssProps>;

function Template({title, tag, style, slot, payload}: CssProps) {
    return `
        <fieldset>
            <legend>${title ?? ''}</legend>
            <custom-element ${tag ? `tag="${tag}"` : ''} >
                <template>
                    <style>
                        ${style ?? ''}
                    </style>
                    <u>${slot ?? ''}</u>
                </template>
            </custom-element>
            ${payload ?? ''}
        </fieldset>
  `;
}
async function renderPlay(story:Story){

    document.body.innerHTML = Template({...defs, ...story.args});
    await new Promise(resolve => setTimeout( async ()=>{
        // @ts-ignore
        await story.play({ canvasElement: document.body.firstElementChild as HTMLElement });
        resolve(0);
    }, 0 ));
}

const meta = {
    title: 'Css',
    render: (args: CssProps) => Template(args),
} satisfies Meta<CssProps>;

export default meta;

const GREEN = `<b style="color:green">green</b>`
// const RED = `<i style="color:red">red</i>`

export const StyleDoesNotLeak: Story =
    {
        args: {
            title: `The default color should stay on this   label, the message inside should be ${GREEN}`
            , style: `color:green`
            , slot: 'text has to be green'
        }
        , play: async ({canvasElement}) => {
            const canvas = within(canvasElement);
            debugger;
            const el = await canvas.findByText(StyleDoesNotLeak.args!.slot as string);
            const st = getComputedStyle(el);
            const color = st.getPropertyValue('color');
            // @ts-ignore
            expect(color).to.equal('rgb(0, 128, 0)')
        },
    };
describe('Primary', () => {
    it('StyleDoesNotLeak', async () => renderPlay( StyleDoesNotLeak ));
});