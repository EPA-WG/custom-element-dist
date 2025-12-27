// noinspection DuplicatedCode

import type { StoryObj } from '@storybook/web-components';
import { expect, userEvent, within } from '@storybook/test';

import '../custom-element/custom-element.js';

type TProps = { title: string; tag: string; template: string; payload: string };

type Story = StoryObj<TProps>;

function sleep(ms: number) { return new Promise((resolve) => setTimeout(resolve, ms)); }

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
    title: 'xslt-conditionals',
    render
};

export default meta;

export const IfTrue: Story = {
    args: {
        title: 'xsl:if - condition is true',
        tag: 'if-true-test',
        template: `
            <attribute name="show-message"></attribute>
            <if test="//@show-message">
                <span data-testid="result">Message is visible</span>
            </if>
        `,
        payload: `<if-true-test show-message="yes"></if-true-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const result = await canvas.findByTestId('result');
        expect(result).toBeInTheDocument();
        expect(result).toHaveTextContent('Message is visible');
    }
};

export const IfFalse: Story = {
    args: {
        title: 'xsl:if - condition is false',
        tag: 'if-false-test',
        template: `
            <attribute name="show-message"></attribute>
            <if test="//@show-message = 'yes'">
                <span data-testid="hidden-result">Should not appear</span>
            </if>
            <span data-testid="fallback">Fallback content</span>
        `,
        payload: `<if-false-test show-message="no"></if-false-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const fallback = await canvas.findByTestId('fallback');
        expect(fallback).toBeInTheDocument();
        expect(canvasElement.querySelector('[data-testid="hidden-result"]')).toBeNull();
    }
};

export const IfNotExists: Story = {
    args: {
        title: 'xsl:if - attribute not exists',
        tag: 'if-not-exists-test',
        template: `
            <attribute name="optional"></attribute>
            <if test="not(//attributes/@optional)">
                <span data-testid="result">No attribute provided</span>
            </if>
            <if test="//attributes/@optional">
                <span data-testid="has-attr">Attribute exists</span>
            </if>
        `,
        payload: `<if-not-exists-test></if-not-exists-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const result = await canvas.findByTestId('result');
        expect(result).toBeInTheDocument();
        expect(result).toHaveTextContent('No attribute provided');
        expect(canvasElement.querySelector('[data-testid="has-attr"]')).toBeNull();
    }
};

export const ChooseWhenOtherwise: Story = {
    args: {
        title: 'xsl:choose/when/otherwise - basic switch',
        tag: 'choose-basic-test',
        template: `
            <attribute name="status"></attribute>
            <choose>
                <when test="//attributes/@status = 'success'">
                    <span data-testid="result" class="success">Operation succeeded</span>
                </when>
                <when test="//attributes/@status = 'error'">
                    <span data-testid="result" class="error">Operation failed</span>
                </when>
                <otherwise>
                    <span data-testid="result" class="unknown">Unknown status</span>
                </otherwise>
            </choose>
        `,
        payload: `<choose-basic-test status="success"></choose-basic-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const result = await canvas.findByTestId('result');
        expect(result).toBeInTheDocument();
        expect(result).toHaveTextContent('Operation succeeded');
        expect(result).toHaveClass('success');
    }
};

export const ChooseSecondWhen: Story = {
    args: {
        title: 'xsl:choose - second when branch',
        tag: 'choose-second-test',
        template: `
            <attribute name="status"></attribute>
            <choose>
                <when test="//attributes/@status = 'success'">
                    <span data-testid="result" class="success">Operation succeeded</span>
                </when>
                <when test="//attributes/@status = 'error'">
                    <span data-testid="result" class="error">Operation failed</span>
                </when>
                <otherwise>
                    <span data-testid="result" class="unknown">Unknown status</span>
                </otherwise>
            </choose>
        `,
        payload: `<choose-second-test status="error"></choose-second-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const result = await canvas.findByTestId('result');
        expect(result).toBeInTheDocument();
        expect(result).toHaveTextContent('Operation failed');
        expect(result).toHaveClass('error');
    }
};

export const ChooseOtherwise: Story = {
    args: {
        title: 'xsl:choose - otherwise fallback',
        tag: 'choose-otherwise-test',
        template: `
            <attribute name="status"></attribute>
            <choose>
                <when test="//attributes/@status = 'success'">
                    <span data-testid="result" class="success">Operation succeeded</span>
                </when>
                <when test="//attributes/@status = 'error'">
                    <span data-testid="result" class="error">Operation failed</span>
                </when>
                <otherwise>
                    <span data-testid="result" class="unknown">Unknown status</span>
                </otherwise>
            </choose>
        `,
        payload: `<choose-otherwise-test status="pending"></choose-otherwise-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const result = await canvas.findByTestId('result');
        expect(result).toBeInTheDocument();
        expect(result).toHaveTextContent('Unknown status');
        expect(result).toHaveClass('unknown');
    }
};

