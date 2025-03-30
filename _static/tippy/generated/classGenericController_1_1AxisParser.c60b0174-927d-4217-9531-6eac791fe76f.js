selector_to_html = {"a[href=\"#_CPPv4N17GenericController10AxisParserE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N17GenericController10AxisParserE\">\n<span id=\"_CPPv3N17GenericController10AxisParserE\"></span><span id=\"_CPPv2N17GenericController10AxisParserE\"></span><span id=\"GenericController::AxisParser\"></span><span class=\"target\" id=\"classGenericController_1_1AxisParser\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">AxisParser</span></span></span><br/></dt><dd></dd>", "a[href=\"classGenericController.html#_CPPv417GenericController\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv417GenericController\">\n<span id=\"_CPPv317GenericController\"></span><span id=\"_CPPv217GenericController\"></span><span id=\"GenericController\"></span><span class=\"target\" id=\"classGenericController\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">GenericController</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">Node</span></span><br/></dt><dd><p>Inheritence diagram for GenericController:</p><p>Collaboration diagram for GenericController:</p></dd>", "a[href=\"#_CPPv4N17GenericController10AxisParser10AxisParserER17GenericControllerRKNSt6stringEb\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N17GenericController10AxisParser10AxisParserER17GenericControllerRKNSt6stringEb\">\n<span id=\"_CPPv3N17GenericController10AxisParser10AxisParserER17GenericControllerRKNSt6stringEb\"></span><span id=\"_CPPv2N17GenericController10AxisParser10AxisParserER17GenericControllerRKNSt6stringEb\"></span><span id=\"GenericController::AxisParser::AxisParser__GenericControllerR.ssCR.b\"></span><span class=\"target\" id=\"classGenericController_1_1AxisParser_1aa7ba1fdb280fcd035109d8beb7929749\"></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">AxisParser</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><a class=\"desctype reference internal\" href=\"classGenericController.html#_CPPv417GenericController\" title=\"GenericController (C++ class) \u2014 Inheritence diagram for GenericController:\"><span class=\"n\"><span class=\"pre\">GenericController</span></span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">&amp;</span></span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N17GenericController10AxisParser10AxisParserER17GenericControllerRKNSt6stringEb\" title=\"GenericController::AxisParser::AxisParser::parent (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">parent</span></span></a>, </span><span class=\"sig-param-decl\"><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/string/basic_string\" title=\"std::string (C++ standard type alias)\"><span class=\"n\"><span class=\"pre\">string</span></span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">&amp;</span></span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N17GenericController10AxisParser10AxisParserER17GenericControllerRKNSt6stringEb\" title=\"GenericController::AxisParser::AxisParser::paramBaseName (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">paramBaseName</span></span></a>, </span><span class=\"sig-param-decl\"><span class=\"kt\"><span class=\"pre\">bool</span></span><span class=\"w\"> </span><a class=\"n sig-param reference internal\" href=\"#_CPPv4N17GenericController10AxisParser10AxisParserER17GenericControllerRKNSt6stringEb\" title=\"GenericController::AxisParser::AxisParser::hasEnable (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">hasEnable</span></span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">false</span></span></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N17GenericController10AxisParser8getValueEv\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N17GenericController10AxisParser8getValueEv\">\n<span id=\"_CPPv3N17GenericController10AxisParser8getValueEv\"></span><span id=\"_CPPv2N17GenericController10AxisParser8getValueEv\"></span><span id=\"GenericController::AxisParser::getValue\"></span><span class=\"target\" id=\"classGenericController_1_1AxisParser_1adf287eb9d027b4440c5188d3f1adf8eb\"></span><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">getValue</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>"}
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
