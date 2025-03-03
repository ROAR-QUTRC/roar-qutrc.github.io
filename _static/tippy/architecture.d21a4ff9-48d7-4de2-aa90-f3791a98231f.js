selector_to_html = {"a[href=\"architecture/hardware.html\"]": "<h1 class=\"tippy-header\" id=\"hardware\" style=\"margin-top: 0;\">Hardware<a class=\"headerlink\" href=\"#hardware\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"architecture/documentation.html\"]": "<h1 class=\"tippy-header\" id=\"documentation\" style=\"margin-top: 0;\">Documentation<a class=\"headerlink\" href=\"#documentation\" title=\"Link to this heading\">\u00b6</a></h1><p>Good documentation is key to a project\u2019s long-term success.\nAs such, the documentation pipeline which ends up generating these very webpages is explained in this document.\nIf you\u2019re looking to start <em>writing</em> documentation, check out the <a class=\"reference internal\" href=\"maintenance/documentation.html\"><span class=\"std std-doc\">maintenance</span></a> page after reading through this one.</p>", "a[href=\"architecture/can-bus.html\"]": "<h1 class=\"tippy-header\" id=\"can-bus\" style=\"margin-top: 0;\">CAN Bus<a class=\"headerlink\" href=\"#can-bus\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"architecture/nix.html\"]": "<h1 class=\"tippy-header\" id=\"nix\" style=\"margin-top: 0;\">Nix<a class=\"headerlink\" href=\"#nix\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"architecture/software.html\"]": "<h1 class=\"tippy-header\" id=\"software\" style=\"margin-top: 0;\">Software<a class=\"headerlink\" href=\"#software\" title=\"Link to this heading\">\u00b6</a></h1><p>The software on the rover is split into the core software (mainly ROS2 code), the web control UI, and firmware.\nSince the web UI runs on a completely different stack to the rest of the rover code, it just made more sense to separate it out and treat it separately.\nFirmware is compiled completely separately to the rest of the stack, so also needs to be split out (although it does share some libraries with the core software).</p>", "a[href=\"architecture/ci-cd.html\"]": "<h1 class=\"tippy-header\" id=\"ci-cd\" style=\"margin-top: 0;\">CI/CD<a class=\"headerlink\" href=\"#ci-cd\" title=\"Link to this heading\">\u00b6</a></h1><p>CI/CD (which stands for Continuous Integration, Continuous Delivery/Deployment) is, in theory, exactly what it says on the tin.</p>", "a[href=\"subsystems.html\"]": "<h1 class=\"tippy-header\" id=\"payload-subsystems\" style=\"margin-top: 0;\">Payload Subsystems<a class=\"headerlink\" href=\"#payload-subsystems\" title=\"Link to this heading\">\u00b6</a></h1><p>Located here are the payload-specific subsystems.\nTheir development is closely tied to the analysis done in the <a class=\"reference internal\" href=\"challenge-breakdowns.html\"><span class=\"std std-doc\">Challenge Breakdowns</span></a>.</p>"}
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
