selector_to_html = {"a[href=\"#_CPPv49crc8MaximPK7uint8_tK6size_t\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv49crc8MaximPK7uint8_tK6size_t\">\n<span id=\"_CPPv39crc8MaximPK7uint8_tK6size_t\"></span><span id=\"_CPPv29crc8MaximPK7uint8_tK6size_t\"></span><span id=\"crc8Maxim__uint8_tCP.sC\"></span><span class=\"target\" id=\"crc_8h_1a8fe705b923a80447e88e782a1be9edcd\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">crc8Maxim</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">*</span></span><a class=\"n sig-param reference internal\" href=\"#_CPPv49crc8MaximPK7uint8_tK6size_t\" title=\"crc8Maxim::data (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">data</span></span></a>, </span><span class=\"sig-param-decl\"><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/size_t\" title=\"size_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">size_t</span></span></a><span class=\"w\"> </span><a class=\"n sig-param reference internal\" href=\"#_CPPv49crc8MaximPK7uint8_tK6size_t\" title=\"crc8Maxim::len (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">len</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>"}
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
