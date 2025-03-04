selector_to_html = {"a[href=\"../standards/software.html\"]": "<h1 class=\"tippy-header\" id=\"software-standards\" style=\"margin-top: 0;\">Software Standards<a class=\"headerlink\" href=\"#software-standards\" title=\"Link to this heading\">\u00b6</a></h1><p>This document is intended to codify a set of standards and practices for developing high-quality and interoperable software and firmware across the QUT Robotics ROAR team. Before writing any software, you should have fully read through both the <a class=\"reference internal\" href=\"#general-software-standards\">General</a> and language-specific (<a class=\"reference internal\" href=\"#c-standards\">C++</a> or <a class=\"reference internal\" href=\"#python-standards\">Python</a>) sections of this document.\nAdditionally, if you\u2019re writing ROS code, you should also have read through the <a class=\"reference internal\" href=\"#ros-standards\">ROS</a> section.\nIf you don\u2019t fully understand some of the topics being referenced, feel free to ask questions in Discord, we\u2019ll be happy to help, and if enough people have the same questions, we\u2019ll edit this document to add explanations.</p><p>This document is heavily based off the <a class=\"reference external\" href=\"https://wiki.openstack.org/wiki/CppCodingStandards\">OpenStack C++ standards</a>.</p>", "a[href=\"../generated/classhi__can_1_1CanInterface.html#_CPPv4N6hi_can12CanInterfaceE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can12CanInterfaceE\">\n<span id=\"_CPPv3N6hi_can12CanInterfaceE\"></span><span id=\"_CPPv2N6hi_can12CanInterfaceE\"></span><span id=\"hi_can::CanInterface\"></span><span class=\"target\" id=\"classhi__can_1_1CanInterface\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CanInterface</span></span></span><br/></dt><dd><p>Inheritence diagram for hi_can::CanInterface:</p><p>Interface for sending and receiving packets on the CAN bus. </p><p>Subclassed by <a class=\"reference internal\" href=\"../generated/classhi__can_1_1FilteredCanInterface.html#classhi__can_1_1FilteredCanInterface\"><span class=\"std std-ref\">hi_can::FilteredCanInterface</span></a></p></dd>", "a[href=\"can-bus.html\"]": "<h1 class=\"tippy-header\" id=\"can-bus\" style=\"margin-top: 0;\">CAN Bus<a class=\"headerlink\" href=\"#can-bus\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"nix.html\"]": "<h1 class=\"tippy-header\" id=\"nix\" style=\"margin-top: 0;\">Nix<a class=\"headerlink\" href=\"#nix\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"../generated/classhi__can_1_1FilteredCanInterface.html#_CPPv4N6hi_can20FilteredCanInterfaceE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can20FilteredCanInterfaceE\">\n<span id=\"_CPPv3N6hi_can20FilteredCanInterfaceE\"></span><span id=\"_CPPv2N6hi_can20FilteredCanInterfaceE\"></span><span id=\"hi_can::FilteredCanInterface\"></span><span class=\"target\" id=\"classhi__can_1_1FilteredCanInterface\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">FilteredCanInterface</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference internal\" href=\"../generated/classhi__can_1_1CanInterface.html#_CPPv4N6hi_can12CanInterfaceE\" title=\"hi_can::CanInterface (C++ class) \u2014 Inheritence diagram for hi_can::CanInterface:\"><span class=\"n\"><span class=\"pre\">CanInterface</span></span></a><br/></dt><dd><p>Inheritence diagram for hi_can::FilteredCanInterface:</p><p>Collaboration diagram for hi_can::FilteredCanInterface:</p><p>A variant of <a class=\"reference internal\" href=\"../generated/classhi__can_1_1CanInterface.html#classhi__can_1_1CanInterface\"><span class=\"std std-ref\">CanInterface</span></a> which contains a whitelist of filters. In the event that there are no filters, all packets are accepted. </p><p>Subclassed by <a class=\"reference internal\" href=\"../generated/classhi__can_1_1RawCanInterface.html#classhi__can_1_1RawCanInterface\"><span class=\"std std-ref\">hi_can::RawCanInterface</span></a>, <a class=\"reference internal\" href=\"../generated/classhi__can_1_1SoftwareFilteredCanInterface.html#classhi__can_1_1SoftwareFilteredCanInterface\"><span class=\"std std-ref\">hi_can::SoftwareFilteredCanInterface</span></a></p></dd>", "a[href=\"../generated/index.html\"]": "<h1 class=\"tippy-header\" id=\"generated-documentation\" style=\"margin-top: 0;\">Generated Documentation<a class=\"headerlink\" href=\"#generated-documentation\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"../generated/classnetworking_1_1Client.html#_CPPv4N10networking6ClientE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N10networking6ClientE\">\n<span id=\"_CPPv3N10networking6ClientE\"></span><span id=\"_CPPv2N10networking6ClientE\"></span><span id=\"networking::Client\"></span><span class=\"target\" id=\"classnetworking_1_1Client\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">Client</span></span></span><br/></dt><dd><p>A RAII wrapper around network sockets providing a simple interface for sending and receiving data. </p></dd>", "a[href=\"../home/nix-basics.html\"]": "<h1 class=\"tippy-header\" id=\"nix-basics\" style=\"margin-top: 0;\">Nix Basics<a class=\"headerlink\" href=\"#nix-basics\" title=\"Link to this heading\">\u00b6</a></h1><p>As you\u2019ve almost certainly read by now in at least one place, this project is built using <a class=\"reference external\" href=\"https://nixos.org/\">Nix</a>, allowing for fully declarative package and environment setup.\nWhilst this provides massive advantages for reproducibility and ease of environment setup, that doesn\u2019t help if you don\u2019t know how to use it - which this document attempts to remedy.</p>"}
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
