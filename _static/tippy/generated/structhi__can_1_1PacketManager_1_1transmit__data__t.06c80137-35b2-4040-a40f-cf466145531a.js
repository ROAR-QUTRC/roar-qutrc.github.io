selector_to_html = {"a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N6hi_can13PacketManager15transmit_data_t15lastTransmittedE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can13PacketManager15transmit_data_t15lastTransmittedE\">\n<span id=\"_CPPv3N6hi_can13PacketManager15transmit_data_t15lastTransmittedE\"></span><span id=\"_CPPv2N6hi_can13PacketManager15transmit_data_t15lastTransmittedE\"></span><span id=\"hi_can::PacketManager::transmit_data_t::lastTransmitted__std::chrono::steady_clock::time_point\"></span><span class=\"target\" id=\"structhi__can_1_1PacketManager_1_1transmit__data__t_1aabb2430fbc445888e0c7c6fb9065105d\"></span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">chrono</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/chrono/steady_clock\" title=\"std::chrono::steady_clock (C++11 standard class)\"><span class=\"n\"><span class=\"pre\">steady_clock</span></span></a><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">time_point</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">lastTransmitted</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">{</span></span><span class=\"p\"><span class=\"pre\">}</span></span><br/></dt><dd></dd>", "a[href=\"classhi__can_1_1PacketManager.html#_CPPv4N6hi_can13PacketManager17transmit_config_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can13PacketManager17transmit_config_tE\">\n<span id=\"_CPPv3N6hi_can13PacketManager17transmit_config_tE\"></span><span id=\"_CPPv2N6hi_can13PacketManager17transmit_config_tE\"></span><span id=\"hi_can::PacketManager::transmit_config_t\"></span><span class=\"target\" id=\"structhi__can_1_1PacketManager_1_1transmit__config__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">transmit_config_t</span></span></span><br/></dt><dd><p>Collaboration diagram for hi_can::PacketManager::transmit_config_t:</p></dd>", "a[href=\"#_CPPv4N6hi_can13PacketManager15transmit_data_t6configE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can13PacketManager15transmit_data_t6configE\">\n<span id=\"_CPPv3N6hi_can13PacketManager15transmit_data_t6configE\"></span><span id=\"_CPPv2N6hi_can13PacketManager15transmit_data_t6configE\"></span><span id=\"hi_can::PacketManager::transmit_data_t::config__transmit_config_t\"></span><span class=\"target\" id=\"structhi__can_1_1PacketManager_1_1transmit__data__t_1a02e59b18ca3cfc24fd356756f1be8eef\"></span><a class=\"desctype reference internal\" href=\"classhi__can_1_1PacketManager.html#_CPPv4N6hi_can13PacketManager17transmit_config_tE\" title=\"hi_can::PacketManager::transmit_config_t (C++ class) \u2014 Collaboration diagram for hi_can::PacketManager::transmit_config_t:\"><span class=\"n\"><span class=\"pre\">transmit_config_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">config</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">{</span></span><span class=\"p\"><span class=\"pre\">}</span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can13PacketManager15transmit_data_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can13PacketManager15transmit_data_tE\">\n<span id=\"_CPPv3N6hi_can13PacketManager15transmit_data_tE\"></span><span id=\"_CPPv2N6hi_can13PacketManager15transmit_data_tE\"></span><span id=\"hi_can::PacketManager::transmit_data_t\"></span><span class=\"target\" id=\"structhi__can_1_1PacketManager_1_1transmit__data__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">transmit_data_t</span></span></span><br/></dt><dd><p>Collaboration diagram for hi_can::PacketManager::transmit_data_t:</p></dd>"}
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
