selector_to_html = {"a[href=\"#_CPPv4N7perseus5servo13register_addr13MOVING_STATUSE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N7perseus5servo13register_addr13MOVING_STATUSE\">\n<span id=\"_CPPv3N7perseus5servo13register_addr13MOVING_STATUSE\"></span><span id=\"_CPPv2N7perseus5servo13register_addr13MOVING_STATUSE\"></span><span id=\"perseus::servo::register_addr::MOVING_STATUS__uint8_t\"></span><span class=\"target\" id=\"servo-constants_8hpp_1ac468066dc02f0a6563a8bf04fb4e3f20\"></span><span class=\"k\"><span class=\"pre\">static</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">perseus</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">servo</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">register_addr</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">MOVING_STATUS</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">0x42</span></span><br/></dt><dd></dd>"}
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
