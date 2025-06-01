// noinspection DuplicatedCode

import type { StoryObj }                        from '@storybook/web-components';
import {expect, within, userEvent, fireEvent} from '@storybook/test';

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

export const OrderPreservingOn2ndTransform:Story  =
{   args : {title: 'Order preserving on 2nd transform', body:`
    <p>IF condition content should be displayed in place where it is defined (not shifted down on the parent children)</p>
    <custom-element>
        <form slice="f1">
            <label data-testid="cb1">
                <input type="checkbox"  name="c1" />
                click to display #1 bellow
            </label>
            <br data-testid="beforeC1"/>
            <if test="//c1">
                <p data-testid="isC1">#1</p>
            </if>
            <label data-testid="cb2">
                <input type="checkbox"  name="c2" />
                click to display #2 bellow
            </label>
            <br data-testid="beforeC2"/>
            <if test="//c2">
                <p>#2</p>
            </if>
        </form>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const titleText = OrderPreservingOn2ndTransform.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);

        // userEvent breaks under FF in vitest, fireEvent works
        await fireEvent.click(await canvas.findByTestId('cb1'));
        await expect(await canvas.findByText('#1')).toBeInTheDocument();

        await fireEvent.click(canvas.getByTestId('cb2'));
        await expect(await canvas.findByText('#2')).toBeInTheDocument();
        await expect(canvas.getByTestId("beforeC1").nextElementSibling).toEqual(canvas.getByTestId("isC1"))
    },
};
export const ReadSystemValidityMessage:Story  =
{   args : {title: 'read system validity message', body:`
    <p>validationMessage propagated into slice as 'validation-message' attribute</p>
    <ol>
        <li> type in input field</li>
        <li> delete input field content</li>
        <li> observe the warning in string after input</li>
        <li> Click Next observe the system warning in dropdown over input</li>
    </ol>
    <custom-element>
        <template>
            <form slice="email-form">
                <label> Email
                    <input slice="username" slice-event="input" placeholder="non-empty" required data-testid="inp1">
                </label>
                <if test="//username/@validation-message">
                    <var data-testid="var1">{//username/@validation-message}</var>
                </if>
                <button data-testid="btn1">Next</button>
            </form>
        </template>
    </custom-element>
`}
,   play: async ({canvasElement}) =>
    {
        const titleText = ReadSystemValidityMessage.args!.title as string;
        const canvas = within(canvasElement);
        await canvas.findByText(titleText);
        await userEvent.type(canvas.getByTestId('inp1'),'Hi');
        await userEvent.clear(canvas.getByTestId('inp1'));
        await userEvent.click(canvas.getByTestId('btn1'));
        await expect(await canvas.findByTestId('var1')).toBeInTheDocument();
        await expect(canvas.getByTestId("var1").textContent).toEqual(canvas.getByTestId("inp1").validationMessage);
        await expect(canvas.getByTestId("var1").textContent.length>1).toEqual(true);
    },
};

export const EmbedDCE:Story  =
{   args : {title: 'Render inner components', body:`
    <template id="test-icon">
        <attribute name="img"></attribute>
        <i>{img}</i>
    </template>
    <template id="test-button">
        <attribute name="text"></attribute>
        <button>
            <slot>{text}</slot>
        </button>
    </template>
    
    <custom-element src="#test-icon" tag="test-icon"></custom-element>
    <custom-element src="#test-button" tag="test-button"></custom-element>
    <test-button>icon:<test-icon img="👍"></test-icon></test-button>
`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await expect(await canvas.findByText('👍')).toBeInTheDocument();
    },
};

//#region unit tests
/* istanbul ignore else -- @preserve */
if(  'test' === import.meta.env.MODE &&
    !import.meta.url.includes('skiptest') )
{
    const mod = await import('./dom-merge.test.stories.ts?skiptest');
    const { testStoryBook } = await import('./testStoryBook')
    const { describe } = await import('vitest')
    describe(meta.title, () => testStoryBook( mod, meta ) );
}
//#endregion
