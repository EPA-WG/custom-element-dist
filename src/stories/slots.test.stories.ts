// noinspection DuplicatedCode

import type { StoryObj }             from '@storybook/web-components';
import { expect, within } from '@storybook/test';

import '../custom-element/custom-element.js';

type TProps = { title: string; tag: string; attributes: string; slot: string; payload:string; };

type Story = StoryObj<TProps>;

function render(args: TProps)
{
    const { title, tag, attributes, slot, payload} = args;
    return `
        <fieldset>
            <legend>${ title }</legend>
            <custom-element
                tag="${ tag }"
                hidden
                >
                ${ slot }
            </custom-element>
            <${ tag } ${attributes}>${ payload }</${ tag }>
        </fieldset>
  `;
}
const meta =
{   title:      'slots'
,   render
};

export default meta;

export const Regular:Story  =
{   args:
    {     title: 'custom-element'
    ,       tag: 'my-component'
    ,      slot: `Hello World`
    ,   payload: `🍋`
    }
,   play: async ({canvasElement}) =>
    {
        const titleText = Regular.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);
        const el = canvasElement;

        expect(el.querySelectorAll('my-component').length).to.equal(1);
        expect(el.querySelector('my-component').innerHTML).to.include(`Hello World`);
    }
};


export const NamedSlot:Story  =
{   args:
    {     title: 'named slot'
    ,       tag: 'dce-1-slot'
    ,      slot: `<slot name="slot1"> 🥦</slot>`
    ,   payload: `<i slot="slot1">🥕</i>`
    }
,   play: async ({canvasElement}) =>
    {
        const titleText = NamedSlot.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);
        const el = canvasElement;
        expect(el.querySelectorAll('dce-1-slot').length).to.equal(1);
        expect(el.querySelector('dce-1-slot').innerText).to.equal(`🥕`);
    }
};


export const DoubleSlot:Story  =
{   args:
    {   title: 'same slot can be used multiple times in template'
    ,     tag: 'dce-2-slots'
    ,    slot: `<slot name="slot2"> 😃</slot> and again: <slot name="slot2"> 😃</slot>`
    , payload: `<i slot="slot2">🥕</i>`
    }
,   play: async ({canvasElement}) =>
    {
        const titleText = DoubleSlot.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);
        const el = canvasElement;
        expect(el.querySelectorAll('dce-2-slots').length).to.equal(1);
        expect(el.querySelector('dce-2-slots').innerText).to.equal(`🥕 and again: 🥕`);
    }
};

export const NamedUnnamedDefaultSlot:Story  =
{   args:
    {   title: 'named and un-named default slot'
    ,     tag: 'dce-4-slot'
    ,    slot: `#1 <slot name=""> 😃</slot> <br/>
                #2 <slot> 😃</slot>`
    , payload: `<i slot="">🥕</i>`
    }
,   play: async ({canvasElement}) =>
    {
        const titleText = NamedUnnamedDefaultSlot.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);
        const el = canvasElement;
        expect(el.querySelectorAll('dce-4-slot').length).to.equal(1);
        expect(el.querySelector('dce-4-slot').innerText).to.include(`#1 🥕`);
        expect(el.querySelector('dce-4-slot').innerText).to.include(`#2 🥕`);
    }
};

export const NamedDefaultSlot:Story  =
{   args:
    {   title: 'two named default slot'
    ,     tag: 'dce-3-slot'
    ,    slot: `#1 <slot name=""> 😃</slot> <br/>
                #2 <slot name=""> 😃</slot>`
    , payload: `<i slot="">🥕</i>`
    }
,   play: async ({canvasElement}) =>
    {
        const titleText = NamedDefaultSlot.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);
        const el = canvasElement;
        expect(el.querySelectorAll('dce-3-slot').length).to.equal(1);
        expect(el.querySelector('dce-3-slot').innerText).to.include(`#1 🥕`);
        expect(el.querySelector('dce-3-slot').innerText).to.include(`#2 🥕`);
    }
};

export const DefaultSlot:Story  =
{   args:
    {   title: 'default slot'
    ,     tag: 'greet-element'
    ,    slot: `<slot> Hello </slot> World!`
    , payload: `👋`
    }
,   play: async ({canvasElement}) =>
    {
        const titleText = DefaultSlot.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);
        const el = canvasElement;
        expect(el.querySelectorAll('greet-element').length).to.equal(1);
        expect(el.querySelector('greet-element').innerText).to.include(`👋 World!`);
    }
};

export const TemplateWithAttributesAndCondition:Story  =
{   args:
    {      title: '💪 DCE template'
,        tag: 'pokemon-tile'
, attributes: ` title="bulbasaur" data-smile="👼" pokemon-id="1" `
,       slot: `
<template>
    <h3><value-of select="title"></value-of></h3> <!-- title is an attribute in instance
                                                 mapped into /*/attributes/title -->
    <if test="//smile">                 <!-- data-smile DCE instance attribute,
                                                 mapped into /*/dataset/smile
                                                 used in condition -->
                                            <!-- data-smile DCE instance attribute, used as HTML -->
        <div>Smile as: <value-of select="//smile"></value-of></div>
    </if>
    <!-- image would not be visible in sandbox, see live demo -->
    <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/{pokemon-id}.svg" alt="{title} image">
                                            <!-- image-src and title are DCE instance attributes,
                                                 mapped into /*/attributes/
                                                 used within output attribute via curly brackets -->

                                            <!-- \`slot name=xxx\` replaced with elements with \`slot=xxx\` attribute -->
    <p><slot name="description"><i>description is not available</i></slot></p>
    <for-each select="//*[@pokemon-id]">
                                            <!-- loop over payload elements with \`pokemon-id\` attribute -->
        <button>
            <img height="32"
                src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/{@pokemon-id}.svg"
                alt="{text()}"/>
            <br/>
            <value-of select='text()'/>
        </button>

    </for-each>
</template>
`
, payload: `<p slot="description">Bulbasaur is a cute Pokémon born with a large seed firmly affixed to its back;
                the seed grows in size as the Pokémon  does.</p>
            <ul>
                <li pokemon-id="2">ivysaur</li>
                <li pokemon-id="3">venusaur</li>
            </ul>
`
}
,   play: async ({canvasElement}) =>
    {
        const titleText = TemplateWithAttributesAndCondition.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);
        const el = canvasElement;
        expect(el.querySelectorAll('pokemon-tile').length).to.equal(1);
        const p = el.querySelector('pokemon-tile');
        expect(p.querySelector('img').src).to.equal('https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg');
        expect(p.querySelector('h3').innerText).to.equal('bulbasaur');
        expect(p.innerText).to.include('Smile as: 👼');
        expect(p.querySelector('p[slot="description"]').innerText).to.include('Bulbasaur is a cute Pokémon');
    }
};

const TestStories = {Regular, NamedSlot, DoubleSlot, NamedUnnamedDefaultSlot, NamedDefaultSlot
, DefaultSlot, TemplateWithAttributesAndCondition};

/* istanbul ignore else -- @preserve */
if( 'test' === import.meta.env.MODE )
{
    const {playStories} = await  import('./renderPlay');
    const {describe} = await import('vitest')
    describe('slots', () => playStories( TestStories, meta ) );
}
