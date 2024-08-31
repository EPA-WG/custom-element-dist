import fs from 'node:fs'

const pathName = import.meta.dirname+'/../node_modules/@vitest/browser/dist/index.js';
const jsStr = fs.readFileSync(pathName);
if( !jsStr.includes('injectImportmap') ) // skip if already patched
{
    const str2replace = 'await resolveOrchestrator(browserServer, url, res)';
    const injectedStr = jsStr.replace(str2replace, `injectImportmap(${injectImportmap});${''+injectImportmap}`)
    fs.writeFileSync(pathName, injectedStr);
}

function injectImportmap( html ){
        return html.replace('<script>', `
<script type="importmap">
    {
        "imports": {
            "lib-root/": "./demo/lib-dir/",
            "embed-lib": "./demo/lib-dir/embed-lib.html"
        }
    }
</script>
<script>`)

}