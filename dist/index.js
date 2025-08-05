"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-sparse-arrays */
exports.default = (function () {
    var w = typeof window === 'undefined' ? null : window;
    var ver;
    // @ts-ignore
    if (w === null || w === void 0 ? void 0 : w.opera) {
        // @ts-ignore
        ver = w.opera.version().replace(/\d$/, '') - 0;
    }
    else {
        ver = parseFloat((/(?:IE |fox\/|ome\/|ion\/)(\d+\.\d)/.exec(navigator.userAgent) || [, 0])[1]);
    }
    return {
        //测试是否为ie或内核为trident，是则取得其版本号
        // @ts-ignore
        ie: !!((w === null || w === void 0 ? void 0 : w.VBArray) && Math.max(document.documentMode || 0, ver)),
        //测试是否为edge
        edge: navigator.userAgent.indexOf('Edge') > -1,
        //测试是否为firefox，是则取得其版本号
        // @ts-ignore
        firefox: !!((w === null || w === void 0 ? void 0 : w.netscape) && ver),
        //测试是否为opera，是则取得其版本号
        // @ts-ignore
        opera: !!((w === null || w === void 0 ? void 0 : w.opera) && ver),
        //测试是否为chrome，是则取得其版本号
        // @ts-ignore
        chrome: !!((w === null || w === void 0 ? void 0 : w.chrome) && ver),
        //测试是否为safari，是则取得其版本号
        safari: /apple/i.test(navigator.vendor) && !!ver,
    };
})();
