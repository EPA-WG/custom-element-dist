import {describe, it} from 'vitest';
import {type StoryObj} from "@storybook/web-components";


import '../custom-element/custom-element.js';
import meta from "./local-storage.stories.ts";

import * as Stories from "./local-storage.stories.ts";

const {renderPlay} = meta;
describe('local-storage', () => {
    localStorage.clear();
    for (let story of Object.values(Stories) as StoryObj[] )
        if( story.play )
            it(story.args!.title, async () => renderPlay(story));
});
