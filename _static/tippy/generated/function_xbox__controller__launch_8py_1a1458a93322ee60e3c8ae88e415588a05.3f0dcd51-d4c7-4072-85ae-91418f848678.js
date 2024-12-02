selector_to_html = {"a[href=\"#xbox_controller_launch.generate_launch_description\"]": "<dt class=\"sig sig-object highlight py\" id=\"xbox_controller_launch.generate_launch_description\">\n<span class=\"target\" id=\"xbox__controller__launch_8py_1a1458a93322ee60e3c8ae88e415588a05\"></span><span class=\"sig-prename descclassname\"><span class=\"pre\">xbox_controller_launch.</span></span><span class=\"sig-name descname\"><span class=\"pre\">generate_launch_description</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span></dt><dd></dd>"}
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
