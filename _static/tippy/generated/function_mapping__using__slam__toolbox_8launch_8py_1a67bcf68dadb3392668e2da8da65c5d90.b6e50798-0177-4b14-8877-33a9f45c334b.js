selector_to_html = {"a[href=\"#mapping_using_slam_toolbox.generate_launch_description\"]": "<dt class=\"sig sig-object highlight py\" id=\"mapping_using_slam_toolbox.generate_launch_description\">\n<span class=\"target\" id=\"mapping__using__slam__toolbox_8launch_8py_1a67bcf68dadb3392668e2da8da65c5d90\"></span><span class=\"sig-prename descclassname\"><span class=\"pre\">mapping_using_slam_toolbox.</span></span><span class=\"sig-name descname\"><span class=\"pre\">generate_launch_description</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span></dt><dd></dd>"}
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
