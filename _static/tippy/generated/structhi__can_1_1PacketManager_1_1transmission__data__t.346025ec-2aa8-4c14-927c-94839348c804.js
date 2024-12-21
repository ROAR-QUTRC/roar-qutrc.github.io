selector_to_html = {"a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N6hi_can13PacketManager19transmission_data_t6configE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can13PacketManager19transmission_data_t6configE\">\n<span id=\"_CPPv3N6hi_can13PacketManager19transmission_data_t6configE\"></span><span id=\"_CPPv2N6hi_can13PacketManager19transmission_data_t6configE\"></span><span id=\"hi_can::PacketManager::transmission_data_t::config__transmission_config_t\"></span><span class=\"target\" id=\"structhi__can_1_1PacketManager_1_1transmission__data__t_1a11e9c407566113558061aeb0e6a0c483\"></span><a class=\"desctype reference internal\" href=\"classhi__can_1_1PacketManager.html#_CPPv4N6hi_can13PacketManager21transmission_config_tE\" title=\"hi_can::PacketManager::transmission_config_t (C++ class) \u2014 Configuration for scheduling a packet transmission.\"><span class=\"n\"><span class=\"pre\">transmission_config_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">config</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">{</span></span><span class=\"p\"><span class=\"pre\">}</span></span><br/></dt><dd><p>The transmit configuration. </p></dd>", "a[href=\"#_CPPv4N6hi_can13PacketManager19transmission_data_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can13PacketManager19transmission_data_tE\">\n<span id=\"_CPPv3N6hi_can13PacketManager19transmission_data_tE\"></span><span id=\"_CPPv2N6hi_can13PacketManager19transmission_data_tE\"></span><span id=\"hi_can::PacketManager::transmission_data_t\"></span><span class=\"target\" id=\"structhi__can_1_1PacketManager_1_1transmission__data__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">transmission_data_t</span></span></span><br/></dt><dd><p>Collaboration diagram for hi_can::PacketManager::transmission_data_t:</p><p>Struct storing all the data we need to track to handle transmissions. </p></dd>", "a[href=\"classhi__can_1_1PacketManager.html#_CPPv4N6hi_can13PacketManager21transmission_config_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can13PacketManager21transmission_config_tE\">\n<span id=\"_CPPv3N6hi_can13PacketManager21transmission_config_tE\"></span><span id=\"_CPPv2N6hi_can13PacketManager21transmission_config_tE\"></span><span id=\"hi_can::PacketManager::transmission_config_t\"></span><span class=\"target\" id=\"structhi__can_1_1PacketManager_1_1transmission__config__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">transmission_config_t</span></span></span><br/></dt><dd><p>Configuration for scheduling a packet transmission. </p></dd>", "a[href=\"#_CPPv4N6hi_can13PacketManager19transmission_data_t15lastTransmittedE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can13PacketManager19transmission_data_t15lastTransmittedE\">\n<span id=\"_CPPv3N6hi_can13PacketManager19transmission_data_t15lastTransmittedE\"></span><span id=\"_CPPv2N6hi_can13PacketManager19transmission_data_t15lastTransmittedE\"></span><span id=\"hi_can::PacketManager::transmission_data_t::lastTransmitted__std::chrono::steady_clock::time_point\"></span><span class=\"target\" id=\"structhi__can_1_1PacketManager_1_1transmission__data__t_1a544d0327fa427ffef6992f87921fbc5a\"></span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">chrono</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/chrono/steady_clock\" title=\"std::chrono::steady_clock (C++11 standard class)\"><span class=\"n\"><span class=\"pre\">steady_clock</span></span></a><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">time_point</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">lastTransmitted</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">{</span></span><span class=\"p\"><span class=\"pre\">}</span></span><br/></dt><dd><p>The last time the data was transmitted. </p></dd>"}
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
