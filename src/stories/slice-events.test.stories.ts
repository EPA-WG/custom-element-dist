// noinspection DuplicatedCode

import type { StoryObj }           from '@storybook/web-components';
import {expect, userEvent, within, spyOn} from '@storybook/test';

import '../custom-element/custom-element.js';

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
{   title:      'slice-events'
,   render
};

export default meta;

export const SliceInitChangeEvent:Story  =
{   args : {title: 'Slice initialization, change on event', body:`
    <p>initial value should be 0; + and - should change the number in input field</p>
    <custom-element>
            <template>
                <button slice="clickcount" slice-event="click" slice-value="//clickcount + 1">+</button>
                <button slice="clickcount" slice-event="click" slice-value="//clickcount - 1">-</button>
                <input  slice="clickcount" type="number" value="{//clickcount ?? 0}">
                <code data-testid="slice-value">{ //clickcount }</code>
            </template>
        </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const titleText = SliceInitChangeEvent.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);
        const code = await canvas.findByTestId('slice-value');
        const input = await canvasElement.querySelector('[type="number"]') as HTMLInputElement;
        await expect(code).toBeInTheDocument();
        expect(code.textContent).to.equal('0', 'initial slot value 0');
        expect(input.value).to.equal('0', 'initial input value 0');

        canvasElement.querySelector('[slice-value="//clickcount + 1"]').click()
        await sleep(10);
        expect(code.textContent).to.equal('1', 'increment to 1');
        expect(input.value).to.equal('1', 'increment input 1');

        canvasElement.querySelector('[slice-value="//clickcount + 1"]').click();
        await sleep(10);
        canvasElement.querySelector('[slice-value="//clickcount + 1"]').click();
        await sleep(10);
        expect(code.textContent).to.equal('3', 'double increment to 3');
        expect(input.value).to.equal('3', 'double increment input to 3');

        canvasElement.querySelector('[slice-value="//clickcount - 1"]').click();
        await sleep(10);
        expect(code.textContent).to.equal('2', 'decrement to 2');
        expect(input.value).to.equal('2', 'decrement input to 2');
    },
};

export const RealtimeEventInSlice:Story  =
{   args : {title: 'Realtime Slice data on event', body:`
    <p>move the mouse over TEXTAREA and click to see slice and slice event changed</p>
    <custom-element>
        <template>
            <textarea   slice="s" slice-value="concat('x:', //@pageX)" slice-event="mousemove click"
                        style="width:16rem;height:16rem;box-shadow: inset {//@offsetX}px {//@offsetY}px gold;"></textarea><br/>
            //slice/s                   : <code data-testid="//slice/s"                 >{ //slice/s                }</code>  <br/>
            //slice/s/event/@offsetY    : <code data-testid="//slice/s/event/@offsetY"  >{ //slice/s/event/@offsetY }</code>  <br/>
            event type                  : <code data-testid="//slice/s/event/@type"     >{ //slice/s/event/@type    }</code>
        </template>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const titleText = RealtimeEventInSlice.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);
        const sliceText = ()=> canvas.getByTestId('//slice/s').textContent
        ,       offsetY = ()=> canvas.getByTestId('//slice/s/event/@offsetY').textContent
        ,     eventType = ()=> canvas.getByTestId('//slice/s/event/@type').textContent;

        const input = await canvasElement.querySelector('textarea');
        // expect(input).toBeInTheDocument();
        expect( sliceText() ).to.equal('', 'initial slot value blank');
        expect( offsetY()   ).to.equal('', 'initial slot offsetY blank');
        expect( eventType() ).to.equal('', 'initial slot event blank');
        const emitXy = ( x, y, eventName ) =>
        {   const ev = new MouseEvent(eventName,
            {   screenX:  x,
                screenY:  y,
                clientX:  x,
                clientY:  y,
                offsetX:  x,
                offsetY:  y,
            });
            input.dispatchEvent( ev );
        };

        emitXy(20,20,'click');
        await sleep(10);
        expect( sliceText() ).to.equal('x:20', 'click slot value 20');
        expect( Number(offsetY())   ).to.be.lessThan(0, 'offsetY click');
        expect( eventType() ).to.equal('click', 'click event type');
    },
};

// export const DoubleEventInSlice:Story  =
// {   args : {title: 'slice-event="change submit change submit" ', body:`
//     <p> double event should invoke only single handler.
//         The test is not visual, see "Interactions" in StoryBook </p>
//     <custom-element>
//         <template>
//             <form slice-event="submit submit" slice="form-1">
//                 <input slice-event="change change" required slice="field-1" />
//                 <button>next</button>
//             </form>
//         </template>
//     </custom-element>
// `}
// ,   play: async ({canvasElement}) =>
//     {
//         const titleText = RealtimeEventInSlice.args!.title as string;
//         const canvas = within(canvasElement);
//         const input = await canvas.findByRole('textbox');
//         const dce = input.parentElement.parentElement.parentElement;
//         const f = spyOn( dce, 'onCustomValidity')
//         input.focus();
//         await userEvent.type ( input, 'AB');
//         canvas.getByRole('button').focus()
//         await userEvent.clear( input );
//         await userEvent.click( canvas.getByRole('button'));
// sleep(100);
//         // await expect(f).toHaveBeenCalledTimes(1);
//
//     },
// };

const TestStories = { SliceInitChangeEvent, RealtimeEventInSlice };

/* istanbul ignore else -- @preserve */
if( 'test' === import.meta.env.MODE )
{
    const {playStories} = await  import('./renderPlay');
    const {describe} = await import('vitest')
    describe('slots', () => playStories( TestStories, meta ) );
}
