selector_to_html = {"a[href=\"#teleop_diagnostics.teleop_tui.SUBSCRIPTION_QUEUE_DEPTH\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.SUBSCRIPTION_QUEUE_DEPTH\">\n<span class=\"target\" id=\"namespaceteleop__diagnostics_1_1teleop__tui_1ab5d5a826f07ee5ae886b66127509296c\"></span><span class=\"sig-prename descclassname\"><span class=\"pre\">teleop_diagnostics.teleop_tui.</span></span><span class=\"sig-name descname\"><span class=\"pre\">SUBSCRIPTION_QUEUE_DEPTH</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"mi\">10</span></code></dt><dd></dd>"}
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
