selector_to_html = {"a[href=\"#_CPPv4N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_t9_reservedE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_t9_reservedE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_t9_reservedE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_t9_reservedE\"></span><span id=\"hi_can::parameters::legacy::power::control::power_bus::_immediate_control_t::_reserved__uint8_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1power_1_1control_1_1power__bus_1_1__immediate__control__t_1ad1bf87f13e9e5550866664e58bc702dd\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">_reserved</span></span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_tE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_tE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_tE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_tE\"></span><span id=\"hi_can::parameters::legacy::power::control::power_bus::_immediate_control_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1power_1_1control_1_1power__bus_1_1__immediate__control__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">_immediate_control_t</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_t16bus_target_stateE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_t16bus_target_stateE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_t16bus_target_stateE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_t16bus_target_stateE\"></span><span id=\"hi_can::parameters::legacy::power::control::power_bus::_immediate_control_t::bus_target_state__b\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1power_1_1control_1_1power__bus_1_1__immediate__control__t_1a18a77a009d20fc72f16098b096135e44\"></span><span class=\"kt\"><span class=\"pre\">bool</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">bus_target_state</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_t11clear_errorE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_t11clear_errorE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_t11clear_errorE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5power7control9power_bus20_immediate_control_t11clear_errorE\"></span><span id=\"hi_can::parameters::legacy::power::control::power_bus::_immediate_control_t::clear_error__b\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1power_1_1control_1_1power__bus_1_1__immediate__control__t_1ad204ea117d663c6503b34ac19215a6ac\"></span><span class=\"kt\"><span class=\"pre\">bool</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">clear_error</span></span></span><br/></dt><dd></dd>"}
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
