selector_to_html = {"a[href=\"#input_devices.generic_controller.main\"]": "<dt class=\"sig sig-object highlight py\" id=\"input_devices.generic_controller.main\">\n<span class=\"target\" id=\"generic__controller_8py_1a51d704bdb6e79170e29fdaf7a3bee9da\"></span><span class=\"sig-prename descclassname\"><span class=\"pre\">input_devices.generic_controller.</span></span><span class=\"sig-name descname\"><span class=\"pre\">main</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span></dt><dd></dd>"}
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
