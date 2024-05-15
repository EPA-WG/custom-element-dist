import type {StoryObj} from '@storybook/web-components';
import {it}            from 'vitest';


export async function renderPlay<TProps>(story: StoryObj, meta:{render: (args: TProps)=>string })
{
    // @ts-ignore
    document.body.innerHTML = meta.render(story.args);
    await new Promise(resolve => setTimeout(async () =>
    {
        // @ts-ignore
        await story.play({canvasElement: document.body.firstElementChild as HTMLElement});
        resolve(0);
    }, 0));
}

export function playStories<TProps>( Stories: any, meta:{ render: (args: TProps)=>string } )
{
    for ( let story of Object.values(Stories) as StoryObj[] )
        it( story.args!.title, async () => renderPlay(story, meta) );
}
