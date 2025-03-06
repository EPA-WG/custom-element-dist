import{w as r}from"./index-Dr4PwNfd.js";import"./custom-element-CPnvJnn8.js";import"./http-request-DNq59pnj.js";import"./location-element-hKpcXCdn.js";function o(e){return new Promise(s=>setTimeout(s,e))}function n(e){const{title:s,body:i}=e;return`
        <fieldset>
            <legend>${s}</legend>
            ${i}
        </fieldset>
  `}const u={title:"site",render:n},t={args:{title:"Versions of custom-element",body:`
    <p>Select the version of custom-element StoryBook.</p>
    <custom-element >
        <template>
            <variable name="url" select="//window-location/value/@href"></variable>
            <variable name="current-version" >0{
                substring-before(substring-after(substring($url, string-length(substring-before($url, '/')) - string-length(substring-before(substring-before($url, '/'), '@0')) + 2), '@0'), '/')
            }</variable>
            <location-element slice="window-location" live>
                <xsl:if test=" not(//selected-version = $current-version ) and not(//selected-version = '')  ">
                    <attribute name="src">{ concat( substring-before($url, $current-version), 
                                                    //selected-version, 
                                                    substring-after($url, $current-version) ) }</attribute>
                    <attribute name="method">location.href</attribute>
                </if>
            </location-element>
            <http-request 
                url="https://registry.npmjs.org/@epa-wg/custom-element-dist" 
                method="GET" 
                header-accept="application/json"
                slice="versions-ajax" ></http-request>
                    
            <label>version: 
                <xhtml:select slice="selected-version" autocomplete="off" name="version">
                    <for-each select="//versions/*">
                        <option value="{./@version}">
                            <variable name="item-version">{./@version}</variable>
                            { $item-version } - { substring( //time/*[@dce-object-name = $item-version ], 1,10)}
                        </option>
                    </for-each>
                    <for-each select="//versions/*">
                        <if test="./@version = $current-version">
                            <option selected value="{./@version}">
                                <variable name="item-version">{./@version}</variable>
                                { $item-version } - { substring( //time/*[@dce-object-name = $item-version ], 1,10)}
                            </option>    
                        </if>
                    </for-each>
                </xhtml:select>
            </label>
        </template>
    </custom-element>
    <dce-link id="dce1"></dce-link>
`},play:async({canvasElement:e})=>{t.args.title,r(e),window.location.hash="#@epa-wg/custom-element-dist@0.0.24/storybook-static/index.html",await o(20)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Versions of custom-element',
    body: \`
    <p>Select the version of custom-element StoryBook.</p>
    <custom-element >
        <template>
            <variable name="url" select="//window-location/value/@href"></variable>
            <variable name="current-version" >0{
                substring-before(substring-after(substring($url, string-length(substring-before($url, '/')) - string-length(substring-before(substring-before($url, '/'), '@0')) + 2), '@0'), '/')
            }</variable>
            <location-element slice="window-location" live>
                <xsl:if test=" not(//selected-version = $current-version ) and not(//selected-version = '')  ">
                    <attribute name="src">{ concat( substring-before($url, $current-version), 
                                                    //selected-version, 
                                                    substring-after($url, $current-version) ) }</attribute>
                    <attribute name="method">location.href</attribute>
                </if>
            </location-element>
            <http-request 
                url="https://registry.npmjs.org/@epa-wg/custom-element-dist" 
                method="GET" 
                header-accept="application/json"
                slice="versions-ajax" ></http-request>
                    
            <label>version: 
                <xhtml:select slice="selected-version" autocomplete="off" name="version">
                    <for-each select="//versions/*">
                        <option value="{./@version}">
                            <variable name="item-version">{./@version}</variable>
                            { $item-version } - { substring( //time/*[@dce-object-name = $item-version ], 1,10)}
                        </option>
                    </for-each>
                    <for-each select="//versions/*">
                        <if test="./@version = $current-version">
                            <option selected value="{./@version}">
                                <variable name="item-version">{./@version}</variable>
                                { $item-version } - { substring( //time/*[@dce-object-name = $item-version ], 1,10)}
                            </option>    
                        </if>
                    </for-each>
                </xhtml:select>
            </label>
        </template>
    </custom-element>
    <dce-link id="dce1"></dce-link>
\`
  },
  play: async ({
    canvasElement
  }) => {
    const titleText = VersionsSelect.args!.title as string;
    const canvas = within(canvasElement),
      code = async id => (await canvas.findByTestId(id)).textContent.trim();
    window.location.hash = '#@epa-wg/custom-element-dist@0.0.24/storybook-static/index.html';
    await sleep(20);
    // expect( await code('p1') ).toEqual('default_P1' );
    // expect( await code('p2') ).toEqual('always_p2'  );
    // expect( await code('p3') ).toEqual('def_P3'     );
  }
}`,...t.parameters?.docs?.source}}};const v=["VersionsSelect"];export{t as VersionsSelect,v as __namedExportsOrder,u as default};
