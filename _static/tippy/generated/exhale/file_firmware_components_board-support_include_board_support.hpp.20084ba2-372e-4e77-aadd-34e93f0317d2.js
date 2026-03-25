selector_to_html = {"a[href=\"program_listing_file_firmware_components_board-support_include_board_support.hpp.html\"]": "<h1 class=\"tippy-header\" id=\"program-listing-for-file-board-support-hpp\" style=\"margin-top: 0;\"><span id=\"program-listing-file-firmware-components-board-support-include-board-support-hpp\"></span>Program Listing for File board_support.hpp<a class=\"headerlink\" href=\"#program-listing-for-file-board-support-hpp\" title=\"Link to this heading\">\u00b6</a></h1><p>\u21b0 <a class=\"reference internal\" href=\"file_firmware_components_board-support_include_board_support.hpp.html#file-firmware-components-board-support-include-board-support-hpp\"><span class=\"std std-ref\">Return to documentation for file</span></a> (<code class=\"docutils literal notranslate\"><span class=\"pre\">firmware/components/board-support/include/board_support.hpp</span></code>)</p>"}
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
