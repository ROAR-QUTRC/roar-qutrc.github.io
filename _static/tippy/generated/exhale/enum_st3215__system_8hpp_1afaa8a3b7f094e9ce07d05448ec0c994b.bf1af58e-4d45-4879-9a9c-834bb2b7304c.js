selector_to_html = {"a[href=\"#_CPPv4N21perseus_lite_hardware12ServoCommand4READE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N21perseus_lite_hardware12ServoCommand4READE\">\n<span id=\"_CPPv3N21perseus_lite_hardware12ServoCommand4READE\"></span><span id=\"_CPPv2N21perseus_lite_hardware12ServoCommand4READE\"></span><span class=\"target\" id=\"st3215__system_8hpp_1afaa8a3b7f094e9ce07d05448ec0c994ba3466fab4975481651940ed328aa990e4\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">READ</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N21perseus_lite_hardware12ServoCommandE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N21perseus_lite_hardware12ServoCommandE\">\n<span id=\"_CPPv3N21perseus_lite_hardware12ServoCommandE\"></span><span id=\"_CPPv2N21perseus_lite_hardware12ServoCommandE\"></span><span class=\"target\" id=\"st3215__system_8hpp_1afaa8a3b7f094e9ce07d05448ec0c994b\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">perseus_lite_hardware</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">ServoCommand</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><br/></dt><dd><p><em>Values:</em></p></dd>", "a[href=\"#_CPPv4N21perseus_lite_hardware12ServoCommand5WRITEE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N21perseus_lite_hardware12ServoCommand5WRITEE\">\n<span id=\"_CPPv3N21perseus_lite_hardware12ServoCommand5WRITEE\"></span><span id=\"_CPPv2N21perseus_lite_hardware12ServoCommand5WRITEE\"></span><span class=\"target\" id=\"st3215__system_8hpp_1afaa8a3b7f094e9ce07d05448ec0c994bad4b9e47f65b6e79b010582f15785867e\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">WRITE</span></span></span><br/></dt><dd></dd>"}
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
