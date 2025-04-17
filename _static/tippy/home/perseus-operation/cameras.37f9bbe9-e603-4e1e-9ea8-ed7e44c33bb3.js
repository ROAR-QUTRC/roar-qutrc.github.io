selector_to_html = {"a[href=\"power-on.html\"]": "<h1 class=\"tippy-header\" id=\"powering-on-perseus\" style=\"margin-top: 0;\">Powering on Perseus<a class=\"headerlink\" href=\"#powering-on-perseus\" title=\"Link to this heading\">\u00b6</a></h1><p>This guide explains the correct process to power on persues.</p>"}
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
