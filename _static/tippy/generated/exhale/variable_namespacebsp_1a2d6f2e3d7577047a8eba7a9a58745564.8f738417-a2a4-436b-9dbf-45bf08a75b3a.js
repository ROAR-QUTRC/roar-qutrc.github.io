selector_to_html = {"a[href=\"#_CPPv4N3bsp3A10E\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N3bsp3A10E\">\n<span id=\"_CPPv3N3bsp3A10E\"></span><span id=\"_CPPv2N3bsp3A10E\"></span><span id=\"bsp::A10__gpio_num_t\"></span><span class=\"target\" id=\"namespacebsp_1a2d6f2e3d7577047a8eba7a9a58745564\"></span><span class=\"n\"><span class=\"pre\">gpio_num_t</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">bsp</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">A10</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">GPIO_NUM_10</span></span><br/></dt><dd></dd>"}
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
