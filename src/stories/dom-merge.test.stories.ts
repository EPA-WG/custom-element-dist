// noinspection DuplicatedCode

import type { StoryObj }                        from '@storybook/web-components';
import {expect, getByTestId, within, userEvent} from '@storybook/test';

import '../custom-element/custom-element.js';
import {
    ByIdWithinXsltFile, EmbeddingInAnotherFile,
    ExternalHtmlFile, ExternalHtmlFileInline, ExternalSvg, ExternalXsltFile, HtmlWithinHtmlFile, MathMLWithinHtmlFile,
    MissingIdWithinXsltFile,
    NoTag,
    SvgWithinHtmlFile, TemplateInPage
} from './external-template.test.stories';

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
{   title:      'dom-merge'
,   render
};

export default meta;

export const CharsCountInTextarea:Story  =
{   args : {title: 'Chars count in textarea', body:`
    <p>Counter update happens on change event(focus change). The update should not interfere with the input</p>
    <custom-element>
        <form>
            <label>
                <textarea slice="text-container" data-testid="textarea-id">Hello world!</textarea>
                <span> Chars count:
                    <code data-testid="counter-id">{string-length(//slice/text-container/text())}</code>
                </span>
            </label>
             <br/><input placeholder="after textarea input, click here " data-testid="refocus-id" />
        </form>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const titleText = CharsCountInTextarea.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);
        await sleep(100);
        expect(await canvas.findByTestId('textarea-id')).toBeInTheDocument();
        const textarea = canvas.getByTestId('textarea-id');
        textarea.value ='';
        textarea.focus();
        await userEvent.keyboard(titleText);
        expect(textarea.value).toEqual(titleText);
        expect(textarea.value.length).toEqual(titleText.length);
        debugger;
        canvas.getByTestId('refocus-id').focus();
        await sleep(10);
        expect(canvas.getByTestId('counter-id').textContent).toEqual(''+titleText?.length,'counter of symbols');
    },
};

export const WordCountOnType:Story  =
{   args : {title: 'Word count in HTML input field', body:`
    <p>Counter update happens on keyup event. The update should not interfere with the input</p>
    <custom-element>
            <form>
                <label>
                    <input type="text" value="{//txt ?? 'Type time update'}" slice="txt" slice-event="init input" data-testid="input-id">

                    <span> Character count:
                        <code data-testid="chars-id"
                            >{
                                string-length(//slice/txt)
                            }</code>
                    </span>
                    <span> Word count:
                        <code data-testid="words-id"
                            >{
                                string-length(normalize-space(//slice/txt)) -
                                string-length(translate(normalize-space(//slice/txt), ' ', '')) + 1
                            }</code>
                        <!-- The expression first normalizes the string by removing leading and trailing whitespace and
                            collapsing internal whitespace into a single space. It then subtracts the length of the string
                            with all spaces removed from the length of the original string,
                            and adds 1 to account for the last word.
                        -->
                    </span>

                </label>
                <p><b>txt</b> slice:</p> <blockquote> {//slice/txt} </blockquote>
            </form>
        </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const titleText = WordCountOnType.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);
        const input = await canvas.findByTestId('input-id');
        input.value = '';
        input.focus();
        expect(input).toBeInTheDocument();
        await userEvent.keyboard(titleText);
        await sleep(10);
        expect(input.value).toEqual(titleText);
        expect(canvas.getByTestId('chars-id').textContent.trim()).toEqual(''+titleText.length, 'counter of symbols');
        expect(titleText.split(' ').length).toEqual(6, 'counter of words in text sample');
        expect(canvas.getByTestId('words-id').textContent.trim()).toEqual('6', 'counter of words in render');
    },
};

const TestStories = { CharsCountInTextarea, WordCountOnType };

/* istanbul ignore else -- @preserve */
if( 'test' === import.meta.env.MODE )
{
    const {playStories} = await  import('./renderPlay');
    const {describe} = await import('vitest')
    describe('slots', () => playStories( TestStories, meta ) );
}
