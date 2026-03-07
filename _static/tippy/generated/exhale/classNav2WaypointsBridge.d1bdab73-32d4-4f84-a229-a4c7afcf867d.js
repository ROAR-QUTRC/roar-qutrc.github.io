selector_to_html = {"a[href=\"#_CPPv419Nav2WaypointsBridge\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv419Nav2WaypointsBridge\">\n<span id=\"_CPPv319Nav2WaypointsBridge\"></span><span id=\"_CPPv219Nav2WaypointsBridge\"></span><span id=\"Nav2WaypointsBridge\"></span><span class=\"target\" id=\"classNav2WaypointsBridge\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">Nav2WaypointsBridge</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">Node</span></span><br/></dt><dd><p>Inheritance diagram for Nav2WaypointsBridge:</p><p>Collaboration diagram for Nav2WaypointsBridge:</p></dd>", "a[href=\"#_CPPv4N19Nav2WaypointsBridge19Nav2WaypointsBridgeEv\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N19Nav2WaypointsBridge19Nav2WaypointsBridgeEv\">\n<span id=\"_CPPv3N19Nav2WaypointsBridge19Nav2WaypointsBridgeEv\"></span><span id=\"_CPPv2N19Nav2WaypointsBridge19Nav2WaypointsBridgeEv\"></span><span id=\"Nav2WaypointsBridge::Nav2WaypointsBridge\"></span><span class=\"target\" id=\"classNav2WaypointsBridge_1af7f6fd133c76e46dd0b73dd0550ab5cd\"></span><span class=\"k\"><span class=\"pre\">inline</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">Nav2WaypointsBridge</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>"}
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
