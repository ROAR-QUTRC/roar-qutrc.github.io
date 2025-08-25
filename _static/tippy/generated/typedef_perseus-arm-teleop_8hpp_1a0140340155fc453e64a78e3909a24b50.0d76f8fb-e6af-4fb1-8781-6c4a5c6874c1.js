selector_to_html = {"a[href=\"#_CPPv46WINDOW\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv46WINDOW\">\n<span id=\"_CPPv36WINDOW\"></span><span id=\"_CPPv26WINDOW\"></span><span id=\"WINDOW\"></span><span class=\"target\" id=\"perseus-arm-teleop_8hpp_1a0140340155fc453e64a78e3909a24b50\"></span><span class=\"k\"><span class=\"pre\">typedef</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">_win_st</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">WINDOW</span></span></span><br/></dt><dd></dd>"}
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
