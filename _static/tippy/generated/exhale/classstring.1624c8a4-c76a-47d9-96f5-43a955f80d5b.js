selector_to_html = {"a[href=\"#_CPPv46string\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv46string\">\n<span id=\"_CPPv36string\"></span><span id=\"_CPPv26string\"></span><span id=\"string\"></span><span class=\"target\" id=\"classstring\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">string</span></span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">public</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">std</span></span><span class=\"p\"><span class=\"pre\">::</span></span><a class=\"desctype reference external\" href=\"https://en.cppreference.com/w/cpp/string/basic_string\" title=\"std::basic_string (C++ standard class)\"><span class=\"n\"><span class=\"pre\">basic_string</span></span></a><span class=\"p\"><span class=\"pre\">&lt;</span></span><span class=\"kt\"><span class=\"pre\">char</span></span><span class=\"p\"><span class=\"pre\">&gt;</span></span><br/></dt><dd><p>Inheritance diagram for string:</p><p>Collaboration diagram for string:</p><p>STL class. </p></dd>", "a[href=\"#_CPPv4N6string16reverse_iteratorE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6string16reverse_iteratorE\">\n<span id=\"_CPPv3N6string16reverse_iteratorE\"></span><span id=\"_CPPv2N6string16reverse_iteratorE\"></span><span id=\"string::reverse_iterator\"></span><span class=\"target\" id=\"classstring_1_1reverse__iterator\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">reverse_iterator</span></span></span><br/></dt><dd><p>STL iterator class. </p></dd>", "a[href=\"#_CPPv4N6string22const_reverse_iteratorE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6string22const_reverse_iteratorE\">\n<span id=\"_CPPv3N6string22const_reverse_iteratorE\"></span><span id=\"_CPPv2N6string22const_reverse_iteratorE\"></span><span id=\"string::const_reverse_iterator\"></span><span class=\"target\" id=\"classstring_1_1const__reverse__iterator\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">const_reverse_iterator</span></span></span><br/></dt><dd><p>STL iterator class. </p></dd>", "a[href=\"#_CPPv4N6string8iteratorE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6string8iteratorE\">\n<span id=\"_CPPv3N6string8iteratorE\"></span><span id=\"_CPPv2N6string8iteratorE\"></span><span id=\"string::iterator\"></span><span class=\"target\" id=\"classstring_1_1iterator\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">iterator</span></span></span><br/></dt><dd><p>STL iterator class. </p></dd>", "a[href=\"#_CPPv4N6string14const_iteratorE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6string14const_iteratorE\">\n<span id=\"_CPPv3N6string14const_iteratorE\"></span><span id=\"_CPPv2N6string14const_iteratorE\"></span><span id=\"string::const_iterator\"></span><span class=\"target\" id=\"classstring_1_1const__iterator\"></span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">const_iterator</span></span></span><br/></dt><dd><p>STL iterator class. </p></dd>"}
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