export const ChooseNoAttribute: Story = {
    args: {
        title: 'xsl:choose - no attribute provided',
        tag: 'choose-no-attr-test',
        template: `
            <attribute name="level"></attribute>
            <choose>
                <when test="//attributes/@level = 'high'">
                    <span data-testid="result">High priority</span>
                </when>
                <when test="//attributes/@level = 'low'">
                    <span data-testid="result">Low priority</span>
                </when>
                <otherwise>
                    <span data-testid="result">Default priority</span>
                </otherwise>
            </choose>
        `,
        payload: `<choose-no-attr-test></choose-no-attr-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const result = await canvas.findByTestId('result');
        expect(result).toBeInTheDocument();
        expect(result).toHaveTextContent('Default priority');
    }
};

export const NestedConditions: Story = {
    args: {
        title: 'Nested conditionals',
        tag: 'nested-cond-test',
        template: `
            <attribute name="type"></attribute>
            <attribute name="active"></attribute>
            <choose>
                <when test="//attributes/@type = 'user'">
                    <if test="//attributes/@active = 'true'">
                        <span data-testid="result">Active user</span>
                    </if>
                    <if test="//attributes/@active != 'true'">
                        <span data-testid="result">Inactive user</span>
                    </if>
                </when>
                <otherwise>
                    <span data-testid="result">Not a user</span>
                </otherwise>
            </choose>
        `,
        payload: `<nested-cond-test type="user" active="true"></nested-cond-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const result = await canvas.findByTestId('result');
        expect(result).toBeInTheDocument();
        expect(result).toHaveTextContent('Active user');
    }
};

export const NestedConditionsInactive: Story = {
    args: {
        title: 'Nested conditionals - inactive user',
        tag: 'nested-cond-inactive-test',
        template: `
            <attribute name="type"></attribute>
            <attribute name="active"></attribute>
            <choose>
                <when test="//attributes/@type = 'user'">
                    <if test="//attributes/@active = 'true'">
                        <span data-testid="result">Active user</span>
                    </if>
                    <if test="//attributes/@active != 'true'">
                        <span data-testid="result">Inactive user</span>
                    </if>
                </when>
                <otherwise>
                    <span data-testid="result">Not a user</span>
                </otherwise>
            </choose>
        `,
        payload: `<nested-cond-inactive-test type="user" active="false"></nested-cond-inactive-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const result = await canvas.findByTestId('result');
        expect(result).toBeInTheDocument();
        expect(result).toHaveTextContent('Inactive user');
    }
};

export const NumericComparison: Story = {
    args: {
        title: 'Numeric comparison in conditions',
        tag: 'numeric-cond-test',
        template: `
            <attribute name="count"></attribute>
            <choose>
                <when test="//attributes/@count > 10">
                    <span data-testid="result">Many items</span>
                </when>
                <when test="//attributes/@count > 0">
                    <span data-testid="result">Some items</span>
                </when>
                <otherwise>
                    <span data-testid="result">No items</span>
                </otherwise>
            </choose>
        `,
        payload: `<numeric-cond-test count="15"></numeric-cond-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const result = await canvas.findByTestId('result');
        expect(result).toBeInTheDocument();
        expect(result).toHaveTextContent('Many items');
    }
};

export const NumericComparisonLow: Story = {
    args: {
        title: 'Numeric comparison - low value',
        tag: 'numeric-cond-low-test',
        template: `
            <attribute name="count"></attribute>
            <choose>
                <when test="//attributes/@count > 10">
                    <span data-testid="result">Many items</span>
                </when>
                <when test="//attributes/@count > 0">
                    <span data-testid="result">Some items</span>
                </when>
                <otherwise>
                    <span data-testid="result">No items</span>
                </otherwise>
            </choose>
        `,
        payload: `<numeric-cond-low-test count="5"></numeric-cond-low-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const result = await canvas.findByTestId('result');
        expect(result).toBeInTheDocument();
        expect(result).toHaveTextContent('Some items');
    }
};

export const BooleanAndCondition: Story = {
    args: {
        title: 'Boolean AND condition',
        tag: 'and-cond-test',
        template: `
            <attribute name="logged-in"></attribute>
            <attribute name="admin"></attribute>
            <if test="//attributes/@logged-in = 'true' and //attributes/@admin = 'true'">
                <span data-testid="result">Admin panel access granted</span>
            </if>
            <if test="not(//attributes/@logged-in = 'true' and //attributes/@admin = 'true')">
                <span data-testid="result">Access denied</span>
            </if>
        `,
        payload: `<and-cond-test logged-in="true" admin="true"></and-cond-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const result = await canvas.findByTestId('result');
        expect(result).toBeInTheDocument();
        expect(result).toHaveTextContent('Admin panel access granted');
    }
};

