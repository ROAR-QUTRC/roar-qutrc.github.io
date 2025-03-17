selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing5drive4vesc6device10FRONT_LEFTE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing5drive4vesc6device10FRONT_LEFTE\">\n<span id=\"_CPPv3N6hi_can10addressing5drive4vesc6device10FRONT_LEFTE\"></span><span id=\"_CPPv2N6hi_can10addressing5drive4vesc6device10FRONT_LEFTE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1drive_1_1vesc_1a1d7845f6f062d8186155f002c8ef3efca3c30649875f80bc4b253621e9cf4aa8e\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">FRONT_LEFT</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing5drive4vesc6device9REAR_LEFTE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing5drive4vesc6device9REAR_LEFTE\">\n<span id=\"_CPPv3N6hi_can10addressing5drive4vesc6device9REAR_LEFTE\"></span><span id=\"_CPPv2N6hi_can10addressing5drive4vesc6device9REAR_LEFTE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1drive_1_1vesc_1a1d7845f6f062d8186155f002c8ef3efca54db030b91e30e6bac5b48c22e7b06e1\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">REAR_LEFT</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing5drive4vesc6device10REAR_RIGHTE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing5drive4vesc6device10REAR_RIGHTE\">\n<span id=\"_CPPv3N6hi_can10addressing5drive4vesc6device10REAR_RIGHTE\"></span><span id=\"_CPPv2N6hi_can10addressing5drive4vesc6device10REAR_RIGHTE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1drive_1_1vesc_1a1d7845f6f062d8186155f002c8ef3efca677a01b4c52edce9a45562b44abe199b\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">REAR_RIGHT</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing5drive4vesc6device11FRONT_RIGHTE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing5drive4vesc6device11FRONT_RIGHTE\">\n<span id=\"_CPPv3N6hi_can10addressing5drive4vesc6device11FRONT_RIGHTE\"></span><span id=\"_CPPv2N6hi_can10addressing5drive4vesc6device11FRONT_RIGHTE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1drive_1_1vesc_1a1d7845f6f062d8186155f002c8ef3efca3c590d7552bf5fa1953eb0f05c64acd5\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">FRONT_RIGHT</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing5drive4vesc6deviceE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing5drive4vesc6deviceE\">\n<span id=\"_CPPv3N6hi_can10addressing5drive4vesc6deviceE\"></span><span id=\"_CPPv2N6hi_can10addressing5drive4vesc6deviceE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1drive_1_1vesc_1a1d7845f6f062d8186155f002c8ef3efc\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">drive</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">vesc</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">device</span></span></span><br/></dt><dd><p>The main drive VESC device IDs. </p><p><em>Values:</em></p></dd>"}
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
