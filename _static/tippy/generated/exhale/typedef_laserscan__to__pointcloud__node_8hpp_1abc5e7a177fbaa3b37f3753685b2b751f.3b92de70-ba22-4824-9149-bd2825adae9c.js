selector_to_html = {"a[href=\"#_CPPv4N23pointcloud_to_laserscan13MessageFilterE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N23pointcloud_to_laserscan13MessageFilterE\">\n<span id=\"_CPPv3N23pointcloud_to_laserscan13MessageFilterE\"></span><span id=\"_CPPv2N23pointcloud_to_laserscan13MessageFilterE\"></span><span id=\"pointcloud_to_laserscan::MessageFilter\"></span><span class=\"target\" id=\"laserscan__to__pointcloud__node_8hpp_1abc5e7a177fbaa3b37f3753685b2b751f\"></span><span class=\"k\"><span class=\"pre\">typedef</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">tf2_ros</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">MessageFilter</span></span><span class=\"p\"><span class=\"pre\">&lt;</span></span><span class=\"n\"><span class=\"pre\">sensor_msgs</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">msg</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">LaserScan</span></span><span class=\"p\"><span class=\"pre\">&gt;</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">pointcloud_to_laserscan</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">MessageFilter</span></span></span><br/></dt><dd></dd>"}
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
