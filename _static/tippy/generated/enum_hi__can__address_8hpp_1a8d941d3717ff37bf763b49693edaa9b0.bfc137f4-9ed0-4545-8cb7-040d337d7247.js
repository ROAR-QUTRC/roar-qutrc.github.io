selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control9contactor9parameterE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control9contactor9parameterE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control9contactor9parameterE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control9contactor9parameterE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a8d941d3717ff37bf763b49693edaa9b0\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">legacy</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">power</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">control</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">contactor</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">parameter</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control9contactor9parameter8SHUTDOWNE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control9contactor9parameter8SHUTDOWNE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control9contactor9parameter8SHUTDOWNE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control9contactor9parameter8SHUTDOWNE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a8d941d3717ff37bf763b49693edaa9b0ab9984206799a7f9fe4bd1b6c18db8112\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">SHUTDOWN</span></span></span><br/></dt><dd></dd>"}
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
