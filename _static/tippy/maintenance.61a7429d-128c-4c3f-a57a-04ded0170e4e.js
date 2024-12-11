selector_to_html = {"a[href=\"architecture.html\"]": "<h1 class=\"tippy-header\" id=\"architecture\" style=\"margin-top: 0;\">Architecture<a class=\"headerlink\" href=\"#architecture\" title=\"Link to this heading\">\u00b6</a></h1><p>Fundamentally, the rover is split into two main sub-systems: Hardware, and Software.\nThe <a class=\"reference internal\" href=\"architecture/software.html\"><span class=\"std std-doc\"><em>software</em> architecture</span></a> lays out how the <em>code</em> interacts with itself and its environment, as well as which bits do what.\nThe <a class=\"reference internal\" href=\"architecture/hardware.html\"><span class=\"std std-doc\"><em>hardware</em> architecture</span></a> goes over how everything\u2019s <em>physically</em> connected and laid out, as well as the electrical wiring.</p><p>Whilst those two documents contain the majority of the information you\u2019ll need day-to-day, there are also some other moving parts to consider as well:</p>"}
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
