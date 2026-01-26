selector_to_html = {"a[href=\"#_CPPv4N6hi_can10parameters14DeserializableE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters14DeserializableE\">\n<span id=\"_CPPv3N6hi_can10parameters14DeserializableE\"></span><span id=\"_CPPv2N6hi_can10parameters14DeserializableE\"></span><span id=\"hi_can::parameters::Deserializable\"></span><span class=\"target\" id=\"classhi__can_1_1parameters_1_1Deserializable\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">Deserializable</span></span></span><br/></dt><dd><p>Inheritence diagram for hi_can::parameters::Deserializable:</p><p>Subclassed by <a class=\"reference internal\" href=\"classhi__can_1_1parameters_1_1BidirectionalSerializable.html#classhi__can_1_1parameters_1_1BidirectionalSerializable\"><span class=\"std std-ref\">hi_can::parameters::BidirectionalSerializable</span></a></p></dd>", "a[href=\"#_CPPv4N6hi_can10parameters14Deserializable16deserialize_dataERKNSt6vectorI7uint8_tEE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can10parameters14Deserializable16deserialize_dataERKNSt6vectorI7uint8_tEE\">\n<span id=\"_CPPv3N6hi_can10parameters14Deserializable16deserialize_dataERKNSt6vectorI7uint8_tEE\"></span><span id=\"_CPPv2N6hi_can10parameters14Deserializable16deserialize_dataERKNSt6vectorI7uint8_tEE\"></span><span id=\"hi_can::parameters::Deserializable::deserialize_data__std::vector:uint8_t:CR\"></span><span class=\"target\" id=\"classhi__can_1_1parameters_1_1Deserializable_1a8cbb138719f68e91abea4d8013c0f607\"></span><span class=\"k\"><span class=\"pre\">virtual</span></span><span class=\"w\"> </span><span class=\"kt\"><span class=\"pre\">void</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">deserialize_data</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/container/vector\" title=\"std::vector (C++ standard class)\"><span class=\"n\"><span class=\"pre\">vector</span></span></a><span class=\"p\"><span class=\"pre\">&lt;</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"p\"><span class=\"pre\">&gt;</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">&amp;</span></span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N6hi_can10parameters14Deserializable16deserialize_dataERKNSt6vectorI7uint8_tEE\" title=\"hi_can::parameters::Deserializable::deserialize_data::serialized_data (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">serialized_data</span></span></a></span><span class=\"sig-paren\">)</span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">0</span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>"}
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
