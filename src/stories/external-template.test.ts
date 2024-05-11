import {describe, it} from 'vitest';

import '../custom-element/custom-element.js';
import meta from "./external-template.stories.ts";

import * as Stories from "./external-template.stories.ts";
import {playStories} from './renderPlay';

describe('external-template', () => {
    localStorage.clear();
    playStories( Stories, meta );
});
