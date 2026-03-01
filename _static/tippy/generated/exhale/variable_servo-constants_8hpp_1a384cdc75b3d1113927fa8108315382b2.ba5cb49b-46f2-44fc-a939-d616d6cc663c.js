selector_to_html = {"a[href=\"#_CPPv4N7perseus5servo2ui18MAX_DISPLAY_TORQUEE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N7perseus5servo2ui18MAX_DISPLAY_TORQUEE\">\n<span id=\"_CPPv3N7perseus5servo2ui18MAX_DISPLAY_TORQUEE\"></span><span id=\"_CPPv2N7perseus5servo2ui18MAX_DISPLAY_TORQUEE\"></span><span id=\"perseus::servo::ui::MAX_DISPLAY_TORQUE__i\"></span><span class=\"target\" id=\"servo-constants_8hpp_1a384cdc75b3d1113927fa8108315382b2\"></span><span class=\"k\"><span class=\"pre\">static</span></span><span class=\"w\"> </span><span class=\"kt\"><span class=\"pre\">int</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">perseus</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">servo</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">ui</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">MAX_DISPLAY_TORQUE</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">100</span></span><br/></dt><dd></dd>"}
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
