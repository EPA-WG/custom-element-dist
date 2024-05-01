import {describe, it,} from 'vitest';
import {type StoryObj} from "@storybook/web-components";

import '../custom-element.js';
import meta from "./css.stories.ts";

import * as CssStories from "./css.stories.ts";
const {renderPlay} = meta;
describe('Css', () => {
    for (let story of Object.values(CssStories) as StoryObj[] )
        if( story.play )
            it(story.args!.title, async () => renderPlay(story));
    // it('StyleDoesNotLeak', async () => renderPlay( StyleDoesNotLeak ));
});
