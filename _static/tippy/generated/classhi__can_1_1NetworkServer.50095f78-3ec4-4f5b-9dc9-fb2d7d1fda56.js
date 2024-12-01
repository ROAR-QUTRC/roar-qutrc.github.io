selector_to_html = {"a[href=\"#_CPPv4N6hi_can13NetworkServerE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can13NetworkServerE\">\n<span id=\"_CPPv3N6hi_can13NetworkServerE\"></span><span id=\"_CPPv2N6hi_can13NetworkServerE\"></span><span id=\"hi_can::NetworkServer\"></span><span class=\"target\" id=\"classhi__can_1_1NetworkServer\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">NetworkServer</span></span></span><br/></dt><dd></dd>"}
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
