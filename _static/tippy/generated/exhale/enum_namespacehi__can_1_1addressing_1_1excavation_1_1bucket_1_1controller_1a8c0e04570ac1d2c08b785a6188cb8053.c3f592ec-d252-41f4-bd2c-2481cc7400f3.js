selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing10excavation6bucket10controller18actuator_parameter8POSITIONE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing10excavation6bucket10controller18actuator_parameter8POSITIONE\">\n<span id=\"_CPPv3N6hi_can10addressing10excavation6bucket10controller18actuator_parameter8POSITIONE\"></span><span id=\"_CPPv2N6hi_can10addressing10excavation6bucket10controller18actuator_parameter8POSITIONE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1excavation_1_1bucket_1_1controller_1a8c0e04570ac1d2c08b785a6188cb8053a90b4ba73224408e82ade8a072a3712c1\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">POSITION</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing10excavation6bucket10controller18actuator_parameter5SPEEDE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing10excavation6bucket10controller18actuator_parameter5SPEEDE\">\n<span id=\"_CPPv3N6hi_can10addressing10excavation6bucket10controller18actuator_parameter5SPEEDE\"></span><span id=\"_CPPv2N6hi_can10addressing10excavation6bucket10controller18actuator_parameter5SPEEDE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1excavation_1_1bucket_1_1controller_1a8c0e04570ac1d2c08b785a6188cb8053a65a59338b99aee6a451e86b17b462b5a\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">SPEED</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing10excavation6bucket10controller18actuator_parameterE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can10addressing10excavation6bucket10controller18actuator_parameterE\">\n<span id=\"_CPPv3N6hi_can10addressing10excavation6bucket10controller18actuator_parameterE\"></span><span id=\"_CPPv2N6hi_can10addressing10excavation6bucket10controller18actuator_parameterE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1excavation_1_1bucket_1_1controller_1a8c0e04570ac1d2c08b785a6188cb8053\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">excavation</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">bucket</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">controller</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">actuator_parameter</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>"}
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
