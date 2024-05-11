import {describe} from 'vitest';

import '../custom-element/custom-element.js';
import meta from "./css.stories.ts";

import * as Stories  from "./css.stories.ts";
import {playStories} from './renderPlay';

describe('Css', () =>
{
     playStories( Stories, meta );
});
