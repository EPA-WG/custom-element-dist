import{w as o,e as l}from"./index-CGuyH0k-.js";import"./custom-element-PxTx2W9y.js";function y(t){const{title:a,tag:n,attributes:e,slot:s,payload:g}=t;return`
        <fieldset>
            <legend>${a}</legend>
            <custom-element
                tag="${n}"
                hidden
                >
                ${s}
            </custom-element>
            <${n} ${e}>${g}</${n}>
        </fieldset>
  `}const h={title:"slots",render:y},i={args:{title:"custom-element",tag:"my-component",slot:"Hello World",payload:"🍋"},play:async({canvasElement:t})=>{const a=i.args.title;await o(t).findByText(a);const e=t;l(e.querySelectorAll("my-component").length).to.equal(1),l(e.querySelector("my-component").innerHTML).to.include("Hello World")}},r={args:{title:"named slot",tag:"dce-1-slot",slot:'<slot name="slot1"> 🥦</slot>',payload:'<i slot="slot1">🥕</i>'},play:async({canvasElement:t})=>{const a=r.args.title;await o(t).findByText(a);const e=t;l(e.querySelectorAll("dce-1-slot").length).to.equal(1),l(e.querySelector("dce-1-slot").innerText).to.equal("🥕")}},c={args:{title:"same slot can be used multiple times in template",tag:"dce-2-slots",slot:'<slot name="slot2"> 😃</slot> and again: <slot name="slot2"> 😃</slot>',payload:'<i slot="slot2">🥕</i>'},play:async({canvasElement:t})=>{const a=c.args.title;await o(t).findByText(a);const e=t;l(e.querySelectorAll("dce-2-slots").length).to.equal(1),l(e.querySelector("dce-2-slots").innerText).to.equal("🥕 and again: 🥕")}},d={args:{title:"named and un-named default slot",tag:"dce-4-slot",slot:`#1 <slot name=""> 😃</slot> <br/>
                #2 <slot> 😃</slot>`,payload:'<i slot="">🥕</i>'},play:async({canvasElement:t})=>{const a=d.args.title;await o(t).findByText(a);const e=t;l(e.querySelectorAll("dce-4-slot").length).to.equal(1),l(e.querySelector("dce-4-slot").innerText).to.include("#1 🥕"),l(e.querySelector("dce-4-slot").innerText).to.include("#2 🥕")}},u={args:{title:"two named default slot",tag:"dce-3-slot",slot:`#1 <slot name=""> 😃</slot> <br/>
                #2 <slot name=""> 😃</slot>`,payload:'<i slot="">🥕</i>'},play:async({canvasElement:t})=>{const a=u.args.title;await o(t).findByText(a);const e=t;l(e.querySelectorAll("dce-3-slot").length).to.equal(1),l(e.querySelector("dce-3-slot").innerText).to.include("#1 🥕"),l(e.querySelector("dce-3-slot").innerText).to.include("#2 🥕")}},m={args:{title:"default slot",tag:"greet-element",slot:"<slot> Hello </slot> World!",payload:"👋"},play:async({canvasElement:t})=>{const a=m.args.title;await o(t).findByText(a);const e=t;l(e.querySelectorAll("greet-element").length).to.equal(1),l(e.querySelector("greet-element").innerText).to.include("👋 World!")}},p={args:{title:"💪 DCE template",tag:"pokemon-tile",attributes:' title="bulbasaur" data-smile="👼" pokemon-id="1" ',slot:`
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
`,payload:`<p slot="description">Bulbasaur is a cute Pokémon born with a large seed firmly affixed to its back;
                the seed grows in size as the Pokémon  does.</p>
            <ul>
                <li pokemon-id="2">ivysaur</li>
                <li pokemon-id="3">venusaur</li>
            </ul>
`},play:async({canvasElement:t})=>{const a=p.args.title;await o(t).findByText(a);const e=t;l(e.querySelectorAll("pokemon-tile").length).to.equal(1);const s=e.querySelector("pokemon-tile");l(s.querySelector("img").src).to.equal("https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg"),l(s.querySelector("h3").innerText).to.equal("bulbasaur"),l(s.innerText).to.include("Smile as: 👼"),l(s.querySelector('[slot="description"]').innerText).to.include("Bulbasaur is a cute Pokémon")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'custom-element',
    tag: 'my-component',
    slot: \`Hello World\`,
    payload: \`🍋\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = Regular.args!.title as string;
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    const el = canvasElement;
    expect(el.querySelectorAll('my-component').length).to.equal(1);
    expect(el.querySelector('my-component').innerHTML).to.include(\`Hello World\`);
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'named slot',
    tag: 'dce-1-slot',
    slot: \`<slot name="slot1"> 🥦</slot>\`,
    payload: \`<i slot="slot1">🥕</i>\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = NamedSlot.args!.title as string;
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    const el = canvasElement;
    expect(el.querySelectorAll('dce-1-slot').length).to.equal(1);
    expect(el.querySelector('dce-1-slot').innerText).to.equal(\`🥕\`);
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'same slot can be used multiple times in template',
    tag: 'dce-2-slots',
    slot: \`<slot name="slot2"> 😃</slot> and again: <slot name="slot2"> 😃</slot>\`,
    payload: \`<i slot="slot2">🥕</i>\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = DoubleSlot.args!.title as string;
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    const el = canvasElement;
    expect(el.querySelectorAll('dce-2-slots').length).to.equal(1);
    expect(el.querySelector('dce-2-slots').innerText).to.equal(\`🥕 and again: 🥕\`);
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'named and un-named default slot',
    tag: 'dce-4-slot',
    slot: \`#1 <slot name=""> 😃</slot> <br/>
                #2 <slot> 😃</slot>\`,
    payload: \`<i slot="">🥕</i>\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = NamedUnnamedDefaultSlot.args!.title as string;
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    const el = canvasElement;
    expect(el.querySelectorAll('dce-4-slot').length).to.equal(1);
    expect(el.querySelector('dce-4-slot').innerText).to.include(\`#1 🥕\`);
    expect(el.querySelector('dce-4-slot').innerText).to.include(\`#2 🥕\`);
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'two named default slot',
    tag: 'dce-3-slot',
    slot: \`#1 <slot name=""> 😃</slot> <br/>
                #2 <slot name=""> 😃</slot>\`,
    payload: \`<i slot="">🥕</i>\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = NamedDefaultSlot.args!.title as string;
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    const el = canvasElement;
    expect(el.querySelectorAll('dce-3-slot').length).to.equal(1);
    expect(el.querySelector('dce-3-slot').innerText).to.include(\`#1 🥕\`);
    expect(el.querySelector('dce-3-slot').innerText).to.include(\`#2 🥕\`);
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'default slot',
    tag: 'greet-element',
    slot: \`<slot> Hello </slot> World!\`,
    payload: \`👋\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = DefaultSlot.args!.title as string;
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    const el = canvasElement;
    expect(el.querySelectorAll('greet-element').length).to.equal(1);
    expect(el.querySelector('greet-element').innerText).to.include(\`👋 World!\`);
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: '💪 DCE template',
    tag: 'pokemon-tile',
    attributes: \` title="bulbasaur" data-smile="👼" pokemon-id="1" \`,
    slot: \`
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

                                            <!-- \\\`slot name=xxx\\\` replaced with elements with \\\`slot=xxx\\\` attribute -->
    <p><slot name="description"><i>description is not available</i></slot></p>
    <for-each select="//*[@pokemon-id]">
                                            <!-- loop over payload elements with \\\`pokemon-id\\\` attribute -->
        <button>
            <img height="32"
                src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/{@pokemon-id}.svg"
                alt="{text()}"/>
            <br/>
            <value-of select='text()'/>
        </button>

    </for-each>
</template>
\`,
    payload: \`<p slot="description">Bulbasaur is a cute Pokémon born with a large seed firmly affixed to its back;
                the seed grows in size as the Pokémon  does.</p>
            <ul>
                <li pokemon-id="2">ivysaur</li>
                <li pokemon-id="3">venusaur</li>
            </ul>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = TemplateWithAttributesAndCondition.args!.title as string;
    const canvas = within(canvasElement);
    await canvas.findByText(titleText);
    const el = canvasElement;
    expect(el.querySelectorAll('pokemon-tile').length).to.equal(1);
    const p = el.querySelector('pokemon-tile');
    expect(p.querySelector('img').src).to.equal('https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg');
    expect(p.querySelector('h3').innerText).to.equal('bulbasaur');
    expect(p.innerText).to.include('Smile as: 👼');
    expect(p.querySelector('[slot="description"]').innerText).to.include('Bulbasaur is a cute Pokémon');
  }
}`,...p.parameters?.docs?.source}}};const b=["Regular","NamedSlot","DoubleSlot","NamedUnnamedDefaultSlot","NamedDefaultSlot","DefaultSlot","TemplateWithAttributesAndCondition"];export{m as DefaultSlot,c as DoubleSlot,u as NamedDefaultSlot,r as NamedSlot,d as NamedUnnamedDefaultSlot,i as Regular,p as TemplateWithAttributesAndCondition,b as __namedExportsOrder,h as default};
