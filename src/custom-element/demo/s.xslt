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
            <http-request xmlns="" url="{concat(//s , '') }" slice="s" data-dce-id="2"/>
            <p xmlns="" data-dce-id="3">Pokemon Count:
                <xsl:value-of select="count(/datadom/slice/s//results)"/>
            </p>
            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="count(/datadom/slice/s//results) &lt; 0">
                <h3 xmlns="" data-dce-id="4">loading...</h3>
            </xsl:if>
            <xsl:for-each xmlns:xsl="http://www.w3.org/1999/XSL/Transform" select="/datadom/slice/s//results">
                <xsl:variable name="pokeid"
                              select="substring-before( substring-after( @url, 'https://pokeapi.co/api/v2/pokemon/'),'/')"/>
                <button xmlns="" data-dce-id="5">
                    <xsl:value-of select="@name">
                    </xsl:value-of>
                </button>
            </xsl:for-each>
            <xsl:for-each xmlns:xsl="http://www.w3.org/1999/XSL/Transform" select="//slice/s/value/*">
                <ul xmlns="" data-dce-id="6">
                    <var data-testid="request-section" data-dce-id="7">
                        <dce-text data-dce-id="8">
                            <xsl:value-of select="name(.)"/>
                        </dce-text>
                    </var>
                    <xsl:for-each select="@*">
                        <div data-dce-id="9">
                            <var data-dce-id="10">@<xsl:value-of select="local-name(.)"/>
                            </var>
                            <dce-text data-dce-id="11">
                                =
                            </dce-text>
                            <code data-testid="attr-{local-name(.)}" data-dce-id="12">
                                <xsl:value-of select="."/>
                            </code>
                        </div>
                    </xsl:for-each>
                </ul>
            </xsl:for-each>
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