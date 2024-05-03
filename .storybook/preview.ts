import {initialize, mswLoader}       from 'msw-storybook-addon'

initialize({ onUnhandledRequest: 'bypass' });// SB

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date:  /Date$/i
            }
        }
    },
    loaders:    [mswLoader],
};

export default preview;
