selector_to_html = {"a[href=\"#c.CHECK_PARAMETER_EXISTS\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"c.CHECK_PARAMETER_EXISTS\">\n<span class=\"target\" id=\"system__common_8hpp_1a217b314d6ba97b344124cbfb8dbf29a3\"></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CHECK_PARAMETER_EXISTS</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.CHECK_PARAMETER_EXISTS\" title=\"_logger (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_logger</span></span></a>, </span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.CHECK_PARAMETER_EXISTS\" title=\"_joint (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_joint</span></span></a>, </span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.CHECK_PARAMETER_EXISTS\" title=\"_param_name (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_param_name</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>"}
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
