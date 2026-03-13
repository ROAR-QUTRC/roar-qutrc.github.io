selector_to_html = {"a[href=\"hardware/i2c_imu.html\"]": "<h1 class=\"tippy-header\" id=\"i2c-imu\" style=\"margin-top: 0;\">I2C IMU<a class=\"headerlink\" href=\"#i2c-imu\" title=\"Link to this heading\">\u00b6</a></h1><p>The Perseus V2 system includes an I2C IMU (Inertial Measurement Unit) driver that provides orientation, angular velocity, and linear acceleration data through ROS2.</p>", "a[href=\"hardware/network.html\"]": "<h1 class=\"tippy-header\" id=\"network\" style=\"margin-top: 0;\">Network<a class=\"headerlink\" href=\"#network\" title=\"Link to this heading\">\u00b6</a></h1><p>Perseus assumes that it will connect to a wifi network with SSID: \u201cQUTRC-ROAR-LOCAL\u201d.\nAll processes and nodes running should be able to operate via a network connection sharing a single 2.4 GHz wifi connection with a 20 MHz channel width.\nWhilst the rules allow for 40 Mhz bonding interference is possible.\nAssuming 20MHz means 802.11g which is 54 Mbps.\nThis equates to a maximum usage network connection of 6.75 MBps.\nIf bonding is used then 802.11n allows for up to 600 Mbps (this would require 4xMIMO) being 75 MBps.</p>", "a[href=\"hardware/assembly.html\"]": "<h1 class=\"tippy-header\" id=\"perseus-assembly\" style=\"margin-top: 0;\">Perseus Assembly<a class=\"headerlink\" href=\"#perseus-assembly\" title=\"Link to this heading\">\u00b6</a></h1><p>This page contains instructions on how to assemble hardware systems on Persues. All systems have been designed so that the disassembly instructions are the same as the assembly instructions, but in reverse.</p><p>Systems in recommended order of assembly:</p>"}
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
