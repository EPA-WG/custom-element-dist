import {within} from "@storybook/test";
/*
    example of use

import {frameCanvas} from "./frame.canvas";

export const ModuleByName:Story  =
{   args : {title: '4. module path by symbolic name', body:`
    <iframe src="../demo/module-url-sb-4.html" name="sb" data-testid="fr"></iframe>

`}
,   play: async ({canvasElement}) =>
    {
        const canvas = within(canvasElement);
        await canvas.findByText(ModuleByName.args!.title as string);
        const frCanvas = await frameCanvas('fr',canvas);

        await expect(await frCanvas.findByText('👌 from embed-relative-hash invoking')).toBeInTheDocument();
    },
};
 */
    export async function
frameCanvas(frameTestId: string, canvas: ReturnType<typeof within>)
    : Promise<ReturnType<typeof within>>
{
    const frEl: HTMLIFrameElement = await canvas.findByTestId(frameTestId);
    return new Promise(resolve =>
    {
        const frameUrl = new URL(frEl.getAttribute('src')!, document.baseURI).href;
        let isResolved = false;
        const resolveCanvas = () =>
        {
            if( isResolved )
                return;
            isResolved = true;
            frEl.removeEventListener('load', resolveCanvas);
            resolve(within(frEl.contentWindow?.document.documentElement!));
        };
        frEl.addEventListener('load', resolveCanvas);

        if( frEl.contentDocument?.readyState === 'complete' && frEl.contentWindow?.location.href === frameUrl )
            resolveCanvas();
    });
}
