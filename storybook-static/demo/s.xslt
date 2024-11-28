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
        <xsl:param name="p1" select="/datadom/attributes/p1">default_P1</xsl:param>
        <xsl:param name="p2" select="'always_p2'"/>
        <xsl:param name="p3">
            <xsl:choose>
                <xsl:when test="string-length(//p3)>0 ">RRRR
                    <xsl:value-of select="count(//p3)"/>
                    +<xsl:value-of select="//p3 "/>=
                </xsl:when>
                <xsl:otherwise>OOO
                    <xsl:value-of select=" 'def_P3' "/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <dce-root xmlns="http://www.w3.org/1999/xhtml" xmlns:xhtml="http://www.w3.org/1999/xhtml" data-dce-id="1">
            <xsl:attribute name="p1">default_P1</xsl:attribute>
            <xsl:attribute name="p2">
                <xsl:value-of select="'always_p2'"/>
            </xsl:attribute>
            <xsl:attribute name="p3">
                <xsl:choose>
                    <xsl:when test="//p3 ">
                        <xsl:value-of select="//p3 "/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select=" 'def_P3' "/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <dce-text xmlns="" data-dce-id="2">
                p1:
            </dce-text>
            <code xmlns="" data-testid="p1" data-dce-id="3">
                <xsl:value-of select="$p1"/>
            </code>
            <br xmlns="" data-dce-id="4"/>
            <dce-text xmlns="" data-dce-id="5">
                p2:
            </dce-text>
            <code xmlns="" data-testid="p2" data-dce-id="6">
                <xsl:value-of select="$p2"/>
            </code>
            <br xmlns="" data-dce-id="7"/>
            <dce-text xmlns="" data-dce-id="8">
                p3:
            </dce-text>
            <code xmlns="" data-testid="p3" data-dce-id="9">
                <xsl:value-of select="$p3"/>
            </code>
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