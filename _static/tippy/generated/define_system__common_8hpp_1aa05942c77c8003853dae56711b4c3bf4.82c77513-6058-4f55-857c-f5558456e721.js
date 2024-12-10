selector_to_html = {"a[href=\"#c.CHECK_INTERFACE_NAME\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"c.CHECK_INTERFACE_NAME\">\n<span class=\"target\" id=\"system__common_8hpp_1aa05942c77c8003853dae56711b4c3bf4\"></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CHECK_INTERFACE_NAME</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.CHECK_INTERFACE_NAME\" title=\"_logger (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_logger</span></span></a>, </span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.CHECK_INTERFACE_NAME\" title=\"_joint (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_joint</span></span></a>, </span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.CHECK_INTERFACE_NAME\" title=\"_interface_type (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_interface_type</span></span></a>, </span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.CHECK_INTERFACE_NAME\" title=\"_interface_name (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_interface_name</span></span></a>, </span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.CHECK_INTERFACE_NAME\" title=\"_interface_index (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_interface_index</span></span></a>, </span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.CHECK_INTERFACE_NAME\" title=\"_expected_name (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_expected_name</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>"}
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
