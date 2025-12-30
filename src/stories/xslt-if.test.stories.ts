// noinspection DuplicatedCode

import type { StoryObj } from '@storybook/web-components';
import { expect, userEvent, within } from '@storybook/test';

import '../custom-element/custom-element.js';

type TProps = { title: string; tag: string; template: string; payload: string };

type Story = StoryObj<TProps>;

function render(args: TProps) {
    const { title, tag, template, payload } = args;
    return `
        <fieldset>
            <legend>${title}</legend>
            <custom-element tag="${tag}" hidden>
                <template>
                    ${template}
                </template>
            </custom-element>
            ${payload}
        </fieldset>
    `;
}

const meta = {
    title: 'xslt-if',
    render
};

export default meta;

export const MultipleIfOrderingIssue: Story = {
    args: {
        title: 'KNOWN ISSUE: Multiple IF blocks - out of order',
        tag: 'multi-if-order-issue',
        template: `
            <div data-testid="whole-text">
                <label><input type="checkbox" data-testid="toggle-a" slice="show-a" value="AA"  /> A</label>
               
                <hr/>
                ▶
                <if test="//show-a = 'AA'">
                    !A
                </if>            
                ◀
            </div>
            <if test="//show-a = 'AA'">
                <div data-testid="t-1">T1</div>
            </if>            
        `,
        payload: `
            <multi-if-order-issue></multi-if-order-issue>
        `
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Initially ▶\s+◀ should be visible, !A should not
        const container = await canvas.findByTestId('whole-text');
        expect(container.textContent).to.toMatch(/▶\s+◀/);

        // check A - show !A
        const toggleA = await canvas.findByTestId('toggle-a');
        debugger;
        await userEvent.click(toggleA);

        expect( await await canvas.findByTestId('t-1')).toBeInTheDocument();
        // !A is rendered
        expect(container.textContent).to.toMatch(/\!A/);
        // !A afer ▶
        expect(container.textContent).to.toMatch(/▶\s+\!A/);
        // !A before ◀
        expect(container.textContent).to.toMatch(/\!A\s+◀/);
    }
};


//#region unit tests
/* istanbul ignore else -- @preserve */
if ('test' === import.meta.env.MODE &&
    !import.meta.url.includes('skiptest')) {
    const mod = await import('./xslt-if.test.stories.ts?skiptest');
    const { testStoryBook } = await import('./testStoryBook');
    const { describe } = await import('vitest');
    describe(meta.title, () => testStoryBook(mod, meta));
}
//#endregion
