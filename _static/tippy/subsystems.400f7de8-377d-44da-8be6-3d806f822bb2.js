selector_to_html = {"a[href=\"challenge-breakdowns.html\"]": "<h1 class=\"tippy-header\" id=\"challenge-breakdowns\" style=\"margin-top: 0;\">Challenge Breakdowns<a class=\"headerlink\" href=\"#challenge-breakdowns\" title=\"Link to this heading\">\u00b6</a></h1><p>This section details the individual challenges and breaks down the approach for each one.\nIt also goes over prioritisation of tasks within each challenge, based on their expected difficulty and point value.</p>"}
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
