import type { Meta, StoryObj } from '@storybook/web-components';
import { within } from '@storybook/test';
import './Page.ts';

const meta: Meta = {
  component: 'demo-my-component',
};

export default meta;
type Story = StoryObj;

/* See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const AsyncExample: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Other steps

    // Waits for the component to be rendered before querying the element
    await canvas.findByRole('button', { name: / button label/i });
  },
};