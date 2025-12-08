selector_to_html = {"a[href=\"../standards/software/general.html\"]": "<h1 class=\"tippy-header\" id=\"general-software-standards\" style=\"margin-top: 0;\">General Software Standards<a class=\"headerlink\" href=\"#general-software-standards\" title=\"Link to this heading\">\u00b6</a></h1><p>Almost everything in <a class=\"reference external\" href=\"https://www.youtube.com/watch?v=-J3wNP6u5YU\">Naming Things in Code</a> applies to ROAR code. I highly recommend checking out <em>all</em> of his (<a class=\"reference external\" href=\"https://www.youtube.com/@CodeAesthetic/videos\">CodeAesthetic\u2019s</a>) videos - they\u2019re all excellent, and almost everything is applicable here. They explain many of the <em>principles</em> behind why certain rules are in this document.</p><p>The one exception to this video is abbreviations, as documented below.</p>"}
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
