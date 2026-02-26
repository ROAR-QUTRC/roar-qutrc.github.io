selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing7compute7primary6device9BIG_BRAINE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing7compute7primary6device9BIG_BRAINE\">\n<span id=\"_CPPv3N6hi_can10addressing7compute7primary6device9BIG_BRAINE\"></span><span id=\"_CPPv2N6hi_can10addressing7compute7primary6device9BIG_BRAINE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1compute_1_1primary_1ad9778028f48093137dc9c9e928101ce8a9ef700d49a1febc5915fae71c78cb94e\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">BIG_BRAIN</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing7compute7primary6deviceE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing7compute7primary6deviceE\">\n<span id=\"_CPPv3N6hi_can10addressing7compute7primary6deviceE\"></span><span id=\"_CPPv2N6hi_can10addressing7compute7primary6deviceE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1compute_1_1primary_1ad9778028f48093137dc9c9e928101ce8\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">compute</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">primary</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">device</span></span></span><br/></dt><dd><p>List of primary compute device IDs. </p><p><em>Values:</em></p></dd>", "a[href=\"#_CPPv4N6hi_can10addressing7compute7primary6device12MEDIUM_BRAINE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing7compute7primary6device12MEDIUM_BRAINE\">\n<span id=\"_CPPv3N6hi_can10addressing7compute7primary6device12MEDIUM_BRAINE\"></span><span id=\"_CPPv2N6hi_can10addressing7compute7primary6device12MEDIUM_BRAINE\"></span><span class=\"target\" id=\"namespacehi__can_1_1addressing_1_1compute_1_1primary_1ad9778028f48093137dc9c9e928101ce8a1060c9bdd9b45c0e99b08bc7bc5ca35f\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">MEDIUM_BRAIN</span></span></span><br/></dt><dd></dd>"}
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
