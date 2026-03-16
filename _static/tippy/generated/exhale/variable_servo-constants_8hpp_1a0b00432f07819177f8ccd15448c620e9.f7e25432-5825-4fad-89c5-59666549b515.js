selector_to_html = {"a[href=\"#_CPPv4N7perseus5servo13communication11MAX_RETRIESE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N7perseus5servo13communication11MAX_RETRIESE\">\n<span id=\"_CPPv3N7perseus5servo13communication11MAX_RETRIESE\"></span><span id=\"_CPPv2N7perseus5servo13communication11MAX_RETRIESE\"></span><span id=\"perseus::servo::communication::MAX_RETRIES__i\"></span><span class=\"target\" id=\"servo-constants_8hpp_1a0b00432f07819177f8ccd15448c620e9\"></span><span class=\"k\"><span class=\"pre\">static</span></span><span class=\"w\"> </span><span class=\"kt\"><span class=\"pre\">int</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">perseus</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">servo</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">communication</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">MAX_RETRIES</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">3</span></span><br/></dt><dd></dd>"}
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
