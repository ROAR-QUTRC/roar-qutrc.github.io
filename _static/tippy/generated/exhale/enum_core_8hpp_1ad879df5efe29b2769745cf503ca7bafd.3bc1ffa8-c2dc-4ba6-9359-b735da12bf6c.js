selector_to_html = {"a[href=\"#_CPPv4N10networking15socket_protocol3TCPE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N10networking15socket_protocol3TCPE\">\n<span id=\"_CPPv3N10networking15socket_protocol3TCPE\"></span><span id=\"_CPPv2N10networking15socket_protocol3TCPE\"></span><span class=\"target\" id=\"core_8hpp_1ad879df5efe29b2769745cf503ca7bafdab136ef5f6a01d816991fe3cf7a6ac763\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">TCP</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N10networking15socket_protocolE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N10networking15socket_protocolE\">\n<span id=\"_CPPv3N10networking15socket_protocolE\"></span><span id=\"_CPPv2N10networking15socket_protocolE\"></span><span class=\"target\" id=\"core_8hpp_1ad879df5efe29b2769745cf503ca7bafd\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">networking</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">socket_protocol</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>", "a[href=\"#_CPPv4N10networking15socket_protocol3UDPE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N10networking15socket_protocol3UDPE\">\n<span id=\"_CPPv3N10networking15socket_protocol3UDPE\"></span><span id=\"_CPPv2N10networking15socket_protocol3UDPE\"></span><span class=\"target\" id=\"core_8hpp_1ad879df5efe29b2769745cf503ca7bafdaf5ef036b4d8b630721e51fe23489fbc9\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">UDP</span></span></span><br/></dt><dd></dd>"}
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
