selector_to_html = {"a[href=\"#_CPPv4N14imu_processors5absltEdd\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N14imu_processors5absltEdd\">\n<span id=\"_CPPv3N14imu_processors5absltEdd\"></span><span id=\"_CPPv2N14imu_processors5absltEdd\"></span><span id=\"imu_processors::abslt__double.double\"></span><span class=\"target\" id=\"bias__estimator__component_8cpp_1a1e86b7ffc84e571fe767c847012ff0dd\"></span><span class=\"k\"><span class=\"pre\">static</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">inline</span></span><span class=\"w\"> </span><span class=\"kt\"><span class=\"pre\">bool</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">imu_processors</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">abslt</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N14imu_processors5absltEdd\" title=\"imu_processors::abslt::v (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">v</span></span></a>, </span><span class=\"sig-param-decl\"><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N14imu_processors5absltEdd\" title=\"imu_processors::abslt::the (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">the</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>"}
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
