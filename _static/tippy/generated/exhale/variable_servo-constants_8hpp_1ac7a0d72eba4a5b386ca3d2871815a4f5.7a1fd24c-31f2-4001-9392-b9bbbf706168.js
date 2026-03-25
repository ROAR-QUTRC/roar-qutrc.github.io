selector_to_html = {"a[href=\"#_CPPv4N7perseus5servo11instruction10SYNC_WRITEE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N7perseus5servo11instruction10SYNC_WRITEE\">\n<span id=\"_CPPv3N7perseus5servo11instruction10SYNC_WRITEE\"></span><span id=\"_CPPv2N7perseus5servo11instruction10SYNC_WRITEE\"></span><span id=\"perseus::servo::instruction::SYNC_WRITE__uint8_t\"></span><span class=\"target\" id=\"servo-constants_8hpp_1ac7a0d72eba4a5b386ca3d2871815a4f5\"></span><span class=\"k\"><span class=\"pre\">static</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">perseus</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">servo</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">instruction</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">SYNC_WRITE</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">0x83</span></span><br/></dt><dd></dd>"}
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
