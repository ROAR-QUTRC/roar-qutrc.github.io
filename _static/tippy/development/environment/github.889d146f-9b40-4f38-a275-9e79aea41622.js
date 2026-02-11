selector_to_html = {"a[href=\"../documentation-index.html\"]": "<h1 class=\"tippy-header\" id=\"documentation\" style=\"margin-top: 0;\">Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">\u00b6</a></h1><p>Unless you\u2019re making major edits to the raw markdown/reST files, or you\u2019re fiddling with the build toolchain, you probably don\u2019t need to build them locally - let the continuous deployment take care of it for you!\nHowever, if you do need to test things locally, you have two options.\nThe first is to enter a <em>development shell</em> using <code class=\"docutils literal notranslate\"><span class=\"pre\">nix</span> <span class=\"pre\">develop</span></code> - if you want slightly faster builds, you\u2019re modifying Python dependencies, or you\u2019re tinkering with the build toolchain, this is what you\u2019ll need.\nThe second is to use <code class=\"docutils literal notranslate\"><span class=\"pre\">nix</span> <span class=\"pre\">build</span></code> - this option (by default) requires root access in order to allow the build to have access to the internet.\nIf you have root access, this option is useful if you\u2019re making small edits to the documentation and you want to check that everything\u2019s building properly before pushing to GitHub.</p>", "a[href=\"../../systems/ci-cd.html\"]": "<h1 class=\"tippy-header\" id=\"ci-cd\" style=\"margin-top: 0;\">CI/CD<a class=\"headerlink\" href=\"#ci-cd\" title=\"Link to this heading\">\u00b6</a></h1><p>CI/CD (which stands for Continuous Integration, Continuous Delivery/Deployment) is, in theory, exactly what it says on the tin.</p>", "a[href=\"../../standards/github.html\"]": "<h1 class=\"tippy-header\" id=\"github-standards\" style=\"margin-top: 0;\">GitHub Standards<a class=\"headerlink\" href=\"#github-standards\" title=\"Link to this heading\">\u00b6</a></h1><p>This document outlines our professional standards and best practices for contributing to the Perseus-v2 GitHub repository. The ROAR Project is a multi-year, multi-discipline endeavour and the Perseus-v2 repository represents the code for the current rover platform used at Australian and international competitions.</p><p>The Perseus-v2 repository contains all the software for the Perseus rover and includes:</p>"}
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
