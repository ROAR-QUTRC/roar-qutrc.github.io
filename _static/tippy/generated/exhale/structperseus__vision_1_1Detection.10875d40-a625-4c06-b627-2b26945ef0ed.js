selector_to_html = {"a[href=\"#_CPPv4N14perseus_vision9DetectionE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N14perseus_vision9DetectionE\">\n<span id=\"_CPPv3N14perseus_vision9DetectionE\"></span><span id=\"_CPPv2N14perseus_vision9DetectionE\"></span><span id=\"perseus_vision::Detection\"></span><span class=\"target\" id=\"structperseus__vision_1_1Detection\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">Detection</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N14perseus_vision9Detection8class_idE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N14perseus_vision9Detection8class_idE\">\n<span id=\"_CPPv3N14perseus_vision9Detection8class_idE\"></span><span id=\"_CPPv2N14perseus_vision9Detection8class_idE\"></span><span id=\"perseus_vision::Detection::class_id__i\"></span><span class=\"target\" id=\"structperseus__vision_1_1Detection_1af62093ef3a1c39c3f412b2b5a5d09e88\"></span><span class=\"kt\"><span class=\"pre\">int</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">class_id</span></span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N14perseus_vision9Detection10confidenceE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N14perseus_vision9Detection10confidenceE\">\n<span id=\"_CPPv3N14perseus_vision9Detection10confidenceE\"></span><span id=\"_CPPv2N14perseus_vision9Detection10confidenceE\"></span><span id=\"perseus_vision::Detection::confidence__float\"></span><span class=\"target\" id=\"structperseus__vision_1_1Detection_1a59c0e0d2d743f39326f6b1c970e85a8a\"></span><span class=\"kt\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">confidence</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N14perseus_vision9Detection4bboxE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N14perseus_vision9Detection4bboxE\">\n<span id=\"_CPPv3N14perseus_vision9Detection4bboxE\"></span><span id=\"_CPPv2N14perseus_vision9Detection4bboxE\"></span><span id=\"perseus_vision::Detection::bbox__cv::Rect\"></span><span class=\"target\" id=\"structperseus__vision_1_1Detection_1aff9b71195395ae5dff12e5d17d0e6520\"></span><span class=\"n\"><span class=\"pre\">cv</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">Rect</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">bbox</span></span></span><br/></dt><dd></dd>"}
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
