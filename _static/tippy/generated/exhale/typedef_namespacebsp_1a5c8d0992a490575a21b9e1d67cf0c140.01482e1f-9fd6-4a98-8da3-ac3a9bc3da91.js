selector_to_html = {"a[href=\"#_CPPv4N3bsp10pin_pair_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N3bsp10pin_pair_tE\">\n<span id=\"_CPPv3N3bsp10pin_pair_tE\"></span><span id=\"_CPPv2N3bsp10pin_pair_tE\"></span><span id=\"bsp::pin_pair_t\"></span><span class=\"target\" id=\"namespacebsp_1a5c8d0992a490575a21b9e1d67cf0c140\"></span><span class=\"k\"><span class=\"pre\">typedef</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/utility/pair\" title=\"std::pair (C++ standard class)\"><span class=\"n\"><span class=\"pre\">pair</span></span></a><span class=\"p\"><span class=\"pre\">&lt;</span></span><span class=\"n\"><span class=\"pre\">gpio_num_t</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">gpio_num_t</span></span><span class=\"p\"><span class=\"pre\">&gt;</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">bsp</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">pin_pair_t</span></span></span><br/></dt><dd><p>An ordered pair of GPIO pins. </p><p>When used for a CAN bus or UART, first pin is for TX, and the second is RX. When used for a motor driver, first pin is for A, and the second is for B. </p></dd>"}
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
