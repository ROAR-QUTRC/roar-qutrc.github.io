selector_to_html = {"a[href=\"#_CPPv4N3bsp10CAN_TX_PINE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N3bsp10CAN_TX_PINE\">\n<span id=\"_CPPv3N3bsp10CAN_TX_PINE\"></span><span id=\"_CPPv2N3bsp10CAN_TX_PINE\"></span><span id=\"bsp::CAN_TX_PIN__gpio_num_t\"></span><span class=\"target\" id=\"namespacebsp_1a188db7ec8187679d43a4a1fd69f8794b\"></span><span class=\"n\"><span class=\"pre\">gpio_num_t</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">bsp</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CAN_TX_PIN</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">GPIO_NUM_0</span></span><br/></dt><dd></dd>"}
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
