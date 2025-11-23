selector_to_html = {"a[href=\"home/getting-started.html\"]": "<h1 class=\"tippy-header\" id=\"getting-started\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">\u00b6</a></h1><p>This project is built using <a class=\"reference external\" href=\"https://nixos.org/\">Nix</a>, which makes getting started quite easy - all you have to do is install Nix and <code class=\"docutils literal notranslate\"><span class=\"pre\">direnv</span></code>, and they take care of the rest.\nWhilst this page will get you started, it is strongly recommended that you read through <a class=\"reference internal\" href=\"home/nix-basics.html\"><span class=\"std std-doc\">Nix Basics</span></a> after reading through this document so you understand how to use the tooling.</p>", "a[href=\"generated/index.html\"]": "<h1 class=\"tippy-header\" id=\"generated-documentation\" style=\"margin-top: 0;\">Generated Documentation<a class=\"headerlink\" href=\"#generated-documentation\" title=\"Link to this heading\">\u00b6</a></h1>"}
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
