selector_to_html = {"a[href=\"#c.HI_CAN_PARAM_DECLARE_SCALED_INT16_T\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"c.HI_CAN_PARAM_DECLARE_SCALED_INT16_T\">\n<span class=\"target\" id=\"hi__can__parameter_8hpp_1a72179808b2f0413d1e6f008b46f4ad7c\"></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">HI_CAN_PARAM_DECLARE_SCALED_INT16_T</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.HI_CAN_PARAM_DECLARE_SCALED_INT16_T\" title=\"_class_name (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_class_name</span></span></a>, </span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.HI_CAN_PARAM_DECLARE_SCALED_INT16_T\" title=\"_scaling_factor (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_scaling_factor</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd><p>Declare a scaled int16_t type with a scaling factor. </p><p>Defined as a macro because we need the using declaration to bring the constructor into scope </p></dd>"}
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
