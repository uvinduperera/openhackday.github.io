function countdownTimers(t, e) {
  setInterval(function () {
    var n = (new Date).getTime(),
      r = (Date.parse(e) + 6048e5 - n) / 1e3;
    days = parseInt(r / 86400), r %= 86400, hours = parseInt(r / 3600), r %= 3600, minutes = parseInt(r / 60), seconds = parseInt(r % 60), countdown = days + "d:" + hours + "h:" + minutes + "m:" + seconds + "s", t.innerHTML = countdown
  }, 1e3)
}

function copyCodeToClipboard() {
  code = document.getElementById("winner-code"), code.select(), code.setSelectionRange(0, 99999), document.execCommand("copy")
}(function () {
  var t = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: {
          selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
          exclude: "form button"
        },
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]"
      }
    }).call(this)
  }).call(t);
  var e = t.Rails;
  (function () {
    (function () {
      var t;
      t = null, e.loadCSPNonce = function () {
        var e;
        return t = null != (e = document.querySelector("meta[name=csp-nonce]")) ? e.content : void 0
      }, e.cspNonce = function () {
        return null != t ? t : e.loadCSPNonce()
      }
    }).call(this),
      function () {
        var t, n;
        n = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector, e.matches = function (t, e) {
          return null != e.exclude ? n.call(t, e.selector) && !n.call(t, e.exclude) : n.call(t, e)
        }, t = "_ujsData", e.getData = function (e, n) {
          var r;
          return null != (r = e[t]) ? r[n] : void 0
        }, e.setData = function (e, n, r) {
          return null == e[t] && (e[t] = {}), e[t][n] = r
        }, e.$ = function (t) {
          return Array.prototype.slice.call(document.querySelectorAll(t))
        }
      }.call(this),
      function () {
        var t, n, r;
        t = e.$, r = e.csrfToken = function () {
          var t;
          return (t = document.querySelector("meta[name=csrf-token]")) && t.content
        }, n = e.csrfParam = function () {
          var t;
          return (t = document.querySelector("meta[name=csrf-param]")) && t.content
        }, e.CSRFProtection = function (t) {
          var e;
          if (null != (e = r())) return t.setRequestHeader("X-CSRF-Token", e)
        }, e.refreshCSRFTokens = function () {
          var e, i;
          if (i = r(), e = n(), null != i && null != e) return t('form input[name="' + e + '"]').forEach(function (t) {
            return t.value = i
          })
        }
      }.call(this),
      function () {
        var t, n, r, i;
        r = e.matches, "function" != typeof (t = window.CustomEvent) && ((t = function (t, e) {
          var n;
          return (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
        }).prototype = window.Event.prototype, i = t.prototype.preventDefault, t.prototype.preventDefault = function () {
          var t;
          return t = i.call(this), this.cancelable && !this.defaultPrevented && Object.defineProperty(this, "defaultPrevented", {
            get: function () {
              return !0
            }
          }), t
        }), n = e.fire = function (e, n, r) {
          var i;
          return i = new t(n, {
            bubbles: !0,
            cancelable: !0,
            detail: r
          }), e.dispatchEvent(i), !i.defaultPrevented
        }, e.stopEverything = function (t) {
          return n(t.target, "ujs:everythingStopped"), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation()
        }, e.delegate = function (t, e, n, i) {
          return t.addEventListener(n, function (t) {
            var n;
            for (n = t.target; n instanceof Element && !r(n, e);) n = n.parentNode;
            if (n instanceof Element && !1 === i.call(n, t)) return t.preventDefault(), t.stopPropagation()
          })
        }
      }.call(this),
      function () {
        var t, n, r, i, o, s;
        i = e.cspNonce, n = e.CSRFProtection, e.fire, t = {
          "*": "*/*",
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        }, e.ajax = function (t) {
          var e;
          return t = o(t), e = r(t, function () {
            var n, r;
            return r = s(null != (n = e.response) ? n : e.responseText, e.getResponseHeader("Content-Type")), 2 === Math.floor(e.status / 100) ? "function" == typeof t.success && t.success(r, e.statusText, e) : "function" == typeof t.error && t.error(r, e.statusText, e), "function" == typeof t.complete ? t.complete(e, e.statusText) : void 0
          }), !(null != t.beforeSend && !t.beforeSend(e, t)) && (e.readyState === XMLHttpRequest.OPENED ? e.send(t.data) : void 0)
        }, o = function (e) {
          return e.url = e.url || location.href, e.type = e.type.toUpperCase(), "GET" === e.type && e.data && (e.url.indexOf("?") < 0 ? e.url += "?" + e.data : e.url += "&" + e.data), null == t[e.dataType] && (e.dataType = "*"), e.accept = t[e.dataType], "*" !== e.dataType && (e.accept += ", */*; q=0.01"), e
        }, r = function (t, e) {
          var r;
          return (r = new XMLHttpRequest).open(t.type, t.url, !0), r.setRequestHeader("Accept", t.accept), "string" == typeof t.data && r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), t.crossDomain || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n(r), r.withCredentials = !!t.withCredentials, r.onreadystatechange = function () {
            if (r.readyState === XMLHttpRequest.DONE) return e(r)
          }, r
        }, s = function (t, e) {
          var n, r;
          if ("string" == typeof t && "string" == typeof e)
            if (e.match(/\bjson\b/)) try {
                t = JSON.parse(t)
              } catch (o) {} else if (e.match(/\b(?:java|ecma)script\b/))(r = document.createElement("script")).setAttribute("nonce", i()), r.text = t, document.head.appendChild(r).parentNode.removeChild(r);
              else if (e.match(/\b(xml|html|svg)\b/)) {
            n = new DOMParser, e = e.replace(/;.+/, "");
            try {
              t = n.parseFromString(t, e)
            } catch (o) {}
          }
          return t
        }, e.href = function (t) {
          return t.href
        }, e.isCrossDomain = function (t) {
          var e, n;
          (e = document.createElement("a")).href = location.href, n = document.createElement("a");
          try {
            return n.href = t, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
          } catch (r) {
            return r, !0
          }
        }
      }.call(this),
      function () {
        var t, n;
        t = e.matches, n = function (t) {
          return Array.prototype.slice.call(t)
        }, e.serializeElement = function (e, r) {
          var i, o;
          return i = [e], t(e, "form") && (i = n(e.elements)), o = [], i.forEach(function (e) {
            if (e.name && !e.disabled) return t(e, "select") ? n(e.options).forEach(function (t) {
              if (t.selected) return o.push({
                name: e.name,
                value: t.value
              })
            }) : e.checked || -1 === ["radio", "checkbox", "submit"].indexOf(e.type) ? o.push({
              name: e.name,
              value: e.value
            }) : void 0
          }), r && o.push(r), o.map(function (t) {
            return null != t.name ? encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value) : t
          }).join("&")
        }, e.formElements = function (e, r) {
          return t(e, "form") ? n(e.elements).filter(function (e) {
            return t(e, r)
          }) : n(e.querySelectorAll(r))
        }
      }.call(this),
      function () {
        var t, n, r;
        n = e.fire, r = e.stopEverything, e.handleConfirm = function (e) {
          if (!t(this)) return r(e)
        }, t = function (t) {
          var e, r, i;
          if (!(i = t.getAttribute("data-confirm"))) return !0;
          if (e = !1, n(t, "confirm")) {
            try {
              e = confirm(i)
            } catch (o) {}
            r = n(t, "confirm:complete", [e])
          }
          return e && r
        }
      }.call(this),
      function () {
        var t, n, r, i, o, s, a, u, l, c, f;
        l = e.matches, u = e.getData, c = e.setData, f = e.stopEverything, a = e.formElements, e.handleDisabledElement = function (t) {
          if (this.disabled) return f(t)
        }, e.enableElement = function (t) {
          var n;
          return n = t instanceof Event ? t.target : t, l(n, e.linkDisableSelector) ? s(n) : l(n, e.buttonDisableSelector) || l(n, e.formEnableSelector) ? i(n) : l(n, e.formSubmitSelector) ? o(n) : void 0
        }, e.disableElement = function (i) {
          var o;
          return o = i instanceof Event ? i.target : i, l(o, e.linkDisableSelector) ? r(o) : l(o, e.buttonDisableSelector) || l(o, e.formDisableSelector) ? t(o) : l(o, e.formSubmitSelector) ? n(o) : void 0
        }, r = function (t) {
          var e;
          return null != (e = t.getAttribute("data-disable-with")) && (c(t, "ujs:enable-with", t.innerHTML), t.innerHTML = e), t.addEventListener("click", f), c(t, "ujs:disabled", !0)
        }, s = function (t) {
          var e;
          return null != (e = u(t, "ujs:enable-with")) && (t.innerHTML = e, c(t, "ujs:enable-with", null)), t.removeEventListener("click", f), c(t, "ujs:disabled", null)
        }, n = function (n) {
          return a(n, e.formDisableSelector).forEach(t)
        }, t = function (t) {
          var e;
          return null != (e = t.getAttribute("data-disable-with")) && (l(t, "button") ? (c(t, "ujs:enable-with", t.innerHTML), t.innerHTML = e) : (c(t, "ujs:enable-with", t.value), t.value = e)), t.disabled = !0, c(t, "ujs:disabled", !0)
        }, o = function (t) {
          return a(t, e.formEnableSelector).forEach(i)
        }, i = function (t) {
          var e;
          return null != (e = u(t, "ujs:enable-with")) && (l(t, "button") ? t.innerHTML = e : t.value = e, c(t, "ujs:enable-with", null)), t.disabled = !1, c(t, "ujs:disabled", null)
        }
      }.call(this),
      function () {
        var t;
        t = e.stopEverything, e.handleMethod = function (n) {
          var r, i, o, s, a, u, l;
          if (l = (u = this).getAttribute("data-method")) return a = e.href(u), i = e.csrfToken(), r = e.csrfParam(), o = document.createElement("form"), s = "<input name='_method' value='" + l + "' type='hidden' />", null == r || null == i || e.isCrossDomain(a) || (s += "<input name='" + r + "' value='" + i + "' type='hidden' />"), s += '<input type="submit" />', o.method = "post", o.action = a, o.target = u.target, o.innerHTML = s, o.style.display = "none", document.body.appendChild(o), o.querySelector('[type="submit"]').click(), t(n)
        }
      }.call(this),
      function () {
        var t, n, r, i, o, s, a, u, l, c = [].slice;
        s = e.matches, r = e.getData, u = e.setData, n = e.fire, l = e.stopEverything, t = e.ajax, i = e.isCrossDomain, a = e.serializeElement, o = function (t) {
          var e;
          return null != (e = t.getAttribute("data-remote")) && "false" !== e
        }, e.handleRemote = function (f) {
          var h, d, p, m, g, v, y;
          return !o(m = this) || (n(m, "ajax:before") ? (y = m.getAttribute("data-with-credentials"), p = m.getAttribute("data-type") || "script", s(m, e.formSubmitSelector) ? (h = r(m, "ujs:submit-button"), g = r(m, "ujs:submit-button-formmethod") || m.method, v = r(m, "ujs:submit-button-formaction") || m.getAttribute("action") || location.href, "GET" === g.toUpperCase() && (v = v.replace(/\?.*$/, "")), "multipart/form-data" === m.enctype ? (d = new FormData(m), null != h && d.append(h.name, h.value)) : d = a(m, h), u(m, "ujs:submit-button", null), u(m, "ujs:submit-button-formmethod", null), u(m, "ujs:submit-button-formaction", null)) : s(m, e.buttonClickSelector) || s(m, e.inputChangeSelector) ? (g = m.getAttribute("data-method"), v = m.getAttribute("data-url"), d = a(m, m.getAttribute("data-params"))) : (g = m.getAttribute("data-method"), v = e.href(m), d = m.getAttribute("data-params")), t({
            type: g || "GET",
            url: v,
            data: d,
            dataType: p,
            beforeSend: function (t, e) {
              return n(m, "ajax:beforeSend", [t, e]) ? n(m, "ajax:send", [t]) : (n(m, "ajax:stopped"), !1)
            },
            success: function () {
              var t;
              return t = 1 <= arguments.length ? c.call(arguments, 0) : [], n(m, "ajax:success", t)
            },
            error: function () {
              var t;
              return t = 1 <= arguments.length ? c.call(arguments, 0) : [], n(m, "ajax:error", t)
            },
            complete: function () {
              var t;
              return t = 1 <= arguments.length ? c.call(arguments, 0) : [], n(m, "ajax:complete", t)
            },
            crossDomain: i(v),
            withCredentials: null != y && "false" !== y
          }), l(f)) : (n(m, "ajax:stopped"), !1))
        }, e.formSubmitButtonClick = function () {
          var t, e;
          if (e = (t = this).form) return t.name && u(e, "ujs:submit-button", {
            name: t.name,
            value: t.value
          }), u(e, "ujs:formnovalidate-button", t.formNoValidate), u(e, "ujs:submit-button-formaction", t.getAttribute("formaction")), u(e, "ujs:submit-button-formmethod", t.getAttribute("formmethod"))
        }, e.preventInsignificantClick = function (t) {
          var e, n, r, i;
          if (i = ((r = this).getAttribute("data-method") || "GET").toUpperCase(), e = r.getAttribute("data-params"), n = (t.metaKey || t.ctrlKey) && "GET" === i && !e, !(0 === t.button) || n) return t.stopImmediatePropagation()
        }
      }.call(this),
      function () {
        var t, n, r, i, o, s, a, u, l, c, f, h, d, p, m;
        if (s = e.fire, r = e.delegate, u = e.getData, t = e.$, m = e.refreshCSRFTokens, n = e.CSRFProtection, d = e.loadCSPNonce, o = e.enableElement, i = e.disableElement, c = e.handleDisabledElement, l = e.handleConfirm, p = e.preventInsignificantClick, h = e.handleRemote, a = e.formSubmitButtonClick, f = e.handleMethod, "undefined" != typeof jQuery && null !== jQuery && null != jQuery.ajax) {
          if (jQuery.rails) throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
          jQuery.rails = e, jQuery.ajaxPrefilter(function (t, e, r) {
            if (!t.crossDomain) return n(r)
          })
        }
        e.start = function () {
          if (window._rails_loaded) throw new Error("rails-ujs has already been loaded!");
          return window.addEventListener("pageshow", function () {
            return t(e.formEnableSelector).forEach(function (t) {
              if (u(t, "ujs:disabled")) return o(t)
            }), t(e.linkDisableSelector).forEach(function (t) {
              if (u(t, "ujs:disabled")) return o(t)
            })
          }), r(document, e.linkDisableSelector, "ajax:complete", o), r(document, e.linkDisableSelector, "ajax:stopped", o), r(document, e.buttonDisableSelector, "ajax:complete", o), r(document, e.buttonDisableSelector, "ajax:stopped", o), r(document, e.linkClickSelector, "click", p), r(document, e.linkClickSelector, "click", c), r(document, e.linkClickSelector, "click", l), r(document, e.linkClickSelector, "click", i), r(document, e.linkClickSelector, "click", h), r(document, e.linkClickSelector, "click", f), r(document, e.buttonClickSelector, "click", p), r(document, e.buttonClickSelector, "click", c), r(document, e.buttonClickSelector, "click", l), r(document, e.buttonClickSelector, "click", i), r(document, e.buttonClickSelector, "click", h), r(document, e.inputChangeSelector, "change", c), r(document, e.inputChangeSelector, "change", l), r(document, e.inputChangeSelector, "change", h), r(document, e.formSubmitSelector, "submit", c), r(document, e.formSubmitSelector, "submit", l), r(document, e.formSubmitSelector, "submit", h), r(document, e.formSubmitSelector, "submit", function (t) {
            return setTimeout(function () {
              return i(t)
            }, 13)
          }), r(document, e.formSubmitSelector, "ajax:send", i), r(document, e.formSubmitSelector, "ajax:complete", o), r(document, e.formInputClickSelector, "click", p), r(document, e.formInputClickSelector, "click", c), r(document, e.formInputClickSelector, "click", l), r(document, e.formInputClickSelector, "click", a), document.addEventListener("DOMContentLoaded", m), document.addEventListener("DOMContentLoaded", d), window._rails_loaded = !0
        }, window.Rails === e && s(document, "rails:attachBindings") && e.start()
      }.call(this)
  }).call(this), "object" == typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e)
}).call(this),
  function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.ActiveStorage = {})
  }(this, function (t) {
    "use strict";

    function e(t, e) {
      return t(e = {
        exports: {}
      }, e.exports), e.exports
    }

    function n(t) {
      var e = i(document.head, 'meta[name="' + t + '"]');
      if (e) return e.getAttribute("content")
    }

    function r(t, e) {
      return "string" == typeof t && (e = t, t = document), s(t.querySelectorAll(e))
    }

    function i(t, e) {
      return "string" == typeof t && (e = t, t = document), t.querySelector(e)
    }

    function o(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        r = t.disabled,
        i = n.bubbles,
        o = n.cancelable,
        s = n.detail,
        a = document.createEvent("Event");
      a.initEvent(e, i || !0, o || !0), a.detail = s || {};
      try {
        t.disabled = !1, t.dispatchEvent(a)
      } finally {
        t.disabled = r
      }
      return a
    }

    function s(t) {
      return Array.isArray(t) ? t : Array.from ? Array.from(t) : [].slice.call(t)
    }

    function a(t, e) {
      if (t && "function" == typeof t[e]) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        return t[e].apply(t, r)
      }
    }

    function u() {
      D || (D = !0, document.addEventListener("click", l, !0), document.addEventListener("submit", c), document.addEventListener("ajax:before", f))
    }

    function l(t) {
      var e = t.target;
      "INPUT" != e.tagName && "BUTTON" != e.tagName || "submit" != e.type || !e.form || N.set(e.form, e)
    }

    function c(t) {
      h(t)
    }

    function f(t) {
      "FORM" == t.target.tagName && h(t)
    }

    function h(t) {
      var e = t.target;
      if (e.hasAttribute(j)) t.preventDefault();
      else {
        var n = new A(e),
          r = n.inputs;
        r.length && (t.preventDefault(), e.setAttribute(j, ""), r.forEach(p), n.start(function (t) {
          e.removeAttribute(j), t ? r.forEach(m) : d(e)
        }))
      }
    }

    function d(t) {
      var e = N.get(t) || i(t, "input[type=submit], button[type=submit]");
      if (e) {
        var n = e.disabled;
        e.disabled = !1, e.focus(), e.click(), e.disabled = n
      } else(e = document.createElement("input")).type = "submit", e.style.display = "none", t.appendChild(e), e.click(), t.removeChild(e);
      N["delete"](t)
    }

    function p(t) {
      t.disabled = !0
    }

    function m(t) {
      t.disabled = !1
    }

    function g() {
      window.ActiveStorage && u()
    }
    var v = e(function (t) {
        var e;
        e = function (t) {
          function e(t, e) {
            var n = t[0],
              r = t[1],
              i = t[2],
              o = t[3];
            r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + e[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + e[1] - 389564586 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + e[2] + 606105819 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + e[3] - 1044525330 | 0) << 22 | r >>> 10) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + e[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + e[5] + 1200080426 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + e[6] - 1473231341 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + e[7] - 45705983 | 0) << 22 | r >>> 10) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + e[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + e[9] - 1958414417 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + e[10] - 42063 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + e[11] - 1990404162 | 0) << 22 | r >>> 10) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + e[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + e[13] - 40341101 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + e[14] - 1502002290 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + e[15] + 1236535329 | 0) << 22 | r >>> 10) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + e[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + e[6] - 1069501632 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + e[11] + 643717713 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + e[0] - 373897302 | 0) << 20 | r >>> 12) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + e[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + e[10] + 38016083 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + e[15] - 660478335 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + e[4] - 405537848 | 0) << 20 | r >>> 12) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + e[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + e[14] - 1019803690 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + e[3] - 187363961 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + e[8] + 1163531501 | 0) << 20 | r >>> 12) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + e[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + e[2] - 51403784 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + e[7] + 1735328473 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + e[12] - 1926607734 | 0) << 20 | r >>> 12) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + e[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + e[8] - 2022574463 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + e[11] + 1839030562 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + e[14] - 35309556 | 0) << 23 | r >>> 9) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + e[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + e[4] + 1272893353 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + e[7] - 155497632 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + e[10] - 1094730640 | 0) << 23 | r >>> 9) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + e[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + e[0] - 358537222 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + e[3] - 722521979 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + e[6] + 76029189 | 0) << 23 | r >>> 9) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + e[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + e[12] - 421815835 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + e[15] + 530742520 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + e[2] - 995338651 | 0) << 23 | r >>> 9) + i | 0, r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + e[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + e[7] + 1126891415 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + e[14] - 1416354905 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + e[5] - 57434055 | 0) << 21 | r >>> 11) + i | 0, r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + e[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + e[3] - 1894986606 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + e[10] - 1051523 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + e[1] - 2054922799 | 0) << 21 | r >>> 11) + i | 0, r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + e[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + e[15] - 30611744 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + e[6] - 1560198380 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + e[13] + 1309151649 | 0) << 21 | r >>> 11) + i | 0, r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + e[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + e[11] - 1120210379 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + e[2] + 718787259 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + e[9] - 343485551 | 0) << 21 | r >>> 11) + i | 0, t[0] = n + t[0] | 0, t[1] = r + t[1] | 0, t[2] = i + t[2] | 0, t[3] = o + t[3] | 0
          }

          function n(t) {
            var e, n = [];
            for (e = 0; e < 64; e += 4) n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
            return n
          }

          function r(t) {
            var e, n = [];
            for (e = 0; e < 64; e += 4) n[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
            return n
          }

          function i(t) {
            var r, i, o, s, a, u, l = t.length,
              c = [1732584193, -271733879, -1732584194, 271733878];
            for (r = 64; r <= l; r += 64) e(c, n(t.substring(r - 64, r)));
            for (i = (t = t.substring(r - 64)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < i; r += 1) o[r >> 2] |= t.charCodeAt(r) << (r % 4 << 3);
            if (o[r >> 2] |= 128 << (r % 4 << 3), r > 55)
              for (e(c, o), r = 0; r < 16; r += 1) o[r] = 0;
            return s = (s = 8 * l).toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16), u = parseInt(s[1], 16) || 0, o[14] = a, o[15] = u, e(c, o), c
          }

          function o(t) {
            var n, i, o, s, a, u, l = t.length,
              c = [1732584193, -271733879, -1732584194, 271733878];
            for (n = 64; n <= l; n += 64) e(c, r(t.subarray(n - 64, n)));
            for (i = (t = n - 64 < l ? t.subarray(n - 64) : new Uint8Array(0)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < i; n += 1) o[n >> 2] |= t[n] << (n % 4 << 3);
            if (o[n >> 2] |= 128 << (n % 4 << 3), n > 55)
              for (e(c, o), n = 0; n < 16; n += 1) o[n] = 0;
            return s = (s = 8 * l).toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16), u = parseInt(s[1], 16) || 0, o[14] = a, o[15] = u, e(c, o), c
          }

          function s(t) {
            var e, n = "";
            for (e = 0; e < 4; e += 1) n += p[t >> 8 * e + 4 & 15] + p[t >> 8 * e & 15];
            return n
          }

          function a(t) {
            var e;
            for (e = 0; e < t.length; e += 1) t[e] = s(t[e]);
            return t.join("")
          }

          function u(t) {
            return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t
          }

          function l(t, e) {
            var n, r = t.length,
              i = new ArrayBuffer(r),
              o = new Uint8Array(i);
            for (n = 0; n < r; n += 1) o[n] = t.charCodeAt(n);
            return e ? o : i
          }

          function c(t) {
            return String.fromCharCode.apply(null, new Uint8Array(t))
          }

          function f(t, e, n) {
            var r = new Uint8Array(t.byteLength + e.byteLength);
            return r.set(new Uint8Array(t)), r.set(new Uint8Array(e), t.byteLength), n ? r : r.buffer
          }

          function h(t) {
            var e, n = [],
              r = t.length;
            for (e = 0; e < r - 1; e += 2) n.push(parseInt(t.substr(e, 2), 16));
            return String.fromCharCode.apply(String, n)
          }

          function d() {
            this.reset()
          }
          var p = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
          return a(i("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function () {
            function e(t, e) {
              return (t = 0 | t || 0) < 0 ? Math.max(t + e, 0) : Math.min(t, e)
            }
            ArrayBuffer.prototype.slice = function (n, r) {
              var i, o, s, a, u = this.byteLength,
                l = e(n, u),
                c = u;
              return r !== t && (c = e(r, u)), l > c ? new ArrayBuffer(0) : (i = c - l, o = new ArrayBuffer(i), s = new Uint8Array(o), a = new Uint8Array(this, l, i), s.set(a), o)
            }
          }(), d.prototype.append = function (t) {
            return this.appendBinary(u(t)), this
          }, d.prototype.appendBinary = function (t) {
            this._buff += t, this._length += t.length;
            var r, i = this._buff.length;
            for (r = 64; r <= i; r += 64) e(this._hash, n(this._buff.substring(r - 64, r)));
            return this._buff = this._buff.substring(r - 64), this
          }, d.prototype.end = function (t) {
            var e, n, r = this._buff,
              i = r.length,
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (e = 0; e < i; e += 1) o[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
            return this._finish(o, i), n = a(this._hash), t && (n = h(n)), this.reset(), n
          }, d.prototype.reset = function () {
            return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
          }, d.prototype.getState = function () {
            return {
              buff: this._buff,
              length: this._length,
              hash: this._hash
            }
          }, d.prototype.setState = function (t) {
            return this._buff = t.buff, this._length = t.length, this._hash = t.hash, this
          }, d.prototype.destroy = function () {
            delete this._hash, delete this._buff, delete this._length
          }, d.prototype._finish = function (t, n) {
            var r, i, o, s = n;
            if (t[s >> 2] |= 128 << (s % 4 << 3), s > 55)
              for (e(this._hash, t), s = 0; s < 16; s += 1) t[s] = 0;
            r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(r[2], 16), o = parseInt(r[1], 16) || 0, t[14] = i, t[15] = o, e(this._hash, t)
          }, d.hash = function (t, e) {
            return d.hashBinary(u(t), e)
          }, d.hashBinary = function (t, e) {
            var n = a(i(t));
            return e ? h(n) : n
          }, d.ArrayBuffer = function () {
            this.reset()
          }, d.ArrayBuffer.prototype.append = function (t) {
            var n, i = f(this._buff.buffer, t, !0),
              o = i.length;
            for (this._length += t.byteLength, n = 64; n <= o; n += 64) e(this._hash, r(i.subarray(n - 64, n)));
            return this._buff = n - 64 < o ? new Uint8Array(i.buffer.slice(n - 64)) : new Uint8Array(0), this
          }, d.ArrayBuffer.prototype.end = function (t) {
            var e, n, r = this._buff,
              i = r.length,
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (e = 0; e < i; e += 1) o[e >> 2] |= r[e] << (e % 4 << 3);
            return this._finish(o, i), n = a(this._hash), t && (n = h(n)), this.reset(), n
          }, d.ArrayBuffer.prototype.reset = function () {
            return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
          }, d.ArrayBuffer.prototype.getState = function () {
            var t = d.prototype.getState.call(this);
            return t.buff = c(t.buff), t
          }, d.ArrayBuffer.prototype.setState = function (t) {
            return t.buff = l(t.buff, !0), d.prototype.setState.call(this, t)
          }, d.ArrayBuffer.prototype.destroy = d.prototype.destroy, d.ArrayBuffer.prototype._finish = d.prototype._finish, d.ArrayBuffer.hash = function (t, e) {
            var n = a(o(new Uint8Array(t)));
            return e ? h(n) : n
          }, d
        }, t.exports = e()
      }),
      y = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      },
      b = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }(),
      w = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
      x = function () {
        function t(e) {
          y(this, t), this.file = e, this.chunkSize = 2097152, this.chunkCount = Math.ceil(this.file.size / this.chunkSize), this.chunkIndex = 0
        }
        return b(t, null, [{
          key: "create",
          value: function (e, n) {
            new t(e).create(n)
          }
        }]), b(t, [{
          key: "create",
          value: function (t) {
            var e = this;
            this.callback = t, this.md5Buffer = new v.ArrayBuffer, this.fileReader = new FileReader, this.fileReader.addEventListener("load", function (t) {
              return e.fileReaderDidLoad(t)
            }), this.fileReader.addEventListener("error", function (t) {
              return e.fileReaderDidError(t)
            }), this.readNextChunk()
          }
        }, {
          key: "fileReaderDidLoad",
          value: function (t) {
            if (this.md5Buffer.append(t.target.result), !this.readNextChunk()) {
              var e = this.md5Buffer.end(!0),
                n = btoa(e);
              this.callback(null, n)
            }
          }
        }, {
          key: "fileReaderDidError",
          value: function () {
            this.callback("Error reading " + this.file.name)
          }
        }, {
          key: "readNextChunk",
          value: function () {
            if (this.chunkIndex < this.chunkCount || 0 == this.chunkIndex && 0 == this.chunkCount) {
              var t = this.chunkIndex * this.chunkSize,
                e = Math.min(t + this.chunkSize, this.file.size),
                n = w.call(this.file, t, e);
              return this.fileReader.readAsArrayBuffer(n), this.chunkIndex++, !0
            }
            return !1
          }
        }]), t
      }(),
      E = function () {
        function t(e, r, i) {
          var o = this;
          y(this, t), this.file = e, this.attributes = {
            filename: e.name,
            content_type: e.type,
            byte_size: e.size,
            checksum: r
          }, this.xhr = new XMLHttpRequest, this.xhr.open("POST", i, !0), this.xhr.responseType = "json", this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.setRequestHeader("Accept", "application/json"), this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"), this.xhr.setRequestHeader("X-CSRF-Token", n("csrf-token")), this.xhr.addEventListener("load", function (t) {
            return o.requestDidLoad(t)
          }), this.xhr.addEventListener("error", function (t) {
            return o.requestDidError(t)
          })
        }
        return b(t, [{
          key: "create",
          value: function (t) {
            this.callback = t, this.xhr.send(JSON.stringify({
              blob: this.attributes
            }))
          }
        }, {
          key: "requestDidLoad",
          value: function (t) {
            if (this.status >= 200 && this.status < 300) {
              var e = this.response,
                n = e.direct_upload;
              delete e.direct_upload, this.attributes = e, this.directUploadData = n, this.callback(null, this.toJSON())
            } else this.requestDidError(t)
          }
        }, {
          key: "requestDidError",
          value: function () {
            this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status)
          }
        }, {
          key: "toJSON",
          value: function () {
            var t = {};
            for (var e in this.attributes) t[e] = this.attributes[e];
            return t
          }
        }, {
          key: "status",
          get: function () {
            return this.xhr.status
          }
        }, {
          key: "response",
          get: function () {
            var t = this.xhr,
              e = t.responseType,
              n = t.response;
            return "json" == e ? n : JSON.parse(n)
          }
        }]), t
      }(),
      S = function () {
        function t(e) {
          var n = this;
          y(this, t), this.blob = e, this.file = e.file;
          var r = e.directUploadData,
            i = r.url,
            o = r.headers;
          for (var s in this.xhr = new XMLHttpRequest, this.xhr.open("PUT", i, !0), this.xhr.responseType = "text", o) this.xhr.setRequestHeader(s, o[s]);
          this.xhr.addEventListener("load", function (t) {
            return n.requestDidLoad(t)
          }), this.xhr.addEventListener("error", function (t) {
            return n.requestDidError(t)
          })
        }
        return b(t, [{
          key: "create",
          value: function (t) {
            this.callback = t, this.xhr.send(this.file.slice())
          }
        }, {
          key: "requestDidLoad",
          value: function (t) {
            var e = this.xhr,
              n = e.status,
              r = e.response;
            n >= 200 && n < 300 ? this.callback(null, r) : this.requestDidError(t)
          }
        }, {
          key: "requestDidError",
          value: function () {
            this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status)
          }
        }]), t
      }(),
      C = 0,
      k = function () {
        function t(e, n, r) {
          y(this, t), this.id = ++C, this.file = e, this.url = n, this.delegate = r
        }
        return b(t, [{
          key: "create",
          value: function (t) {
            var e = this;
            x.create(this.file, function (n, r) {
              if (n) t(n);
              else {
                var i = new E(e.file, r, e.url);
                a(e.delegate, "directUploadWillCreateBlobWithXHR", i.xhr), i.create(function (n) {
                  if (n) t(n);
                  else {
                    var r = new S(i);
                    a(e.delegate, "directUploadWillStoreFileWithXHR", r.xhr), r.create(function (e) {
                      e ? t(e) : t(null, i.toJSON())
                    })
                  }
                })
              }
            })
          }
        }]), t
      }(),
      T = function () {
        function t(e, n) {
          y(this, t), this.input = e, this.file = n, this.directUpload = new k(this.file, this.url, this), this.dispatch("initialize")
        }
        return b(t, [{
          key: "start",
          value: function (t) {
            var e = this,
              n = document.createElement("input");
            n.type = "hidden", n.name = this.input.name, this.input.insertAdjacentElement("beforebegin", n), this.dispatch("start"), this.directUpload.create(function (r, i) {
              r ? (n.parentNode.removeChild(n), e.dispatchError(r)) : n.value = i.signed_id, e.dispatch("end"), t(r)
            })
          }
        }, {
          key: "uploadRequestDidProgress",
          value: function (t) {
            var e = t.loaded / t.total * 100;
            e && this.dispatch("progress", {
              progress: e
            })
          }
        }, {
          key: "dispatch",
          value: function (t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return e.file = this.file, e.id = this.directUpload.id, o(this.input, "direct-upload:" + t, {
              detail: e
            })
          }
        }, {
          key: "dispatchError",
          value: function (t) {
            this.dispatch("error", {
              error: t
            }).defaultPrevented || alert(t)
          }
        }, {
          key: "directUploadWillCreateBlobWithXHR",
          value: function (t) {
            this.dispatch("before-blob-request", {
              xhr: t
            })
          }
        }, {
          key: "directUploadWillStoreFileWithXHR",
          value: function (t) {
            var e = this;
            this.dispatch("before-storage-request", {
              xhr: t
            }), t.upload.addEventListener("progress", function (t) {
              return e.uploadRequestDidProgress(t)
            })
          }
        }, {
          key: "url",
          get: function () {
            return this.input.getAttribute("data-direct-upload-url")
          }
        }]), t
      }(),
      L = "input[type=file][data-direct-upload-url]:not([disabled])",
      A = function () {
        function t(e) {
          y(this, t), this.form = e, this.inputs = r(e, L).filter(function (t) {
            return t.files.length
          })
        }
        return b(t, [{
          key: "start",
          value: function (t) {
            var e = this,
              n = this.createDirectUploadControllers(),
              r = function i() {
                var r = n.shift();
                r ? r.start(function (n) {
                  n ? (t(n), e.dispatch("end")) : i()
                }) : (t(), e.dispatch("end"))
              };
            this.dispatch("start"), r()
          }
        }, {
          key: "createDirectUploadControllers",
          value: function () {
            var t = [];
            return this.inputs.forEach(function (e) {
              s(e.files).forEach(function (n) {
                var r = new T(e, n);
                t.push(r)
              })
            }), t
          }
        }, {
          key: "dispatch",
          value: function (t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return o(this.form, "direct-uploads:" + t, {
              detail: e
            })
          }
        }]), t
      }(),
      j = "data-direct-uploads-processing",
      N = new WeakMap,
      D = !1;
    setTimeout(g, 1), t.start = u, t.DirectUpload = k, Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }),
  /*
  Turbolinks 5.2.0
  Copyright © 2018 Basecamp, LLC
   */
  function () {
    var t = this;
    (function () {
      (function () {
        this.Turbolinks = {
          supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
          visit: function (t, n) {
            return e.controller.visit(t, n)
          },
          clearCache: function () {
            return e.controller.clearCache()
          },
          setProgressBarDelay: function (t) {
            return e.controller.setProgressBarDelay(t)
          }
        }
      }).call(this)
    }).call(t);
    var e = t.Turbolinks;
    (function () {
      (function () {
        var t, n, r, i = [].slice;
        e.copyObject = function (t) {
          var e, n, r;
          for (e in n = {}, t) r = t[e], n[e] = r;
          return n
        }, e.closest = function (e, n) {
          return t.call(e, n)
        }, t = function () {
          var t;
          return null != (t = document.documentElement.closest) ? t : function (t) {
            var e;
            for (e = this; e;) {
              if (e.nodeType === Node.ELEMENT_NODE && n.call(e, t)) return e;
              e = e.parentNode
            }
          }
        }(), e.defer = function (t) {
          return setTimeout(t, 1)
        }, e.throttle = function (t) {
          var e;
          return e = null,
            function () {
              var n, r;
              return n = 1 <= arguments.length ? i.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame((r = this, function () {
                return e = null, t.apply(r, n)
              }))
            }
        }, e.dispatch = function (t, e) {
          var n, i, o, s, a, u;
          return u = (a = null != e ? e : {}).target, n = a.cancelable, i = a.data, (o = document.createEvent("Events")).initEvent(t, !0, !0 === n), o.data = null != i ? i : {}, o.cancelable && !r && (s = o.preventDefault, o.preventDefault = function () {
            return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
              get: function () {
                return !0
              }
            }), s.call(this)
          }), (null != u ? u : document).dispatchEvent(o), o
        }, r = function () {
          var t;
          return (t = document.createEvent("Events")).initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented
        }(), e.match = function (t, e) {
          return n.call(t, e)
        }, n = function () {
          var t, e, n, r;
          return null != (e = null != (n = null != (r = (t = document.documentElement).matchesSelector) ? r : t.webkitMatchesSelector) ? n : t.msMatchesSelector) ? e : t.mozMatchesSelector
        }(), e.uuid = function () {
          var t, e, n;
          for (n = "", t = e = 1; 36 >= e; t = ++e) n += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
          return n
        }
      }).call(this),
        function () {
          e.Location = function () {
            function t(t) {
              var e, n;
              null == t && (t = ""), (n = document.createElement("a")).href = t.toString(), this.absoluteURL = n.href, 2 > (e = n.hash.length) ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = n.hash.slice(1))
            }
            var e, n, r, i;
            return t.wrap = function (t) {
              return t instanceof this ? t : new this(t)
            }, t.prototype.getOrigin = function () {
              return this.absoluteURL.split("/", 3).join("/")
            }, t.prototype.getPath = function () {
              var t, e;
              return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/"
            }, t.prototype.getPathComponents = function () {
              return this.getPath().split("/").slice(1)
            }, t.prototype.getLastPathComponent = function () {
              return this.getPathComponents().slice(-1)[0]
            }, t.prototype.getExtension = function () {
              var t, e;
              return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : ""
            }, t.prototype.isHTML = function () {
              return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
            }, t.prototype.isPrefixedBy = function (t) {
              var e;
              return e = n(t), this.isEqualTo(t) || i(this.absoluteURL, e)
            }, t.prototype.isEqualTo = function (t) {
              return this.absoluteURL === (null != t ? t.absoluteURL : void 0)
            }, t.prototype.toCacheKey = function () {
              return this.requestURL
            }, t.prototype.toJSON = function () {
              return this.absoluteURL
            }, t.prototype.toString = function () {
              return this.absoluteURL
            }, t.prototype.valueOf = function () {
              return this.absoluteURL
            }, n = function (t) {
              return e(t.getOrigin() + t.getPath())
            }, e = function (t) {
              return r(t, "/") ? t : t + "/"
            }, i = function (t, e) {
              return t.slice(0, e.length) === e
            }, r = function (t, e) {
              return t.slice(-e.length) === e
            }, t
          }()
        }.call(this),
        function () {
          var t = function (t, e) {
            return function () {
              return t.apply(e, arguments)
            }
          };
          e.HttpRequest = function () {
            function n(n, r, i) {
              this.delegate = n, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(r).requestURL, this.referrer = e.Location.wrap(i).absoluteURL, this.createXHR()
            }
            return n.NETWORK_FAILURE = 0, n.TIMEOUT_FAILURE = -1, n.timeout = 60, n.prototype.send = function () {
              var t;
              return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0
            }, n.prototype.cancel = function () {
              return this.xhr && this.sent ? this.xhr.abort() : void 0
            }, n.prototype.requestProgressed = function (t) {
              return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0
            }, n.prototype.requestLoaded = function () {
              return this.endRequest((t = this, function () {
                var e;
                return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText))
              }));
              var t
            }, n.prototype.requestFailed = function () {
              return this.endRequest((t = this, function () {
                return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)
              }));
              var t
            }, n.prototype.requestTimedOut = function () {
              return this.endRequest((t = this, function () {
                return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)
              }));
              var t
            }, n.prototype.requestCanceled = function () {
              return this.endRequest()
            }, n.prototype.notifyApplicationBeforeRequestStart = function () {
              return e.dispatch("turbolinks:request-start", {
                data: {
                  url: this.url,
                  xhr: this.xhr
                }
              })
            }, n.prototype.notifyApplicationAfterRequestEnd = function () {
              return e.dispatch("turbolinks:request-end", {
                data: {
                  url: this.url,
                  xhr: this.xhr
                }
              })
            }, n.prototype.createXHR = function () {
              return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
            }, n.prototype.endRequest = function (t) {
              return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0
            }, n.prototype.setProgress = function (t) {
              var e;
              return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0
            }, n.prototype.destroy = function () {
              var t;
              return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null
            }, n
          }()
        }.call(this),
        function () {
          var t = function (t, e) {
            return function () {
              return t.apply(e, arguments)
            }
          };
          e.ProgressBar = function () {
            function e() {
              this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
            }
            var n;
            return n = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
              return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
            }, e.prototype.hide = function () {
              return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement((t = this, function () {
                return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1
              }))) : void 0;
              var t
            }, e.prototype.setValue = function (t) {
              return this.value = t, this.refresh()
            }, e.prototype.installStylesheetElement = function () {
              return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
            }, e.prototype.installProgressElement = function () {
              return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
            }, e.prototype.fadeProgressElement = function (t) {
              return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * n)
            }, e.prototype.uninstallProgressElement = function () {
              return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
            }, e.prototype.startTrickling = function () {
              return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n)
            }, e.prototype.stopTrickling = function () {
              return clearInterval(this.trickleInterval), this.trickleInterval = null
            }, e.prototype.trickle = function () {
              return this.setValue(this.value + Math.random() / 100)
            }, e.prototype.refresh = function () {
              return requestAnimationFrame((t = this, function () {
                return t.progressElement.style.width = 10 + 90 * t.value + "%"
              }));
              var t
            }, e.prototype.createStylesheetElement = function () {
              var t;
              return (t = document.createElement("style")).type = "text/css", t.textContent = this.constructor.defaultCSS, t
            }, e.prototype.createProgressElement = function () {
              var t;
              return (t = document.createElement("div")).className = "turbolinks-progress-bar", t
            }, e
          }()
        }.call(this),
        function () {
          var t = function (t, e) {
            return function () {
              return t.apply(e, arguments)
            }
          };
          e.BrowserAdapter = function () {
            function n(n) {
              this.controller = n, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar
            }
            var r, i, o;
            return o = e.HttpRequest, r = o.NETWORK_FAILURE, i = o.TIMEOUT_FAILURE, n.prototype.visitProposedToLocationWithAction = function (t, e) {
              return this.controller.startVisitToLocationWithAction(t, e)
            }, n.prototype.visitStarted = function (t) {
              return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot()
            }, n.prototype.visitRequestStarted = function (t) {
              return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
            }, n.prototype.visitRequestProgressed = function (t) {
              return this.progressBar.setValue(t.progress)
            }, n.prototype.visitRequestCompleted = function (t) {
              return t.loadResponse()
            }, n.prototype.visitRequestFailedWithStatusCode = function (t, e) {
              switch (e) {
                case r:
                case i:
                  return this.reload();
                default:
                  return t.loadResponse()
              }
            }, n.prototype.visitRequestFinished = function () {
              return this.hideProgressBar()
            }, n.prototype.visitCompleted = function (t) {
              return t.followRedirect()
            }, n.prototype.pageInvalidated = function () {
              return this.reload()
            }, n.prototype.showProgressBarAfterDelay = function () {
              return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
            }, n.prototype.showProgressBar = function () {
              return this.progressBar.show()
            }, n.prototype.hideProgressBar = function () {
              return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
            }, n.prototype.reload = function () {
              return window.location.reload()
            }, n
          }()
        }.call(this),
        function () {
          var t = function (t, e) {
            return function () {
              return t.apply(e, arguments)
            }
          };
          e.History = function () {
            function n(e) {
              this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this)
            }
            return n.prototype.start = function () {
              return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0)
            }, n.prototype.stop = function () {
              return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0
            }, n.prototype.push = function (t, n) {
              return t = e.Location.wrap(t), this.update("push", t, n)
            }, n.prototype.replace = function (t, n) {
              return t = e.Location.wrap(t), this.update("replace", t, n)
            }, n.prototype.onPopState = function (t) {
              var n, r, i, o;
              return this.shouldHandlePopState() && (o = null != (r = t.state) ? r.turbolinks : void 0) ? (n = e.Location.wrap(window.location), i = o.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(n, i)) : void 0
            }, n.prototype.onPageLoad = function () {
              return e.defer(function (t) {
                return function () {
                  return t.pageLoaded = !0
                }
              }(this))
            }, n.prototype.shouldHandlePopState = function () {
              return this.pageIsLoaded()
            }, n.prototype.pageIsLoaded = function () {
              return this.pageLoaded || "complete" === document.readyState
            }, n.prototype.update = function (t, e, n) {
              var r;
              return r = {
                turbolinks: {
                  restorationIdentifier: n
                }
              }, history[t + "State"](r, null, e)
            }, n
          }()
        }.call(this),
        function () {
          e.HeadDetails = function () {
            function t(t) {
              var e, n, r, s, a;
              for (this.elements = {}, n = 0, s = t.length; s > n; n++)(a = t[n]).nodeType === Node.ELEMENT_NODE && (r = a.outerHTML, (null != (e = this.elements)[r] ? e[r] : e[r] = {
                type: o(a),
                tracked: i(a),
                elements: []
              }).elements.push(a))
            }
            var e, n, r, i, o;
            return t.fromHeadElement = function (t) {
              var e;
              return new this(null != (e = null != t ? t.childNodes : void 0) ? e : [])
            }, t.prototype.hasElementWithKey = function (t) {
              return t in this.elements
            }, t.prototype.getTrackedElementSignature = function () {
              var t;
              return function () {
                var e, n;
                for (t in n = [], e = this.elements) e[t].tracked && n.push(t);
                return n
              }.call(this).join("")
            }, t.prototype.getScriptElementsNotInDetails = function (t) {
              return this.getElementsMatchingTypeNotInDetails("script", t)
            }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
              return this.getElementsMatchingTypeNotInDetails("stylesheet", t)
            }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
              var n, r, i, o, s, a;
              for (r in s = [], i = this.elements) a = (o = i[r]).type, n = o.elements, a !== t || e.hasElementWithKey(r) || s.push(n[0]);
              return s
            }, t.prototype.getProvisionalElements = function () {
              var t, e, n, r, i, o, s;
              for (e in n = [], r = this.elements) s = (i = r[e]).type, o = i.tracked, t = i.elements, null != s || o ? t.length > 1 && n.push.apply(n, t.slice(1)) : n.push.apply(n, t);
              return n
            }, t.prototype.getMetaValue = function (t) {
              var e;
              return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0
            }, t.prototype.findMetaElementByName = function (t) {
              var n, r, i, o;
              for (i in n = void 0, o = this.elements) r = o[i].elements, e(r[0], t) && (n = r[0]);
              return n
            }, o = function (t) {
              return n(t) ? "script" : r(t) ? "stylesheet" : void 0
            }, i = function (t) {
              return "reload" === t.getAttribute("data-turbolinks-track")
            }, n = function (t) {
              return "script" === t.tagName.toLowerCase()
            }, r = function (t) {
              var e;
              return "style" === (e = t.tagName.toLowerCase()) || "link" === e && "stylesheet" === t.getAttribute("rel")
            }, e = function (t, e) {
              return "meta" === t.tagName.toLowerCase() && t.getAttribute("name") === e
            }, t
          }()
        }.call(this),
        function () {
          e.Snapshot = function () {
            function t(t, e) {
              this.headDetails = t, this.bodyElement = e
            }
            return t.wrap = function (t) {
              return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t)
            }, t.fromHTMLString = function (t) {
              var e;
              return (e = document.createElement("html")).innerHTML = t, this.fromHTMLElement(e)
            }, t.fromHTMLElement = function (t) {
              var n, r, i;
              return r = t.querySelector("head"), n = null != (i = t.querySelector("body")) ? i : document.createElement("body"), new this(e.HeadDetails.fromHeadElement(r), n)
            }, t.prototype.clone = function () {
              return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0))
            }, t.prototype.getRootLocation = function () {
              var t, n;
              return n = null != (t = this.getSetting("root")) ? t : "/", new e.Location(n)
            }, t.prototype.getCacheControlValue = function () {
              return this.getSetting("cache-control")
            }, t.prototype.getElementForAnchor = function (t) {
              try {
                return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']")
              } catch (e) {}
            }, t.prototype.getPermanentElements = function () {
              return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")
            }, t.prototype.getPermanentElementById = function (t) {
              return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]")
            }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
              var e, n, r, i, o;
              for (o = [], n = 0, r = (i = this.getPermanentElements()).length; r > n; n++) e = i[n], t.getPermanentElementById(e.id) && o.push(e);
              return o
            }, t.prototype.findFirstAutofocusableElement = function () {
              return this.bodyElement.querySelector("[autofocus]")
            }, t.prototype.hasAnchor = function (t) {
              return null != this.getElementForAnchor(t)
            }, t.prototype.isPreviewable = function () {
              return "no-preview" !== this.getCacheControlValue()
            }, t.prototype.isCacheable = function () {
              return "no-cache" !== this.getCacheControlValue()
            }, t.prototype.isVisitable = function () {
              return "reload" !== this.getSetting("visit-control")
            }, t.prototype.getSetting = function (t) {
              return this.headDetails.getMetaValue("turbolinks-" + t)
            }, t
          }()
        }.call(this),
        function () {
          var t = [].slice;
          e.Renderer = function () {
            function e() {}
            var n;
            return e.render = function () {
              var e, n, r;
              return n = arguments[0], e = arguments[1], (r = function (t, e, n) {
                n.prototype = t.prototype;
                var r = new n,
                  i = t.apply(r, e);
                return Object(i) === i ? i : r
              }(this, 3 <= arguments.length ? t.call(arguments, 2) : [], function () {})).delegate = n, r.render(e), r
            }, e.prototype.renderView = function (t) {
              return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody)
            }, e.prototype.invalidateView = function () {
              return this.delegate.viewInvalidated()
            }, e.prototype.createScriptElement = function (t) {
              var e;
              return "false" === t.getAttribute("data-turbolinks-eval") ? t : ((e = document.createElement("script")).textContent = t.textContent, e.async = !1, n(e, t), e)
            }, n = function (t, e) {
              var n, r, i, o, s, a, u;
              for (a = [], n = 0, r = (o = e.attributes).length; r > n; n++) i = (s = o[n]).name, u = s.value, a.push(t.setAttribute(i, u));
              return a
            }, e
          }()
        }.call(this),
        function () {
          var t, n, r = function (t, e) {
              function n() {
                this.constructor = t
              }
              for (var r in e) i.call(e, r) && (t[r] = e[r]);
              return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            },
            i = {}.hasOwnProperty;
          e.SnapshotRenderer = function (e) {
            function i(t, e, n) {
              this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = n, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement
            }
            return r(i, e), i.prototype.render = function (t) {
              return this.shouldRender() ? (this.mergeHead(), this.renderView((e = this, function () {
                return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t()
              }))) : this.invalidateView();
              var e
            }, i.prototype.mergeHead = function () {
              return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
            }, i.prototype.replaceBody = function () {
              var t;
              return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t)
            }, i.prototype.shouldRender = function () {
              return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
            }, i.prototype.trackedElementsAreIdentical = function () {
              return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
            }, i.prototype.copyNewHeadStylesheetElements = function () {
              var t, e, n, r, i;
              for (i = [], e = 0, n = (r = this.getNewHeadStylesheetElements()).length; n > e; e++) t = r[e], i.push(document.head.appendChild(t));
              return i
            }, i.prototype.copyNewHeadScriptElements = function () {
              var t, e, n, r, i;
              for (i = [], e = 0, n = (r = this.getNewHeadScriptElements()).length; n > e; e++) t = r[e], i.push(document.head.appendChild(this.createScriptElement(t)));
              return i
            }, i.prototype.removeCurrentHeadProvisionalElements = function () {
              var t, e, n, r, i;
              for (i = [], e = 0, n = (r = this.getCurrentHeadProvisionalElements()).length; n > e; e++) t = r[e], i.push(document.head.removeChild(t));
              return i
            }, i.prototype.copyNewHeadProvisionalElements = function () {
              var t, e, n, r, i;
              for (i = [], e = 0, n = (r = this.getNewHeadProvisionalElements()).length; n > e; e++) t = r[e], i.push(document.head.appendChild(t));
              return i
            }, i.prototype.relocateCurrentBodyPermanentElements = function () {
              var e, r, i, o, s, a, u;
              for (u = [], e = 0, r = (a = this.getCurrentBodyPermanentElements()).length; r > e; e++) o = a[e], s = t(o), i = this.newSnapshot.getPermanentElementById(o.id), n(o, s.element), n(i, o), u.push(s);
              return u
            }, i.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
              var e, r, i, o, s, a;
              for (a = [], i = 0, o = t.length; o > i; i++) r = (s = t[i]).element, e = s.permanentElement.cloneNode(!0), a.push(n(r, e));
              return a
            }, i.prototype.activateNewBodyScriptElements = function () {
              var t, e, r, i, o, s;
              for (s = [], e = 0, i = (o = this.getNewBodyScriptElements()).length; i > e; e++) r = o[e], t = this.createScriptElement(r), s.push(n(r, t));
              return s
            }, i.prototype.assignNewBody = function () {
              return document.body = this.newBody
            }, i.prototype.focusFirstAutofocusableElement = function () {
              var t;
              return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0
            }, i.prototype.getNewHeadStylesheetElements = function () {
              return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
            }, i.prototype.getNewHeadScriptElements = function () {
              return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
            }, i.prototype.getCurrentHeadProvisionalElements = function () {
              return this.currentHeadDetails.getProvisionalElements()
            }, i.prototype.getNewHeadProvisionalElements = function () {
              return this.newHeadDetails.getProvisionalElements()
            }, i.prototype.getCurrentBodyPermanentElements = function () {
              return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)
            }, i.prototype.getNewBodyScriptElements = function () {
              return this.newBody.querySelectorAll("script")
            }, i
          }(e.Renderer), t = function (t) {
            var e;
            return (e = document.createElement("meta")).setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", t.id), {
              element: e,
              permanentElement: t
            }
          }, n = function (t, e) {
            var n;
            return (n = t.parentNode) ? n.replaceChild(e, t) : void 0
          }
        }.call(this),
        function () {
          var t = function (t, e) {
              function r() {
                this.constructor = t
              }
              for (var i in e) n.call(e, i) && (t[i] = e[i]);
              return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
          e.ErrorRenderer = function (e) {
            function n(t) {
              var e;
              (e = document.createElement("html")).innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body")
            }
            return t(n, e), n.prototype.render = function (t) {
              return this.renderView((e = this, function () {
                return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t()
              }));
              var e
            }, n.prototype.replaceHeadAndBody = function () {
              var t, e;
              return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t)
            }, n.prototype.activateBodyScriptElements = function () {
              var t, e, n, r, i, o;
              for (o = [], e = 0, n = (r = this.getScriptElements()).length; n > e; e++) i = r[e], t = this.createScriptElement(i), o.push(i.parentNode.replaceChild(t, i));
              return o
            }, n.prototype.getScriptElements = function () {
              return document.documentElement.querySelectorAll("script")
            }, n
          }(e.Renderer)
        }.call(this),
        function () {
          e.View = function () {
            function t(t) {
              this.delegate = t, this.htmlElement = document.documentElement
            }
            return t.prototype.getRootLocation = function () {
              return this.getSnapshot().getRootLocation()
            }, t.prototype.getElementForAnchor = function (t) {
              return this.getSnapshot().getElementForAnchor(t)
            }, t.prototype.getSnapshot = function () {
              return e.Snapshot.fromHTMLElement(this.htmlElement)
            }, t.prototype.render = function (t, e) {
              var n, r, i;
              return i = t.snapshot, n = t.error, r = t.isPreview, this.markAsPreview(r), null != i ? this.renderSnapshot(i, r, e) : this.renderError(n, e)
            }, t.prototype.markAsPreview = function (t) {
              return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview")
            }, t.prototype.renderSnapshot = function (t, n, r) {
              return e.SnapshotRenderer.render(this.delegate, r, this.getSnapshot(), e.Snapshot.wrap(t), n)
            }, t.prototype.renderError = function (t, n) {
              return e.ErrorRenderer.render(this.delegate, n, t)
            }, t
          }()
        }.call(this),
        function () {
          var t = function (t, e) {
            return function () {
              return t.apply(e, arguments)
            }
          };
          e.ScrollManager = function () {
            function n(n) {
              this.delegate = n, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll)
            }
            return n.prototype.start = function () {
              return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
            }, n.prototype.stop = function () {
              return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
            }, n.prototype.scrollToElement = function (t) {
              return t.scrollIntoView()
            }, n.prototype.scrollToPosition = function (t) {
              var e, n;
              return e = t.x, n = t.y, window.scrollTo(e, n)
            }, n.prototype.onScroll = function () {
              return this.updatePosition({
                x: window.pageXOffset,
                y: window.pageYOffset
              })
            }, n.prototype.updatePosition = function (t) {
              var e;
              return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0
            }, n
          }()
        }.call(this),
        function () {
          e.SnapshotCache = function () {
            function t(t) {
              this.size = t, this.keys = [], this.snapshots = {}
            }
            var n;
            return t.prototype.has = function (t) {
              return n(t) in this.snapshots
            }, t.prototype.get = function (t) {
              var e;
              if (this.has(t)) return e = this.read(t), this.touch(t), e
            }, t.prototype.put = function (t, e) {
              return this.write(t, e), this.touch(t), e
            }, t.prototype.read = function (t) {
              var e;
              return e = n(t), this.snapshots[e]
            }, t.prototype.write = function (t, e) {
              var r;
              return r = n(t), this.snapshots[r] = e
            }, t.prototype.touch = function (t) {
              var e, r;
              return r = n(t), (e = this.keys.indexOf(r)) > -1 && this.keys.splice(e, 1), this.keys.unshift(r), this.trim()
            }, t.prototype.trim = function () {
              var t, e, n, r, i;
              for (i = [], t = 0, n = (r = this.keys.splice(this.size)).length; n > t; t++) e = r[t], i.push(delete this.snapshots[e]);
              return i
            }, n = function (t) {
              return e.Location.wrap(t).toCacheKey()
            }, t
          }()
        }.call(this),
        function () {
          var t = function (t, e) {
            return function () {
              return t.apply(e, arguments)
            }
          };
          e.Visit = function () {
            function n(n, r, i) {
              this.controller = n, this.action = i, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(r), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {}
            }
            var r;
            return n.prototype.start = function () {
              return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
            }, n.prototype.cancel = function () {
              var t;
              return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0
            }, n.prototype.complete = function () {
              var t;
              return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
            }, n.prototype.fail = function () {
              var t;
              return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0
            }, n.prototype.changeHistory = function () {
              var t, e;
              return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = r(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0)
            }, n.prototype.issueRequest = function () {
              return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
            }, n.prototype.getCachedSnapshot = function () {
              var t;
              return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t
            }, n.prototype.hasCachedSnapshot = function () {
              return null != this.getCachedSnapshot()
            }, n.prototype.loadCachedSnapshot = function () {
              var t, e;
              return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
                var n;
                return this.cacheSnapshot(), this.controller.render({
                  snapshot: e,
                  isPreview: t
                }, this.performScroll), "function" == typeof (n = this.adapter).visitRendered && n.visitRendered(this), t ? void 0 : this.complete()
              })) : void 0
            }, n.prototype.loadResponse = function () {
              return null != this.response ? this.render(function () {
                var t, e;
                return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
                  error: this.response
                }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
                  snapshot: this.response
                }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete())
              }) : void 0
            }, n.prototype.followRedirect = function () {
              return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
            }, n.prototype.requestStarted = function () {
              var t;
              return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0
            }, n.prototype.requestProgressed = function (t) {
              var e;
              return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0
            }, n.prototype.requestCompletedWithResponse = function (t, n) {
              return this.response = t, null != n && (this.redirectedToLocation = e.Location.wrap(n)), this.adapter.visitRequestCompleted(this)
            }, n.prototype.requestFailedWithStatusCode = function (t, e) {
              return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t)
            }, n.prototype.requestFinished = function () {
              var t;
              return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0
            }, n.prototype.performScroll = function () {
              return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
            }, n.prototype.scrollToRestoredPosition = function () {
              var t, e;
              return null != (t = null != (e = this.restorationData) ? e.scrollPosition : void 0) ? (this.controller.scrollToPosition(t), !0) : void 0
            }, n.prototype.scrollToAnchor = function () {
              return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
            }, n.prototype.scrollToTop = function () {
              return this.controller.scrollToPosition({
                x: 0,
                y: 0
              })
            }, n.prototype.recordTimingMetric = function (t) {
              var e;
              return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = (new Date).getTime()
            }, n.prototype.getTimingMetrics = function () {
              return e.copyObject(this.timingMetrics)
            }, r = function (t) {
              switch (t) {
                case "replace":
                  return "replaceHistoryWithLocationAndRestorationIdentifier";
                case "advance":
                case "restore":
                  return "pushHistoryWithLocationAndRestorationIdentifier"
              }
            }, n.prototype.shouldIssueRequest = function () {
              return "restore" !== this.action || !this.hasCachedSnapshot()
            }, n.prototype.cacheSnapshot = function () {
              return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
            }, n.prototype.render = function (t) {
              return this.cancelRender(), this.frame = requestAnimationFrame((e = this, function () {
                return e.frame = null, t.call(e)
              }));
              var e
            }, n.prototype.cancelRender = function () {
              return this.frame ? cancelAnimationFrame(this.frame) : void 0
            }, n
          }()
        }.call(this),
        function () {
          var t = function (t, e) {
            return function () {
              return t.apply(e, arguments)
            }
          };
          e.Controller = function () {
            function n() {
              this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500)
            }
            return n.prototype.start = function () {
              return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
            }, n.prototype.disable = function () {
              return this.enabled = !1
            }, n.prototype.stop = function () {
              return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
            }, n.prototype.clearCache = function () {
              return this.cache = new e.SnapshotCache(10)
            }, n.prototype.visit = function (t, n) {
              var r, i;
              return null == n && (n = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (r = null != (i = n.action) ? i : "advance", this.adapter.visitProposedToLocationWithAction(t, r)) : window.location = t : void 0
            }, n.prototype.startVisitToLocationWithAction = function (t, n, r) {
              var i;
              return e.supported ? (i = this.getRestorationDataForIdentifier(r), this.startVisit(t, n, {
                restorationData: i
              })) : window.location = t
            }, n.prototype.setProgressBarDelay = function (t) {
              return this.progressBarDelay = t
            }, n.prototype.startHistory = function () {
              return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
            }, n.prototype.stopHistory = function () {
              return this.history.stop()
            }, n.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, n) {
              return this.restorationIdentifier = n, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier)
            }, n.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, n) {
              return this.restorationIdentifier = n, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier)
            }, n.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, n) {
              var r;
              return this.restorationIdentifier = n, this.enabled ? (r = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
                restorationIdentifier: this.restorationIdentifier,
                restorationData: r,
                historyChanged: !0
              }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated()
            }, n.prototype.getCachedSnapshotForLocation = function (t) {
              var e;
              return null != (e = this.cache.get(t)) ? e.clone() : void 0
            }, n.prototype.shouldCacheSnapshot = function () {
              return this.view.getSnapshot().isCacheable()
            }, n.prototype.cacheSnapshot = function () {
              var t, n;
              return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), n = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
                return function () {
                  return e.cache.put(t, n.clone())
                }
              }(this))) : void 0
            }, n.prototype.scrollToAnchor = function (t) {
              var e;
              return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
                x: 0,
                y: 0
              })
            }, n.prototype.scrollToElement = function (t) {
              return this.scrollManager.scrollToElement(t)
            }, n.prototype.scrollToPosition = function (t) {
              return this.scrollManager.scrollToPosition(t)
            }, n.prototype.scrollPositionChanged = function (t) {
              return this.getCurrentRestorationData().scrollPosition = t
            }, n.prototype.render = function (t, e) {
              return this.view.render(t, e)
            }, n.prototype.viewInvalidated = function () {
              return this.adapter.pageInvalidated()
            }, n.prototype.viewWillRender = function (t) {
              return this.notifyApplicationBeforeRender(t)
            }, n.prototype.viewRendered = function () {
              return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
            }, n.prototype.pageLoaded = function () {
              return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
            }, n.prototype.clickCaptured = function () {
              return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
            }, n.prototype.clickBubbled = function (t) {
              var e, n, r;
              return this.enabled && this.clickEventIsSignificant(t) && (n = this.getVisitableLinkForNode(t.target)) && (r = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, r) ? (t.preventDefault(), e = this.getActionForLink(n), this.visit(r, {
                action: e
              })) : void 0
            }, n.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
              return !this.notifyApplicationAfterClickingLinkToLocation(t, e).defaultPrevented
            }, n.prototype.applicationAllowsVisitingLocation = function (t) {
              return !this.notifyApplicationBeforeVisitingLocation(t).defaultPrevented
            }, n.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, n) {
              return e.dispatch("turbolinks:click", {
                target: t,
                data: {
                  url: n.absoluteURL
                },
                cancelable: !0
              })
            }, n.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
              return e.dispatch("turbolinks:before-visit", {
                data: {
                  url: t.absoluteURL
                },
                cancelable: !0
              })
            }, n.prototype.notifyApplicationAfterVisitingLocation = function (t) {
              return e.dispatch("turbolinks:visit", {
                data: {
                  url: t.absoluteURL
                }
              })
            }, n.prototype.notifyApplicationBeforeCachingSnapshot = function () {
              return e.dispatch("turbolinks:before-cache")
            }, n.prototype.notifyApplicationBeforeRender = function (t) {
              return e.dispatch("turbolinks:before-render", {
                data: {
                  newBody: t
                }
              })
            }, n.prototype.notifyApplicationAfterRender = function () {
              return e.dispatch("turbolinks:render")
            }, n.prototype.notifyApplicationAfterPageLoad = function (t) {
              return null == t && (t = {}), e.dispatch("turbolinks:load", {
                data: {
                  url: this.location.absoluteURL,
                  timing: t
                }
              })
            }, n.prototype.startVisit = function (t, e, n) {
              var r;
              return null != (r = this.currentVisit) && r.cancel(), this.currentVisit = this.createVisit(t, e, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t)
            }, n.prototype.createVisit = function (t, n, r) {
              var i, o, s, a, u;
              return a = (o = null != r ? r : {}).restorationIdentifier, s = o.restorationData, i = o.historyChanged, (u = new e.Visit(this, t, n)).restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = i, u.referrer = this.location, u
            }, n.prototype.visitCompleted = function (t) {
              return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())
            }, n.prototype.clickEventIsSignificant = function (t) {
              return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)
            }, n.prototype.getVisitableLinkForNode = function (t) {
              return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0
            }, n.prototype.getVisitableLocationForLink = function (t) {
              var n;
              return n = new e.Location(t.getAttribute("href")), this.locationIsVisitable(n) ? n : void 0
            }, n.prototype.getActionForLink = function (t) {
              var e;
              return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance"
            }, n.prototype.nodeIsVisitable = function (t) {
              var n;
              return !(n = e.closest(t, "[data-turbolinks]")) || "false" !== n.getAttribute("data-turbolinks")
            }, n.prototype.locationIsVisitable = function (t) {
              return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
            }, n.prototype.getCurrentRestorationData = function () {
              return this.getRestorationDataForIdentifier(this.restorationIdentifier)
            }, n.prototype.getRestorationDataForIdentifier = function (t) {
              var e;
              return null != (e = this.restorationData)[t] ? e[t] : e[t] = {}
            }, n
          }()
        }.call(this),
        function () {
          ! function () {
            var t, e;
            if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning"))
              for (; t = t.parentNode;)
                if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML)
          }()
        }.call(this),
        function () {
          var t, n, r;
          e.start = function () {
            return n() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0
          }, n = function () {
            return null == window.Turbolinks && (window.Turbolinks = e), r()
          }, t = function () {
            var t;
            return (t = new e.Controller).adapter = new e.BrowserAdapter(t), t
          }, (r = function () {
            return window.Turbolinks === e
          })() && e.start()
        }.call(this)
    }).call(this), "object" == typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e)
  }.call(this),
  function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");
      return e(t)
    } : e(t)
  }("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";

    function n(t, e, n) {
      var r, i, o = (n = n || Q).createElement("script");
      if (o.text = t, e)
        for (r in ht)(i = e[r] || e.getAttribute && e.getAttribute(r)) && o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o)
    }

    function r(t) {
      return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? it[ot.call(t)] || "object" : typeof t
    }

    function i(t) {
      var e = !!t && "length" in t && t.length,
        n = r(t);
      return !ct(t) && !ft(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }

    function o(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    function s(t, e, n) {
      return ct(e) ? pt.grep(t, function (t, r) {
        return !!e.call(t, r, t) !== n
      }) : e.nodeType ? pt.grep(t, function (t) {
        return t === e !== n
      }) : "string" != typeof e ? pt.grep(t, function (t) {
        return -1 < rt.call(e, t) !== n
      }) : pt.filter(e, t, n)
    }

    function a(t, e) {
      for (;
        (t = t[e]) && 1 !== t.nodeType;);
      return t
    }

    function u(t) {
      return t
    }

    function l(t) {
      throw t
    }

    function c(t, e, n, r) {
      var i;
      try {
        t && ct(i = t.promise) ? i.call(t).done(e).fail(n) : t && ct(i = t.then) ? i.call(t, e, n) : e.apply(void 0, [t].slice(r))
      } catch (t) {
        n.apply(void 0, [t])
      }
    }

    function f() {
      Q.removeEventListener("DOMContentLoaded", f), t.removeEventListener("load", f), pt.ready()
    }

    function h(t, e) {
      return e.toUpperCase()
    }

    function d(t) {
      return t.replace(jt, "ms-").replace(Nt, h)
    }

    function p() {
      this.expando = pt.expando + p.uid++
    }

    function m(t, e, n) {
      var r, i;
      if (void 0 === n && 1 === t.nodeType)
        if (r = "data-" + e.replace(Ot, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(r))) {
          try {
            n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Rt.test(i) ? JSON.parse(i) : i)
          } catch (t) {}
          Pt.set(t, e, n)
        } else n = void 0;
      return n
    }

    function g(t, e, n, r) {
      var i, o, s = 20,
        a = r ? function () {
          return r.cur()
        } : function () {
          return pt.css(t, e, "")
        },
        u = a(),
        l = n && n[3] || (pt.cssNumber[e] ? "" : "px"),
        c = t.nodeType && (pt.cssNumber[e] || "px" !== l && +u) && Mt.exec(pt.css(t, e));
      if (c && c[3] !== l) {
        for (u /= 2, l = l || c[3], c = +u || 1; s--;) pt.style(t, e, c + l), (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0), c /= o;
        c *= 2, pt.style(t, e, c + l), n = n || []
      }
      return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function v(t, e) {
      for (var n, r, i, o, s, a, u, l = [], c = 0, f = t.length; c < f; c++)(r = t[c]).style && (n = r.style.display, e ? ("none" === n && (l[c] = qt.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && Wt(r) && (l[c] = (u = s = o = void 0, s = (i = r).ownerDocument, a = i.nodeName, (u = Ut[a]) || (o = s.body.appendChild(s.createElement(a)), u = pt.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), Ut[a] = u)))) : "none" !== n && (l[c] = "none", qt.set(r, "display", n)));
      for (c = 0; c < f; c++) null != l[c] && (t[c].style.display = l[c]);
      return t
    }

    function y(t, e) {
      var n;
      return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && o(t, e) ? pt.merge([t], n) : n
    }

    function b(t, e) {
      for (var n = 0, r = t.length; n < r; n++) qt.set(t[n], "globalEval", !e || qt.get(e[n], "globalEval"))
    }

    function w(t, e, n, i, o) {
      for (var s, a, u, l, c, f, h = e.createDocumentFragment(), d = [], p = 0, m = t.length; p < m; p++)
        if ((s = t[p]) || 0 === s)
          if ("object" === r(s)) pt.merge(d, s.nodeType ? [s] : s);
          else if (Kt.test(s)) {
        for (a = a || h.appendChild(e.createElement("div")), u = (Vt.exec(s) || ["", ""])[1].toLowerCase(), l = Yt[u] || Yt._default, a.innerHTML = l[1] + pt.htmlPrefilter(s) + l[2], f = l[0]; f--;) a = a.lastChild;
        pt.merge(d, a.childNodes), (a = h.firstChild).textContent = ""
      } else d.push(e.createTextNode(s));
      for (h.textContent = "", p = 0; s = d[p++];)
        if (i && -1 < pt.inArray(s, i)) o && o.push(s);
        else if (c = Bt(s), a = y(h.appendChild(s), "script"), c && b(a), n)
        for (f = 0; s = a[f++];) Xt.test(s.type || "") && n.push(s);
      return h
    }

    function x() {
      return !0
    }

    function E() {
      return !1
    }

    function S(t, e) {
      return t === function () {
        try {
          return Q.activeElement
        } catch (t) {}
      }() == ("focus" === e)
    }

    function C(t, e, n, r, i, o) {
      var s, a;
      if ("object" == typeof e) {
        for (a in "string" != typeof n && (r = r || n, n = void 0), e) C(t, a, n, r, e[a], o);
        return t
      }
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = E;
      else if (!i) return t;
      return 1 === o && (s = i, (i = function (t) {
        return pt().off(t), s.apply(this, arguments)
      }).guid = s.guid || (s.guid = pt.guid++)), t.each(function () {
        pt.event.add(this, e, i, r, n)
      })
    }

    function k(t, e, n) {
      n ? (qt.set(t, e, !1), pt.event.add(t, e, {
        namespace: !1,
        handler: function (t) {
          var r, i, o = qt.get(this, e);
          if (1 & t.isTrigger && this[e]) {
            if (o.length)(pt.event.special[e] || {}).delegateType && t.stopPropagation();
            else if (o = tt.call(arguments), qt.set(this, e, o), r = n(this, e), this[e](), o !== (i = qt.get(this, e)) || r ? qt.set(this, e, !1) : i = {}, o !== i) return t.stopImmediatePropagation(), t.preventDefault(), i.value
          } else o.length && (qt.set(this, e, {
            value: pt.event.trigger(pt.extend(o[0], pt.Event.prototype), o.slice(1), this)
          }), t.stopImmediatePropagation())
        }
      })) : void 0 === qt.get(t, e) && pt.event.add(t, e, x)
    }

    function T(t, e) {
      return o(t, "table") && o(11 !== e.nodeType ? e : e.firstChild, "tr") && pt(t).children("tbody")[0] || t
    }

    function L(t) {
      return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function A(t) {
      return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function j(t, e) {
      var n, r, i, o, s, a, u, l;
      if (1 === e.nodeType) {
        if (qt.hasData(t) && (o = qt.access(t), s = qt.set(e, o), l = o.events))
          for (i in delete s.handle, s.events = {}, l)
            for (n = 0, r = l[i].length; n < r; n++) pt.event.add(e, i, l[i][n]);
        Pt.hasData(t) && (a = Pt.access(t), u = pt.extend({}, a), Pt.set(e, u))
      }
    }

    function N(t, e, r, i) {
      e = et.apply([], e);
      var o, s, a, u, l, c, f = 0,
        h = t.length,
        d = h - 1,
        p = e[0],
        m = ct(p);
      if (m || 1 < h && "string" == typeof p && !lt.checkClone && re.test(p)) return t.each(function (n) {
        var o = t.eq(n);
        m && (e[0] = p.call(this, n, o.html())), N(o, e, r, i)
      });
      if (h && (s = (o = w(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
        for (u = (a = pt.map(y(o, "script"), L)).length; f < h; f++) l = o, f !== d && (l = pt.clone(l, !0, !0), u && pt.merge(a, y(l, "script"))), r.call(t[f], l, f);
        if (u)
          for (c = a[a.length - 1].ownerDocument, pt.map(a, A), f = 0; f < u; f++) l = a[f], Xt.test(l.type || "") && !qt.access(l, "globalEval") && pt.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? pt._evalUrl && !l.noModule && pt._evalUrl(l.src, {
            nonce: l.nonce || l.getAttribute("nonce")
          }) : n(l.textContent.replace(ie, ""), l, c))
      }
      return t
    }

    function D(t, e, n) {
      for (var r, i = e ? pt.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || pt.cleanData(y(r)), r.parentNode && (n && Bt(r) && b(y(r, "script")), r.parentNode.removeChild(r));
      return t
    }

    function q(t, e, n) {
      var r, i, o, s, a = t.style;
      return (n = n || se(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || Bt(t) || (s = pt.style(t, e)), !lt.pixelBoxStyles() && oe.test(s) && ae.test(e) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function P(t, e) {
      return {
        get: function () {
          if (!t()) return (this.get = e).apply(this, arguments);
          delete this.get
        }
      }
    }

    function R(t) {
      return pt.cssProps[t] || ce[t] || (t in le ? t : ce[t] = function (t) {
        for (var e = t[0].toUpperCase() + t.slice(1), n = ue.length; n--;)
          if ((t = ue[n] + e) in le) return t
      }(t) || t)
    }

    function O(t, e, n) {
      var r = Mt.exec(e);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
    }

    function _(t, e, n, r, i, o) {
      var s = "width" === e ? 1 : 0,
        a = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; s < 4; s += 2) "margin" === n && (u += pt.css(t, n + It[s], !0, i)), r ? ("content" === n && (u -= pt.css(t, "padding" + It[s], !0, i)), "margin" !== n && (u -= pt.css(t, "border" + It[s] + "Width", !0, i))) : (u += pt.css(t, "padding" + It[s], !0, i), "padding" !== n ? u += pt.css(t, "border" + It[s] + "Width", !0, i) : a += pt.css(t, "border" + It[s] + "Width", !0, i));
      return !r && 0 <= o && (u += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - u - a - .5)) || 0), u
    }

    function M(t, e, n) {
      var r = se(t),
        i = (!lt.boxSizingReliable() || n) && "border-box" === pt.css(t, "boxSizing", !1, r),
        o = i,
        s = q(t, e, r),
        a = "offset" + e[0].toUpperCase() + e.slice(1);
      if (oe.test(s)) {
        if (!n) return s;
        s = "auto"
      }
      return (!lt.boxSizingReliable() && i || "auto" === s || !parseFloat(s) && "inline" === pt.css(t, "display", !1, r)) && t.getClientRects().length && (i = "border-box" === pt.css(t, "boxSizing", !1, r), (o = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + _(t, e, n || (i ? "border" : "content"), o, r, s) + "px"
    }

    function I(t, e, n, r, i) {
      return new I.prototype.init(t, e, n, r, i)
    }

    function H() {
      ge && (!1 === Q.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(H) : t.setTimeout(H, pt.fx.interval), pt.fx.tick())
    }

    function B() {
      return t.setTimeout(function () {
        me = void 0
      }), me = Date.now()
    }

    function F(t, e) {
      var n, r = 0,
        i = {
          height: t
        };
      for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = It[r])] = i["padding" + n] = t;
      return e && (i.opacity = i.width = t), i
    }

    function W(t, e, n) {
      for (var r, i = ($.tweeners[e] || []).concat($.tweeners["*"]), o = 0, s = i.length; o < s; o++)
        if (r = i[o].call(n, e, t)) return r
    }

    function $(t, e, n) {
      var r, i, o = 0,
        s = $.prefilters.length,
        a = pt.Deferred().always(function () {
          delete u.elem
        }),
        u = function () {
          if (i) return !1;
          for (var e = me || B(), n = Math.max(0, l.startTime + l.duration - e), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++) l.tweens[o].run(r);
          return a.notifyWith(t, [l, r, n]), r < 1 && s ? n : (s || a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l]), !1)
        },
        l = a.promise({
          elem: t,
          props: pt.extend({}, e),
          opts: pt.extend(!0, {
            specialEasing: {},
            easing: pt.easing._default
          }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: me || B(),
          duration: n.duration,
          tweens: [],
          createTween: function (e, n) {
            var r = pt.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
            return l.tweens.push(r), r
          },
          stop: function (e) {
            var n = 0,
              r = e ? l.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) l.tweens[n].run(1);
            return e ? (a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l, e])) : a.rejectWith(t, [l, e]), this
          }
        }),
        c = l.props;
      for (function (t, e) {
          var n, r, i, o, s;
          for (n in t)
            if (i = e[r = d(n)], o = t[n], Array.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), (s = pt.cssHooks[r]) && "expand" in s)
              for (n in o = s.expand(o), delete t[r], o) n in t || (t[n] = o[n], e[n] = i);
            else e[r] = i
        }(c, l.opts.specialEasing); o < s; o++)
        if (r = $.prefilters[o].call(l, t, c, l.opts)) return ct(r.stop) && (pt._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
      return pt.map(c, W, l), ct(l.opts.start) && l.opts.start.call(t, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), pt.fx.timer(pt.extend(u, {
        elem: t,
        anim: l,
        queue: l.opts.queue
      })), l
    }

    function U(t) {
      return (t.match(kt) || []).join(" ")
    }

    function z(t) {
      return t.getAttribute && t.getAttribute("class") || ""
    }

    function V(t) {
      return Array.isArray(t) ? t : "string" == typeof t && t.match(kt) || []
    }

    function X(t, e, n, i) {
      var o;
      if (Array.isArray(e)) pt.each(e, function (e, r) {
        n || De.test(t) ? i(t, r) : X(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
      });
      else if (n || "object" !== r(e)) i(t, e);
      else
        for (o in e) X(t + "[" + o + "]", e[o], n, i)
    }

    function Y(t) {
      return function (e, n) {
        "string" != typeof e && (n = e, e = "*");
        var r, i = 0,
          o = e.toLowerCase().match(kt) || [];
        if (ct(n))
          for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
      }
    }

    function J(t, e, n, r) {
      function i(a) {
        var u;
        return o[a] = !0, pt.each(t[a] || [], function (t, a) {
          var l = a(e, n, r);
          return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (e.dataTypes.unshift(l), i(l), !1)
        }), u
      }
      var o = {},
        s = t === We;
      return i(e.dataTypes[0]) || !o["*"] && i("*")
    }

    function G(t, e) {
      var n, r, i = pt.ajaxSettings.flatOptions || {};
      for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
      return r && pt.extend(!0, t, r), t
    }
    var K = [],
      Q = t.document,
      Z = Object.getPrototypeOf,
      tt = K.slice,
      et = K.concat,
      nt = K.push,
      rt = K.indexOf,
      it = {},
      ot = it.toString,
      st = it.hasOwnProperty,
      at = st.toString,
      ut = at.call(Object),
      lt = {},
      ct = function (t) {
        return "function" == typeof t && "number" != typeof t.nodeType
      },
      ft = function (t) {
        return null != t && t === t.window
      },
      ht = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      },
      dt = "3.4.1",
      pt = function (t, e) {
        return new pt.fn.init(t, e)
      },
      mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    pt.fn = pt.prototype = {
      jquery: dt,
      constructor: pt,
      length: 0,
      toArray: function () {
        return tt.call(this)
      },
      get: function (t) {
        return null == t ? tt.call(this) : t < 0 ? this[t + this.length] : this[t]
      },
      pushStack: function (t) {
        var e = pt.merge(this.constructor(), t);
        return e.prevObject = this, e
      },
      each: function (t) {
        return pt.each(this, t)
      },
      map: function (t) {
        return this.pushStack(pt.map(this, function (e, n) {
          return t.call(e, n, e)
        }))
      },
      slice: function () {
        return this.pushStack(tt.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      eq: function (t) {
        var e = this.length,
          n = +t + (t < 0 ? e : 0);
        return this.pushStack(0 <= n && n < e ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: nt,
      sort: K.sort,
      splice: K.splice
    }, pt.extend = pt.fn.extend = function () {
      var t, e, n, r, i, o, s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;
      for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || ct(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
        if (null != (t = arguments[a]))
          for (e in t) r = t[e], "__proto__" !== e && s !== r && (l && r && (pt.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[e], o = i && !Array.isArray(n) ? [] : i || pt.isPlainObject(n) ? n : {}, i = !1, s[e] = pt.extend(l, o, r)) : void 0 !== r && (s[e] = r));
      return s
    }, pt.extend({
      expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t)
      },
      noop: function () {},
      isPlainObject: function (t) {
        var e, n;
        return !(!t || "[object Object]" !== ot.call(t) || (e = Z(t)) && ("function" != typeof (n = st.call(e, "constructor") && e.constructor) || at.call(n) !== ut))
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0
      },
      globalEval: function (t, e) {
        n(t, {
          nonce: e && e.nonce
        })
      },
      each: function (t, e) {
        var n, r = 0;
        if (i(t))
          for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
        else
          for (r in t)
            if (!1 === e.call(t[r], r, t[r])) break;
        return t
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(mt, "")
      },
      makeArray: function (t, e) {
        var n = e || [];
        return null != t && (i(Object(t)) ? pt.merge(n, "string" == typeof t ? [t] : t) : nt.call(n, t)), n
      },
      inArray: function (t, e, n) {
        return null == e ? -1 : rt.call(e, t, n)
      },
      merge: function (t, e) {
        for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
        return t.length = i, t
      },
      grep: function (t, e, n) {
        for (var r = [], i = 0, o = t.length, s = !n; i < o; i++) !e(t[i], i) !== s && r.push(t[i]);
        return r
      },
      map: function (t, e, n) {
        var r, o, s = 0,
          a = [];
        if (i(t))
          for (r = t.length; s < r; s++) null != (o = e(t[s], s, n)) && a.push(o);
        else
          for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
        return et.apply([], a)
      },
      guid: 1,
      support: lt
    }), "function" == typeof Symbol && (pt.fn[Symbol.iterator] = K[Symbol.iterator]), pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
      it["[object " + e + "]"] = e.toLowerCase()
    });
    var gt = function (t) {
      function e(t, e, n, r) {
        var i, o, s, a, u, l, c, h = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
        if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
        if (!r && ((e ? e.ownerDocument || e : H) !== D && N(e), e = e || D, P)) {
          if (11 !== p && (u = vt.exec(t)))
            if (i = u[1]) {
              if (9 === p) {
                if (!(s = e.getElementById(i))) return n;
                if (s.id === i) return n.push(s), n
              } else if (h && (s = h.getElementById(i)) && M(e, s) && s.id === i) return n.push(s), n
            } else {
              if (u[2]) return K.apply(n, e.getElementsByTagName(t)), n;
              if ((i = u[3]) && w.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(i)), n
            } if (w.qsa && !z[t + " "] && (!R || !R.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
            if (c = t, h = e, 1 === p && lt.test(t)) {
              for ((a = e.getAttribute("id")) ? a = a.replace(xt, Et) : e.setAttribute("id", a = I), o = (l = C(t)).length; o--;) l[o] = "#" + a + " " + d(l[o]);
              c = l.join(","), h = yt.test(t) && f(e.parentNode) || e
            }
            try {
              return K.apply(n, h.querySelectorAll(c)), n
            } catch (e) {
              z(t, !0)
            } finally {
              a === I && e.removeAttribute("id")
            }
          }
        }
        return T(t.replace(st, "$1"), e, n, r)
      }

      function n() {
        var t = [];
        return function e(n, r) {
          return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
        }
      }

      function r(t) {
        return t[I] = !0, t
      }

      function i(t) {
        var e = D.createElement("fieldset");
        try {
          return !!t(e)
        } catch (t) {
          return !1
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null
        }
      }

      function o(t, e) {
        for (var n = t.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = e
      }

      function s(t, e) {
        var n = e && t,
          r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
        if (r) return r;
        if (n)
          for (; n = n.nextSibling;)
            if (n === e) return -1;
        return t ? 1 : -1
      }

      function a(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t
        }
      }

      function u(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t
        }
      }

      function l(t) {
        return function (e) {
          return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ct(e) === t : e.disabled === t : "label" in e && e.disabled === t
        }
      }

      function c(t) {
        return r(function (e) {
          return e = +e, r(function (n, r) {
            for (var i, o = t([], n.length, e), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
          })
        })
      }

      function f(t) {
        return t && "undefined" != typeof t.getElementsByTagName && t
      }

      function h() {}

      function d(t) {
        for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
        return r
      }

      function p(t, e, n) {
        var r = e.dir,
          i = e.next,
          o = i || r,
          s = n && "parentNode" === o,
          a = F++;
        return e.first ? function (e, n, i) {
          for (; e = e[r];)
            if (1 === e.nodeType || s) return t(e, n, i);
          return !1
        } : function (e, n, u) {
          var l, c, f, h = [B, a];
          if (u) {
            for (; e = e[r];)
              if ((1 === e.nodeType || s) && t(e, n, u)) return !0
          } else
            for (; e = e[r];)
              if (1 === e.nodeType || s)
                if (c = (f = e[I] || (e[I] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), i && i === e.nodeName.toLowerCase()) e = e[r] || e;
                else {
                  if ((l = c[o]) && l[0] === B && l[1] === a) return h[2] = l[2];
                  if ((c[o] = h)[2] = t(e, n, u)) return !0
                } return !1
        }
      }

      function m(t) {
        return 1 < t.length ? function (e, n, r) {
          for (var i = t.length; i--;)
            if (!t[i](e, n, r)) return !1;
          return !0
        } : t[0]
      }

      function g(t, e, n, r, i) {
        for (var o, s = [], a = 0, u = t.length, l = null != e; a < u; a++)(o = t[a]) && (n && !n(o, r, i) || (s.push(o), l && e.push(a)));
        return s
      }

      function v(t, n, i, o, s, a) {
        return o && !o[I] && (o = v(o)), s && !s[I] && (s = v(s, a)), r(function (r, a, u, l) {
          var c, f, h, d = [],
            p = [],
            m = a.length,
            v = r || function (t, n, r) {
              for (var i = 0, o = n.length; i < o; i++) e(t, n[i], r);
              return r
            }(n || "*", u.nodeType ? [u] : u, []),
            y = !t || !r && n ? v : g(v, d, t, u, l),
            b = i ? s || (r ? t : m || o) ? [] : a : y;
          if (i && i(y, b, u, l), o)
            for (c = g(b, p), o(c, [], u, l), f = c.length; f--;)(h = c[f]) && (b[p[f]] = !(y[p[f]] = h));
          if (r) {
            if (s || t) {
              if (s) {
                for (c = [], f = b.length; f--;)(h = b[f]) && c.push(y[f] = h);
                s(null, b = [], c, l)
              }
              for (f = b.length; f--;)(h = b[f]) && -1 < (c = s ? Z(r, h) : d[f]) && (r[c] = !(a[c] = h))
            }
          } else b = g(b === a ? b.splice(m, b.length) : b), s ? s(null, a, b, l) : K.apply(a, b)
        })
      }

      function y(t) {
        for (var e, n, r, i = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, u = p(function (t) {
            return t === e
          }, s, !0), l = p(function (t) {
            return -1 < Z(e, t)
          }, s, !0), c = [function (t, n, r) {
            var i = !o && (r || n !== L) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
            return e = null, i
          }]; a < i; a++)
          if (n = x.relative[t[a].type]) c = [p(m(c), n)];
          else {
            if ((n = x.filter[t[a].type].apply(null, t[a].matches))[I]) {
              for (r = ++a; r < i && !x.relative[t[r].type]; r++);
              return v(1 < a && m(c), 1 < a && d(t.slice(0, a - 1).concat({
                value: " " === t[a - 2].type ? "*" : ""
              })).replace(st, "$1"), n, a < r && y(t.slice(a, r)), r < i && y(t = t.slice(r)), r < i && d(t))
            }
            c.push(n)
          } return m(c)
      }
      var b, w, x, E, S, C, k, T, L, A, j, N, D, q, P, R, O, _, M, I = "sizzle" + 1 * new Date,
        H = t.document,
        B = 0,
        F = 0,
        W = n(),
        $ = n(),
        U = n(),
        z = n(),
        V = function (t, e) {
          return t === e && (j = !0), 0
        },
        X = {}.hasOwnProperty,
        Y = [],
        J = Y.pop,
        G = Y.push,
        K = Y.push,
        Q = Y.slice,
        Z = function (t, e) {
          for (var n = 0, r = t.length; n < r; n++)
            if (t[n] === e) return n;
          return -1
        },
        tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        et = "[\\x20\\t\\r\\n\\f]",
        nt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        rt = "\\[" + et + "*(" + nt + ")(?:" + et + "*([*^$|!~]?=)" + et + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + et + "*\\]",
        it = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
        ot = new RegExp(et + "+", "g"),
        st = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
        at = new RegExp("^" + et + "*," + et + "*"),
        ut = new RegExp("^" + et + "*([>+~]|" + et + ")" + et + "*"),
        lt = new RegExp(et + "|>"),
        ct = new RegExp(it),
        ft = new RegExp("^" + nt + "$"),
        ht = {
          ID: new RegExp("^#(" + nt + ")"),
          CLASS: new RegExp("^\\.(" + nt + ")"),
          TAG: new RegExp("^(" + nt + "|[*])"),
          ATTR: new RegExp("^" + rt),
          PSEUDO: new RegExp("^" + it),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + tt + ")$", "i"),
          needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
        },
        dt = /HTML$/i,
        pt = /^(?:input|select|textarea|button)$/i,
        mt = /^h\d$/i,
        gt = /^[^{]+\{\s*\[native \w/,
        vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        yt = /[+~]/,
        bt = new RegExp("\\\\([\\da-f]{1,6}" + et + "?|(" + et + ")|.)", "ig"),
        wt = function (t, e, n) {
          var r = "0x" + e - 65536;
          return r != r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        Et = function (t, e) {
          return e ? "\0" === t ? "\ufffd" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        },
        St = function () {
          N()
        },
        Ct = p(function (t) {
          return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        K.apply(Y = Q.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType
      } catch (b) {
        K = {
          apply: Y.length ? function (t, e) {
            G.apply(t, Q.call(e))
          } : function (t, e) {
            for (var n = t.length, r = 0; t[n++] = e[r++];);
            t.length = n - 1
          }
        }
      }
      for (b in w = e.support = {}, S = e.isXML = function (t) {
          var e = t.namespaceURI,
            n = (t.ownerDocument || t).documentElement;
          return !dt.test(e || n && n.nodeName || "HTML")
        }, N = e.setDocument = function (t) {
          var e, n, r = t ? t.ownerDocument || t : H;
          return r !== D && 9 === r.nodeType && r.documentElement && (q = (D = r).documentElement, P = !S(D), H !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", St, !1) : n.attachEvent && n.attachEvent("onunload", St)), w.attributes = i(function (t) {
            return t.className = "i", !t.getAttribute("className")
          }), w.getElementsByTagName = i(function (t) {
            return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
          }), w.getElementsByClassName = gt.test(D.getElementsByClassName), w.getById = i(function (t) {
            return q.appendChild(t).id = I, !D.getElementsByName || !D.getElementsByName(I).length
          }), w.getById ? (x.filter.ID = function (t) {
            var e = t.replace(bt, wt);
            return function (t) {
              return t.getAttribute("id") === e
            }
          }, x.find.ID = function (t, e) {
            if ("undefined" != typeof e.getElementById && P) {
              var n = e.getElementById(t);
              return n ? [n] : []
            }
          }) : (x.filter.ID = function (t) {
            var e = t.replace(bt, wt);
            return function (t) {
              var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
              return n && n.value === e
            }
          }, x.find.ID = function (t, e) {
            if ("undefined" != typeof e.getElementById && P) {
              var n, r, i, o = e.getElementById(t);
              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                for (i = e.getElementsByName(t), r = 0; o = i[r++];)
                  if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
              }
              return []
            }
          }), x.find.TAG = w.getElementsByTagName ? function (t, e) {
            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
          } : function (t, e) {
            var n, r = [],
              i = 0,
              o = e.getElementsByTagName(t);
            if ("*" === t) {
              for (; n = o[i++];) 1 === n.nodeType && r.push(n);
              return r
            }
            return o
          }, x.find.CLASS = w.getElementsByClassName && function (t, e) {
            if ("undefined" != typeof e.getElementsByClassName && P) return e.getElementsByClassName(t)
          }, O = [], R = [], (w.qsa = gt.test(D.querySelectorAll)) && (i(function (t) {
            q.appendChild(t).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + et + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || R.push("\\[" + et + "*(?:value|" + tt + ")"), t.querySelectorAll("[id~=" + I + "-]").length || R.push("~="), t.querySelectorAll(":checked").length || R.push(":checked"), t.querySelectorAll("a#" + I + "+*").length || R.push(".#.+[+~]")
          }), i(function (t) {
            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var e = D.createElement("input");
            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && R.push("name" + et + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"), q.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), R.push(",.*:")
          })), (w.matchesSelector = gt.test(_ = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function (t) {
            w.disconnectedMatch = _.call(t, "*"), _.call(t, "[s!='']:x"), O.push("!=", it)
          }), R = R.length && new RegExp(R.join("|")), O = O.length && new RegExp(O.join("|")), e = gt.test(q.compareDocumentPosition), M = e || gt.test(q.contains) ? function (t, e) {
            var n = 9 === t.nodeType ? t.documentElement : t,
              r = e && e.parentNode;
            return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
          } : function (t, e) {
            if (e)
              for (; e = e.parentNode;)
                if (e === t) return !0;
            return !1
          }, V = e ? function (t, e) {
            if (t === e) return j = !0, 0;
            var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
            return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === H && M(H, t) ? -1 : e === D || e.ownerDocument === H && M(H, e) ? 1 : A ? Z(A, t) - Z(A, e) : 0 : 4 & n ? -1 : 1)
          } : function (t, e) {
            if (t === e) return j = !0, 0;
            var n, r = 0,
              i = t.parentNode,
              o = e.parentNode,
              a = [t],
              u = [e];
            if (!i || !o) return t === D ? -1 : e === D ? 1 : i ? -1 : o ? 1 : A ? Z(A, t) - Z(A, e) : 0;
            if (i === o) return s(t, e);
            for (n = t; n = n.parentNode;) a.unshift(n);
            for (n = e; n = n.parentNode;) u.unshift(n);
            for (; a[r] === u[r];) r++;
            return r ? s(a[r], u[r]) : a[r] === H ? -1 : u[r] === H ? 1 : 0
          }), D
        }, e.matches = function (t, n) {
          return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
          if ((t.ownerDocument || t) !== D && N(t), w.matchesSelector && P && !z[n + " "] && (!O || !O.test(n)) && (!R || !R.test(n))) try {
            var r = _.call(t, n);
            if (r || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
          } catch (t) {
            z(n, !0)
          }
          return 0 < e(n, D, null, [t]).length
        }, e.contains = function (t, e) {
          return (t.ownerDocument || t) !== D && N(t), M(t, e)
        }, e.attr = function (t, e) {
          (t.ownerDocument || t) !== D && N(t);
          var n = x.attrHandle[e.toLowerCase()],
            r = n && X.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
          return void 0 !== r ? r : w.attributes || !P ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, e.escape = function (t) {
          return (t + "").replace(xt, Et)
        }, e.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
          var e, n = [],
            r = 0,
            i = 0;
          if (j = !w.detectDuplicates, A = !w.sortStable && t.slice(0), t.sort(V), j) {
            for (; e = t[i++];) e === t[i] && (r = n.push(i));
            for (; r--;) t.splice(n[r], 1)
          }
          return A = null, t
        }, E = e.getText = function (t) {
          var e, n = "",
            r = 0,
            i = t.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) n += E(t)
            } else if (3 === i || 4 === i) return t.nodeValue
          } else
            for (; e = t[r++];) n += E(e);
          return n
        }, (x = e.selectors = {
          cacheLength: 50,
          createPseudo: r,
          match: ht,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function (t) {
              return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
            },
            CHILD: function (t) {
              return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
            },
            PSEUDO: function (t) {
              var e, n = !t[6] && t[2];
              return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
            }
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(bt, wt).toLowerCase();
              return "*" === t ? function () {
                return !0
              } : function (t) {
                return t.nodeName && t.nodeName.toLowerCase() === e
              }
            },
            CLASS: function (t) {
              var e = W[t + " "];
              return e || (e = new RegExp("(^|" + et + ")" + t + "(" + et + "|$)")) && W(t, function (t) {
                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
              })
            },
            ATTR: function (t, n, r) {
              return function (i) {
                var o = e.attr(i, t);
                return null == o ? "!=" === n : !n || (o += "",
                  "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && -1 < o.indexOf(r) : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? -1 < (" " + o.replace(ot, " ") + " ").indexOf(r) : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
              }
            },
            CHILD: function (t, e, n, r, i) {
              var o = "nth" !== t.slice(0, 3),
                s = "last" !== t.slice(-4),
                a = "of-type" === e;
              return 1 === r && 0 === i ? function (t) {
                return !!t.parentNode
              } : function (e, n, u) {
                var l, c, f, h, d, p, m = o !== s ? "nextSibling" : "previousSibling",
                  g = e.parentNode,
                  v = a && e.nodeName.toLowerCase(),
                  y = !u && !a,
                  b = !1;
                if (g) {
                  if (o) {
                    for (; m;) {
                      for (h = e; h = h[m];)
                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                      p = m = "only" === t && !p && "nextSibling"
                    }
                    return !0
                  }
                  if (p = [s ? g.firstChild : g.lastChild], s && y) {
                    for (b = (d = (l = (c = (f = (h = g)[I] || (h[I] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] || [])[0] === B && l[1]) && l[2], h = d && g.childNodes[d]; h = ++d && h && h[m] || (b = d = 0) || p.pop();)
                      if (1 === h.nodeType && ++b && h === e) {
                        c[t] = [B, d, b];
                        break
                      }
                  } else if (y && (b = d = (l = (c = (f = (h = e)[I] || (h[I] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] || [])[0] === B && l[1]), !1 === b)
                    for (;
                      (h = ++d && h && h[m] || (b = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((c = (f = h[I] || (h[I] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] = [B, b]), h !== e)););
                  return (b -= i) === r || b % r == 0 && 0 <= b / r
                }
              }
            },
            PSEUDO: function (t, n) {
              var i, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
              return o[I] ? o(n) : 1 < o.length ? (i = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
                for (var r, i = o(t, n), s = i.length; s--;) t[r = Z(t, i[s])] = !(e[r] = i[s])
              }) : function (t) {
                return o(t, 0, i)
              }) : o
            }
          },
          pseudos: {
            not: r(function (t) {
              var e = [],
                n = [],
                i = k(t.replace(st, "$1"));
              return i[I] ? r(function (t, e, n, r) {
                for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
              }) : function (t, r, o) {
                return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
              }
            }),
            has: r(function (t) {
              return function (n) {
                return 0 < e(t, n).length
              }
            }),
            contains: r(function (t) {
              return t = t.replace(bt, wt),
                function (e) {
                  return -1 < (e.textContent || E(e)).indexOf(t)
                }
            }),
            lang: r(function (t) {
              return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(),
                function (e) {
                  var n;
                  do {
                    if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1
                }
            }),
            target: function (e) {
              var n = t.location && t.location.hash;
              return n && n.slice(1) === e.id
            },
            root: function (t) {
              return t === q
            },
            focus: function (t) {
              return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
            },
            enabled: l(!1),
            disabled: l(!0),
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && !!t.checked || "option" === e && !!t.selected
            },
            selected: function (t) {
              return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0
            },
            parent: function (t) {
              return !x.pseudos.empty(t)
            },
            header: function (t) {
              return mt.test(t.nodeName)
            },
            input: function (t) {
              return pt.test(t.nodeName)
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && "button" === t.type || "button" === e
            },
            text: function (t) {
              var e;
              return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
            },
            first: c(function () {
              return [0]
            }),
            last: c(function (t, e) {
              return [e - 1]
            }),
            eq: c(function (t, e, n) {
              return [n < 0 ? n + e : n]
            }),
            even: c(function (t, e) {
              for (var n = 0; n < e; n += 2) t.push(n);
              return t
            }),
            odd: c(function (t, e) {
              for (var n = 1; n < e; n += 2) t.push(n);
              return t
            }),
            lt: c(function (t, e, n) {
              for (var r = n < 0 ? n + e : e < n ? e : n; 0 <= --r;) t.push(r);
              return t
            }),
            gt: c(function (t, e, n) {
              for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
              return t
            })
          }
        }).pseudos.nth = x.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) x.pseudos[b] = a(b);
      for (b in {
          submit: !0,
          reset: !0
        }) x.pseudos[b] = u(b);
      return h.prototype = x.filters = x.pseudos, x.setFilters = new h, C = e.tokenize = function (t, n) {
        var r, i, o, s, a, u, l, c = $[t + " "];
        if (c) return n ? 0 : c.slice(0);
        for (a = t, u = [], l = x.preFilter; a;) {
          for (s in r && !(i = at.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ut.exec(a)) && (r = i.shift(), o.push({
              value: r,
              type: i[0].replace(st, " ")
            }), a = a.slice(r.length)), x.filter) !(i = ht[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
            value: r,
            type: s,
            matches: i
          }), a = a.slice(r.length));
          if (!r) break
        }
        return n ? a.length : a ? e.error(t) : $(t, u).slice(0)
      }, k = e.compile = function (t, n) {
        var i, o, s, a, u, l, c = [],
          f = [],
          h = U[t + " "];
        if (!h) {
          for (n || (n = C(t)), i = n.length; i--;)(h = y(n[i]))[I] ? c.push(h) : f.push(h);
          (h = U(t, (o = f, a = 0 < (s = c).length, u = 0 < o.length, l = function (t, n, r, i, l) {
            var c, f, h, d = 0,
              p = "0",
              m = t && [],
              v = [],
              y = L,
              b = t || u && x.find.TAG("*", l),
              w = B += null == y ? 1 : Math.random() || .1,
              E = b.length;
            for (l && (L = n === D || n || l); p !== E && null != (c = b[p]); p++) {
              if (u && c) {
                for (f = 0, n || c.ownerDocument === D || (N(c), r = !P); h = o[f++];)
                  if (h(c, n || D, r)) {
                    i.push(c);
                    break
                  } l && (B = w)
              }
              a && ((c = !h && c) && d--, t && m.push(c))
            }
            if (d += p, a && p !== d) {
              for (f = 0; h = s[f++];) h(m, v, n, r);
              if (t) {
                if (0 < d)
                  for (; p--;) m[p] || v[p] || (v[p] = J.call(i));
                v = g(v)
              }
              K.apply(i, v), l && !t && 0 < v.length && 1 < d + s.length && e.uniqueSort(i)
            }
            return l && (B = w, L = y), m
          }, a ? r(l) : l))).selector = t
        }
        return h
      }, T = e.select = function (t, e, n, r) {
        var i, o, s, a, u, l = "function" == typeof t && t,
          c = !r && C(t = l.selector || t);
        if (n = n || [], 1 === c.length) {
          if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === e.nodeType && P && x.relative[o[1].type]) {
            if (!(e = (x.find.ID(s.matches[0].replace(bt, wt), e) || [])[0])) return n;
            l && (e = e.parentNode), t = t.slice(o.shift().value.length)
          }
          for (i = ht.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i], !x.relative[a = s.type]);)
            if ((u = x.find[a]) && (r = u(s.matches[0].replace(bt, wt), yt.test(o[0].type) && f(e.parentNode) || e))) {
              if (o.splice(i, 1), !(t = r.length && d(o))) return K.apply(n, r), n;
              break
            }
        }
        return (l || k(t, c))(r, e, !P, n, !e || yt.test(t) && f(e.parentNode) || e), n
      }, w.sortStable = I.split("").sort(V).join("") === I, w.detectDuplicates = !!j, N(), w.sortDetached = i(function (t) {
        return 1 & t.compareDocumentPosition(D.createElement("fieldset"))
      }), i(function (t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
      }) || o("type|href|height|width", function (t, e, n) {
        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
      }), w.attributes && i(function (t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
      }) || o("value", function (t, e, n) {
        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
      }), i(function (t) {
        return null == t.getAttribute("disabled")
      }) || o(tt, function (t, e, n) {
        var r;
        if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
      }), e
    }(t);
    pt.find = gt, pt.expr = gt.selectors, pt.expr[":"] = pt.expr.pseudos, pt.uniqueSort = pt.unique = gt.uniqueSort, pt.text = gt.getText, pt.isXMLDoc = gt.isXML, pt.contains = gt.contains, pt.escapeSelector = gt.escape;
    var vt = function (t, e, n) {
        for (var r = [], i = void 0 !== n;
          (t = t[e]) && 9 !== t.nodeType;)
          if (1 === t.nodeType) {
            if (i && pt(t).is(n)) break;
            r.push(t)
          } return r
      },
      yt = function (t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
      },
      bt = pt.expr.match.needsContext,
      wt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    pt.filter = function (t, e, n) {
      var r = e[0];
      return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? pt.find.matchesSelector(r, t) ? [r] : [] : pt.find.matches(t, pt.grep(e, function (t) {
        return 1 === t.nodeType
      }))
    }, pt.fn.extend({
      find: function (t) {
        var e, n, r = this.length,
          i = this;
        if ("string" != typeof t) return this.pushStack(pt(t).filter(function () {
          for (e = 0; e < r; e++)
            if (pt.contains(i[e], this)) return !0
        }));
        for (n = this.pushStack([]), e = 0; e < r; e++) pt.find(t, i[e], n);
        return 1 < r ? pt.uniqueSort(n) : n
      },
      filter: function (t) {
        return this.pushStack(s(this, t || [], !1))
      },
      not: function (t) {
        return this.pushStack(s(this, t || [], !0))
      },
      is: function (t) {
        return !!s(this, "string" == typeof t && bt.test(t) ? pt(t) : t || [], !1).length
      }
    });
    var xt, Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (pt.fn.init = function (t, e, n) {
      var r, i;
      if (!t) return this;
      if (n = n || xt, "string" == typeof t) {
        if (!(r = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : Et.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
        if (r[1]) {
          if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), wt.test(r[1]) && pt.isPlainObject(e))
            for (r in e) ct(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
          return this
        }
        return (i = Q.getElementById(r[2])) && (this[0] = i, this.length = 1), this
      }
      return t.nodeType ? (this[0] = t, this.length = 1, this) : ct(t) ? void 0 !== n.ready ? n.ready(t) : t(pt) : pt.makeArray(t, this)
    }).prototype = pt.fn, xt = pt(Q);
    var St = /^(?:parents|prev(?:Until|All))/,
      Ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    pt.fn.extend({
      has: function (t) {
        var e = pt(t, this),
          n = e.length;
        return this.filter(function () {
          for (var t = 0; t < n; t++)
            if (pt.contains(this, e[t])) return !0
        })
      },
      closest: function (t, e) {
        var n, r = 0,
          i = this.length,
          o = [],
          s = "string" != typeof t && pt(t);
        if (!bt.test(t))
          for (; r < i; r++)
            for (n = this[r]; n && n !== e; n = n.parentNode)
              if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && pt.find.matchesSelector(n, t))) {
                o.push(n);
                break
              } return this.pushStack(1 < o.length ? pt.uniqueSort(o) : o)
      },
      index: function (t) {
        return t ? "string" == typeof t ? rt.call(pt(t), this[0]) : rt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function (t, e) {
        return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))))
      },
      addBack: function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }
    }), pt.each({
      parent: function (t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
      },
      parents: function (t) {
        return vt(t, "parentNode")
      },
      parentsUntil: function (t, e, n) {
        return vt(t, "parentNode", n)
      },
      next: function (t) {
        return a(t, "nextSibling")
      },
      prev: function (t) {
        return a(t, "previousSibling")
      },
      nextAll: function (t) {
        return vt(t, "nextSibling")
      },
      prevAll: function (t) {
        return vt(t, "previousSibling")
      },
      nextUntil: function (t, e, n) {
        return vt(t, "nextSibling", n)
      },
      prevUntil: function (t, e, n) {
        return vt(t, "previousSibling", n)
      },
      siblings: function (t) {
        return yt((t.parentNode || {}).firstChild, t)
      },
      children: function (t) {
        return yt(t.firstChild)
      },
      contents: function (t) {
        return "undefined" != typeof t.contentDocument ? t.contentDocument : (o(t, "template") && (t = t.content || t), pt.merge([], t.childNodes))
      }
    }, function (t, e) {
      pt.fn[t] = function (n, r) {
        var i = pt.map(this, e, n);
        return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = pt.filter(r, i)), 1 < this.length && (Ct[t] || pt.uniqueSort(i), St.test(t) && i.reverse()), this.pushStack(i)
      }
    });
    var kt = /[^\x20\t\r\n\f]+/g;
    pt.Callbacks = function (t) {
      var e, n;
      t = "string" == typeof t ? (e = t, n = {}, pt.each(e.match(kt) || [], function (t, e) {
        n[e] = !0
      }), n) : pt.extend({}, t);
      var i, o, s, a, u = [],
        l = [],
        c = -1,
        f = function () {
          for (a = a || t.once, s = i = !0; l.length; c = -1)
            for (o = l.shift(); ++c < u.length;) !1 === u[c].apply(o[0], o[1]) && t.stopOnFalse && (c = u.length, o = !1);
          t.memory || (o = !1), i = !1, a && (u = o ? [] : "")
        },
        h = {
          add: function () {
            return u && (o && !i && (c = u.length - 1, l.push(o)), function e(n) {
              pt.each(n, function (n, i) {
                ct(i) ? t.unique && h.has(i) || u.push(i) : i && i.length && "string" !== r(i) && e(i)
              })
            }(arguments), o && !i && f()), this
          },
          remove: function () {
            return pt.each(arguments, function (t, e) {
              for (var n; - 1 < (n = pt.inArray(e, u, n));) u.splice(n, 1), n <= c && c--
            }), this
          },
          has: function (t) {
            return t ? -1 < pt.inArray(t, u) : 0 < u.length
          },
          empty: function () {
            return u && (u = []), this
          },
          disable: function () {
            return a = l = [], u = o = "", this
          },
          disabled: function () {
            return !u
          },
          lock: function () {
            return a = l = [], o || i || (u = o = ""), this
          },
          locked: function () {
            return !!a
          },
          fireWith: function (t, e) {
            return a || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), i || f()), this
          },
          fire: function () {
            return h.fireWith(this, arguments), this
          },
          fired: function () {
            return !!s
          }
        };
      return h
    }, pt.extend({
      Deferred: function (e) {
        var n = [
            ["notify", "progress", pt.Callbacks("memory"), pt.Callbacks("memory"), 2],
            ["resolve", "done", pt.Callbacks("once memory"), pt.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", pt.Callbacks("once memory"), pt.Callbacks("once memory"), 1, "rejected"]
          ],
          r = "pending",
          i = {
            state: function () {
              return r
            },
            always: function () {
              return o.done(arguments).fail(arguments), this
            },
            "catch": function (t) {
              return i.then(null, t)
            },
            pipe: function () {
              var t = arguments;
              return pt.Deferred(function (e) {
                pt.each(n, function (n, r) {
                  var i = ct(t[r[4]]) && t[r[4]];
                  o[r[1]](function () {
                    var t = i && i.apply(this, arguments);
                    t && ct(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[r[0] + "With"](this, i ? [t] : arguments)
                  })
                }), t = null
              }).promise()
            },
            then: function (e, r, i) {
              function o(e, n, r, i) {
                return function () {
                  var a = this,
                    c = arguments,
                    f = function () {
                      var t, f;
                      if (!(e < s)) {
                        if ((t = r.apply(a, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                        f = t && ("object" == typeof t || "function" == typeof t) && t.then, ct(f) ? i ? f.call(t, o(s, n, u, i), o(s, n, l, i)) : (s++, f.call(t, o(s, n, u, i), o(s, n, l, i), o(s, n, u, n.notifyWith))) : (r !== u && (a = void 0, c = [t]), (i || n.resolveWith)(a, c))
                      }
                    },
                    h = i ? f : function () {
                      try {
                        f()
                      } catch (f) {
                        pt.Deferred.exceptionHook && pt.Deferred.exceptionHook(f, h.stackTrace), s <= e + 1 && (r !== l && (a = void 0, c = [f]), n.rejectWith(a, c))
                      }
                    };
                  e ? h() : (pt.Deferred.getStackHook && (h.stackTrace = pt.Deferred.getStackHook()), t.setTimeout(h))
                }
              }
              var s = 0;
              return pt.Deferred(function (t) {
                n[0][3].add(o(0, t, ct(i) ? i : u, t.notifyWith)), n[1][3].add(o(0, t, ct(e) ? e : u)), n[2][3].add(o(0, t, ct(r) ? r : l))
              }).promise()
            },
            promise: function (t) {
              return null != t ? pt.extend(t, i) : i
            }
          },
          o = {};
        return pt.each(n, function (t, e) {
          var s = e[2],
            a = e[5];
          i[e[1]] = s.add, a && s.add(function () {
            r = a
          }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), s.add(e[3].fire), o[e[0]] = function () {
            return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
          }, o[e[0] + "With"] = s.fireWith
        }), i.promise(o), e && e.call(o, o), o
      },
      when: function (t) {
        var e = arguments.length,
          n = e,
          r = Array(n),
          i = tt.call(arguments),
          o = pt.Deferred(),
          s = function (t) {
            return function (n) {
              r[t] = this, i[t] = 1 < arguments.length ? tt.call(arguments) : n, --e || o.resolveWith(r, i)
            }
          };
        if (e <= 1 && (c(t, o.done(s(n)).resolve, o.reject, !e), "pending" === o.state() || ct(i[n] && i[n].then))) return o.then();
        for (; n--;) c(i[n], s(n), o.reject);
        return o.promise()
      }
    });
    var Tt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    pt.Deferred.exceptionHook = function (e, n) {
      t.console && t.console.warn && e && Tt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, pt.readyException = function (e) {
      t.setTimeout(function () {
        throw e
      })
    };
    var Lt = pt.Deferred();
    pt.fn.ready = function (t) {
      return Lt.then(t)["catch"](function (t) {
        pt.readyException(t)
      }), this
    }, pt.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (t) {
        (!0 === t ? --pt.readyWait : pt.isReady) || (pt.isReady = !0) !== t && 0 < --pt.readyWait || Lt.resolveWith(Q, [pt])
      }
    }), pt.ready.then = Lt.then, "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? t.setTimeout(pt.ready) : (Q.addEventListener("DOMContentLoaded", f), t.addEventListener("load", f));
    var At = function (t, e, n, i, o, s, a) {
        var u = 0,
          l = t.length,
          c = null == n;
        if ("object" === r(n))
          for (u in o = !0, n) At(t, e, u, n[u], !0, s, a);
        else if (void 0 !== i && (o = !0, ct(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
            return c.call(pt(t), n)
          })), e))
          for (; u < l; u++) e(t[u], n, a ? i : i.call(t[u], u, e(t[u], n)));
        return o ? t : c ? e.call(t) : l ? e(t[0], n) : s
      },
      jt = /^-ms-/,
      Nt = /-([a-z])/g,
      Dt = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
      };
    p.uid = 1, p.prototype = {
      cache: function (t) {
        var e = t[this.expando];
        return e || (e = {}, Dt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
          value: e,
          configurable: !0
        }))), e
      },
      set: function (t, e, n) {
        var r, i = this.cache(t);
        if ("string" == typeof e) i[d(e)] = n;
        else
          for (r in e) i[d(r)] = e[r];
        return i
      },
      get: function (t, e) {
        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][d(e)]
      },
      access: function (t, e, n) {
        return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
      },
      remove: function (t, e) {
        var n, r = t[this.expando];
        if (void 0 !== r) {
          if (void 0 !== e) {
            n = (e = Array.isArray(e) ? e.map(d) : (e = d(e)) in r ? [e] : e.match(kt) || []).length;
            for (; n--;) delete r[e[n]]
          }(void 0 === e || pt.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
        }
      },
      hasData: function (t) {
        var e = t[this.expando];
        return void 0 !== e && !pt.isEmptyObject(e)
      }
    };
    var qt = new p,
      Pt = new p,
      Rt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Ot = /[A-Z]/g;
    pt.extend({
      hasData: function (t) {
        return Pt.hasData(t) || qt.hasData(t)
      },
      data: function (t, e, n) {
        return Pt.access(t, e, n)
      },
      removeData: function (t, e) {
        Pt.remove(t, e)
      },
      _data: function (t, e, n) {
        return qt.access(t, e, n)
      },
      _removeData: function (t, e) {
        qt.remove(t, e)
      }
    }), pt.fn.extend({
      data: function (t, e) {
        var n, r, i, o = this[0],
          s = o && o.attributes;
        if (void 0 === t) {
          if (this.length && (i = Pt.get(o), 1 === o.nodeType && !qt.get(o, "hasDataAttrs"))) {
            for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = d(r.slice(5)), m(o, r, i[r]));
            qt.set(o, "hasDataAttrs", !0)
          }
          return i
        }
        return "object" == typeof t ? this.each(function () {
          Pt.set(this, t)
        }) : At(this, function (e) {
          var n;
          if (o && void 0 === e) return void 0 !== (n = Pt.get(o, t)) ? n : void 0 !== (n = m(o, t)) ? n : void 0;
          this.each(function () {
            Pt.set(this, t, e)
          })
        }, null, e, 1 < arguments.length, null, !0)
      },
      removeData: function (t) {
        return this.each(function () {
          Pt.remove(this, t)
        })
      }
    }), pt.extend({
      queue: function (t, e, n) {
        var r;
        if (t) return e = (e || "fx") + "queue", r = qt.get(t, e), n && (!r || Array.isArray(n) ? r = qt.access(t, e, pt.makeArray(n)) : r.push(n)), r || []
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = pt.queue(t, e),
          r = n.length,
          i = n.shift(),
          o = pt._queueHooks(t, e);
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, function () {
          pt.dequeue(t, e)
        }, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return qt.get(t, n) || qt.access(t, n, {
          empty: pt.Callbacks("once memory").add(function () {
            qt.remove(t, [e + "queue", n])
          })
        })
      }
    }), pt.fn.extend({
      queue: function (t, e) {
        var n = 2;
        return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? pt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
          var n = pt.queue(this, t, e);
          pt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && pt.dequeue(this, t)
        })
      },
      dequeue: function (t) {
        return this.each(function () {
          pt.dequeue(this, t)
        })
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", [])
      },
      promise: function (t, e) {
        var n, r = 1,
          i = pt.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --r || i.resolveWith(o, [o])
          };
        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = qt.get(o[s], t + "queueHooks")) && n.empty && (r++, n.empty.add(a));
        return a(), i.promise(e)
      }
    });
    var _t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Mt = new RegExp("^(?:([+-])=|)(" + _t + ")([a-z%]*)$", "i"),
      It = ["Top", "Right", "Bottom", "Left"],
      Ht = Q.documentElement,
      Bt = function (t) {
        return pt.contains(t.ownerDocument, t)
      },
      Ft = {
        composed: !0
      };
    Ht.getRootNode && (Bt = function (t) {
      return pt.contains(t.ownerDocument, t) || t.getRootNode(Ft) === t.ownerDocument
    });
    var Wt = function (t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && Bt(t) && "none" === pt.css(t, "display")
      },
      $t = function (t, e, n, r) {
        var i, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        for (o in i = n.apply(t, r || []), e) t.style[o] = s[o];
        return i
      },
      Ut = {};
    pt.fn.extend({
      show: function () {
        return v(this, !0)
      },
      hide: function () {
        return v(this)
      },
      toggle: function (t) {
        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
          Wt(this) ? pt(this).show() : pt(this).hide()
        })
      }
    });
    var zt = /^(?:checkbox|radio)$/i,
      Vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      Xt = /^$|^module$|\/(?:java|ecma)script/i,
      Yt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td;
    var Jt, Gt, Kt = /<|&#?\w+;/;
    Jt = Q.createDocumentFragment().appendChild(Q.createElement("div")), (Gt = Q.createElement("input")).setAttribute("type", "radio"), Gt.setAttribute("checked", "checked"), Gt.setAttribute("name", "t"), Jt.appendChild(Gt), lt.checkClone = Jt.cloneNode(!0).cloneNode(!0).lastChild.checked, Jt.innerHTML = "<textarea>x</textarea>", lt.noCloneChecked = !!Jt.cloneNode(!0).lastChild.defaultValue;
    var Qt = /^key/,
      Zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      te = /^([^.]*)(?:\.(.+)|)/;
    pt.event = {
      global: {},
      add: function (t, e, n, r, i) {
        var o, s, a, u, l, c, f, h, d, p, m, g = qt.get(t);
        if (g)
          for (n.handler && (n = (o = n).handler, i = o.selector), i && pt.find.matchesSelector(Ht, i), n.guid || (n.guid = pt.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function (e) {
              return void 0 !== pt && pt.event.triggered !== e.type ? pt.event.dispatch.apply(t, arguments) : void 0
            }), l = (e = (e || "").match(kt) || [""]).length; l--;) d = m = (a = te.exec(e[l]) || [])[1], p = (a[2] || "").split(".").sort(), d && (f = pt.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = pt.event.special[d] || {}, c = pt.extend({
            type: d,
            origType: m,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && pt.expr.match.needsContext.test(i),
            namespace: p.join(".")
          }, o), (h = u[d]) || ((h = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, p, s) || t.addEventListener && t.addEventListener(d, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), pt.event.global[d] = !0)
      },
      remove: function (t, e, n, r, i) {
        var o, s, a, u, l, c, f, h, d, p, m, g = qt.hasData(t) && qt.get(t);
        if (g && (u = g.events)) {
          for (l = (e = (e || "").match(kt) || [""]).length; l--;)
            if (d = m = (a = te.exec(e[l]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
              for (f = pt.event.special[d] || {}, h = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(t, c));
              s && !h.length && (f.teardown && !1 !== f.teardown.call(t, p, g.handle) || pt.removeEvent(t, d, g.handle), delete u[d])
            } else
              for (d in u) pt.event.remove(t, d + e[l], n, r, !0);
          pt.isEmptyObject(u) && qt.remove(t, "handle events")
        }
      },
      dispatch: function (t) {
        var e, n, r, i, o, s, a = pt.event.fix(t),
          u = new Array(arguments.length),
          l = (qt.get(this, "events") || {})[a.type] || [],
          c = pt.event.special[a.type] || {};
        for (u[0] = a, e = 1; e < arguments.length; e++) u[e] = arguments[e];
        if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
          for (s = pt.event.handlers.call(this, a, l), e = 0;
            (i = s[e++]) && !a.isPropagationStopped();)
            for (a.currentTarget = i.elem, n = 0;
              (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((pt.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, a), a.result
        }
      },
      handlers: function (t, e) {
        var n, r, i, o, s, a = [],
          u = e.delegateCount,
          l = t.target;
        if (u && l.nodeType && !("click" === t.type && 1 <= t.button))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
              for (o = [], s = {}, n = 0; n < u; n++) void 0 === s[i = (r = e[n]).selector + " "] && (s[i] = r.needsContext ? -1 < pt(i, this).index(l) : pt.find(i, this, null, [l]).length), s[i] && o.push(r);
              o.length && a.push({
                elem: l,
                handlers: o
              })
            } return l = this, u < e.length && a.push({
          elem: l,
          handlers: e.slice(u)
        }), a
      },
      addProp: function (t, e) {
        Object.defineProperty(pt.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: ct(e) ? function () {
            if (this.originalEvent) return e(this.originalEvent)
          } : function () {
            if (this.originalEvent) return this.originalEvent[t]
          },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e
            })
          }
        })
      },
      fix: function (t) {
        return t[pt.expando] ? t : new pt.Event(t)
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function (t) {
            var e = this || t;
            return zt.test(e.type) && e.click && o(e, "input") && k(e, "click", x), !1
          },
          trigger: function (t) {
            var e = this || t;
            return zt.test(e.type) && e.click && o(e, "input") && k(e, "click"), !0
          },
          _default: function (t) {
            var e = t.target;
            return zt.test(e.type) && e.click && o(e, "input") && qt.get(e, "click") || o(e, "a")
          }
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
          }
        }
      }
    }, pt.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n)
    }, pt.Event = function (t, e) {
      if (!(this instanceof pt.Event)) return new pt.Event(t, e);
      t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? x : E, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[pt.expando] = !0
    }, pt.Event.prototype = {
      constructor: pt.Event,
      isDefaultPrevented: E,
      isPropagationStopped: E,
      isImmediatePropagationStopped: E,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        this.isDefaultPrevented = x, t && !this.isSimulated && t.preventDefault()
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        this.isPropagationStopped = x, t && !this.isSimulated && t.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = x, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
      }
    }, pt.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function (t) {
        var e = t.button;
        return null == t.which && Qt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Zt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
      }
    }, pt.event.addProp), pt.each({
      focus: "focusin",
      blur: "focusout"
    }, function (t, e) {
      pt.event.special[t] = {
        setup: function () {
          return k(this, t, S), !1
        },
        trigger: function () {
          return k(this, t), !0
        },
        delegateType: e
      }
    }), pt.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (t, e) {
      pt.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function (t) {
          var n, r = t.relatedTarget,
            i = t.handleObj;
          return r && (r === this || pt.contains(this, r)) || (t.type = i.origType, n = i.handler.apply(this, arguments), t.type = e), n
        }
      }
    }), pt.fn.extend({
      on: function (t, e, n, r) {
        return C(this, t, e, n, r)
      },
      one: function (t, e, n, r) {
        return C(this, t, e, n, r, 1)
      },
      off: function (t, e, n) {
        var r, i;
        if (t && t.preventDefault && t.handleObj) return r = t.handleObj, pt(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof t) {
          for (i in t) this.off(i, e, t[i]);
          return this
        }
        return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = E), this.each(function () {
          pt.event.remove(this, t, n, e)
        })
      }
    });
    var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      ne = /<script|<style|<link/i,
      re = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pt.extend({
      htmlPrefilter: function (t) {
        return t.replace(ee, "<$1></$2>")
      },
      clone: function (t, e, n) {
        var r, i, o, s, a, u, l, c = t.cloneNode(!0),
          f = Bt(t);
        if (!(lt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t)))
          for (s = y(c), r = 0, i = (o = y(t)).length; r < i; r++) a = o[r], "input" === (l = (u = s[r]).nodeName.toLowerCase()) && zt.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
        if (e)
          if (n)
            for (o = o || y(t), s = s || y(c), r = 0, i = o.length; r < i; r++) j(o[r], s[r]);
          else j(t, c);
        return 0 < (s = y(c, "script")).length && b(s, !f && y(t, "script")), c
      },
      cleanData: function (t) {
        for (var e, n, r, i = pt.event.special, o = 0; void 0 !== (n = t[o]); o++)
          if (Dt(n)) {
            if (e = n[qt.expando]) {
              if (e.events)
                for (r in e.events) i[r] ? pt.event.remove(n, r) : pt.removeEvent(n, r, e.handle);
              n[qt.expando] = void 0
            }
            n[Pt.expando] && (n[Pt.expando] = void 0)
          }
      }
    }), pt.fn.extend({
      detach: function (t) {
        return D(this, t, !0)
      },
      remove: function (t) {
        return D(this, t)
      },
      text: function (t) {
        return At(this, function (t) {
          return void 0 === t ? pt.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
          })
        }, null, t, arguments.length)
      },
      append: function () {
        return N(this, arguments, function (t) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, t).appendChild(t)
        })
      },
      prepend: function () {
        return N(this, arguments, function (t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = T(this, t);
            e.insertBefore(t, e.firstChild)
          }
        })
      },
      before: function () {
        return N(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this)
        })
      },
      after: function () {
        return N(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (pt.cleanData(y(t, !1)), t.textContent = "");
        return this
      },
      clone: function (t, e) {
        return t = null != t && t, e = null == e ? t : e, this.map(function () {
          return pt.clone(this, t, e)
        })
      },
      html: function (t) {
        return At(this, function (t) {
          var e = this[0] || {},
            n = 0,
            r = this.length;
          if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
          if ("string" == typeof t && !ne.test(t) && !Yt[(Vt.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = pt.htmlPrefilter(t);
            try {
              for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (pt.cleanData(y(e, !1)), e.innerHTML = t);
              e = 0
            } catch (t) {}
          }
          e && this.empty().append(t)
        }, null, t, arguments.length)
      },
      replaceWith: function () {
        var t = [];
        return N(this, arguments, function (e) {
          var n = this.parentNode;
          pt.inArray(this, t) < 0 && (pt.cleanData(y(this)), n && n.replaceChild(e, this))
        }, t)
      }
    }), pt.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (t, e) {
      pt.fn[t] = function (t) {
        for (var n, r = [], i = pt(t), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), pt(i[s])[e](n), nt.apply(r, n.get());
        return this.pushStack(r)
      }
    });
    var oe = new RegExp("^(" + _t + ")(?!px)[a-z%]+$", "i"),
      se = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
      },
      ae = new RegExp(It.join("|"), "i");
    ! function () {
      function e() {
        if (l) {
          u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ht.appendChild(u).appendChild(l);
          var e = t.getComputedStyle(l);
          r = "1%" !== e.top, a = 12 === n(e.marginLeft), l.style.right = "60%", s = 36 === n(e.right), i = 36 === n(e.width), l.style.position = "absolute", o = 12 === n(l.offsetWidth / 3), Ht.removeChild(u), l = null
        }
      }

      function n(t) {
        return Math.round(parseFloat(t))
      }
      var r, i, o, s, a, u = Q.createElement("div"),
        l = Q.createElement("div");
      l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", lt.clearCloneStyle = "content-box" === l.style.backgroundClip, pt.extend(lt, {
        boxSizingReliable: function () {
          return e(), i
        },
        pixelBoxStyles: function () {
          return e(), s
        },
        pixelPosition: function () {
          return e(), r
        },
        reliableMarginLeft: function () {
          return e(), a
        },
        scrollboxSize: function () {
          return e(), o
        }
      }))
    }();
    var ue = ["Webkit", "Moz", "ms"],
      le = Q.createElement("div").style,
      ce = {},
      fe = /^(none|table(?!-c[ea]).+)/,
      he = /^--/,
      de = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      pe = {
        letterSpacing: "0",
        fontWeight: "400"
      };
    pt.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = q(t, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function (t, e, n, r) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var i, o, s, a = d(e),
            u = he.test(e),
            l = t.style;
          if (u || (e = R(a)), s = pt.cssHooks[e] || pt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(t, !1, r)) ? i : l[e];
          "string" == (o = typeof n) && (i = Mt.exec(n)) && i[1] && (n = g(t, e, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (pt.cssNumber[a] ? "" : "px")), lt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, r)) || (u ? l.setProperty(e, n) : l[e] = n))
        }
      },
      css: function (t, e, n, r) {
        var i, o, s, a = d(e);
        return he.test(e) || (e = R(a)), (s = pt.cssHooks[e] || pt.cssHooks[a]) && "get" in s && (i = s.get(t, !0, n)), void 0 === i && (i = q(t, e, r)), "normal" === i && e in pe && (i = pe[e]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
      }
    }), pt.each(["height", "width"], function (t, e) {
      pt.cssHooks[e] = {
        get: function (t, n, r) {
          if (n) return !fe.test(pt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? M(t, e, r) : $t(t, de, function () {
            return M(t, e, r)
          })
        },
        set: function (t, n, r) {
          var i, o = se(t),
            s = !lt.scrollboxSize() && "absolute" === o.position,
            a = (s || r) && "border-box" === pt.css(t, "boxSizing", !1, o),
            u = r ? _(t, e, r, a, o) : 0;
          return a && s && (u -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - _(t, e, "border", !1, o) - .5)), u && (i = Mt.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = pt.css(t, e)), O(0, n, u)
        }
      }
    }), pt.cssHooks.marginLeft = P(lt.reliableMarginLeft, function (t, e) {
      if (e) return (parseFloat(q(t, "marginLeft")) || t.getBoundingClientRect().left - $t(t, {
        marginLeft: 0
      }, function () {
        return t.getBoundingClientRect().left
      })) + "px"
    }), pt.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (t, e) {
      pt.cssHooks[t + e] = {
        expand: function (n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[t + It[r] + e] = o[r] || o[r - 2] || o[0];
          return i
        }
      }, "margin" !== t && (pt.cssHooks[t + e].set = O)
    }), pt.fn.extend({
      css: function (t, e) {
        return At(this, function (t, e, n) {
          var r, i, o = {},
            s = 0;
          if (Array.isArray(e)) {
            for (r = se(t), i = e.length; s < i; s++) o[e[s]] = pt.css(t, e[s], !1, r);
            return o
          }
          return void 0 !== n ? pt.style(t, e, n) : pt.css(t, e)
        }, t, e, 1 < arguments.length)
      }
    }), ((pt.Tween = I).prototype = {
      constructor: I,
      init: function (t, e, n, r, i, o) {
        this.elem = t, this.prop = n, this.easing = i || pt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (pt.cssNumber[n] ? "" : "px")
      },
      cur: function () {
        var t = I.propHooks[this.prop];
        return t && t.get ? t.get(this) : I.propHooks._default.get(this)
      },
      run: function (t) {
        var e, n = I.propHooks[this.prop];
        return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
      }
    }).init.prototype = I.prototype, (I.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
        },
        set: function (t) {
          pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !pt.cssHooks[t.prop] && null == t.elem.style[R(t.prop)] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit)
        }
      }
    }).scrollTop = I.propHooks.scrollLeft = {
      set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
    }, pt.easing = {
      linear: function (t) {
        return t
      },
      swing: function (t) {
        return .5 - Math.cos(t * Math.PI) / 2
      },
      _default: "swing"
    }, pt.fx = I.prototype.init, pt.fx.step = {};
    var me, ge, ve, ye, be = /^(?:toggle|show|hide)$/,
      we = /queueHooks$/;
    pt.Animation = pt.extend($, {
      tweeners: {
        "*": [function (t, e) {
          var n = this.createTween(t, e);
          return g(n.elem, t, Mt.exec(e), n), n
        }]
      },
      tweener: function (t, e) {
        ct(t) ? (e = t, t = ["*"]) : t = t.match(kt);
        for (var n, r = 0, i = t.length; r < i; r++) n = t[r], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(e)
      },
      prefilters: [function (t, e, n) {
        var r, i, o, s, a, u, l, c, f = "width" in e || "height" in e,
          h = this,
          d = {},
          p = t.style,
          m = t.nodeType && Wt(t),
          g = qt.get(t, "fxshow");
        for (r in n.queue || (null == (s = pt._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a()
          }), s.unqueued++, h.always(function () {
            h.always(function () {
              s.unqueued--, pt.queue(t, "fx").length || s.empty.fire()
            })
          })), e)
          if (i = e[r], be.test(i)) {
            if (delete e[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
              if ("show" !== i || !g || void 0 === g[r]) continue;
              m = !0
            }
            d[r] = g && g[r] || pt.style(t, r)
          } if ((u = !pt.isEmptyObject(e)) || !pt.isEmptyObject(d))
          for (r in f && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = g && g.display) && (l = qt.get(t, "display")), "none" === (c = pt.css(t, "display")) && (l ? c = l : (v([t], !0), l = t.style.display || l, c = pt.css(t, "display"), v([t]))), ("inline" === c || "inline-block" === c && null != l) && "none" === pt.css(t, "float") && (u || (h.done(function () {
              p.display = l
            }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
              p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), u = !1, d) u || (g ? "hidden" in g && (m = g.hidden) : g = qt.access(t, "fxshow", {
            display: l
          }), o && (g.hidden = !m), m && v([t], !0), h.done(function () {
            for (r in m || v([t]), qt.remove(t, "fxshow"), d) pt.style(t, r, d[r])
          })), u = W(m ? g[r] : 0, r, h), r in g || (g[r] = u.start, m && (u.end = u.start, u.start = 0))
      }],
      prefilter: function (t, e) {
        e ? $.prefilters.unshift(t) : $.prefilters.push(t)
      }
    }), pt.speed = function (t, e, n) {
      var r = t && "object" == typeof t ? pt.extend({}, t) : {
        complete: n || !n && e || ct(t) && t,
        duration: t,
        easing: n && e || e && !ct(e) && e
      };
      return pt.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in pt.fx.speeds ? r.duration = pt.fx.speeds[r.duration] : r.duration = pt.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        ct(r.old) && r.old.call(this), r.queue && pt.dequeue(this, r.queue)
      }, r
    }, pt.fn.extend({
      fadeTo: function (t, e, n, r) {
        return this.filter(Wt).css("opacity", 0).show().end().animate({
          opacity: e
        }, t, n, r)
      },
      animate: function (t, e, n, r) {
        var i = pt.isEmptyObject(t),
          o = pt.speed(e, n, r),
          s = function () {
            var e = $(this, pt.extend({}, t), o);
            (i || qt.get(this, "finish")) && e.stop(!0)
          };
        return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function (t, e, n) {
        var r = function (t) {
          var e = t.stop;
          delete t.stop, e(n)
        };
        return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
          var e = !0,
            i = null != t && t + "queueHooks",
            o = pt.timers,
            s = qt.get(this);
          if (i) s[i] && s[i].stop && r(s[i]);
          else
            for (i in s) s[i] && s[i].stop && we.test(i) && r(s[i]);
          for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
          !e && n || pt.dequeue(this, t)
        })
      },
      finish: function (t) {
        return !1 !== t && (t = t || "fx"), this.each(function () {
          var e, n = qt.get(this),
            r = n[t + "queue"],
            i = n[t + "queueHooks"],
            o = pt.timers,
            s = r ? r.length : 0;
          for (n.finish = !0, pt.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
          for (e = 0; e < s; e++) r[e] && r[e].finish && r[e].finish.call(this);
          delete n.finish
        })
      }
    }), pt.each(["toggle", "show", "hide"], function (t, e) {
      var n = pt.fn[e];
      pt.fn[e] = function (t, r, i) {
        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(F(e, !0), t, r, i)
      }
    }), pt.each({
      slideDown: F("show"),
      slideUp: F("hide"),
      slideToggle: F("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (t, e) {
      pt.fn[t] = function (t, n, r) {
        return this.animate(e, t, n, r)
      }
    }), pt.timers = [], pt.fx.tick = function () {
      var t, e = 0,
        n = pt.timers;
      for (me = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
      n.length || pt.fx.stop(), me = void 0
    }, pt.fx.timer = function (t) {
      pt.timers.push(t), pt.fx.start()
    }, pt.fx.interval = 13, pt.fx.start = function () {
      ge || (ge = !0, H())
    }, pt.fx.stop = function () {
      ge = null
    }, pt.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, pt.fn.delay = function (e, n) {
      return e = pt.fx && pt.fx.speeds[e] || e, n = n || "fx", this.queue(n, function (n, r) {
        var i = t.setTimeout(n, e);
        r.stop = function () {
          t.clearTimeout(i)
        }
      })
    }, ve = Q.createElement("input"), ye = Q.createElement("select").appendChild(Q.createElement("option")), ve.type = "checkbox", lt.checkOn = "" !== ve.value, lt.optSelected = ye.selected, (ve = Q.createElement("input")).value = "t", ve.type = "radio", lt.radioValue = "t" === ve.value;
    var xe, Ee = pt.expr.attrHandle;
    pt.fn.extend({
      attr: function (t, e) {
        return At(this, pt.attr, t, e, 1 < arguments.length)
      },
      removeAttr: function (t) {
        return this.each(function () {
          pt.removeAttr(this, t)
        })
      }
    }), pt.extend({
      attr: function (t, e, n) {
        var r, i, o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? pt.prop(t, e, n) : (1 === o && pt.isXMLDoc(t) || (i = pt.attrHooks[e.toLowerCase()] || (pt.expr.match.bool.test(e) ? xe : void 0)), void 0 !== n ? null === n ? void pt.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : null == (r = pt.find.attr(t, e)) ? void 0 : r)
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!lt.radioValue && "radio" === e && o(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e
            }
          }
        }
      },
      removeAttr: function (t, e) {
        var n, r = 0,
          i = e && e.match(kt);
        if (i && 1 === t.nodeType)
          for (; n = i[r++];) t.removeAttribute(n)
      }
    }), xe = {
      set: function (t, e, n) {
        return !1 === e ? pt.removeAttr(t, n) : t.setAttribute(n, n), n
      }
    }, pt.each(pt.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = Ee[e] || pt.find.attr;
      Ee[e] = function (t, e, r) {
        var i, o, s = e.toLowerCase();
        return r || (o = Ee[s], Ee[s] = i, i = null != n(t, e, r) ? s : null, Ee[s] = o), i
      }
    });
    var Se = /^(?:input|select|textarea|button)$/i,
      Ce = /^(?:a|area)$/i;
    pt.fn.extend({
      prop: function (t, e) {
        return At(this, pt.prop, t, e, 1 < arguments.length)
      },
      removeProp: function (t) {
        return this.each(function () {
          delete this[pt.propFix[t] || t]
        })
      }
    }), pt.extend({
      prop: function (t, e, n) {
        var r, i, o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, i = pt.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = pt.find.attr(t, "tabindex");
            return e ? parseInt(e, 10) : Se.test(t.nodeName) || Ce.test(t.nodeName) && t.href ? 0 : -1
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), lt.optSelected || (pt.propHooks.selected = {
      get: function (t) {
        var e = t.parentNode;
        return e && e.parentNode && e.parentNode.selectedIndex, null
      },
      set: function (t) {
        var e = t.parentNode;
        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
      }
    }), pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      pt.propFix[this.toLowerCase()] = this
    }), pt.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, s, a, u = 0;
        if (ct(t)) return this.each(function (e) {
          pt(this).addClass(t.call(this, e, z(this)))
        });
        if ((e = V(t)).length)
          for (; n = this[u++];)
            if (i = z(n), r = 1 === n.nodeType && " " + U(i) + " ") {
              for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (a = U(r)) && n.setAttribute("class", a)
            } return this
      },
      removeClass: function (t) {
        var e, n, r, i, o, s, a, u = 0;
        if (ct(t)) return this.each(function (e) {
          pt(this).removeClass(t.call(this, e, z(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ((e = V(t)).length)
          for (; n = this[u++];)
            if (i = z(n), r = 1 === n.nodeType && " " + U(i) + " ") {
              for (s = 0; o = e[s++];)
                for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
              i !== (a = U(r)) && n.setAttribute("class", a)
            } return this
      },
      toggleClass: function (t, e) {
        var n = typeof t,
          r = "string" === n || Array.isArray(t);
        return "boolean" == typeof e && r ? e ? this.addClass(t) : this.removeClass(t) : ct(t) ? this.each(function (n) {
          pt(this).toggleClass(t.call(this, n, z(this), e), e)
        }) : this.each(function () {
          var e, i, o, s;
          if (r)
            for (i = 0, o = pt(this), s = V(t); e = s[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
          else void 0 !== t && "boolean" !== n || ((e = z(this)) && qt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : qt.get(this, "__className__") || ""))
        })
      },
      hasClass: function (t) {
        var e, n, r = 0;
        for (e = " " + t + " "; n = this[r++];)
          if (1 === n.nodeType && -1 < (" " + U(z(n)) + " ").indexOf(e)) return !0;
        return !1
      }
    });
    var ke = /\r/g;
    pt.fn.extend({
      val: function (t) {
        var e, n, r, i = this[0];
        return arguments.length ? (r = ct(t), this.each(function (n) {
          var i;
          1 === this.nodeType && (null == (i = r ? t.call(this, n, pt(this).val()) : t) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = pt.map(i, function (t) {
            return null == t ? "" : t + ""
          })), (e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
        })) : i ? (e = pt.valHooks[i.type] || pt.valHooks[i.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(ke, "") : null == n ? "" : n : void 0
      }
    }), pt.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = pt.find.attr(t, "value");
            return null != e ? e : U(pt.text(t))
          }
        },
        select: {
          get: function (t) {
            var e, n, r, i = t.options,
              s = t.selectedIndex,
              a = "select-one" === t.type,
              u = a ? null : [],
              l = a ? s + 1 : i.length;
            for (r = s < 0 ? l : a ? s : 0; r < l; r++)
              if (((n = i[r]).selected || r === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                if (e = pt(n).val(), a) return e;
                u.push(e)
              } return u
          },
          set: function (t, e) {
            for (var n, r, i = t.options, o = pt.makeArray(e), s = i.length; s--;)((r = i[s]).selected = -1 < pt.inArray(pt.valHooks.option.get(r), o)) && (n = !0);
            return n || (t.selectedIndex = -1), o
          }
        }
      }
    }), pt.each(["radio", "checkbox"], function () {
      pt.valHooks[this] = {
        set: function (t, e) {
          if (Array.isArray(e)) return t.checked = -1 < pt.inArray(pt(t).val(), e)
        }
      }, lt.checkOn || (pt.valHooks[this].get = function (t) {
        return null === t.getAttribute("value") ? "on" : t.value
      })
    }), lt.focusin = "onfocusin" in t;
    var Te = /^(?:focusinfocus|focusoutblur)$/,
      Le = function (t) {
        t.stopPropagation()
      };
    pt.extend(pt.event, {
      trigger: function (e, n, r, i) {
        var o, s, a, u, l, c, f, h, d = [r || Q],
          p = st.call(e, "type") ? e.type : e,
          m = st.call(e, "namespace") ? e.namespace.split(".") : [];
        if (s = h = a = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !Te.test(p + pt.event.triggered) && (-1 < p.indexOf(".") && (p = (m = p.split(".")).shift(), m.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[pt.expando] ? e : new pt.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : pt.makeArray(n, [e]), f = pt.event.special[p] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
          if (!i && !f.noBubble && !ft(r)) {
            for (u = f.delegateType || p, Te.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
            a === (r.ownerDocument || Q) && d.push(a.defaultView || a.parentWindow || t)
          }
          for (o = 0;
            (s = d[o++]) && !e.isPropagationStopped();) h = s, e.type = 1 < o ? u : f.bindType || p, (c = (qt.get(s, "events") || {})[e.type] && qt.get(s, "handle")) && c.apply(s, n), (c = l && s[l]) && c.apply && Dt(s) && (e.result = c.apply(s, n), !1 === e.result && e.preventDefault());
          return e.type = p, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !Dt(r) || l && ct(r[p]) && !ft(r) && ((a = r[l]) && (r[l] = null), pt.event.triggered = p, e.isPropagationStopped() && h.addEventListener(p, Le), r[p](), e.isPropagationStopped() && h.removeEventListener(p, Le), pt.event.triggered = void 0, a && (r[l] = a)), e.result
        }
      },
      simulate: function (t, e, n) {
        var r = pt.extend(new pt.Event, n, {
          type: t,
          isSimulated: !0
        });
        pt.event.trigger(r, null, e)
      }
    }), pt.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          pt.event.trigger(t, e, this)
        })
      },
      triggerHandler: function (t, e) {
        var n = this[0];
        if (n) return pt.event.trigger(t, e, n, !0)
      }
    }), lt.focusin || pt.each({
      focus: "focusin",
      blur: "focusout"
    }, function (t, e) {
      var n = function (t) {
        pt.event.simulate(e, t.target, pt.event.fix(t))
      };
      pt.event.special[e] = {
        setup: function () {
          var r = this.ownerDocument || this,
            i = qt.access(r, e);
          i || r.addEventListener(t, n, !0), qt.access(r, e, (i || 0) + 1)
        },
        teardown: function () {
          var r = this.ownerDocument || this,
            i = qt.access(r, e) - 1;
          i ? qt.access(r, e, i) : (r.removeEventListener(t, n, !0), qt.remove(r, e))
        }
      }
    });
    var Ae = t.location,
      je = Date.now(),
      Ne = /\?/;
    pt.parseXML = function (e) {
      var n;
      if (!e || "string" != typeof e) return null;
      try {
        n = (new t.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e), n
    };
    var De = /\[\]$/,
      qe = /\r?\n/g,
      Pe = /^(?:submit|button|image|reset|file)$/i,
      Re = /^(?:input|select|textarea|keygen)/i;
    pt.param = function (t, e) {
      var n, r = [],
        i = function (t, e) {
          var n = ct(e) ? e() : e;
          r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
      if (null == t) return "";
      if (Array.isArray(t) || t.jquery && !pt.isPlainObject(t)) pt.each(t, function () {
        i(this.name, this.value)
      });
      else
        for (n in t) X(n, t[n], e, i);
      return r.join("&")
    }, pt.fn.extend({
      serialize: function () {
        return pt.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var t = pt.prop(this, "elements");
          return t ? pt.makeArray(t) : this
        }).filter(function () {
          var t = this.type;
          return this.name && !pt(this).is(":disabled") && Re.test(this.nodeName) && !Pe.test(t) && (this.checked || !zt.test(t))
        }).map(function (t, e) {
          var n = pt(this).val();
          return null == n ? null : Array.isArray(n) ? pt.map(n, function (t) {
            return {
              name: e.name,
              value: t.replace(qe, "\r\n")
            }
          }) : {
            name: e.name,
            value: n.replace(qe, "\r\n")
          }
        }).get()
      }
    });
    var Oe = /%20/g,
      _e = /#.*$/,
      Me = /([?&])_=[^&]*/,
      Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      He = /^(?:GET|HEAD)$/,
      Be = /^\/\//,
      Fe = {},
      We = {},
      $e = "*/".concat("*"),
      Ue = Q.createElement("a");
    Ue.href = Ae.href, pt.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ae.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ae.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $e,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": pt.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function (t, e) {
        return e ? G(G(t, pt.ajaxSettings), e) : G(pt.ajaxSettings, t)
      },
      ajaxPrefilter: Y(Fe),
      ajaxTransport: Y(We),
      ajax: function (e, n) {
        function r(e, n, r, a) {
          var l, h, d, w, x, E = n;
          c || (c = !0, u && t.clearTimeout(u), i = void 0, s = a || "", S.readyState = 0 < e ? 4 : 0, l = 200 <= e && e < 300 || 304 === e, r && (w = function (t, e, n) {
            for (var r, i, o, s, a = t.contents, u = t.dataTypes;
              "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)
              for (i in a)
                if (a[i] && a[i].test(r)) {
                  u.unshift(i);
                  break
                } if (u[0] in n) o = u[0];
            else {
              for (i in n) {
                if (!u[0] || t.converters[i + " " + u[0]]) {
                  o = i;
                  break
                }
                s || (s = i)
              }
              o = o || s
            }
            if (o) return o !== u[0] && u.unshift(o), n[o]
          }(p, S, r)), w = function (t, e, n, r) {
            var i, o, s, a, u, l = {},
              c = t.dataTypes.slice();
            if (c[1])
              for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
            for (o = c.shift(); o;)
              if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
              if (!(s = l[u + " " + o] || l["* " + o]))
                for (i in l)
                  if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                    break
                  } if (!0 !== s)
                if (s && t.throws) e = s(e);
                else try {
                  e = s(e)
                } catch (t) {
                  return {
                    state: "parsererror",
                    error: s ? t : "No conversion from " + u + " to " + o
                  }
                }
            }
            return {
              state: "success",
              data: e
            }
          }(p, w, S, l), l ? (p.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (pt.lastModified[o] = x), (x = S.getResponseHeader("etag")) && (pt.etag[o] = x)), 204 === e || "HEAD" === p.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = w.state, h = w.data, l = !(d = w.error))) : (d = E, !e && E || (E = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (n || E) + "", l ? v.resolveWith(m, [h, E, S]) : v.rejectWith(m, [S, E, d]), S.statusCode(b), b = void 0, f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [S, p, l ? h : d]), y.fireWith(m, [S, E]), f && (g.trigger("ajaxComplete", [S, p]), --pt.active || pt.event.trigger("ajaxStop")))
        }
        "object" == typeof e && (n = e, e = void 0), n = n || {};
        var i, o, s, a, u, l, c, f, h, d, p = pt.ajaxSetup({}, n),
          m = p.context || p,
          g = p.context && (m.nodeType || m.jquery) ? pt(m) : pt.event,
          v = pt.Deferred(),
          y = pt.Callbacks("once memory"),
          b = p.statusCode || {},
          w = {},
          x = {},
          E = "canceled",
          S = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (c) {
                if (!a)
                  for (a = {}; e = Ie.exec(s);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                e = a[t.toLowerCase() + " "]
              }
              return null == e ? null : e.join(", ")
            },
            getAllResponseHeaders: function () {
              return c ? s : null
            },
            setRequestHeader: function (t, e) {
              return null == c && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
            },
            overrideMimeType: function (t) {
              return null == c && (p.mimeType = t), this
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (c) S.always(t[S.status]);
                else
                  for (e in t) b[e] = [b[e], t[e]];
              return this
            },
            abort: function (t) {
              var e = t || E;
              return i && i.abort(e), r(0, e), this
            }
          };
        if (v.promise(S), p.url = ((e || p.url || Ae.href) + "").replace(Be, Ae.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(kt) || [""], null == p.crossDomain) {
          l = Q.createElement("a");
          try {
            l.href = p.url, l.href = l.href, p.crossDomain = Ue.protocol + "//" + Ue.host != l.protocol + "//" + l.host
          } catch (e) {
            p.crossDomain = !0
          }
        }
        if (p.data && p.processData && "string" != typeof p.data && (p.data = pt.param(p.data, p.traditional)), J(Fe, p, n, S), c) return S;
        for (h in (f = pt.event && p.global) && 0 == pt.active++ && pt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !He.test(p.type), o = p.url.replace(_e, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Oe, "+")) : (d = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (Ne.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Me, "$1"), d = (Ne.test(o) ? "&" : "?") + "_=" + je++ + d), p.url = o + d), p.ifModified && (pt.lastModified[o] && S.setRequestHeader("If-Modified-Since", pt.lastModified[o]), pt.etag[o] && S.setRequestHeader("If-None-Match", pt.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : p.accepts["*"]), p.headers) S.setRequestHeader(h, p.headers[h]);
        if (p.beforeSend && (!1 === p.beforeSend.call(m, S, p) || c)) return S.abort();
        if (E = "abort", y.add(p.complete), S.done(p.success), S.fail(p.error), i = J(We, p, n, S)) {
          if (S.readyState = 1, f && g.trigger("ajaxSend", [S, p]), c) return S;
          p.async && 0 < p.timeout && (u = t.setTimeout(function () {
            S.abort("timeout")
          }, p.timeout));
          try {
            c = !1, i.send(w, r)
          } catch (e) {
            if (c) throw e;
            r(-1, e)
          }
        } else r(-1, "No Transport");
        return S
      },
      getJSON: function (t, e, n) {
        return pt.get(t, e, n, "json")
      },
      getScript: function (t, e) {
        return pt.get(t, void 0, e, "script")
      }
    }), pt.each(["get", "post"], function (t, e) {
      pt[e] = function (t, n, r, i) {
        return ct(n) && (i = i || r, r = n, n = void 0), pt.ajax(pt.extend({
          url: t,
          type: e,
          dataType: i,
          data: n,
          success: r
        }, pt.isPlainObject(t) && t))
      }
    }), pt._evalUrl = function (t, e) {
      return pt.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function () {}
        },
        dataFilter: function (t) {
          pt.globalEval(t, e)
        }
      })
    }, pt.fn.extend({
      wrapAll: function (t) {
        var e;
        return this[0] && (ct(t) && (t = t.call(this[0])), e = pt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
          for (var t = this; t.firstElementChild;) t = t.firstElementChild;
          return t
        }).append(this)), this
      },
      wrapInner: function (t) {
        return ct(t) ? this.each(function (e) {
          pt(this).wrapInner(t.call(this, e))
        }) : this.each(function () {
          var e = pt(this),
            n = e.contents();
          n.length ? n.wrapAll(t) : e.append(t)
        })
      },
      wrap: function (t) {
        var e = ct(t);
        return this.each(function (n) {
          pt(this).wrapAll(e ? t.call(this, n) : t)
        })
      },
      unwrap: function (t) {
        return this.parent(t).not("body").each(function () {
          pt(this).replaceWith(this.childNodes)
        }), this
      }
    }), pt.expr.pseudos.hidden = function (t) {
      return !pt.expr.pseudos.visible(t)
    }, pt.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, pt.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest
      } catch (e) {}
    };
    var ze = {
        0: 200,
        1223: 204
      },
      Ve = pt.ajaxSettings.xhr();
    lt.cors = !!Ve && "withCredentials" in Ve, lt.ajax = Ve = !!Ve, pt.ajaxTransport(function (e) {
      var n, r;
      if (lt.cors || Ve && !e.crossDomain) return {
        send: function (i, o) {
          var s, a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (s in e.xhrFields) a[s] = e.xhrFields[s];
          for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(s, i[s]);
          n = function (t) {
            return function () {
              n && (n = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(ze[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()))
            }
          }, a.onload = n(), r = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
            4 === a.readyState && t.setTimeout(function () {
              n && r()
            })
          }, n = n("abort");
          try {
            a.send(e.hasContent && e.data || null)
          } catch (i) {
            if (n) throw i
          }
        },
        abort: function () {
          n && n()
        }
      }
    }), pt.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1)
    }), pt.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (t) {
          return pt.globalEval(t), t
        }
      }
    }), pt.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), pt.ajaxTransport("script", function (t) {
      var e, n;
      if (t.crossDomain || t.scriptAttrs) return {
        send: function (r, i) {
          e = pt("<script>").attr(t.scriptAttrs || {}).prop({
            charset: t.scriptCharset,
            src: t.url
          }).on("load error", n = function (t) {
            e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
          }), Q.head.appendChild(e[0])
        },
        abort: function () {
          n && n()
        }
      }
    });
    var Xe, Ye = [],
      Je = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = Ye.pop() || pt.expando + "_" + je++;
        return this[t] = !0, t
      }
    }), pt.ajaxPrefilter("json jsonp", function (e, n, r) {
      var i, o, s, a = !1 !== e.jsonp && (Je.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Je.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ct(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Je, "$1" + i) : !1 !== e.jsonp && (e.url += (Ne.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
        return s || pt.error(i + " was not called"), s[0]
      }, e.dataTypes[0] = "json", o = t[i], t[i] = function () {
        s = arguments
      }, r.always(function () {
        void 0 === o ? pt(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Ye.push(i)), s && ct(o) && o(s[0]), s = o = void 0
      }), "script"
    }), lt.createHTMLDocument = ((Xe = Q.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xe.childNodes.length), pt.parseHTML = function (t, e, n) {
      return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (lt.createHTMLDocument ? ((r = (e = Q.implementation.createHTMLDocument("")).createElement("base")).href = Q.location.href, e.head.appendChild(r)) : e = Q), o = !n && [], (i = wt.exec(t)) ? [e.createElement(i[1])] : (i = w([t], e, o), o && o.length && pt(o).remove(), pt.merge([], i.childNodes)));
      var r, i, o
    }, pt.fn.load = function (t, e, n) {
      var r, i, o, s = this,
        a = t.indexOf(" ");
      return -1 < a && (r = U(t.slice(a)), t = t.slice(0, a)), ct(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), 0 < s.length && pt.ajax({
        url: t,
        type: i || "GET",
        dataType: "html",
        data: e
      }).done(function (t) {
        o = arguments, s.html(r ? pt("<div>").append(pt.parseHTML(t)).find(r) : t)
      }).always(n && function (t, e) {
        s.each(function () {
          n.apply(this, o || [t.responseText, e, t])
        })
      }), this
    }, pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
      pt.fn[e] = function (t) {
        return this.on(e, t)
      }
    }), pt.expr.pseudos.animated = function (t) {
      return pt.grep(pt.timers, function (e) {
        return t === e.elem
      }).length
    }, pt.offset = {
      setOffset: function (t, e, n) {
        var r, i, o, s, a, u, l = pt.css(t, "position"),
          c = pt(t),
          f = {};
        "static" === l && (t.style.position = "relative"), a = c.offset(), o = pt.css(t, "top"), u = pt.css(t, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), ct(e) && (e = e.call(t, n, pt.extend({}, a))), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + i), "using" in e ? e.using.call(t, f) : c.css(f)
      }
    }, pt.fn.extend({
      offset: function (t) {
        if (arguments.length) return void 0 === t ? this : this.each(function (e) {
          pt.offset.setOffset(this, t, e)
        });
        var e, n, r = this[0];
        return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: e.top + n.pageYOffset,
          left: e.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function () {
        if (this[0]) {
          var t, e, n, r = this[0],
            i = {
              top: 0,
              left: 0
            };
          if ("fixed" === pt.css(r, "position")) e = r.getBoundingClientRect();
          else {
            for (e = this.offset(), n = r.ownerDocument, t = r.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === pt.css(t, "position");) t = t.parentNode;
            t && t !== r && 1 === t.nodeType && ((i = pt(t).offset()).top += pt.css(t, "borderTopWidth", !0), i.left += pt.css(t, "borderLeftWidth", !0))
          }
          return {
            top: e.top - i.top - pt.css(r, "marginTop", !0),
            left: e.left - i.left - pt.css(r, "marginLeft", !0)
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var t = this.offsetParent; t && "static" === pt.css(t, "position");) t = t.offsetParent;
          return t || Ht
        })
      }
    }), pt.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (t, e) {
      var n = "pageYOffset" === e;
      pt.fn[t] = function (r) {
        return At(this, function (t, r, i) {
          var o;
          if (ft(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === i) return o ? o[e] : t[r];
          o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i
        }, t, r, arguments.length)
      }
    }), pt.each(["top", "left"], function (t, e) {
      pt.cssHooks[e] = P(lt.pixelPosition, function (t, n) {
        if (n) return n = q(t, e), oe.test(n) ? pt(t).position()[e] + "px" : n
      })
    }), pt.each({
      Height: "height",
      Width: "width"
    }, function (t, e) {
      pt.each({
        padding: "inner" + t,
        content: e,
        "": "outer" + t
      }, function (n, r) {
        pt.fn[r] = function (i, o) {
          var s = arguments.length && (n || "boolean" != typeof i),
            a = n || (!0 === i || !0 === o ? "margin" : "border");
          return At(this, function (e, n, i) {
            var o;
            return ft(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? pt.css(e, n, a) : pt.style(e, n, i, a)
          }, e, s ? i : void 0, s)
        }
      })
    }), pt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
      pt.fn[e] = function (t, n) {
        return 0 < arguments.length ? this.on(e, null, t, n) : this.trigger(e)
      }
    }), pt.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t)
      }
    }), pt.fn.extend({
      bind: function (t, e, n) {
        return this.on(t, null, e, n)
      },
      unbind: function (t, e) {
        return this.off(t, null, e)
      },
      delegate: function (t, e, n, r) {
        return this.on(e, t, n, r)
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
      }
    }), pt.proxy = function (t, e) {
      var n, r, i;
      if ("string" == typeof e && (n = t[e], e = t, t = n), ct(t)) return r = tt.call(arguments, 2), (i = function () {
        return t.apply(e || this, r.concat(tt.call(arguments)))
      }).guid = t.guid = t.guid || pt.guid++, i
    }, pt.holdReady = function (t) {
      t ? pt.readyWait++ : pt.ready(!0)
    }, pt.isArray = Array.isArray, pt.parseJSON = JSON.parse, pt.nodeName = o, pt.isFunction = ct, pt.isWindow = ft, pt.camelCase = d, pt.type = r, pt.now = Date.now, pt.isNumeric = function (t) {
      var e = pt.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
      return pt
    });
    var Ge = t.jQuery,
      Ke = t.$;
    return pt.noConflict = function (e) {
      return t.$ === pt && (t.$ = Ke), e && t.jQuery === pt && (t.jQuery = Ge), pt
    }, e || (t.jQuery = t.$ = pt), pt
  });
