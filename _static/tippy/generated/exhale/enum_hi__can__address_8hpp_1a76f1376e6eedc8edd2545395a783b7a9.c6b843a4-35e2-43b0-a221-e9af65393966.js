selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing6legacy5drive6motors3mcb6groupsE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5drive6motors3mcb6groupsE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5drive6motors3mcb6groupsE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5drive6motors3mcb6groupsE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a76f1376e6eedc8edd2545395a783b7a9\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">legacy</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">drive</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">motors</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">mcb</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">groups</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5drive6motors3mcb6groups3ESCE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5drive6motors3mcb6groups3ESCE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5drive6motors3mcb6groups3ESCE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5drive6motors3mcb6groups3ESCE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a76f1376e6eedc8edd2545395a783b7a9a6351aefd1e5e1b62c76f8580116964be\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">ESC</span></span></span><br/></dt><dd></dd>"}
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
