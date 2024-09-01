// injects importmaps for module-url.test.stories.ts
import fs from 'node:fs'

const pathName = 'node_modules/@vitest/browser/dist/client/tester/tester.html';
const jsStr = fs.readFileSync(pathName).toString();
if( !jsStr.includes('importmap') ) // skip if already patched
{
    const injectedStr = jsStr.replace('</style>', `</style>
<script type="importmap">
    {
        "imports": {
            "lib-root/": "./demo/lib-dir/",
            "embed-lib": "./demo/lib-dir/embed-lib.html"
        }
    }
</script>
`);
    fs.writeFileSync(pathName, injectedStr);
}
