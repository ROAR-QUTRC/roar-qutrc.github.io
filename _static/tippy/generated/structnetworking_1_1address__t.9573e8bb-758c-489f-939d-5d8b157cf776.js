selector_to_html = {"a[href=\"#_CPPv4N10networking9address_tE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N10networking9address_tE\">\n<span id=\"_CPPv3N10networking9address_tE\"></span><span id=\"_CPPv2N10networking9address_tE\"></span><span id=\"networking::address_t\"></span><span class=\"target\" id=\"structnetworking_1_1address__t\"></span><span class=\"k\"><span class=\"pre\">struct</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">address_t</span></span></span><br/></dt><dd><p>Collaboration diagram for networking::address_t:</p></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N10networking9address_t7serviceE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N10networking9address_t7serviceE\">\n<span id=\"_CPPv3N10networking9address_t7serviceE\"></span><span id=\"_CPPv2N10networking9address_t7serviceE\"></span><span id=\"networking::address_t::service__ss\"></span><span class=\"target\" id=\"structnetworking_1_1address__t_1a2c16dda3dc7158f7c944838a24bee785\"></span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/string/basic_string\" title=\"std::string (C++ standard type alias)\"><span class=\"n\"><span class=\"pre\">string</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">service</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">{</span></span><span class=\"p\"><span class=\"pre\">}</span></span><br/></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#_CPPv4N10networking9address_t8hostnameE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N10networking9address_t8hostnameE\">\n<span id=\"_CPPv3N10networking9address_t8hostnameE\"></span><span id=\"_CPPv2N10networking9address_t8hostnameE\"></span><span id=\"networking::address_t::hostname__ss\"></span><span class=\"target\" id=\"structnetworking_1_1address__t_1a3f0e79b2f4942588c5c4336ed52e8f15\"></span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/string/basic_string\" title=\"std::string (C++ standard type alias)\"><span class=\"n\"><span class=\"pre\">string</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">hostname</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">{</span></span><span class=\"p\"><span class=\"pre\">}</span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4NK10networking9address_tcvNSt6stringEEv\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4NK10networking9address_tcvNSt6stringEEv\">\n<span id=\"_CPPv3NK10networking9address_tcvNSt6stringEEv\"></span><span id=\"_CPPv2NK10networking9address_tcvNSt6stringEEv\"></span><span id=\"networking::address_t::castto-ss-operatorC\"></span><span class=\"target\" id=\"structnetworking_1_1address__t_1a28d3d0d9eddd4ef61299a6c9f2fb1d85\"></span><span class=\"k\"><span class=\"pre\">inline</span></span><span class=\"w\"> </span><span><span class=\"k\"><span class=\"pre\">explicit</span></span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"k\"><span class=\"pre\">operator</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/string/basic_string\" title=\"std::string (C++ standard type alias)\"><span class=\"n\"><span class=\"pre\">string</span></span></a></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">const</span></span><br/></dt><dd></dd>"}
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