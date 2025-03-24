selector_to_html = {"a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N16BucketController16BucketControllerERKN6rclcpp11NodeOptionsE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N16BucketController16BucketControllerERKN6rclcpp11NodeOptionsE\">\n<span id=\"_CPPv3N16BucketController16BucketControllerERKN6rclcpp11NodeOptionsE\"></span><span id=\"_CPPv2N16BucketController16BucketControllerERKN6rclcpp11NodeOptionsE\"></span><span id=\"BucketController::BucketController__rclcpp::NodeOptionsCR\"></span><span class=\"target\" id=\"classBucketController_1a6ee897e017a144d9989df90d1fb3b287\"></span><span><span class=\"k\"><span class=\"pre\">explicit</span></span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">BucketController</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">NodeOptions</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">&amp;</span></span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N16BucketController16BucketControllerERKN6rclcpp11NodeOptionsE\" title=\"BucketController::BucketController::options (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">options</span></span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">NodeOptions</span></span><span class=\"p\"><span class=\"pre\">(</span></span><span class=\"p\"><span class=\"pre\">)</span></span></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>", "a[href=\"#_CPPv416BucketController\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv416BucketController\">\n<span id=\"_CPPv316BucketController\"></span><span id=\"_CPPv216BucketController\"></span><span id=\"BucketController\"></span><span class=\"target\" id=\"classBucketController\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">BucketController</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">Node</span></span><br/></dt><dd><p>Inheritence diagram for BucketController:</p><p>Collaboration diagram for BucketController:</p></dd>"}
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
