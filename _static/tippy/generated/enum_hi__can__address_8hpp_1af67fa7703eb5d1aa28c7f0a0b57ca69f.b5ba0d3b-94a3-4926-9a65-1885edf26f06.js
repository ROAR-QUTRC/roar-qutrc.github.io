selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control9power_bus9parameter13CURRENT_LIMITE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control9power_bus9parameter13CURRENT_LIMITE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control9power_bus9parameter13CURRENT_LIMITE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control9power_bus9parameter13CURRENT_LIMITE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1af67fa7703eb5d1aa28c7f0a0b57ca69fa95df8bb57f69adc0b1bce9d6d4285f4b\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CURRENT_LIMIT</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control9power_bus9parameter12POWER_STATUSE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control9power_bus9parameter12POWER_STATUSE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control9power_bus9parameter12POWER_STATUSE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control9power_bus9parameter12POWER_STATUSE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1af67fa7703eb5d1aa28c7f0a0b57ca69fa439f654b77e948f4646268f3c9e9b5db\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">POWER_STATUS</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control9power_bus9parameter17CONTROL_IMMEDIATEE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control9power_bus9parameter17CONTROL_IMMEDIATEE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control9power_bus9parameter17CONTROL_IMMEDIATEE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control9power_bus9parameter17CONTROL_IMMEDIATEE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1af67fa7703eb5d1aa28c7f0a0b57ca69fa67b877191393cdc310497eb24c143e2d\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CONTROL_IMMEDIATE</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control9power_bus9parameter17CONTROL_SCHEDULEDE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control9power_bus9parameter17CONTROL_SCHEDULEDE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control9power_bus9parameter17CONTROL_SCHEDULEDE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control9power_bus9parameter17CONTROL_SCHEDULEDE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1af67fa7703eb5d1aa28c7f0a0b57ca69fa25e00754abe55afd11709f7a65823125\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CONTROL_SCHEDULED</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control9power_bus9parameterE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control9power_bus9parameterE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control9power_bus9parameterE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control9power_bus9parameterE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1af67fa7703eb5d1aa28c7f0a0b57ca69f\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">legacy</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">power</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">control</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">power_bus</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">parameter</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>"}
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
