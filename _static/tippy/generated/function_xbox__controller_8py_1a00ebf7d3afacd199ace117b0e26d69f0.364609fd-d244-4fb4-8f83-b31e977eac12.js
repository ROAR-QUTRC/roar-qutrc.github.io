selector_to_html = {"a[href=\"#input_devices.xbox_controller.main\"]": "<dt class=\"sig sig-object highlight py\" id=\"input_devices.xbox_controller.main\">\n<span class=\"target\" id=\"xbox__controller_8py_1a00ebf7d3afacd199ace117b0e26d69f0\"></span><span class=\"sig-prename descclassname\"><span class=\"pre\">input_devices.xbox_controller.</span></span><span class=\"sig-name descname\"><span class=\"pre\">main</span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#input_devices.xbox_controller.main\" title=\"input_devices.xbox_controller.main.args (Python parameter)\"><span class=\"n\"><span class=\"pre\">args</span></span></a><span class=\"o\"><span class=\"pre\">=</span></span><code class=\"code python default_value docutils literal highlight highlight-python\"><span class=\"kc\">None</span></code></em></span><span class=\"sig-paren\">)</span></dt><dd></dd>"}
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
