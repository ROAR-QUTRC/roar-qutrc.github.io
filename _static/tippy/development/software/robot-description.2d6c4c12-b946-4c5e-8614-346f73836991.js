selector_to_html = {"a[href=\"#id5\"]": "<aside class=\"footnote brackets\" id=\"id5\" role=\"doc-footnote\">\n<span class=\"label\"><span class=\"fn-bracket\">[</span>2<span class=\"fn-bracket\">]</span></span>\n<span class=\"backrefs\">(<a href=\"#id2\" role=\"doc-backlink\">1</a>,<a href=\"#id3\" role=\"doc-backlink\">2</a>)</span>\n<p>REP 103 \u2014 Standard Units of Measure and Coordinate Conventions. <a class=\"reference external\" href=\"https://www.ros.org/reps/rep-0103.html\">https://www.ros.org/reps/rep-0103.html</a></p>\n</aside>", "a[href=\"#id4\"]": "<aside class=\"footnote brackets\" id=\"id4\" role=\"doc-footnote\">\n<span class=\"label\"><span class=\"fn-bracket\">[</span><a href=\"#id1\" role=\"doc-backlink\">1</a><span class=\"fn-bracket\">]</span></span>\n<p>Foxglove Robotics \u2014 <em>What is URDF (Unified Robot Description Format)?</em> <a class=\"reference external\" href=\"https://foxglove.dev/robotics/urdf\">https://foxglove.dev/robotics/urdf</a>.</p>\n</aside>"}
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
