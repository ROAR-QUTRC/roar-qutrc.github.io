selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing6status9parameter5POWERE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6status9parameter5POWERE\">\n<span id=\"_CPPv3N6hi_can10addressing6status9parameter5POWERE\"></span><span id=\"_CPPv2N6hi_can10addressing6status9parameter5POWERE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1adbe96e609f3873565715e2efcd81737fac9c9c146c630ca5ef9197c73c032f4a6\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">POWER</span></span></span><br/></dt><dd><p>Power control. </p></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6status9parameter6STATUSE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6status9parameter6STATUSE\">\n<span id=\"_CPPv3N6hi_can10addressing6status9parameter6STATUSE\"></span><span id=\"_CPPv2N6hi_can10addressing6status9parameter6STATUSE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1adbe96e609f3873565715e2efcd81737fa5f241c8c8f985b3c51e05d39cf030f4c\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">STATUS</span></span></span><br/></dt><dd><p>Device current status. </p></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6status9parameter3CPUE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6status9parameter3CPUE\">\n<span id=\"_CPPv3N6hi_can10addressing6status9parameter3CPUE\"></span><span id=\"_CPPv2N6hi_can10addressing6status9parameter3CPUE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1adbe96e609f3873565715e2efcd81737fa2b55387dd066c5bac646ac61543d152d\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CPU</span></span></span><br/></dt><dd><p>Device CPU loading (if applicable) </p></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6status9parameterE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6status9parameterE\">\n<span id=\"_CPPv3N6hi_can10addressing6status9parameterE\"></span><span id=\"_CPPv2N6hi_can10addressing6status9parameterE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1adbe96e609f3873565715e2efcd81737f\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">status</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">parameter</span></span></span><br/></dt><dd><p>Status parameter IDs. </p><p><em>Values:</em></p></dd>"}
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
