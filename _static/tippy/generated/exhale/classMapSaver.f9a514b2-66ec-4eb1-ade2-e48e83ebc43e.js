selector_to_html = {"a[href=\"#_CPPv48MapSaver\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv48MapSaver\">\n<span id=\"_CPPv38MapSaver\"></span><span id=\"_CPPv28MapSaver\"></span><span id=\"MapSaver\"></span><span class=\"target\" id=\"classMapSaver\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">MapSaver</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">Node</span></span><br/></dt><dd><p>Inheritance diagram for MapSaver:</p><p>Collaboration diagram for MapSaver:</p></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N8MapSaver8MapSaverEv\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N8MapSaver8MapSaverEv\">\n<span id=\"_CPPv3N8MapSaver8MapSaverEv\"></span><span id=\"_CPPv2N8MapSaver8MapSaverEv\"></span><span id=\"MapSaver::MapSaver\"></span><span class=\"target\" id=\"classMapSaver_1aaab9549c0503671b51ecffe96a45f1bd\"></span><span class=\"k\"><span class=\"pre\">inline</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">MapSaver</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>"}
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
