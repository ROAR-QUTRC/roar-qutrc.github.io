selector_to_html = {"a[href=\"#_CPPv4N14imu_processors11BiasRemover11BiasRemoverERKN6rclcpp11NodeOptionsE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N14imu_processors11BiasRemover11BiasRemoverERKN6rclcpp11NodeOptionsE\">\n<span id=\"_CPPv3N14imu_processors11BiasRemover11BiasRemoverERKN6rclcpp11NodeOptionsE\"></span><span id=\"_CPPv2N14imu_processors11BiasRemover11BiasRemoverERKN6rclcpp11NodeOptionsE\"></span><span id=\"imu_processors::BiasRemover::BiasRemover__rclcpp::NodeOptionsCR\"></span><span class=\"target\" id=\"classimu__processors_1_1BiasRemover_1a5a4259442caa6dca004cdf16a8e528ed\"></span><span class=\"k\"><span class=\"pre\">inline</span></span><span class=\"w\"> </span><span><span class=\"k\"><span class=\"pre\">explicit</span></span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">BiasRemover</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">NodeOptions</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">&amp;</span></span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N14imu_processors11BiasRemover11BiasRemoverERKN6rclcpp11NodeOptionsE\" title=\"imu_processors::BiasRemover::BiasRemover::options (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">options</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N14imu_processors11BiasRemoverE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N14imu_processors11BiasRemoverE\">\n<span id=\"_CPPv3N14imu_processors11BiasRemoverE\"></span><span id=\"_CPPv2N14imu_processors11BiasRemoverE\"></span><span id=\"imu_processors::BiasRemover\"></span><span class=\"target\" id=\"classimu__processors_1_1BiasRemover\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">BiasRemover</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">Node</span></span><br/></dt><dd><p>Inheritance diagram for imu_processors::BiasRemover:</p><p>Collaboration diagram for imu_processors::BiasRemover:</p></dd>"}
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
