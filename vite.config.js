/** @type {import('vite').UserConfig} */
import { resolve } from 'path'

export default {
    build    : {
        target       : 'esnext',
        lib          : {
            entry   : resolve( __dirname, 'src/custom-element/index.js' ),
            name    : 'CustomElement',
            fileName: 'custom-element-bundle',
            formats : [ 'es', 'cjs' ]
        },
        minify       : true,
        rollupOptions: {
            preserveEntrySignatures: 'strict',
            output                 : {
                format              : 'es',
                exports             : 'named',
                externalLiveBindings: false,
                // unbundled = bundle name is `*` file name without extension
                manualChunks: function manualChunks( id )
                {
                    if( id.endsWith( '.ts' ) )
                    {
                        // return file name without extension
                        return id.split( '/' ).pop().replace( '.ts', '' );
                    }
                    if( id.endsWith( '.js' ) )
                    {
                        // return file name without extension
                        return id.split( '/' ).pop().replace( '.js', '' );
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
            [   'src/**/*.{test,spec}.?(c|m)[jt]s?(x)'
            ,   'src/stories/*.test.stories.ts'
            ],
        coverage: {
            reporter: [ 'text', 'json', 'html', 'coverage-svg' ],
            provider: 'istanbul',
            include : [ 'src' ]
        }
    },
    publicDir: 'public'
}
