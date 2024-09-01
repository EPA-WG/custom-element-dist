<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:dce="urn:schemas-epa-wg:dce" xmlns:exsl="http://exslt.org/common" version="1.0"
                exclude-result-prefixes="exsl">
    <xsl:template match="ignore">
        <xsl:choose>
            <xsl:when test="//attr">
                <xsl:value-of select="//attr"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="def"/>
            </xsl:otherwise>
        </xsl:choose>
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template mode="payload" match="attributes">
        <dce-root xmlns="http://www.w3.org/1999/xhtml" xmlns:xhtml="http://www.w3.org/1999/xhtml" data-dce-id="1">
            <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="methods">
                <a xmlns="" href="https://developer.mozilla.org/en-US/docs/Web/API/Location/href" data-dce-id="2">
                    location.href
                </a>
                <a xmlns="" href="https://developer.mozilla.org/en-US/docs/Web/API/Location/hash" data-dce-id="3">
                    location.hash
                </a>
                <a xmlns="" href="https://developer.mozilla.org/en-US/docs/Web/API/Location/assign" data-dce-id="4">
                    location.assign
                </a>
            </xsl:variable>
            <fieldset xmlns="" data-dce-id="5">
                <legend data-dce-id="6">
                    <b data-dce-id="7">set-by</b>
                </legend>
                <xsl:for-each xmlns:xsl="http://www.w3.org/1999/XSL/Transform" select="$methods">
                    <p data-dce-id="8">
                        <label data-dce-id="9">
                            <input type="radio" name="method" value="{.}" data-dce-id="10"/>
                            <dce-text data-dce-id="11">
                                <xsl:value-of select="."/>
                            </dce-text>
                        </label>
                        <a class="infolink" href="https://developer.mozilla.org/en-US/docs/Web/API/Location/assign"
                           data-dce-id="12">mdn
                        </a>
                    </p>
                </xsl:for-each>
                <label data-dce-id="13">
                    <input type="radio" name="method" value="location.href" data-dce-id="14"/>
                    <dce-text data-dce-id="15">location.href</dce-text>
                </label>
                <label data-dce-id="16">
                    <input type="radio" name="method" value="location" data-dce-id="17"/>
                    <dce-text data-dce-id="18">location</dce-text>
                </label>
                <label data-dce-id="19">
                    <input type="radio" name="method" value="location.replace" data-dce-id="20"/>
                    <dce-text data-dce-id="21">location.replace</dce-text>
                </label>
                <label data-dce-id="22">
                    <input type="radio" name="method" value="location.assign" data-dce-id="23"/>
                    <dce-text data-dce-id="24">location.assign</dce-text>
                </label>
                <label data-dce-id="25">
                    <input type="radio" name="method" value="location.hash" data-dce-id="26"/>
                    <dce-text data-dce-id="27">location.hash</dce-text>
                </label>
                <label data-dce-id="28">
                    <input type="radio" name="method" value="history.pushState" data-dce-id="29"/>
                    <dce-text data-dce-id="30">history.pushState</dce-text>
                </label>
                <label data-dce-id="31">
                    <input type="radio" name="method" value="history.replaceState" data-dce-id="32"/>
                    <dce-text data-dce-id="33">history.replaceState</dce-text>
                </label>
            </fieldset>
        </dce-root>
    </xsl:template>
    <xsl:template match="/">
        <xsl:apply-templates mode="payload" select="/datadom/attributes"/>
    </xsl:template>
    <xsl:template name="slot">
        <xsl:param name="slotname"/>
        <xsl:param name="defaultvalue"/>
        <xsl:choose>
            <xsl:when test="//payload/*[@slot=$slotname]">
                <xsl:copy-of select="//payload/*[@slot=$slotname]"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:copy-of select="$defaultvalue"/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:variable name="js-injected-body">
        <xsl:call-template name="slot">
            <xsl:with-param name="slotname" select="''"/>
            <xsl:with-param name="defaultvalue"/>
        </xsl:call-template>
    </xsl:variable>
</xsl:stylesheet>