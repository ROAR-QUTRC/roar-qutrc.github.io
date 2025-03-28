selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing6legacy5drive6motors3esc9parameter6STATUSE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5drive6motors3esc9parameter6STATUSE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5drive6motors3esc9parameter6STATUSE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5drive6motors3esc9parameter6STATUSE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a15a2f4306e27071d6cef346536d76a3ca5f241c8c8f985b3c51e05d39cf030f4c\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">STATUS</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5drive6motors3esc9parameter6LIMITSE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5drive6motors3esc9parameter6LIMITSE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5drive6motors3esc9parameter6LIMITSE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5drive6motors3esc9parameter6LIMITSE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a15a2f4306e27071d6cef346536d76a3ca13c1278c37d133db80bccd5eb9563f32\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">LIMITS</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5drive6motors3esc9parameter8POSITIONE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5drive6motors3esc9parameter8POSITIONE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5drive6motors3esc9parameter8POSITIONE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5drive6motors3esc9parameter8POSITIONE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a15a2f4306e27071d6cef346536d76a3ca90b4ba73224408e82ade8a072a3712c1\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">POSITION</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5drive6motors3esc9parameter5SPEEDE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5drive6motors3esc9parameter5SPEEDE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5drive6motors3esc9parameter5SPEEDE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5drive6motors3esc9parameter5SPEEDE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a15a2f4306e27071d6cef346536d76a3ca65a59338b99aee6a451e86b17b462b5a\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">SPEED</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5drive6motors3esc9parameterE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5drive6motors3esc9parameterE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5drive6motors3esc9parameterE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5drive6motors3esc9parameterE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a15a2f4306e27071d6cef346536d76a3c\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">legacy</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">drive</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">motors</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">esc</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">parameter</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>"}
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
