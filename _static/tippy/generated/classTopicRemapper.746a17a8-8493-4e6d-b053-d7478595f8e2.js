selector_to_html = {"a[href=\"#_CPPv4N13TopicRemapper13TopicRemapperEv\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N13TopicRemapper13TopicRemapperEv\">\n<span id=\"_CPPv3N13TopicRemapper13TopicRemapperEv\"></span><span id=\"_CPPv2N13TopicRemapper13TopicRemapperEv\"></span><span id=\"TopicRemapper::TopicRemapper\"></span><span class=\"target\" id=\"classTopicRemapper_1ad463d0a32c8515e0bb34b65432a7324c\"></span><span class=\"k\"><span class=\"pre\">inline</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">TopicRemapper</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>", "a[href=\"#_CPPv413TopicRemapper\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv413TopicRemapper\">\n<span id=\"_CPPv313TopicRemapper\"></span><span id=\"_CPPv213TopicRemapper\"></span><span id=\"TopicRemapper\"></span><span class=\"target\" id=\"classTopicRemapper\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">TopicRemapper</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">Node</span></span><br/></dt><dd><p>Inheritence diagram for TopicRemapper:</p><p>Collaboration diagram for TopicRemapper:</p></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>"}
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
