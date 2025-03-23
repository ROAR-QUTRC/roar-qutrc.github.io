selector_to_html = {"a[href=\"#_CPPv4N6hi_can10parameters5drive4vesc10set_duty_tE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can10parameters5drive4vesc10set_duty_tE\">\n<span id=\"_CPPv3N6hi_can10parameters5drive4vesc10set_duty_tE\"></span><span id=\"_CPPv2N6hi_can10parameters5drive4vesc10set_duty_tE\"></span><span id=\"hi_can::parameters::drive::vesc::set_duty_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1drive_1_1vesc_1_1set__duty__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">set_duty_t</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">parameters</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference internal\" href=\"structhi__can_1_1parameters_1_1scaled__int32__t.html#_CPPv4I_dEN6hi_can10parameters14scaled_int32_tE\" title=\"hi_can::parameters::scaled_int32_t (C++ class) \u2014 Inheritence diagram for hi_can::parameters::scaled_int32_t:\"><span class=\"n\"><span class=\"pre\">scaled_int32_t</span></span></a><span class=\"p\"><span class=\"pre\">&lt;</span></span><span class=\"m\"><span class=\"pre\">100000.0</span></span><span class=\"p\"><span class=\"pre\">&gt;</span></span><br/></dt><dd><p>Inheritence diagram for hi_can::parameters::drive::vesc::set_duty_t:</p><p>Collaboration diagram for hi_can::parameters::drive::vesc::set_duty_t:</p></dd>", "a[href=\"structhi__can_1_1parameters_1_1scaled__int32__t.html#_CPPv4I_dEN6hi_can10parameters14scaled_int32_tE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4I_dEN6hi_can10parameters14scaled_int32_tE\">\n<span id=\"_CPPv3I_dEN6hi_can10parameters14scaled_int32_tE\"></span><span id=\"_CPPv2I_dEN6hi_can10parameters14scaled_int32_tE\"></span><span class=\"k\"><span class=\"pre\">template</span></span><span class=\"p\"><span class=\"pre\">&lt;</span></span><span><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><span class=\"sig-name descname sig-name-nonprimary\"><a class=\"n reference internal\" href=\"#_CPPv4I_dEN6hi_can10parameters14scaled_int32_tE\" title=\"hi_can::parameters::scaled_int32_t::scalingFactor (C++ non-type template parameter)\"><span class=\"n\"><span class=\"pre\">scalingFactor</span></span></a></span></span><span class=\"p\"><span class=\"pre\">&gt;</span></span><br/><span class=\"target\" id=\"structhi__can_1_1parameters_1_1scaled__int32__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">scaled_int32_t</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">parameters</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference internal\" href=\"classhi__can_1_1parameters_1_1BidirectionalSerializable.html#_CPPv4N6hi_can10parameters25BidirectionalSerializableE\" title=\"hi_can::parameters::BidirectionalSerializable (C++ class) \u2014 Inheritence diagram for hi_can::parameters::BidirectionalSerializable:\"><span class=\"n\"><span class=\"pre\">BidirectionalSerializable</span></span></a><br/></dt><dd><p>Inheritence diagram for hi_can::parameters::scaled_int32_t:</p><p>Collaboration diagram for hi_can::parameters::scaled_int32_t:</p></dd>"}
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
