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
        <xsl:param name="v">
            <xsl:choose>
                <xsl:when test="//s[//s/event] ">
                    <xsl:value-of select="//s[//s/event] "/>
                </xsl:when>
                <xsl:when test=" //attributes/@v ">
                    <xsl:value-of select=" //attributes/@v "/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select=" 'def' "/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <dce-root xmlns="http://www.w3.org/1999/xhtml" xmlns:xhtml="http://www.w3.org/1999/xhtml" data-dce-id="1">
            <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="has-input"
                          select="count(//s/*) &gt; 0"/>
            <xsl:attribute name="v">
                <xsl:choose>
                    <xsl:when test="//s[//s/event] ">
                        <xsl:value-of select="//s[//s/event] "/>
                    </xsl:when>
                    <xsl:when test=" //attributes/@v ">
                        <xsl:value-of select=" //attributes/@v "/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select=" 'def' "/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <dce-text xmlns="" data-dce-id="2">

                //attributes/v='<xsl:value-of select="//attributes/v"/>'
            </dce-text>
            <br xmlns="" data-dce-id="3"/>
            <dce-text xmlns="" data-dce-id="4">
                //attributes/@v='<xsl:value-of select="//attributes/@v"/>'
            </dce-text>
            <br xmlns="" data-dce-id="5"/>
            <dce-text xmlns="" data-dce-id="6">
                $v='<xsl:value-of select="$v"/>'
            </dce-text>
            <br xmlns="" data-dce-id="7"/>
            <dce-text xmlns="" data-dce-id="8">
                //s='<xsl:value-of select="//s"/>'
            </dce-text>
            <br xmlns="" data-dce-id="9"/>
            <dce-text xmlns="" data-dce-id="10">
                A='<xsl:value-of select="//s[//s/event] | //attributes/v[not(//s/event)]"/>'
            </dce-text>
            <br xmlns="" data-dce-id="11"/>
            <dce-text xmlns="" data-dce-id="12">
                has-input =<xsl:value-of select=" $has-input "/>
            </dce-text>
            <br xmlns="" data-dce-id="13"/>
            <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="in-value">
                <xsl:choose>
                    <xsl:when test="//s/event">
                        <xsl:value-of select="//s">
                        </xsl:value-of>
                    </xsl:when>
                    <xsl:when test="//attributes/@v">
                        <xsl:value-of select="//attributes/@v">
                        </xsl:value-of>
                    </xsl:when>
                    <xsl:otherwise>def</xsl:otherwise>
                </xsl:choose>
            </xsl:variable>
            <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="xx"
                          select="//s[//s/event] ?? //attributes/@v ?? 'def' "/>
            <input xmlns="" slice="s" slice-event="input" value="{$in-value}" data-dce-id="14"/>
            <dce-text xmlns="" data-dce-id="15">$in-value:<xsl:value-of select="$in-value"/> | $xx:<xsl:value-of
                    select="$xx"/>
            </dce-text>
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