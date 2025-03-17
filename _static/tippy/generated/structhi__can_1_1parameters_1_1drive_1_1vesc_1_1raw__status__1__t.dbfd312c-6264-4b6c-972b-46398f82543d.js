selector_to_html = {"a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_1_t3rpmE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_1_t3rpmE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_1_t3rpmE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_1_t3rpmE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_1_t::rpm__int32_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__1__t_1aabe9e23e084a41550d0d42c71bbcd74a\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int32_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int32_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">rpm</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_1_t9dutyCycleE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_1_t9dutyCycleE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_1_t9dutyCycleE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_1_t9dutyCycleE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_1_t::dutyCycle__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__1__t_1a4242aa98a1b995e362dd40409f060689\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">dutyCycle</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_1_t7currentE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_1_t7currentE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_1_t7currentE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_1_t7currentE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_1_t::current__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__1__t_1ab7b6d59aa4c117743da0223c652017cb\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">current</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_1_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_1_tE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_1_tE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_1_tE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_1_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__1__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">raw_status_1_t</span></span></span><br/></dt><dd></dd>"}
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
