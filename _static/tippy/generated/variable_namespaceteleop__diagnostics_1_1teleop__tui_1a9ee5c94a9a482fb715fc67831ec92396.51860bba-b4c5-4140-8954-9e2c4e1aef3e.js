selector_to_html = {"a[href=\"#teleop_diagnostics.teleop_tui.DEFAULT_MUX_PRIORITIES\"]": "<dt class=\"sig sig-object highlight sig-wrap py\" id=\"teleop_diagnostics.teleop_tui.DEFAULT_MUX_PRIORITIES\">\n<span class=\"target\" id=\"namespaceteleop__diagnostics_1_1teleop__tui_1a9ee5c94a9a482fb715fc67831ec92396\"></span><span class=\"sig-prename descclassname\"><span class=\"pre\">teleop_diagnostics.teleop_tui.</span></span><span class=\"sig-name descname\"><span class=\"pre\">DEFAULT_MUX_PRIORITIES</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"p\">{</span><span class=\"s2\">\"joystick\"</span><span class=\"p\">:</span> <span class=\"mi\">100</span><span class=\"p\">,</span><span class=\"s2\">\"keyboard\"</span><span class=\"p\">:</span> <span class=\"mi\">90</span><span class=\"p\">,</span><span class=\"s2\">\"web_ui\"</span><span class=\"p\">:</span> <span class=\"mi\">80</span><span class=\"p\">,</span><span class=\"s2\">\"navigation\"</span><span class=\"p\">:</span> <span class=\"mi\">10</span><span class=\"p\">,}</span></code></dt><dd></dd>"}
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
