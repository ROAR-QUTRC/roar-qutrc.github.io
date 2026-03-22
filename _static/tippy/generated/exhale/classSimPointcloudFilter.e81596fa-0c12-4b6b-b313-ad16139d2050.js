selector_to_html = {"a[href=\"#_CPPv419SimPointcloudFilter\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv419SimPointcloudFilter\">\n<span id=\"_CPPv319SimPointcloudFilter\"></span><span id=\"_CPPv219SimPointcloudFilter\"></span><span id=\"SimPointcloudFilter\"></span><span class=\"target\" id=\"classSimPointcloudFilter\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">SimPointcloudFilter</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">Node</span></span><br/></dt><dd><p>Inheritance diagram for SimPointcloudFilter:</p><p>Collaboration diagram for SimPointcloudFilter:</p></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N19SimPointcloudFilter19SimPointcloudFilterEv\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N19SimPointcloudFilter19SimPointcloudFilterEv\">\n<span id=\"_CPPv3N19SimPointcloudFilter19SimPointcloudFilterEv\"></span><span id=\"_CPPv2N19SimPointcloudFilter19SimPointcloudFilterEv\"></span><span id=\"SimPointcloudFilter::SimPointcloudFilter\"></span><span class=\"target\" id=\"classSimPointcloudFilter_1afe88b8c77473133639b2883358d8090f\"></span><span class=\"k\"><span class=\"pre\">inline</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">SimPointcloudFilter</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>"}
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
