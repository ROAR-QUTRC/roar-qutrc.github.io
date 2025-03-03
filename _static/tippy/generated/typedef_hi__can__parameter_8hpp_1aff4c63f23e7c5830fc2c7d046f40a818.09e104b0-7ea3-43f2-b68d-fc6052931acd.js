selector_to_html = {"a[href=\"#_CPPv4N6hi_can10parameters6legacy5drive6motors8status_tE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5drive6motors8status_tE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5drive6motors8status_tE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5drive6motors8status_tE\"></span><span id=\"hi_can::parameters::legacy::drive::motors::status_t\"></span><span class=\"target\" id=\"hi__can__parameter_8hpp_1aff4c63f23e7c5830fc2c7d046f40a818\"></span><span class=\"k\"><span class=\"pre\">typedef</span></span><span class=\"w\"> </span><a class=\"desctype reference internal\" href=\"classhi__can_1_1parameters_1_1SimpleSerializable.html#_CPPv4I0EN6hi_can10parameters18SimpleSerializableE\" title=\"hi_can::parameters::SimpleSerializable (C++ class) \u2014 Inheritence diagram for hi_can::parameters::SimpleSerializable:\"><span class=\"n\"><span class=\"pre\">SimpleSerializable</span></span></a><span class=\"p\"><span class=\"pre\">&lt;</span></span><a class=\"desctype reference internal\" href=\"structhi__can_1_1parameters_1_1legacy_1_1drive_1_1motors_1_1__status__t.html#_CPPv4N6hi_can10parameters6legacy5drive6motors9_status_tE\" title=\"hi_can::parameters::legacy::drive::motors::_status_t (C++ class) \u2014 Public Members    bool ready = false      int16_t realSpeed = 0      int16_t realCurrent = 0\"><span class=\"n\"><span class=\"pre\">_status_t</span></span></a><span class=\"p\"><span class=\"pre\">&gt;</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">parameters</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">legacy</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">drive</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">motors</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">status_t</span></span></span><br/></dt><dd></dd>", "a[href=\"structhi__can_1_1parameters_1_1legacy_1_1drive_1_1motors_1_1__status__t.html#_CPPv4N6hi_can10parameters6legacy5drive6motors9_status_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10parameters6legacy5drive6motors9_status_tE\">\n<span id=\"_CPPv3N6hi_can10parameters6legacy5drive6motors9_status_tE\"></span><span id=\"_CPPv2N6hi_can10parameters6legacy5drive6motors9_status_tE\"></span><span id=\"hi_can::parameters::legacy::drive::motors::_status_t\"></span><span class=\"target\" id=\"structhi__can_1_1parameters_1_1legacy_1_1drive_1_1motors_1_1__status__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">_status_t</span></span></span><br/></dt><dd></dd>", "a[href=\"classhi__can_1_1parameters_1_1SimpleSerializable.html#_CPPv4I0EN6hi_can10parameters18SimpleSerializableE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4I0EN6hi_can10parameters18SimpleSerializableE\">\n<span id=\"_CPPv3I0EN6hi_can10parameters18SimpleSerializableE\"></span><span id=\"_CPPv2I0EN6hi_can10parameters18SimpleSerializableE\"></span><span class=\"k\"><span class=\"pre\">template</span></span><span class=\"p\"><span class=\"pre\">&lt;</span></span><span><span class=\"k\"><span class=\"pre\">typename</span></span><span class=\"w\"> </span><span class=\"sig-name descname sig-name-nonprimary\"><a class=\"desctype n reference internal\" href=\"#_CPPv4I0EN6hi_can10parameters18SimpleSerializableE\" title=\"hi_can::parameters::SimpleSerializable::T (C++ type template parameter)\"><span class=\"n\"><span class=\"pre\">T</span></span></a></span></span><span class=\"p\"><span class=\"pre\">&gt;</span></span><br/><span class=\"target\" id=\"classhi__can_1_1parameters_1_1SimpleSerializable\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">SimpleSerializable</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">parameters</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference internal\" href=\"classhi__can_1_1parameters_1_1BidirectionalSerializable.html#_CPPv4N6hi_can10parameters25BidirectionalSerializableE\" title=\"hi_can::parameters::BidirectionalSerializable (C++ class) \u2014 Inheritence diagram for hi_can::parameters::BidirectionalSerializable:\"><span class=\"n\"><span class=\"pre\">BidirectionalSerializable</span></span></a><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><a class=\"desctype reference internal\" href=\"#_CPPv4I0EN6hi_can10parameters18SimpleSerializableE\" title=\"hi_can::parameters::SimpleSerializable::T (C++ type template parameter)\"><span class=\"n\"><span class=\"pre\">T</span></span></a><br/></dt><dd><p>Inheritence diagram for hi_can::parameters::SimpleSerializable:</p><p>Collaboration diagram for hi_can::parameters::SimpleSerializable:</p></dd>"}
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