export const BooleanOrCondition: Story = {
    args: {
        title: 'Boolean OR condition',
        tag: 'or-cond-test',
        template: `
            <attribute name="role"></attribute>
            <if test="//attributes/@role = 'admin' or //attributes/@role = 'moderator'">
                <span data-testid="result">Elevated privileges</span>
            </if>
            <if test="not(//attributes/@role = 'admin' or //attributes/@role = 'moderator')">
                <span data-testid="result">Standard user</span>
            </if>
        `,
        payload: `<or-cond-test role="moderator"></or-cond-test>`
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);
        const result = await canvas.findByTestId('result');
        expect(result).toBeInTheDocument();
        expect(result).toHaveTextContent('Elevated privileges');
    }
};

export const MultipleInstances: Story = {
    args: {
        title: 'Multiple instances with different conditions',
        tag: 'multi-instance-test',
        template: `
            <attribute name="data-testid"></attribute>
            <attribute name="variant"></attribute>
            <choose>
                <when test="//attributes/@variant = 'primary'">
                    <button data-testid="{$data-testid}-primary" class="primary">Primary Button</button>
                </when>
                <when test="//attributes/@variant = 'secondary'">
                    <button data-testid="{$data-testid}-secondary" class="secondary">Secondary Button</button>
                </when>
                <otherwise>
                    <button data-testid="{$data-testid}-otherwise" class="default">Default Button</button>
                </otherwise>
            </choose>
        `,
        payload: `
            <multi-instance-test data-testid="btn1" variant="primary"></multi-instance-test>
            <multi-instance-test data-testid="btn2" variant="secondary"></multi-instance-test>
            <multi-instance-test data-testid="btn3" variant="unknown"></multi-instance-test>
        `
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);

        const btn1 = await canvas.findByTestId('btn1-primary');
        expect(btn1).toHaveTextContent('Primary Button');
        expect(btn1).toHaveClass('primary');

        const btn2 = await canvas.findByTestId('btn2-secondary');
        expect(btn2).toHaveTextContent('Secondary Button');
        expect(btn2).toHaveClass('secondary');

        const btn3 = await canvas.findByTestId('btn3-otherwise');
        expect(btn3).toHaveTextContent('Default Button');
        expect(btn3).toHaveClass('default');
    }
};

/**
 * KNOWN ISSUE: Multiple IF blocks ordering
 *
 * When multiple <if> blocks are triggered, their content may be rendered
 * out of the original template order (placed at the end).
 *
 * Workaround: Wrap each <if> in its own container element (e.g., <div>).
 *
 * Note: <for-each> with conditions may have similar ordering issues
 * unless a key mechanism is implemented.
 */

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

