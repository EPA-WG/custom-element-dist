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
            <div xmlns="" data-testid="whole-text" data-dce-id="2">
                <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="test-data">
                    <h6 id="cem-color-hue-variant" tabindex="-1" data-dce-id="3">cem-color-hue-variant</h6>
                    <table data-dce-id="4">
                        <thead data-dce-id="5">
                            <tr data-dce-id="6">
                                <th data-dce-id="7">Token</th>
                                <th data-dce-id="8">Hue</th>
                                <th data-dce-id="9">Variant</th>
                                <th data-dce-id="10">Hex</th>
                                <th data-dce-id="11">Label</th>
                                <th data-dce-id="12">Intended use</th>
                            </tr>
                        </thead>
                        <tbody data-dce-id="13">
                            <tr data-dce-id="14">
                                <td data-dce-id="15">
                                    <code data-dce-id="16">--cem-color-blue-xl</code>
                                </td>
                                <td data-dce-id="17">blue</td>
                                <td data-dce-id="18">xl</td>
                                <td data-dce-id="19">
                                    <code data-dce-id="20">#faf9fd</code>
                                </td>
                                <td data-dce-id="21">Lightest blue</td>
                                <td data-dce-id="22">Comfort/trust emotion (light scene)</td>
                            </tr>
                            <tr data-dce-id="23">
                                <td data-dce-id="24">
                                    <code data-dce-id="25">--cem-color-blue-l</code>
                                </td>
                                <td data-dce-id="26">blue</td>
                                <td data-dce-id="27">l</td>
                                <td data-dce-id="28">
                                    <code data-dce-id="29">#d7e3ff</code>
                                </td>
                                <td data-dce-id="30">Light blue</td>
                                <td data-dce-id="31">Trust palette, attention semantic</td>
                            </tr>
                            <tr data-dce-id="32">
                                <td data-dce-id="33">
                                    <code data-dce-id="34">--cem-color-blue-d</code>
                                </td>
                                <td data-dce-id="35">blue</td>
                                <td data-dce-id="36">d</td>
                                <td data-dce-id="37">
                                    <code data-dce-id="38">#002f65</code>
                                </td>
                                <td data-dce-id="39">Dark blue</td>
                                <td data-dce-id="40">Trust palette (dark theme)</td>
                            </tr>
                            <tr data-dce-id="41">
                                <td data-dce-id="42">
                                    <code data-dce-id="43">--cem-color-blue-xd</code>
                                </td>
                                <td data-dce-id="44">blue</td>
                                <td data-dce-id="45">xd</td>
                                <td data-dce-id="46">
                                    <code data-dce-id="47">#1a1b1f</code>
                                </td>
                                <td data-dce-id="48">Darkest blue</td>
                                <td data-dce-id="49">Comfort/trust emotion (dark scene)</td>
                            </tr>
                            <tr data-dce-id="50">
                                <td data-dce-id="51">
                                    <code data-dce-id="52">--cem-color-brown-xl</code>
                                </td>
                                <td data-dce-id="53">brown</td>
                                <td data-dce-id="54">xl</td>
                                <td data-dce-id="55">
                                    <code data-dce-id="56">#d7ccc8</code>
                                </td>
                                <td data-dce-id="57">Extra light brown</td>
                                <td data-dce-id="58">Conservative palette (light theme)</td>
                            </tr>
                            <tr data-dce-id="59">
                                <td data-dce-id="60">
                                    <code data-dce-id="61">--cem-color-brown-l</code>
                                </td>
                                <td data-dce-id="62">brown</td>
                                <td data-dce-id="63">l</td>
                                <td data-dce-id="64">
                                    <code data-dce-id="65">#a1887f</code>
                                </td>
                                <td data-dce-id="66">Light brown</td>
                                <td data-dce-id="67">Conservative emotion, brand-3</td>
                            </tr>
                            <tr data-dce-id="68">
                                <td data-dce-id="69">
                                    <code data-dce-id="70">--cem-color-brown-d</code>
                                </td>
                                <td data-dce-id="71">brown</td>
                                <td data-dce-id="72">d</td>
                                <td data-dce-id="73">
                                    <code data-dce-id="74">#4e342e</code>
                                </td>
                                <td data-dce-id="75">Dark brown</td>
                                <td data-dce-id="76">Conservative palette (dark theme)</td>
                            </tr>
                            <tr data-dce-id="77">
                                <td data-dce-id="78">
                                    <code data-dce-id="79">--cem-color-brown-xd</code>
                                </td>
                                <td data-dce-id="80">brown</td>
                                <td data-dce-id="81">xd</td>
                                <td data-dce-id="82">
                                    <code data-dce-id="83">#3e2723</code>
                                </td>
                                <td data-dce-id="84">Extra dark brown</td>
                                <td data-dce-id="85">Conservative palette (dark theme, extreme)</td>
                            </tr>
                            <tr data-dce-id="86">
                                <td data-dce-id="87">
                                    <code data-dce-id="88">--cem-color-cyan-xl</code>
                                </td>
                                <td data-dce-id="89">cyan</td>
                                <td data-dce-id="90">xl</td>
                                <td data-dce-id="91">
                                    <code data-dce-id="92">#f1fefe</code>
                                </td>
                                <td data-dce-id="93">Extra light cyan</td>
                                <td data-dce-id="94">Used for comfort palette (light scenes)</td>
                            </tr>
                            <tr data-dce-id="95">
                                <td data-dce-id="96">
                                    <code data-dce-id="97">--cem-color-cyan-l</code>
                                </td>
                                <td data-dce-id="98">cyan</td>
                                <td data-dce-id="99">l</td>
                                <td data-dce-id="100">
                                    <code data-dce-id="101">#00fbfb</code>
                                </td>
                                <td data-dce-id="102">Light cyan</td>
                                <td data-dce-id="103">Calm palette, creativity accent</td>
                            </tr>
                            <tr data-dce-id="104">
                                <td data-dce-id="105">
                                    <code data-dce-id="106">--cem-color-cyan-d</code>
                                </td>
                                <td data-dce-id="107">cyan</td>
                                <td data-dce-id="108">d</td>
                                <td data-dce-id="109">
                                    <code data-dce-id="110">#006a6a</code>
                                </td>
                                <td data-dce-id="111">Dark cyan</td>
                                <td data-dce-id="112">Calm palette (dark theme)</td>
                            </tr>
                            <tr data-dce-id="113">
                                <td data-dce-id="114">
                                    <code data-dce-id="115">--cem-color-cyan-xd</code>
                                </td>
                                <td data-dce-id="116">cyan</td>
                                <td data-dce-id="117">xd</td>
                                <td data-dce-id="118">
                                    <code data-dce-id="119">#001010</code>
                                </td>
                                <td data-dce-id="120">Extra dark cyan</td>
                                <td data-dce-id="121">Used for comfort palette (dark scenes)</td>
                            </tr>
                            <tr data-dce-id="122">
                                <td data-dce-id="123">
                                    <code data-dce-id="124">--cem-color-grey-l</code>
                                </td>
                                <td data-dce-id="125">grey</td>
                                <td data-dce-id="126">l</td>
                                <td data-dce-id="127">
                                    <code data-dce-id="128">#f1f1eb</code>
                                </td>
                                <td data-dce-id="129">Light grey</td>
                                <td data-dce-id="130">Conservative palette, neutral backgrounds</td>
                            </tr>
                            <tr data-dce-id="131">
                                <td data-dce-id="132">
                                    <code data-dce-id="133">--cem-color-grey-d</code>
                                </td>
                                <td data-dce-id="134">grey</td>
                                <td data-dce-id="135">d</td>
                                <td data-dce-id="136">
                                    <code data-dce-id="137">#1a1c18</code>
                                </td>
                                <td data-dce-id="138">Dark grey</td>
                                <td data-dce-id="139">Conservative palette (dark theme)</td>
                            </tr>
                            <tr data-dce-id="140">
                                <td data-dce-id="141">
                                    <code data-dce-id="142">--cem-color-orange-xl</code>
                                </td>
                                <td data-dce-id="143">orange</td>
                                <td data-dce-id="144">xl</td>
                                <td data-dce-id="145">
                                    <code data-dce-id="146">#f0f070</code>
                                </td>
                                <td data-dce-id="147">Extra light yellow</td>
                                <td data-dce-id="148">Enthusiasm palette (light theme)</td>
                            </tr>
                            <tr data-dce-id="149">
                                <td data-dce-id="150">
                                    <code data-dce-id="151">--cem-color-orange-l</code>
                                </td>
                                <td data-dce-id="152">orange</td>
                                <td data-dce-id="153">l</td>
                                <td data-dce-id="154">
                                    <code data-dce-id="155">#ffe082</code>
                                </td>
                                <td data-dce-id="156">Light orange</td>
                                <td data-dce-id="157">Enthusiasm emotion, brand-2</td>
                            </tr>
                            <tr data-dce-id="158">
                                <td data-dce-id="159">
                                    <code data-dce-id="160">--cem-color-orange-d</code>
                                </td>
                                <td data-dce-id="161">orange</td>
                                <td data-dce-id="162">d</td>
                                <td data-dce-id="163">
                                    <code data-dce-id="164">#723600</code>
                                </td>
                                <td data-dce-id="165">Dark orange</td>
                                <td data-dce-id="166">Enthusiasm hype (dark theme)</td>
                            </tr>
                            <tr data-dce-id="167">
                                <td data-dce-id="168">
                                    <code data-dce-id="169">--cem-color-orange-xd</code>
                                </td>
                                <td data-dce-id="170">orange</td>
                                <td data-dce-id="171">xd</td>
                                <td data-dce-id="172">
                                    <code data-dce-id="173">#502400</code>
                                </td>
                                <td data-dce-id="174">Extra dark orange</td>
                                <td data-dce-id="175">Enthusiasm palette (dark theme, extreme)</td>
                            </tr>
                            <tr data-dce-id="176">
                                <td data-dce-id="177">
                                    <code data-dce-id="178">--cem-color-purple-xl</code>
                                </td>
                                <td data-dce-id="179">purple</td>
                                <td data-dce-id="180">xl</td>
                                <td data-dce-id="181">
                                    <code data-dce-id="182">#f3e5f5</code>
                                </td>
                                <td data-dce-id="183">Extra light purple</td>
                                <td data-dce-id="184">Creativity palette (light theme)</td>
                            </tr>
                            <tr data-dce-id="185">
                                <td data-dce-id="186">
                                    <code data-dce-id="187">--cem-color-purple-l</code>
                                </td>
                                <td data-dce-id="188">purple</td>
                                <td data-dce-id="189">l</td>
                                <td data-dce-id="190">
                                    <code data-dce-id="191">#e1bee7</code>
                                </td>
                                <td data-dce-id="192">Light purple</td>
                                <td data-dce-id="193">Creativity emotion, brand-1</td>
                            </tr>
                            <tr data-dce-id="194">
                                <td data-dce-id="195">
                                    <code data-dce-id="196">--cem-color-purple-d</code>
                                </td>
                                <td data-dce-id="197">purple</td>
                                <td data-dce-id="198">d</td>
                                <td data-dce-id="199">
                                    <code data-dce-id="200">#6a1b9a</code>
                                </td>
                                <td data-dce-id="201">Dark purple</td>
                                <td data-dce-id="202">Creativity palette (dark theme)</td>
                            </tr>
                            <tr data-dce-id="203">
                                <td data-dce-id="204">
                                    <code data-dce-id="205">--cem-color-purple-xd</code>
                                </td>
                                <td data-dce-id="206">purple</td>
                                <td data-dce-id="207">xd</td>
                                <td data-dce-id="208">
                                    <code data-dce-id="209">#4a148c</code>
                                </td>
                                <td data-dce-id="210">Extra dark purple</td>
                                <td data-dce-id="211">Creativity palette (dark theme, extreme)</td>
                            </tr>
                            <tr data-dce-id="212">
                                <td data-dce-id="213">
                                    <code data-dce-id="214">--cem-color-red-xl</code>
                                </td>
                                <td data-dce-id="215">red</td>
                                <td data-dce-id="216">xl</td>
                                <td data-dce-id="217">
                                    <code data-dce-id="218">#ffb4ab</code>
                                </td>
                                <td data-dce-id="219">Extra light red</td>
                                <td data-dce-id="220">Danger palette (light theme)</td>
                            </tr>
                            <tr data-dce-id="221">
                                <td data-dce-id="222">
                                    <code data-dce-id="223">--cem-color-red-l</code>
                                </td>
                                <td data-dce-id="224">red</td>
                                <td data-dce-id="225">l</td>
                                <td data-dce-id="226">
                                    <code data-dce-id="227">#ba1a1a</code>
                                </td>
                                <td data-dce-id="228">Light red</td>
                                <td data-dce-id="229">Danger emotion, alert semantic</td>
                            </tr>
                            <tr data-dce-id="230">
                                <td data-dce-id="231">
                                    <code data-dce-id="232">--cem-color-red-d</code>
                                </td>
                                <td data-dce-id="233">red</td>
                                <td data-dce-id="234">d</td>
                                <td data-dce-id="235">
                                    <code data-dce-id="236">#690005</code>
                                </td>
                                <td data-dce-id="237">Dark red</td>
                                <td data-dce-id="238">Danger palette (dark theme)</td>
                            </tr>
                            <tr data-dce-id="239">
                                <td data-dce-id="240">
                                    <code data-dce-id="241">--cem-color-red-xd</code>
                                </td>
                                <td data-dce-id="242">red</td>
                                <td data-dce-id="243">xd</td>
                                <td data-dce-id="244">
                                    <code data-dce-id="245">#410002</code>
                                </td>
                                <td data-dce-id="246">Extra dark red</td>
                                <td data-dce-id="247">Danger palette (dark theme, extreme)</td>
                            </tr>
                        </tbody>
                    </table>
                </xsl:variable>
                <label data-dce-id="248">
                    <input type="checkbox" data-testid="toggle-all" slice="show-all" value="ALL" data-dce-id="249"/>
                    <dce-text data-dce-id="250">ALL</dce-text>
                </label>
                <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="cem-color-hue-variant"
                              select="exsl:node-set($test-data)//*[@id='cem-color-hue-variant']/following-sibling::table[1]/tbody"/>
                <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="all-or-nothing"
                              select="$cem-color-hue-variant[ //show-all = 'ALL' ]">
                    <dce-text data-dce-id="251">
                        0
                    </dce-text>
                    <xsl:for-each select="$all-or-nothing/*">
                        <div data-testid="color-{position()}" data-dce-id="252">
                            <xsl:value-of select="./*[1]"/>
                        </div>
                    </xsl:for-each>
                    <dce-text data-dce-id="253">
                        N
                    </dce-text>
                </xsl:variable>
            </div>
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