selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing9MASK_NONEE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing9MASK_NONEE\">\n<span id=\"_CPPv3N6hi_can10addressing9MASK_NONEE\"></span><span id=\"_CPPv2N6hi_can10addressing9MASK_NONEE\"></span><span id=\"hi_can::addressing::MASK_NONE__mask_t\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1ab76e652957fa643c2c2ea829b2ec4747\"></span><span class=\"k\"><span class=\"pre\">constexpr</span></span><span class=\"w\"> </span><a class=\"desctype reference internal\" href=\"typedef_namespacehi__can_1_1addressing_1acd08f57a9d5d7a07492cd9c3ea3756ce.html#_CPPv4N6hi_can10addressing6mask_tE\" title=\"hi_can::addressing::mask_t (C++ type) \u2014 A CAN address mask.\"><span class=\"n\"><span class=\"pre\">mask_t</span></span></a><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">MASK_NONE</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">0x00000000UL</span></span><br/></dt><dd></dd>", "a[href=\"typedef_namespacehi__can_1_1addressing_1acd08f57a9d5d7a07492cd9c3ea3756ce.html#_CPPv4N6hi_can10addressing6mask_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6mask_tE\">\n<span id=\"_CPPv3N6hi_can10addressing6mask_tE\"></span><span id=\"_CPPv2N6hi_can10addressing6mask_tE\"></span><span id=\"hi_can::addressing::mask_t\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1acd08f57a9d5d7a07492cd9c3ea3756ce\"></span><span class=\"k\"><span class=\"pre\">typedef</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint32_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint32_t</span></span></a><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">mask_t</span></span></span><br/></dt><dd><p>A CAN address mask. </p></dd>"}
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
