selector_to_html = {"a[href=\"#c.POINTCLOUD_TO_LASERSCAN_PUBLIC_TYPE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"c.POINTCLOUD_TO_LASERSCAN_PUBLIC_TYPE\">\n<span class=\"target\" id=\"visibility__control_8h_1a6826f18dc3ac6845af4441c8bf4f460a\"></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">POINTCLOUD_TO_LASERSCAN_PUBLIC_TYPE</span></span></span><br/></dt><dd></dd>"}
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
