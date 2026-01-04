selector_to_html = {"a[href=\"#teleop_diagnostics.teleop_tui.JoyData.axes\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.JoyData.axes\">\n<span class=\"target\" id=\"classteleop__diagnostics_1_1teleop__tui_1_1JoyData_1ada2f88553aa776653129fc1f78cab7c5\"></span><span class=\"sig-name descname\"><span class=\"pre\">axes</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"n\">field</span><span class=\"p\">(</span><span class=\"n\">default_factory</span><span class=\"o\">=</span><span class=\"nb\">list</span><span class=\"p\">)</span></code></dt><dd></dd>", "a[href=\"#teleop_diagnostics.teleop_tui.JoyData.buttons\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.JoyData.buttons\">\n<span class=\"target\" id=\"classteleop__diagnostics_1_1teleop__tui_1_1JoyData_1acbd25e75c3b8f9ed1d8e67aac6c9836e\"></span><span class=\"sig-name descname\"><span class=\"pre\">buttons</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"n\">field</span><span class=\"p\">(</span><span class=\"n\">default_factory</span><span class=\"o\">=</span><span class=\"nb\">list</span><span class=\"p\">)</span></code></dt><dd></dd>", "a[href=\"#teleop_diagnostics.teleop_tui.JoyData\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.JoyData\">\n<span class=\"target\" id=\"classteleop__diagnostics_1_1teleop__tui_1_1JoyData\"></span><em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-name descname\"><span class=\"pre\">JoyData</span></span></dt><dd><p>Collaboration diagram for teleop_diagnostics::teleop_tui::JoyData:</p></dd>", "a[href=\"#breathe-section-title-public-static-attributes\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-static-attributes\">Public Static Attributes<a class=\"headerlink\" href=\"#breathe-section-title-public-static-attributes\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#teleop_diagnostics.teleop_tui.JoyData.rate_hz\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.JoyData.rate_hz\">\n<span class=\"target\" id=\"classteleop__diagnostics_1_1teleop__tui_1_1JoyData_1a79fce5abc8e12fdd6cc12d34710ea654\"></span><span class=\"sig-name descname\"><span class=\"pre\">rate_hz</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"mf\">0.0</span></code></dt><dd></dd>", "a[href=\"#teleop_diagnostics.teleop_tui.JoyData.timestamp\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.JoyData.timestamp\">\n<span class=\"target\" id=\"classteleop__diagnostics_1_1teleop__tui_1_1JoyData_1ad4eeca31de564e9c0fdf3e02b08c937e\"></span><span class=\"sig-name descname\"><span class=\"pre\">timestamp</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"mf\">0.0</span></code></dt><dd></dd>"}
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
