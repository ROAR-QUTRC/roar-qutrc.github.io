selector_to_html = {"a[href=\"#_CPPv4N6string8iteratorE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6string8iteratorE\">\n<span id=\"_CPPv3N6string8iteratorE\"></span><span id=\"_CPPv2N6string8iteratorE\"></span><span id=\"string::iterator\"></span><span class=\"target\" id=\"classstring_1_1iterator\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">iterator</span></span></span><br/></dt><dd><p>STL iterator class. </p></dd>"}
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
