/** @type {import('vite').UserConfig} */
export default {
    build    : {
        minify       : false,
        rollupOptions: {
            output: {
                format: 'es',
                // unbundled = bundle name is `*` file name without extension
                manualChunks: function manualChunks( id )
                {
                    if( id.endsWith( '.ts' ) )
                    {
                        // return file name without extension
                        return id.split( '/' ).pop().replace( '.ts', '' );
                    }
                },
            },
        },
    },
    test     : {
        isolate : true,
        browser : {
            enabled : true,
            name    : 'chrome', // browser name is required
            headless: true,
        },
        include :
            [ 'src/**/*.{test,spec}.?(c|m)[jt]s?(x)'
                // , 'src/stories/css.stories.ts'
            ],
        coverage: {
            provider: 'istanbul',
            include : [ 'src' ]
        }
    },
    publicDir: 'public'
}