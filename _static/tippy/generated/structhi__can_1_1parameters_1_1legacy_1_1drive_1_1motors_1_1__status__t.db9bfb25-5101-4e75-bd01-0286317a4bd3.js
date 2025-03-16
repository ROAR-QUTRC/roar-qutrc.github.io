selector_to_html = {"a[href=\"#_CPPv4N6hi_can10parameters6legacy5drive6motors9_status_t11realCurrentE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5drive6motors9_status_t11realCurrentE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5drive6motors9_status_t11realCurrentE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5drive6motors9_status_t11realCurrentE\"></span><span id=\"hi_can::parameters::legacy::drive::motors::_status_t::realCurrent__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1drive_1_1motors_1_1__status__t_1a808781796f544aee758ff011755583e5\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">realCurrent</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">0</span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters6legacy5drive6motors9_status_t9realSpeedE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5drive6motors9_status_t9realSpeedE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5drive6motors9_status_t9realSpeedE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5drive6motors9_status_t9realSpeedE\"></span><span id=\"hi_can::parameters::legacy::drive::motors::_status_t::realSpeed__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1drive_1_1motors_1_1__status__t_1aac97f2c5c1481bda8721e904348bbccf\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">realSpeed</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">0</span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters6legacy5drive6motors9_status_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5drive6motors9_status_tE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5drive6motors9_status_tE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5drive6motors9_status_tE\"></span><span id=\"hi_can::parameters::legacy::drive::motors::_status_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1drive_1_1motors_1_1__status__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">_status_t</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters6legacy5drive6motors9_status_t5readyE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5drive6motors9_status_t5readyE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5drive6motors9_status_t5readyE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5drive6motors9_status_t5readyE\"></span><span id=\"hi_can::parameters::legacy::drive::motors::_status_t::ready__b\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1drive_1_1motors_1_1__status__t_1a14c98f0784480d8066d82b4bd63b0c00\"></span><span class=\"kt\"><span class=\"pre\">bool</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">ready</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">false</span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>"}
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
