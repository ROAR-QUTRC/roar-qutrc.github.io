selector_to_html = {"a[href=\"program_listing_file_software_ros_ws_src_perseus_autonomy_bridge_src_nav2_waypoints_bridge.cpp.html\"]": "<h1 class=\"tippy-header\" id=\"program-listing-for-file-nav2-waypoints-bridge-cpp\" style=\"margin-top: 0;\"><span id=\"program-listing-file-software-ros-ws-src-perseus-autonomy-bridge-src-nav2-waypoints-bridge-cpp\"></span>Program Listing for File nav2_waypoints_bridge.cpp<a class=\"headerlink\" href=\"#program-listing-for-file-nav2-waypoints-bridge-cpp\" title=\"Link to this heading\">\u00b6</a></h1><p>\u21b0 <a class=\"reference internal\" href=\"file_software_ros_ws_src_perseus_autonomy_bridge_src_nav2_waypoints_bridge.cpp.html#file-software-ros-ws-src-perseus-autonomy-bridge-src-nav2-waypoints-bridge-cpp\"><span class=\"std std-ref\">Return to documentation for file</span></a> (<code class=\"docutils literal notranslate\"><span class=\"pre\">software/ros_ws/src/perseus_autonomy_bridge/src/nav2_waypoints_bridge.cpp</span></code>)</p>"}
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
