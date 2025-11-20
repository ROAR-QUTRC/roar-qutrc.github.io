selector_to_html = {"a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_2_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_2_tE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_2_tE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_2_tE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_2_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__2__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">raw_status_2_t</span></span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_2_t8ahChargeE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_2_t8ahChargeE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_2_t8ahChargeE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_2_t8ahChargeE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_2_t::ahCharge__int32_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__2__t_1ad9d5f36ee9593eb08f093a3e6cb05a93\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int32_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int32_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">ahCharge</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_2_t2ahE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_2_t2ahE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_2_t2ahE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_2_t2ahE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_2_t::ah__int32_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__2__t_1a50f8b6dd287999dc1b591df471fbaaf1\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int32_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int32_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">ah</span></span></span><br/></dt><dd></dd>"}
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
