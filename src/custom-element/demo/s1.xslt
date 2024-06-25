<?xml version="1.0" encoding="UTF-8"?>
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
            <u xmlns="" data-dce-id="2">
                <dce-text data-dce-id="3">
                    <xsl:call-template name="slot">
                        <xsl:with-param name="slotname" select="''"/>
                        <xsl:with-param name="defaultvalue">
                            <dce-text xmlns="" data-dce-id="4">is green</dce-text>
                        </xsl:with-param>
                    </xsl:call-template>
                </dce-text>
            </u>
        </dce-root>
    </xsl:template>
    <xsl:template match="/">
        <xsl:apply-templates mode="payload" select="/datadom/attributes"/>
    </xsl:template>

    <xsl:template match="@*|node()" mode="copy-html">
      <xsl:copy><xsl:apply-templates select="@*|node()" mode="copy-html"/></xsl:copy>
    </xsl:template>
    <xsl:template match="node()[starts-with(name(),'xhtml:')]" mode="copy-html">
      <xsl:element name="{local-name()}"><xsl:apply-templates select="@*|node()" mode="copy-html"/></xsl:element>
    </xsl:template>


    <xsl:template name="slot">
        <xsl:param name="slotname"/>
        <xsl:param name="defaultvalue"/>
        <xsl:choose>
            <xsl:when test="//payload/*[@slot=$slotname]">
                <xsl:apply-templates mode="copy-html" select="//payload/*[@slot=$slotname]"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:apply-templates mode="copy-html" select="$defaultvalue"/>
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