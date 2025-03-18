selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing6legacy5drive6motors6device17FRONT_RIGHT_MOTORE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5drive6motors6device17FRONT_RIGHT_MOTORE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5drive6motors6device17FRONT_RIGHT_MOTORE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5drive6motors6device17FRONT_RIGHT_MOTORE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a468ead8338f7113f6101a5cd5d96b946a957d99f35e67ad94d7a9237b074cbb96\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">FRONT_RIGHT_MOTOR</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5drive6motors6device16REAR_RIGHT_MOTORE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5drive6motors6device16REAR_RIGHT_MOTORE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5drive6motors6device16REAR_RIGHT_MOTORE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5drive6motors6device16REAR_RIGHT_MOTORE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a468ead8338f7113f6101a5cd5d96b946a0e2dce23ef09c41ef3f3f592438716da\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">REAR_RIGHT_MOTOR</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5drive6motors6deviceE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5drive6motors6deviceE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5drive6motors6deviceE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5drive6motors6deviceE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a468ead8338f7113f6101a5cd5d96b946\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">legacy</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">drive</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">motors</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">device</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5drive6motors6device15REAR_LEFT_MOTORE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5drive6motors6device15REAR_LEFT_MOTORE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5drive6motors6device15REAR_LEFT_MOTORE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5drive6motors6device15REAR_LEFT_MOTORE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a468ead8338f7113f6101a5cd5d96b946ac97e6220e0ecd555852ead34005cd384\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">REAR_LEFT_MOTOR</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5drive6motors6device16FRONT_LEFT_MOTORE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5drive6motors6device16FRONT_LEFT_MOTORE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5drive6motors6device16FRONT_LEFT_MOTORE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5drive6motors6device16FRONT_LEFT_MOTORE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a468ead8338f7113f6101a5cd5d96b946a749195dfc214224b4bf25886cff71bf6\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">FRONT_LEFT_MOTOR</span></span></span><br/></dt><dd></dd>"}
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
