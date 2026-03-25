selector_to_html = {"a[href=\"program_listing_file_software_shared_type-demangle_src_type_demangle.cpp.html\"]": "<h1 class=\"tippy-header\" id=\"program-listing-for-file-type-demangle-cpp\" style=\"margin-top: 0;\"><span id=\"program-listing-file-software-shared-type-demangle-src-type-demangle-cpp\"></span>Program Listing for File type_demangle.cpp<a class=\"headerlink\" href=\"#program-listing-for-file-type-demangle-cpp\" title=\"Link to this heading\">\u00b6</a></h1><p>\u21b0 <a class=\"reference internal\" href=\"file_software_shared_type-demangle_src_type_demangle.cpp.html#file-software-shared-type-demangle-src-type-demangle-cpp\"><span class=\"std std-ref\">Return to documentation for file</span></a> (<code class=\"docutils literal notranslate\"><span class=\"pre\">software/shared/type-demangle/src/type_demangle.cpp</span></code>)</p>"}
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
