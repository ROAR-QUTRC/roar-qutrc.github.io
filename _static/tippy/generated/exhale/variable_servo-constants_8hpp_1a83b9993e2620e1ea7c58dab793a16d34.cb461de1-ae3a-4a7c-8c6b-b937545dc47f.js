selector_to_html = {"a[href=\"#_CPPv4N7perseus5servo13register_addr19STATUS_RETURN_LEVELE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N7perseus5servo13register_addr19STATUS_RETURN_LEVELE\">\n<span id=\"_CPPv3N7perseus5servo13register_addr19STATUS_RETURN_LEVELE\"></span><span id=\"_CPPv2N7perseus5servo13register_addr19STATUS_RETURN_LEVELE\"></span><span id=\"perseus::servo::register_addr::STATUS_RETURN_LEVEL__uint8_t\"></span><span class=\"target\" id=\"servo-constants_8hpp_1a83b9993e2620e1ea7c58dab793a16d34\"></span><span class=\"k\"><span class=\"pre\">static</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">perseus</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">servo</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">register_addr</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">STATUS_RETURN_LEVEL</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">0x08</span></span><br/></dt><dd></dd>"}
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
