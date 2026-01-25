selector_to_html = {"a[href=\"#c.POINTCLOUD_TO_LASERSCAN_EXPORT\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"c.POINTCLOUD_TO_LASERSCAN_EXPORT\">\n<span class=\"target\" id=\"visibility__control_8h_1a2ddd5f1f9aa1780431298536a5f4ff12\"></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">POINTCLOUD_TO_LASERSCAN_EXPORT</span></span></span><br/></dt><dd></dd>"}
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
