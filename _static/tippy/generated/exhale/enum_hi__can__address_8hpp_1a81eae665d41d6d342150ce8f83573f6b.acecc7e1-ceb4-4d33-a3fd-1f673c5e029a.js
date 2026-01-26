selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing6legacy10excavation6bucket6deviceE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy10excavation6bucket6deviceE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy10excavation6bucket6deviceE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy10excavation6bucket6deviceE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a81eae665d41d6d342150ce8f83573f6b\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">legacy</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">excavation</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">bucket</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">device</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy10excavation6bucket6device6BUCKETE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy10excavation6bucket6device6BUCKETE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy10excavation6bucket6device6BUCKETE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy10excavation6bucket6device6BUCKETE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a81eae665d41d6d342150ce8f83573f6baf86b537c5694cf4156bb6d8d940bad1b\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">BUCKET</span></span></span><br/></dt><dd></dd>"}
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
