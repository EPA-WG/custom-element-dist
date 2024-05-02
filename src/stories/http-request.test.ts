import {describe, it,} from 'vitest';
import {type StoryObj} from "@storybook/web-components";

import '../custom-element.js';
import meta from "./http-request.stories.ts";

import * as Stories from "./http-request.stories.ts";
const {renderPlay} = meta;
describe('http-request', () => {
    for (let story of Object.values(Stories) as StoryObj[] )
        if( story.play )
            it(story.args!.title, async () => renderPlay(story));
});
