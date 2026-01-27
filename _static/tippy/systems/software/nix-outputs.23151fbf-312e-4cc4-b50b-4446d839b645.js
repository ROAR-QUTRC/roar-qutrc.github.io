selector_to_html = {"a[href=\"../../home/nix-basics.html\"]": "<h1 class=\"tippy-header\" id=\"nix-basics\" style=\"margin-top: 0;\">Nix Basics<a class=\"headerlink\" href=\"#nix-basics\" title=\"Link to this heading\">\u00b6</a></h1><p>As you\u2019ve almost certainly read by now in at least one place, this project is built using <a class=\"reference external\" href=\"https://nixos.org/\">Nix</a>, allowing for fully declarative package and environment setup.\nWhilst this provides massive advantages for reproducibility and ease of environment setup, that doesn\u2019t help if you don\u2019t know how to use it - which this document attempts to remedy.</p>"}
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
