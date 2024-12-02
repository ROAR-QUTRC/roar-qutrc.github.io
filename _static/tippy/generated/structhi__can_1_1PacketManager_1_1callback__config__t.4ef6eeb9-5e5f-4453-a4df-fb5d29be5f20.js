selector_to_html = {"a[href=\"#_CPPv4N6hi_can13PacketManager17callback_config_t7timeoutE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can13PacketManager17callback_config_t7timeoutE\">\n<span id=\"_CPPv3N6hi_can13PacketManager17callback_config_t7timeoutE\"></span><span id=\"_CPPv2N6hi_can13PacketManager17callback_config_t7timeoutE\"></span><span id=\"hi_can::PacketManager::callback_config_t::timeout__std::chrono::steady_clock::duration\"></span><span class=\"target\" id=\"structhi__can_1_1PacketManager_1_1callback__config__t_1a54b8972ab058b9193e12aee25c8a945a\"></span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">chrono</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/chrono/steady_clock\" title=\"std::chrono::steady_clock (C++11 standard class)\"><span class=\"n\"><span class=\"pre\">steady_clock</span></span></a><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">duration</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">timeout</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">chrono</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/chrono/steady_clock\" title=\"std::chrono::steady_clock (C++11 standard class)\"><span class=\"n\"><span class=\"pre\">steady_clock</span></span></a><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">duration</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">zero</span></span><span class=\"p\"><span class=\"pre\">(</span></span><span class=\"p\"><span class=\"pre\">)</span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can13PacketManager17callback_config_t15timeoutCallbackE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can13PacketManager17callback_config_t15timeoutCallbackE\">\n<span id=\"_CPPv3N6hi_can13PacketManager17callback_config_t15timeoutCallbackE\"></span><span id=\"_CPPv2N6hi_can13PacketManager17callback_config_t15timeoutCallbackE\"></span><span class=\"target\" id=\"structhi__can_1_1PacketManager_1_1callback__config__t_1acfb4cfd697033970a7f5f27bcf5aabb6\"></span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/utility/functional/function\" title=\"std::function (C++11 standard class)\"><span class=\"n\"><span class=\"pre\">function</span></span></a><span class=\"p\"><span class=\"pre\">&lt;</span></span><span class=\"kt\"><span class=\"pre\">void</span></span><span class=\"p\"><span class=\"pre\">(</span></span><span class=\"kt\"><span class=\"pre\">void</span></span><span class=\"p\"><span class=\"pre\">)</span></span><span class=\"p\"><span class=\"pre\">&gt;</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">timeoutCallback</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">nullptr</span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can13PacketManager17callback_config_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can13PacketManager17callback_config_tE\">\n<span id=\"_CPPv3N6hi_can13PacketManager17callback_config_tE\"></span><span id=\"_CPPv2N6hi_can13PacketManager17callback_config_tE\"></span><span id=\"hi_can::PacketManager::callback_config_t\"></span><span class=\"target\" id=\"structhi__can_1_1PacketManager_1_1callback__config__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">callback_config_t</span></span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>"}
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
