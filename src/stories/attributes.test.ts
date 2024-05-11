import {describe} from 'vitest';

import '../custom-element/custom-element.js';
import meta from "./attributes.stories.ts";

import * as Stories from "./attributes.stories.ts";
import {playStories} from './renderPlay';


describe('attributes', () =>
{
    localStorage.clear();
    playStories( Stories, meta );
});