var days, hours, minutes, seconds, VanillaTilt = function () {
    "use strict";
    class t {
      constructor(e, n = {}) {
        if (!(e instanceof Node)) throw "Can't initialize VanillaTilt because " + e + " is not a Node.";
        this.width = null, this.height = null, this.clientWidth = null, this.clientHeight = null, this.left = null, this.top = null, this.gammazero = null, this.betazero = null, this.lastgammazero = null, this.lastbetazero = null, this.transitionTimeout = null, this.updateCall = null, this.event = null, this.updateBind = this.update.bind(this), this.resetBind = this.reset.bind(this), this.element = e, this.settings = this.extendSettings(n), this.reverse = this.settings.reverse ? -1 : 1, this.glare = t.isSettingTrue(this.settings.glare), this.glarePrerender = t.isSettingTrue(this.settings["glare-prerender"]), this.fullPageListening = t.isSettingTrue(this.settings["full-page-listening"]), this.gyroscope = t.isSettingTrue(this.settings.gyroscope), this.gyroscopeSamples = this.settings.gyroscopeSamples, this.elementListener = this.getElementListener(), this.glare && this.prepareGlare(), this.fullPageListening && this.updateClientSize(), this.addEventListeners(), this.updateInitialPosition()
      }
      static isSettingTrue(t) {
        return "" === t || !0 === t || 1 === t
      }
      getElementListener() {
        if (this.fullPageListening) return window.document;
        if ("string" == typeof this.settings["mouse-event-element"]) {
          const t = document.querySelector(this.settings["mouse-event-element"]);
          if (t) return t
        }
        return this.settings["mouse-event-element"] instanceof Node ? this.settings["mouse-event-element"] : this.element
      }
      addEventListeners() {
        this.onMouseEnterBind = this.onMouseEnter.bind(this), this.onMouseMoveBind = this.onMouseMove.bind(this), this.onMouseLeaveBind = this.onMouseLeave.bind(this), this.onWindowResizeBind = this.onWindowResize.bind(this), this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this), this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.addEventListener("mousemove", this.onMouseMoveBind), (this.glare || this.fullPageListening) && window.addEventListener("resize", this.onWindowResizeBind), this.gyroscope && window.addEventListener("deviceorientation", this.onDeviceOrientationBind)
      }
      removeEventListeners() {
        this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind), this.gyroscope && window.removeEventListener("deviceorientation", this.onDeviceOrientationBind), (this.glare || this.fullPageListening) && window.removeEventListener("resize", this.onWindowResizeBind)
      }
      destroy() {
        clearTimeout(this.transitionTimeout), null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.reset(), this.removeEventListeners(), this.element.vanillaTilt = null, delete this.element.vanillaTilt, this.element = null
      }
      onDeviceOrientation(t) {
        if (null === t.gamma || null === t.beta) return;
        this.updateElementPosition(), this.gyroscopeSamples > 0 && (this.lastgammazero = this.gammazero, this.lastbetazero = this.betazero, null === this.gammazero ? (this.gammazero = t.gamma, this.betazero = t.beta) : (this.gammazero = (t.gamma + this.lastgammazero) / 2, this.betazero = (t.beta + this.lastbetazero) / 2), this.gyroscopeSamples -= 1);
        const e = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX,
          n = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY,
          r = e / this.width,
          i = n / this.height,
          o = (t.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) / r,
          s = (t.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / i;
        null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = {
          clientX: o + this.left,
          clientY: s + this.top
        }, this.updateCall = requestAnimationFrame(this.updateBind)
      }
      onMouseEnter() {
        this.updateElementPosition(), this.element.style.willChange = "transform", this.setTransition()
      }
      onMouseMove(t) {
        null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = t, this.updateCall = requestAnimationFrame(this.updateBind)
      }
      onMouseLeave() {
        this.setTransition(), this.settings.reset && requestAnimationFrame(this.resetBind)
      }
      reset() {
        this.event = {
            clientX: this.left + this.width / 2,
            clientY: this.top + this.height / 2
          },
          this.element && this.element.style && (this.element.style.transform = `perspective(${this.settings.perspective}px) ` + "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"), this.resetGlare()
      }
      resetGlare() {
        this.glare && (this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)", this.glareElement.style.opacity = "0")
      }
      updateInitialPosition() {
        if (0 === this.settings.startX && 0 === this.settings.startY) return;
        this.onMouseEnter(), this.fullPageListening ? this.event = {
          clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
          clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
        } : this.event = {
          clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
          clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
        };
        let t = this.settings.scale;
        this.settings.scale = 1, this.update(), this.settings.scale = t, this.resetGlare()
      }
      getValues() {
        let t, e;
        return this.fullPageListening ? (t = this.event.clientX / this.clientWidth, e = this.event.clientY / this.clientHeight) : (t = (this.event.clientX - this.left) / this.width, e = (this.event.clientY - this.top) / this.height), t = Math.min(Math.max(t, 0), 1), e = Math.min(Math.max(e, 0), 1), {
          tiltX: (this.reverse * (this.settings.max - t * this.settings.max * 2)).toFixed(2),
          tiltY: (this.reverse * (e * this.settings.max * 2 - this.settings.max)).toFixed(2),
          percentageX: 100 * t,
          percentageY: 100 * e,
          angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI)
        }
      }
      updateElementPosition() {
        let t = this.element.getBoundingClientRect();
        this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = t.left, this.top = t.top
      }
      update() {
        let t = this.getValues();
        this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : t.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : t.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")", this.glare && (this.glareElement.style.transform = `rotate(${t.angle}deg) translate(-50%, -50%)`, this.glareElement.style.opacity = `${t.percentageY*this.settings["max-glare"]/100}`), this.element.dispatchEvent(new CustomEvent("tiltChange", {
          detail: t
        })), this.updateCall = null
      }
      prepareGlare() {
        if (!this.glarePrerender) {
          const t = document.createElement("div");
          t.classList.add("js-tilt-glare");
          const e = document.createElement("div");
          e.classList.add("js-tilt-glare-inner"), t.appendChild(e), this.element.appendChild(t)
        }
        this.glareElementWrapper = this.element.querySelector(".js-tilt-glare"), this.glareElement = this.element.querySelector(".js-tilt-glare-inner"), this.glarePrerender || (Object.assign(this.glareElementWrapper.style, {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          "pointer-events": "none"
        }), Object.assign(this.glareElement.style, {
          position: "absolute",
          top: "50%",
          left: "50%",
          "pointer-events": "none",
          "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
          width: `${2*this.element.offsetWidth}px`,
          height: `${2*this.element.offsetWidth}px`,
          transform: "rotate(180deg) translate(-50%, -50%)",
          "transform-origin": "0% 0%",
          opacity: "0"
        }))
      }
      updateGlareSize() {
        this.glare && Object.assign(this.glareElement.style, {
          width: `${2*this.element.offsetWidth}`,
          height: `${2*this.element.offsetWidth}`
        })
      }
      updateClientSize() {
        this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      }
      onWindowResize() {
        this.updateGlareSize(), this.updateClientSize()
      }
      setTransition() {
        clearTimeout(this.transitionTimeout), this.element.style.transition = this.settings.speed + "ms " + this.settings.easing, this.glare && (this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`), this.transitionTimeout = setTimeout(() => {
          this.element.style.transition = "", this.glare && (this.glareElement.style.transition = "")
        }, this.settings.speed)
      }
      extendSettings(t) {
        let e = {
            reverse: !1,
            max: 10,
            startX: 0,
            startY: 0,
            perspective: 1e3,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1.05,
            speed: 300,
            transition: !0,
            axis: null,
            glare: !1,
            "max-glare": 1,
            "glare-prerender": !1,
            "full-page-listening": !1,
            "mouse-event-element": null,
            reset: !0,
            gyroscope: !0,
            gyroscopeMinAngleX: -45,
            gyroscopeMaxAngleX: 45,
            gyroscopeMinAngleY: -45,
            gyroscopeMaxAngleY: 45,
            gyroscopeSamples: 10
          },
          n = {};
        for (var r in e)
          if (r in t) n[r] = t[r];
          else if (this.element.hasAttribute("data-tilt-" + r)) {
          let t = this.element.getAttribute("data-tilt-" + r);
          try {
            n[r] = JSON.parse(t)
          } catch (i) {
            n[r] = t
          }
        } else n[r] = e[r];
        return n
      }
      static init(e, n) {
        e instanceof Node && (e = [e]), e instanceof NodeList && (e = [].slice.call(e)), e instanceof Array && e.forEach(e => {
          "vanillaTilt" in e || (e.vanillaTilt = new t(e, n))
        })
      }
    }
    return "undefined" != typeof document && (window.VanillaTilt = t, t.init(document.querySelectorAll("[data-tilt]"))), t
  }(),
  List = function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.i = function (t) {
      return t
    }, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t["default"]
      } : function () {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 11)
  }([function (t, e, n) {
    function r(t) {
      if (!t || !t.nodeType) throw new Error("A DOM element reference is required");
      this.el = t, this.list = t.classList
    }
    var i = n(4),
      o = /\s+/;
    Object.prototype.toString;
    t.exports = function (t) {
      return new r(t)
    }, r.prototype.add = function (t) {
      if (this.list) return this.list.add(t), this;
      var e = this.array();
      return ~i(e, t) || e.push(t), this.el.className = e.join(" "), this
    }, r.prototype.remove = function (t) {
      if (this.list) return this.list.remove(t), this;
      var e = this.array(),
        n = i(e, t);
      return ~n && e.splice(n, 1), this.el.className = e.join(" "), this
    }, r.prototype.toggle = function (t, e) {
      return this.list ? (void 0 !== e ? e !== this.list.toggle(t, e) && this.list.toggle(t) : this.list.toggle(t), this) : (void 0 !== e ? e ? this.add(t) : this.remove(t) : this.has(t) ? this.remove(t) : this.add(t), this)
    }, r.prototype.array = function () {
      var t = (this.el.getAttribute("class") || "").replace(/^\s+|\s+$/g, "").split(o);
      return "" === t[0] && t.shift(), t
    }, r.prototype.has = r.prototype.contains = function (t) {
      return this.list ? this.list.contains(t) : !!~i(this.array(), t)
    }
  }, function (t, e, n) {
    var r = window.addEventListener ? "addEventListener" : "attachEvent",
      i = window.removeEventListener ? "removeEventListener" : "detachEvent",
      o = "addEventListener" !== r ? "on" : "",
      s = n(5);
    e.bind = function (t, e, n, i) {
      t = s(t);
      for (var a = 0; a < t.length; a++) t[a][r](o + e, n, i || !1)
    }, e.unbind = function (t, e, n, r) {
      t = s(t);
      for (var a = 0; a < t.length; a++) t[a][i](o + e, n, r || !1)
    }
  }, function (t) {
    t.exports = function (t) {
      return function (e, n, r) {
        var i = this;
        this._values = {}, this.found = !1, this.filtered = !1;
        var o = function (e, n, r) {
          if (n === undefined) r ? i.values(e, r) : i.values(e);
          else {
            i.elm = n;
            var o = t.templater.get(i, e);
            i.values(o)
          }
        };
        this.values = function (e, n) {
          if (e === undefined) return i._values;
          for (var r in e) i._values[r] = e[r];
          !0 !== n && t.templater.set(i, i.values())
        }, this.show = function () {
          t.templater.show(i)
        }, this.hide = function () {
          t.templater.hide(i)
        }, this.matching = function () {
          return t.filtered && t.searched && i.found && i.filtered || t.filtered && !t.searched && i.filtered || !t.filtered && t.searched && i.found || !t.filtered && !t.searched
        }, this.visible = function () {
          return !(!i.elm || i.elm.parentNode != t.list)
        }, o(e, n, r)
      }
    }
  }, function (t) {
    var e = function (t, e, n) {
        return n ? t.getElementsByClassName(e)[0] : t.getElementsByClassName(e)
      },
      n = function (t, e, n) {
        return e = "." + e, n ? t.querySelector(e) : t.querySelectorAll(e)
      },
      r = function (t, e, n) {
        for (var r = [], i = "*", o = t.getElementsByTagName(i), s = o.length, a = new RegExp("(^|\\s)" + e + "(\\s|$)"), u = 0, l = 0; u < s; u++)
          if (a.test(o[u].className)) {
            if (n) return o[u];
            r[l] = o[u], l++
          } return r
      };
    t.exports = function (t, i, o, s) {
      return (s = s || {}).test && s.getElementsByClassName || !s.test && document.getElementsByClassName ? e(t, i, o) : s.test && s.querySelector || !s.test && document.querySelector ? n(t, i, o) : r(t, i, o)
    }
  }, function (t) {
    var e = [].indexOf;
    t.exports = function (t, n) {
      if (e) return t.indexOf(n);
      for (var r = 0; r < t.length; ++r)
        if (t[r] === n) return r;
      return -1
    }
  }, function (t) {
    function e(t) {
      return "[object Array]" === Object.prototype.toString.call(t)
    }
    t.exports = function (t) {
      if (void 0 === t) return [];
      if (null === t) return [null];
      if (t === window) return [window];
      if ("string" == typeof t) return [t];
      if (e(t)) return t;
      if ("number" != typeof t.length) return [t];
      if ("function" == typeof t && t instanceof Function) return [t];
      for (var n = [], r = 0; r < t.length; r++)(Object.prototype.hasOwnProperty.call(t, r) || r in t) && n.push(t[r]);
      return n.length ? n : []
    }
  }, function (t) {
    t.exports = function (t) {
      return t = (t = null === (t = t === undefined ? "" : t) ? "" : t).toString()
    }
  }, function (t) {
    t.exports = function (t) {
      for (var e, n = Array.prototype.slice.call(arguments, 1), r = 0; e = n[r]; r++)
        if (e)
          for (var i in e) t[i] = e[i];
      return t
    }
  }, function (t) {
    t.exports = function (t) {
      var e = function (n, r, i) {
        var o = n.splice(0, 50);
        i = (i = i || []).concat(t.add(o)), n.length > 0 ? setTimeout(function () {
          e(n, r, i)
        }, 1) : (t.update(), r(i))
      };
      return e
    }
  }, function (t) {
    t.exports = function (t) {
      return t.handlers.filterStart = t.handlers.filterStart || [], t.handlers.filterComplete = t.handlers.filterComplete || [],
        function (e) {
          if (t.trigger("filterStart"), t.i = 1, t.reset.filter(), e === undefined) t.filtered = !1;
          else {
            t.filtered = !0;
            for (var n = t.items, r = 0, i = n.length; r < i; r++) {
              var o = n[r];
              e(o) ? o.filtered = !0 : o.filtered = !1
            }
          }
          return t.update(), t.trigger("filterComplete"), t.visibleItems
        }
    }
  }, function (t, e, n) {
    n(0);
    var r = n(1),
      i = n(7),
      o = n(6),
      s = n(3),
      a = n(19);
    t.exports = function (t, e) {
      e = i({
        location: 0,
        distance: 100,
        threshold: .4,
        multiSearch: !0,
        searchClass: "fuzzy-search"
      }, e = e || {});
      var n = {
        search: function (r, i) {
          for (var o = e.multiSearch ? r.replace(/ +$/, "").split(/ +/) : [r], s = 0, a = t.items.length; s < a; s++) n.item(t.items[s], i, o)
        },
        item: function (t, e, r) {
          for (var i = !0, o = 0; o < r.length; o++) {
            for (var s = !1, a = 0, u = e.length; a < u; a++) n.values(t.values(), e[a], r[o]) && (s = !0);
            s || (i = !1)
          }
          t.found = i
        },
        values: function (t, n, r) {
          if (t.hasOwnProperty(n)) {
            var i = o(t[n]).toLowerCase();
            if (a(i, r, e)) return !0
          }
          return !1
        }
      };
      return r.bind(s(t.listContainer, e.searchClass), "keyup", function (e) {
          var r = e.target || e.srcElement;
          t.search(r.value, n.search)
        }),
        function (e, r) {
          t.search(e, r, n.search)
        }
    }
  }, function (t, e, n) {
    var r = n(18),
      i = n(3),
      o = n(7),
      s = n(4),
      a = n(1),
      u = n(6),
      l = n(0),
      c = n(17),
      f = n(5);
    t.exports = function (t, e, h) {
      var d, p = this,
        m = n(2)(p),
        g = n(8)(p),
        v = n(12)(p);
      d = {
        start: function () {
          p.listClass = "list", p.searchClass = "search", p.sortClass = "sort", p.page = 1e4, p.i = 1, p.items = [], p.visibleItems = [], p.matchingItems = [], p.searched = !1, p.filtered = !1, p.searchColumns = undefined, p.handlers = {
            updated: []
          }, p.valueNames = [], p.utils = {
            getByClass: i,
            extend: o,
            indexOf: s,
            events: a,
            toString: u,
            naturalSort: r,
            classes: l,
            getAttribute: c,
            toArray: f
          }, p.utils.extend(p, e), p.listContainer = "string" == typeof t ? document.getElementById(t) : t, p.listContainer && (p.list = i(p.listContainer, p.listClass, !0), p.parse = n(13)(p), p.templater = n(16)(p), p.search = n(14)(p), p.filter = n(9)(p), p.sort = n(15)(p), p.fuzzySearch = n(10)(p, e.fuzzySearch), this.handlers(), this.items(), this.pagination(), p.update())
        },
        handlers: function () {
          for (var t in p.handlers) p[t] && p.on(t, p[t])
        },
        items: function () {
          p.parse(p.list), h !== undefined && p.add(h)
        },
        pagination: function () {
          if (e.pagination !== undefined) {
            !0 === e.pagination && (e.pagination = [{}]), e.pagination[0] === undefined && (e.pagination = [e.pagination]);
            for (var t = 0, n = e.pagination.length; t < n; t++) v(e.pagination[t])
          }
        }
      }, this.reIndex = function () {
        p.items = [], p.visibleItems = [], p.matchingItems = [], p.searched = !1, p.filtered = !1, p.parse(p.list)
      }, this.toJSON = function () {
        for (var t = [], e = 0, n = p.items.length; e < n; e++) t.push(p.items[e].values());
        return t
      }, this.add = function (t, e) {
        if (0 !== t.length) {
          if (!e) {
            var n = [],
              r = !1;
            t[0] === undefined && (t = [t]);
            for (var i = 0, o = t.length; i < o; i++) {
              var s = null;
              r = p.items.length > p.page, s = new m(t[i], undefined, r), p.items.push(s), n.push(s)
            }
            return p.update(), n
          }
          g(t, e)
        }
      }, this.show = function (t, e) {
        return this.i = t, this.page = e, p.update(), p
      }, this.remove = function (t, e, n) {
        for (var r = 0, i = 0, o = p.items.length; i < o; i++) p.items[i].values()[t] == e && (p.templater.remove(p.items[i], n), p.items.splice(i, 1), o--, i--, r++);
        return p.update(), r
      }, this.get = function (t, e) {
        for (var n = [], r = 0, i = p.items.length; r < i; r++) {
          var o = p.items[r];
          o.values()[t] == e && n.push(o)
        }
        return n
      }, this.size = function () {
        return p.items.length
      }, this.clear = function () {
        return p.templater.clear(), p.items = [], p
      }, this.on = function (t, e) {
        return p.handlers[t].push(e), p
      }, this.off = function (t, e) {
        var n = p.handlers[t],
          r = s(n, e);
        return r > -1 && n.splice(r, 1), p
      }, this.trigger = function (t) {
        for (var e = p.handlers[t].length; e--;) p.handlers[t][e](p);
        return p
      }, this.reset = {
        filter: function () {
          for (var t = p.items, e = t.length; e--;) t[e].filtered = !1;
          return p
        },
        search: function () {
          for (var t = p.items, e = t.length; e--;) t[e].found = !1;
          return p
        }
      }, this.update = function () {
        var t = p.items,
          e = t.length;
        p.visibleItems = [], p.matchingItems = [], p.templater.clear();
        for (var n = 0; n < e; n++) t[n].matching() && p.matchingItems.length + 1 >= p.i && p.visibleItems.length < p.page ? (t[n].show(), p.visibleItems.push(t[n]), p.matchingItems.push(t[n])) : t[n].matching() ? (p.matchingItems.push(t[n]), t[n].hide()) : t[n].hide();
        return p.trigger("updated"), p
      }, d.start()
    }
  }, function (t, e, n) {
    var r = n(0),
      i = n(1),
      o = n(11);
    t.exports = function (t) {
      var e = function (e, i) {
          var o, a = t.matchingItems.length,
            u = t.i,
            l = t.page,
            c = Math.ceil(a / l),
            f = Math.ceil(u / l),
            h = i.innerWindow || 2,
            d = i.left || i.outerWindow || 0,
            p = i.right || i.outerWindow || 0;
          p = c - p, e.clear();
          for (var m = 1; m <= c; m++) {
            var g = f === m ? "active" : "";
            n.number(m, d, p, f, h) ? (o = e.add({
              page: m,
              dotted: !1
            })[0], g && r(o.elm).add(g), s(o.elm, m, l)) : n.dotted(e, m, d, p, f, h, e.size()) && (o = e.add({
              page: "...",
              dotted: !0
            })[0], r(o.elm).add("disabled"))
          }
        },
        n = {
          number: function (t, e, n, r, i) {
            return this.left(t, e) || this.right(t, n) || this.innerWindow(t, r, i)
          },
          left: function (t, e) {
            return t <= e
          },
          right: function (t, e) {
            return t > e
          },
          innerWindow: function (t, e, n) {
            return t >= e - n && t <= e + n
          },
          dotted: function (t, e, n, r, i, o, s) {
            return this.dottedLeft(t, e, n, r, i, o) || this.dottedRight(t, e, n, r, i, o, s)
          },
          dottedLeft: function (t, e, n, r, i, o) {
            return e == n + 1 && !this.innerWindow(e, i, o) && !this.right(e, r)
          },
          dottedRight: function (t, e, n, r, i, o, s) {
            return !t.items[s - 1].values().dotted && (e == r && !this.innerWindow(e, i, o) && !this.right(e, r))
          }
        },
        s = function (e, n, r) {
          i.bind(e, "click", function () {
            t.show((n - 1) * r + 1, r)
          })
        };
      return function (n) {
        var r = new o(t.listContainer.id, {
          listClass: n.paginationClass || "pagination",
          item: "<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",
          valueNames: ["page", "dotted"],
          searchClass: "pagination-search-that-is-not-supposed-to-exist",
          sortClass: "pagination-sort-that-is-not-supposed-to-exist"
        });
        t.on("updated", function () {
          e(r, n)
        }), e(r, n)
      }
    }
  }, function (t, e, n) {
    t.exports = function (t) {
      var e = n(2)(t),
        r = function (t) {
          for (var e = t.childNodes, n = [], r = 0, i = e.length; r < i; r++) e[r].data === undefined && n.push(e[r]);
          return n
        },
        i = function (n, r) {
          for (var i = 0, o = n.length; i < o; i++) t.items.push(new e(r, n[i]))
        },
        o = function (e, n) {
          var r = e.splice(0, 50);
          i(r, n), e.length > 0 ? setTimeout(function () {
            o(e, n)
          }, 1) : (t.update(), t.trigger("parseComplete"))
        };
      return t.handlers.parseComplete = t.handlers.parseComplete || [],
        function () {
          var e = r(t.list),
            n = t.valueNames;
          t.indexAsync ? o(e, n) : i(e, n)
        }
    }
  }, function (t) {
    t.exports = function (t) {
      var e, n, r, i, o = {
          resetList: function () {
            t.i = 1, t.templater.clear(), i = undefined
          },
          setOptions: function (t) {
            2 == t.length && t[1] instanceof Array ? n = t[1] : 2 == t.length && "function" == typeof t[1] ? (n = undefined, i = t[1]) : 3 == t.length ? (n = t[1], i = t[2]) : n = undefined
          },
          setColumns: function () {
            0 !== t.items.length && n === undefined && (n = t.searchColumns === undefined ? o.toArray(t.items[0].values()) : t.searchColumns)
          },
          setSearchString: function (e) {
            e = (e = t.utils.toString(e).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), r = e
          },
          toArray: function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return e
          }
        },
        s = {
          list: function () {
            for (var e = 0, n = t.items.length; e < n; e++) s.item(t.items[e])
          },
          item: function (t) {
            t.found = !1;
            for (var e = 0, r = n.length; e < r; e++)
              if (s.values(t.values(), n[e])) return void(t.found = !0)
          },
          values: function (n, i) {
            return !!(n.hasOwnProperty(i) && (e = t.utils.toString(n[i]).toLowerCase(), "" !== r && e.search(r) > -1))
          },
          reset: function () {
            t.reset.search(), t.searched = !1
          }
        },
        a = function (e) {
          return t.trigger("searchStart"), o.resetList(), o.setSearchString(e), o.setOptions(arguments), o.setColumns(), "" === r ? s.reset() : (t.searched = !0, i ? i(r, n) : s.list()), t.update(), t.trigger("searchComplete"), t.visibleItems
        };
      return t.handlers.searchStart = t.handlers.searchStart || [], t.handlers.searchComplete = t.handlers.searchComplete || [], t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "keyup", function (e) {
        var n = e.target || e.srcElement;
        "" === n.value && !t.searched || a(n.value)
      }), t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "input", function (t) {
        "" === (t.target || t.srcElement).value && a("")
      }), a
    }
  }, function (t) {
    t.exports = function (t) {
      var e = {
          els: undefined,
          clear: function () {
            for (var n = 0, r = e.els.length; n < r; n++) t.utils.classes(e.els[n]).remove("asc"), t.utils.classes(e.els[n]).remove("desc")
          },
          getOrder: function (e) {
            var n = t.utils.getAttribute(e, "data-order");
            return "asc" == n || "desc" == n ? n : t.utils.classes(e).has("desc") ? "asc" : t.utils.classes(e).has("asc") ? "desc" : "asc"
          },
          getInSensitive: function (e, n) {
            var r = t.utils.getAttribute(e, "data-insensitive");
            n.insensitive = "false" !== r
          },
          setOrder: function (n) {
            for (var r = 0, i = e.els.length; r < i; r++) {
              var o = e.els[r];
              if (t.utils.getAttribute(o, "data-sort") === n.valueName) {
                var s = t.utils.getAttribute(o, "data-order");
                "asc" == s || "desc" == s ? s == n.order && t.utils.classes(o).add(n.order) : t.utils.classes(o).add(n.order)
              }
            }
          }
        },
        n = function () {
          t.trigger("sortStart");
          var n = {},
            r = arguments[0].currentTarget || arguments[0].srcElement || undefined;
          r ? (n.valueName = t.utils.getAttribute(r, "data-sort"), e.getInSensitive(r, n), n.order = e.getOrder(r)) : ((n = arguments[1] || n).valueName = arguments[0], n.order = n.order || "asc", n.insensitive = "undefined" == typeof n.insensitive || n.insensitive), e.clear(), e.setOrder(n);
          var i, o = n.sortFunction || t.sortFunction || null,
            s = "desc" === n.order ? -1 : 1;
          i = o ? function (t, e) {
            return o(t, e, n) * s
          } : function (e, r) {
            var i = t.utils.naturalSort;
            return i.alphabet = t.alphabet || n.alphabet || undefined, !i.alphabet && n.insensitive && (i = t.utils.naturalSort.caseInsensitive), i(e.values()[n.valueName], r.values()[n.valueName]) * s
          }, t.items.sort(i), t.update(), t.trigger("sortComplete")
        };
      return t.handlers.sortStart = t.handlers.sortStart || [], t.handlers.sortComplete = t.handlers.sortComplete || [], e.els = t.utils.getByClass(t.listContainer, t.sortClass), t.utils.events.bind(e.els, "click", n), t.on("searchStart", e.clear), t.on("filterStart", e.clear), n
    }
  }, function (t) {
    var e = function (t) {
      var e, n = this,
        r = function () {
          (e = n.getItemSource(t.item)) && (e = n.clearSourceItem(e, t.valueNames))
        };
      this.clearSourceItem = function (e, n) {
        for (var r = 0, i = n.length; r < i; r++) {
          var o;
          if (n[r].data)
            for (var s = 0, a = n[r].data.length; s < a; s++) e.setAttribute("data-" + n[r].data[s], "");
          else n[r].attr && n[r].name ? (o = t.utils.getByClass(e, n[r].name, !0)) && o.setAttribute(n[r].attr, "") : (o = t.utils.getByClass(e, n[r], !0)) && (o.innerHTML = "");
          o = undefined
        }
        return e
      }, this.getItemSource = function (e) {
        if (e === undefined) {
          for (var n = t.list.childNodes, r = 0, i = n.length; r < i; r++)
            if (n[r].data === undefined) return n[r].cloneNode(!0)
        } else {
          if (/<tr[\s>]/g.exec(e)) {
            var o = document.createElement("tbody");
            return o.innerHTML = e, o.firstChild
          }
          if (-1 !== e.indexOf("<")) {
            var s = document.createElement("div");
            return s.innerHTML = e, s.firstChild
          }
          var a = document.getElementById(t.item);
          if (a) return a
        }
        return undefined
      }, this.get = function (e, r) {
        n.create(e);
        for (var i = {}, o = 0, s = r.length; o < s; o++) {
          var a;
          if (r[o].data)
            for (var u = 0, l = r[o].data.length; u < l; u++) i[r[o].data[u]] = t.utils.getAttribute(e.elm, "data-" + r[o].data[u]);
          else r[o].attr && r[o].name ? (a = t.utils.getByClass(e.elm, r[o].name, !0), i[r[o].name] = a ? t.utils.getAttribute(a, r[o].attr) : "") : (a = t.utils.getByClass(e.elm, r[o], !0), i[r[o]] = a ? a.innerHTML : "");
          a = undefined
        }
        return i
      }, this.set = function (e, r) {
        var i = function (e) {
            for (var n = 0, r = t.valueNames.length; n < r; n++)
              if (t.valueNames[n].data) {
                for (var i = t.valueNames[n].data, o = 0, s = i.length; o < s; o++)
                  if (i[o] === e) return {
                    data: e
                  }
              } else {
                if (t.valueNames[n].attr && t.valueNames[n].name && t.valueNames[n].name == e) return t.valueNames[n];
                if (t.valueNames[n] === e) return e
              }
          },
          o = function (n, r) {
            var o, s = i(n);
            s && (s.data ? e.elm.setAttribute("data-" + s.data, r) : s.attr && s.name ? (o = t.utils.getByClass(e.elm, s.name, !0)) && o.setAttribute(s.attr, r) : (o = t.utils.getByClass(e.elm, s, !0)) && (o.innerHTML = r), o = undefined)
          };
        if (!n.create(e))
          for (var s in r) r.hasOwnProperty(s) && o(s, r[s])
      }, this.create = function (t) {
        if (t.elm !== undefined) return !1;
        if (e === undefined) throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
        var r = e.cloneNode(!0);
        return r.removeAttribute("id"), t.elm = r, n.set(t, t.values()), !0
      }, this.remove = function (e) {
        e.elm.parentNode === t.list && t.list.removeChild(e.elm)
      }, this.show = function (e) {
        n.create(e), t.list.appendChild(e.elm)
      }, this.hide = function (e) {
        e.elm !== undefined && e.elm.parentNode === t.list && t.list.removeChild(e.elm)
      }, this.clear = function () {
        if (t.list.hasChildNodes())
          for (; t.list.childNodes.length >= 1;) t.list.removeChild(t.list.firstChild)
      }, r()
    };
    t.exports = function (t) {
      return new e(t)
    }
  }, function (t) {
    t.exports = function (t, e) {
      var n = t.getAttribute && t.getAttribute(e) || null;
      if (!n)
        for (var r = t.attributes.length, i = 0; i < r; i++) e[i] !== undefined && e[i].nodeName === e && (n = e[i].nodeValue);
      return n
    }
  }, function (t) {
    "use strict";

    function e(t) {
      return t >= 48 && t <= 57
    }

    function n(t, n) {
      for (var r = (t += "").length, s = (n += "").length, a = 0, u = 0; a < r && u < s;) {
        var l = t.charCodeAt(a),
          c = n.charCodeAt(u);
        if (e(l)) {
          if (!e(c)) return l - c;
          for (var f = a, h = u; 48 === l && ++f < r;) l = t.charCodeAt(f);
          for (; 48 === c && ++h < s;) c = n.charCodeAt(h);
          for (var d = f, p = h; d < r && e(t.charCodeAt(d));) ++d;
          for (; p < s && e(n.charCodeAt(p));) ++p;
          var m = d - f - p + h;
          if (m) return m;
          for (; f < d;)
            if (m = t.charCodeAt(f++) - n.charCodeAt(h++)) return m;
          a = d, u = p
        } else {
          if (l !== c) return l < o && c < o && -1 !== i[l] && -1 !== i[c] ? i[l] - i[c] : l - c;
          ++a, ++u
        }
      }
      return r - s
    }
    var r, i, o = 0;
    n.caseInsensitive = n.i = function (t, e) {
      return n(("" + t).toLowerCase(), ("" + e).toLowerCase())
    }, Object.defineProperties(n, {
      alphabet: {
        get: function () {
          return r
        },
        set: function (t) {
          i = [];
          var e = 0;
          if (r = t)
            for (; e < r.length; e++) i[r.charCodeAt(e)] = e;
          for (o = i.length, e = 0; e < o; e++) i[e] === undefined && (i[e] = -1)
        }
      }
    }), t.exports = n
  }, function (t) {
    t.exports = function (t, e, n) {
      function r(t, n) {
        var r = t / e.length,
          i = Math.abs(a - n);
        return o ? r + i / o : i ? 1 : r
      }
      var i = n.location || 0,
        o = n.distance || 100,
        s = n.threshold || .4;
      if (e === t) return !0;
      if (e.length > 32) return !1;
      var a = i,
        u = function () {
          var t, n = {};
          for (t = 0; t < e.length; t++) n[e.charAt(t)] = 0;
          for (t = 0; t < e.length; t++) n[e.charAt(t)] |= 1 << e.length - t - 1;
          return n
        }(),
        l = s,
        c = t.indexOf(e, a); - 1 != c && (l = Math.min(r(0, c), l), -1 != (c = t.lastIndexOf(e, a + e.length)) && (l = Math.min(r(0, c), l)));
      var f, h, d = 1 << e.length - 1;
      c = -1;
      for (var p, m = e.length + t.length, g = 0; g < e.length; g++) {
        for (f = 0, h = m; f < h;) r(g, a + h) <= l ? f = h : m = h, h = Math.floor((m - f) / 2 + f);
        m = h;
        var v = Math.max(1, a - h + 1),
          y = Math.min(a + h, t.length) + e.length,
          b = Array(y + 2);
        b[y + 1] = (1 << g) - 1;
        for (var w = y; w >= v; w--) {
          var x = u[t.charAt(w - 1)];
          if (b[w] = 0 === g ? (b[w + 1] << 1 | 1) & x : (b[w + 1] << 1 | 1) & x | (p[w + 1] | p[w]) << 1 | 1 | p[w + 1], b[w] & d) {
            var E = r(g, w - 1);
            if (E <= l) {
              if (l = E, !((c = w - 1) > a)) break;
              v = Math.max(1, 2 * a - c)
            }
          }
        }
        if (r(g + 1, a) > l) break;
        p = b
      }
      return !(c < 0)
    }
  }]);
/*! List.js v1.5.0 (http://listjs.com) by Jonny Strömberg (http://javve.com) */
/*! airbrake-js v1.6.8 */
! function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e(function () {
    try {
      return require("os")
    } catch (t) {}
  }(), require("cross-fetch")) : "function" == typeof define && define.amd ? define(["os", "cross-fetch"], e) : "object" == typeof exports ? exports.Client = e(function () {
    try {
      return require("os")
    } catch (t) {}
  }(), require("cross-fetch")) : (t.airbrakeJs = t.airbrakeJs || {}, t.airbrakeJs.Client = e(t[undefined], t.fetch))
}("undefined" != typeof self ? self : this, function (t, e) {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        enumerable: !0,
        get: r
      })
    }, e.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }, e.t = function (t, n) {
      if (1 & n && (t = e(t)), 8 & n) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (e.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }), 2 & n && "string" != typeof t)
        for (var i in t) e.d(r, i, function (e) {
          return t[e]
        }.bind(null, i));
      return r
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t["default"]
      } : function () {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 0)
  }({
    "./node_modules/error-stack-parser/error-stack-parser.js":
      /*!***************************************************************!*\
        !*** ./node_modules/error-stack-parser/error-stack-parser.js ***!
        \***************************************************************/
      /*! no static exports found */
      function (t, e, n) {
        var r = !1;
        ! function (e, i) {
          "use strict";
          "function" == typeof r && r.amd ? r("error-stack-parser", ["stackframe"], i) : t.exports = i(n( /*! stackframe */ "./node_modules/stackframe/stackframe.js"))
        }(0, function (t) {
          "use strict";
          var e = /(^|@)\S+\:\d+/,
            n = /^\s*at .*(\S+\:\d+|\(native\))/m,
            r = /^(eval@)?(\[native code\])?$/;
          return {
            parse: function (t) {
              if ("undefined" != typeof t.stacktrace || "undefined" != typeof t["opera#sourceloc"]) return this.parseOpera(t);
              if (t.stack && t.stack.match(n)) return this.parseV8OrIE(t);
              if (t.stack) return this.parseFFOrSafari(t);
              throw new Error("Cannot parse given Error object")
            },
            extractLocation: function (t) {
              if (-1 === t.indexOf(":")) return [t];
              var e = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(t.replace(/[\(\)]/g, ""));
              return [e[1], e[2] || undefined, e[3] || undefined]
            },
            parseV8OrIE: function (e) {
              return e.stack.split("\n").filter(function (t) {
                return !!t.match(n)
              }, this).map(function (e) {
                e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                var n = e.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1),
                  r = this.extractLocation(n.pop()),
                  i = n.join(" ") || undefined,
                  o = ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? undefined : r[0];
                return new t({
                  functionName: i,
                  fileName: o,
                  lineNumber: r[1],
                  columnNumber: r[2],
                  source: e
                })
              }, this)
            },
            parseFFOrSafari: function (e) {
              return e.stack.split("\n").filter(function (t) {
                return !t.match(r)
              }, this).map(function (e) {
                if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), -1 === e.indexOf("@") && -1 === e.indexOf(":")) return new t({
                  functionName: e
                });
                var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  r = e.match(n),
                  i = r && r[1] ? r[1] : undefined,
                  o = this.extractLocation(e.replace(n, ""));
                return new t({
                  functionName: i,
                  fileName: o[0],
                  lineNumber: o[1],
                  columnNumber: o[2],
                  source: e
                })
              }, this)
            },
            parseOpera: function (t) {
              return !t.stacktrace || t.message.indexOf("\n") > -1 && t.message.split("\n").length > t.stacktrace.split("\n").length ? this.parseOpera9(t) : t.stack ? this.parseOpera11(t) : this.parseOpera10(t)
            },
            parseOpera9: function (e) {
              for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = e.message.split("\n"), i = [], o = 2, s = r.length; o < s; o += 2) {
                var a = n.exec(r[o]);
                a && i.push(new t({
                  fileName: a[2],
                  lineNumber: a[1],
                  source: r[o]
                }))
              }
              return i
            },
            parseOpera10: function (e) {
              for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = e.stacktrace.split("\n"), i = [], o = 0, s = r.length; o < s; o += 2) {
                var a = n.exec(r[o]);
                a && i.push(new t({
                  functionName: a[3] || undefined,
                  fileName: a[2],
                  lineNumber: a[1],
                  source: r[o]
                }))
              }
              return i
            },
            parseOpera11: function (n) {
              return n.stack.split("\n").filter(function (t) {
                return !!t.match(e) && !t.match(/^Error created at/)
              }, this).map(function (e) {
                var n, r = e.split("@"),
                  i = this.extractLocation(r.pop()),
                  o = r.shift() || "",
                  s = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined;
                o.match(/\(([^\)]*)\)/) && (n = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                var a = n === undefined || "[arguments not available]" === n ? undefined : n.split(",");
                return new t({
                  functionName: s,
                  args: a,
                  fileName: i[0],
                  lineNumber: i[1],
                  columnNumber: i[2],
                  source: e
                })
              }, this)
            }
          }
        })
      },
    "./node_modules/promise-polyfill/src/finally.js":
      /*!******************************************************!*\
        !*** ./node_modules/promise-polyfill/src/finally.js ***!
        \******************************************************/
      /*! exports provided: default */
      function (t, e, n) {
        "use strict";

        function r(t) {
          var e = this.constructor;
          return this.then(function (n) {
            return e.resolve(t()).then(function () {
              return n
            })
          }, function (n) {
            return e.resolve(t()).then(function () {
              return e.reject(n)
            })
          })
        }
        n.r(e), e["default"] = r
      },
    "./node_modules/promise-polyfill/src/index.js":
      /*!****************************************************!*\
        !*** ./node_modules/promise-polyfill/src/index.js ***!
        \****************************************************/
      /*! exports provided: default */
      function (t, e, n) {
        "use strict";
        n.r(e),
          function (t) {
            function r() {}

            function i(t, e) {
              return function () {
                t.apply(e, arguments)
              }
            }

            function o(t) {
              if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
              if ("function" != typeof t) throw new TypeError("not a function");
              this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], f(t, this)
            }

            function s(t, e) {
              for (; 3 === t._state;) t = t._value;
              0 !== t._state ? (t._handled = !0, o._immediateFn(function () {
                var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                if (null !== n) {
                  var r;
                  try {
                    r = n(t._value)
                  } catch (i) {
                    return void u(e.promise, i)
                  }
                  a(e.promise, r)
                } else(1 === t._state ? a : u)(e.promise, t._value)
              })) : t._deferreds.push(e)
            }

            function a(t, e) {
              try {
                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" == typeof e || "function" == typeof e)) {
                  var n = e.then;
                  if (e instanceof o) return t._state = 3, t._value = e, void l(t);
                  if ("function" == typeof n) return void f(i(n, e), t)
                }
                t._state = 1, t._value = e, l(t)
              } catch (r) {
                u(t, r)
              }
            }

            function u(t, e) {
              t._state = 2, t._value = e, l(t)
            }

            function l(t) {
              2 === t._state && 0 === t._deferreds.length && o._immediateFn(function () {
                t._handled || o._unhandledRejectionFn(t._value)
              });
              for (var e = 0, n = t._deferreds.length; e < n; e++) s(t, t._deferreds[e]);
              t._deferreds = null
            }

            function c(t, e, n) {
              this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
            }

            function f(t, e) {
              var n = !1;
              try {
                t(function (t) {
                  n || (n = !0, a(e, t))
                }, function (t) {
                  n || (n = !0, u(e, t))
                })
              } catch (r) {
                if (n) return;
                n = !0, u(e, r)
              }
            }
            var h = n( /*! ./finally */ "./node_modules/promise-polyfill/src/finally.js"),
              d = setTimeout;
            o.prototype["catch"] = function (t) {
              return this.then(null, t)
            }, o.prototype.then = function (t, e) {
              var n = new this.constructor(r);
              return s(this, new c(t, e, n)), n
            }, o.prototype["finally"] = h["default"], o.all = function (t) {
              return new o(function (e, n) {
                function r(t, s) {
                  try {
                    if (s && ("object" == typeof s || "function" == typeof s)) {
                      var a = s.then;
                      if ("function" == typeof a) return void a.call(s, function (e) {
                        r(t, e)
                      }, n)
                    }
                    i[t] = s, 0 == --o && e(i)
                  } catch (u) {
                    n(u)
                  }
                }
                if (!t || "undefined" == typeof t.length) throw new TypeError("Promise.all accepts an array");
                var i = Array.prototype.slice.call(t);
                if (0 === i.length) return e([]);
                for (var o = i.length, s = 0; s < i.length; s++) r(s, i[s])
              })
            }, o.resolve = function (t) {
              return t && "object" == typeof t && t.constructor === o ? t : new o(function (e) {
                e(t)
              })
            }, o.reject = function (t) {
              return new o(function (e, n) {
                n(t)
              })
            }, o.race = function (t) {
              return new o(function (e, n) {
                for (var r = 0, i = t.length; r < i; r++) t[r].then(e, n)
              })
            }, o._immediateFn = "function" == typeof t && function (e) {
              t(e)
            } || function (t) {
              d(t, 0)
            }, o._unhandledRejectionFn = function (t) {
              "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            }, e["default"] = o
          }.call(this, n( /*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate)
      },
    "./node_modules/promise-polyfill/src/polyfill.js":
      /*!*******************************************************!*\
        !*** ./node_modules/promise-polyfill/src/polyfill.js ***!
        \*******************************************************/
      /*! no exports provided */
      function (t, e, n) {
        "use strict";
        n.r(e),
          function (t) {
            var e = n( /*! ./index */ "./node_modules/promise-polyfill/src/index.js"),
              r = n( /*! ./finally */ "./node_modules/promise-polyfill/src/finally.js"),
              i = function () {
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if (void 0 !== t) return t;
                throw new Error("unable to locate global object")
              }();
            "Promise" in i ? i.Promise.prototype["finally"] || (i.Promise.prototype["finally"] = r["default"]) : i.Promise = e["default"]
          }.call(this, n( /*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"))
      },
    "./node_modules/setimmediate/setImmediate.js":
      /*!***************************************************!*\
        !*** ./node_modules/setimmediate/setImmediate.js ***!
        \***************************************************/
      /*! no static exports found */
      function (t, e, n) {
        (function (t) {
          ! function (t, e) {
            "use strict";

            function n(t) {
              "function" != typeof t && (t = new Function("" + t));
              for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
              var r = {
                callback: t,
                args: e
              };
              return p[d] = r, h(d), d++
            }

            function r(t) {
              delete p[t]
            }

            function i(t) {
              var n = t.callback,
                r = t.args;
              switch (r.length) {
                case 0:
                  n();
                  break;
                case 1:
                  n(r[0]);
                  break;
                case 2:
                  n(r[0], r[1]);
                  break;
                case 3:
                  n(r[0], r[1], r[2]);
                  break;
                default:
                  n.apply(e, r)
              }
            }

            function o(t) {
              if (m) setTimeout(o, 0, t);
              else {
                var e = p[t];
                if (e) {
                  m = !0;
                  try {
                    i(e)
                  } finally {
                    r(t), m = !1
                  }
                }
              }
            }

            function s() {
              h = function (t) {
                process.nextTick(function () {
                  o(t)
                })
              }
            }

            function a() {
              if (t.postMessage && !t.importScripts) {
                var e = !0,
                  n = t.onmessage;
                return t.onmessage = function () {
                  e = !1
                }, t.postMessage("", "*"), t.onmessage = n, e
              }
            }

            function u() {
              var e = "setImmediate$" + Math.random() + "$",
                n = function (n) {
                  n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && o(+n.data.slice(e.length))
                };
              t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), h = function (n) {
                t.postMessage(e + n, "*")
              }
            }

            function l() {
              var t = new MessageChannel;
              t.port1.onmessage = function (t) {
                o(t.data)
              }, h = function (e) {
                t.port2.postMessage(e)
              }
            }

            function c() {
              var t = g.documentElement;
              h = function (e) {
                var n = g.createElement("script");
                n.onreadystatechange = function () {
                  o(e), n.onreadystatechange = null, t.removeChild(n), n = null
                }, t.appendChild(n)
              }
            }

            function f() {
              h = function (t) {
                setTimeout(o, 0, t)
              }
            }
            if (!t.setImmediate) {
              var h, d = 1,
                p = {},
                m = !1,
                g = t.document,
                v = Object.getPrototypeOf && Object.getPrototypeOf(t);
              v = v && v.setTimeout ? v : t, "[object process]" === {}.toString.call(t.process) ? s() : a() ? u() : t.MessageChannel ? l() : g && "onreadystatechange" in g.createElement("script") ? c() : f(), v.setImmediate = n, v.clearImmediate = r
            }
          }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(this, n( /*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"))
      },
    "./node_modules/stackframe/stackframe.js":
      /*!***********************************************!*\
        !*** ./node_modules/stackframe/stackframe.js ***!
        \***********************************************/
      /*! no static exports found */
      function (t) {
        var e = !1;
        ! function (n, r) {
          "use strict";
          "function" == typeof e && e.amd ? e("stackframe", [], r) : t.exports = r()
        }(0, function () {
          "use strict";

          function t(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
          }

          function e(t) {
            return t.charAt(0).toUpperCase() + t.substring(1)
          }

          function n(t) {
            return function () {
              return this[t]
            }
          }

          function r(t) {
            if (t instanceof Object)
              for (var n = 0; n < u.length; n++) t.hasOwnProperty(u[n]) && t[u[n]] !== undefined && this["set" + e(u[n])](t[u[n]])
          }
          var i = ["isConstructor", "isEval", "isNative", "isToplevel"],
            o = ["columnNumber", "lineNumber"],
            s = ["fileName", "functionName", "source"],
            a = ["args"],
            u = i.concat(o, s, a);
          r.prototype = {
            getArgs: function () {
              return this.args
            },
            setArgs: function (t) {
              if ("[object Array]" !== Object.prototype.toString.call(t)) throw new TypeError("Args must be an Array");
              this.args = t
            },
            getEvalOrigin: function () {
              return this.evalOrigin
            },
            setEvalOrigin: function (t) {
              if (t instanceof r) this.evalOrigin = t;
              else {
                if (!(t instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                this.evalOrigin = new r(t)
              }
            },
            toString: function () {
              return (this.getFunctionName() || "{anonymous}") + ("(" + (this.getArgs() || []).join(",") + ")") + (this.getFileName() ? "@" + this.getFileName() : "") + (t(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (t(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
            }
          };
          for (var l = 0; l < i.length; l++) r.prototype["get" + e(i[l])] = n(i[l]), r.prototype["set" + e(i[l])] = function (t) {
            return function (e) {
              this[t] = Boolean(e)
            }
          }(i[l]);
          for (var c = 0; c < o.length; c++) r.prototype["get" + e(o[c])] = n(o[c]), r.prototype["set" + e(o[c])] = function (e) {
            return function (n) {
              if (!t(n)) throw new TypeError(e + " must be a Number");
              this[e] = Number(n)
            }
          }(o[c]);
          for (var f = 0; f < s.length; f++) r.prototype["get" + e(s[f])] = n(s[f]), r.prototype["set" + e(s[f])] = function (t) {
            return function (e) {
              this[t] = String(e)
            }
          }(s[f]);
          return r
        })
      },
    "./node_modules/timers-browserify/main.js":
      /*!************************************************!*\
        !*** ./node_modules/timers-browserify/main.js ***!
        \************************************************/
      /*! no static exports found */
      function (t, e, n) {
        (function (t) {
          function r(t, e) {
            this._id = t, this._clearFn = e
          }
          var i = void 0 !== t && t || "undefined" != typeof self && self || window,
            o = Function.prototype.apply;
          e.setTimeout = function () {
            return new r(o.call(setTimeout, i, arguments), clearTimeout)
          }, e.setInterval = function () {
            return new r(o.call(setInterval, i, arguments), clearInterval)
          }, e.clearTimeout = e.clearInterval = function (t) {
            t && t.close()
          }, r.prototype.unref = r.prototype.ref = function () {}, r.prototype.close = function () {
            this._clearFn.call(i, this._id)
          }, e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
          }, e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
          }, e._unrefActive = e.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function () {
              t._onTimeout && t._onTimeout()
            }, e))
          }, n( /*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
        }).call(this, n( /*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"))
      },
    "./node_modules/webpack/buildin/global.js":
      /*!***********************************!*\
        !*** (webpack)/buildin/global.js ***!
        \***********************************/
      /*! no static exports found */
      function (t) {
        var e;
        e = function () {
          return this
        }();
        try {
          e = e || new Function("return this")()
        } catch (n) {
          "object" == typeof window && (e = window)
        }
        t.exports = e
      },
    "./src/client.ts":
      /*!***********************!*\
        !*** ./src/client.ts ***!
        \***********************/
      /*! no static exports found */
      function (t, e, n) {
        "use strict";

        function r(t) {
          return t && t.startsWith && t.startsWith("dev")
        }
        var i = this && this.__assign || function () {
            return (i = Object.assign || function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t
            }).apply(this, arguments)
          },
          o = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              "default": t
            }
          };
        n( /*! promise-polyfill/src/polyfill */ "./node_modules/promise-polyfill/src/polyfill.js");
        var s = o(n( /*! ./jsonify_notice */ "./src/jsonify_notice.ts")),
          a = o(n( /*! ./processor/stacktracejs */ "./src/processor/stacktracejs.ts")),
          u = o(n( /*! ./filter/angular_message */ "./src/filter/angular_message.ts")),
          l = o(n( /*! ./filter/debounce */ "./src/filter/debounce.ts")),
          c = o(n( /*! ./filter/ignore */ "./src/filter/ignore.ts")),
          f = o(n( /*! ./filter/node */ "./src/filter/node.ts")),
          h = o(n( /*! ./filter/uncaught_message */ "./src/filter/uncaught_message.ts")),
          d = o(n( /*! ./filter/window */ "./src/filter/window.ts")),
          p = n( /*! ./http_req */ "./src/http_req/index.ts"),
          m = n( /*! ./historian */ "./src/historian.ts"),
          g = n( /*! ./routes */ "./src/routes.ts"),
          v = function () {
            function t(t) {
              var e = this;
              if (this.filters = [], this.offline = !1, this.todo = [], this.onClose = [], !t.projectId || !t.projectKey) throw new Error("airbrake: projectId and projectKey are required");
              this.opts = t, this.opts.host = this.opts.host || "https://api.airbrake.io", this.opts.timeout = this.opts.timeout || 1e4, this.opts.keysBlacklist = this.opts.keysBlacklist || [/password/, /secret/], this.url = this.opts.host + "/api/v3/projects/" + this.opts.projectId + "/notices?key=" + this.opts.projectKey, this.processor = this.opts.processor || a["default"], this.requester = p.makeRequester(this.opts), this.addFilter(c["default"]), this.addFilter(l["default"]()), this.addFilter(h["default"]), this.addFilter(u["default"]), !this.opts.environment && "undefined" != typeof process && process.env.NODE_ENV && (this.opts.environment = process.env.NODE_ENV), this.opts.environment && this.addFilter(function (t) {
                return t.context.environment = e.opts.environment, t
              }), "object" == typeof window ? (this.addFilter(d["default"]), window.addEventListener && (this.onOnline = this.onOnline.bind(this), window.addEventListener("online", this.onOnline), this.onOffline = this.onOffline.bind(this), window.addEventListener("offline", this.onOffline), this.onUnhandledrejection = this.onUnhandledrejection.bind(this), window.addEventListener("unhandledrejection", this.onUnhandledrejection), this.onClose.push(function () {
                window.removeEventListener("online", e.onOnline), window.removeEventListener("offline", e.onOffline), window.removeEventListener("unhandledrejection", e.onUnhandledrejection)
              }))) : this.addFilter(f["default"]);
              var n = t.instrumentation || {};
              typeof n.console === undefined && (n.console = !r(t.environment)), this.historian = m.Historian.instance(n), this.historian.registerNotifier(this)
            }
            return t.prototype.close = function () {
              for (var t = 0, e = this.onClose; t < e.length; t++) {
                (0, e[t])()
              }
              this.historian.unregisterNotifier(this)
            }, t.prototype.addFilter = function (t) {
              this.filters.push(t)
            }, t.prototype.notify = function (t) {
              var e = this,
                n = {
                  id: "",
                  errors: [],
                  context: i({
                    severity: "error"
                  }, t.context),
                  params: t.params || {},
                  environment: t.environment || {},
                  session: t.session || {}
                };
              if ("object" == typeof t && t.error !== undefined || (t = {
                  error: t
                }), !t.error) return n.error = new Error("airbrake: got err=" + JSON.stringify(t.error) + ", wanted an Error"), Promise.resolve(n);
              if (this.opts.ignoreWindowError && t.context && t.context.windowError) return n.error = new Error("airbrake: window error is ignored"), Promise.resolve(n);
              if (this.offline) return new Promise(function (r, i) {
                for (e.todo.push({
                    err: t,
                    resolve: r,
                    reject: i
                  }); e.todo.length > 100;) {
                  var o = e.todo.shift();
                  if (o === undefined) break;
                  n.error = new Error("airbrake: offline queue is too large"), o.resolve(n)
                }
              });
              var r = this.historian.getHistory();
              r.length > 0 && (n.context.history = r);
              var o = this.processor(t.error);
              n.errors.push(o);
              for (var s = 0, a = this.filters; s < a.length; s++) {
                var u = (0, a[s])(n);
                if (null === u) return n.error = new Error("airbrake: error is filtered"), Promise.resolve(n);
                n = u
              }
              return n.context || (n.context = {}), n.context.language = "JavaScript", n.context.notifier = {
                name: "airbrake-js",
                version: "1.6.8",
                url: "https://github.com/airbrake/airbrake-js"
              }, this.sendNotice(n)
            }, t.prototype.sendNotice = function (t) {
              var e = s["default"](t, {
                keysBlacklist: this.opts.keysBlacklist
              });
              if (this.opts.reporter) {
                if ("function" == typeof this.opts.reporter) return this.opts.reporter(t);
                console.warn("airbrake: options.reporter must be a function")
              }
              var n = {
                method: "POST",
                url: this.url,
                body: e
              };
              return this.requester(n).then(function (e) {
                return t.id = e.json.id, t
              })["catch"](function (e) {
                return t.error = e, t
              })
            }, t.prototype.wrap = function (t, e) {
              if (void 0 === e && (e = []), t._airbrake) return t;
              var n = this,
                r = function () {
                  var e = Array.prototype.slice.call(arguments),
                    r = n.wrapArguments(e);
                  try {
                    return t.apply(this, r)
                  } catch (i) {
                    throw n.notify({
                      error: i,
                      params: {
                        arguments: e
                      }
                    }), this.historian.ignoreNextWindowError(), i
                  }
                };
              for (var i in t) t.hasOwnProperty(i) && (r[i] = t[i]);
              for (var o = 0, s = e; o < s.length; o++) {
                i = s[o];
                t.hasOwnProperty(i) && (r[i] = t[i])
              }
              return r._airbrake = !0, r.inner = t, r
            }, t.prototype.wrapArguments = function (t) {
              for (var e = 0; e < t.length; e++) {
                var n = t[e];
                "function" == typeof n && (t[e] = this.wrap(n))
              }
              return t
            }, t.prototype.call = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
              return this.wrap(t).apply(this, Array.prototype.slice.call(arguments, 1))
            }, t.prototype.onerror = function () {
              this.historian.onerror.apply(this.historian, arguments)
            }, t.prototype.notifyRequest = function (t) {
              this.opts.TDigest && (this.routes || (this.routes = new g.Routes(this.opts)), this.routes.notifyRequest(t))
            }, t.prototype.onOnline = function () {
              this.offline = !1;
              for (var t = function (t) {
                  e.notify(t.err).then(function (e) {
                    t.resolve(e)
                  })
                }, e = this, n = 0, r = this.todo; n < r.length; n++) {
                t(r[n])
              }
              this.todo = []
            }, t.prototype.onOffline = function () {
              this.offline = !0
            }, t.prototype.onUnhandledrejection = function (t) {
              var e = t.reason || t.detail && t.detail.reason;
              if (e) {
                var n = e.message || String(e);
                n.indexOf && 0 === n.indexOf("airbrake: ") || this.notify(e)
              }
            }, t
          }();
        t.exports = v
      },
    "./src/filter/angular_message.ts":
      /*!***************************************!*\
        !*** ./src/filter/angular_message.ts ***!
        \***************************************/
      /*! no static exports found */
      function (t, e) {
        "use strict";

        function n(t) {
          var e = t.errors[0];
          if ("" !== e.type && "Error" !== e.type) return t;
          var n = e.message.match(r);
          return null !== n && (e.type = n[1], e.message = n[2]), t
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = new RegExp(["^", "\\[(\\$.+)\\]", "\\s", "([\\s\\S]+)", "$"].join(""));
        e["default"] = n
      },
    "./src/filter/debounce.ts":
      /*!********************************!*\
        !*** ./src/filter/debounce.ts ***!
        \********************************/
      /*! no static exports found */
      function (t, e) {
        "use strict";

        function n() {
          var t, e;
          return function (n) {
            var r = JSON.stringify(n.errors);
            return r === t ? null : (e && clearTimeout(e), t = r, e = setTimeout(function () {
              t = ""
            }, 1e3), n)
          }
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e["default"] = n
      },
    "./src/filter/ignore.ts":
      /*!******************************!*\
        !*** ./src/filter/ignore.ts ***!
        \******************************/
      /*! no static exports found */
      function (t, e) {
        "use strict";

        function n(t) {
          var e = t.errors[0];
          if ("" === e.type && -1 !== r.indexOf(e.message)) return null;
          if (e.backtrace && e.backtrace.length > 0 && "<anonymous>" === e.backtrace[0].file) return null;
          return t
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = ["Script error", "Script error.", "InvalidAccessError"];
        e["default"] = n
      },
    "./src/filter/node.ts":
      /*!****************************!*\
        !*** ./src/filter/node.ts ***!
        \****************************/
      /*! no static exports found */
      function (t, e, n) {
        "use strict";

        function r(t) {
          var e;
          try {
            e = n( /*! os */ "os")
          } catch (r) {}
          return e && (t.context.os = e.type() + "/" + e.release(), t.context.architecture = e.arch(), t.context.hostname = e.hostname(), t.params.os = {
            homedir: e.homedir(),
            uptime: e.uptime(),
            freemem: e.freemem(),
            totalmem: e.totalmem(),
            loadavg: e.loadavg()
          }), process && (t.context.platform = process.platform, t.context.rootDirectory || (t.context.rootDirectory = process.cwd()), t.params.process = {
            pid: process.pid,
            cwd: process.cwd(),
            execPath: process.execPath,
            argv: process.argv
          }, ["uptime", "cpuUsage", "memoryUsage"].map(function (e) {
            process[e] && (t.params.process[e] = process[e]())
          })), t
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e["default"] = r
      },
    "./src/filter/uncaught_message.ts":
      /*!****************************************!*\
        !*** ./src/filter/uncaught_message.ts ***!
        \****************************************/
      /*! no static exports found */
      function (t, e) {
        "use strict";

        function n(t) {
          var e = t.errors[0];
          if ("" !== e.type && "Error" !== e.type) return t;
          var n = e.message.match(r);
          return null !== n && (e.type = n[1], e.message = n[2]), t
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = new RegExp(["^", "Uncaught\\s", "(.+?)", ":\\s", "(.+)", "$"].join(""));
        e["default"] = n
      },
    "./src/filter/window.ts":
      /*!******************************!*\
        !*** ./src/filter/window.ts ***!
        \******************************/
      /*! no static exports found */
      function (t, e) {
        "use strict";

        function n(t) {
          return window.navigator && window.navigator.userAgent && (t.context.userAgent = window.navigator.userAgent), window.location && (t.context.url = String(window.location), t.context.rootDirectory = window.location.protocol + "//" + window.location.host), t
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e["default"] = n
      },
    "./src/historian.ts":
      /*!**************************!*\
        !*** ./src/historian.ts ***!
        \**************************/
      /*! no static exports found */
      function (t, e, n) {
        "use strict";

        function r(t) {
          return t === undefined || !0 === t
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var i = n( /*! ./instrumentation/dom */ "./src/instrumentation/dom.ts"),
          o = ["debug", "log", "info", "warn", "error"],
          s = function () {
            function t(t) {
              var e = this;
              if (void 0 === t && (t = {}), this.historyMaxLen = 20, this.notifiers = [], this.errors = [], this.ignoreWindowError = 0, this.history = [], this.ignoreNextXHR = 0, r(t.console) && "object" == typeof console && console.error && (this.consoleError = console.error), "object" == typeof window) {
                if (r(t.onerror)) {
                  var n = this,
                    i = window.onerror;
                  window.onerror = function () {
                    i && i.apply(this, arguments), n.onerror.apply(n, arguments)
                  }
                }
                this.domEvents(), r(t.fetch) && "function" == typeof fetch && this.instrumentFetch(), r(t.history) && "object" == typeof history && this.location()
              }
              "undefined" == typeof window && "object" == typeof process && "function" == typeof process.on && (process.on("uncaughtException", function (t) {
                e.notify(t).then(function () {
                  1 === process.listeners("uncaughtException").length && (e.consoleError && e.consoleError("uncaught exception", t), process.exit(1))
                })
              }), process.on("unhandledRejection", function (t) {
                var n = t.message || String(t);
                n.indexOf && 0 === n.indexOf("airbrake: ") || e.notify(t).then(function () {
                  1 === process.listeners("unhandledRejection").length && (e.consoleError && e.consoleError("unhandled rejection", t), process.exit(1))
                })
              })), r(t.console) && "object" == typeof console && this.console(), r(t.xhr) && "undefined" != typeof XMLHttpRequest && this.xhr()
            }
            return t.instance = function (e) {
              return void 0 === e && (e = {}), t._instance || (t._instance = new t(e)), t._instance
            }, t.prototype.registerNotifier = function (t) {
              this.notifiers.push(t);
              for (var e = 0, n = this.errors; e < n.length; e++) {
                var r = n[e];
                this.notifyNotifiers(r)
              }
              this.errors = []
            }, t.prototype.unregisterNotifier = function (t) {
              var e = this.notifiers.indexOf(t); - 1 !== e && this.notifiers.splice(e, 1)
            }, t.prototype.notify = function (t) {
              return this.notifiers.length > 0 ? this.notifyNotifiers(t) : (this.errors.push(t), this.errors.length > this.historyMaxLen && (this.errors = this.errors.slice(-this.historyMaxLen)), Promise.resolve(null))
            }, t.prototype.notifyNotifiers = function (t) {
              for (var e = [], n = 0, r = this.notifiers; n < r.length; n++) {
                var i = r[n];
                e.push(i.notify(t))
              }
              return Promise.all(e).then(function (t) {
                return t[0]
              })
            }, t.prototype.onerror = function (t, e, n, r, i) {
              this.ignoreWindowError > 0 || (i ? this.notify({
                error: i,
                context: {
                  windowError: !0
                }
              }) : e && n && this.notify({
                error: {
                  message: t,
                  fileName: e,
                  lineNumber: n,
                  columnNumber: r,
                  noStack: !0
                },
                context: {
                  windowError: !0
                }
              }))
            }, t.prototype.ignoreNextWindowError = function () {
              var t = this;
              this.ignoreWindowError++, setTimeout(function () {
                return t.ignoreWindowError--
              })
            }, t.prototype.getHistory = function () {
              return this.history
            }, t.prototype.pushHistory = function (t) {
              this.isDupState(t) ? this.lastState.num ? this.lastState.num++ : this.lastState.num = 2 : (t.date || (t.date = new Date), this.history.push(t), this.lastState = t, this.history.length > this.historyMaxLen && (this.history = this.history.slice(-this.historyMaxLen)))
            }, t.prototype.isDupState = function (t) {
              if (!this.lastState) return !1;
              for (var e in t)
                if (t.hasOwnProperty(e) && "date" !== e && t[e] !== this.lastState[e]) return !1;
              return !0
            }, t.prototype.domEvents = function () {
              var t = i.makeEventHandler(this);
              window.addEventListener && (window.addEventListener("load", t), window.addEventListener("error", function (e) {
                "error" in e || t(e)
              }, !0)), "object" == typeof document && document.addEventListener && (document.addEventListener("DOMContentLoaded", t), document.addEventListener("click", t), document.addEventListener("keypress", t))
            }, t.prototype.console = function () {
              for (var t = this, e = function (e) {
                  if (!(e in console)) return "continue";
                  var n = console[e],
                    r = function () {
                      for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                      n.apply(console, r), t.pushHistory({
                        type: "log",
                        severity: e,
                        arguments: r
                      })
                    };
                  r.inner = n, console[e] = r
                }, n = 0, r = o; n < r.length; n++) {
                e(r[n])
              }
            }, t.prototype.unwrapConsole = function () {
              for (var t = 0, e = o; t < e.length; t++) {
                var n = e[t];
                n in console && console[n].inner && (console[n] = console[n].inner)
              }
            }, t.prototype.instrumentFetch = function () {
              var t = this,
                e = window.fetch;
              window.fetch = function (n, r) {
                var i = {
                  type: "xhr",
                  date: new Date
                };
                return i.method = r && r.method ? r.method : "GET", "string" == typeof n ? i.url = n : (i.method = n.method, i.url = n.url), t.ignoreNextXHR++, setTimeout(function () {
                  return t.ignoreNextXHR--
                }), e.apply(this, arguments).then(function (e) {
                  return i.statusCode = e.status, i.duration = (new Date).getTime() - i.date.getTime(), t.pushHistory(i), e
                })["catch"](function (e) {
                  throw i.error = e, i.duration = (new Date).getTime() - i.date.getTime(), t.pushHistory(i), e
                })
              }
            }, t.prototype.xhr = function () {
              var t = this,
                e = XMLHttpRequest.prototype.open;
              XMLHttpRequest.prototype.open = function (n, r) {
                0 === t.ignoreNextXHR && (this.__state = {
                  type: "xhr",
                  method: n,
                  url: r
                }), e.apply(this, arguments)
              };
              var n = XMLHttpRequest.prototype.send;
              XMLHttpRequest.prototype.send = function () {
                var e = this.onreadystatechange;
                return this.onreadystatechange = function () {
                  if (4 === this.readyState && this.__state && t.recordReq(this), e) return e.apply(this, arguments)
                }, this.__state && (this.__state.date = new Date), n.apply(this, arguments)
              }
            }, t.prototype.recordReq = function (t) {
              var e = t.__state;
              e.statusCode = t.status, e.duration = (new Date).getTime() - e.date.getTime(), this.pushHistory(e)
            }, t.prototype.location = function () {
              this.lastLocation = document.location.pathname;
              var t = this,
                e = window.onpopstate;
              window.onpopstate = function () {
                if (t.recordLocation(document.location.pathname), e) return e.apply(this, arguments)
              };
              var n = history.pushState;
              history.pushState = function (e, r, i) {
                i && t.recordLocation(i.toString()), n.apply(this, arguments)
              }
            }, t.prototype.recordLocation = function (t) {
              var e = t.indexOf("://");
              e >= 0 ? t = (e = (t = t.slice(e + 3)).indexOf("/")) >= 0 ? t.slice(e) : "/" : "/" !== t.charAt(0) && (t = "/" + t), this.pushHistory({
                type: "location",
                from: this.lastLocation,
                to: t
              }), this.lastLocation = t
            }, t
          }();
        e.Historian = s
      },
    "./src/http_req/fetch.ts":
      /*!*******************************!*\
        !*** ./src/http_req/fetch.ts ***!
        \*******************************/
      /*! no static exports found */
      function (t, e, n) {
        "use strict";

        function r(t) {
          if (Date.now() / 1e3 < s) return Promise.reject(o.errors.ipRateLimited);
          var e = {
            method: t.method,
            body: t.body
          };
          return i(t.url, e).then(function (t) {
            if (401 === t.status) throw o.errors.unauthorized;
            if (429 === t.status) {
              var e = t.headers.get("X-RateLimit-Delay");
              if (!e) throw o.errors.ipRateLimited;
              var n = parseInt(e, 10);
              throw n > 0 && (s = Date.now() / 1e3 + n), o.errors.ipRateLimited
            }
            return 204 === t.status ? {
              json: null
            } : t.status >= 200 && t.status < 300 ? t.json().then(function (t) {
              return {
                json: t
              }
            }) : t.status >= 400 && t.status < 500 ? t.json().then(function (t) {
              throw new Error(t.message)
            }) : t.text().then(function (e) {
              throw new Error("airbrake: fetch: unexpected response: code=" + t.status + " body='" + e + "'")
            })
          })
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var i = n( /*! cross-fetch */ "cross-fetch"),
          o = n( /*! ./index */ "./src/http_req/index.ts"),
          s = 0;
        e.request = r
      },
    "./src/http_req/index.ts":
      /*!*******************************!*\
        !*** ./src/http_req/index.ts ***!
        \*******************************/
      /*! no static exports found */
      function (t, e, n) {
        "use strict";

        function r(t) {
          return t.request ? o.makeRequester(t.request) : i.request
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var i = n( /*! ./fetch */ "./src/http_req/fetch.ts"),
          o = n( /*! ./node */ "./src/http_req/node.ts");
        e.makeRequester = r, e.errors = {
          unauthorized: new Error("airbrake: unauthorized: project id or key are wrong"),
          ipRateLimited: new Error("airbrake: IP is rate limited")
        }
      },
    "./src/http_req/node.ts":
      /*!******************************!*\
        !*** ./src/http_req/node.ts ***!
        \******************************/
      /*! no static exports found */
      function (t, e, n) {
        "use strict";

        function r(t) {
          return function (e) {
            return i(e, t)
          }
        }

        function i(t, e) {
          return Date.now() / 1e3 < s ? Promise.reject(o.errors.ipRateLimited) : new Promise(function (n, r) {
            e({
              url: t.url,
              method: t.method,
              body: t.body,
              headers: {
                "content-type": "application/json"
              },
              timeout: t.timeout
            }, function (t, e, i) {
              if (t) r(t);
              else {
                if (!e.statusCode) return t = new Error("airbrake: request: response statusCode is " + e.statusCode), void r(t);
                if (401 !== e.statusCode)
                  if (429 !== e.statusCode)
                    if (204 !== e.statusCode)
                      if (e.statusCode >= 200 && e.statusCode < 300) {
                        var a = void 0;
                        try {
                          a = JSON.parse(i)
                        } catch (f) {
                          return void r(f)
                        }
                        n(a)
                      } else {
                        if (e.statusCode >= 400 && e.statusCode < 500) {
                          a = void 0;
                          try {
                            a = JSON.parse(i)
                          } catch (f) {
                            return void r(f)
                          }
                          return t = new Error(a.message), void r(t)
                        }
                        i = i.trim(), t = new Error("airbrake: node: unexpected response: code=" + e.statusCode + " body='" + i + "'"), r(t)
                      }
                else n({
                  json: null
                });
                else {
                  r(o.errors.ipRateLimited);
                  var u = e.headers["x-ratelimit-delay"];
                  if (!u) return;
                  var l = void 0;
                  if ("string" == typeof u) l = u;
                  else {
                    if (!(u instanceof Array)) return;
                    l = u[0]
                  }
                  var c = parseInt(l, 10);
                  c > 0 && (s = Date.now() / 1e3 + c)
                } else r(o.errors.unauthorized)
              }
            })
          })
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var o = n( /*! ./index */ "./src/http_req/index.ts");
        e.makeRequester = r;
        var s = 0
      },
    "./src/instrumentation/dom.ts":
      /*!************************************!*\
        !*** ./src/instrumentation/dom.ts ***!
        \************************************/
      /*! no static exports found */
      function (t, e) {
        "use strict";

        function n(t) {
          if (!t) return "";
          var e = [];
          if (t.tagName && e.push(t.tagName.toLowerCase()), t.id && (e.push("#"), e.push(t.id)), t.classList && Array.from) e.push("."), e.push(Array.from(t.classList).join("."));
          else if (t.className) {
            var n = r(t.className);
            "" !== n && (e.push("."), e.push(n))
          }
          if (t.getAttribute)
            for (var i = 0, o = s; i < o.length; i++) {
              var a = o[i],
                u = t.getAttribute(a);
              u && e.push("[" + a + '="' + u + '"]')
            }
          return e.join("")
        }

        function r(t) {
          return t.split ? t.split(" ").join(".") : t.baseVal && t.baseVal.split ? t.baseVal.split(" ").join(".") : (console.error("unsupported HTMLElement.className type", typeof t), "")
        }

        function i(t) {
          for (var e = 10, r = [], i = t; i;) {
            var o = n(i);
            if ("" !== o && (r.push(o), r.length > e)) break;
            i = i.parentNode
          }
          return 0 === r.length ? String(t) : r.reverse().join(" > ")
        }

        function o(t) {
          return function (e) {
            var n;
            try {
              n = e.target
            } catch (o) {
              return
            }
            if (n) {
              var r = {
                type: e.type
              };
              try {
                r.target = i(n)
              } catch (s) {
                r.target = "<" + String(s) + ">"
              }
              t.pushHistory(r)
            }
          }
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var s = ["type", "name", "src"];
        e.makeEventHandler = o
      },
    "./src/jsonify_notice.ts":
      /*!*******************************!*\
        !*** ./src/jsonify_notice.ts ***!
        \*******************************/
      /*! no static exports found */
      function (t, e) {
        "use strict";

        function n(t, e) {
          var n = void 0 === e ? {} : e,
            r = n.maxLength,
            o = void 0 === r ? 64e3 : r,
            s = n.keysBlacklist,
            a = void 0 === s ? [] : s;
          if (t.errors)
            for (var u = 0; u < t.errors.length; u++) {
              var l = new c({
                keysBlacklist: a
              });
              t.errors[u] = l.truncate(t.errors[u])
            }
          for (var f = "", h = ["context", "params", "environment", "session"], d = 0; d < 8; d++) {
            for (var p = {
                level: d,
                keysBlacklist: a
              }, m = 0, g = h; m < g.length; m++) {
              (x = t[w = g[m]]) && (t[w] = i(x, p))
            }
            if ((f = JSON.stringify(t)).length < o) return f
          }
          var v = {
            json: f.slice(0, Math.floor(o / 2)) + "..."
          };
          h.push("errors");
          for (var y = 0, b = h; y < b.length; y++) {
            var w, x;
            (x = t[w = b[y]]) && (f = JSON.stringify(x), v[w] = f.length)
          }
          var E = new Error("airbrake: notice exceeds max length and can't be truncated");
          throw E.params = v, E
        }

        function r(t, e) {
          return t >> e || 1
        }

        function i(t, e) {
          return void 0 === e && (e = {}), new c(e).truncate(t)
        }

        function o(t, e) {
          try {
            return t[e]
          } catch (n) {
            return
          }
        }

        function s(t) {
          return Object.prototype.toString.apply(t).slice("[object ".length, -1)
        }

        function a(t, e) {
          for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            if (i === t) return !0;
            if (i instanceof RegExp && t.match(i)) return !0
          }
          return !1
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var u = "[Filtered]",
          l = 128;
        e["default"] = n;
        var c = function () {
          function t(t) {
            this.maxStringLength = 1024, this.maxObjectLength = l, this.maxArrayLength = l, this.maxDepth = 8, this.keys = [], this.keysBlacklist = [], this.seen = [];
            var e = t.level || 0;
            this.keysBlacklist = t.keysBlacklist || [], this.maxStringLength = r(this.maxStringLength, e), this.maxObjectLength = r(this.maxObjectLength, e), this.maxArrayLength = r(this.maxArrayLength, e), this.maxDepth = r(this.maxDepth, e)
          }
          return t.prototype.truncate = function (t, e, n) {
            if (void 0 === e && (e = ""), void 0 === n && (n = 0), null === t || t === undefined) return t;
            switch (typeof t) {
              case "boolean":
              case "number":
              case "function":
                return t;
              case "string":
                return this.truncateString(t);
              case "object":
                break;
              default:
                return this.truncateString(String(t))
            }
            if (t instanceof String) return this.truncateString(t.toString());
            if (t instanceof Boolean || t instanceof Number || t instanceof Date || t instanceof RegExp) return t;
            if (t instanceof Error) return this.truncateString(t.toString());
            if (this.seen.indexOf(t) >= 0) return "[Circular " + this.getPath(t) + "]";
            var r = s(t);
            if (++n > this.maxDepth) return "[Truncated " + r + "]";
            switch (this.keys.push(e), this.seen.push(t), r) {
              case "Array":
                return this.truncateArray(t, n);
              case "Object":
                return this.truncateObject(t, n);
              default:
                var i = this.maxDepth;
                this.maxDepth = 0;
                var o = this.truncateObject(t, n);
                return o.__type = r, this.maxDepth = i, o
            }
          }, t.prototype.getPath = function (t) {
            for (var e = this.seen.indexOf(t), n = [this.keys[e]], r = e; r >= 0; r--) {
              var i = this.seen[r];
              i && o(i, n[0]) === t && (t = i, n.unshift(this.keys[r]))
            }
            return "~" + n.join(".")
          }, t.prototype.truncateString = function (t) {
            return t.length > this.maxStringLength ? t.slice(0, this.maxStringLength) + "..." : t
          }, t.prototype.truncateArray = function (t, e) {
            void 0 === e && (e = 0);
            for (var n = 0, r = [], i = 0; i < t.length; i++) {
              var o = t[i];
              if (r.push(this.truncate(o, i.toString(), e)), ++n >= this.maxArrayLength) break
            }
            return r
          }, t.prototype.truncateObject = function (t, e) {
            void 0 === e && (e = 0);
            var n = 0,
              r = {};
            for (var i in t)
              if (Object.prototype.hasOwnProperty.call(t, i))
                if (a(i, this.keysBlacklist)) r[i] = u;
                else {
                  var s = o(t, i);
                  if (s !== undefined && "function" != typeof s && (r[i] = this.truncate(s, i, e), ++n >= this.maxObjectLength)) break
                } return r
          }, t
        }();
        e.truncate = i
      },
    "./src/processor/stacktracejs.ts":
      /*!***************************************!*\
        !*** ./src/processor/stacktracejs.ts ***!
        \***************************************/
      /*! no static exports found */
      function (t, e, n) {
        "use strict";

        function r(t) {
          try {
            return o.parse(t)
          } catch (e) {
            s && t.stack && console.warn("ErrorStackParser:", e.toString(), t.stack)
          }
          return t.fileName ? [t] : []
        }

        function i(t) {
          var e = [];
          if (t.noStack) e.push({
            "function": t.functionName || "",
            file: t.fileName || "",
            line: t.lineNumber || 0,
            column: t.columnNumber || 0
          });
          else {
            var n = r(t);
            if (0 === n.length) try {
              throw new Error("fake")
            } catch (a) {
              (n = r(a)).shift(), n.shift()
            }
            for (var i = 0, o = n; i < o.length; i++) {
              var s = o[i];
              e.push({
                "function": s.functionName || "",
                file: s.fileName || "",
                line: s.lineNumber || 0,
                column: s.columnNumber || 0
              })
            }
          }
          return {
            type: t.name ? t.name : "",
            message: t.message ? String(t.message) : String(t),
            backtrace: e
          }
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var o = n( /*! error-stack-parser */ "./node_modules/error-stack-parser/error-stack-parser.js"),
          s = "object" == typeof console && console.warn;
        e["default"] = i
      },
    "./src/routes.ts":
      /*!***********************!*\
        !*** ./src/routes.ts ***!
        \***********************/
      /*! no static exports found */
      function (t, e, n) {
        "use strict";

        function r(t) {
          if (t instanceof Date) return t.getTime();
          if ("number" == typeof t) return t;
          throw new Error("unsupported type: " + typeof t)
        }

        function i(t, e) {
          if (t instanceof Date && e instanceof Date) return e.getTime() - t.getTime();
          if ("number" == typeof t && "number" == typeof e) return e - t;
          throw new Error("unsupported type: " + typeof t)
        }
        var o = this && this.__assign || function () {
          return (o = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
          }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var s = n( /*! ./http_req */ "./src/http_req/index.ts"),
          a = 15e3,
          u = function () {
            function t(t) {
              this.m = {}, this.opts = t, this.url = this.opts.host + "/api/v5/projects/" + this.opts.projectId + "/routes-stats?key=" + this.opts.projectKey, this.requester = s.makeRequester(this.opts)
            }
            return t.prototype.notifyRequest = function (t) {
              var e = this,
                n = i(t.start, t.end);
              0 === n && (n = .1);
              var o = 6e4;
              t.start = new Date(Math.floor(r(t.start) / o) * o);
              var s, u = {
                  method: t.method,
                  route: t.route,
                  statusCode: t.statusCode,
                  time: t.start
                },
                l = JSON.stringify(u);
              l in this.m ? s = this.m[l] : (s = {
                count: 0,
                sum: 0,
                sumsq: 0
              }, this.opts.TDigest && (s.tdigest = new this.opts.TDigest), this.m[l] = s), s.count++, s.sum += n, s.sumsq += n * n, s.tdigest && s.tdigest.push(n), this.timer || (this.timer = setTimeout(function () {
                e.flush()
              }, a))
            }, t.prototype.flush = function () {
              var t = [];
              for (var e in this.m)
                if (this.m.hasOwnProperty(e)) {
                  var n = JSON.parse(e),
                    r = o({}, n, this.m[e]);
                  r.tdigest && (r.tdigestCentroids = this.tdigestCentroids(r.tdigest), delete r.tdigest), t.push(r)
                } this.m = {}, this.timer = null;
              var i = JSON.stringify({
                  environment: this.opts.environment,
                  routes: t
                }),
                s = {
                  method: "POST",
                  url: this.url,
                  body: i
                };
              this.requester(s).then(function () {})["catch"](function (t) {
                console.error && console.error("can not report routes stats", t)
              })
            }, t.prototype.tdigestCentroids = function (t) {
              var e = [],
                n = [];
              return t.centroids.each(function (t) {
                e.push(t.mean), n.push(t.n)
              }), {
                mean: e,
                count: n
              }
            }, t
          }();
        e.Routes = u
      },
    0:
      /*!*****************************!*\
        !*** multi ./src/client.ts ***!
        \*****************************/
      /*! no static exports found */
      function (t, e, n) {
        t.exports = n( /*! ./src/client.ts */ "./src/client.ts")
      },
    "cross-fetch":
      /*!********************************************************************************************************!*\
        !*** external {"commonjs":"cross-fetch","commonjs2":"cross-fetch","amd":"cross-fetch","root":"fetch"} ***!
        \********************************************************************************************************/
      /*! no static exports found */
      function (t) {
        t.exports = e
      },
    os:
      /*!**************************************************************!*\
        !*** external {"commonjs":"os","commonjs2":"os","amd":"os"} ***!
        \**************************************************************/
      /*! no static exports found */
      function (e) {
        if (void 0 === t) {
          var n = new Error("Cannot find module 'undefined'");
          throw n.code = "MODULE_NOT_FOUND", n
        }
        e.exports = t
      }
  })
}), $(document).on("turbolinks:load", function () {
  window.location.href.includes("form") && $(".modal").addClass("is-active"), $("#close-modal").click(function () {
    $(".modal").removeClass("is-active")
  })
}), window.setupHomeImageSwap = function () {
  function t() {
    $("#main-home").removeClass(`mainImg${e}`), e = e + 1 < 3 ? e + 1 : 0, $("#main-home").addClass(`mainImg${e}`)
  }
  var e = 0;
  $("#main-home").addClass("mainImg0"), setInterval(t, 1e4)
}, window.setupLanguageFilter = function () {
  function t() {
    r.val(""), e()
  }

  function e() {
    var t = r.val(),
      e = "/languages/projects/" + t;
    $.ajax({
      type: "GET",
      url: e,
      success: function (t) {
        i.html(t)
      }
    }), "" === t ? (n.removeClass("active"), o.text(s)) : (o.text("Displaying " + r.find("option:selected").text() + " projects only"), n.addClass("active"))
  }
  var n = $("#reset-filter"),
    r = $("#language_id"),
    i = $("#project-list"),
    o = $("#projects-message"),
    s = o.text();
  r.change(e), n.click(t)
}, $(document).on("turbolinks:load", function () {
  $("#tabs li a:first").addClass("selected"), $("#tabs li a:not(:first)").addClass("inactive"), $(".tab-block").hide(), $(".tab-block:first").show(), $("#tabs li a").click(function () {
    var t = $(this).attr("id");
    console.log(t), $("#tabs li a").removeClass("selected"), $(this).hasClass("inactive") && ($("#tabs li a").addClass("inactive"), $(this).removeClass("inactive"), $(this).addClass("selected"), $(".tab-block").hide(), $("#" + t + "C").fadeIn("slow"))
  })
});