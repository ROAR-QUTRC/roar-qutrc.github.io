selector_to_html = {"a[href=\"../standards/software.html\"]": "<h1 class=\"tippy-header\" id=\"software-standards\" style=\"margin-top: 0;\">Software Standards<a class=\"headerlink\" href=\"#software-standards\" title=\"Link to this heading\">\u00b6</a></h1><p>This document is intended to codify a set of standards and practices for developing high-quality and interoperable software and firmware across the QUT Robotics ROAR team. Before writing any software, you should have fully read through both the <a class=\"reference internal\" href=\"#general-software-standards\">General</a> and language-specific (<a class=\"reference internal\" href=\"#c-standards\">C++</a> or <a class=\"reference internal\" href=\"#python-standards\">Python</a>) sections of this document.\nAdditionally, if you\u2019re writing ROS code, you should also have read through the <a class=\"reference internal\" href=\"#ros-standards\">ROS</a> section.\nIf you don\u2019t fully understand some of the topics being referenced, feel free to ask questions in Discord, we\u2019ll be happy to help, and if enough people have the same questions, we\u2019ll edit this document to add explanations.</p><p>This document is heavily based off the <a class=\"reference external\" href=\"https://wiki.openstack.org/wiki/CppCodingStandards\">OpenStack C++ standards</a>.</p>"}
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
