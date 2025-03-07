import {initialize, mswLoader} from 'msw-storybook-addon';

import {handlers} from "../src/mocks/handlers";

initialize({onUnhandledRequest: 'bypass'});// SB

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        msw: {
            handlers:  handlers,
        },
    },
    loaders: [mswLoader],
    tags: ['autodocs']
};

export default preview;
