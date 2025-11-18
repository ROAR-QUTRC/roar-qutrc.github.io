selector_to_html = {"a[href=\"#_CPPv4N6hi_can10parameters12Serializable13serializeDataEv\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters12Serializable13serializeDataEv\">\n<span id=\"_CPPv3N6hi_can10parameters12Serializable13serializeDataEv\"></span><span id=\"_CPPv2N6hi_can10parameters12Serializable13serializeDataEv\"></span><span id=\"hi_can::parameters::Serializable::serializeData\"></span><span class=\"target\" id=\"classhi__can_1_1parameters_1_1Serializable_1aacab53e20657c5e36032bacb3bf145cb\"></span><span class=\"k\"><span class=\"pre\">virtual</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/container/vector\" title=\"std::vector (C++ standard class)\"><span class=\"n\"><span class=\"pre\">vector</span></span></a><span class=\"p\"><span class=\"pre\">&lt;</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"p\"><span class=\"pre\">&gt;</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">serializeData</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">0</span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N6hi_can10parameters12SerializableE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters12SerializableE\">\n<span id=\"_CPPv3N6hi_can10parameters12SerializableE\"></span><span id=\"_CPPv2N6hi_can10parameters12SerializableE\"></span><span id=\"hi_can::parameters::Serializable\"></span><span class=\"target\" id=\"classhi__can_1_1parameters_1_1Serializable\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">Serializable</span></span></span><br/></dt><dd><p>Inheritence diagram for hi_can::parameters::Serializable:</p><p>Subclassed by <a class=\"reference internal\" href=\"classhi__can_1_1parameters_1_1BidirectionalSerializable.html#classhi__can_1_1parameters_1_1BidirectionalSerializable\"><span class=\"std std-ref\">hi_can::parameters::BidirectionalSerializable</span></a></p></dd>"}
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
