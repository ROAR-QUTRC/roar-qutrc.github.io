selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing6legacy10excavation6bucket6bucket12manipulation9parameter10SPIN_SPEEDE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy10excavation6bucket6bucket12manipulation9parameter10SPIN_SPEEDE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy10excavation6bucket6bucket12manipulation9parameter10SPIN_SPEEDE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy10excavation6bucket6bucket12manipulation9parameter10SPIN_SPEEDE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1af4988aa97879122ec38e23d01d578e40a25add6272f999e7aeb629e4c81a01eec\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">SPIN_SPEED</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy10excavation6bucket6bucket12manipulation9parameter13ELECTROMAGNETE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy10excavation6bucket6bucket12manipulation9parameter13ELECTROMAGNETE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy10excavation6bucket6bucket12manipulation9parameter13ELECTROMAGNETE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy10excavation6bucket6bucket12manipulation9parameter13ELECTROMAGNETE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1af4988aa97879122ec38e23d01d578e40a10b07899f2524ddb7db1a7239e9171e4\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">ELECTROMAGNET</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy10excavation6bucket6bucket12manipulation9parameterE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can10addressing6legacy10excavation6bucket6bucket12manipulation9parameterE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy10excavation6bucket6bucket12manipulation9parameterE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy10excavation6bucket6bucket12manipulation9parameterE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1af4988aa97879122ec38e23d01d578e40\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">legacy</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">excavation</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">bucket</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">bucket</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">manipulation</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">parameter</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>"}
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
