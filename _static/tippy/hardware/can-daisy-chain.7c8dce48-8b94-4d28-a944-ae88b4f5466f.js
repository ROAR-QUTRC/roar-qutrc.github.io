selector_to_html = {"a[href=\"../systems/can-bus.html#term-Loop\"]": "<dt id=\"term-Loop\">Loop</dt><dd><p>A loop of the <a class=\"reference internal\" href=\"#term-CAN-bus\" title=\"CAN bus (glossary term)\"><span class=\"xref std std-term\">CAN bus</span></a> (going out and returning) run \u201coutside\u201d its normal path to a <a class=\"reference internal\" href=\"#term-Node\"><span class=\"xref std std-term\">node</span></a> which would otherwise require a long branch.</p></dd>", "a[href=\"../systems/can-bus.html#term-Branch\"]": "<dt id=\"term-Branch\">Branch</dt><dd><p>A short conductor pair (CAN high, CAN low) coming off the <a class=\"reference internal\" href=\"#term-CAN-bus\" title=\"CAN bus (glossary term)\"><span class=\"xref std std-term\">CAN bus</span></a> to connect a device. Must be shorter than 30cm.</p></dd>"}
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
