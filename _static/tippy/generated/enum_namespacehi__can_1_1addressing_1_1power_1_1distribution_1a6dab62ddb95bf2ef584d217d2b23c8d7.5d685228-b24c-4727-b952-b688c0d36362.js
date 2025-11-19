selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing5power12distribution6deviceE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing5power12distribution6deviceE\">\n<span id=\"_CPPv3N6hi_can10addressing5power12distribution6deviceE\"></span><span id=\"_CPPv2N6hi_can10addressing5power12distribution6deviceE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1power_1_1distribution_1a6dab62ddb95bf2ef584d217d2b23c8d7\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">power</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">distribution</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">device</span></span></span><br/></dt><dd><p>List of power distribution device IDs. </p><p><em>Values:</em></p></dd>", "a[href=\"#_CPPv4N6hi_can10addressing5power12distribution6device19ROVER_CONTROL_BOARDE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing5power12distribution6device19ROVER_CONTROL_BOARDE\">\n<span id=\"_CPPv3N6hi_can10addressing5power12distribution6device19ROVER_CONTROL_BOARDE\"></span><span id=\"_CPPv2N6hi_can10addressing5power12distribution6device19ROVER_CONTROL_BOARDE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1power_1_1distribution_1a6dab62ddb95bf2ef584d217d2b23c8d7aab05e6176d237b7f251a3998f699ac67\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">ROVER_CONTROL_BOARD</span></span></span><br/></dt><dd></dd>"}
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
