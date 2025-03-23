selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing6shared15lifter_platform6lifter5motor9parameterE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can10addressing6shared15lifter_platform6lifter5motor9parameterE\">\n<span id=\"_CPPv3N6hi_can10addressing6shared15lifter_platform6lifter5motor9parameterE\"></span><span id=\"_CPPv2N6hi_can10addressing6shared15lifter_platform6lifter5motor9parameterE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a44158a84172d2876e9cf41fee432c0dc\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">shared</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">lifter_platform</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">lifter</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">motor</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">parameter</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6shared15lifter_platform6lifter5motor9parameter5SPEEDE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6shared15lifter_platform6lifter5motor9parameter5SPEEDE\">\n<span id=\"_CPPv3N6hi_can10addressing6shared15lifter_platform6lifter5motor9parameter5SPEEDE\"></span><span id=\"_CPPv2N6hi_can10addressing6shared15lifter_platform6lifter5motor9parameter5SPEEDE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a44158a84172d2876e9cf41fee432c0dca65a59338b99aee6a451e86b17b462b5a\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">SPEED</span></span></span><br/></dt><dd></dd>"}
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
