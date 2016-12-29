;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-qrcode" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M900.673695 899.594619 640.847042 899.594619l0 47.254234 307.067584 0L947.914626 639.804804l-47.240931 0L900.673695 899.594619zM121.194758 120.125915l236.204653 0L357.399411 72.919776 73.951781 72.919776l0 283.424094 47.242977 0L121.194758 120.125915zM121.194758 639.804804 73.951781 639.804804 73.951781 946.847829l283.447631 0 0-47.254234L121.194758 899.593596 121.194758 639.804804zM640.847042 72.919776l0 47.206138 259.826654 0 0 236.217956 47.240931 0L947.914626 72.919776 640.847042 72.919776zM73.951781 521.676383l873.962845 0 0-47.285956L73.951781 474.390427 73.951781 521.676383z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-menu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M927.450037 511.745197H95.961562c-17.662265 0-31.980365 14.3181-31.980365 31.980365s14.3181 31.980365 31.980365 31.980365h831.488475c17.662265 0 31.980365-14.3181 31.980365-31.980365s-14.3181-31.980365-31.980365-31.980365zM927.450037 191.942567H95.961562c-17.662265 0-31.980365 14.3181-31.980365 31.980365s14.3181 31.980365 31.980365 31.980366h831.488475c17.662265 0 31.980365-14.3181 31.980365-31.980366s-14.3181-31.980365-31.980365-31.980365zM927.450037 831.54885H95.961562c-17.662265 0-31.980365 14.3181-31.980365 31.980365s14.3181 31.980365 31.980365 31.980366h831.488475c17.662265 0 31.980365-14.3181 31.980365-31.980366s-14.3181-31.980365-31.980365-31.980365z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)