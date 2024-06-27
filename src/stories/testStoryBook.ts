import type {StoryObj, Meta} from '@storybook/web-components';
import {it}            from 'vitest';

async function playStory( story: StoryObj, meta: Meta )
{
    document.body.innerHTML = meta.render(story.args);
    await new Promise( (resolve) => setTimeout(async ()=>
    {
        await story.play({canvasElement: document.body.lastElementChild});
        resolve(0);
    },0))
}

export async function testStoryBook<TProps>( mod: Record<string, StoryObj>, meta: Meta )
{
    const {describe, it } = await import('vitest');
    function playStories( mod: Record<string, StoryObj>, meta: Meta )
    {
        Object.keys(mod).map(name=>
        {
            const story = mod[name];
            if( !story.play )
                return;
            it( name, async()=>playStory(story,meta));
        })
    }
    describe( meta.title, async () => playStories(mod, meta) )
}
