selector_to_html = {"a[href=\"#_CPPv416CmdVelToOdomNode\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv416CmdVelToOdomNode\">\n<span id=\"_CPPv316CmdVelToOdomNode\"></span><span id=\"_CPPv216CmdVelToOdomNode\"></span><span id=\"CmdVelToOdomNode\"></span><span class=\"target\" id=\"classCmdVelToOdomNode\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CmdVelToOdomNode</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">rclcpp</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">Node</span></span><br/></dt><dd><p>Inheritence diagram for CmdVelToOdomNode:</p><p>Collaboration diagram for CmdVelToOdomNode:</p></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N16CmdVelToOdomNode16CmdVelToOdomNodeEv\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N16CmdVelToOdomNode16CmdVelToOdomNodeEv\">\n<span id=\"_CPPv3N16CmdVelToOdomNode16CmdVelToOdomNodeEv\"></span><span id=\"_CPPv2N16CmdVelToOdomNode16CmdVelToOdomNodeEv\"></span><span id=\"CmdVelToOdomNode::CmdVelToOdomNode\"></span><span class=\"target\" id=\"classCmdVelToOdomNode_1a415f850d0595c61543703af0132a81a2\"></span><span class=\"k\"><span class=\"pre\">inline</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CmdVelToOdomNode</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>"}
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
