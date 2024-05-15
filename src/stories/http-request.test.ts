import {describe, it,beforeAll, afterAll} from 'vitest';
import {type StoryObj} from "@storybook/web-components";
import {setupWorker } from 'msw/browser';


import '../custom-element/custom-element.js';
import meta from "./http-request.stories.ts";

import * as Stories from "./http-request.stories.ts";
import {handlers}   from '../mocks/handlers.ts';

export const worker = setupWorker(...handlers);
await worker.start();

const {renderPlay} = meta;
describe('http-request', () => {
    for (let story of Object.values(Stories) as StoryObj[] )
        if( story.play )
            it(story.args!.title, async () => renderPlay(story));
});
