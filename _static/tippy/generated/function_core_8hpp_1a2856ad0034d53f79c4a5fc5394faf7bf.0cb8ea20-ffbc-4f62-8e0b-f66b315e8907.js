selector_to_html = {"a[href=\"#_CPPv4N10networking21getStringFromProtocolERK15socket_protocol\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N10networking21getStringFromProtocolERK15socket_protocol\">\n<span id=\"_CPPv3N10networking21getStringFromProtocolERK15socket_protocol\"></span><span id=\"_CPPv2N10networking21getStringFromProtocolERK15socket_protocol\"></span><span id=\"networking::getStringFromProtocol__socket_protocolCR\"></span><span class=\"target\" id=\"core_8hpp_1a2856ad0034d53f79c4a5fc5394faf7bf\"></span><span class=\"k\"><span class=\"pre\">inline</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/string/basic_string\" title=\"std::string (C++ standard type alias)\"><span class=\"n\"><span class=\"pre\">string</span></span></a><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">networking</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">getStringFromProtocol</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><a class=\"desctype reference internal\" href=\"enum_core_8hpp_1ad879df5efe29b2769745cf503ca7bafd.html#_CPPv4N10networking15socket_protocolE\" title=\"networking::socket_protocol (C++ enum) \u2014 Values:\"><span class=\"n\"><span class=\"pre\">socket_protocol</span></span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">&amp;</span></span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N10networking21getStringFromProtocolERK15socket_protocol\" title=\"networking::getStringFromProtocol::protocol (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">protocol</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>", "a[href=\"enum_core_8hpp_1ad879df5efe29b2769745cf503ca7bafd.html#_CPPv4N10networking15socket_protocolE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N10networking15socket_protocolE\">\n<span id=\"_CPPv3N10networking15socket_protocolE\"></span><span id=\"_CPPv2N10networking15socket_protocolE\"></span><span class=\"target\" id=\"core_8hpp_1ad879df5efe29b2769745cf503ca7bafd\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">networking</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">socket_protocol</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>"}
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
