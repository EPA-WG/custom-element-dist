// noinspection DuplicatedCode

import type {StoryObj} from '@storybook/web-components';
import {expect, getByTestId, userEvent, within} from '@storybook/test';

import '../custom-element/custom-element.js';
import '../custom-element/location-element.js';

type TProps = { title: string; slice: string; href: string; live: string; body: string };
const defs: TProps =
    {
        title: ''
        , slice: 'url-slice'
        , href: ''
        , live: ''
        , body: ``
    };
type Story = StoryObj<TProps>;

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function render(args: TProps) {
    const {title, body} = {...defs, ...args};
    return `
        <fieldset>
            <legend>${title}</legend>

            <custom-element>
<template><!-- wrapping into template to prevent images loading within DCE declaration -->

    ${body}
    
</template>
            </custom-element>
      </fieldset>
  `;
}

const meta =
    {
        title: 'location-element set URL'
        , render
    };

export default meta;

export const DynamicSrc: Story =
    {
        args: {
            title: '1. Set the page URL by location.hash', body: `
            <button value="#dce1" slice="set-button" slice-event="click">#dce1</button>
            <button value="#dce2" slice="set-button" slice-event="click">#dce2</button>
            <location-element method="location.href" src="{//set-button/@value}"></location-element>`
        }
        , play: async ({canvasElement}) => {
            const canvas = within(canvasElement);
            await canvas.findByText(DynamicSrc.args!.title as string);
            await userEvent.click(canvas.getByText('#dce1'));
            await sleep(1);
            await expect(window.location.hash).toEqual('#dce1')
            await userEvent.click(canvas.getByText('#dce2'));
            await sleep(1);
            await expect(window.location.hash).toEqual('#dce2')
        },
    };
export const DynamicMethod: Story =
    {
        args: {
            title: '2. Set the page URL by method', body: `
            <style>
                button{ display: block; width: 100%; }
            </style>
            <button value="location.href"           slice="set-button" slice-event="click"> location.href        </button>
            <button value="location.hash"           slice="set-button" slice-event="click"> location.hash        </button>
            <button value="location.assign"         slice="set-button" slice-event="click"> location.assign      </button>
            <button value="location.replace"        slice="set-button" slice-event="click"> location.replace     </button>
            <button value="history.pushState"       slice="set-button" slice-event="click"> history.pushState    </button>
            <button value="history.replaceState"    slice="set-button" slice-event="click"> history.replaceState </button>
            <location-element method="{//set-button/@value}" ></location-element>`
        }
        , play: async ({canvasElement}) => {
            const canvas = within(canvasElement);
            const le = canvasElement.querySelector('location-element');
            await canvas.findByText(DynamicMethod.args!.title as string);

            async function testHash(hash, text) {
                le.setAttribute('method', ''); // to prevent immediate URL change
                le.setAttribute('src', hash);
                await userEvent.click(canvas.getByText(text));
                await sleep(1);
                await expect(window.location.hash).toEqual(hash)
            }

            await testHash('#byHash', 'location.hash');
            await testHash('#byhref', 'location.href');
            await testHash('#byassign', 'location.assign');
            await testHash('#byreplace', 'location.replace');
            await testHash('#by.history.pushState', 'history.pushState');
            await testHash('#by.history.replaceState', 'history.replaceState');

        },
    };


//#region unit tests
/* istanbul ignore else -- @preserve */
if ('test' === import.meta.env.MODE &&
    !import.meta.url.includes('skiptest')) {
    const mod = await import('./set-url.test.stories.ts?skiptest');
    const {testStoryBook} = await import('./testStoryBook')
    const {describe} = await import('vitest')
    describe(meta.title, () => testStoryBook(mod, meta));
}
//#endregion
