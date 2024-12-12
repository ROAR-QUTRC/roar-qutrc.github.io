selector_to_html = {"a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#joy_callback\"]": "<dt class=\"sig sig-object highlight py\" id=\"joy_callback\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxControllerNode_1aafe4565d0260d6de48e73d1264817b3d\"></span><span class=\"sig-name descname\"><span class=\"pre\">joy_callback</span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#joy_callback\" title=\"joy_callback.self (Python parameter)\"><span class=\"n\"><span class=\"pre\">self</span></span></a></em>, </span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#joy_callback\" title=\"joy_callback.joy_msg (Python parameter)\"><span class=\"n\"><span class=\"pre\">joy_msg</span></span></a></em></span><span class=\"sig-paren\">)</span></dt><dd></dd>", "a[href=\"#init__\"]": "<dt class=\"sig sig-object highlight py\" id=\"init__\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxControllerNode_1ab45712cffd6c651c695d622258bb8e59\"></span><span class=\"sig-name descname\"><span class=\"pre\">__init__</span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#init__\" title=\"__init__.self (Python parameter)\"><span class=\"n\"><span class=\"pre\">self</span></span></a></em></span><span class=\"sig-paren\">)</span></dt><dd></dd>", "a[href=\"#publisher_\"]": "<dt class=\"sig sig-object highlight py\" id=\"publisher_\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxControllerNode_1ae2e372f6b77a6e977411ae4e1e0106aa\"></span><span class=\"sig-name descname\"><span class=\"pre\">publisher_</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"bp\">self</span><span class=\"o\">.</span><span class=\"n\">create_publisher</span><span class=\"p\">(</span><span class=\"n\">Twist</span><span class=\"p\">,</span> <span class=\"s2\">\"cmd_vel\"</span><span class=\"p\">,</span> <span class=\"mi\">10</span><span class=\"p\">)</span></code></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#subscription\"]": "<dt class=\"sig sig-object highlight sig-wrap py\" id=\"subscription\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxControllerNode_1aee57ddb86e396add6b8a4622e828bf2c\"></span><span class=\"sig-name descname\"><span class=\"pre\">subscription</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"bp\">self</span><span class=\"o\">.</span><span class=\"n\">create_subscription</span><span class=\"p\">(</span><span class=\"n\">Joy</span><span class=\"p\">,</span> <span class=\"s2\">\"joy\"</span><span class=\"p\">,</span> <span class=\"bp\">self</span><span class=\"o\">.</span><span class=\"n\">joy_callback</span><span class=\"p\">,</span> <span class=\"mi\">10</span><span class=\"p\">)</span></code></dt><dd></dd>"}
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
