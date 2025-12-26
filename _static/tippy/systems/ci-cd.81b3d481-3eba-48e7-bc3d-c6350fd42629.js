selector_to_html = {"a[href=\"documentation.html\"]": "<h1 class=\"tippy-header\" id=\"documentation\" style=\"margin-top: 0;\">Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">\u00b6</a></h1><p>Good documentation is key to a project\u2019s long-term success.\nAs such, the documentation pipeline which ends up generating these very webpages is explained in this document.\nIf you\u2019re looking to start <em>writing</em> documentation, check out the <a class=\"reference internal\" href=\"../maintenance/documentation.html\"><span class=\"std std-doc\">maintenance</span></a> page after reading through this one.</p>"}
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
