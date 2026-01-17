selector_to_html = {"a[href=\"#teleop_diagnostics.teleop_tui.STALE_DATA_TIMEOUT\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.STALE_DATA_TIMEOUT\">\n<span class=\"target\" id=\"namespaceteleop__diagnostics_1_1teleop__tui_1a9bde309d2cd849d2e4ed9247289e7a49\"></span><span class=\"sig-prename descclassname\"><span class=\"pre\">teleop_diagnostics.teleop_tui.</span></span><span class=\"sig-name descname\"><span class=\"pre\">STALE_DATA_TIMEOUT</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"mf\">1.0</span></code></dt><dd></dd>"}
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
