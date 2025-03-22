selector_to_html = {"a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_4_t9tempMotorE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_4_t9tempMotorE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_4_t9tempMotorE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_4_t9tempMotorE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_4_t::tempMotor__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__4__t_1ab4122db1b41970bed99910e9bef15a79\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">tempMotor</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_4_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_4_tE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_4_tE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_4_tE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_4_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__4__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">raw_status_4_t</span></span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_4_t7tempFetE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_4_t7tempFetE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_4_t7tempFetE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_4_t7tempFetE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_4_t::tempFet__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__4__t_1ab8f7d16bc454b4de4ba2a56e81201a44\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">tempFet</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_4_t6pidPosE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_4_t6pidPosE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_4_t6pidPosE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_4_t6pidPosE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_4_t::pidPos__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__4__t_1a6b1c66dc4f46efdd663b27df8f113985\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">pidPos</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc14raw_status_4_t9currentInE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc14raw_status_4_t9currentInE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc14raw_status_4_t9currentInE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc14raw_status_4_t9currentInE\"></span><span id=\"hi_can::parameters::drive::vesc::raw_status_4_t::currentIn__int16_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1raw__status__4__t_1ace362cbb4a9dcfb2696f05e22761060f\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">currentIn</span></span></span><br/></dt><dd></dd>"}
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
