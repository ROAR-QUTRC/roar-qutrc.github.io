selector_to_html = {"a[href=\"#_CPPv48can_data\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv48can_data\">\n<span id=\"_CPPv38can_data\"></span><span id=\"_CPPv28can_data\"></span><span id=\"can_data\"></span><span class=\"target\" id=\"structcan__data\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">can_data</span></span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N8can_data4dataE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N8can_data4dataE\">\n<span id=\"_CPPv3N8can_data4dataE\"></span><span id=\"_CPPv2N8can_data4dataE\"></span><span id=\"can_data::data__uint8_tA\"></span><span class=\"target\" id=\"structcan__data_1a3c96e953da3ea1e951865cfe4859d9b0\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">data</span></span></span><span class=\"p\"><span class=\"pre\">[</span></span><span class=\"m\"><span class=\"pre\">4</span></span><span class=\"p\"><span class=\"pre\">]</span></span><br/></dt><dd></dd>"}
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
