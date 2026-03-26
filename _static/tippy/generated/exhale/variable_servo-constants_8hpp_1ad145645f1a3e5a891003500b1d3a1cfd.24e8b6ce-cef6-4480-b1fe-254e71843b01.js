selector_to_html = {"a[href=\"#_CPPv4N7perseus5servo13communication17DEFAULT_BAUD_RATEE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N7perseus5servo13communication17DEFAULT_BAUD_RATEE\">\n<span id=\"_CPPv3N7perseus5servo13communication17DEFAULT_BAUD_RATEE\"></span><span id=\"_CPPv2N7perseus5servo13communication17DEFAULT_BAUD_RATEE\"></span><span id=\"perseus::servo::communication::DEFAULT_BAUD_RATE__unsigned-i\"></span><span class=\"target\" id=\"servo-constants_8hpp_1ad145645f1a3e5a891003500b1d3a1cfd\"></span><span class=\"k\"><span class=\"pre\">static</span></span><span class=\"w\"> </span><span class=\"kt\"><span class=\"pre\">unsigned</span></span><span class=\"w\"> </span><span class=\"kt\"><span class=\"pre\">int</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">perseus</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">servo</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">communication</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">DEFAULT_BAUD_RATE</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">115200</span></span><br/></dt><dd></dd>"}
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
