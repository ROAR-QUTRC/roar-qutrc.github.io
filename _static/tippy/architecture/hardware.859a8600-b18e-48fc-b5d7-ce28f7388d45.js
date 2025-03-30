selector_to_html = {"a[href=\"hardware/network.html\"]": "<h1 class=\"tippy-header\" id=\"network\" style=\"margin-top: 0;\">Network<a class=\"headerlink\" href=\"#network\" title=\"Link to this heading\">\u00b6</a></h1><p>Perseus assumes that it will connect to a wifi network with SSID: \u201cQUTRC-ROAR\u201d.</p><p>All processes and nodes running should be able to operate via a network connection sharing a single 2.4GHz wifi connection with a 20MHz channel width.</p>"}
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
