selector_to_html = {"a[href=\"#_CPPv4N3bsp7I2C_SDAE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N3bsp7I2C_SDAE\">\n<span id=\"_CPPv3N3bsp7I2C_SDAE\"></span><span id=\"_CPPv2N3bsp7I2C_SDAE\"></span><span id=\"bsp::I2C_SDA__gpio_num_t\"></span><span class=\"target\" id=\"namespacebsp_1addb405bb24f8ad8b5fc4a36893c10c4a\"></span><span class=\"n\"><span class=\"pre\">gpio_num_t</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">bsp</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">I2C_SDA</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">GPIO_NUM_35</span></span><br/></dt><dd></dd>"}
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
