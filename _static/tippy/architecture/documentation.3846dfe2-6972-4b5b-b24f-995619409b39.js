selector_to_html = {"a[href=\"../home/nix-basics.html\"]": "<h1 class=\"tippy-header\" id=\"nix-basics\" style=\"margin-top: 0;\">Nix Basics<a class=\"headerlink\" href=\"#nix-basics\" title=\"Link to this heading\">\u00b6</a></h1><p>As you\u2019ve almost certainly read by now in at least one place, this project is built using <a class=\"reference external\" href=\"https://nixos.org/\">Nix</a>, allowing for fully declarative package and environment setup.\nWhilst this provides massive advantages for reproducibility and ease of environment setup, that doesn\u2019t help if you don\u2019t know how to use it - which this document attempts to remedy.</p>", "a[href=\"#option-no-commit\"]": "<dt class=\"sig sig-object highlight std\" id=\"option-no-commit\">\n<span class=\"sig-name descname\"><span class=\"pre\">--no-commit</span></span></dt><dd><p>If present, the script will not automatically commit the changes</p></dd>", "a[href=\"#option-source\"]": "<dt class=\"sig sig-object highlight std\" id=\"option-source\">\n<span class=\"sig-name descname\"><span class=\"pre\">source</span></span></dt><dd><p>The path to the input file</p></dd>", "a[href=\"../generated/_figure-index.html\"]": "<h1 class=\"tippy-header\" id=\"generated-images\" style=\"margin-top: 0;\">Generated Images<a class=\"headerlink\" href=\"#generated-images\" title=\"Link to this heading\">\u00b6</a></h1><p>This is a dirty hack to ensure that Sphinx includes all the generated figures in the output.</p>", "a[href=\"#option-destination\"]": "<dt class=\"sig sig-object highlight std\" id=\"option-destination\">\n<span class=\"sig-name descname\"><span class=\"pre\">destination</span></span></dt><dd><p>The path to the destination directory for the extracted files</p></dd>", "a[href=\"ci-cd.html\"]": "<h1 class=\"tippy-header\" id=\"ci-cd\" style=\"margin-top: 0;\">CI/CD<a class=\"headerlink\" href=\"#ci-cd\" title=\"Link to this heading\">\u00b6</a></h1><p>CI/CD (which stands for Continuous Integration, Continuous Delivery/Deployment) is, in theory, exactly what it says on the tin.</p>", "a[href=\"../maintenance/documentation.html\"]": "<h1 class=\"tippy-header\" id=\"documentation\" style=\"margin-top: 0;\">Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">\u00b6</a></h1><p>Run</p>", "a[href=\"../generated/index.html\"]": "<h1 class=\"tippy-header\" id=\"generated-documentation\" style=\"margin-top: 0;\">Generated Documentation<a class=\"headerlink\" href=\"#generated-documentation\" title=\"Link to this heading\">\u00b6</a></h1>"}
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
