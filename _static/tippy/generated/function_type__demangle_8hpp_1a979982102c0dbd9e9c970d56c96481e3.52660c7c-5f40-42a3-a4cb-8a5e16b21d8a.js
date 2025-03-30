selector_to_html = {"a[href=\"#_CPPv48demanglePKc\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv48demanglePKc\">\n<span id=\"_CPPv38demanglePKc\"></span><span id=\"_CPPv28demanglePKc\"></span><span id=\"demangle__cCP\"></span><span class=\"target\" id=\"type__demangle_8hpp_1a979982102c0dbd9e9c970d56c96481e3\"></span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/string/basic_string\" title=\"std::string (C++ standard type alias)\"><span class=\"n\"><span class=\"pre\">string</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">demangle</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><span class=\"kt\"><span class=\"pre\">char</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">*</span></span><a class=\"n sig-param reference internal\" href=\"function_type__demangle_8cpp_1a979982102c0dbd9e9c970d56c96481e3.html#_CPPv48demanglePKc\" title=\"demangle::name (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">name</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>", "a[href=\"function_type__demangle_8cpp_1a979982102c0dbd9e9c970d56c96481e3.html#_CPPv48demanglePKc\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv48demanglePKc\">\n<span id=\"_CPPv38demanglePKc\"></span><span id=\"_CPPv28demanglePKc\"></span><span id=\"demangle__cCP\"></span><span class=\"target\" id=\"type__demangle_8hpp_1a979982102c0dbd9e9c970d56c96481e3\"></span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/string/basic_string\" title=\"std::string (C++ standard type alias)\"><span class=\"n\"><span class=\"pre\">string</span></span></a><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">demangle</span></span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><span class=\"k\"><span class=\"pre\">const</span></span><span class=\"w\"> </span><span class=\"kt\"><span class=\"pre\">char</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">*</span></span><a class=\"n sig-param reference internal\" href=\"#_CPPv48demanglePKc\" title=\"demangle::name (C++ function parameter)\"><span class=\"n sig-param\"><span class=\"pre\">name</span></span></a></span><span class=\"sig-paren\">)</span><br/></dt><dd></dd>"}
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
