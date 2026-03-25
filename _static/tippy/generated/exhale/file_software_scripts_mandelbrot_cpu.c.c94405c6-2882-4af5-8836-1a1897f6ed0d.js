selector_to_html = {"a[href=\"program_listing_file_software_scripts_mandelbrot_cpu.c.html\"]": "<h1 class=\"tippy-header\" id=\"program-listing-for-file-mandelbrot-cpu-c\" style=\"margin-top: 0;\"><span id=\"program-listing-file-software-scripts-mandelbrot-cpu-c\"></span>Program Listing for File mandelbrot_cpu.c<a class=\"headerlink\" href=\"#program-listing-for-file-mandelbrot-cpu-c\" title=\"Link to this heading\">\u00b6</a></h1><p>\u21b0 <a class=\"reference internal\" href=\"file_software_scripts_mandelbrot_cpu.c.html#file-software-scripts-mandelbrot-cpu-c\"><span class=\"std std-ref\">Return to documentation for file</span></a> (<code class=\"docutils literal notranslate\"><span class=\"pre\">software/scripts/mandelbrot_cpu.c</span></code>)</p>"}
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
