selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing6mask_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6mask_tE\">\n<span id=\"_CPPv3N6hi_can10addressing6mask_tE\"></span><span id=\"_CPPv2N6hi_can10addressing6mask_tE\"></span><span id=\"hi_can::addressing::mask_t\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1acd08f57a9d5d7a07492cd9c3ea3756ce\"></span><span class=\"k\"><span class=\"pre\">typedef</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint32_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint32_t</span></span></a><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">mask_t</span></span></span><br/></dt><dd><p>A raw CAN address mask. </p></dd>"}
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
