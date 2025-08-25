selector_to_html = {"a[href=\"#_CPPv4N9RcbDriver7cleanupEv\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N9RcbDriver7cleanupEv\">\n<span id=\"_CPPv3N9RcbDriver7cleanupEv\"></span><span id=\"_CPPv2N9RcbDriver7cleanupEv\"></span><span id=\"RcbDriver::cleanup\"></span><span class=\"target\" id=\"classRcbDriver_1a1a60b4d411b38c31a99efee27bcf59ca\"></span><span class=\"kt\"><span class=\"pre\">void</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">cleanup</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv49RcbDriver\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv49RcbDriver\">\n<span id=\"_CPPv39RcbDriver\"></span><span id=\"_CPPv29RcbDriver\"></span><span id=\"RcbDriver\"></span><span class=\"target\" id=\"classRcbDriver\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">RcbDriver</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">Node</span></span><br/></dt><dd><p>Inheritence diagram for RcbDriver:</p><p>Collaboration diagram for RcbDriver:</p></dd>", "a[href=\"#_CPPv4N9RcbDriver9RcbDriverERKN6rclcpp11NodeOptionsE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N9RcbDriver9RcbDriverERKN6rclcpp11NodeOptionsE\">\n<span id=\"_CPPv3N9RcbDriver9RcbDriverERKN6rclcpp11NodeOptionsE\"></span><span id=\"_CPPv2N9RcbDriver9RcbDriverERKN6rclcpp11NodeOptionsE\"></span><span id=\"RcbDriver::RcbDriver__rclcpp::NodeOptionsCR\"></span><span class=\"target\" id=\"classRcbDriver_1a484ebf989cb04d7378aa6a3444c87cb8\"></span><span><span class=\"k\"><span class=\"pre\">explicit</span></span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">RcbDriver</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">NodeOptions</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">&amp;</span></span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N9RcbDriver9RcbDriverERKN6rclcpp11NodeOptionsE\" title=\"RcbDriver::RcbDriver::options (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">options</span></span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">NodeOptions</span></span><span class=\"p\"><span class=\"pre\">(</span></span><span class=\"p\"><span class=\"pre\">)</span></span></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>"}
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
