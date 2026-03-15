selector_to_html = {"a[href=\"#_CPPv4N7perseus5servo6timing16COMMAND_INTERVALE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N7perseus5servo6timing16COMMAND_INTERVALE\">\n<span id=\"_CPPv3N7perseus5servo6timing16COMMAND_INTERVALE\"></span><span id=\"_CPPv2N7perseus5servo6timing16COMMAND_INTERVALE\"></span><span id=\"perseus::servo::timing::COMMAND_INTERVAL__auto\"></span><span class=\"target\" id=\"servo-constants_8hpp_1aff6c20c2ff3b81c95eeef2d01c9591d2\"></span><span class=\"k\"><span class=\"pre\">static</span></span><span class=\"w\"> </span><span class=\"kt\"><span class=\"pre\">auto</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">perseus</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">servo</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">timing</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">COMMAND_INTERVAL</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">chrono</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/chrono/duration\" title=\"std::chrono::milliseconds (C++11 standard type alias)\"><span class=\"n\"><span class=\"pre\">milliseconds</span></span></a><span class=\"p\"><span class=\"pre\">(</span></span><span class=\"m\"><span class=\"pre\">5</span></span><span class=\"p\"><span class=\"pre\">)</span></span><br/></dt><dd></dd>"}
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
