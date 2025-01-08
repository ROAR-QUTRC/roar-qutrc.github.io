selector_to_html = {"a[href=\"#_CPPv4N9M2M2Lidar15sensor_config_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N9M2M2Lidar15sensor_config_tE\">\n<span id=\"_CPPv3N9M2M2Lidar15sensor_config_tE\"></span><span id=\"_CPPv2N9M2M2Lidar15sensor_config_tE\"></span><span id=\"M2M2Lidar::sensor_config_t\"></span><span class=\"target\" id=\"structM2M2Lidar_1_1sensor__config__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">sensor_config_t</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N9M2M2Lidar15sensor_config_t8maxRangeE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N9M2M2Lidar15sensor_config_t8maxRangeE\">\n<span id=\"_CPPv3N9M2M2Lidar15sensor_config_t8maxRangeE\"></span><span id=\"_CPPv2N9M2M2Lidar15sensor_config_t8maxRangeE\"></span><span id=\"M2M2Lidar::sensor_config_t::maxRange__double\"></span><span class=\"target\" id=\"structM2M2Lidar_1_1sensor__config__t_1ac5ca440a3f137fc1ea2caf521601bc48\"></span><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">maxRange</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N9M2M2Lidar15sensor_config_t13scanFrequencyE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N9M2M2Lidar15sensor_config_t13scanFrequencyE\">\n<span id=\"_CPPv3N9M2M2Lidar15sensor_config_t13scanFrequencyE\"></span><span id=\"_CPPv2N9M2M2Lidar15sensor_config_t13scanFrequencyE\"></span><span id=\"M2M2Lidar::sensor_config_t::scanFrequency__double\"></span><span class=\"target\" id=\"structM2M2Lidar_1_1sensor__config__t_1a18180108cf1d261db37c415b4681e44d\"></span><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">scanFrequency</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N9M2M2Lidar15sensor_config_t8minRangeE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N9M2M2Lidar15sensor_config_t8minRangeE\">\n<span id=\"_CPPv3N9M2M2Lidar15sensor_config_t8minRangeE\"></span><span id=\"_CPPv2N9M2M2Lidar15sensor_config_t8minRangeE\"></span><span id=\"M2M2Lidar::sensor_config_t::minRange__double\"></span><span class=\"target\" id=\"structM2M2Lidar_1_1sensor__config__t_1a53da0c90464a84d806d33e2b1b4917d4\"></span><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">minRange</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N9M2M2Lidar15sensor_config_t17angularResolutionE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N9M2M2Lidar15sensor_config_t17angularResolutionE\">\n<span id=\"_CPPv3N9M2M2Lidar15sensor_config_t17angularResolutionE\"></span><span id=\"_CPPv2N9M2M2Lidar15sensor_config_t17angularResolutionE\"></span><span id=\"M2M2Lidar::sensor_config_t::angularResolution__double\"></span><span class=\"target\" id=\"structM2M2Lidar_1_1sensor__config__t_1ac6e6257956398c20b1202cfc6dd15512\"></span><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">angularResolution</span></span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>"}
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
