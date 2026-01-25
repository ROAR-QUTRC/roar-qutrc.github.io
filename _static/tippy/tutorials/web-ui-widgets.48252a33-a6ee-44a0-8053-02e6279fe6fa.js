selector_to_html = {"a[href=\"../standards/software/typescript.html\"]": "<h1 class=\"tippy-header\" id=\"js-ts-standards\" style=\"margin-top: 0;\">JS/TS Standards<a class=\"headerlink\" href=\"#js-ts-standards\" title=\"Link to this heading\">\u00b6</a></h1><p>These standards are based on the <a class=\"reference external\" href=\"https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript\">MDN Developer Standards</a> and known ways of avoiding the famous JavaScript weirdness.</p>", "a[href=\"../development/software/web-ui.html\"]": "<h1 class=\"tippy-header\" id=\"web-ui\" style=\"margin-top: 0;\">Web UI<a class=\"headerlink\" href=\"#web-ui\" title=\"Link to this heading\">\u00b6</a></h1><p>External libraries will not be documented here. View their official docs:</p>", "a[href=\"../home/getting-started.html\"]": "<h1 class=\"tippy-header\" id=\"getting-started\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">\u00b6</a></h1><p>This project is built using <a class=\"reference external\" href=\"https://nixos.org/\">Nix</a>, which makes getting started quite easy - all you have to do is install Nix and <code class=\"docutils literal notranslate\"><span class=\"pre\">direnv</span></code>, and they take care of the rest.\nWhilst this page will get you started, it is strongly recommended that you read through <a class=\"reference internal\" href=\"../home/nix-basics.html\"><span class=\"std std-doc\">Nix Basics</span></a> after reading through this document so you understand how to use the tooling.</p>", "a[href=\"../standards/github.html\"]": "<h1 class=\"tippy-header\" id=\"github-standards\" style=\"margin-top: 0;\">GitHub Standards<a class=\"headerlink\" href=\"#github-standards\" title=\"Link to this heading\">\u00b6</a></h1><p>This document outlines our professional standards and best practices for contributing to the Perseus-v2 GitHub repository. The ROAR Project is a multi-year, multi-discipline endeavour and the Perseus-v2 repository represents the code for the current rover platform used at Australian and international competitions.</p><p>The Perseus-v2 repository contains all the software for the Perseus rover and includes:</p>"}
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
