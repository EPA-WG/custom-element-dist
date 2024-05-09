import {describe, it} from 'vitest';
import {type StoryObj} from "@storybook/web-components";


import '../custom-element/custom-element.js';
import meta from "./dom-merge.stories.ts";

import * as Stories from "./dom-merge.stories.ts";

const {renderPlay} = meta;
describe('dom-merge', () => {
    localStorage.clear();
    for (let story of Object.values(Stories) as StoryObj[] )
        if( story.play )
            it(story.args!.title, async () => renderPlay(story));
});
