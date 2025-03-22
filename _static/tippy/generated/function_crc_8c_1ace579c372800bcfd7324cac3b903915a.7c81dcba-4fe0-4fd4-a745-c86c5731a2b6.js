selector_to_html = {"a[href=\"#_CPPv48crc16UsbPK7uint8_tK6size_t\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv48crc16UsbPK7uint8_tK6size_t\">\n<span id=\"_CPPv38crc16UsbPK7uint8_tK6size_t\"></span><span id=\"_CPPv28crc16UsbPK7uint8_tK6size_t\"></span><span id=\"crc16Usb__uint8_tCP.sC\"></span><span class=\"target\" id=\"crc_8h_1ace579c372800bcfd7324cac3b903915a\"></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint16_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint16_t</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">crc16Usb</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/integer\" title=\"uint8_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">uint8_t</span></span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">*</span></span><a class=\"n sig-param reference internal\" href=\"#_CPPv48crc16UsbPK7uint8_tK6size_t\" title=\"crc16Usb::data (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">data</span></span></a>, </span><span class=\"sig-param-decl\"><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/c/types/size_t\" title=\"size_t (C standard type alias)\"><span class=\"n\"><span class=\"pre\">size_t</span></span></a><span class=\"w\"> </span><a class=\"n sig-param reference internal\" href=\"#_CPPv48crc16UsbPK7uint8_tK6size_t\" title=\"crc16Usb::len (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">len</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>"}
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
