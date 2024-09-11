<?xml version='1.0' encoding='UTF-8'?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
                >
    <xsl:output method="xml"/>
    <xsl:template match="/">
        <dce-root >
            <xsl:apply-templates select="*"/>
        </dce-root>
    </xsl:template>
    <xsl:template match="*[name()='template']">
        <xsl:apply-templates mode="sanitize" select="*|text()"/>
    </xsl:template>
    <xsl:template match="*">
        <xsl:apply-templates mode="sanitize" select="*|text()"/>
    </xsl:template>
    <xsl:template match="*[name()='svg']|*[name()='math']">
        <xsl:apply-templates mode="sanitize" select="."/>
    </xsl:template>
    <xsl:template mode="sanitize" match="*[count(text())=1 and count(*)=0]">
        <xsl:copy>
            <xsl:apply-templates mode="sanitize" select="@*"/>
            <xsl:value-of select="text()"></xsl:value-of>
        </xsl:copy>
    </xsl:template>
    <xsl:template mode="sanitize" match="xhtml:*[count(text())=1 and count(*)=0]">
        <xsl:element name="{local-name()}">
            <xsl:apply-templates mode="sanitize" select="@*"/>
            <xsl:value-of select="text()"></xsl:value-of>
        </xsl:element>
    </xsl:template>
    <xsl:template mode="sanitize" match="*|@*">
        <xsl:copy>
            <xsl:apply-templates mode="sanitize" select="*|@*|text()"/>
        </xsl:copy>
    </xsl:template>
    <xsl:template mode="sanitize" match="text()[normalize-space(.) = '']"/>
    <xsl:template mode="sanitize" match="text()">
        <dce-text>
            <xsl:copy/>
        </dce-text>
    </xsl:template>
    <xsl:template mode="sanitize" match="xsl:value-of|*[name()='slot']">
        <dce-text>
            <xsl:copy>
                <xsl:apply-templates mode="sanitize" select="*|@*|text()"/>
            </xsl:copy>
        </dce-text>
    </xsl:template>
    <xsl:template mode="sanitize" match="xhtml:*">
        <xsl:element name="{local-name()}">
            <xsl:apply-templates mode="sanitize" select="*|@*|text()"/>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>