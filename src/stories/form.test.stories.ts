// noinspection DuplicatedCode

import type { StoryObj }                        from '@storybook/web-components';
import {expect, within, userEvent} from '@storybook/test';

import '../custom-element/custom-element.js';

type TProps = { title: string; body:string};

type Story = StoryObj<TProps>;

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
{   title:      'form'
,   render
};

export default meta;

export const SystemMessage:Story =
{   args : {title: 'custom-validity boolean', body:`
    <p>type and then clear test in input should lead to system validation message shown next to input field.
        Something like <q>Please fill out this field</q>.</p>
    <custom-element>
        <template>
            <form>
                <label> Email
                    <input slice="username" slice-event="input" placeholder="non-empty" required data-testid="input-1">
                </label>
                <if test="//username/@validation-message">
                    <var data-testid="validation-msg">{//username/@validation-message}</var>
                </if>
                <button>Next</button>
            </form>
        </template>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const titleText = SystemMessage.args!.title as string;
        const canvas = within(canvasElement);

        await expect( canvas.queryByTestId('validation-msg')).toBeNull();
        const input = await canvas.findByTestId('input-1');
        input.focus();
        await userEvent.keyboard('abc');

        await userEvent.clear(input);
        await expect( canvas.queryByTestId('validation-msg')).toBeInTheDocument();
    },
};

export const FormData:Story =
{   args : {title: 'form-data populated', body:`
    <p>type and then clear test in input should lead to system validation message shown next to input field.
        Something like <q>Please fill out this field</q>.</p>
    <custom-element>
        <template>
            <form slice="signin-form" >
                <input name="f1" placeholder="non-empty" required data-testid="input-1"/>
                <input name="f2" placeholder="non-empty" required data-testid="input-2"/>
                <input name="f3" placeholder="non-empty" required data-testid="input-3"/>

                <button data-testid="next-button">Next</button><br/>
                f1: <code data-testid="c1">{ /datadom/slice/signin-form/form-data/f1 }</code><br/>
                f2: <code data-testid="c2">{                          //form-data/f2 }</code><br/>
                f3: <code data-testid="c3">{/datadom/slice/signin-form/form-data/f3}</code><br/>
            </form>
        </template>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await userEvent.type(canvas.getByTestId('input-1'), 'ABC');
        await userEvent.click(canvas.getByRole('button'));
        await expect( await canvas.findByText('ABC')).toBeInTheDocument();
        await userEvent.type(canvas.getByTestId('input-2'), 'DCE');
        await userEvent.click(canvas.getByRole('button'));
        await expect( await canvas.findByText('DCE')).toBeInTheDocument();
        await userEvent.type(canvas.getByTestId('input-3'), 'XYZ');
        canvas.getByTestId('input-1').focus();
        await expect( await canvas.findByText('XYZ')).toBeInTheDocument();
    },
};
export const SetValidityMessage:Story =
{   args : {title: 'setCustomValidity', body:`
    <p><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity">setCustomValidity()</a>
        invoked by <code>custom-validity</code> attribute. Type in the input fiels to observe the chars count in
        text, click "next" and observe same message in dropdown.
    </p>
    <custom-element>
        <template>
            <form>
                <input slice="s1" slice-event="input keyup" placeholder="type to see the custom error"
                    custom-validity=" concat( 'char count ', string-length(//s1) ) "
                    data-testid="input-1"/><br/>
                s1: <code data-testid="c1">{ //s1 }</code><br/>
                @validation-message: <var data-testid="validation-msg">{//s1/@validation-message}</var>
                <button>next</button>
            </form>
        </template>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await userEvent.type(canvas.getByTestId('input-1'), 'ABC');
        await expect( canvas.getByText('ABC')).toBeInTheDocument();
        await expect( canvas.getByText('char count 3')).toBeInTheDocument();
    },
};

export const FormCustomValidityBoolean:Story =
{   args : {title: 'form custom-validity, boolean', body:`
    <p> Form is valid only when input text length longer of 3 characters. </p>
    <custom-element>
        <template>
            <form slice="form-1" custom-validity=" string-length(//form-1//f1) &gt; 3 "
                data-testid="form-1"
                >
                <input name="f1" data-testid="input-1"/><br/>

                <input type="hidden" name="id" value="form--form-custom-validity-boolean"/>
                <input type="hidden" name="viewMode" value="story"/>
                //form-1//f1: <code data-testid="c1">{ //form-1//f1 }</code><br/>
                <button>next</button>
            </form>
        </template>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await userEvent.type(canvas.getByTestId('input-1'), 'AB');
        await userEvent.click(canvas.getByRole('button'));

        await expect( canvas.getByText('AB')).toBeInTheDocument(); // i.e. not reloaded by form submit
    },
};
export const FormCustomValidityString:Story =
{   args : {title: 'form custom-validity, string', body:`
    <p> Form is valid only when input text is longer of 3 characters, @validation-message propagated in form slot </p>
    <custom-element>
        <template>
            <form slice="form-1"
                custom-validity=" string-length(//form-1//f1) &gt; 3 ?? concat('should be more than 3 characters, now is ',string-length(//form-1//f1) ) "
                data-testid="form-1"
                >
                <input name="f1" data-testid="input-1"/><br/>

                <input type="hidden" name="id" value="form--form-custom-validity-string"/>
                <input type="hidden" name="viewMode" value="story"/>
                //form-1//f1: <code data-testid="c1">{ //form-1//f1 }</code><br/>
                //form-1/@validation-message: <code data-testid="c1">{ //@validation-message }</code><br/>
                <button>next</button>
            </form>
        </template>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await userEvent.type(canvas.getByTestId('input-1'), 'AB');
        await userEvent.click(canvas.getByRole('button'));

        await expect( canvas.getByText('AB')).toBeInTheDocument(); // i.e. not reloaded by form submit
        await expect( canvas.getByText('should be more than 3 characters, now is 2')).toBeInTheDocument();
    },
};
// custom validity rules on form : boolean and string values


const TestStories = { SystemMessage, FormData, SetValidityMessage, FormCustomValidityBoolean, FormCustomValidityString};

/* istanbul ignore else -- @preserve */
if( 'test' === import.meta.env.MODE )
{
    const {playStories} = await  import('./renderPlay');
    const {describe} = await import('vitest')
    describe('slots', () => playStories( TestStories, meta ) );
}
