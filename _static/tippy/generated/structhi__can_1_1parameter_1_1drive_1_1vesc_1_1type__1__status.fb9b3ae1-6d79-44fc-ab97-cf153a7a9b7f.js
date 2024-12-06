selector_to_html = {"a[href=\"#_CPPv4N6hi_can9parameter5drive4vesc13type_1_statusE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can9parameter5drive4vesc13type_1_statusE\">\n<span id=\"_CPPv3N6hi_can9parameter5drive4vesc13type_1_statusE\"></span><span id=\"_CPPv2N6hi_can9parameter5drive4vesc13type_1_statusE\"></span><span id=\"hi_can::parameter::drive::vesc::type_1_status\"></span><span class=\"target\" id=\"structhi__can_1_1parameter_1_1drive_1_1vesc_1_1type__1__status\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">type_1_status</span></span></span><br/></dt><dd></dd>"}
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
