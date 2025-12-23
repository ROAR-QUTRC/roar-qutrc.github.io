selector_to_html = {"a[href=\"#_CPPv4N9M2M2Lidar15sensor_config_t9min_rangeE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N9M2M2Lidar15sensor_config_t9min_rangeE\">\n<span id=\"_CPPv3N9M2M2Lidar15sensor_config_t9min_rangeE\"></span><span id=\"_CPPv2N9M2M2Lidar15sensor_config_t9min_rangeE\"></span><span id=\"M2M2Lidar::sensor_config_t::min_range__double\"></span><span class=\"target\" id=\"structM2M2Lidar_1_1sensor__config__t_1af1611a1a609497eea4b4568e6d907835\"></span><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">min_range</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N9M2M2Lidar15sensor_config_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N9M2M2Lidar15sensor_config_tE\">\n<span id=\"_CPPv3N9M2M2Lidar15sensor_config_tE\"></span><span id=\"_CPPv2N9M2M2Lidar15sensor_config_tE\"></span><span id=\"M2M2Lidar::sensor_config_t\"></span><span class=\"target\" id=\"structM2M2Lidar_1_1sensor__config__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">sensor_config_t</span></span></span><br/></dt><dd><p>Configuration parameters for the M2M2 LIDAR sensor. </p></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N9M2M2Lidar15sensor_config_t9max_rangeE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N9M2M2Lidar15sensor_config_t9max_rangeE\">\n<span id=\"_CPPv3N9M2M2Lidar15sensor_config_t9max_rangeE\"></span><span id=\"_CPPv2N9M2M2Lidar15sensor_config_t9max_rangeE\"></span><span id=\"M2M2Lidar::sensor_config_t::max_range__double\"></span><span class=\"target\" id=\"structM2M2Lidar_1_1sensor__config__t_1a86a99a29acca028d428667a1751b0b49\"></span><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">max_range</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N9M2M2Lidar15sensor_config_t14scan_frequencyE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N9M2M2Lidar15sensor_config_t14scan_frequencyE\">\n<span id=\"_CPPv3N9M2M2Lidar15sensor_config_t14scan_frequencyE\"></span><span id=\"_CPPv2N9M2M2Lidar15sensor_config_t14scan_frequencyE\"></span><span id=\"M2M2Lidar::sensor_config_t::scan_frequency__double\"></span><span class=\"target\" id=\"structM2M2Lidar_1_1sensor__config__t_1ab7bef0b0ddf2153071329d4ac5884268\"></span><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">scan_frequency</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N9M2M2Lidar15sensor_config_t18angular_resolutionE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N9M2M2Lidar15sensor_config_t18angular_resolutionE\">\n<span id=\"_CPPv3N9M2M2Lidar15sensor_config_t18angular_resolutionE\"></span><span id=\"_CPPv2N9M2M2Lidar15sensor_config_t18angular_resolutionE\"></span><span id=\"M2M2Lidar::sensor_config_t::angular_resolution__double\"></span><span class=\"target\" id=\"structM2M2Lidar_1_1sensor__config__t_1a3f45808ef95801a29bafc0e2c2779258\"></span><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">angular_resolution</span></span></span><br/></dt><dd></dd>"}
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
