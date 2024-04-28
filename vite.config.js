/** @type {import('vite').UserConfig} */
export default {
    test: {
        browser: {
            enabled : true,
            name    : 'chrome', // browser name is required
            headless: true,
        },
        include:
            [ '**/*.{test,spec}.?(c|m)[jt]s?(x)', 'src/stories/css.stories.ts' ]
    }
}