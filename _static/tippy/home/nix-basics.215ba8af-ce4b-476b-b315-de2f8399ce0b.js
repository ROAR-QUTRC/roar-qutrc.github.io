selector_to_html = {"a[href=\"https://en.wikipedia.org/wiki/Currying\"]": "<p>In mathematics and computer science, <b>currying</b> is the technique of translating a function that takes multiple arguments into a sequence of families of functions, each taking a single argument.</p>", "a[href^=\"https://en.wikipedia.org/wiki/Currying#\"]": "<p>In mathematics and computer science, <b>currying</b> is the technique of translating a function that takes multiple arguments into a sequence of families of functions, each taking a single argument.</p>", "a[href=\"#term-derivation\"]": "<dt id=\"term-derivation\">derivation</dt><dd><p>See <a class=\"reference internal\" href=\"#term-Nix-derivation\" title=\"Nix derivation (glossary term)\"><span class=\"xref std std-term\">Nix derivation</span></a>.</p></dd>", "a[href=\"#term-Nix-attribute\"]": "<dt id=\"term-Nix-attribute\">Nix attribute</dt><dd><p>A member of a Nix set.</p><p>For example, the following set contains the attributes <code class=\"docutils literal notranslate\"><span class=\"pre\">foo</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">bar</span></code>: <code class=\"docutils literal notranslate\"><span class=\"pre\">{</span> <span class=\"pre\">foo</span> <span class=\"pre\">=</span> <span class=\"pre\">\"baz\";</span> <span class=\"pre\">bar</span> <span class=\"pre\">=</span> <span class=\"pre\">\"quux\";</span> <span class=\"pre\">}</span></code></p></dd>", "a[href=\"#nix-search\"]": "<aside class=\"footnote brackets\" id=\"nix-search\" role=\"doc-footnote\">\n<span class=\"label\"><span class=\"fn-bracket\">[</span><a href=\"#id1\" role=\"doc-backlink\">1</a><span class=\"fn-bracket\">]</span></span>\n<p>Technically, it needs to point to a directory containing a <code class=\"docutils literal notranslate\"><span class=\"pre\">flake.nix</span></code> file (or one of its subdirectories - it\u2019ll search upwards), and since this project\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">flake.nix</span></code> is in the repository root, that\u2019s why it needs to point there.\nSince it searches upwards, running <code class=\"docutils literal notranslate\"><span class=\"pre\">nix</span> <span class=\"pre\">COMMAND</span> <span class=\"pre\">.#blah</span></code> works no matter what directory you\u2019re in, as long as you\u2019re inside the repo.</p>\n</aside>", "a[href=\"#store-immutability\"]": "<aside class=\"footnote brackets\" id=\"store-immutability\" role=\"doc-footnote\">\n<span class=\"label\"><span class=\"fn-bracket\">[</span><a href=\"#id3\" role=\"doc-backlink\">3</a><span class=\"fn-bracket\">]</span></span>\n<p>Nix has the concept of a <em>store</em> (located at <code class=\"docutils literal notranslate\"><span class=\"pre\">/nix/store/</span></code>), which is where it keeps everything.\nThis store is <em>immutable</em>, meaning it can\u2019t be changed, and the <code class=\"docutils literal notranslate\"><span class=\"pre\">result</span></code> symlink points to something in here.\nEverything Nix builds (or downloads) ends up in the store, and making liberal use of symlinks to files here is how Nix keeps everything isolated.\nThis does mean that store sizes can end up quite large if you don\u2019t run garbage collection, though.</p>\n</aside>", "a[href=\"#nix-run-args\"]": "<aside class=\"footnote brackets\" id=\"nix-run-args\" role=\"doc-footnote\">\n<span class=\"label\"><span class=\"fn-bracket\">[</span><a href=\"#id5\" role=\"doc-backlink\">5</a><span class=\"fn-bracket\">]</span></span>\n<p>If the arguments to be passed don\u2019t start with the double dash, you can actually omit the separating <code class=\"docutils literal notranslate\"><span class=\"pre\">--</span></code>.\nFor example, you could run <code class=\"docutils literal notranslate\"><span class=\"pre\">nix</span> <span class=\"pre\">run</span> <span class=\"pre\">.#docs.decompress</span> <span class=\"pre\">result/docs.7z</span> <span class=\"pre\">decompressed-docs/</span></code> and everything after the derivation to execute will be passed in as arguments to the executable built by the derivation <code class=\"docutils literal notranslate\"><span class=\"pre\">.#docs.decompress</span></code>.</p>\n</aside>", "a[href=\"#term-Nix-flake\"]": "<dt id=\"term-Nix-flake\">Nix flake</dt><dd><p>A Nix flake is a standardised way of writing a Nix expression, which also has dependencies version-pinned in a lockfile.</p></dd>", "a[href=\"#env-variables\"]": "<aside class=\"footnote brackets\" id=\"env-variables\" role=\"doc-footnote\">\n<span class=\"label\"><span class=\"fn-bracket\">[</span><a href=\"#id4\" role=\"doc-backlink\">4</a><span class=\"fn-bracket\">]</span></span>\n<p>It makes packages available by appending them to your shell <code class=\"docutils literal notranslate\"><span class=\"pre\">PATH</span></code>.\nWhen your shell looks for an executable, it searches through all the directories in your <code class=\"docutils literal notranslate\"><span class=\"pre\">PATH</span></code>, so by appending (or prefixing) directories to it, Nix can make programs available.</p>\n</aside>", "a[href=\"#shell-dot\"]": "<aside class=\"footnote brackets\" id=\"shell-dot\" role=\"doc-footnote\">\n<span class=\"label\"><span class=\"fn-bracket\">[</span><a href=\"#id2\" role=\"doc-backlink\">2</a><span class=\"fn-bracket\">]</span></span>\n<p><code class=\"docutils literal notranslate\"><span class=\"pre\">.</span></code> in the context of paths just means \u201cthe current directory\u201d, and <code class=\"docutils literal notranslate\"><span class=\"pre\">..</span></code> means \u201cthe parent directory\u201d.</p>\n</aside>", "a[href=\"../architecture.html\"]": "<h1 class=\"tippy-header\" id=\"architecture\" style=\"margin-top: 0;\">Architecture<a class=\"headerlink\" href=\"#architecture\" title=\"Link to this heading\">\u00b6</a></h1><p>Fundamentally, the rover is split into two main sub-systems: Hardware, and Software.\nThe <a class=\"reference internal\" href=\"../architecture/software.html\"><span class=\"std std-doc\"><em>software</em> architecture</span></a> lays out how the <em>code</em> interacts with itself and its environment, as well as which bits do what.\nThe <a class=\"reference internal\" href=\"../architecture/hardware.html\"><span class=\"std std-doc\"><em>hardware</em> architecture</span></a> goes over how everything\u2019s <em>physically</em> connected and laid out, as well as the electrical wiring.</p><p>Whilst those two documents contain the majority of the information you\u2019ll need day-to-day, there are also some other moving parts to consider as well:</p>", "a[href=\"#term-nixlang\"]": "<dt id=\"term-nixlang\">nixlang</dt><dd><p>The language (also called Nix) which the Nix <em>program</em> evaluates.</p></dd>", "a[href=\"#term-declarative-programming\"]": "<dt id=\"term-declarative-programming\">declarative programming</dt><dd><p>Declarative programming is a style of programming where everything you <em>want to happen</em> is described, not <em>how to do it</em>.\nThis is in contrast to <a class=\"reference internal\" href=\"#term-imperative-programming\" title=\"imperative programming (glossary term)\"><span class=\"xref std std-term\">imperative programming</span></a>.</p></dd>", "a[href=\"#term-Nix-derivation\"]": "<dt id=\"term-Nix-derivation\">Nix derivation</dt><dd><p>A Nix <em>build task</em> containing all instructions and information to build a <a class=\"reference internal\" href=\"#term-Nix-package\" title=\"Nix package (glossary term)\"><span class=\"xref std std-term\">Nix package</span></a>.</p></dd>", "a[href=\"#term-imperative-programming\"]": "<dt id=\"term-imperative-programming\">imperative programming</dt><dd><p>Imperative programming is what you\u2019re most likely used to.\nIn this style, you describe a <em>sequence of commands</em> which you want to be executed in that order.\nSee also <a class=\"reference internal\" href=\"#term-declarative-programming\" title=\"declarative programming (glossary term)\"><span class=\"xref std std-term\">declarative programming</span></a>.</p></dd>", "a[href=\"#term-Nix-expression\"]": "<dt id=\"term-Nix-expression\">Nix expression</dt><dd><p>A piece of <a class=\"reference internal\" href=\"#term-nixlang\" title=\"nixlang (glossary term)\"><span class=\"xref std std-term\">nixlang</span></a> code.</p></dd>", "a[href=\"#term-Nix-package\"]": "<dt id=\"term-Nix-package\">Nix package</dt><dd><p>The output of a <a class=\"reference internal\" href=\"#term-Nix-derivation\" title=\"Nix derivation (glossary term)\"><span class=\"xref std std-term\">Nix derivation</span></a>.\nMost commonly binary (program) outputs under <code class=\"docutils literal notranslate\"><span class=\"pre\">$out/bin/</span></code>, as well as library outputs under <code class=\"docutils literal notranslate\"><span class=\"pre\">$out/lib/</span></code> and man pages.</p></dd>", "a[href=\"#term-Nix-file\"]": "<dt id=\"term-Nix-file\">Nix file</dt><dd><p>A file ending with <code class=\"docutils literal notranslate\"><span class=\"pre\">.nix</span></code> containing a <a class=\"reference internal\" href=\"#term-Nix-expression\" title=\"Nix expression (glossary term)\"><span class=\"xref std std-term\">Nix expression</span></a>.</p></dd>"}
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
