selector_to_html = {"a[href=\"program_listing_file_software_arm-teleop-direct_include_servo-constants.hpp.html\"]": "<h1 class=\"tippy-header\" id=\"program-listing-for-file-servo-constants-hpp\" style=\"margin-top: 0;\"><span id=\"program-listing-file-software-arm-teleop-direct-include-servo-constants-hpp\"></span>Program Listing for File servo-constants.hpp<a class=\"headerlink\" href=\"#program-listing-for-file-servo-constants-hpp\" title=\"Link to this heading\">\u00b6</a></h1><p>\u21b0 <a class=\"reference internal\" href=\"file_software_arm-teleop-direct_include_servo-constants.hpp.html#file-software-arm-teleop-direct-include-servo-constants-hpp\"><span class=\"std std-ref\">Return to documentation for file</span></a> (<code class=\"docutils literal notranslate\"><span class=\"pre\">software/arm-teleop-direct/include/servo-constants.hpp</span></code>)</p>"}
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
