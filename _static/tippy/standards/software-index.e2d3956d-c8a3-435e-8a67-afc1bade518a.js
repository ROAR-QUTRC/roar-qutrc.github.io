selector_to_html = {"a[href=\"software/python.html\"]": "<h1 class=\"tippy-header\" id=\"python-standards\" style=\"margin-top: 0;\">Python Standards<a class=\"headerlink\" href=\"#python-standards\" title=\"Link to this heading\">\u00b6</a></h1><p>Just follow the conventions in <a class=\"reference external\" href=\"https://peps.python.org/pep-0008\">PEP 8</a>. A couple of the most important notes are:</p>", "a[href=\"software/cpp.html\"]": "<h1 class=\"tippy-header\" id=\"c-standards\" style=\"margin-top: 0;\">C++ Standards<a class=\"headerlink\" href=\"#c-standards\" title=\"Link to this heading\">\u00b6</a></h1><p>Many of the items covered in this document are also reiterated <a class=\"reference external\" href=\"http://micro-os-plus.github.io/develop/sutter-101/\">here</a> with different wording, as well as several other things being covered. Have a look and see if it\u2019s covered in the linked page if you\u2019re confused about something, it might explain it differently.</p>", "a[href=\"software/frameworks.html\"]": "<h1 class=\"tippy-header\" id=\"framework-specific-standards\" style=\"margin-top: 0;\">Framework Specific Standards<a class=\"headerlink\" href=\"#framework-specific-standards\" title=\"Link to this heading\">\u00b6</a></h1><p>Most frameworks will have their own documentation and development frameworks which should be read in conjunction with this document.\nThis page fills any gaps in each frameworks own documentation and also includes any other amendments necessary for our use case.</p>", "a[href=\"software/typescript.html\"]": "<h1 class=\"tippy-header\" id=\"js-ts-standards\" style=\"margin-top: 0;\">JS/TS Standards<a class=\"headerlink\" href=\"#js-ts-standards\" title=\"Link to this heading\">\u00b6</a></h1><p>These standards are based on the <a class=\"reference external\" href=\"https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript\">MDN Developer Standards</a> and known ways of avoiding the famous JavaScript weirdness.</p>", "a[href=\"software/general.html\"]": "<h1 class=\"tippy-header\" id=\"general-software-standards\" style=\"margin-top: 0;\">General Software Standards<a class=\"headerlink\" href=\"#general-software-standards\" title=\"Link to this heading\">\u00b6</a></h1><p>Almost everything in <a class=\"reference external\" href=\"https://www.youtube.com/watch?v=-J3wNP6u5YU\">Naming Things in Code</a> applies to ROAR code. I highly recommend checking out <em>all</em> of his (<a class=\"reference external\" href=\"https://www.youtube.com/@CodeAesthetic/videos\">CodeAesthetic\u2019s</a>) videos - they\u2019re all excellent, and almost everything is applicable here. They explain many of the <em>principles</em> behind why certain rules are in this document.</p><p>The one exception to this video is abbreviations, as documented below.</p>"}
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
