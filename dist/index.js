"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-sparse-arrays */
exports.default = (function () {
    var w = window;
    var ver;
    // @ts-ignore
    if (w.opera) {
        // @ts-ignore
        ver = w.opera.version().replace(/\d$/, '') - 0;
    }
    else {
        ver = parseFloat((/(?:IE |fox\/|ome\/|ion\/)(\d+\.\d)/.exec(navigator.userAgent) || [, 0])[1]);
    }
    return {
        //测试是否为ie或内核为trident，是则取得其版本号
        // @ts-ignore
        ie: !!(w.VBArray && Math.max(document.documentMode || 0, ver)),
        //测试是否为firefox，是则取得其版本号
        // @ts-ignore
        firefox: !!(w.netscape && ver),
        //测试是否为opera，是则取得其版本号
        // @ts-ignore
        opera: !!(w.opera && ver),
        //测试是否为chrome，是则取得其版本号
        // @ts-ignore
        chrome: !!(w.chrome && ver),
        //测试是否为safari，是则取得其版本号
        safari: /apple/i.test(navigator.vendor) && !!ver,
    };
})();
