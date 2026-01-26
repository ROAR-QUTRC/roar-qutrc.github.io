selector_to_html = {"a[href=\"systems-index.html\"]": "<h1 class=\"tippy-header\" id=\"systems\" style=\"margin-top: 0;\">Systems<a class=\"headerlink\" href=\"#systems\" title=\"Link to this heading\">\u00b6</a></h1><p>This section describes what systems are present on Perseus, what they are and what they do. For information how to develop each of these systems check their corresponding pages in this section.</p><p>Fundamentally, the rover is split into two main sub-systems: Hardware, and Software.\nThe <a class=\"reference internal\" href=\"systems/software-index.html\"><span class=\"std std-doc\"><em>software</em> system</span></a> lays out how the <em>code</em> interacts with itself and its environment, as well as which bits do what.\nThe <a class=\"reference internal\" href=\"systems/hardware-index.html\"><span class=\"std std-doc\"><em>hardware</em> system</span></a> goes over how everything\u2019s <em>physically</em> connected and laid out, as well as the electrical wiring.</p>"}
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
