import{w as u,u as s,e as n}from"./index-CGuyH0k-.js";import"./custom-element-Bwx7otrT.js";import"./location-element-hKpcXCdn.js";const b={title:"",slice:"url-slice",href:"",live:"",body:""};function l(e){return new Promise(t=>setTimeout(t,e))}function y(e){const{title:t,body:i}={...b,...e};return`
        <fieldset>
            <legend>${t}</legend>

            <custom-element>
<template><!-- wrapping into template to prevent images loading within DCE declaration -->

    ${i}
    
</template>
            </custom-element>
      </fieldset>
  `}const m={title:"location-element set URL",render:y},o={args:{title:"1. Set the page URL by location.hash",body:`
            <button value="#dce1" slice="set-button" slice-event="click">#dce1</button>
            <button value="#dce2" slice="set-button" slice-event="click">#dce2</button>
            <location-element method="location.href" src="{//set-button/@value}"></location-element>`},play:async({canvasElement:e})=>{const t=u(e);await t.findByText(o.args.title),await s.click(t.getByText("#dce1")),await l(1),await n(window.location.hash).toEqual("#dce1"),await s.click(t.getByText("#dce2")),await l(1),await n(window.location.hash).toEqual("#dce2")}},c={args:{title:"2. Set the page URL by method",body:`
            <style>
                button{ display: block; width: 100%; }
            </style>
            <button value="location.href"           slice="set-button" slice-event="click"> location.href        </button>
            <button value="location.hash"           slice="set-button" slice-event="click"> location.hash        </button>
            <button value="location.assign"         slice="set-button" slice-event="click"> location.assign      </button>
            <button value="location.replace"        slice="set-button" slice-event="click"> location.replace     </button>
            <button value="history.pushState"       slice="set-button" slice-event="click"> history.pushState    </button>
            <button value="history.replaceState"    slice="set-button" slice-event="click"> history.replaceState </button>
            <location-element method="{//set-button/@value}" ></location-element>`},play:async({canvasElement:e})=>{const t=u(e),i=e.querySelector("location-element");await t.findByText(c.args.title);async function a(r,h){i.setAttribute("method",""),i.setAttribute("src",r),await s.click(t.getByText(h)),await l(1),await n(window.location.hash).toEqual(r)}await a("#byHash","location.hash"),await a("#byhref","location.href"),await a("#byassign","location.assign"),await a("#byreplace","location.replace"),await a("#by.history.pushState","history.pushState"),await a("#by.history.replaceState","history.replaceState")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: '1. Set the page URL by location.hash',
    body: \`
            <button value="#dce1" slice="set-button" slice-event="click">#dce1</button>
            <button value="#dce2" slice="set-button" slice-event="click">#dce2</button>
            <location-element method="location.href" src="{//set-button/@value}"></location-element>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(DynamicSrc.args!.title as string);
    await userEvent.click(canvas.getByText('#dce1'));
    await sleep(1);
    await expect(window.location.hash).toEqual('#dce1');
    await userEvent.click(canvas.getByText('#dce2'));
    await sleep(1);
    await expect(window.location.hash).toEqual('#dce2');
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: '2. Set the page URL by method',
    body: \`
            <style>
                button{ display: block; width: 100%; }
            </style>
            <button value="location.href"           slice="set-button" slice-event="click"> location.href        </button>
            <button value="location.hash"           slice="set-button" slice-event="click"> location.hash        </button>
            <button value="location.assign"         slice="set-button" slice-event="click"> location.assign      </button>
            <button value="location.replace"        slice="set-button" slice-event="click"> location.replace     </button>
            <button value="history.pushState"       slice="set-button" slice-event="click"> history.pushState    </button>
            <button value="history.replaceState"    slice="set-button" slice-event="click"> history.replaceState </button>
            <location-element method="{//set-button/@value}" ></location-element>\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const le = canvasElement.querySelector('location-element');
    await canvas.findByText(DynamicMethod.args!.title as string);
    async function testHash(hash, text) {
      le.setAttribute('method', ''); // to prevent immediate URL change
      le.setAttribute('src', hash);
      await userEvent.click(canvas.getByText(text));
      await sleep(1);
      await expect(window.location.hash).toEqual(hash);
    }
    await testHash('#byHash', 'location.hash');
    await testHash('#byhref', 'location.href');
    await testHash('#byassign', 'location.assign');
    await testHash('#byreplace', 'location.replace');
    await testHash('#by.history.pushState', 'history.pushState');
    await testHash('#by.history.replaceState', 'history.replaceState');
  }
}`,...c.parameters?.docs?.source}}};const w=["DynamicSrc","DynamicMethod"];export{c as DynamicMethod,o as DynamicSrc,w as __namedExportsOrder,m as default};
