selector_to_html = {"a[href=\"home/getting-started.html\"]": "<h1 class=\"tippy-header\" id=\"getting-started\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">\u00b6</a></h1><p>This project is built using <a class=\"reference external\" href=\"https://nixos.org/\">Nix</a>, which makes getting started quite easy - all you have to do is install Nix and <code class=\"docutils literal notranslate\"><span class=\"pre\">direnv</span></code>, and they take care of the rest.\nWhilst this page will get you started, it is strongly recommended that you read through <a class=\"reference internal\" href=\"home/nix-basics.html\"><span class=\"std std-doc\">Nix Basics</span></a> after reading through this document so you understand how to use the tooling.</p>", "a[href=\"architecture/software.html\"]": "<h1 class=\"tippy-header\" id=\"software\" style=\"margin-top: 0;\">Software<a class=\"headerlink\" href=\"#software\" title=\"Link to this heading\">\u00b6</a></h1><p>The software on the rover is split into the core software (mainly ROS2 code), the web control UI, and firmware.\nSince the web UI runs on a completely different stack to the rest of the rover code, it just made more sense to separate it out and treat it separately.\nFirmware is compiled completely separately to the rest of the stack, so also needs to be split out (although it does share some libraries with the core software).</p>", "a[href=\"architecture/hardware.html\"]": "<h1 class=\"tippy-header\" id=\"hardware\" style=\"margin-top: 0;\">Hardware<a class=\"headerlink\" href=\"#hardware\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"generated/index.html\"]": "<h1 class=\"tippy-header\" id=\"generated-documentation\" style=\"margin-top: 0;\">Generated Documentation<a class=\"headerlink\" href=\"#generated-documentation\" title=\"Link to this heading\">\u00b6</a></h1>"}
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
