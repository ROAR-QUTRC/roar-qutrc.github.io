selector_to_html = {"a[href=\"#_CPPv4N14imu_processors4ewmaEddd\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N14imu_processors4ewmaEddd\">\n<span id=\"_CPPv3N14imu_processors4ewmaEddd\"></span><span id=\"_CPPv2N14imu_processors4ewmaEddd\"></span><span id=\"imu_processors::ewma__double.double.double\"></span><span class=\"target\" id=\"bias__estimator__component_8cpp_1a441d2e7c76f3d7c94f16ccd8d63b007c\"></span><span class=\"k\"><span class=\"pre\">static</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">inline</span></span><span class=\"w\"> </span><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">imu_processors</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">ewma</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N14imu_processors4ewmaEddd\" title=\"imu_processors::ewma::alpha (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">alpha</span></span></a>, </span><span class=\"sig-param-decl\"><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N14imu_processors4ewmaEddd\" title=\"imu_processors::ewma::avg (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">avg</span></span></a>, </span><span class=\"sig-param-decl\"><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N14imu_processors4ewmaEddd\" title=\"imu_processors::ewma::meas (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">meas</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>"}
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
