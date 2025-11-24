selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing10excavation6bucket10controller14bank_parameter13CURRENT_LIMITE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing10excavation6bucket10controller14bank_parameter13CURRENT_LIMITE\">\n<span id=\"_CPPv3N6hi_can10addressing10excavation6bucket10controller14bank_parameter13CURRENT_LIMITE\"></span><span id=\"_CPPv2N6hi_can10addressing10excavation6bucket10controller14bank_parameter13CURRENT_LIMITE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1excavation_1_1bucket_1_1controller_1a1626ff7a74a536c8790b3f20ec2ba29ea95df8bb57f69adc0b1bce9d6d4285f4b\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CURRENT_LIMIT</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing10excavation6bucket10controller14bank_parameterE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can10addressing10excavation6bucket10controller14bank_parameterE\">\n<span id=\"_CPPv3N6hi_can10addressing10excavation6bucket10controller14bank_parameterE\"></span><span id=\"_CPPv2N6hi_can10addressing10excavation6bucket10controller14bank_parameterE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1excavation_1_1bucket_1_1controller_1a1626ff7a74a536c8790b3f20ec2ba29e\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">excavation</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">bucket</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">controller</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">bank_parameter</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>", "a[href=\"#_CPPv4N6hi_can10addressing10excavation6bucket10controller14bank_parameter6STATUSE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing10excavation6bucket10controller14bank_parameter6STATUSE\">\n<span id=\"_CPPv3N6hi_can10addressing10excavation6bucket10controller14bank_parameter6STATUSE\"></span><span id=\"_CPPv2N6hi_can10addressing10excavation6bucket10controller14bank_parameter6STATUSE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1excavation_1_1bucket_1_1controller_1a1626ff7a74a536c8790b3f20ec2ba29ea5f241c8c8f985b3c51e05d39cf030f4c\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">STATUS</span></span></span><br/></dt><dd></dd>"}
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
