!function (t) {
    var e, n, o, i, c, a,
        l = '<svg><symbol id="icon-gengduocaozuo" viewBox="0 0 1024 1024"><path d="M512 512m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z"  ></path><path d="M512 307.2m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z"  ></path><path d="M512 716.8m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z"  ></path></symbol><symbol id="icon-biaoqing" viewBox="0 0 1024 1024"><path d="M512 221.090909c160.581818 0 290.909091 130.327273 290.909091 290.909091S672.581818 802.909091 512 802.909091 221.090909 672.581818 221.090909 512 351.418182 221.090909 512 221.090909M512 186.181818C332.8 186.181818 186.181818 332.8 186.181818 512s146.618182 325.818182 325.818182 325.818182 325.818182-146.618182 325.818182-325.818182S691.2 186.181818 512 186.181818z" fill="" ></path><path d="M681.890909 558.545455c-16.290909 79.127273-86.109091 139.636364-169.890909 139.636363s-155.927273-60.509091-169.890909-139.636363h339.781818m39.563636-34.909091H302.545455c0 116.363636 93.090909 209.454545 209.454545 209.454545s209.454545-93.090909 209.454545-209.454545zM384 395.636364c-18.618182 0-34.909091 16.290909-34.909091 34.909091s16.290909 34.909091 34.909091 34.90909 34.909091-16.290909 34.909091-34.90909-16.290909-34.909091-34.909091-34.909091zM640 395.636364c-18.618182 0-34.909091 16.290909-34.909091 34.909091s16.290909 34.909091 34.909091 34.90909 34.909091-16.290909 34.909091-34.90909-16.290909-34.909091-34.909091-34.909091z" fill="" ></path></symbol><symbol id="icon-guanbi" viewBox="0 0 1024 1024"><path d="M551.424 512l195.072-195.072c9.728-9.728 9.728-25.6 0-36.864l-1.536-1.536c-9.728-9.728-25.6-9.728-35.328 0L514.56 475.136 319.488 280.064c-9.728-9.728-25.6-9.728-35.328 0l-1.536 1.536c-9.728 9.728-9.728 25.6 0 36.864L477.696 512 282.624 707.072c-9.728 9.728-9.728 25.6 0 36.864l1.536 1.536c9.728 9.728 25.6 9.728 35.328 0L514.56 548.864l195.072 195.072c9.728 9.728 25.6 9.728 35.328 0l1.536-1.536c9.728-9.728 9.728-25.6 0-36.864L551.424 512z" fill="#1A1A1A" ></path></symbol></svg>',
        d = (d = document.getElementsByTagName("script"))[d.length - 1].getAttribute("data-injectcss");
    if (d && !t.__iconfont__svg__cssinject__) {
        t.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (t) {
            console && console.log(t)
        }
    }

    function s() {
        c || (c = !0, o())
    }

    e = function () {
        var t, e, n;
        (n = document.createElement("div")).innerHTML = l, l = null, (e = n.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", t = e, (n = document.body).firstChild ? (e = n.firstChild).parentNode.insertBefore(t, e) : n.appendChild(t))
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(e, 0) : (n = function () {
        document.removeEventListener("DOMContentLoaded", n, !1), e()
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = e, i = t.document, c = !1, (a = function () {
        try {
            i.documentElement.doScroll("left")
        } catch (t) {
            return void setTimeout(a, 50)
        }
        s()
    })(), i.onreadystatechange = function () {
        "complete" == i.readyState && (i.onreadystatechange = null, s())
    })
}(window);