selector_to_html = {"a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_6_t4adc1E\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_6_t4adc1E\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_6_t4adc1E\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_6_t4adc1E\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_6_t::adc1__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__6__t_1a847f3b71c64301366956daf0bf0c030b\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">adc1</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_6_t4adc2E\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_6_t4adc2E\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_6_t4adc2E\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_6_t4adc2E\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_6_t::adc2__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__6__t_1a291862f488a6214c78441fcea83883f6\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">adc2</span></span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_6_t3ppmE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_6_t3ppmE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_6_t3ppmE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_6_t3ppmE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_6_t::ppm__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__6__t_1aadda663338a27fa78745fc36500123c5\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">ppm</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_6_t4adc3E\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_6_t4adc3E\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_6_t4adc3E\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_6_t4adc3E\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_6_t::adc3__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__6__t_1a267b5dee24c313f67fdc27db042e430f\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">adc3</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_6_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_6_tE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_6_tE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_6_tE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_6_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__6__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">raw_status_6_t</span></span></span><br/></dt><dd></dd>"}
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