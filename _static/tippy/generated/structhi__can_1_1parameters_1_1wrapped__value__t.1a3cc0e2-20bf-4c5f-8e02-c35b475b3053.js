selector_to_html = {"a[href=\"#_CPPv4I0EN6hi_can10parameters15wrapped_value_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4I0EN6hi_can10parameters15wrapped_value_tE\">\n<span id=\"_CPPv3I0EN6hi_can10parameters15wrapped_value_tE\"></span><span id=\"_CPPv2I0EN6hi_can10parameters15wrapped_value_tE\"></span><span class=\"k\"><span class=\"pre\">template</span></span><span class=\"p\"><span class=\"pre\">&lt;</span></span><span><span class=\"k\"><span class=\"pre\">typename</span></span><span class=\"w\"> </span><span class=\"sig-name descname sig-name-nonprimary\"><a class=\"desctype n reference internal\" href=\"#_CPPv4I0EN6hi_can10parameters15wrapped_value_tE\" title=\"hi_can::parameters::wrapped_value_t::T (C++ type template parameter)\"><span class=\"n\"><span class=\"pre\">T</span></span></a></span></span><span class=\"p\"><span class=\"pre\">&gt;</span></span><br/><span class=\"target\" id=\"structhi__can_1_1parameters_1_1wrapped__value__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">wrapped_value_t</span></span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N6hi_can10parameters15wrapped_value_t15wrapped_value_tE1T\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters15wrapped_value_t15wrapped_value_tE1T\">\n<span id=\"_CPPv3N6hi_can10parameters15wrapped_value_t15wrapped_value_tE1T\"></span><span id=\"_CPPv2N6hi_can10parameters15wrapped_value_t15wrapped_value_tE1T\"></span><span id=\"hi_can::parameters::wrapped_value_t::wrapped_value_t__T\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1wrapped__value__t_1a6612354145e0c4485865592400e1ec92\"></span><span class=\"k\"><span class=\"pre\">inline</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">wrapped_value_t</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><a class=\"desctype reference internal\" href=\"#_CPPv4I0EN6hi_can10parameters15wrapped_value_tE\" title=\"hi_can::parameters::wrapped_value_t::T (C++ type template parameter)\"><span class=\"n\"><span class=\"pre\">T</span></span></a><span class=\"w\"> </span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N6hi_can10parameters15wrapped_value_t15wrapped_value_tE1T\" title=\"hi_can::parameters::wrapped_value_t::wrapped_value_t::value (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">value</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters15wrapped_value_t5valueE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters15wrapped_value_t5valueE\">\n<span id=\"_CPPv3N6hi_can10parameters15wrapped_value_t5valueE\"></span><span id=\"_CPPv2N6hi_can10parameters15wrapped_value_t5valueE\"></span><span id=\"hi_can::parameters::wrapped_value_t::value__T\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1wrapped__value__t_1a3f1d72f89cf6c686ae93e3b6ba700084\"></span><a class=\"desctype reference internal\" href=\"#_CPPv4I0EN6hi_can10parameters15wrapped_value_tE\" title=\"hi_can::parameters::wrapped_value_t::T (C++ type template parameter)\"><span class=\"n\"><span class=\"pre\">T</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">value</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">{</span></span><span class=\"p\"><span class=\"pre\">}</span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N6hi_can10parameters15wrapped_value_t15wrapped_value_tEv\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters15wrapped_value_t15wrapped_value_tEv\">\n<span id=\"_CPPv3N6hi_can10parameters15wrapped_value_t15wrapped_value_tEv\"></span><span id=\"_CPPv2N6hi_can10parameters15wrapped_value_t15wrapped_value_tEv\"></span><span id=\"hi_can::parameters::wrapped_value_t::wrapped_value_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1wrapped__value__t_1a492b9349ee7a30aa619ec90d81dabc14\"></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">wrapped_value_t</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">default</span></span><br/></dt><dd></dd>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
