import type {Preview}          from '@storybook/web-components';
import {initialize, mswLoader} from 'msw-storybook-addon'
import {handlers}              from '../src/handlers';

initialize({
               onUnhandledRequest: 'bypass'
           });// SB

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date:  /Date$/i
            }
        }
    },
    loaders:    [mswLoader]
};

export default preview;

export const parameters = {
    msw: {
        handlers
    }
};