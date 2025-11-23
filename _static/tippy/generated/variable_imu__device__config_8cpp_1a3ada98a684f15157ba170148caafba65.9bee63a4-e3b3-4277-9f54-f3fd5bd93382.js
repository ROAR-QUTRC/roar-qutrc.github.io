selector_to_html = {"a[href=\"#_CPPv4N14i2c_imu_driver22MPU_ACCEL_SCALE_FACTORE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N14i2c_imu_driver22MPU_ACCEL_SCALE_FACTORE\">\n<span id=\"_CPPv3N14i2c_imu_driver22MPU_ACCEL_SCALE_FACTORE\"></span><span id=\"_CPPv2N14i2c_imu_driver22MPU_ACCEL_SCALE_FACTORE\"></span><span id=\"i2c_imu_driver::MPU_ACCEL_SCALE_FACTOR__doubleC\"></span><span class=\"target\" id=\"imu__device__config_8cpp_1a3ada98a684f15157ba170148caafba65\"></span><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><span class=\"kt\"><span class=\"pre\">double</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">i2c_imu_driver</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">MPU_ACCEL_SCALE_FACTOR</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">9.81</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">/</span></span><span class=\"w\"> </span><span class=\"m\"><span class=\"pre\">16384.0</span></span><br/></dt><dd></dd>"}
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
