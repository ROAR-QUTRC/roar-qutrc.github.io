selector_to_html = {"a[href=\"../home/getting-started.html\"]": "<h1 class=\"tippy-header\" id=\"getting-started\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">\u00b6</a></h1><p>This project is built using <a class=\"reference external\" href=\"https://nixos.org/\">Nix</a>, which makes getting started quite easy - all you have to do is install Nix and <code class=\"docutils literal notranslate\"><span class=\"pre\">direnv</span></code>, and they take care of the rest.\nWhilst this page will get you started, it is strongly recommended that you read through <a class=\"reference internal\" href=\"../home/nix-basics.html\"><span class=\"std std-doc\">Nix Basics</span></a> after reading through this document so you understand how to use the tooling.</p>", "a[href=\"../systems/can-bus.html#term-VCAN\"]": "<dt id=\"term-VCAN\">VCAN</dt><dd><p>Virtual CAN bus on Linux. Very useful for testing CAN software.</p></dd>", "a[href=\"hi-can/01-hi-can-basic.html\"]": "<h1 class=\"tippy-header\" id=\"basic-hi-can-usage\" style=\"margin-top: 0;\">Basic Hi-CAN Usage<a class=\"headerlink\" href=\"#basic-hi-can-usage\" title=\"Link to this heading\">\u00b6</a></h1><p>In this tutorial, you will learn the basics of transmitting and receiving data with Hi-CAN.</p>", "a[href=\"../systems/can-bus.html\"]": "<h1 class=\"tippy-header\" id=\"can-bus\" style=\"margin-top: 0;\">CAN Bus<a class=\"headerlink\" href=\"#can-bus\" title=\"Link to this heading\">\u00b6</a></h1><p>On Perseus, most embedded systems communicate over the <a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/CAN_bus\">CAN bus</a>.\nTo ensure that systems on Perseus work as reliably and with as little hassle as possible, we have created hardware and software standards to which CAN devices should be designed.</p><p>Depending on what you\u2019re doing, you may only need to read specific sections of this document.\nIf you\u2019re doing hardware design or physically connecting the CAN bus, the <a class=\"reference internal\" href=\"#hardware\"><span class=\"std std-ref\">Hardware</span></a> section will obviously be most relevant to you.\nAlternatively, if you\u2019re writing software, you\u2019ll probably find the <a class=\"reference internal\" href=\"#hi-can-usage\"><span class=\"std std-ref\">Hi-CAN Usage</span></a> section most useful, with <a class=\"reference internal\" href=\"#hi-can-architecture\"><span class=\"std std-ref\">Hi-CAN Architecture</span></a> for necessary background information and terminology.\nFinally, reading through the whole <a class=\"reference internal\" href=\"#protocol\"><span class=\"std std-ref\">Protocol</span></a> section will probably be helpful when debugging issues with the bus, and will likely improve your understanding of the Hi-CAN library\u2019s usage.</p>"}
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
