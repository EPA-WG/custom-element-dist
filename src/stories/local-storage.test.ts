import {describe} from 'vitest';

import '../custom-element/custom-element.js';
import meta from "./local-storage.stories.ts";

import * as Stories from "./local-storage.stories.ts";
import {playStories} from './renderPlay';

describe('local-storage', () => {
    localStorage.clear();
        playStories( Stories, meta );
});
