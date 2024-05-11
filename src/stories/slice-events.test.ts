import {describe} from 'vitest';

import '../custom-element/custom-element.js';
import meta from "./slice-events.stories.ts";

import * as Stories from "./slice-events.stories.ts";
import {playStories} from './renderPlay';

describe('slice-events', () => {
    localStorage.clear();
    playStories( Stories, meta );
});