export const MultipleIfOrderingWorkaround: Story = {
    args: {
        title: 'WORKAROUND: Wrap IF in container to preserve order',
        tag: 'multi-if-order-fix',
        template: `
            <attribute name="show-a"></attribute>
            <attribute name="show-b"></attribute>
            <attribute name="show-c"></attribute>
            <span data-testid="before">Before</span>
            <div data-testid="container-a">
                <if test="//@show-a = 'true'">
                    <span data-testid="a">A</span>
                </if>
                <if test="not(//@show-a = 'true')">
                    <span data-testid="not-a">not-A</span>
                </if>
            </div>
            <span data-testid="middle">Middle</span>
            <div data-testid="container-b">
                <if test="//@show-b = 'true'">
                    <span data-testid="b">B</span>
                </if>
                <if test="not(//@show-b = 'true')">
                    <span data-testid="not-b">not-B</span>
                </if>
            </div>
            <span data-testid="after">After</span>
            <div data-testid="container-c">
                <if test="//@show-c = 'true'">
                    <span data-testid="c">C</span>
                </if>
                <if test="not(//@show-c = 'true')">
                    <span data-testid="not-c">not-C</span>
                </if>
            </div>
            <span data-testid="end">End</span>
        `,
        payload: `
            <div>
                <label><input type="checkbox" data-testid="toggle-a" slice="show-a" slice-value="true" slice-event="change" checked /> Show A</label>
                <label><input type="checkbox" data-testid="toggle-b" slice="show-b" slice-value="true" slice-event="change" checked /> Show B</label>
                <label><input type="checkbox" data-testid="toggle-c" slice="show-c" slice-value="true" slice-event="change" checked /> Show C</label>
            </div>
            <multi-if-order-fix show-a="true" show-b="true" show-c="true"></multi-if-order-fix>
        `
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await sleep(50);

        // Helper to get current order of top-level elements
        const dce = canvasElement.querySelector('multi-if-order-fix');
        const getContainerOrder = () => {
            const children = dce?.children;
            const order: string[] = [];
            if (children) {
                for (const child of Array.from(children)) {
                    const testId = child.getAttribute('data-testid');
                    if (testId) order.push(testId);
                }
            }
            return order;
        };

        // Initially all A, B, C should be visible, not-A, not-B, not-C should not
        expect(await canvas.findByTestId('before')).toBeInTheDocument();
        expect(await canvas.findByTestId('a')).toBeInTheDocument();
        expect(await canvas.findByTestId('middle')).toBeInTheDocument();
        expect(await canvas.findByTestId('b')).toBeInTheDocument();
        expect(await canvas.findByTestId('after')).toBeInTheDocument();
        expect(await canvas.findByTestId('c')).toBeInTheDocument();
        expect(await canvas.findByTestId('end')).toBeInTheDocument();

        // Negative conditions should not be present initially
        expect(canvasElement.querySelector('[data-testid="not-a"]')).toBeNull();
        expect(canvasElement.querySelector('[data-testid="not-b"]')).toBeNull();
        expect(canvasElement.querySelector('[data-testid="not-c"]')).toBeNull();

        // Container order should be preserved
        expect(getContainerOrder()).toEqual([
            'before', 'container-a', 'middle', 'container-b', 'after', 'container-c', 'end'
        ]);
        console.log('MultipleIfOrderingWorkaround - Initial order:', getContainerOrder().join(', '));

        // Uncheck A - should hide A and show not-A, container order preserved
        const toggleA = await canvas.findByTestId('toggle-a');
        await userEvent.click(toggleA);
        await sleep(100);

        expect(canvasElement.querySelector('[data-testid="a"]')).toBeNull();
        expect(await canvas.findByTestId('not-a')).toBeInTheDocument();
        expect(getContainerOrder()).toEqual([
            'before', 'container-a', 'middle', 'container-b', 'after', 'container-c', 'end'
        ]);
        console.log('MultipleIfOrderingWorkaround - After hiding A (order preserved):', getContainerOrder().join(', '));

        // Uncheck B - should hide B and show not-B, container order preserved
        const toggleB = await canvas.findByTestId('toggle-b');
        await userEvent.click(toggleB);
        await sleep(100);

        expect(canvasElement.querySelector('[data-testid="b"]')).toBeNull();
        expect(await canvas.findByTestId('not-b')).toBeInTheDocument();
        expect(getContainerOrder()).toEqual([
            'before', 'container-a', 'middle', 'container-b', 'after', 'container-c', 'end'
        ]);
        console.log('MultipleIfOrderingWorkaround - After hiding B (order preserved):', getContainerOrder().join(', '));

        // Uncheck C - should hide C and show not-C, container order preserved
        const toggleC = await canvas.findByTestId('toggle-c');
        await userEvent.click(toggleC);
        await sleep(100);

        expect(canvasElement.querySelector('[data-testid="c"]')).toBeNull();
        expect(await canvas.findByTestId('not-c')).toBeInTheDocument();
        expect(getContainerOrder()).toEqual([
            'before', 'container-a', 'middle', 'container-b', 'after', 'container-c', 'end'
        ]);
        console.log('MultipleIfOrderingWorkaround - After hiding C (order preserved):', getContainerOrder().join(', '));

        // Re-check A - should show A and hide not-A, container order still preserved
        await userEvent.click(toggleA);
        await sleep(100);

        expect(await canvas.findByTestId('a')).toBeInTheDocument();
        expect(canvasElement.querySelector('[data-testid="not-a"]')).toBeNull();
        expect(getContainerOrder()).toEqual([
            'before', 'container-a', 'middle', 'container-b', 'after', 'container-c', 'end'
        ]);
        console.log('MultipleIfOrderingWorkaround - After showing A again (order preserved):', getContainerOrder().join(', '));
    }
};

//#region unit tests
/* istanbul ignore else -- @preserve */
if ('test' === import.meta.env.MODE &&
    !import.meta.url.includes('skiptest')) {
    const mod = await import('./xslt-conditionals.test.stories.ts?skiptest');
    const { testStoryBook } = await import('./testStoryBook');
    const { describe } = await import('vitest');
    describe(meta.title, () => testStoryBook(mod, meta));
}
//#endregion
