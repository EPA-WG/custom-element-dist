import {describe, it} from 'vitest';
import {type StoryObj} from "@storybook/web-components";


import '../custom-element/custom-element.js';
import meta from "./location-element.stories.ts";

import * as Stories from "./location-element.stories.ts";
import {playStories} from './renderPlay';

describe('location-element', () => {
    localStorage.clear();
    playStories( Stories, meta );
});
