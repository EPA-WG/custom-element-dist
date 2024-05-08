import {describe, it} from 'vitest';
import {type StoryObj} from "@storybook/web-components";


import '../custom-element/custom-element.js';
import meta from "./external-template.stories.ts";

import * as Stories from "./external-template.stories.ts";

const {renderPlay} = meta;
describe('external-template', () => {
    localStorage.clear();
    for (let story of Object.values(Stories) as StoryObj[] )
        if( story.play )
            it(story.args!.title, async () => renderPlay(story));
});
