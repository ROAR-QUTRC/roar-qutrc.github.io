selector_to_html = {"a[href=\"#_CPPv4N7perseus5servo6timing15DEFAULT_TIMEOUTE\"]": "<dt class=\"sig sig-object highlight sig-wrap cpp\" id=\"_CPPv4N7perseus5servo6timing15DEFAULT_TIMEOUTE\">\n<span id=\"_CPPv3N7perseus5servo6timing15DEFAULT_TIMEOUTE\"></span><span id=\"_CPPv2N7perseus5servo6timing15DEFAULT_TIMEOUTE\"></span><span id=\"perseus::servo::timing::DEFAULT_TIMEOUT__auto\"></span><span class=\"target\" id=\"servo-constants_8hpp_1a14cef23ebf52cb7ec1dc03eb73827c90\"></span><span class=\"k\"><span class=\"pre\">static</span></span><span class=\"w\"> </span><span class=\"kt\"><span class=\"pre\">auto</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">perseus</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">servo</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">timing</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">DEFAULT_TIMEOUT</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">chrono</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/chrono/duration\" title=\"std::chrono::milliseconds (C++11 standard type alias)\"><span class=\"n\"><span class=\"pre\">milliseconds</span></span></a><span class=\"p\"><span class=\"pre\">(</span></span><span class=\"m\"><span class=\"pre\">200</span></span><span class=\"p\"><span class=\"pre\">)</span></span><br/></dt><dd></dd>"}
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
