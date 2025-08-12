selector_to_html = {"a[href=\"#c.HI_CAN_PARAM_DECLARE_SCALED_INT32_T\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"c.HI_CAN_PARAM_DECLARE_SCALED_INT32_T\">\n<span class=\"target\" id=\"hi__can__parameter_8hpp_1ace158cff566cf7f91032a6c83ad50263\"></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">HI_CAN_PARAM_DECLARE_SCALED_INT32_T</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.HI_CAN_PARAM_DECLARE_SCALED_INT32_T\" title=\"_className (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_className</span></span></a>, </span><span class=\"sig-param-decl\"><a class=\"n reference internal\" href=\"#c.HI_CAN_PARAM_DECLARE_SCALED_INT32_T\" title=\"_scalingFactor (C macro parameter)\"><span class=\"n\"><span class=\"pre\">_scalingFactor</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd><p>Declare a scaled int32_t type with a scaling factor. </p><p>Defined as a macro because we need the using declaration to bring the constructor into scope </p></dd>"}
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
