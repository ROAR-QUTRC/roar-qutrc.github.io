selector_to_html = {"a[href=\"#_CPPv4N6hi_can10parameters6legacy5drive6motors9_limits_t10maxCurrentE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5drive6motors9_limits_t10maxCurrentE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5drive6motors9_limits_t10maxCurrentE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5drive6motors9_limits_t10maxCurrentE\"></span><span id=\"hi_can::parameters::legacy::drive::motors::_limits_t::maxCurrent__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1drive_1_1motors_1_1__limits__t_1a23bfea8fb751b7cc13c9d435ce734a89\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">maxCurrent</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">0</span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N6hi_can10parameters6legacy5drive6motors9_limits_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5drive6motors9_limits_tE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5drive6motors9_limits_tE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5drive6motors9_limits_tE\"></span><span id=\"hi_can::parameters::legacy::drive::motors::_limits_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1drive_1_1motors_1_1__limits__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">_limits_t</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters6legacy5drive6motors9_limits_t9rampSpeedE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5drive6motors9_limits_t9rampSpeedE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5drive6motors9_limits_t9rampSpeedE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5drive6motors9_limits_t9rampSpeedE\"></span><span id=\"hi_can::parameters::legacy::drive::motors::_limits_t::rampSpeed__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1drive_1_1motors_1_1__limits__t_1ad3561fd168f75bf3896344999d3e86a0\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">rampSpeed</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">0</span></span><br/></dt><dd></dd>"}
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
