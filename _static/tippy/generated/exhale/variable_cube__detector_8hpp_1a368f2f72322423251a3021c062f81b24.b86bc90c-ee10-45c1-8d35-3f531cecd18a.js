selector_to_html = {"a[href=\"#_CPPv4N14perseus_vision11CLASS_NAMESE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N14perseus_vision11CLASS_NAMESE\">\n<span id=\"_CPPv3N14perseus_vision11CLASS_NAMESE\"></span><span id=\"_CPPv2N14perseus_vision11CLASS_NAMESE\"></span><span id=\"perseus_vision::CLASS_NAMES__std::vector:ss:C\"></span><span class=\"target\" id=\"cube__detector_8hpp_1a368f2f72322423251a3021c062f81b24\"></span><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/container/vector\" title=\"std::vector (C++ standard class)\"><span class=\"n\"><span class=\"pre\">vector</span></span></a><span class=\"p\"><span class=\"pre\">&lt;</span></span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/string/basic_string\" title=\"std::string (C++ standard type alias)\"><span class=\"n\"><span class=\"pre\">string</span></span></a><span class=\"p\"><span class=\"pre\">&gt;</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">perseus_vision</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CLASS_NAMES</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">{</span></span><span class=\"s\"><span class=\"pre\">\"blue\"</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">\"green\"</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">\"red\"</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">\"white\"</span></span><span class=\"p\"><span class=\"pre\">}</span></span><br/></dt><dd></dd>"}
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
