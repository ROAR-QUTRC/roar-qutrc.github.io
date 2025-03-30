selector_to_html = {"a[href=\"#_CPPv4N10networking24socket_config_handlers_t7preBindE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N10networking24socket_config_handlers_t7preBindE\">\n<span id=\"_CPPv3N10networking24socket_config_handlers_t7preBindE\"></span><span id=\"_CPPv2N10networking24socket_config_handlers_t7preBindE\"></span><span class=\"target\" id=\"structnetworking_1_1socket__config__handlers__t_1a5403c90fa81f81b15964e020f8109fcc\"></span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/utility/functional/function\" title=\"std::function (C++11 standard class)\"><span class=\"n\"><span class=\"pre\">function</span></span></a><span class=\"p\"><span class=\"pre\">&lt;</span></span><span class=\"kt\"><span class=\"pre\">bool</span></span><span class=\"p\"><span class=\"pre\">(</span></span><span class=\"kt\"><span class=\"pre\">int</span></span><span class=\"p\"><span class=\"pre\">)</span></span><span class=\"p\"><span class=\"pre\">&gt;</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">preBind</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">{</span></span><span class=\"p\"><span class=\"pre\">}</span></span><br/></dt><dd><p>Handler to be run before binding the socket. </p></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N10networking24socket_config_handlers_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N10networking24socket_config_handlers_tE\">\n<span id=\"_CPPv3N10networking24socket_config_handlers_tE\"></span><span id=\"_CPPv2N10networking24socket_config_handlers_tE\"></span><span id=\"networking::socket_config_handlers_t\"></span><span class=\"target\" id=\"structnetworking_1_1socket__config__handlers__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">socket_config_handlers_t</span></span></span><br/></dt><dd><p>A struct to hold handlers for configuring a socket at various stages of its creation. </p><p>Each handler is called with the currently open socket file descriptor, and should return true if the operation was successful </p></dd>", "a[href=\"#_CPPv4N10networking24socket_config_handlers_t11postConnectE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N10networking24socket_config_handlers_t11postConnectE\">\n<span id=\"_CPPv3N10networking24socket_config_handlers_t11postConnectE\"></span><span id=\"_CPPv2N10networking24socket_config_handlers_t11postConnectE\"></span><span class=\"target\" id=\"structnetworking_1_1socket__config__handlers__t_1a171f2e44b7a3d33f70de9ffc72487b71\"></span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/utility/functional/function\" title=\"std::function (C++11 standard class)\"><span class=\"n\"><span class=\"pre\">function</span></span></a><span class=\"p\"><span class=\"pre\">&lt;</span></span><span class=\"kt\"><span class=\"pre\">bool</span></span><span class=\"p\"><span class=\"pre\">(</span></span><span class=\"kt\"><span class=\"pre\">int</span></span><span class=\"p\"><span class=\"pre\">)</span></span><span class=\"p\"><span class=\"pre\">&gt;</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">postConnect</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">{</span></span><span class=\"p\"><span class=\"pre\">}</span></span><br/></dt><dd><p>Handler to be run after connecting the socket. </p></dd>", "a[href=\"#_CPPv4N10networking24socket_config_handlers_t10preConnectE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N10networking24socket_config_handlers_t10preConnectE\">\n<span id=\"_CPPv3N10networking24socket_config_handlers_t10preConnectE\"></span><span id=\"_CPPv2N10networking24socket_config_handlers_t10preConnectE\"></span><span class=\"target\" id=\"structnetworking_1_1socket__config__handlers__t_1a628e6c7f7f6a485882b22cb084d038ec\"></span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/utility/functional/function\" title=\"std::function (C++11 standard class)\"><span class=\"n\"><span class=\"pre\">function</span></span></a><span class=\"p\"><span class=\"pre\">&lt;</span></span><span class=\"kt\"><span class=\"pre\">bool</span></span><span class=\"p\"><span class=\"pre\">(</span></span><span class=\"kt\"><span class=\"pre\">int</span></span><span class=\"p\"><span class=\"pre\">)</span></span><span class=\"p\"><span class=\"pre\">&gt;</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">preConnect</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">{</span></span><span class=\"p\"><span class=\"pre\">}</span></span><br/></dt><dd><p>Handler to be run before connecting the socket. </p></dd>"}
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
