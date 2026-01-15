selector_to_html = {"a[href=\"#practical-tuning-workflow-summary\"]": "<p class=\"rubric\" id=\"practical-tuning-workflow-summary\"><strong>Practical Tuning Workflow Summary</strong><a class=\"headerlink\" href=\"#practical-tuning-workflow-summary\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#why-not-just-use-a-single-encoder-or-imu-for-odometry-estimation\"]": "<p class=\"rubric\" id=\"why-not-just-use-a-single-encoder-or-imu-for-odometry-estimation\"><strong>Why not just use a single encoder or IMU for odometry estimation?</strong><a class=\"headerlink\" href=\"#why-not-just-use-a-single-encoder-or-imu-for-odometry-estimation\" title=\"Permalink to this headline\">\u00b6</a></p>"}
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
