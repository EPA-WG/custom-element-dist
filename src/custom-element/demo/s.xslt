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
        <xsl:param name="name">
            <xsl:choose>
                <xsl:when test="//name">
                    <xsl:value-of select="//name"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="label">
            <xsl:choose>
                <xsl:when test="//label">
                    <xsl:value-of select="//label"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="placeholder">
            <xsl:choose>
                <xsl:when test="//placeholder">
                    <xsl:value-of select="//placeholder"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="type">
            <xsl:choose>
                <xsl:when test="//type">
                    <xsl:value-of select="//type"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="autocapitalize">
            <xsl:choose>
                <xsl:when test="//autocapitalize">
                    <xsl:value-of select="//autocapitalize"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="disabled">
            <xsl:choose>
                <xsl:when test="//disabled">
                    <xsl:value-of select="//disabled"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="multiple">
            <xsl:choose>
                <xsl:when test="//multiple">
                    <xsl:value-of select="//multiple"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="readonly">
            <xsl:choose>
                <xsl:when test="//readonly">
                    <xsl:value-of select="//readonly"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="required">
            <xsl:choose>
                <xsl:when test="//required">
                    <xsl:value-of select="//required"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="incremental">
            <xsl:choose>
                <xsl:when test="//incremental">
                    <xsl:value-of select="//incremental"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="max">
            <xsl:choose>
                <xsl:when test="//max">
                    <xsl:value-of select="//max"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="maxlength">
            <xsl:choose>
                <xsl:when test="//maxlength">
                    <xsl:value-of select="//maxlength"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="min">
            <xsl:choose>
                <xsl:when test="//min">
                    <xsl:value-of select="//min"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="minlength">
            <xsl:choose>
                <xsl:when test="//minlength">
                    <xsl:value-of select="//minlength"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="size">
            <xsl:choose>
                <xsl:when test="//size">
                    <xsl:value-of select="//size"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="step">
            <xsl:choose>
                <xsl:when test="//step">
                    <xsl:value-of select="//step"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="tabindex">
            <xsl:choose>
                <xsl:when test="//tabindex">
                    <xsl:value-of select="//tabindex"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="autocomplete">
            <xsl:choose>
                <xsl:when test="//autocomplete">
                    <xsl:value-of select="//autocomplete"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="form">
            <xsl:choose>
                <xsl:when test="//form">
                    <xsl:value-of select="//form"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="id">
            <xsl:choose>
                <xsl:when test="//id">
                    <xsl:value-of select="//id"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="list">
            <xsl:choose>
                <xsl:when test="//list">
                    <xsl:value-of select="//list"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="pattern">
            <xsl:choose>
                <xsl:when test="//pattern">
                    <xsl:value-of select="//pattern"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="placeholder">
            <xsl:choose>
                <xsl:when test="//placeholder">
                    <xsl:value-of select="//placeholder"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="title">
            <xsl:choose>
                <xsl:when test="//title">
                    <xsl:value-of select="//title"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <xsl:param name="value">
            <xsl:choose>
                <xsl:when test="//value">
                    <xsl:value-of select="//value"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="''"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:param>
        <dce-root xmlns="http://www.w3.org/1999/xhtml" xmlns:xhtml="http://www.w3.org/1999/xhtml" data-dce-id="1">
            <xsl:attribute name="name">
                <xsl:choose>
                    <xsl:when test="//name">
                        <xsl:value-of select="//name"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="label">
                <xsl:choose>
                    <xsl:when test="//label">
                        <xsl:value-of select="//label"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="placeholder">
                <xsl:choose>
                    <xsl:when test="//placeholder">
                        <xsl:value-of select="//placeholder"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="type">
                <xsl:choose>
                    <xsl:when test="//type">
                        <xsl:value-of select="//type"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="autocapitalize">
                <xsl:choose>
                    <xsl:when test="//autocapitalize">
                        <xsl:value-of select="//autocapitalize"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="disabled">
                <xsl:choose>
                    <xsl:when test="//disabled">
                        <xsl:value-of select="//disabled"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="multiple">
                <xsl:choose>
                    <xsl:when test="//multiple">
                        <xsl:value-of select="//multiple"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="readonly">
                <xsl:choose>
                    <xsl:when test="//readonly">
                        <xsl:value-of select="//readonly"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="required">
                <xsl:choose>
                    <xsl:when test="//required">
                        <xsl:value-of select="//required"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="incremental">
                <xsl:choose>
                    <xsl:when test="//incremental">
                        <xsl:value-of select="//incremental"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="max">
                <xsl:choose>
                    <xsl:when test="//max">
                        <xsl:value-of select="//max"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="maxlength">
                <xsl:choose>
                    <xsl:when test="//maxlength">
                        <xsl:value-of select="//maxlength"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="min">
                <xsl:choose>
                    <xsl:when test="//min">
                        <xsl:value-of select="//min"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="minlength">
                <xsl:choose>
                    <xsl:when test="//minlength">
                        <xsl:value-of select="//minlength"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="size">
                <xsl:choose>
                    <xsl:when test="//size">
                        <xsl:value-of select="//size"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="step">
                <xsl:choose>
                    <xsl:when test="//step">
                        <xsl:value-of select="//step"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="tabindex">
                <xsl:choose>
                    <xsl:when test="//tabindex">
                        <xsl:value-of select="//tabindex"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="autocomplete">
                <xsl:choose>
                    <xsl:when test="//autocomplete">
                        <xsl:value-of select="//autocomplete"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="form">
                <xsl:choose>
                    <xsl:when test="//form">
                        <xsl:value-of select="//form"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="id">
                <xsl:choose>
                    <xsl:when test="//id">
                        <xsl:value-of select="//id"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="list">
                <xsl:choose>
                    <xsl:when test="//list">
                        <xsl:value-of select="//list"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="pattern">
                <xsl:choose>
                    <xsl:when test="//pattern">
                        <xsl:value-of select="//pattern"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="placeholder">
                <xsl:choose>
                    <xsl:when test="//placeholder">
                        <xsl:value-of select="//placeholder"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="title">
                <xsl:choose>
                    <xsl:when test="//title">
                        <xsl:value-of select="//title"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="value">
                <xsl:choose>
                    <xsl:when test="//value">
                        <xsl:value-of select="//value"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:call-template name="slot">
                <xsl:with-param name="slotname" select="'head'"/>
                <xsl:with-param name="defaultvalue"/>
            </xsl:call-template>
            <xsl:call-template name="slot">
                <xsl:with-param name="slotname" select="'input'"/>
                <xsl:with-param name="defaultvalue">
                    <label xmlns="" data-dce-id="2">
                        <dce-text data-dce-id="3">
                            <xsl:value-of select="$label"/>
                        </dce-text>
                        <input type="{$type}"
                               value="{concat( //selected  , substring(  $value , (1+string-length(  $value )) * string-length( //selected  ) ) )}"
                               slice="selected" slice-event="input" data-dce-id="4">
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$required">
                                <xsl:attribute name="required">
                                    <xsl:value-of select="$required         "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$autocapitalize">
                                <xsl:attribute name="autocapitalize">
                                    <xsl:value-of select="$autocapitalize   "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$disabled">
                                <xsl:attribute name="disabled">
                                    <xsl:value-of select="$disabled         "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$multiple">
                                <xsl:attribute name="multiple">
                                    <xsl:value-of select="$multiple         "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$readonly">
                                <xsl:attribute name="readonly">
                                    <xsl:value-of select="$readonly         "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$incremental">
                                <xsl:attribute name="incremental">
                                    <xsl:value-of select="$incremental      "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$max">
                                <xsl:attribute name="max">
                                    <xsl:value-of select="$max              "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$maxlength">
                                <xsl:attribute name="maxlength">
                                    <xsl:value-of select="$maxlength        "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$min">
                                <xsl:attribute name="min">
                                    <xsl:value-of select="$min              "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$minlength">
                                <xsl:attribute name="minlength">
                                    <xsl:value-of select="$minlength        "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$size">
                                <xsl:attribute name="size">
                                    <xsl:value-of select="$size             "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$step">
                                <xsl:attribute name="step">
                                    <xsl:value-of select="$step             "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$tabindex">
                                <xsl:attribute name="tabindex">
                                    <xsl:value-of select="$tabindex         "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$autocomplete">
                                <xsl:attribute name="autocomplete">
                                    <xsl:value-of select="$autocomplete     "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$form">
                                <xsl:attribute name="form">
                                    <xsl:value-of select="$form             "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$id">
                                <xsl:attribute name="id">
                                    <xsl:value-of select="$id               "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$list">
                                <xsl:attribute name="list">
                                    <xsl:value-of select="$list             "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$name">
                                <xsl:attribute name="name">
                                    <xsl:value-of select="$name             "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$pattern">
                                <xsl:attribute name="pattern">
                                    <xsl:value-of select="$pattern          "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$placeholder">
                                <xsl:attribute name="placeholder">
                                    <xsl:value-of select="$placeholder      "/>
                                </xsl:attribute>
                            </xsl:if>
                            <xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$title">
                                <xsl:attribute name="title">
                                    <xsl:value-of select="$title            "/>
                                </xsl:attribute>
                            </xsl:if>
                        </input>
                    </label>
                </xsl:with-param>
            </xsl:call-template>
            <xsl:call-template name="slot">
                <xsl:with-param name="slotname" select="'warn'"/>
                <xsl:with-param name="defaultvalue"/>
            </xsl:call-template>
            <xsl:call-template name="slot">
                <xsl:with-param name="slotname" select="'foot'"/>
                <xsl:with-param name="defaultvalue"/>
            </xsl:call-template>
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