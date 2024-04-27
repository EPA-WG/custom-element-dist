import type {Meta, StoryObj} from '@storybook/web-components';
import {within, userEvent} from '@storybook/test';

import type {PageProps} from './Page';
import {Page} from './Page';
import * as HeaderStories from './Header.stories';

const meta = {
    title: 'Example/Page',
    render: (args: PageProps) => Page(args),
} satisfies Meta<PageProps>;

export default meta;
type Story = StoryObj<PageProps>;

export const LoggedIn: Story = {
    args: {
        // More on composing args: https://storybook.js.org/docs/writing-stories/args#args-composition
        ...HeaderStories.LoggedIn.args,
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const logoutButton = await canvas.getByRole('button', {
            name: /Log out/i,
        });
        await userEvent.click(logoutButton);
    },
};

export const LoggedOut: Story = {
    args: {
        ...HeaderStories.LoggedOut.args,
    },
};
