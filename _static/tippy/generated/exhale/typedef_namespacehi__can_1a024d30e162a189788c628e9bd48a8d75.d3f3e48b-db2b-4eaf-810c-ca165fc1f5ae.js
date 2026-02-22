selector_to_html = {"a[href=\"#_CPPv4N6hi_can17packet_callback_tE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N6hi_can17packet_callback_tE\">\n<span id=\"_CPPv3N6hi_can17packet_callback_tE\"></span><span id=\"_CPPv2N6hi_can17packet_callback_tE\"></span><span id=\"hi_can::packet_callback_t\"></span><span class=\"target\" id=\"namespacehi__can_1a024d30e162a189788c628e9bd48a8d75\"></span><span class=\"k\"><span class=\"pre\">typedef</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/utility/functional/function\" title=\"std::function (C++11 standard class)\"><span class=\"n\"><span class=\"pre\">function</span></span></a><span class=\"p\"><span class=\"pre\">&lt;</span></span><span class=\"kt\"><span class=\"pre\">void</span></span><span class=\"p\"><span class=\"pre\">(</span></span><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference internal\" href=\"classhi__can_1_1Packet.html#_CPPv4N6hi_can6PacketE\" title=\"hi_can::Packet (C++ class) \u2014 A CAN packet containing an address and data.\"><span class=\"n\"><span class=\"pre\">Packet</span></span></a><span class=\"p\"><span class=\"pre\">&amp;</span></span><span class=\"p\"><span class=\"pre\">)</span></span><span class=\"p\"><span class=\"pre\">&gt;</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">packet_callback_t</span></span></span><br/></dt><dd><p>A callback function which takes a <a class=\"reference internal\" href=\"classhi__can_1_1Packet.html#classhi__can_1_1Packet\"><span class=\"std std-ref\">Packet</span></a> as an argument and returns nothing. </p></dd>", "a[href=\"classhi__can_1_1Packet.html#_CPPv4N6hi_can6PacketE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can6PacketE\">\n<span id=\"_CPPv3N6hi_can6PacketE\"></span><span id=\"_CPPv2N6hi_can6PacketE\"></span><span id=\"hi_can::Packet\"></span><span class=\"target\" id=\"classhi__can_1_1Packet\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">Packet</span></span></span><br/></dt><dd><p>A CAN packet containing an address and data. </p></dd>"}
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
