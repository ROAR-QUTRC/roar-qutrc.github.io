selector_to_html = {"a[href=\"#_CPPv4N7perseus5servo6limits10MIN_TORQUEE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N7perseus5servo6limits10MIN_TORQUEE\">\n<span id=\"_CPPv3N7perseus5servo6limits10MIN_TORQUEE\"></span><span id=\"_CPPv2N7perseus5servo6limits10MIN_TORQUEE\"></span><span id=\"perseus::servo::limits::MIN_TORQUE__int16_t\"></span><span class=\"target\" id=\"servo-constants_8hpp_1a59cfc2fc065039e0ee2719d2db01568a\"></span><span class=\"k\"><span class=\"pre\">static</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"int16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">int16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">perseus</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">servo</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">limits</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">MIN_TORQUE</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">-</span></span><span class=\"m\"><span class=\"pre\">1000</span></span><br/></dt><dd></dd>"}
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
