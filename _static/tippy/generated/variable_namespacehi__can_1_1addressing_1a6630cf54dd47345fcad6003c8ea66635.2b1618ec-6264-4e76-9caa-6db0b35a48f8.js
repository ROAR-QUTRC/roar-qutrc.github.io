selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing17PARAM_ADDRESS_POSE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing17PARAM_ADDRESS_POSE\">\n<span id=\"_CPPv3N6hi_can10addressing17PARAM_ADDRESS_POSE\"></span><span id=\"_CPPv2N6hi_can10addressing17PARAM_ADDRESS_POSE\"></span><span id=\"hi_can::addressing::PARAM_ADDRESS_POS__uint8_t\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1a6630cf54dd47345fcad6003c8ea66635\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">PARAM_ADDRESS_POS</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">0</span></span><br/></dt><dd><p>Offset bit count of the parameter ID in a <a class=\"reference internal\" href=\"typedef_namespacehi__can_1_1addressing_1a1790497c7a43f6e573f400d4899ea5c1.html#namespacehi__can_1_1addressing_1a1790497c7a43f6e573f400d4899ea5c1\"><span class=\"std std-ref\">raw_address_t</span></a>. </p></dd>"}
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
