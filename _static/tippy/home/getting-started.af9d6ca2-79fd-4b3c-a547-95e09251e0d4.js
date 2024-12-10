selector_to_html = {"a[href=\"#setup-autocomplete\"]": "<div class=\"note admonition\" id=\"setup-autocomplete\">\n<p class=\"admonition-title\">Note</p>\n<p>Unfortunately, <code class=\"docutils literal notranslate\"><span class=\"pre\">nix</span> <span class=\"pre\">shell</span></code> can\u2019t set up autocomplete for ROS2 commands - if you want this functionality (which you should!) either run <code class=\"docutils literal notranslate\"><span class=\"pre\">eval</span> <span class=\"pre\">\"$(mk-workspace-shell-setup)\"</span></code> or <code class=\"docutils literal notranslate\"><span class=\"pre\">source</span> <span class=\"pre\">software/scripts/autocomplete.sh</span></code> (the path for the latter assumes you\u2019re in the repository root) after entering the subshell.</p>\n</div>", "a[href=\"../architecture/software.html\"]": "<h1 class=\"tippy-header\" id=\"software\" style=\"margin-top: 0;\">Software<a class=\"headerlink\" href=\"#software\" title=\"Link to this heading\">\u00b6</a></h1><p>The software on the rover is split into the core software (mainly ROS2 code), the web control UI, and firmware.\nSince the web UI runs on a completely different stack to the rest of the rover code, it just made more sense to separate it out and treat it separately.\nFirmware is compiled completely separately to the rest of the stack, so also needs to be split out (although it does share some libraries with the core software).</p>", "a[href=\"../standards/software.html\"]": "<h1 class=\"tippy-header\" id=\"software-standards\" style=\"margin-top: 0;\">Software Standards<a class=\"headerlink\" href=\"#software-standards\" title=\"Link to this heading\">\u00b6</a></h1><p>This document is intended to codify a set of standards and practices for developing high-quality and interoperable software and firmware across the QUT Robotics ROAR team. Before writing any software, you should have fully read through both the <a class=\"reference internal\" href=\"#general-software-standards\">General</a> and language-specific (<a class=\"reference internal\" href=\"#c-standards\">C++</a> or <a class=\"reference internal\" href=\"#python-standards\">Python</a>) sections of this document.\nAdditionally, if you\u2019re writing ROS code, you should also have read through the <a class=\"reference internal\" href=\"#ros-standards\">ROS</a> section.\nIf you don\u2019t fully understand some of the topics being referenced, feel free to ask questions in Discord, we\u2019ll be happy to help, and if enough people have the same questions, we\u2019ll edit this document to add explanations.</p><p>This document is heavily based off the <a class=\"reference external\" href=\"https://wiki.openstack.org/wiki/CppCodingStandards\">OpenStack C++ standards</a>.</p>", "a[href=\"nix-basics.html\"]": "<h1 class=\"tippy-header\" id=\"nix-basics\" style=\"margin-top: 0;\">Nix Basics<a class=\"headerlink\" href=\"#nix-basics\" title=\"Link to this heading\">\u00b6</a></h1><p>As you\u2019ve almost certainly read by now in at least one place, this project is built using <a class=\"reference external\" href=\"https://nixos.org/\">Nix</a>, allowing for fully declarative package and environment setup.\nWhilst this provides massive advantages for reproducibility and ease of environment setup, that doesn\u2019t help if you don\u2019t know how to use it - which this document attempts to remedy.</p>"}
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
