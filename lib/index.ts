/* eslint-disable no-sparse-arrays */
export default (function (): {
    ie: boolean;
    firefox: boolean;
    opera: boolean;
    chrome: boolean;
    safari: boolean;
} {
    const w = window;
    let ver: number;
    // @ts-ignore
    if (w.opera) {
        // @ts-ignore
        ver = w.opera.version().replace(/\d$/, '') - 0;
    } else {
        ver = parseFloat((/(?:IE |fox\/|ome\/|ion\/)(\d+\.\d)/.exec(navigator.userAgent) || [, 0])[1] as string);
    }

    return {
        //测试是否为ie或内核为trident，是则取得其版本号
        // @ts-ignore
        ie: !!(w.VBArray && Math.max(document.documentMode || 0, ver)), //内核trident
        //测试是否为firefox，是则取得其版本号
        // @ts-ignore
        firefox: !!(w.netscape && ver), //内核Gecko
        //测试是否为opera，是则取得其版本号
        // @ts-ignore
        opera: !!(w.opera && ver), //内核 Presto 9.5为Kestrel 10为Carakan
        //测试是否为chrome，是则取得其版本号
        // @ts-ignore
        chrome: !!(w.chrome && ver), //内核V8
        //测试是否为safari，是则取得其版本号
        safari: /apple/i.test(navigator.vendor) && !!ver, // 内核 WebCore
    };
})();
