selector_to_html = {"a[href=\"#_CPPv4N6hi_can10parameters6legacy5power7control9contactor10_control_t14shutdown_timerE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5power7control9contactor10_control_t14shutdown_timerE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5power7control9contactor10_control_t14shutdown_timerE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5power7control9contactor10_control_t14shutdown_timerE\"></span><span id=\"hi_can::parameters::legacy::power::control::contactor::_control_t::shutdown_timer__uint8_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1power_1_1control_1_1contactor_1_1__control__t_1adee9a3cf47e9695ad0a47a4fe71fde54\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">shutdown_timer</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">0</span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters6legacy5power7control9contactor10_control_tE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5power7control9contactor10_control_tE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5power7control9contactor10_control_tE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5power7control9contactor10_control_tE\"></span><span id=\"hi_can::parameters::legacy::power::control::contactor::_control_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1power_1_1control_1_1contactor_1_1__control__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">_control_t</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters6legacy5power7control9contactor10_control_t9_reservedE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5power7control9contactor10_control_t9_reservedE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5power7control9contactor10_control_t9_reservedE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5power7control9contactor10_control_t9_reservedE\"></span><span id=\"hi_can::parameters::legacy::power::control::contactor::_control_t::_reserved__uint8_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1power_1_1control_1_1contactor_1_1__control__t_1ace6ed1369a30e33683da80076a4f143d\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">_reserved</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters6legacy5power7control9contactor10_control_t18immediate_shutdownE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5power7control9contactor10_control_t18immediate_shutdownE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5power7control9contactor10_control_t18immediate_shutdownE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5power7control9contactor10_control_t18immediate_shutdownE\"></span><span id=\"hi_can::parameters::legacy::power::control::contactor::_control_t::immediate_shutdown__b\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1power_1_1control_1_1contactor_1_1__control__t_1acbe5c1b7c7e20ebf4a6f4d6fc44b7038\"></span><span class=\"kt\"><span class=\"pre\">bool</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">immediate_shutdown</span></span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>"}
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
