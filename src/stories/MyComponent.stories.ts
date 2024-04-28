import type { Meta, StoryObj } from '@storybook/web-components';
import '../my-element.ts';

const meta: Meta = {   title: 'Example/my-element',

  component: 'my-element'
,  render: () => `<my-element></my-element>`,

};

export default meta;
type Story = StoryObj;

/* See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const AsyncExample: Story = {
  render: () => `<my-element>AsyncExample</my-element>`,
  // play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement);

    // Other steps

    // Waits for the component to be rendered before querying the element
    // await canvas.findByRole('button');
  // },
};
export const MyElementRaw = () => `<my-element></my-element>`;
