import {describe, it} from 'vitest';

import '../custom-element/custom-element.js';
import meta from "./dom-merge.stories.ts";

import * as Stories from "./dom-merge.stories.ts";
import {playStories} from './renderPlay';

describe('dom-merge', () => {
    localStorage.clear();
    playStories( Stories, meta );
});
