selector_to_html = {"a[href=\"#declare_parameters\"]": "<dt class=\"sig sig-object highlight py\" id=\"declare_parameters\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1ad41851fd80e91063b0f4760e05a57f6f\"></span><span class=\"sig-name descname\"><span class=\"pre\">_declare_parameters</span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#declare_parameters\" title=\"_declare_parameters.self (Python parameter)\"><span class=\"n\"><span class=\"pre\">self</span></span></a></em></span><span class=\"sig-paren\">)</span></dt><dd></dd>", "a[href=\"#parameter_callback\"]": "<dt class=\"sig sig-object highlight py\" id=\"parameter_callback\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a50bc96c3c480ed1891b60ee2db12f385\"></span><span class=\"sig-name descname\"><span class=\"pre\">_parameter_callback</span></span></dt><dd></dd>", "a[href=\"#high_speed_multiplier\"]": "<dt class=\"sig sig-object highlight py\" id=\"high_speed_multiplier\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1ae3cc0e8c6ec4b141c059e32e1780ea5a\"></span><span class=\"sig-name descname\"><span class=\"pre\">high_speed_multiplier</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"n\">param</span><span class=\"o\">.</span><span class=\"n\">value</span></code></dt><dd></dd>", "a[href=\"#joy_subscriber\"]": "<dt class=\"sig sig-object highlight sig-wrap py\" id=\"joy_subscriber\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1af5a5556f46550ebd2a79bfa5476588c2\"></span><span class=\"sig-name descname\"><span class=\"pre\">joy_subscriber</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"bp\">self</span><span class=\"o\">.</span><span class=\"n\">create_subscription</span><span class=\"p\">(</span><span class=\"n\">Joy</span><span class=\"p\">,</span> <span class=\"s2\">\"joy\"</span><span class=\"p\">,</span> <span class=\"bp\">self</span><span class=\"o\">.</span><span class=\"n\">process_joystick_input</span><span class=\"p\">,</span> <span class=\"mi\">10</span><span class=\"p\">)</span></code></dt><dd></dd>", "a[href=\"#breathe-section-title-public-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-functions\">Public Functions<a class=\"headerlink\" href=\"#breathe-section-title-public-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#translation_scale\"]": "<dt class=\"sig sig-object highlight py\" id=\"translation_scale\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a8686665a012fd81f4f83687ca84bbaed\"></span><span class=\"sig-name descname\"><span class=\"pre\">translation_scale</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"n\">param</span><span class=\"o\">.</span><span class=\"n\">value</span></code></dt><dd></dd>", "a[href=\"#log_debug_info\"]": "<dt class=\"sig sig-object highlight sig-wrap py\" id=\"log_debug_info\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a034d2b786da71a79009707f6e6726148\"></span><span class=\"sig-name descname\"><span class=\"pre\">_log_debug_info</span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#log_debug_info\" title=\"_log_debug_info.self (Python parameter)\"><span class=\"n\"><span class=\"pre\">self</span></span></a></em>, </span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#log_debug_info\" title=\"_log_debug_info.Joy joy_msg (Python parameter)\"><span class=\"n\"><span class=\"pre\">Joy</span> <span class=\"pre\">joy_msg</span></span></a></em>, </span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#log_debug_info\" title=\"_log_debug_info.Twist twist (Python parameter)\"><span class=\"n\"><span class=\"pre\">Twist</span> <span class=\"pre\">twist</span></span></a></em>, </span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#log_debug_info\" title=\"_log_debug_info.bool is_regular_speed (Python parameter)\"><span class=\"n\"><span class=\"pre\">bool</span> <span class=\"pre\">is_regular_speed</span></span></a></em>, </span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#log_debug_info\" title=\"_log_debug_info.bool is_high_speed (Python parameter)\"><span class=\"n\"><span class=\"pre\">bool</span> <span class=\"pre\">is_high_speed</span></span></a></em></span><span class=\"sig-paren\">)</span></dt><dd></dd>", "a[href=\"#breathe-section-title-protected-attributes\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-protected-attributes\">Protected Attributes<a class=\"headerlink\" href=\"#breathe-section-title-protected-attributes\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#speed_range\"]": "<dt class=\"sig sig-object highlight sig-wrap py\" id=\"speed_range\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a9e26986ac287a336b5be7c2421025942\"></span><span class=\"sig-name descname\"><span class=\"pre\">_speed_range</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"n\">FloatingPointRange</span><span class=\"p\">(</span><span class=\"n\">from_value</span><span class=\"o\">=</span><span class=\"mf\">0.0</span><span class=\"p\">,</span> <span class=\"n\">to_value</span><span class=\"o\">=</span><span class=\"mf\">10.0</span><span class=\"p\">,</span> <span class=\"n\">step</span><span class=\"o\">=</span><span class=\"mf\">0.01</span><span class=\"p\">)</span></code></dt><dd></dd>", "a[href=\"#load_parameters\"]": "<dt class=\"sig sig-object highlight py\" id=\"load_parameters\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a27f8b8f4396b262547230507010b3026\"></span><span class=\"sig-name descname\"><span class=\"pre\">_load_parameters</span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#load_parameters\" title=\"_load_parameters.self (Python parameter)\"><span class=\"n\"><span class=\"pre\">self</span></span></a></em></span><span class=\"sig-paren\">)</span></dt><dd></dd>", "a[href=\"#rotation_scale\"]": "<dt class=\"sig sig-object highlight py\" id=\"rotation_scale\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a209809ffbc3785de16982d9d0df783b6\"></span><span class=\"sig-name descname\"><span class=\"pre\">rotation_scale</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"n\">param</span><span class=\"o\">.</span><span class=\"n\">value</span></code></dt><dd></dd>", "a[href=\"#use_stamped_msg\"]": "<dt class=\"sig sig-object highlight py\" id=\"use_stamped_msg\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1ae055348ae14a514b539b851ac9d3dda7\"></span><span class=\"sig-name descname\"><span class=\"pre\">use_stamped_msg</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"n\">TwistStamped</span><span class=\"p\">()</span></code></dt><dd></dd>", "a[href=\"#deadman_threshold\"]": "<dt class=\"sig sig-object highlight py\" id=\"deadman_threshold\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1ab4b059b45d464486f643c744ae8a5c35\"></span><span class=\"sig-name descname\"><span class=\"pre\">deadman_threshold</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"n\">param</span><span class=\"o\">.</span><span class=\"n\">value</span></code></dt><dd></dd>", "a[href=\"#LEFT_TRIGGER_AXIS\"]": "<dt class=\"sig sig-object highlight py\" id=\"LEFT_TRIGGER_AXIS\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a6d66fddbcd2e1e7d92472d52da16072d\"></span><span class=\"sig-name descname\"><span class=\"pre\">LEFT_TRIGGER_AXIS</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"mi\">6</span></code></dt><dd></dd>", "a[href=\"#RIGHT_STICK_X_AXIS\"]": "<dt class=\"sig sig-object highlight py\" id=\"RIGHT_STICK_X_AXIS\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a171b64b7def88e99a7600299f92b332b\"></span><span class=\"sig-name descname\"><span class=\"pre\">RIGHT_STICK_X_AXIS</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"mi\">2</span></code></dt><dd></dd>", "a[href=\"#breathe-section-title-public-members\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-public-members\">Public Members<a class=\"headerlink\" href=\"#breathe-section-title-public-members\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#velocity_publisher\"]": "<dt class=\"sig sig-object highlight sig-wrap py\" id=\"velocity_publisher\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a0c301aaf661547dffa344526087f5bfc\"></span><span class=\"sig-name descname\"><span class=\"pre\">velocity_publisher</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"bp\">self</span><span class=\"o\">.</span><span class=\"n\">create_publisher</span><span class=\"p\">(</span><span class=\"n\">TwistStamped</span><span class=\"p\">,</span> <span class=\"s2\">\"input_devices/cmd_vel\"</span><span class=\"p\">,</span> <span class=\"mi\">10</span><span class=\"p\">)</span></code></dt><dd></dd>", "a[href=\"#RIGHT_TRIGGER_AXIS\"]": "<dt class=\"sig sig-object highlight py\" id=\"RIGHT_TRIGGER_AXIS\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a27b846d0df899021c9a990ed4fa5ee5d\"></span><span class=\"sig-name descname\"><span class=\"pre\">RIGHT_TRIGGER_AXIS</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"mi\">5</span></code></dt><dd></dd>", "a[href=\"#init__\"]": "<dt class=\"sig sig-object highlight py\" id=\"init__\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a0dc83a77721e4a2422febb5c4a34160e\"></span><span class=\"sig-name descname\"><span class=\"pre\">__init__</span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#init__\" title=\"__init__.self (Python parameter)\"><span class=\"n\"><span class=\"pre\">self</span></span></a></em></span><span class=\"sig-paren\">)</span></dt><dd></dd>", "a[href=\"#LEFT_STICK_Y_AXIS\"]": "<dt class=\"sig sig-object highlight py\" id=\"LEFT_STICK_Y_AXIS\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a9b05914d096fe42704b3b299412d4aea\"></span><span class=\"sig-name descname\"><span class=\"pre\">LEFT_STICK_Y_AXIS</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"mi\">1</span></code></dt><dd></dd>", "a[href=\"#breathe-section-title-protected-functions\"]": "<p class=\"breathe-sectiondef-title rubric\" id=\"breathe-section-title-protected-functions\">Protected Functions<a class=\"headerlink\" href=\"#breathe-section-title-protected-functions\" title=\"Permalink to this headline\">\u00b6</a></p>", "a[href=\"#process_joystick_input\"]": "<dt class=\"sig sig-object highlight py\" id=\"process_joystick_input\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a8ce37b401186bb18c5dd390c95c6b9fd\"></span><span class=\"sig-name descname\"><span class=\"pre\">process_joystick_input</span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#process_joystick_input\" title=\"process_joystick_input.self (Python parameter)\"><span class=\"n\"><span class=\"pre\">self</span></span></a></em>, </span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#process_joystick_input\" title=\"process_joystick_input.Joy joy_msg (Python parameter)\"><span class=\"n\"><span class=\"pre\">Joy</span> <span class=\"pre\">joy_msg</span></span></a></em></span><span class=\"sig-paren\">)</span></dt><dd></dd>", "a[href=\"#threshold_range\"]": "<dt class=\"sig sig-object highlight sig-wrap py\" id=\"threshold_range\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1adbd6144370d7abd3992edd0e02a1450a\"></span><span class=\"sig-name descname\"><span class=\"pre\">_threshold_range</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"n\">FloatingPointRange</span><span class=\"p\">(</span><span class=\"n\">from_value</span><span class=\"o\">=-</span><span class=\"mf\">1.0</span><span class=\"p\">,</span> <span class=\"n\">to_value</span><span class=\"o\">=</span><span class=\"mf\">0.0</span><span class=\"p\">,</span> <span class=\"n\">step</span><span class=\"o\">=</span><span class=\"mf\">0.01</span><span class=\"p\">)</span></code></dt><dd></dd>", "a[href=\"#multiplier_range\"]": "<dt class=\"sig sig-object highlight sig-wrap py\" id=\"multiplier_range\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a9375c4b5a1515182f3904c6859b1635d\"></span><span class=\"sig-name descname\"><span class=\"pre\">_multiplier_range</span></span><span class=\"p\"> <span class=\"pre\">=</span> </span><code class=\"code python docutils literal highlight highlight-python\"><span class=\"n\">FloatingPointRange</span><span class=\"p\">(</span><span class=\"n\">from_value</span><span class=\"o\">=</span><span class=\"mf\">1.0</span><span class=\"p\">,</span> <span class=\"n\">to_value</span><span class=\"o\">=</span><span class=\"mf\">5.0</span><span class=\"p\">,</span> <span class=\"n\">step</span><span class=\"o\">=</span><span class=\"mf\">0.1</span><span class=\"p\">)</span></code></dt><dd></dd>", "a[href=\"#id0\"]": "<dt class=\"sig sig-object highlight py\" id=\"id0\">\n<span class=\"target\" id=\"classinput__devices_1_1xbox__controller_1_1XboxController_1a3853dffae9e5d51d471acd7a0e681559\"></span><span class=\"sig-name descname\"><span class=\"pre\">_parameter_callback</span></span><span class=\"sig-paren\">(</span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#id0\" title=\"_parameter_callback.self (Python parameter)\"><span class=\"n\"><span class=\"pre\">self</span></span></a></em>, </span><span class=\"sig-param-decl\"><em class=\"sig-param\"><a class=\"n reference internal\" href=\"#id0\" title=\"_parameter_callback.List[Parameter] params (Python parameter)\"><span class=\"n\"><span class=\"pre\">List[Parameter]</span> <span class=\"pre\">params</span></span></a></em></span><span class=\"sig-paren\">)</span></dt><dd></dd>"}
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