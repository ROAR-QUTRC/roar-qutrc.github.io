selector_to_html = {"a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control3rcb6groups9SPARE_BUSE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control3rcb6groups9SPARE_BUSE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control3rcb6groups9SPARE_BUSE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control3rcb6groups9SPARE_BUSE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a0d3b3602e86aad5293497c304d184620abdfa5992d72c97f8bca39141c8d67550\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">SPARE_BUS</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control3rcb6groups9CONTACTORE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control3rcb6groups9CONTACTORE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control3rcb6groups9CONTACTORE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control3rcb6groups9CONTACTORE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a0d3b3602e86aad5293497c304d184620a3d99d56a4030cdb73d0d09f8c9f824a0\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">CONTACTOR</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control3rcb6groups7AUX_BUSE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control3rcb6groups7AUX_BUSE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control3rcb6groups7AUX_BUSE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control3rcb6groups7AUX_BUSE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a0d3b3602e86aad5293497c304d184620a4072e2f8322b3e7e5f06f942d68259fc\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">AUX_BUS</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control3rcb6groupsE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control3rcb6groupsE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control3rcb6groupsE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control3rcb6groupsE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a0d3b3602e86aad5293497c304d184620\"></span><span class=\"k\"><span class=\"pre\">enum</span></span><span class=\"w\"> </span><span class=\"k\"><span class=\"pre\">class</span></span><span class=\"w\"> </span><span class=\"sig-prename descclassname\"><span class=\"n\"><span class=\"pre\">hi_can</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">addressing</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">legacy</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">power</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">control</span></span><span class=\"p\"><span class=\"pre\">::</span></span><span class=\"n\"><span class=\"pre\">rcb</span></span><span class=\"p\"><span class=\"pre\">::</span></span></span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">groups</span></span></span><br/></dt><dd><p><em>Values:</em></p></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control3rcb6groups9DRIVE_BUSE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control3rcb6groups9DRIVE_BUSE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control3rcb6groups9DRIVE_BUSE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control3rcb6groups9DRIVE_BUSE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a0d3b3602e86aad5293497c304d184620a24ff5c045052252f33267811e4aee0f4\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">DRIVE_BUS</span></span></span><br/></dt><dd></dd>", "a[href=\"#_CPPv4N6hi_can10addressing6legacy5power7control3rcb6groups11COMPUTE_BUSE\"]": "<dt class=\"sig sig-object highlight cpp\" id=\"_CPPv4N6hi_can10addressing6legacy5power7control3rcb6groups11COMPUTE_BUSE\">\n<span id=\"_CPPv3N6hi_can10addressing6legacy5power7control3rcb6groups11COMPUTE_BUSE\"></span><span id=\"_CPPv2N6hi_can10addressing6legacy5power7control3rcb6groups11COMPUTE_BUSE\"></span><span class=\"target\" id=\"hi__can__address_8hpp_1a0d3b3602e86aad5293497c304d184620a372188af45ba86cc46a20eb08f7b7c50\"></span><span class=\"k\"><span class=\"pre\">enumerator</span></span><span class=\"w\"> </span><span class=\"sig-name descname\"><span class=\"n\"><span class=\"pre\">COMPUTE_BUS</span></span></span><br/></dt><dd></dd>"}
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
