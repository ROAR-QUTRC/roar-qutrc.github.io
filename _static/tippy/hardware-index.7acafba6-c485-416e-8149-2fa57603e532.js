selector_to_html = {"a[href=\"hardware/vescs.html\"]": "<h1 class=\"tippy-header\" id=\"vescs\" style=\"margin-top: 0;\">VESCs<a class=\"headerlink\" href=\"#vescs\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"#term-SBB\"]": "<dt id=\"term-SBB\">SBB</dt><dd><p><a class=\"reference internal\" href=\"hardware/smol-brain-board.html\"><span class=\"std std-doc\">Smol Brain Board</span></a></p></dd>", "a[href=\"#term-VESC\"]": "<dt id=\"term-VESC\">VESC</dt><dd><p>The type of ESC used on Perseus. See more here: <a class=\"reference internal\" href=\"hardware/vescs.html\"><span class=\"std std-doc\">VESCs</span></a></p></dd>", "a[href=\"hardware/rover-control-board.html\"]": "<h1 class=\"tippy-header\" id=\"rover-control-board\" style=\"margin-top: 0;\">Rover Control Board<a class=\"headerlink\" href=\"#rover-control-board\" title=\"Link to this heading\">\u00b6</a></h1><p>This PCB handles most of Perseus\u2019 power distribution and monitoring.</p>", "a[href=\"#term-CAN-Daisy-Chain-Board\"]": "<dt id=\"term-CAN-Daisy-Chain-Board\">CAN Daisy Chain Board</dt>", "a[href=\"hardware/can-daisy-chain.html\"]": "<h1 class=\"tippy-header\" id=\"can-bus-daisy-chain-pcb\" style=\"margin-top: 0;\"><span id=\"daisy-chain-pcb\"></span>CAN Bus Daisy Chain PCB<a class=\"headerlink\" href=\"#can-bus-daisy-chain-pcb\" title=\"Link to this heading\">\u00b6</a></h1><p>This PCB is designed to connect various different CAN bus conductor pairs to make wiring the bus easier.\nFor terminology and the rationale behind <em>why</em> this is needed, see <a class=\"reference internal\" href=\"systems/can-bus.html#can-loops-branches\"><span class=\"std std-ref\">Loops and Branches</span></a>.</p><p>Since it was originally designed for CAN wiring to ESCs, the PCB also includes power distribution in the form of a male XT90 connector to 3x female XT30 connectors.</p>", "a[href=\"systems/hardware-index.html\"]": "<h1 class=\"tippy-header\" id=\"hardware-systems\" style=\"margin-top: 0;\">Hardware Systems<a class=\"headerlink\" href=\"#hardware-systems\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"#term-Daisy-Chain-Board\"]": "<dt id=\"term-Daisy-Chain-Board\">Daisy Chain Board</dt><dd><p><a class=\"reference internal\" href=\"hardware/can-daisy-chain.html\"><span class=\"std std-doc\">CAN Bus Daisy Chain PCB</span></a></p></dd>", "a[href=\"hardware/smol-brain-board.html\"]": "<h1 class=\"tippy-header\" id=\"smol-brain-board\" style=\"margin-top: 0;\">Smol Brain Board<a class=\"headerlink\" href=\"#smol-brain-board\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"#term-RCB\"]": "<dt id=\"term-RCB\">RCB</dt><dd><p><a class=\"reference internal\" href=\"hardware/rover-control-board.html\"><span class=\"std std-doc\">Rover Control Board</span></a></p></dd>"}
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
