selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing19SYSTEM_ADDRESS_BITSE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing19SYSTEM_ADDRESS_BITSE\">\n<span id=\"_CPPv3N6hi_can10addressing19SYSTEM_ADDRESS_BITSE\"></span><span id=\"_CPPv2N6hi_can10addressing19SYSTEM_ADDRESS_BITSE\"></span><span id=\"hi_can::addressing::SYSTEM_ADDRESS_BITS__uint8_t\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1a80ccca00c971afb280ade8018c8f6e05\"></span><span class=\"k\"><span class=\"pre\">constexpr</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">SYSTEM_ADDRESS_BITS</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">5</span></span><br/></dt><dd></dd>"}
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
