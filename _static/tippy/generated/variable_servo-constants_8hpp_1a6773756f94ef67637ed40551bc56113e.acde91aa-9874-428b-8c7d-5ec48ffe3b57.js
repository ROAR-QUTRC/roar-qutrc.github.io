selector_to_html = {"a[href=\"#_CPPv4N7perseus5servo13communication20DEFAULT_ACCELERATIONE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N7perseus5servo13communication20DEFAULT_ACCELERATIONE\">\n<span id=\"_CPPv3N7perseus5servo13communication20DEFAULT_ACCELERATIONE\"></span><span id=\"_CPPv2N7perseus5servo13communication20DEFAULT_ACCELERATIONE\"></span><span id=\"perseus::servo::communication::DEFAULT_ACCELERATION__uint8_t\"></span><span class=\"target\" id=\"servo-constants_8hpp_1a6773756f94ef67637ed40551bc56113e\"></span><span class=\"k\"><span class=\"pre\">static</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">perseus</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">servo</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">communication</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">DEFAULT_ACCELERATION</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">30</span></span><br/></dt><dd></dd>"}
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
