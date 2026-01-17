selector_to_html = {"a[href=\"#teleop_diagnostics.teleop_tui.VelocityData.linear_x\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.VelocityData.linear_x\">\n<span class=\"target\" id=\"classteleop__diagnostics_1_1teleop__tui_1_1VelocityData_1ab348b43eb2a2ebc9d534f101689b4581\"></span><span class=\"sig-name descname\"><span class=\"pre\">linear_x</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"mf\">0.0</span></code></dt><dd></dd>", "a[href=\"#teleop_diagnostics.teleop_tui.VelocityData.rate_hz\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.VelocityData.rate_hz\">\n<span class=\"target\" id=\"classteleop__diagnostics_1_1teleop__tui_1_1VelocityData_1adb84313403cbbdd262e984a2c22e06de\"></span><span class=\"sig-name descname\"><span class=\"pre\">rate_hz</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"mf\">0.0</span></code></dt><dd></dd>", "a[href=\"#teleop_diagnostics.teleop_tui.VelocityData\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.VelocityData\">\n<span class=\"target\" id=\"classteleop__diagnostics_1_1teleop__tui_1_1VelocityData\"></span><em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-name descname\"><span class=\"pre\">VelocityData</span></span></dt><dd></dd>", "a[href=\"#breathe-section-title-public-static-attributes\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-static-attributes\">Public Static Attributes<a class=\"headerlink\" href=\"#breathe-section-title-public-static-attributes\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#teleop_diagnostics.teleop_tui.VelocityData.timestamp\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.VelocityData.timestamp\">\n<span class=\"target\" id=\"classteleop__diagnostics_1_1teleop__tui_1_1VelocityData_1af6238c85a6b5a18770dc02b7a9834dd7\"></span><span class=\"sig-name descname\"><span class=\"pre\">timestamp</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"mf\">0.0</span></code></dt><dd></dd>", "a[href=\"#teleop_diagnostics.teleop_tui.VelocityData.frame_id\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.VelocityData.frame_id\">\n<span class=\"target\" id=\"classteleop__diagnostics_1_1teleop__tui_1_1VelocityData_1ae29e1486c6768be723fc645e12924d9b\"></span><span class=\"sig-name descname\"><span class=\"pre\">frame_id</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"s2\">\"\"</span></code></dt><dd></dd>", "a[href=\"#teleop_diagnostics.teleop_tui.VelocityData.angular_z\"]": "<dt class=\"sig sig-object highlight py\" id=\"teleop_diagnostics.teleop_tui.VelocityData.angular_z\">\n<span class=\"target\" id=\"classteleop__diagnostics_1_1teleop__tui_1_1VelocityData_1a6a2f3c5c0c795c27198e5e7cbced211b\"></span><span class=\"sig-name descname\"><span class=\"pre\">angular_z</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"mf\">0.0</span></code></dt><dd></dd>"}
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
