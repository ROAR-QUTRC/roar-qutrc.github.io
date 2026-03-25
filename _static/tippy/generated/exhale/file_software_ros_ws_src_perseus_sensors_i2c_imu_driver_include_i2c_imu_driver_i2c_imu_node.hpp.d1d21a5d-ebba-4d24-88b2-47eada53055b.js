selector_to_html = {"a[href=\"program_listing_file_software_ros_ws_src_perseus_sensors_i2c_imu_driver_include_i2c_imu_driver_i2c_imu_node.hpp.html\"]": "<h1 class=\"tippy-header\" id=\"program-listing-for-file-i2c-imu-node-hpp\" style=\"margin-top: 0;\"><span id=\"program-listing-file-software-ros-ws-src-perseus-sensors-i2c-imu-driver-include-i2c-imu-driver-i2c-imu-node-hpp\"></span>Program Listing for File i2c_imu_node.hpp<a class=\"headerlink\" href=\"#program-listing-for-file-i2c-imu-node-hpp\" title=\"Link to this heading\">\u00b6</a></h1><p>\u21b0 <a class=\"reference internal\" href=\"file_software_ros_ws_src_perseus_sensors_i2c_imu_driver_include_i2c_imu_driver_i2c_imu_node.hpp.html#file-software-ros-ws-src-perseus-sensors-i2c-imu-driver-include-i2c-imu-driver-i2c-imu-node-hpp\"><span class=\"std std-ref\">Return to documentation for file</span></a> (<code class=\"docutils literal notranslate\"><span class=\"pre\">software/ros_ws/src/perseus_sensors/i2c_imu_driver/include/i2c_imu_driver/i2c_imu_node.hpp</span></code>)</p>"}
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
