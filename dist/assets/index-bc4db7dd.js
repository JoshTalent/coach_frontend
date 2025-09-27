(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Zg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Gr = {},
  qg = {
    get exports() {
      return Gr;
    },
    set exports(e) {
      Gr = e;
    },
  },
  es = {},
  x = {},
  Jg = {
    get exports() {
      return x;
    },
    set exports(e) {
      x = e;
    },
  },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xi = Symbol.for("react.element"),
  e0 = Symbol.for("react.portal"),
  t0 = Symbol.for("react.fragment"),
  n0 = Symbol.for("react.strict_mode"),
  r0 = Symbol.for("react.profiler"),
  i0 = Symbol.for("react.provider"),
  o0 = Symbol.for("react.context"),
  s0 = Symbol.for("react.forward_ref"),
  a0 = Symbol.for("react.suspense"),
  l0 = Symbol.for("react.memo"),
  u0 = Symbol.for("react.lazy"),
  dc = Symbol.iterator;
function c0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (dc && e[dc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Bf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  $f = Object.assign,
  Uf = {};
function ar(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uf),
    (this.updater = n || Bf);
}
ar.prototype.isReactComponent = {};
ar.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ar.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wf() {}
Wf.prototype = ar.prototype;
function Vl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uf),
    (this.updater = n || Bf);
}
var bl = (Vl.prototype = new Wf());
bl.constructor = Vl;
$f(bl, ar.prototype);
bl.isPureReactComponent = !0;
var fc = Array.isArray,
  Hf = Object.prototype.hasOwnProperty,
  Il = { current: null },
  Kf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Hf.call(t, r) && !Kf.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: xi,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Il.current,
  };
}
function d0(e, t) {
  return {
    $$typeof: xi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function _l(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xi;
}
function f0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var hc = /\/+/g;
function Ps(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? f0("" + e.key)
    : t.toString(36);
}
function oo(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xi:
          case e0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Ps(s, 0) : r),
      fc(i)
        ? ((n = ""),
          e != null && (n = e.replace(hc, "$&/") + "/"),
          oo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (_l(i) &&
            (i = d0(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(hc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), fc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Ps(o, a);
      s += oo(o, t, n, l, i);
    }
  else if (((l = c0(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Ps(o, a++)), (s += oo(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Fi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    oo(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function h0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ke = { current: null },
  so = { transition: null },
  p0 = {
    ReactCurrentDispatcher: ke,
    ReactCurrentBatchConfig: so,
    ReactCurrentOwner: Il,
  };
F.Children = {
  map: Fi,
  forEach: function (e, t, n) {
    Fi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!_l(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = ar;
F.Fragment = t0;
F.Profiler = r0;
F.PureComponent = Vl;
F.StrictMode = n0;
F.Suspense = a0;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p0;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = $f({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Il.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Hf.call(t, l) &&
        !Kf.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: xi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: o0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: i0, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Gf;
F.createFactory = function (e) {
  var t = Gf.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: s0, render: e };
};
F.isValidElement = _l;
F.lazy = function (e) {
  return { $$typeof: u0, _payload: { _status: -1, _result: e }, _init: h0 };
};
F.memo = function (e, t) {
  return { $$typeof: l0, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = so.transition;
  so.transition = {};
  try {
    e();
  } finally {
    so.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return ke.current.useCallback(e, t);
};
F.useContext = function (e) {
  return ke.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return ke.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return ke.current.useEffect(e, t);
};
F.useId = function () {
  return ke.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return ke.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return ke.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return ke.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return ke.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return ke.current.useRef(e);
};
F.useState = function (e) {
  return ke.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return ke.current.useTransition();
};
F.version = "18.2.0";
(function (e) {
  e.exports = F;
})(Jg);
const m0 = Zg(x);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var g0 = x,
  y0 = Symbol.for("react.element"),
  v0 = Symbol.for("react.fragment"),
  x0 = Object.prototype.hasOwnProperty,
  w0 = g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  S0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) x0.call(t, r) && !S0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: y0,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: w0.current,
  };
}
es.Fragment = v0;
es.jsx = Yf;
es.jsxs = Yf;
(function (e) {
  e.exports = es;
})(qg);
const Qt = Gr.Fragment,
  g = Gr.jsx,
  M = Gr.jsxs;
var ma = {},
  ga = {},
  k0 = {
    get exports() {
      return ga;
    },
    set exports(e) {
      ga = e;
    },
  },
  Ie = {},
  ya = {},
  C0 = {
    get exports() {
      return ya;
    },
    set exports(e) {
      ya = e;
    },
  },
  Qf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, b) {
    var _ = R.length;
    R.push(b);
    e: for (; 0 < _; ) {
      var K = (_ - 1) >>> 1,
        ae = R[K];
      if (0 < i(ae, b)) (R[K] = b), (R[_] = ae), (_ = K);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var b = R[0],
      _ = R.pop();
    if (_ !== b) {
      R[0] = _;
      e: for (var K = 0, ae = R.length, Ii = ae >>> 1; K < Ii; ) {
        var nn = 2 * (K + 1) - 1,
          Ts = R[nn],
          rn = nn + 1,
          _i = R[rn];
        if (0 > i(Ts, _))
          rn < ae && 0 > i(_i, Ts)
            ? ((R[K] = _i), (R[rn] = _), (K = rn))
            : ((R[K] = Ts), (R[nn] = _), (K = nn));
        else if (rn < ae && 0 > i(_i, _)) (R[K] = _i), (R[rn] = _), (K = rn);
        else break e;
      }
    }
    return b;
  }
  function i(R, b) {
    var _ = R.sortIndex - b.sortIndex;
    return _ !== 0 ? _ : R.id - b.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    y = !1,
    v = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(R) {
    for (var b = n(u); b !== null; ) {
      if (b.callback === null) r(u);
      else if (b.startTime <= R)
        r(u), (b.sortIndex = b.expirationTime), t(l, b);
      else break;
      b = n(u);
    }
  }
  function S(R) {
    if (((w = !1), m(R), !v))
      if (n(l) !== null) (v = !0), bi(C);
      else {
        var b = n(u);
        b !== null && ee(S, b.startTime - R);
      }
  }
  function C(R, b) {
    (v = !1), w && ((w = !1), p(T), (T = -1)), (y = !0);
    var _ = f;
    try {
      for (
        m(b), d = n(l);
        d !== null && (!(d.expirationTime > b) || (R && !H()));

      ) {
        var K = d.callback;
        if (typeof K == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var ae = K(d.expirationTime <= b);
          (b = e.unstable_now()),
            typeof ae == "function" ? (d.callback = ae) : d === n(l) && r(l),
            m(b);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Ii = !0;
      else {
        var nn = n(u);
        nn !== null && ee(S, nn.startTime - b), (Ii = !1);
      }
      return Ii;
    } finally {
      (d = null), (f = _), (y = !1);
    }
  }
  var P = !1,
    E = null,
    T = -1,
    V = 5,
    L = -1;
  function H() {
    return !(e.unstable_now() - L < V);
  }
  function Nt() {
    if (E !== null) {
      var R = e.unstable_now();
      L = R;
      var b = !0;
      try {
        b = E(!0, R);
      } finally {
        b ? tn() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var tn;
  if (typeof h == "function")
    tn = function () {
      h(Nt);
    };
  else if (typeof MessageChannel < "u") {
    var gr = new MessageChannel(),
      Vi = gr.port2;
    (gr.port1.onmessage = Nt),
      (tn = function () {
        Vi.postMessage(null);
      });
  } else
    tn = function () {
      k(Nt, 0);
    };
  function bi(R) {
    (E = R), P || ((P = !0), tn());
  }
  function ee(R, b) {
    T = k(function () {
      R(e.unstable_now());
    }, b);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), bi(C));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = f;
      }
      var _ = f;
      f = b;
      try {
        return R();
      } finally {
        f = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, b) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var _ = f;
      f = R;
      try {
        return b();
      } finally {
        f = _;
      }
    }),
    (e.unstable_scheduleCallback = function (R, b, _) {
      var K = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? K + _ : K))
          : (_ = K),
        R)
      ) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return (
        (ae = _ + ae),
        (R = {
          id: c++,
          callback: b,
          priorityLevel: R,
          startTime: _,
          expirationTime: ae,
          sortIndex: -1,
        }),
        _ > K
          ? ((R.sortIndex = _),
            t(u, R),
            n(l) === null &&
              R === n(u) &&
              (w ? (p(T), (T = -1)) : (w = !0), ee(S, _ - K)))
          : ((R.sortIndex = ae), t(l, R), v || y || ((v = !0), bi(C))),
        R
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (R) {
      var b = f;
      return function () {
        var _ = f;
        f = b;
        try {
          return R.apply(this, arguments);
        } finally {
          f = _;
        }
      };
    });
})(Qf);
(function (e) {
  e.exports = Qf;
})(C0);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xf = x,
  be = ya;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zf = new Set(),
  Yr = {};
function Pn(e, t) {
  qn(e, t), qn(e + "Capture", t);
}
function qn(e, t) {
  for (Yr[e] = t, e = 0; e < t.length; e++) Zf.add(t[e]);
}
var vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  va = Object.prototype.hasOwnProperty,
  T0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pc = {},
  mc = {};
function P0(e) {
  return va.call(mc, e)
    ? !0
    : va.call(pc, e)
    ? !1
    : T0.test(e)
    ? (mc[e] = !0)
    : ((pc[e] = !0), !1);
}
function E0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function N0(e, t, n, r) {
  if (t === null || typeof t > "u" || E0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ce(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fl = /[\-:]([a-z])/g;
function Ol(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fl, Ol);
    he[t] = new Ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fl, Ol);
    he[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Fl, Ol);
  he[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zl(e, t, n, r) {
  var i = he.hasOwnProperty(t) ? he[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (N0(t, n, i, r) && (n = null),
    r || i === null
      ? P0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pt = Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Oi = Symbol.for("react.element"),
  Mn = Symbol.for("react.portal"),
  Rn = Symbol.for("react.fragment"),
  jl = Symbol.for("react.strict_mode"),
  xa = Symbol.for("react.profiler"),
  qf = Symbol.for("react.provider"),
  Jf = Symbol.for("react.context"),
  Bl = Symbol.for("react.forward_ref"),
  wa = Symbol.for("react.suspense"),
  Sa = Symbol.for("react.suspense_list"),
  $l = Symbol.for("react.memo"),
  Dt = Symbol.for("react.lazy"),
  eh = Symbol.for("react.offscreen"),
  gc = Symbol.iterator;
function yr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gc && e[gc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z = Object.assign,
  Es;
function Nr(e) {
  if (Es === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Es = (t && t[1]) || "";
    }
  return (
    `
` +
    Es +
    e
  );
}
var Ns = !1;
function Ms(e, t) {
  if (!e || Ns) return "";
  Ns = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Ns = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Nr(e) : "";
}
function M0(e) {
  switch (e.tag) {
    case 5:
      return Nr(e.type);
    case 16:
      return Nr("Lazy");
    case 13:
      return Nr("Suspense");
    case 19:
      return Nr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ms(e.type, !1)), e;
    case 11:
      return (e = Ms(e.type.render, !1)), e;
    case 1:
      return (e = Ms(e.type, !0)), e;
    default:
      return "";
  }
}
function ka(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Rn:
      return "Fragment";
    case Mn:
      return "Portal";
    case xa:
      return "Profiler";
    case jl:
      return "StrictMode";
    case wa:
      return "Suspense";
    case Sa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jf:
        return (e.displayName || "Context") + ".Consumer";
      case qf:
        return (e._context.displayName || "Context") + ".Provider";
      case Bl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case $l:
        return (
          (t = e.displayName || null), t !== null ? t : ka(e.type) || "Memo"
        );
      case Dt:
        (t = e._payload), (e = e._init);
        try {
          return ka(e(t));
        } catch {}
    }
  return null;
}
function R0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ka(t);
    case 8:
      return t === jl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function th(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function D0(e) {
  var t = th(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function zi(e) {
  e._valueTracker || (e._valueTracker = D0(e));
}
function nh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = th(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function To(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ca(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function yc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function rh(e, t) {
  (t = t.checked), t != null && zl(e, "checked", t, !1);
}
function Ta(e, t) {
  rh(e, t);
  var n = Ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Pa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Pa(e, t.type, Ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function vc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Pa(e, t, n) {
  (t !== "number" || To(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mr = Array.isArray;
function Hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ht(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ea(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return Z({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Mr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function ih(e, t) {
  var n = Ht(t.value),
    r = Ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function wc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function oh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Na(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? oh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ji,
  sh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ji = ji || document.createElement("div"),
          ji.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ji.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Lr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  A0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lr).forEach(function (e) {
  A0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lr[t] = Lr[e]);
  });
});
function ah(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Lr.hasOwnProperty(e) && Lr[e])
    ? ("" + t).trim()
    : t + "px";
}
function lh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ah(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var L0 = Z(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ma(e, t) {
  if (t) {
    if (L0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Ra(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Da = null;
function Ul(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Aa = null,
  Kn = null,
  Gn = null;
function Sc(e) {
  if ((e = ki(e))) {
    if (typeof Aa != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = os(t)), Aa(e.stateNode, e.type, t));
  }
}
function uh(e) {
  Kn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Kn = e);
}
function ch() {
  if (Kn) {
    var e = Kn,
      t = Gn;
    if (((Gn = Kn = null), Sc(e), t)) for (e = 0; e < t.length; e++) Sc(t[e]);
  }
}
function dh(e, t) {
  return e(t);
}
function fh() {}
var Rs = !1;
function hh(e, t, n) {
  if (Rs) return e(t, n);
  Rs = !0;
  try {
    return dh(e, t, n);
  } finally {
    (Rs = !1), (Kn !== null || Gn !== null) && (fh(), ch());
  }
}
function Xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = os(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var La = !1;
if (vt)
  try {
    var vr = {};
    Object.defineProperty(vr, "passive", {
      get: function () {
        La = !0;
      },
    }),
      window.addEventListener("test", vr, vr),
      window.removeEventListener("test", vr, vr);
  } catch {
    La = !1;
  }
function V0(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Vr = !1,
  Po = null,
  Eo = !1,
  Va = null,
  b0 = {
    onError: function (e) {
      (Vr = !0), (Po = e);
    },
  };
function I0(e, t, n, r, i, o, s, a, l) {
  (Vr = !1), (Po = null), V0.apply(b0, arguments);
}
function _0(e, t, n, r, i, o, s, a, l) {
  if ((I0.apply(this, arguments), Vr)) {
    if (Vr) {
      var u = Po;
      (Vr = !1), (Po = null);
    } else throw Error(N(198));
    Eo || ((Eo = !0), (Va = u));
  }
}
function En(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ph(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function kc(e) {
  if (En(e) !== e) throw Error(N(188));
}
function F0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = En(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return kc(i), e;
        if (o === r) return kc(i), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function mh(e) {
  return (e = F0(e)), e !== null ? gh(e) : null;
}
function gh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = gh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yh = be.unstable_scheduleCallback,
  Cc = be.unstable_cancelCallback,
  O0 = be.unstable_shouldYield,
  z0 = be.unstable_requestPaint,
  ne = be.unstable_now,
  j0 = be.unstable_getCurrentPriorityLevel,
  Wl = be.unstable_ImmediatePriority,
  vh = be.unstable_UserBlockingPriority,
  No = be.unstable_NormalPriority,
  B0 = be.unstable_LowPriority,
  xh = be.unstable_IdlePriority,
  ts = null,
  it = null;
function $0(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(ts, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var qe = Math.clz32 ? Math.clz32 : H0,
  U0 = Math.log,
  W0 = Math.LN2;
function H0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((U0(e) / W0) | 0)) | 0;
}
var Bi = 64,
  $i = 4194304;
function Rr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Mo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Rr(a)) : ((o &= s), o !== 0 && (r = Rr(o)));
  } else (s = n & ~i), s !== 0 ? (r = Rr(s)) : o !== 0 && (r = Rr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function K0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function G0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - qe(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = K0(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function ba(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function wh() {
  var e = Bi;
  return (Bi <<= 1), !(Bi & 4194240) && (Bi = 64), e;
}
function Ds(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function wi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qe(t)),
    (e[t] = n);
}
function Y0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - qe(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Hl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var z = 0;
function Sh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var kh,
  Kl,
  Ch,
  Th,
  Ph,
  Ia = !1,
  Ui = [],
  Ft = null,
  Ot = null,
  zt = null,
  Zr = new Map(),
  qr = new Map(),
  Lt = [],
  Q0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Tc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ft = null;
      break;
    case "dragenter":
    case "dragleave":
      Ot = null;
      break;
    case "mouseover":
    case "mouseout":
      zt = null;
      break;
    case "pointerover":
    case "pointerout":
      Zr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qr.delete(t.pointerId);
  }
}
function xr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ki(t)), t !== null && Kl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function X0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ft = xr(Ft, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ot = xr(Ot, e, t, n, r, i)), !0;
    case "mouseover":
      return (zt = xr(zt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Zr.set(o, xr(Zr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), qr.set(o, xr(qr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Eh(e) {
  var t = dn(e.target);
  if (t !== null) {
    var n = En(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ph(n)), t !== null)) {
          (e.blockedOn = t),
            Ph(e.priority, function () {
              Ch(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ao(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _a(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Da = r), n.target.dispatchEvent(r), (Da = null);
    } else return (t = ki(n)), t !== null && Kl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Pc(e, t, n) {
  ao(e) && n.delete(t);
}
function Z0() {
  (Ia = !1),
    Ft !== null && ao(Ft) && (Ft = null),
    Ot !== null && ao(Ot) && (Ot = null),
    zt !== null && ao(zt) && (zt = null),
    Zr.forEach(Pc),
    qr.forEach(Pc);
}
function wr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ia ||
      ((Ia = !0),
      be.unstable_scheduleCallback(be.unstable_NormalPriority, Z0)));
}
function Jr(e) {
  function t(i) {
    return wr(i, e);
  }
  if (0 < Ui.length) {
    wr(Ui[0], e);
    for (var n = 1; n < Ui.length; n++) {
      var r = Ui[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ft !== null && wr(Ft, e),
      Ot !== null && wr(Ot, e),
      zt !== null && wr(zt, e),
      Zr.forEach(t),
      qr.forEach(t),
      n = 0;
    n < Lt.length;
    n++
  )
    (r = Lt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Lt.length && ((n = Lt[0]), n.blockedOn === null); )
    Eh(n), n.blockedOn === null && Lt.shift();
}
var Yn = Pt.ReactCurrentBatchConfig,
  Ro = !0;
function q0(e, t, n, r) {
  var i = z,
    o = Yn.transition;
  Yn.transition = null;
  try {
    (z = 1), Gl(e, t, n, r);
  } finally {
    (z = i), (Yn.transition = o);
  }
}
function J0(e, t, n, r) {
  var i = z,
    o = Yn.transition;
  Yn.transition = null;
  try {
    (z = 4), Gl(e, t, n, r);
  } finally {
    (z = i), (Yn.transition = o);
  }
}
function Gl(e, t, n, r) {
  if (Ro) {
    var i = _a(e, t, n, r);
    if (i === null) js(e, t, r, Do, n), Tc(e, r);
    else if (X0(i, e, t, n, r)) r.stopPropagation();
    else if ((Tc(e, r), t & 4 && -1 < Q0.indexOf(e))) {
      for (; i !== null; ) {
        var o = ki(i);
        if (
          (o !== null && kh(o),
          (o = _a(e, t, n, r)),
          o === null && js(e, t, r, Do, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else js(e, t, r, null, n);
  }
}
var Do = null;
function _a(e, t, n, r) {
  if (((Do = null), (e = Ul(r)), (e = dn(e)), e !== null))
    if (((t = En(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ph(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Do = e), null;
}
function Nh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (j0()) {
        case Wl:
          return 1;
        case vh:
          return 4;
        case No:
        case B0:
          return 16;
        case xh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var It = null,
  Yl = null,
  lo = null;
function Mh() {
  if (lo) return lo;
  var e,
    t = Yl,
    n = t.length,
    r,
    i = "value" in It ? It.value : It.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (lo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function uo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Wi() {
  return !0;
}
function Ec() {
  return !1;
}
function _e(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Wi
        : Ec),
      (this.isPropagationStopped = Ec),
      this
    );
  }
  return (
    Z(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Wi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Wi));
      },
      persist: function () {},
      isPersistent: Wi,
    }),
    t
  );
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ql = _e(lr),
  Si = Z({}, lr, { view: 0, detail: 0 }),
  ey = _e(Si),
  As,
  Ls,
  Sr,
  ns = Z({}, Si, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Xl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Sr &&
            (Sr && e.type === "mousemove"
              ? ((As = e.screenX - Sr.screenX), (Ls = e.screenY - Sr.screenY))
              : (Ls = As = 0),
            (Sr = e)),
          As);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ls;
    },
  }),
  Nc = _e(ns),
  ty = Z({}, ns, { dataTransfer: 0 }),
  ny = _e(ty),
  ry = Z({}, Si, { relatedTarget: 0 }),
  Vs = _e(ry),
  iy = Z({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  oy = _e(iy),
  sy = Z({}, lr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ay = _e(sy),
  ly = Z({}, lr, { data: 0 }),
  Mc = _e(ly),
  uy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  cy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dy[e]) ? !!t[e] : !1;
}
function Xl() {
  return fy;
}
var hy = Z({}, Si, {
    key: function (e) {
      if (e.key) {
        var t = uy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = uo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? cy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xl,
    charCode: function (e) {
      return e.type === "keypress" ? uo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? uo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  py = _e(hy),
  my = Z({}, ns, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Rc = _e(my),
  gy = Z({}, Si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xl,
  }),
  yy = _e(gy),
  vy = Z({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xy = _e(vy),
  wy = Z({}, ns, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Sy = _e(wy),
  ky = [9, 13, 27, 32],
  Zl = vt && "CompositionEvent" in window,
  br = null;
vt && "documentMode" in document && (br = document.documentMode);
var Cy = vt && "TextEvent" in window && !br,
  Rh = vt && (!Zl || (br && 8 < br && 11 >= br)),
  Dc = String.fromCharCode(32),
  Ac = !1;
function Dh(e, t) {
  switch (e) {
    case "keyup":
      return ky.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ah(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function Ty(e, t) {
  switch (e) {
    case "compositionend":
      return Ah(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ac = !0), Dc);
    case "textInput":
      return (e = t.data), e === Dc && Ac ? null : e;
    default:
      return null;
  }
}
function Py(e, t) {
  if (Dn)
    return e === "compositionend" || (!Zl && Dh(e, t))
      ? ((e = Mh()), (lo = Yl = It = null), (Dn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ey = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Lc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ey[e.type] : t === "textarea";
}
function Lh(e, t, n, r) {
  uh(r),
    (t = Ao(t, "onChange")),
    0 < t.length &&
      ((n = new Ql("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ir = null,
  ei = null;
function Ny(e) {
  Uh(e, 0);
}
function rs(e) {
  var t = Vn(e);
  if (nh(t)) return e;
}
function My(e, t) {
  if (e === "change") return t;
}
var Vh = !1;
if (vt) {
  var bs;
  if (vt) {
    var Is = "oninput" in document;
    if (!Is) {
      var Vc = document.createElement("div");
      Vc.setAttribute("oninput", "return;"),
        (Is = typeof Vc.oninput == "function");
    }
    bs = Is;
  } else bs = !1;
  Vh = bs && (!document.documentMode || 9 < document.documentMode);
}
function bc() {
  Ir && (Ir.detachEvent("onpropertychange", bh), (ei = Ir = null));
}
function bh(e) {
  if (e.propertyName === "value" && rs(ei)) {
    var t = [];
    Lh(t, ei, e, Ul(e)), hh(Ny, t);
  }
}
function Ry(e, t, n) {
  e === "focusin"
    ? (bc(), (Ir = t), (ei = n), Ir.attachEvent("onpropertychange", bh))
    : e === "focusout" && bc();
}
function Dy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return rs(ei);
}
function Ay(e, t) {
  if (e === "click") return rs(t);
}
function Ly(e, t) {
  if (e === "input" || e === "change") return rs(t);
}
function Vy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var et = typeof Object.is == "function" ? Object.is : Vy;
function ti(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!va.call(t, i) || !et(e[i], t[i])) return !1;
  }
  return !0;
}
function Ic(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _c(e, t) {
  var n = Ic(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ic(n);
  }
}
function Ih(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ih(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function _h() {
  for (var e = window, t = To(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = To(e.document);
  }
  return t;
}
function ql(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function by(e) {
  var t = _h(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ih(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ql(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = _c(n, o));
        var s = _c(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Iy = vt && "documentMode" in document && 11 >= document.documentMode,
  An = null,
  Fa = null,
  _r = null,
  Oa = !1;
function Fc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Oa ||
    An == null ||
    An !== To(r) ||
    ((r = An),
    "selectionStart" in r && ql(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_r && ti(_r, r)) ||
      ((_r = r),
      (r = Ao(Fa, "onSelect")),
      0 < r.length &&
        ((t = new Ql("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = An))));
}
function Hi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ln = {
    animationend: Hi("Animation", "AnimationEnd"),
    animationiteration: Hi("Animation", "AnimationIteration"),
    animationstart: Hi("Animation", "AnimationStart"),
    transitionend: Hi("Transition", "TransitionEnd"),
  },
  _s = {},
  Fh = {};
vt &&
  ((Fh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ln.animationend.animation,
    delete Ln.animationiteration.animation,
    delete Ln.animationstart.animation),
  "TransitionEvent" in window || delete Ln.transitionend.transition);
function is(e) {
  if (_s[e]) return _s[e];
  if (!Ln[e]) return e;
  var t = Ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fh) return (_s[e] = t[n]);
  return e;
}
var Oh = is("animationend"),
  zh = is("animationiteration"),
  jh = is("animationstart"),
  Bh = is("transitionend"),
  $h = new Map(),
  Oc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Xt(e, t) {
  $h.set(e, t), Pn(t, [e]);
}
for (var Fs = 0; Fs < Oc.length; Fs++) {
  var Os = Oc[Fs],
    _y = Os.toLowerCase(),
    Fy = Os[0].toUpperCase() + Os.slice(1);
  Xt(_y, "on" + Fy);
}
Xt(Oh, "onAnimationEnd");
Xt(zh, "onAnimationIteration");
Xt(jh, "onAnimationStart");
Xt("dblclick", "onDoubleClick");
Xt("focusin", "onFocus");
Xt("focusout", "onBlur");
Xt(Bh, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
Pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Oy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
function zc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), _0(r, t, void 0, e), (e.currentTarget = null);
}
function Uh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          zc(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          zc(i, a, u), (o = l);
        }
    }
  }
  if (Eo) throw ((e = Va), (Eo = !1), (Va = null), e);
}
function B(e, t) {
  var n = t[Ua];
  n === void 0 && (n = t[Ua] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Wh(t, e, 2, !1), n.add(r));
}
function zs(e, t, n) {
  var r = 0;
  t && (r |= 4), Wh(n, e, r, t);
}
var Ki = "_reactListening" + Math.random().toString(36).slice(2);
function ni(e) {
  if (!e[Ki]) {
    (e[Ki] = !0),
      Zf.forEach(function (n) {
        n !== "selectionchange" && (Oy.has(n) || zs(n, !1, e), zs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ki] || ((t[Ki] = !0), zs("selectionchange", !1, t));
  }
}
function Wh(e, t, n, r) {
  switch (Nh(t)) {
    case 1:
      var i = q0;
      break;
    case 4:
      i = J0;
      break;
    default:
      i = Gl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !La ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function js(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = dn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  hh(function () {
    var u = o,
      c = Ul(n),
      d = [];
    e: {
      var f = $h.get(e);
      if (f !== void 0) {
        var y = Ql,
          v = e;
        switch (e) {
          case "keypress":
            if (uo(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = py;
            break;
          case "focusin":
            (v = "focus"), (y = Vs);
            break;
          case "focusout":
            (v = "blur"), (y = Vs);
            break;
          case "beforeblur":
          case "afterblur":
            y = Vs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Nc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = ny;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = yy;
            break;
          case Oh:
          case zh:
          case jh:
            y = oy;
            break;
          case Bh:
            y = xy;
            break;
          case "scroll":
            y = ey;
            break;
          case "wheel":
            y = Sy;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = ay;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Rc;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          p = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              p !== null && ((S = Xr(h, p)), S != null && w.push(ri(h, S, m)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((f = new y(f, v, null, n, c)), d.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Da &&
            (v = n.relatedTarget || n.fromElement) &&
            (dn(v) || v[xt]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? dn(v) : null),
              v !== null &&
                ((k = En(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((w = Nc),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Rc),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (k = y == null ? f : Vn(y)),
            (m = v == null ? f : Vn(v)),
            (f = new w(S, h + "leave", y, n, c)),
            (f.target = k),
            (f.relatedTarget = m),
            (S = null),
            dn(c) === u &&
              ((w = new w(p, h + "enter", v, n, c)),
              (w.target = m),
              (w.relatedTarget = k),
              (S = w)),
            (k = S),
            y && v)
          )
            t: {
              for (w = y, p = v, h = 0, m = w; m; m = Nn(m)) h++;
              for (m = 0, S = p; S; S = Nn(S)) m++;
              for (; 0 < h - m; ) (w = Nn(w)), h--;
              for (; 0 < m - h; ) (p = Nn(p)), m--;
              for (; h--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                (w = Nn(w)), (p = Nn(p));
              }
              w = null;
            }
          else w = null;
          y !== null && jc(d, f, y, w, !1),
            v !== null && k !== null && jc(d, k, v, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? Vn(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var C = My;
        else if (Lc(f))
          if (Vh) C = Ly;
          else {
            C = Dy;
            var P = Ry;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = Ay);
        if (C && (C = C(e, u))) {
          Lh(d, C, n, c);
          break e;
        }
        P && P(e, f, u),
          e === "focusout" &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === "number" &&
            Pa(f, "number", f.value);
      }
      switch (((P = u ? Vn(u) : window), e)) {
        case "focusin":
          (Lc(P) || P.contentEditable === "true") &&
            ((An = P), (Fa = u), (_r = null));
          break;
        case "focusout":
          _r = Fa = An = null;
          break;
        case "mousedown":
          Oa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Oa = !1), Fc(d, n, c);
          break;
        case "selectionchange":
          if (Iy) break;
        case "keydown":
        case "keyup":
          Fc(d, n, c);
      }
      var E;
      if (Zl)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Dn
          ? Dh(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Rh &&
          n.locale !== "ko" &&
          (Dn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Dn && (E = Mh())
            : ((It = c),
              (Yl = "value" in It ? It.value : It.textContent),
              (Dn = !0))),
        (P = Ao(u, T)),
        0 < P.length &&
          ((T = new Mc(T, e, null, n, c)),
          d.push({ event: T, listeners: P }),
          E ? (T.data = E) : ((E = Ah(n)), E !== null && (T.data = E)))),
        (E = Cy ? Ty(e, n) : Py(e, n)) &&
          ((u = Ao(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Mc("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Uh(d, t);
  });
}
function ri(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ao(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Xr(e, n)),
      o != null && r.unshift(ri(e, o, i)),
      (o = Xr(e, t)),
      o != null && r.push(ri(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Nn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function jc(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Xr(n, o)), l != null && s.unshift(ri(n, l, a)))
        : i || ((l = Xr(n, o)), l != null && s.push(ri(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var zy = /\r\n?/g,
  jy = /\u0000|\uFFFD/g;
function Bc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zy,
      `
`
    )
    .replace(jy, "");
}
function Gi(e, t, n) {
  if (((t = Bc(t)), Bc(e) !== t && n)) throw Error(N(425));
}
function Lo() {}
var za = null,
  ja = null;
function Ba(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var $a = typeof setTimeout == "function" ? setTimeout : void 0,
  By = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $c = typeof Promise == "function" ? Promise : void 0,
  $y =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $c < "u"
      ? function (e) {
          return $c.resolve(null).then(e).catch(Uy);
        }
      : $a;
function Uy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Bs(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Jr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Jr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Uc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ur = Math.random().toString(36).slice(2),
  rt = "__reactFiber$" + ur,
  ii = "__reactProps$" + ur,
  xt = "__reactContainer$" + ur,
  Ua = "__reactEvents$" + ur,
  Wy = "__reactListeners$" + ur,
  Hy = "__reactHandles$" + ur;
function dn(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[rt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Uc(e); e !== null; ) {
          if ((n = e[rt])) return n;
          e = Uc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ki(e) {
  return (
    (e = e[rt] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function os(e) {
  return e[ii] || null;
}
var Wa = [],
  bn = -1;
function Zt(e) {
  return { current: e };
}
function $(e) {
  0 > bn || ((e.current = Wa[bn]), (Wa[bn] = null), bn--);
}
function j(e, t) {
  bn++, (Wa[bn] = e.current), (e.current = t);
}
var Kt = {},
  ve = Zt(Kt),
  Ne = Zt(!1),
  wn = Kt;
function Jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Me(e) {
  return (e = e.childContextTypes), e != null;
}
function Vo() {
  $(Ne), $(ve);
}
function Wc(e, t, n) {
  if (ve.current !== Kt) throw Error(N(168));
  j(ve, t), j(Ne, n);
}
function Hh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, R0(e) || "Unknown", i));
  return Z({}, n, r);
}
function bo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kt),
    (wn = ve.current),
    j(ve, e),
    j(Ne, Ne.current),
    !0
  );
}
function Hc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = Hh(e, t, wn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(Ne),
      $(ve),
      j(ve, e))
    : $(Ne),
    j(Ne, n);
}
var ht = null,
  ss = !1,
  $s = !1;
function Kh(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
function Ky(e) {
  (ss = !0), Kh(e);
}
function qt() {
  if (!$s && ht !== null) {
    $s = !0;
    var e = 0,
      t = z;
    try {
      var n = ht;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ht = null), (ss = !1);
    } catch (i) {
      throw (ht !== null && (ht = ht.slice(e + 1)), yh(Wl, qt), i);
    } finally {
      (z = t), ($s = !1);
    }
  }
  return null;
}
var In = [],
  _n = 0,
  Io = null,
  _o = 0,
  ze = [],
  je = 0,
  Sn = null,
  pt = 1,
  mt = "";
function sn(e, t) {
  (In[_n++] = _o), (In[_n++] = Io), (Io = e), (_o = t);
}
function Gh(e, t, n) {
  (ze[je++] = pt), (ze[je++] = mt), (ze[je++] = Sn), (Sn = e);
  var r = pt;
  e = mt;
  var i = 32 - qe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - qe(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (pt = (1 << (32 - qe(t) + i)) | (n << i) | r),
      (mt = o + e);
  } else (pt = (1 << o) | (n << i) | r), (mt = e);
}
function Jl(e) {
  e.return !== null && (sn(e, 1), Gh(e, 1, 0));
}
function eu(e) {
  for (; e === Io; )
    (Io = In[--_n]), (In[_n] = null), (_o = In[--_n]), (In[_n] = null);
  for (; e === Sn; )
    (Sn = ze[--je]),
      (ze[je] = null),
      (mt = ze[--je]),
      (ze[je] = null),
      (pt = ze[--je]),
      (ze[je] = null);
}
var Ve = null,
  Le = null,
  U = !1,
  Ze = null;
function Yh(e, t) {
  var n = Be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Kc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (Le = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (Le = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Sn !== null ? { id: pt, overflow: mt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (Le = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ha(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ka(e) {
  if (U) {
    var t = Le;
    if (t) {
      var n = t;
      if (!Kc(e, t)) {
        if (Ha(e)) throw Error(N(418));
        t = jt(n.nextSibling);
        var r = Ve;
        t && Kc(e, t)
          ? Yh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (Ve = e));
      }
    } else {
      if (Ha(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (Ve = e);
    }
  }
}
function Gc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ve = e;
}
function Yi(e) {
  if (e !== Ve) return !1;
  if (!U) return Gc(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ba(e.type, e.memoizedProps))),
    t && (t = Le))
  ) {
    if (Ha(e)) throw (Qh(), Error(N(418)));
    for (; t; ) Yh(e, t), (t = jt(t.nextSibling));
  }
  if ((Gc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Le = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Le = null;
    }
  } else Le = Ve ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Qh() {
  for (var e = Le; e; ) e = jt(e.nextSibling);
}
function er() {
  (Le = Ve = null), (U = !1);
}
function tu(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
var Gy = Pt.ReactCurrentBatchConfig;
function Qe(e, t) {
  if (e && e.defaultProps) {
    (t = Z({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Fo = Zt(null),
  Oo = null,
  Fn = null,
  nu = null;
function ru() {
  nu = Fn = Oo = null;
}
function iu(e) {
  var t = Fo.current;
  $(Fo), (e._currentValue = t);
}
function Ga(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Qn(e, t) {
  (Oo = e),
    (nu = Fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function We(e) {
  var t = e._currentValue;
  if (nu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Fn === null)) {
      if (Oo === null) throw Error(N(308));
      (Fn = e), (Oo.dependencies = { lanes: 0, firstContext: e });
    } else Fn = Fn.next = e;
  return t;
}
var fn = null;
function ou(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
function Xh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ou(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    wt(e, r)
  );
}
function wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function su(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Zh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function gt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      wt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ou(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    wt(e, n)
  );
}
function co(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Hl(e, n);
  }
}
function Yc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function zo(e, t, n, r) {
  var i = e.updateQueue;
  At = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var f = a.lane,
        y = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            w = a;
          switch (((f = t), (y = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                d = v.call(y, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (f = typeof v == "function" ? v.call(y, d, f) : v),
                f == null)
              )
                break e;
              d = Z({}, d, f);
              break e;
            case 2:
              At = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (y = {
          eventTime: y,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (l = d)) : (c = c.next = y),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Cn |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Qc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(N(191, i));
        i.call(r);
      }
    }
}
var qh = new Xf.Component().refs;
function Ya(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Z({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var as = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? En(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = Ut(e),
      o = gt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Bt(e, o, i)),
      t !== null && (Je(t, e, i, r), co(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = Ut(e),
      o = gt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Bt(e, o, i)),
      t !== null && (Je(t, e, i, r), co(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = Ut(e),
      i = gt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Bt(e, i, r)),
      t !== null && (Je(t, e, r, n), co(t, e, r));
  },
};
function Xc(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ti(n, r) || !ti(i, o)
      : !0
  );
}
function Jh(e, t, n) {
  var r = !1,
    i = Kt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = We(o))
      : ((i = Me(t) ? wn : ve.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Jn(e, i) : Kt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = as),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Zc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && as.enqueueReplaceState(t, t.state, null);
}
function Qa(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = qh), su(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = We(o))
    : ((o = Me(t) ? wn : ve.current), (i.context = Jn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ya(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && as.enqueueReplaceState(i, i.state, null),
      zo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function kr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === qh && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Qi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function qc(e) {
  var t = e._init;
  return t(e._payload);
}
function ep(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Wt(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, m, S) {
    return h === null || h.tag !== 6
      ? ((h = Qs(m, p.mode, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function l(p, h, m, S) {
    var C = m.type;
    return C === Rn
      ? c(p, h, m.props.children, S, m.key)
      : h !== null &&
        (h.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Dt &&
            qc(C) === h.type))
      ? ((S = i(h, m.props)), (S.ref = kr(p, h, m)), (S.return = p), S)
      : ((S = yo(m.type, m.key, m.props, null, p.mode, S)),
        (S.ref = kr(p, h, m)),
        (S.return = p),
        S);
  }
  function u(p, h, m, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Xs(m, p.mode, S)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, S, C) {
    return h === null || h.tag !== 7
      ? ((h = yn(m, p.mode, S, C)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function d(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Qs("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Oi:
          return (
            (m = yo(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = kr(p, null, h)),
            (m.return = p),
            m
          );
        case Mn:
          return (h = Xs(h, p.mode, m)), (h.return = p), h;
        case Dt:
          var S = h._init;
          return d(p, S(h._payload), m);
      }
      if (Mr(h) || yr(h))
        return (h = yn(h, p.mode, m, null)), (h.return = p), h;
      Qi(p, h);
    }
    return null;
  }
  function f(p, h, m, S) {
    var C = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : a(p, h, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Oi:
          return m.key === C ? l(p, h, m, S) : null;
        case Mn:
          return m.key === C ? u(p, h, m, S) : null;
        case Dt:
          return (C = m._init), f(p, h, C(m._payload), S);
      }
      if (Mr(m) || yr(m)) return C !== null ? null : c(p, h, m, S, null);
      Qi(p, m);
    }
    return null;
  }
  function y(p, h, m, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(m) || null), a(h, p, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Oi:
          return (p = p.get(S.key === null ? m : S.key) || null), l(h, p, S, C);
        case Mn:
          return (p = p.get(S.key === null ? m : S.key) || null), u(h, p, S, C);
        case Dt:
          var P = S._init;
          return y(p, h, m, P(S._payload), C);
      }
      if (Mr(S) || yr(S)) return (p = p.get(m) || null), c(h, p, S, C, null);
      Qi(h, S);
    }
    return null;
  }
  function v(p, h, m, S) {
    for (
      var C = null, P = null, E = h, T = (h = 0), V = null;
      E !== null && T < m.length;
      T++
    ) {
      E.index > T ? ((V = E), (E = null)) : (V = E.sibling);
      var L = f(p, E, m[T], S);
      if (L === null) {
        E === null && (E = V);
        break;
      }
      e && E && L.alternate === null && t(p, E),
        (h = o(L, h, T)),
        P === null ? (C = L) : (P.sibling = L),
        (P = L),
        (E = V);
    }
    if (T === m.length) return n(p, E), U && sn(p, T), C;
    if (E === null) {
      for (; T < m.length; T++)
        (E = d(p, m[T], S)),
          E !== null &&
            ((h = o(E, h, T)), P === null ? (C = E) : (P.sibling = E), (P = E));
      return U && sn(p, T), C;
    }
    for (E = r(p, E); T < m.length; T++)
      (V = y(E, p, T, m[T], S)),
        V !== null &&
          (e && V.alternate !== null && E.delete(V.key === null ? T : V.key),
          (h = o(V, h, T)),
          P === null ? (C = V) : (P.sibling = V),
          (P = V));
    return (
      e &&
        E.forEach(function (H) {
          return t(p, H);
        }),
      U && sn(p, T),
      C
    );
  }
  function w(p, h, m, S) {
    var C = yr(m);
    if (typeof C != "function") throw Error(N(150));
    if (((m = C.call(m)), m == null)) throw Error(N(151));
    for (
      var P = (C = null), E = h, T = (h = 0), V = null, L = m.next();
      E !== null && !L.done;
      T++, L = m.next()
    ) {
      E.index > T ? ((V = E), (E = null)) : (V = E.sibling);
      var H = f(p, E, L.value, S);
      if (H === null) {
        E === null && (E = V);
        break;
      }
      e && E && H.alternate === null && t(p, E),
        (h = o(H, h, T)),
        P === null ? (C = H) : (P.sibling = H),
        (P = H),
        (E = V);
    }
    if (L.done) return n(p, E), U && sn(p, T), C;
    if (E === null) {
      for (; !L.done; T++, L = m.next())
        (L = d(p, L.value, S)),
          L !== null &&
            ((h = o(L, h, T)), P === null ? (C = L) : (P.sibling = L), (P = L));
      return U && sn(p, T), C;
    }
    for (E = r(p, E); !L.done; T++, L = m.next())
      (L = y(E, p, T, L.value, S)),
        L !== null &&
          (e && L.alternate !== null && E.delete(L.key === null ? T : L.key),
          (h = o(L, h, T)),
          P === null ? (C = L) : (P.sibling = L),
          (P = L));
    return (
      e &&
        E.forEach(function (Nt) {
          return t(p, Nt);
        }),
      U && sn(p, T),
      C
    );
  }
  function k(p, h, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Rn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Oi:
          e: {
            for (var C = m.key, P = h; P !== null; ) {
              if (P.key === C) {
                if (((C = m.type), C === Rn)) {
                  if (P.tag === 7) {
                    n(p, P.sibling),
                      (h = i(P, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Dt &&
                    qc(C) === P.type)
                ) {
                  n(p, P.sibling),
                    (h = i(P, m.props)),
                    (h.ref = kr(p, P, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            m.type === Rn
              ? ((h = yn(m.props.children, p.mode, S, m.key)),
                (h.return = p),
                (p = h))
              : ((S = yo(m.type, m.key, m.props, null, p.mode, S)),
                (S.ref = kr(p, h, m)),
                (S.return = p),
                (p = S));
          }
          return s(p);
        case Mn:
          e: {
            for (P = m.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Xs(m, p.mode, S)), (h.return = p), (p = h);
          }
          return s(p);
        case Dt:
          return (P = m._init), k(p, h, P(m._payload), S);
      }
      if (Mr(m)) return v(p, h, m, S);
      if (yr(m)) return w(p, h, m, S);
      Qi(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Qs(m, p.mode, S)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return k;
}
var tr = ep(!0),
  tp = ep(!1),
  Ci = {},
  ot = Zt(Ci),
  oi = Zt(Ci),
  si = Zt(Ci);
function hn(e) {
  if (e === Ci) throw Error(N(174));
  return e;
}
function au(e, t) {
  switch ((j(si, t), j(oi, e), j(ot, Ci), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Na(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Na(t, e));
  }
  $(ot), j(ot, t);
}
function nr() {
  $(ot), $(oi), $(si);
}
function np(e) {
  hn(si.current);
  var t = hn(ot.current),
    n = Na(t, e.type);
  t !== n && (j(oi, e), j(ot, n));
}
function lu(e) {
  oi.current === e && ($(ot), $(oi));
}
var G = Zt(0);
function jo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Us = [];
function uu() {
  for (var e = 0; e < Us.length; e++)
    Us[e]._workInProgressVersionPrimary = null;
  Us.length = 0;
}
var fo = Pt.ReactCurrentDispatcher,
  Ws = Pt.ReactCurrentBatchConfig,
  kn = 0,
  Q = null,
  oe = null,
  le = null,
  Bo = !1,
  Fr = !1,
  ai = 0,
  Yy = 0;
function pe() {
  throw Error(N(321));
}
function cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}
function du(e, t, n, r, i, o) {
  if (
    ((kn = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fo.current = e === null || e.memoizedState === null ? qy : Jy),
    (e = n(r, i)),
    Fr)
  ) {
    o = 0;
    do {
      if (((Fr = !1), (ai = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (le = oe = null),
        (t.updateQueue = null),
        (fo.current = ev),
        (e = n(r, i));
    } while (Fr);
  }
  if (
    ((fo.current = $o),
    (t = oe !== null && oe.next !== null),
    (kn = 0),
    (le = oe = Q = null),
    (Bo = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function fu() {
  var e = ai !== 0;
  return (ai = 0), e;
}
function nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (Q.memoizedState = le = e) : (le = le.next = e), le;
}
function He() {
  if (oe === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = le === null ? Q.memoizedState : le.next;
  if (t !== null) (le = t), (oe = e);
  else {
    if (e === null) throw Error(N(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      le === null ? (Q.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function li(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Hs(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = oe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((kn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (Q.lanes |= c),
          (Cn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      et(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Q.lanes |= o), (Cn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ks(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    et(o, t.memoizedState) || (Pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function rp() {}
function ip(e, t) {
  var n = Q,
    r = He(),
    i = t(),
    o = !et(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    hu(ap.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ui(9, sp.bind(null, n, r, i, t), void 0, null),
      ue === null)
    )
      throw Error(N(349));
    kn & 30 || op(n, t, i);
  }
  return i;
}
function op(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function sp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), lp(t) && up(e);
}
function ap(e, t, n) {
  return n(function () {
    lp(t) && up(e);
  });
}
function lp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function up(e) {
  var t = wt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function Jc(e) {
  var t = nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: li,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Zy.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function ui(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function cp() {
  return He().memoizedState;
}
function ho(e, t, n, r) {
  var i = nt();
  (Q.flags |= e),
    (i.memoizedState = ui(1 | t, n, void 0, r === void 0 ? null : r));
}
function ls(e, t, n, r) {
  var i = He();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (oe !== null) {
    var s = oe.memoizedState;
    if (((o = s.destroy), r !== null && cu(r, s.deps))) {
      i.memoizedState = ui(t, n, o, r);
      return;
    }
  }
  (Q.flags |= e), (i.memoizedState = ui(1 | t, n, o, r));
}
function ed(e, t) {
  return ho(8390656, 8, e, t);
}
function hu(e, t) {
  return ls(2048, 8, e, t);
}
function dp(e, t) {
  return ls(4, 2, e, t);
}
function fp(e, t) {
  return ls(4, 4, e, t);
}
function hp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function pp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ls(4, 4, hp.bind(null, t, e), n)
  );
}
function pu() {}
function mp(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function gp(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yp(e, t, n) {
  return kn & 21
    ? (et(n, t) || ((n = wh()), (Q.lanes |= n), (Cn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function Qy(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ws.transition;
  Ws.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (Ws.transition = r);
  }
}
function vp() {
  return He().memoizedState;
}
function Xy(e, t, n) {
  var r = Ut(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    xp(e))
  )
    wp(t, n);
  else if (((n = Xh(e, t, n, r)), n !== null)) {
    var i = Se();
    Je(n, e, r, i), Sp(n, t, r);
  }
}
function Zy(e, t, n) {
  var r = Ut(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xp(e)) wp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), et(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), ou(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Xh(e, t, i, r)),
      n !== null && ((i = Se()), Je(n, e, r, i), Sp(n, t, r));
  }
}
function xp(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function wp(e, t) {
  Fr = Bo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Sp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Hl(e, n);
  }
}
var $o = {
    readContext: We,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  qy = {
    readContext: We,
    useCallback: function (e, t) {
      return (nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: We,
    useEffect: ed,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ho(4194308, 4, hp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ho(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ho(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Xy.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Jc,
    useDebugValue: pu,
    useDeferredValue: function (e) {
      return (nt().memoizedState = e);
    },
    useTransition: function () {
      var e = Jc(!1),
        t = e[0];
      return (e = Qy.bind(null, e[1])), (nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = nt();
      if (U) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(N(349));
        kn & 30 || op(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        ed(ap.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ui(9, sp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = nt(),
        t = ue.identifierPrefix;
      if (U) {
        var n = mt,
          r = pt;
        (n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ai++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Yy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jy = {
    readContext: We,
    useCallback: mp,
    useContext: We,
    useEffect: hu,
    useImperativeHandle: pp,
    useInsertionEffect: dp,
    useLayoutEffect: fp,
    useMemo: gp,
    useReducer: Hs,
    useRef: cp,
    useState: function () {
      return Hs(li);
    },
    useDebugValue: pu,
    useDeferredValue: function (e) {
      var t = He();
      return yp(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Hs(li)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: rp,
    useSyncExternalStore: ip,
    useId: vp,
    unstable_isNewReconciler: !1,
  },
  ev = {
    readContext: We,
    useCallback: mp,
    useContext: We,
    useEffect: hu,
    useImperativeHandle: pp,
    useInsertionEffect: dp,
    useLayoutEffect: fp,
    useMemo: gp,
    useReducer: Ks,
    useRef: cp,
    useState: function () {
      return Ks(li);
    },
    useDebugValue: pu,
    useDeferredValue: function (e) {
      var t = He();
      return oe === null ? (t.memoizedState = e) : yp(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ks(li)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: rp,
    useSyncExternalStore: ip,
    useId: vp,
    unstable_isNewReconciler: !1,
  };
function rr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += M0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Gs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var tv = typeof WeakMap == "function" ? WeakMap : Map;
function kp(e, t, n) {
  (n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Wo || ((Wo = !0), (sl = r)), Xa(e, t);
    }),
    n
  );
}
function Cp(e, t, n) {
  (n = gt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Xa(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Xa(e, t),
          typeof r != "function" &&
            ($t === null ? ($t = new Set([this])) : $t.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function td(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = mv.bind(null, e, t, n)), t.then(e, e));
}
function nd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rd(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = gt(-1, 1)), (t.tag = 2), Bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var nv = Pt.ReactCurrentOwner,
  Pe = !1;
function xe(e, t, n, r) {
  t.child = e === null ? tp(t, null, n, r) : tr(t, e.child, n, r);
}
function id(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Qn(t, i),
    (r = du(e, t, n, r, o, i)),
    (n = fu()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        St(e, t, i))
      : (U && n && Jl(t), (t.flags |= 1), xe(e, t, r, i), t.child)
  );
}
function od(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ku(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Tp(e, t, o, r, i))
      : ((e = yo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ti), n(s, r) && e.ref === t.ref)
    )
      return St(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Wt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Tp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ti(o, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), St(e, t, i);
  }
  return Za(e, t, n, r, i);
}
function Pp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        j(zn, De),
        (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          j(zn, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        j(zn, De),
        (De |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      j(zn, De),
      (De |= r);
  return xe(e, t, i, n), t.child;
}
function Ep(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Za(e, t, n, r, i) {
  var o = Me(n) ? wn : ve.current;
  return (
    (o = Jn(t, o)),
    Qn(t, i),
    (n = du(e, t, n, r, o, i)),
    (r = fu()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        St(e, t, i))
      : (U && r && Jl(t), (t.flags |= 1), xe(e, t, n, i), t.child)
  );
}
function sd(e, t, n, r, i) {
  if (Me(n)) {
    var o = !0;
    bo(t);
  } else o = !1;
  if ((Qn(t, i), t.stateNode === null))
    po(e, t), Jh(t, n, r), Qa(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = We(u))
      : ((u = Me(n) ? wn : ve.current), (u = Jn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Zc(t, s, r, u)),
      (At = !1);
    var f = t.memoizedState;
    (s.state = f),
      zo(t, r, s, i),
      (l = t.memoizedState),
      a !== r || f !== l || Ne.current || At
        ? (typeof c == "function" && (Ya(t, n, c, r), (l = t.memoizedState)),
          (a = At || Xc(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Zh(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Qe(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = We(l))
        : ((l = Me(n) ? wn : ve.current), (l = Jn(t, l)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Zc(t, s, r, l)),
      (At = !1),
      (f = t.memoizedState),
      (s.state = f),
      zo(t, r, s, i);
    var v = t.memoizedState;
    a !== d || f !== v || Ne.current || At
      ? (typeof y == "function" && (Ya(t, n, y, r), (v = t.memoizedState)),
        (u = At || Xc(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return qa(e, t, n, r, o, i);
}
function qa(e, t, n, r, i, o) {
  Ep(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Hc(t, n, !1), St(e, t, o);
  (r = t.stateNode), (nv.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = tr(t, e.child, null, o)), (t.child = tr(t, null, a, o)))
      : xe(e, t, a, o),
    (t.memoizedState = r.state),
    i && Hc(t, n, !0),
    t.child
  );
}
function Np(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wc(e, t.context, !1),
    au(e, t.containerInfo);
}
function ad(e, t, n, r, i) {
  return er(), tu(i), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var Ja = { dehydrated: null, treeContext: null, retryLane: 0 };
function el(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mp(e, t, n) {
  var r = t.pendingProps,
    i = G.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    j(G, i & 1),
    e === null)
  )
    return (
      Ka(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = ds(s, r, 0, null)),
              (e = yn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = el(n)),
              (t.memoizedState = Ja),
              e)
            : mu(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return rv(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Wt(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Wt(a, o)) : ((o = yn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? el(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ja),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Wt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function mu(e, t) {
  return (
    (t = ds({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Xi(e, t, n, r) {
  return (
    r !== null && tu(r),
    tr(t, e.child, null, n),
    (e = mu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rv(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Gs(Error(N(422)))), Xi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = ds({ mode: "visible", children: r.children }, i, 0, null)),
        (o = yn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && tr(t, e.child, null, s),
        (t.child.memoizedState = el(s)),
        (t.memoizedState = Ja),
        o);
  if (!(t.mode & 1)) return Xi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(N(419))), (r = Gs(o, r, void 0)), Xi(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Pe || a)) {
    if (((r = ue), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), wt(e, i), Je(r, e, i, -1));
    }
    return Su(), (r = Gs(Error(N(421)))), Xi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = gv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Le = jt(i.nextSibling)),
      (Ve = t),
      (U = !0),
      (Ze = null),
      e !== null &&
        ((ze[je++] = pt),
        (ze[je++] = mt),
        (ze[je++] = Sn),
        (pt = e.id),
        (mt = e.overflow),
        (Sn = t)),
      (t = mu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ld(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ga(e.return, t, n);
}
function Ys(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Rp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((xe(e, t, r.children, n), (r = G.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ld(e, n, t);
        else if (e.tag === 19) ld(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((j(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && jo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ys(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && jo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ys(t, !0, n, null, o);
        break;
      case "together":
        Ys(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function po(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function St(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Cn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function iv(e, t, n) {
  switch (t.tag) {
    case 3:
      Np(t), er();
      break;
    case 5:
      np(t);
      break;
    case 1:
      Me(t.type) && bo(t);
      break;
    case 4:
      au(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      j(Fo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (j(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Mp(e, t, n)
          : (j(G, G.current & 1),
            (e = St(e, t, n)),
            e !== null ? e.sibling : null);
      j(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        j(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Pp(e, t, n);
  }
  return St(e, t, n);
}
var Dp, tl, Ap, Lp;
Dp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
tl = function () {};
Ap = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), hn(ot.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ca(e, i)), (r = Ca(e, r)), (o = []);
        break;
      case "select":
        (i = Z({}, i, { value: void 0 })),
          (r = Z({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Ea(e, i)), (r = Ea(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Lo);
    }
    Ma(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Yr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Yr.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && B("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Lp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cr(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ov(e, t, n) {
  var r = t.pendingProps;
  switch ((eu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return me(t), null;
    case 1:
      return Me(t.type) && Vo(), me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nr(),
        $(Ne),
        $(ve),
        uu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ze !== null && (ul(Ze), (Ze = null)))),
        tl(e, t),
        me(t),
        null
      );
    case 5:
      lu(t);
      var i = hn(si.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ap(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return me(t), null;
        }
        if (((e = hn(ot.current)), Yi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[rt] = t), (r[ii] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Dr.length; i++) B(Dr[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              yc(r, o), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              xc(r, o), B("invalid", r);
          }
          Ma(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Yr.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              zi(r), vc(r, o, !0);
              break;
            case "textarea":
              zi(r), wc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Lo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = oh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[rt] = t),
            (e[ii] = r),
            Dp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ra(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Dr.length; i++) B(Dr[i], e);
                i = r;
                break;
              case "source":
                B("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (i = r);
                break;
              case "details":
                B("toggle", e), (i = r);
                break;
              case "input":
                yc(e, r), (i = Ca(e, r)), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Z({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                xc(e, r), (i = Ea(e, r)), B("invalid", e);
                break;
              default:
                i = r;
            }
            Ma(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? lh(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && sh(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Qr(e, l)
                    : typeof l == "number" && Qr(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Yr.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && B("scroll", e)
                      : l != null && zl(e, o, l, s));
              }
            switch (n) {
              case "input":
                zi(e), vc(e, r, !1);
                break;
              case "textarea":
                zi(e), wc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Hn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Hn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Lo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) Lp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = hn(si.current)), hn(ot.current), Yi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rt] = t),
            (o = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rt] = t),
            (t.stateNode = r);
      }
      return me(t), null;
    case 13:
      if (
        ($(G),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && Le !== null && t.mode & 1 && !(t.flags & 128))
          Qh(), er(), (t.flags |= 98560), (o = !1);
        else if (((o = Yi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[rt] = t;
          } else
            er(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (o = !1);
        } else Ze !== null && (ul(Ze), (Ze = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? se === 0 && (se = 3) : Su())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        nr(), tl(e, t), e === null && ni(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return iu(t.type._context), me(t), null;
    case 17:
      return Me(t.type) && Vo(), me(t), null;
    case 19:
      if (($(G), (o = t.memoizedState), o === null)) return me(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Cr(o, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = jo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Cr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return j(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ne() > ir &&
            ((t.flags |= 128), (r = !0), Cr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = jo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Cr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !U)
            )
              return me(t), null;
          } else
            2 * ne() - o.renderingStartTime > ir &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Cr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ne()),
          (t.sibling = null),
          (n = G.current),
          j(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        wu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function sv(e, t) {
  switch ((eu(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && Vo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nr(),
        $(Ne),
        $(ve),
        uu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return lu(t), null;
    case 13:
      if (($(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        er();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(G), null;
    case 4:
      return nr(), null;
    case 10:
      return iu(t.type._context), null;
    case 22:
    case 23:
      return wu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zi = !1,
  ge = !1,
  av = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function nl(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var ud = !1;
function lv(e, t) {
  if (((za = Ro), (e = _h()), ql(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (f = d), (d = y);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = s),
                f === o && ++c === r && (l = s),
                (y = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ja = { focusedElem: e, selectionRange: n }, Ro = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    k = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Qe(t.type, w),
                      k
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          J(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (v = ud), (ud = !1), v;
}
function Or(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && nl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function us(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function rl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Vp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rt], delete t[ii], delete t[Ua], delete t[Wy], delete t[Hy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function bp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function il(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Lo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (il(e, t, n), e = e.sibling; e !== null; ) il(e, t, n), (e = e.sibling);
}
function ol(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ol(e, t, n), e = e.sibling; e !== null; ) ol(e, t, n), (e = e.sibling);
}
var ce = null,
  Xe = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) Ip(e, t, n), (n = n.sibling);
}
function Ip(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(ts, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ge || On(n, t);
    case 6:
      var r = ce,
        i = Xe;
      (ce = null),
        Mt(e, t, n),
        (ce = r),
        (Xe = i),
        ce !== null &&
          (Xe
            ? ((e = ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null &&
        (Xe
          ? ((e = ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? Bs(e.parentNode, n)
              : e.nodeType === 1 && Bs(e, n),
            Jr(e))
          : Bs(ce, n.stateNode));
      break;
    case 4:
      (r = ce),
        (i = Xe),
        (ce = n.stateNode.containerInfo),
        (Xe = !0),
        Mt(e, t, n),
        (ce = r),
        (Xe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && nl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (
        !ge &&
        (On(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          J(n, t, a);
        }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ge = (r = ge) || n.memoizedState !== null), Mt(e, t, n), (ge = r))
        : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function dd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new av()),
      t.forEach(function (r) {
        var i = yv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ce = a.stateNode), (Xe = !1);
              break e;
            case 3:
              (ce = a.stateNode.containerInfo), (Xe = !0);
              break e;
            case 4:
              (ce = a.stateNode.containerInfo), (Xe = !0);
              break e;
          }
          a = a.return;
        }
        if (ce === null) throw Error(N(160));
        Ip(o, s, i), (ce = null), (Xe = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        J(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _p(t, e), (t = t.sibling);
}
function _p(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), tt(e), r & 4)) {
        try {
          Or(3, e, e.return), us(3, e);
        } catch (w) {
          J(e, e.return, w);
        }
        try {
          Or(5, e, e.return);
        } catch (w) {
          J(e, e.return, w);
        }
      }
      break;
    case 1:
      Ke(t, e), tt(e), r & 512 && n !== null && On(n, n.return);
      break;
    case 5:
      if (
        (Ke(t, e),
        tt(e),
        r & 512 && n !== null && On(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Qr(i, "");
        } catch (w) {
          J(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && rh(i, o),
              Ra(a, s);
            var u = Ra(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? lh(i, d)
                : c === "dangerouslySetInnerHTML"
                ? sh(i, d)
                : c === "children"
                ? Qr(i, d)
                : zl(i, c, d, u);
            }
            switch (a) {
              case "input":
                Ta(i, o);
                break;
              case "textarea":
                ih(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? Hn(i, !!o.multiple, y, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Hn(i, !!o.multiple, o.defaultValue, !0)
                      : Hn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ii] = o;
          } catch (w) {
            J(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (w) {
          J(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (w) {
          J(e, e.return, w);
        }
      break;
    case 4:
      Ke(t, e), tt(e);
      break;
    case 13:
      Ke(t, e),
        tt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (vu = ne())),
        r & 4 && dd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ge = (u = ge) || c), Ke(t, e), (ge = u)) : Ke(t, e),
        tt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (D = e, c = e.child; c !== null; ) {
            for (d = D = c; D !== null; ) {
              switch (((f = D), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Or(4, f, f.return);
                  break;
                case 1:
                  On(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      J(r, n, w);
                    }
                  }
                  break;
                case 5:
                  On(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    hd(d);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (D = y)) : hd(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = ah("display", s)));
              } catch (w) {
                J(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (w) {
                J(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Ke(t, e), tt(e), r & 4 && dd(e);
      break;
    case 21:
      break;
    default:
      Ke(t, e), tt(e);
  }
}
function tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Qr(i, ""), (r.flags &= -33));
          var o = cd(e);
          ol(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = cd(e);
          il(e, a, s);
          break;
        default:
          throw Error(N(161));
      }
    } catch (l) {
      J(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function uv(e, t, n) {
  (D = e), Fp(e);
}
function Fp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var i = D,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Zi;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || ge;
        a = Zi;
        var u = ge;
        if (((Zi = s), (ge = l) && !u))
          for (D = i; D !== null; )
            (s = D),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? pd(i)
                : l !== null
                ? ((l.return = s), (D = l))
                : pd(i);
        for (; o !== null; ) (D = o), Fp(o), (o = o.sibling);
        (D = i), (Zi = a), (ge = u);
      }
      fd(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (D = o)) : fd(e);
  }
}
function fd(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || us(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Qc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Qc(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Jr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        ge || (t.flags & 512 && rl(t));
      } catch (f) {
        J(t, t.return, f);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function hd(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function pd(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            us(4, t);
          } catch (l) {
            J(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              J(t, i, l);
            }
          }
          var o = t.return;
          try {
            rl(t);
          } catch (l) {
            J(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            rl(t);
          } catch (l) {
            J(t, s, l);
          }
      }
    } catch (l) {
      J(t, t.return, l);
    }
    if (t === e) {
      D = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (D = a);
      break;
    }
    D = t.return;
  }
}
var cv = Math.ceil,
  Uo = Pt.ReactCurrentDispatcher,
  gu = Pt.ReactCurrentOwner,
  $e = Pt.ReactCurrentBatchConfig,
  O = 0,
  ue = null,
  ie = null,
  fe = 0,
  De = 0,
  zn = Zt(0),
  se = 0,
  ci = null,
  Cn = 0,
  cs = 0,
  yu = 0,
  zr = null,
  Te = null,
  vu = 0,
  ir = 1 / 0,
  ft = null,
  Wo = !1,
  sl = null,
  $t = null,
  qi = !1,
  _t = null,
  Ho = 0,
  jr = 0,
  al = null,
  mo = -1,
  go = 0;
function Se() {
  return O & 6 ? ne() : mo !== -1 ? mo : (mo = ne());
}
function Ut(e) {
  return e.mode & 1
    ? O & 2 && fe !== 0
      ? fe & -fe
      : Gy.transition !== null
      ? (go === 0 && (go = wh()), go)
      : ((e = z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nh(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < jr) throw ((jr = 0), (al = null), Error(N(185)));
  wi(e, n, r),
    (!(O & 2) || e !== ue) &&
      (e === ue && (!(O & 2) && (cs |= n), se === 4 && Vt(e, fe)),
      Re(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((ir = ne() + 500), ss && qt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  G0(e, t);
  var r = Mo(e, e === ue ? fe : 0);
  if (r === 0)
    n !== null && Cc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cc(n), t === 1))
      e.tag === 0 ? Ky(md.bind(null, e)) : Kh(md.bind(null, e)),
        $y(function () {
          !(O & 6) && qt();
        }),
        (n = null);
    else {
      switch (Sh(r)) {
        case 1:
          n = Wl;
          break;
        case 4:
          n = vh;
          break;
        case 16:
          n = No;
          break;
        case 536870912:
          n = xh;
          break;
        default:
          n = No;
      }
      n = Hp(n, Op.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Op(e, t) {
  if (((mo = -1), (go = 0), O & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Xn() && e.callbackNode !== n) return null;
  var r = Mo(e, e === ue ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ko(e, r);
  else {
    t = r;
    var i = O;
    O |= 2;
    var o = jp();
    (ue !== e || fe !== t) && ((ft = null), (ir = ne() + 500), gn(e, t));
    do
      try {
        hv();
        break;
      } catch (a) {
        zp(e, a);
      }
    while (1);
    ru(),
      (Uo.current = o),
      (O = i),
      ie !== null ? (t = 0) : ((ue = null), (fe = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ba(e)), i !== 0 && ((r = i), (t = ll(e, i)))), t === 1)
    )
      throw ((n = ci), gn(e, 0), Vt(e, r), Re(e, ne()), n);
    if (t === 6) Vt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !dv(i) &&
          ((t = Ko(e, r)),
          t === 2 && ((o = ba(e)), o !== 0 && ((r = o), (t = ll(e, o)))),
          t === 1))
      )
        throw ((n = ci), gn(e, 0), Vt(e, r), Re(e, ne()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          an(e, Te, ft);
          break;
        case 3:
          if (
            (Vt(e, r), (r & 130023424) === r && ((t = vu + 500 - ne()), 10 < t))
          ) {
            if (Mo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Se(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = $a(an.bind(null, e, Te, ft), t);
            break;
          }
          an(e, Te, ft);
          break;
        case 4:
          if ((Vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - qe(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * cv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $a(an.bind(null, e, Te, ft), r);
            break;
          }
          an(e, Te, ft);
          break;
        case 5:
          an(e, Te, ft);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Re(e, ne()), e.callbackNode === n ? Op.bind(null, e) : null;
}
function ll(e, t) {
  var n = zr;
  return (
    e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
    (e = Ko(e, t)),
    e !== 2 && ((t = Te), (Te = n), t !== null && ul(t)),
    e
  );
}
function ul(e) {
  Te === null ? (Te = e) : Te.push.apply(Te, e);
}
function dv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!et(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Vt(e, t) {
  for (
    t &= ~yu,
      t &= ~cs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function md(e) {
  if (O & 6) throw Error(N(327));
  Xn();
  var t = Mo(e, 0);
  if (!(t & 1)) return Re(e, ne()), null;
  var n = Ko(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ba(e);
    r !== 0 && ((t = r), (n = ll(e, r)));
  }
  if (n === 1) throw ((n = ci), gn(e, 0), Vt(e, t), Re(e, ne()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    an(e, Te, ft),
    Re(e, ne()),
    null
  );
}
function xu(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((ir = ne() + 500), ss && qt());
  }
}
function Tn(e) {
  _t !== null && _t.tag === 0 && !(O & 6) && Xn();
  var t = O;
  O |= 1;
  var n = $e.transition,
    r = z;
  try {
    if ((($e.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), ($e.transition = n), (O = t), !(O & 6) && qt();
  }
}
function wu() {
  (De = zn.current), $(zn);
}
function gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), By(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((eu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vo();
          break;
        case 3:
          nr(), $(Ne), $(ve), uu();
          break;
        case 5:
          lu(r);
          break;
        case 4:
          nr();
          break;
        case 13:
          $(G);
          break;
        case 19:
          $(G);
          break;
        case 10:
          iu(r.type._context);
          break;
        case 22:
        case 23:
          wu();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (ie = e = Wt(e.current, null)),
    (fe = De = t),
    (se = 0),
    (ci = null),
    (yu = cs = Cn = 0),
    (Te = zr = null),
    fn !== null)
  ) {
    for (t = 0; t < fn.length; t++)
      if (((n = fn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    fn = null;
  }
  return e;
}
function zp(e, t) {
  do {
    var n = ie;
    try {
      if ((ru(), (fo.current = $o), Bo)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Bo = !1;
      }
      if (
        ((kn = 0),
        (le = oe = Q = null),
        (Fr = !1),
        (ai = 0),
        (gu.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (ci = t), (ie = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = fe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = nd(s);
          if (y !== null) {
            (y.flags &= -257),
              rd(y, s, a, o, t),
              y.mode & 1 && td(o, u, t),
              (t = y),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(l), (t.updateQueue = w);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              td(o, u, t), Su();
              break e;
            }
            l = Error(N(426));
          }
        } else if (U && a.mode & 1) {
          var k = nd(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              rd(k, s, a, o, t),
              tu(rr(l, a));
            break e;
          }
        }
        (o = l = rr(l, a)),
          se !== 4 && (se = 2),
          zr === null ? (zr = [o]) : zr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = kp(o, l, t);
              Yc(o, p);
              break e;
            case 1:
              a = l;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    ($t === null || !$t.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Cp(o, a, t);
                Yc(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      $p(n);
    } catch (C) {
      (t = C), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function jp() {
  var e = Uo.current;
  return (Uo.current = $o), e === null ? $o : e;
}
function Su() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    ue === null || (!(Cn & 268435455) && !(cs & 268435455)) || Vt(ue, fe);
}
function Ko(e, t) {
  var n = O;
  O |= 2;
  var r = jp();
  (ue !== e || fe !== t) && ((ft = null), gn(e, t));
  do
    try {
      fv();
      break;
    } catch (i) {
      zp(e, i);
    }
  while (1);
  if ((ru(), (O = n), (Uo.current = r), ie !== null)) throw Error(N(261));
  return (ue = null), (fe = 0), se;
}
function fv() {
  for (; ie !== null; ) Bp(ie);
}
function hv() {
  for (; ie !== null && !O0(); ) Bp(ie);
}
function Bp(e) {
  var t = Wp(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps),
    t === null ? $p(e) : (ie = t),
    (gu.current = null);
}
function $p(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = sv(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (ie = null);
        return;
      }
    } else if (((n = ov(n, t, De)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function an(e, t, n) {
  var r = z,
    i = $e.transition;
  try {
    ($e.transition = null), (z = 1), pv(e, t, n, r);
  } finally {
    ($e.transition = i), (z = r);
  }
  return null;
}
function pv(e, t, n, r) {
  do Xn();
  while (_t !== null);
  if (O & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Y0(e, o),
    e === ue && ((ie = ue = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      qi ||
      ((qi = !0),
      Hp(No, function () {
        return Xn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = $e.transition), ($e.transition = null);
    var s = z;
    z = 1;
    var a = O;
    (O |= 4),
      (gu.current = null),
      lv(e, n),
      _p(n, e),
      by(ja),
      (Ro = !!za),
      (ja = za = null),
      (e.current = n),
      uv(n),
      z0(),
      (O = a),
      (z = s),
      ($e.transition = o);
  } else e.current = n;
  if (
    (qi && ((qi = !1), (_t = e), (Ho = i)),
    (o = e.pendingLanes),
    o === 0 && ($t = null),
    $0(n.stateNode),
    Re(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Wo) throw ((Wo = !1), (e = sl), (sl = null), e);
  return (
    Ho & 1 && e.tag !== 0 && Xn(),
    (o = e.pendingLanes),
    o & 1 ? (e === al ? jr++ : ((jr = 0), (al = e))) : (jr = 0),
    qt(),
    null
  );
}
function Xn() {
  if (_t !== null) {
    var e = Sh(Ho),
      t = $e.transition,
      n = z;
    try {
      if ((($e.transition = null), (z = 16 > e ? 16 : e), _t === null))
        var r = !1;
      else {
        if (((e = _t), (_t = null), (Ho = 0), O & 6)) throw Error(N(331));
        var i = O;
        for (O |= 4, D = e.current; D !== null; ) {
          var o = D,
            s = o.child;
          if (D.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Or(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (D = d);
                  else
                    for (; D !== null; ) {
                      c = D;
                      var f = c.sibling,
                        y = c.return;
                      if ((Vp(c), c === u)) {
                        D = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = y), (D = f);
                        break;
                      }
                      D = y;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (D = s);
          else
            e: for (; D !== null; ) {
              if (((o = D), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Or(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (D = p);
                break e;
              }
              D = o.return;
            }
        }
        var h = e.current;
        for (D = h; D !== null; ) {
          s = D;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (D = m);
          else
            e: for (s = h; D !== null; ) {
              if (((a = D), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      us(9, a);
                  }
                } catch (C) {
                  J(a, a.return, C);
                }
              if (a === s) {
                D = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (D = S);
                break e;
              }
              D = a.return;
            }
        }
        if (
          ((O = i), qt(), it && typeof it.onPostCommitFiberRoot == "function")
        )
          try {
            it.onPostCommitFiberRoot(ts, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), ($e.transition = t);
    }
  }
  return !1;
}
function gd(e, t, n) {
  (t = rr(n, t)),
    (t = kp(e, t, 1)),
    (e = Bt(e, t, 1)),
    (t = Se()),
    e !== null && (wi(e, 1, t), Re(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) gd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            ($t === null || !$t.has(r)))
        ) {
          (e = rr(n, e)),
            (e = Cp(t, e, 1)),
            (t = Bt(t, e, 1)),
            (e = Se()),
            t !== null && (wi(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function mv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (fe & n) === n &&
      (se === 4 || (se === 3 && (fe & 130023424) === fe && 500 > ne() - vu)
        ? gn(e, 0)
        : (yu |= n)),
    Re(e, t);
}
function Up(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = $i), ($i <<= 1), !($i & 130023424) && ($i = 4194304))
      : (t = 1));
  var n = Se();
  (e = wt(e, t)), e !== null && (wi(e, t, n), Re(e, n));
}
function gv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Up(e, n);
}
function yv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Up(e, n);
}
var Wp;
Wp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ne.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), iv(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), U && t.flags & 1048576 && Gh(t, _o, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      po(e, t), (e = t.pendingProps);
      var i = Jn(t, ve.current);
      Qn(t, n), (i = du(null, t, r, e, i, n));
      var o = fu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((o = !0), bo(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            su(t),
            (i.updater = as),
            (t.stateNode = i),
            (i._reactInternals = t),
            Qa(t, r, e, n),
            (t = qa(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && Jl(t), xe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (po(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = xv(r)),
          (e = Qe(r, e)),
          i)
        ) {
          case 0:
            t = Za(null, t, r, e, n);
            break e;
          case 1:
            t = sd(null, t, r, e, n);
            break e;
          case 11:
            t = id(null, t, r, e, n);
            break e;
          case 14:
            t = od(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Za(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        sd(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Np(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Zh(e, t),
          zo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = rr(Error(N(423)), t)), (t = ad(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = rr(Error(N(424)), t)), (t = ad(e, t, r, n, i));
            break e;
          } else
            for (
              Le = jt(t.stateNode.containerInfo.firstChild),
                Ve = t,
                U = !0,
                Ze = null,
                n = tp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((er(), r === i)) {
            t = St(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        np(t),
        e === null && Ka(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Ba(r, i) ? (s = null) : o !== null && Ba(r, o) && (t.flags |= 32),
        Ep(e, t),
        xe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ka(t), null;
    case 13:
      return Mp(e, t, n);
    case 4:
      return (
        au(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tr(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        id(e, t, r, i, n)
      );
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          j(Fo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (et(o.value, s)) {
            if (o.children === i.children && !Ne.current) {
              t = St(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = gt(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Ga(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(N(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Ga(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        xe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Qn(t, n),
        (i = We(i)),
        (r = r(i)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Qe(r, t.pendingProps)),
        (i = Qe(r.type, i)),
        od(e, t, r, i, n)
      );
    case 15:
      return Tp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        po(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), bo(t)) : (e = !1),
        Qn(t, n),
        Jh(t, r, i),
        Qa(t, r, i, n),
        qa(null, t, r, !0, e, n)
      );
    case 19:
      return Rp(e, t, n);
    case 22:
      return Pp(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function Hp(e, t) {
  return yh(e, t);
}
function vv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Be(e, t, n, r) {
  return new vv(e, t, n, r);
}
function ku(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function xv(e) {
  if (typeof e == "function") return ku(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Bl)) return 11;
    if (e === $l) return 14;
  }
  return 2;
}
function Wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function yo(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) ku(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Rn:
        return yn(n.children, i, o, t);
      case jl:
        (s = 8), (i |= 8);
        break;
      case xa:
        return (
          (e = Be(12, n, t, i | 2)), (e.elementType = xa), (e.lanes = o), e
        );
      case wa:
        return (e = Be(13, n, t, i)), (e.elementType = wa), (e.lanes = o), e;
      case Sa:
        return (e = Be(19, n, t, i)), (e.elementType = Sa), (e.lanes = o), e;
      case eh:
        return ds(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qf:
              s = 10;
              break e;
            case Jf:
              s = 9;
              break e;
            case Bl:
              s = 11;
              break e;
            case $l:
              s = 14;
              break e;
            case Dt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Be(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function yn(e, t, n, r) {
  return (e = Be(7, e, r, t)), (e.lanes = n), e;
}
function ds(e, t, n, r) {
  return (
    (e = Be(22, e, r, t)),
    (e.elementType = eh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Qs(e, t, n) {
  return (e = Be(6, e, null, t)), (e.lanes = n), e;
}
function Xs(e, t, n) {
  return (
    (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function wv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ds(0)),
    (this.expirationTimes = Ds(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ds(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Cu(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new wv(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Be(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    su(o),
    e
  );
}
function Sv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Kp(e) {
  if (!e) return Kt;
  e = e._reactInternals;
  e: {
    if (En(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return Hh(e, n, t);
  }
  return t;
}
function Gp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Cu(n, r, !0, e, i, o, s, a, l)),
    (e.context = Kp(null)),
    (n = e.current),
    (r = Se()),
    (i = Ut(n)),
    (o = gt(r, i)),
    (o.callback = t ?? null),
    Bt(n, o, i),
    (e.current.lanes = i),
    wi(e, i, r),
    Re(e, r),
    e
  );
}
function fs(e, t, n, r) {
  var i = t.current,
    o = Se(),
    s = Ut(i);
  return (
    (n = Kp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bt(i, t, s)),
    e !== null && (Je(e, i, s, o), co(e, i, s)),
    s
  );
}
function Go(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Tu(e, t) {
  yd(e, t), (e = e.alternate) && yd(e, t);
}
function kv() {
  return null;
}
var Yp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Pu(e) {
  this._internalRoot = e;
}
hs.prototype.render = Pu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  fs(e, t, null, null);
};
hs.prototype.unmount = Pu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function () {
      fs(null, e, null, null);
    }),
      (t[xt] = null);
  }
};
function hs(e) {
  this._internalRoot = e;
}
hs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Th();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++);
    Lt.splice(n, 0, e), n === 0 && Eh(e);
  }
};
function Eu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ps(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function vd() {}
function Cv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Go(s);
        o.call(u);
      };
    }
    var s = Gp(t, r, e, 0, null, !1, !1, "", vd);
    return (
      (e._reactRootContainer = s),
      (e[xt] = s.current),
      ni(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Go(l);
      a.call(u);
    };
  }
  var l = Cu(e, 0, !1, null, null, !1, !1, "", vd);
  return (
    (e._reactRootContainer = l),
    (e[xt] = l.current),
    ni(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
      fs(t, l, n, r);
    }),
    l
  );
}
function ms(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Go(s);
        a.call(l);
      };
    }
    fs(t, s, e, i);
  } else s = Cv(n, t, e, i, r);
  return Go(s);
}
kh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rr(t.pendingLanes);
        n !== 0 &&
          (Hl(t, n | 1), Re(t, ne()), !(O & 6) && ((ir = ne() + 500), qt()));
      }
      break;
    case 13:
      Tn(function () {
        var r = wt(e, 1);
        if (r !== null) {
          var i = Se();
          Je(r, e, 1, i);
        }
      }),
        Tu(e, 1);
  }
};
Kl = function (e) {
  if (e.tag === 13) {
    var t = wt(e, 134217728);
    if (t !== null) {
      var n = Se();
      Je(t, e, 134217728, n);
    }
    Tu(e, 134217728);
  }
};
Ch = function (e) {
  if (e.tag === 13) {
    var t = Ut(e),
      n = wt(e, t);
    if (n !== null) {
      var r = Se();
      Je(n, e, t, r);
    }
    Tu(e, t);
  }
};
Th = function () {
  return z;
};
Ph = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
Aa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ta(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = os(r);
            if (!i) throw Error(N(90));
            nh(r), Ta(r, i);
          }
        }
      }
      break;
    case "textarea":
      ih(e, n);
      break;
    case "select":
      (t = n.value), t != null && Hn(e, !!n.multiple, t, !1);
  }
};
dh = xu;
fh = Tn;
var Tv = { usingClientEntryPoint: !1, Events: [ki, Vn, os, uh, ch, xu] },
  Tr = {
    findFiberByHostInstance: dn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Pv = {
    bundleType: Tr.bundleType,
    version: Tr.version,
    rendererPackageName: Tr.rendererPackageName,
    rendererConfig: Tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = mh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tr.findFiberByHostInstance || kv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ji = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ji.isDisabled && Ji.supportsFiber)
    try {
      (ts = Ji.inject(Pv)), (it = Ji);
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tv;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Eu(t)) throw Error(N(200));
  return Sv(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!Eu(e)) throw Error(N(299));
  var n = !1,
    r = "",
    i = Yp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Cu(e, 1, !1, null, null, n, !1, r, i)),
    (e[xt] = t.current),
    ni(e.nodeType === 8 ? e.parentNode : e),
    new Pu(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = mh(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
  return Tn(e);
};
Ie.hydrate = function (e, t, n) {
  if (!ps(t)) throw Error(N(200));
  return ms(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!Eu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Yp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Gp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[xt] = t.current),
    ni(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new hs(t);
};
Ie.render = function (e, t, n) {
  if (!ps(t)) throw Error(N(200));
  return ms(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!ps(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Tn(function () {
        ms(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xt] = null);
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = xu;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ps(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return ms(e, t, n, !1, r);
};
Ie.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Ie);
})(k0);
var xd = ga;
(ma.createRoot = xd.createRoot), (ma.hydrateRoot = xd.hydrateRoot);
const Ev = "modulepreload",
  Nv = function (e) {
    return "/" + e;
  },
  wd = {},
  Mv = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = Nv(o)), o in wd)) return;
        wd[o] = !0;
        const s = o.endsWith(".css"),
          a = s ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let c = i.length - 1; c >= 0; c--) {
            const d = i[c];
            if (d.href === o && (!s || d.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${a}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = s ? "stylesheet" : Ev),
          s || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = o),
          document.head.appendChild(u),
          s)
        )
          return new Promise((c, d) => {
            u.addEventListener("load", c),
              u.addEventListener("error", () =>
                d(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    ).then(() => t());
  };
var Sd = "popstate";
function Rv(e = {}) {
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return cl(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : di(i);
  }
  return Av(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ut(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Dv() {
  return Math.random().toString(36).substring(2, 10);
}
function kd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function cl(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? cr(t) : t),
    state: n,
    key: (t && t.key) || r || Dv(),
  };
}
function di({ pathname: e = "/", search: t = "", hash: n = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function cr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Av(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = "POP",
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState({ ...s.state, idx: u }, ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = "POP";
    let k = c(),
      p = k == null ? null : k - u;
    (u = k), l && l({ action: a, location: w.location, delta: p });
  }
  function f(k, p) {
    a = "PUSH";
    let h = cl(w.location, k, p);
    n && n(h, k), (u = c() + 1);
    let m = kd(h, u),
      S = w.createHref(h);
    try {
      s.pushState(m, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(S);
    }
    o && l && l({ action: a, location: w.location, delta: 1 });
  }
  function y(k, p) {
    a = "REPLACE";
    let h = cl(w.location, k, p);
    n && n(h, k), (u = c());
    let m = kd(h, u),
      S = w.createHref(h);
    s.replaceState(m, "", S),
      o && l && l({ action: a, location: w.location, delta: 0 });
  }
  function v(k) {
    return Lv(k);
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(k) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Sd, d),
        (l = k),
        () => {
          i.removeEventListener(Sd, d), (l = null);
        }
      );
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: v,
    encodeLocation(k) {
      let p = v(k);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: y,
    go(k) {
      return s.go(k);
    },
  };
  return w;
}
function Lv(e, t = !1) {
  let n = "http://localhost";
  typeof window < "u" &&
    (n =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    X(n, "No window.location.(origin|href) available to create URL");
  let r = typeof e == "string" ? e : di(e);
  return (
    (r = r.replace(/ $/, "%20")),
    !t && r.startsWith("//") && (r = n + r),
    new URL(r, n)
  );
}
function Qp(e, t, n = "/") {
  return Vv(e, t, n, !1);
}
function Vv(e, t, n, r) {
  let i = typeof t == "string" ? cr(t) : t,
    o = kt(i.pathname || "/", n);
  if (o == null) return null;
  let s = Xp(e);
  bv(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = Hv(o);
    a = Uv(s[l], u, r);
  }
  return a;
}
function Xp(e, t = [], n = [], r = "", i = !1) {
  let o = (s, a, l = i, u) => {
    let c = {
      relativePath: u === void 0 ? s.path || "" : u,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s,
    };
    if (c.relativePath.startsWith("/")) {
      if (!c.relativePath.startsWith(r) && l) return;
      X(
        c.relativePath.startsWith(r),
        `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (c.relativePath = c.relativePath.slice(r.length));
    }
    let d = yt([r, c.relativePath]),
      f = n.concat(c);
    s.children &&
      s.children.length > 0 &&
      (X(
        s.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${d}".`
      ),
      Xp(s.children, t, f, d, l)),
      !(s.path == null && !s.index) &&
        t.push({ path: d, score: Bv(d, s.index), routesMeta: f });
  };
  return (
    e.forEach((s, a) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, a);
      else for (let u of Zp(s.path)) o(s, a, !0, u);
    }),
    t
  );
}
function Zp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Zp(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function bv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : $v(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var Iv = /^:[\w-]+$/,
  _v = 3,
  Fv = 2,
  Ov = 1,
  zv = 10,
  jv = -2,
  Cd = (e) => e === "*";
function Bv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Cd) && (r += jv),
    t && (r += Fv),
    n
      .filter((i) => !Cd(i))
      .reduce((i, o) => i + (Iv.test(o) ? _v : o === "" ? Ov : zv), r)
  );
}
function $v(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Uv(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      d = Yo(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Yo(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      s.push({
        params: i,
        pathname: yt([o, d.pathname]),
        pathnameBase: Qv(yt([o, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (o = yt([o, d.pathnameBase]));
  }
  return s;
}
function Yo(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Wv(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, { paramName: c, isOptional: d }, f) => {
      if (c === "*") {
        let v = a[f] || "";
        s = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[f];
      return (
        d && !y ? (u[c] = void 0) : (u[c] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Wv(e, t = !1, n = !0) {
  ut(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Hv(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ut(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function kt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Kv(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? cr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Gv(n, t)) : t,
    search: Xv(r),
    hash: Zv(i),
  };
}
function Gv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Zs(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Yv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function qp(e) {
  let t = Yv(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function Jp(e, t, n, r = !1) {
  let i;
  typeof e == "string"
    ? (i = cr(e))
    : ((i = { ...e }),
      X(
        !i.pathname || !i.pathname.includes("?"),
        Zs("?", "pathname", "search", i)
      ),
      X(
        !i.pathname || !i.pathname.includes("#"),
        Zs("#", "pathname", "hash", i)
      ),
      X(!i.search || !i.search.includes("#"), Zs("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = Kv(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
var yt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Qv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Xv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Zv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function qv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var Jv = ["POST", "PUT", "PATCH", "DELETE"];
[...Jv];
var dr = x.createContext(null);
dr.displayName = "DataRouter";
var gs = x.createContext(null);
gs.displayName = "DataRouterState";
x.createContext(!1);
var em = x.createContext({ isTransitioning: !1 });
em.displayName = "ViewTransition";
var e1 = x.createContext(new Map());
e1.displayName = "Fetchers";
var t1 = x.createContext(null);
t1.displayName = "Await";
var ct = x.createContext(null);
ct.displayName = "Navigation";
var Ti = x.createContext(null);
Ti.displayName = "Location";
var Et = x.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Et.displayName = "Route";
var Nu = x.createContext(null);
Nu.displayName = "RouteError";
function n1(e, { relative: t } = {}) {
  X(Pi(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: n, navigator: r } = x.useContext(ct),
    { hash: i, pathname: o, search: s } = Ei(e, { relative: t }),
    a = o;
  return (
    n !== "/" && (a = o === "/" ? n : yt([n, o])),
    r.createHref({ pathname: a, search: s, hash: i })
  );
}
function Pi() {
  return x.useContext(Ti) != null;
}
function Jt() {
  return (
    X(
      Pi(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    x.useContext(Ti).location
  );
}
var tm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function nm(e) {
  x.useContext(ct).static || x.useLayoutEffect(e);
}
function r1() {
  let { isDataRoute: e } = x.useContext(Et);
  return e ? g1() : i1();
}
function i1() {
  X(
    Pi(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = x.useContext(dr),
    { basename: t, navigator: n } = x.useContext(ct),
    { matches: r } = x.useContext(Et),
    { pathname: i } = Jt(),
    o = JSON.stringify(qp(r)),
    s = x.useRef(!1);
  return (
    nm(() => {
      s.current = !0;
    }),
    x.useCallback(
      (l, u = {}) => {
        if ((ut(s.current, tm), !s.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let c = Jp(l, JSON.parse(o), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : yt([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, o, i, e]
    )
  );
}
x.createContext(null);
function Ei(e, { relative: t } = {}) {
  let { matches: n } = x.useContext(Et),
    { pathname: r } = Jt(),
    i = JSON.stringify(qp(n));
  return x.useMemo(() => Jp(e, JSON.parse(i), r, t === "path"), [e, i, r, t]);
}
function o1(e, t) {
  return rm(e, t);
}
function rm(e, t, n, r, i) {
  var h;
  X(
    Pi(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o } = x.useContext(ct),
    { matches: s } = x.useContext(Et),
    a = s[s.length - 1],
    l = a ? a.params : {},
    u = a ? a.pathname : "/",
    c = a ? a.pathnameBase : "/",
    d = a && a.route;
  {
    let m = (d && d.path) || "";
    im(
      u,
      !d || m.endsWith("*") || m.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${
        m === "/" ? "*" : `${m}/*`
      }">.`
    );
  }
  let f = Jt(),
    y;
  if (t) {
    let m = typeof t == "string" ? cr(t) : t;
    X(
      c === "/" || ((h = m.pathname) == null ? void 0 : h.startsWith(c)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${m.pathname}" was given in the \`location\` prop.`
    ),
      (y = m);
  } else y = f;
  let v = y.pathname || "/",
    w = v;
  if (c !== "/") {
    let m = c.replace(/^\//, "").split("/");
    w = "/" + v.replace(/^\//, "").split("/").slice(m.length).join("/");
  }
  let k = Qp(e, { pathname: w });
  ut(
    d || k != null,
    `No routes matched location "${y.pathname}${y.search}${y.hash}" `
  ),
    ut(
      k == null ||
        k[k.length - 1].route.element !== void 0 ||
        k[k.length - 1].route.Component !== void 0 ||
        k[k.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let p = c1(
    k &&
      k.map((m) =>
        Object.assign({}, m, {
          params: Object.assign({}, l, m.params),
          pathname: yt([
            c,
            o.encodeLocation
              ? o.encodeLocation(m.pathname).pathname
              : m.pathname,
          ]),
          pathnameBase:
            m.pathnameBase === "/"
              ? c
              : yt([
                  c,
                  o.encodeLocation
                    ? o.encodeLocation(m.pathnameBase).pathname
                    : m.pathnameBase,
                ]),
        })
      ),
    s,
    n,
    r,
    i
  );
  return t && p
    ? x.createElement(
        Ti.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...y,
            },
            navigationType: "POP",
          },
        },
        p
      )
    : p;
}
function s1() {
  let e = m1(),
    t = qv(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    i = { padding: "0.5rem", backgroundColor: r },
    o = { padding: "2px 4px", backgroundColor: r },
    s = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (s = x.createElement(
      x.Fragment,
      null,
      x.createElement("p", null, "💿 Hey developer 👋"),
      x.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        x.createElement("code", { style: o }, "ErrorBoundary"),
        " or",
        " ",
        x.createElement("code", { style: o }, "errorElement"),
        " prop on your route."
      )
    )),
    x.createElement(
      x.Fragment,
      null,
      x.createElement("h2", null, "Unexpected Application Error!"),
      x.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? x.createElement("pre", { style: i }, n) : null,
      s
    )
  );
}
var a1 = x.createElement(s1, null),
  l1 = class extends x.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.unstable_onError
        ? this.props.unstable_onError(e, t)
        : console.error(
            "React Router caught the following error during render",
            e
          );
    }
    render() {
      return this.state.error !== void 0
        ? x.createElement(
            Et.Provider,
            { value: this.props.routeContext },
            x.createElement(Nu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function u1({ routeContext: e, match: t, children: n }) {
  let r = x.useContext(dr);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    x.createElement(Et.Provider, { value: e }, n)
  );
}
function c1(e, t = [], n = null, r = null, i = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let o = e,
    s = n == null ? void 0 : n.errors;
  if (s != null) {
    let u = o.findIndex(
      (c) => c.route.id && (s == null ? void 0 : s[c.route.id]) !== void 0
    );
    X(
      u >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        s
      ).join(",")}`
    ),
      (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  let a = !1,
    l = -1;
  if (n)
    for (let u = 0; u < o.length; u++) {
      let c = o[u];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (l = u),
        c.route.id)
      ) {
        let { loaderData: d, errors: f } = n,
          y =
            c.route.loader &&
            !d.hasOwnProperty(c.route.id) &&
            (!f || f[c.route.id] === void 0);
        if (c.route.lazy || y) {
          (a = !0), l >= 0 ? (o = o.slice(0, l + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((u, c, d) => {
    let f,
      y = !1,
      v = null,
      w = null;
    n &&
      ((f = s && c.route.id ? s[c.route.id] : void 0),
      (v = c.route.errorElement || a1),
      a &&
        (l < 0 && d === 0
          ? (im(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (y = !0),
            (w = null))
          : l === d &&
            ((y = !0), (w = c.route.hydrateFallbackElement || null))));
    let k = t.concat(o.slice(0, d + 1)),
      p = () => {
        let h;
        return (
          f
            ? (h = v)
            : y
            ? (h = w)
            : c.route.Component
            ? (h = x.createElement(c.route.Component, null))
            : c.route.element
            ? (h = c.route.element)
            : (h = u),
          x.createElement(u1, {
            match: c,
            routeContext: { outlet: u, matches: k, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || d === 0)
      ? x.createElement(l1, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: f,
          children: p(),
          routeContext: { outlet: null, matches: k, isDataRoute: !0 },
          unstable_onError: r,
        })
      : p();
  }, null);
}
function Mu(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function d1(e) {
  let t = x.useContext(dr);
  return X(t, Mu(e)), t;
}
function f1(e) {
  let t = x.useContext(gs);
  return X(t, Mu(e)), t;
}
function h1(e) {
  let t = x.useContext(Et);
  return X(t, Mu(e)), t;
}
function Ru(e) {
  let t = h1(e),
    n = t.matches[t.matches.length - 1];
  return (
    X(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function p1() {
  return Ru("useRouteId");
}
function m1() {
  var r;
  let e = x.useContext(Nu),
    t = f1("useRouteError"),
    n = Ru("useRouteError");
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function g1() {
  let { router: e } = d1("useNavigate"),
    t = Ru("useNavigate"),
    n = x.useRef(!1);
  return (
    nm(() => {
      n.current = !0;
    }),
    x.useCallback(
      async (i, o = {}) => {
        ut(n.current, tm),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : await e.navigate(i, { fromRouteId: t, ...o }));
      },
      [e, t]
    )
  );
}
var Td = {};
function im(e, t, n) {
  !t && !Td[e] && ((Td[e] = !0), ut(!1, n));
}
x.memo(y1);
function y1({ routes: e, future: t, state: n, unstable_onError: r }) {
  return rm(e, void 0, n, r, t);
}
function ln(e) {
  X(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function v1({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: i,
  static: o = !1,
}) {
  X(
    !Pi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let s = e.replace(/^\/*/, "/"),
    a = x.useMemo(
      () => ({ basename: s, navigator: i, static: o, future: {} }),
      [s, i, o]
    );
  typeof n == "string" && (n = cr(n));
  let {
      pathname: l = "/",
      search: u = "",
      hash: c = "",
      state: d = null,
      key: f = "default",
    } = n,
    y = x.useMemo(() => {
      let v = kt(l, s);
      return v == null
        ? null
        : {
            location: { pathname: v, search: u, hash: c, state: d, key: f },
            navigationType: r,
          };
    }, [s, l, u, c, d, f, r]);
  return (
    ut(
      y != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    y == null
      ? null
      : x.createElement(
          ct.Provider,
          { value: a },
          x.createElement(Ti.Provider, { children: t, value: y })
        )
  );
}
function x1({ children: e, location: t }) {
  return o1(dl(e), t);
}
function dl(e, t = []) {
  let n = [];
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === x.Fragment) {
        n.push.apply(n, dl(r.props.children, o));
        return;
      }
      X(
        r.type === ln,
        `[${
          typeof r.type == "string" ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        X(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        );
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = dl(r.props.children, o)), n.push(s);
    }),
    n
  );
}
var vo = "get",
  xo = "application/x-www-form-urlencoded";
function ys(e) {
  return e != null && typeof e.tagName == "string";
}
function w1(e) {
  return ys(e) && e.tagName.toLowerCase() === "button";
}
function S1(e) {
  return ys(e) && e.tagName.toLowerCase() === "form";
}
function k1(e) {
  return ys(e) && e.tagName.toLowerCase() === "input";
}
function C1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function T1(e, t) {
  return e.button === 0 && (!t || t === "_self") && !C1(e);
}
var eo = null;
function P1() {
  if (eo === null)
    try {
      new FormData(document.createElement("form"), 0), (eo = !1);
    } catch {
      eo = !0;
    }
  return eo;
}
var E1 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function qs(e) {
  return e != null && !E1.has(e)
    ? (ut(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xo}"`
      ),
      null)
    : e;
}
function N1(e, t) {
  let n, r, i, o, s;
  if (S1(e)) {
    let a = e.getAttribute("action");
    (r = a ? kt(a, t) : null),
      (n = e.getAttribute("method") || vo),
      (i = qs(e.getAttribute("enctype")) || xo),
      (o = new FormData(e));
  } else if (w1(e) || (k1(e) && (e.type === "submit" || e.type === "image"))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || a.getAttribute("action");
    if (
      ((r = l ? kt(l, t) : null),
      (n = e.getAttribute("formmethod") || a.getAttribute("method") || vo),
      (i =
        qs(e.getAttribute("formenctype")) ||
        qs(a.getAttribute("enctype")) ||
        xo),
      (o = new FormData(a, e)),
      !P1())
    ) {
      let { name: u, type: c, value: d } = e;
      if (c === "image") {
        let f = u ? `${u}.` : "";
        o.append(`${f}x`, "0"), o.append(`${f}y`, "0");
      } else u && o.append(u, d);
    }
  } else {
    if (ys(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = vo), (r = null), (i = xo), (s = e);
  }
  return (
    o && i === "text/plain" && ((s = o), (o = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: o, body: s }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Du(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function M1(e, t, n) {
  let r =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    r.pathname === "/"
      ? (r.pathname = `_root.${n}`)
      : t && kt(r.pathname, t) === "/"
      ? (r.pathname = `${t.replace(/\/$/, "")}/_root.${n}`)
      : (r.pathname = `${r.pathname.replace(/\/$/, "")}.${n}`),
    r
  );
}
async function R1(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await Mv(() => import(e.module), []);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function D1(e) {
  return e != null && typeof e.page == "string";
}
function A1(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function L1(e, t, n) {
  let r = await Promise.all(
    e.map(async (i) => {
      let o = t.routes[i.route.id];
      if (o) {
        let s = await R1(o, n);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return _1(
    r
      .flat(1)
      .filter(A1)
      .filter((i) => i.rel === "stylesheet" || i.rel === "preload")
      .map((i) =>
        i.rel === "stylesheet"
          ? { ...i, rel: "prefetch", as: "style" }
          : { ...i, rel: "prefetch" }
      )
  );
}
function Pd(e, t, n, r, i, o) {
  let s = (l, u) => (n[u] ? l.route.id !== n[u].route.id : !0),
    a = (l, u) => {
      var c;
      return (
        n[u].pathname !== l.pathname ||
        (((c = n[u].route.path) == null ? void 0 : c.endsWith("*")) &&
          n[u].params["*"] !== l.params["*"])
      );
    };
  return o === "assets"
    ? t.filter((l, u) => s(l, u) || a(l, u))
    : o === "data"
    ? t.filter((l, u) => {
        var d;
        let c = r.routes[l.route.id];
        if (!c || !c.hasLoader) return !1;
        if (s(l, u) || a(l, u)) return !0;
        if (l.route.shouldRevalidate) {
          let f = l.route.shouldRevalidate({
            currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
            currentParams: ((d = n[0]) == null ? void 0 : d.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: l.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof f == "boolean") return f;
        }
        return !0;
      })
    : [];
}
function V1(e, t, { includeHydrateFallback: n } = {}) {
  return b1(
    e
      .map((r) => {
        let i = t.routes[r.route.id];
        if (!i) return [];
        let o = [i.module];
        return (
          i.clientActionModule && (o = o.concat(i.clientActionModule)),
          i.clientLoaderModule && (o = o.concat(i.clientLoaderModule)),
          n &&
            i.hydrateFallbackModule &&
            (o = o.concat(i.hydrateFallbackModule)),
          i.imports && (o = o.concat(i.imports)),
          o
        );
      })
      .flat(1)
  );
}
function b1(e) {
  return [...new Set(e)];
}
function I1(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function _1(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((i, o) => {
    if (t && !D1(o) && o.as === "script" && o.href && r.has(o.href)) return i;
    let a = JSON.stringify(I1(o));
    return n.has(a) || (n.add(a), i.push({ key: a, link: o })), i;
  }, []);
}
function om() {
  let e = x.useContext(dr);
  return (
    Du(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function F1() {
  let e = x.useContext(gs);
  return (
    Du(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var Au = x.createContext(void 0);
Au.displayName = "FrameworkContext";
function sm() {
  let e = x.useContext(Au);
  return (
    Du(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function O1(e, t) {
  let n = x.useContext(Au),
    [r, i] = x.useState(!1),
    [o, s] = x.useState(!1),
    {
      onFocus: a,
      onBlur: l,
      onMouseEnter: u,
      onMouseLeave: c,
      onTouchStart: d,
    } = t,
    f = x.useRef(null);
  x.useEffect(() => {
    if ((e === "render" && s(!0), e === "viewport")) {
      let w = (p) => {
          p.forEach((h) => {
            s(h.isIntersecting);
          });
        },
        k = new IntersectionObserver(w, { threshold: 0.5 });
      return (
        f.current && k.observe(f.current),
        () => {
          k.disconnect();
        }
      );
    }
  }, [e]),
    x.useEffect(() => {
      if (r) {
        let w = setTimeout(() => {
          s(!0);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [r]);
  let y = () => {
      i(!0);
    },
    v = () => {
      i(!1), s(!1);
    };
  return n
    ? e !== "intent"
      ? [o, f, {}]
      : [
          o,
          f,
          {
            onFocus: Pr(a, y),
            onBlur: Pr(l, v),
            onMouseEnter: Pr(u, y),
            onMouseLeave: Pr(c, v),
            onTouchStart: Pr(d, y),
          },
        ]
    : [!1, f, {}];
}
function Pr(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function z1({ page: e, ...t }) {
  let { router: n } = om(),
    r = x.useMemo(() => Qp(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? x.createElement(B1, { page: e, matches: r, ...t }) : null;
}
function j1(e) {
  let { manifest: t, routeModules: n } = sm(),
    [r, i] = x.useState([]);
  return (
    x.useEffect(() => {
      let o = !1;
      return (
        L1(e, t, n).then((s) => {
          o || i(s);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function B1({ page: e, matches: t, ...n }) {
  let r = Jt(),
    { manifest: i, routeModules: o } = sm(),
    { basename: s } = om(),
    { loaderData: a, matches: l } = F1(),
    u = x.useMemo(() => Pd(e, t, l, i, r, "data"), [e, t, l, i, r]),
    c = x.useMemo(() => Pd(e, t, l, i, r, "assets"), [e, t, l, i, r]),
    d = x.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let v = new Set(),
        w = !1;
      if (
        (t.forEach((p) => {
          var m;
          let h = i.routes[p.route.id];
          !h ||
            !h.hasLoader ||
            ((!u.some((S) => S.route.id === p.route.id) &&
              p.route.id in a &&
              (m = o[p.route.id]) != null &&
              m.shouldRevalidate) ||
            h.hasClientLoader
              ? (w = !0)
              : v.add(p.route.id));
        }),
        v.size === 0)
      )
        return [];
      let k = M1(e, s, "data");
      return (
        w &&
          v.size > 0 &&
          k.searchParams.set(
            "_routes",
            t
              .filter((p) => v.has(p.route.id))
              .map((p) => p.route.id)
              .join(",")
          ),
        [k.pathname + k.search]
      );
    }, [s, a, r, i, u, t, e, o]),
    f = x.useMemo(() => V1(c, i), [c, i]),
    y = j1(c);
  return x.createElement(
    x.Fragment,
    null,
    d.map((v) =>
      x.createElement("link", {
        key: v,
        rel: "prefetch",
        as: "fetch",
        href: v,
        ...n,
      })
    ),
    f.map((v) =>
      x.createElement("link", { key: v, rel: "modulepreload", href: v, ...n })
    ),
    y.map(({ key: v, link: w }) =>
      x.createElement("link", { key: v, nonce: n.nonce, ...w })
    )
  );
}
function $1(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var am =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  am && (window.__reactRouterVersion = "7.8.2");
} catch {}
function U1({ basename: e, children: t, window: n }) {
  let r = x.useRef();
  r.current == null && (r.current = Rv({ window: n, v5Compat: !0 }));
  let i = r.current,
    [o, s] = x.useState({ action: i.action, location: i.location }),
    a = x.useCallback(
      (l) => {
        x.startTransition(() => s(l));
      },
      [s]
    );
  return (
    x.useLayoutEffect(() => i.listen(a), [i, a]),
    x.createElement(v1, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: i,
    })
  );
}
var lm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ae = x.forwardRef(function (
    {
      onClick: t,
      discover: n = "render",
      prefetch: r = "none",
      relative: i,
      reloadDocument: o,
      replace: s,
      state: a,
      target: l,
      to: u,
      preventScrollReset: c,
      viewTransition: d,
      ...f
    },
    y
  ) {
    let { basename: v } = x.useContext(ct),
      w = typeof u == "string" && lm.test(u),
      k,
      p = !1;
    if (typeof u == "string" && w && ((k = u), am))
      try {
        let V = new URL(window.location.href),
          L = u.startsWith("//") ? new URL(V.protocol + u) : new URL(u),
          H = kt(L.pathname, v);
        L.origin === V.origin && H != null
          ? (u = H + L.search + L.hash)
          : (p = !0);
      } catch {
        ut(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let h = n1(u, { relative: i }),
      [m, S, C] = O1(r, f),
      P = G1(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: d,
      });
    function E(V) {
      t && t(V), V.defaultPrevented || P(V);
    }
    let T = x.createElement("a", {
      ...f,
      ...C,
      href: k || h,
      onClick: p || o ? t : E,
      ref: $1(y, S),
      target: l,
      "data-discover": !w && n === "render" ? "true" : void 0,
    });
    return m && !w
      ? x.createElement(x.Fragment, null, T, x.createElement(z1, { page: h }))
      : T;
  });
Ae.displayName = "Link";
var W1 = x.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: i = !1,
    style: o,
    to: s,
    viewTransition: a,
    children: l,
    ...u
  },
  c
) {
  let d = Ei(s, { relative: u.relative }),
    f = Jt(),
    y = x.useContext(gs),
    { navigator: v, basename: w } = x.useContext(ct),
    k = y != null && q1(d) && a === !0,
    p = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname,
    h = f.pathname,
    m =
      y && y.navigation && y.navigation.location
        ? y.navigation.location.pathname
        : null;
  n ||
    ((h = h.toLowerCase()),
    (m = m ? m.toLowerCase() : null),
    (p = p.toLowerCase())),
    m && w && (m = kt(m, w) || m);
  const S = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
  let C = h === p || (!i && h.startsWith(p) && h.charAt(S) === "/"),
    P =
      m != null &&
      (m === p || (!i && m.startsWith(p) && m.charAt(p.length) === "/")),
    E = { isActive: C, isPending: P, isTransitioning: k },
    T = C ? t : void 0,
    V;
  typeof r == "function"
    ? (V = r(E))
    : (V = [
        r,
        C ? "active" : null,
        P ? "pending" : null,
        k ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let L = typeof o == "function" ? o(E) : o;
  return x.createElement(
    Ae,
    {
      ...u,
      "aria-current": T,
      className: V,
      ref: c,
      style: L,
      to: s,
      viewTransition: a,
    },
    typeof l == "function" ? l(E) : l
  );
});
W1.displayName = "NavLink";
var H1 = x.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: o,
      method: s = vo,
      action: a,
      onSubmit: l,
      relative: u,
      preventScrollReset: c,
      viewTransition: d,
      ...f
    },
    y
  ) => {
    let v = X1(),
      w = Z1(a, { relative: u }),
      k = s.toLowerCase() === "get" ? "get" : "post",
      p = typeof a == "string" && lm.test(a),
      h = (m) => {
        if ((l && l(m), m.defaultPrevented)) return;
        m.preventDefault();
        let S = m.nativeEvent.submitter,
          C = (S == null ? void 0 : S.getAttribute("formmethod")) || s;
        v(S || m.currentTarget, {
          fetcherKey: t,
          method: C,
          navigate: n,
          replace: i,
          state: o,
          relative: u,
          preventScrollReset: c,
          viewTransition: d,
        });
      };
    return x.createElement("form", {
      ref: y,
      method: k,
      action: w,
      onSubmit: r ? l : h,
      ...f,
      "data-discover": !p && e === "render" ? "true" : void 0,
    });
  }
);
H1.displayName = "Form";
function K1(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function um(e) {
  let t = x.useContext(dr);
  return X(t, K1(e)), t;
}
function G1(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: i,
    relative: o,
    viewTransition: s,
  } = {}
) {
  let a = r1(),
    l = Jt(),
    u = Ei(e, { relative: o });
  return x.useCallback(
    (c) => {
      if (T1(c, t)) {
        c.preventDefault();
        let d = n !== void 0 ? n : di(l) === di(u);
        a(e, {
          replace: d,
          state: r,
          preventScrollReset: i,
          relative: o,
          viewTransition: s,
        });
      }
    },
    [l, a, u, n, r, t, e, i, o, s]
  );
}
var Y1 = 0,
  Q1 = () => `__${String(++Y1)}__`;
function X1() {
  let { router: e } = um("useSubmit"),
    { basename: t } = x.useContext(ct),
    n = p1();
  return x.useCallback(
    async (r, i = {}) => {
      let { action: o, method: s, encType: a, formData: l, body: u } = N1(r, t);
      if (i.navigate === !1) {
        let c = i.fetcherKey || Q1();
        await e.fetch(c, n, i.action || o, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: u,
          formMethod: i.method || s,
          formEncType: i.encType || a,
          flushSync: i.flushSync,
        });
      } else
        await e.navigate(i.action || o, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: u,
          formMethod: i.method || s,
          formEncType: i.encType || a,
          replace: i.replace,
          state: i.state,
          fromRouteId: n,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition,
        });
    },
    [e, t, n]
  );
}
function Z1(e, { relative: t } = {}) {
  let { basename: n } = x.useContext(ct),
    r = x.useContext(Et);
  X(r, "useFormAction must be used inside a RouteContext");
  let [i] = r.matches.slice(-1),
    o = { ...Ei(e || ".", { relative: t }) },
    s = Jt();
  if (e == null) {
    o.search = s.search;
    let a = new URLSearchParams(o.search),
      l = a.getAll("index");
    if (l.some((c) => c === "")) {
      a.delete("index"),
        l.filter((d) => d).forEach((d) => a.append("index", d));
      let c = a.toString();
      o.search = c ? `?${c}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      i.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (o.pathname = o.pathname === "/" ? n : yt([n, o.pathname])),
    di(o)
  );
}
function q1(e, { relative: t } = {}) {
  let n = x.useContext(em);
  X(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = um("useViewTransitionState"),
    i = Ei(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let o = kt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = kt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Yo(i.pathname, s) != null || Yo(i.pathname, o) != null;
}
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ex = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r) =>
      r ? r.toUpperCase() : n.toLowerCase()
    ),
  Ed = (e) => {
    const t = ex(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  cm = (...e) =>
    e
      .filter((t, n, r) => Boolean(t) && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim(),
  tx = (e) => {
    for (const t in e)
      if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  };
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var nx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rx = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: o,
      iconNode: s,
      ...a
    },
    l
  ) =>
    x.createElement(
      "svg",
      {
        ref: l,
        ...nx,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: cm("lucide", i),
        ...(!o && !tx(a) && { "aria-hidden": "true" }),
        ...a,
      },
      [
        ...s.map(([u, c]) => x.createElement(u, c)),
        ...(Array.isArray(o) ? o : [o]),
      ]
    )
);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dt = (e, t) => {
  const n = x.forwardRef(({ className: r, ...i }, o) =>
    x.createElement(rx, {
      ref: o,
      iconNode: t,
      className: cm(`lucide-${J1(Ed(e))}`, `lucide-${e}`, r),
      ...i,
    })
  );
  return (n.displayName = Ed(e)), n;
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ix = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  dm = dt("instagram", ix);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ox = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  fm = dt("linkedin", ox);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sx = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  hm = dt("mail", sx);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ax = [
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 18h16", key: "19g7jn" }],
    ["path", { d: "M4 6h16", key: "1o0s65" }],
  ],
  lx = dt("menu", ax);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ux = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  Ni = dt("message-circle", ux);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cx = [
    [
      "rect",
      { x: "5", y: "2", width: "14", height: "20", rx: "7", key: "11ol66" },
    ],
    ["path", { d: "M12 6v4", key: "16clxf" }],
  ],
  dx = dt("mouse", cx);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fx = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  Mi = dt("phone", fx);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hx = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  px = dt("play", hx);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mx = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  pm = dt("twitter", mx);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gx = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  yx = dt("x", gx),
  Lu = x.createContext({});
function Vu(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const bu = typeof window < "u",
  mm = bu ? x.useLayoutEffect : x.useEffect,
  vs = x.createContext(null);
function Iu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function _u(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Ct = (e, t, n) => (n > t ? t : n < e ? e : n);
let xs = () => {};
const Tt = {},
  gm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function ym(e) {
  return typeof e == "object" && e !== null;
}
const vm = (e) => /^0[^.\s]+$/u.test(e);
function Fu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ue = (e) => e,
  vx = (e, t) => (n) => t(e(n)),
  Ri = (...e) => e.reduce(vx),
  fi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class Ou {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Iu(this.subscriptions, t), () => _u(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const st = (e) => e * 1e3,
  at = (e) => e / 1e3;
function xm(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const wm = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  xx = 1e-7,
  wx = 12;
function Sx(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = wm(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > xx && ++a < wx);
  return s;
}
function Di(e, t, n, r) {
  if (e === t && n === r) return Ue;
  const i = (o) => Sx(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : wm(i(o), t, r));
}
const Sm = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  km = (e) => (t) => 1 - e(1 - t),
  Cm = Di(0.33, 1.53, 0.69, 0.99),
  zu = km(Cm),
  Tm = Sm(zu),
  Pm = (e) =>
    (e *= 2) < 1 ? 0.5 * zu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  ju = (e) => 1 - Math.sin(Math.acos(e)),
  Em = km(ju),
  Nm = Sm(ju),
  kx = Di(0.42, 0, 1, 1),
  Cx = Di(0, 0, 0.58, 1),
  Mm = Di(0.42, 0, 0.58, 1),
  Tx = (e) => Array.isArray(e) && typeof e[0] != "number",
  Rm = (e) => Array.isArray(e) && typeof e[0] == "number",
  Px = {
    linear: Ue,
    easeIn: kx,
    easeInOut: Mm,
    easeOut: Cx,
    circIn: ju,
    circInOut: Nm,
    circOut: Em,
    backIn: zu,
    backInOut: Tm,
    backOut: Cm,
    anticipate: Pm,
  },
  Ex = (e) => typeof e == "string",
  Nd = (e) => {
    if (Rm(e)) {
      xs(e.length === 4);
      const [t, n, r, i] = e;
      return Di(t, n, r, i);
    } else if (Ex(e)) return Px[e];
    return e;
  },
  to = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  bt = { value: null, addProjectionMetrics: null };
function Nx(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    o = !1;
  const s = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(d) {
    s.has(d) && (c.schedule(d), e()), l++, d(a);
  }
  const c = {
    schedule: (d, f = !1, y = !1) => {
      const w = y && i ? n : r;
      return f && s.add(d), w.has(d) || w.add(d), d;
    },
    cancel: (d) => {
      r.delete(d), s.delete(d);
    },
    process: (d) => {
      if (((a = d), i)) {
        o = !0;
        return;
      }
      (i = !0),
        ([n, r] = [r, n]),
        n.forEach(u),
        t && bt.value && bt.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        o && ((o = !1), c.process(d));
    },
  };
  return c;
}
const Mx = 40;
function Dm(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = to.reduce((m, S) => ((m[S] = Nx(o, t ? S : void 0)), m), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: f,
      render: y,
      postRender: v,
    } = s,
    w = () => {
      const m = Tt.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        Tt.useManualTiming ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, Mx), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        y.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(w));
    },
    k = () => {
      (n = !0), (r = !0), i.isProcessing || e(w);
    };
  return {
    schedule: to.reduce((m, S) => {
      const C = s[S];
      return (m[S] = (P, E = !1, T = !1) => (n || k(), C.schedule(P, E, T))), m;
    }, {}),
    cancel: (m) => {
      for (let S = 0; S < to.length; S++) s[to[S]].cancel(m);
    },
    state: i,
    steps: s,
  };
}
const {
  schedule: W,
  cancel: Gt,
  state: de,
  steps: Js,
} = Dm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0);
let wo;
function Rx() {
  wo = void 0;
}
const Ee = {
    now: () => (
      wo === void 0 &&
        Ee.set(
          de.isProcessing || Tt.useManualTiming
            ? de.timestamp
            : performance.now()
        ),
      wo
    ),
    set: (e) => {
      (wo = e), queueMicrotask(Rx);
    },
  },
  Br = { layout: 0, mainThread: 0, waapi: 0 },
  Am = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Bu = Am("--"),
  Dx = Am("var(--"),
  $u = (e) => (Dx(e) ? Ax.test(e.split("/*")[0].trim()) : !1),
  Ax =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  fr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  hi = { ...fr, transform: (e) => Ct(0, 1, e) },
  no = { ...fr, default: 1 },
  $r = (e) => Math.round(e * 1e5) / 1e5,
  Uu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Lx(e) {
  return e == null;
}
const Vx =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Wu = (e, t) => (n) =>
    Boolean(
      (typeof n == "string" && Vx.test(n) && n.startsWith(e)) ||
        (t && !Lx(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Lm = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(Uu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  bx = (e) => Ct(0, 255, e),
  ea = { ...fr, transform: (e) => Math.round(bx(e)) },
  pn = {
    test: Wu("rgb", "red"),
    parse: Lm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      ea.transform(e) +
      ", " +
      ea.transform(t) +
      ", " +
      ea.transform(n) +
      ", " +
      $r(hi.transform(r)) +
      ")",
  };
function Ix(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const fl = { test: Wu("#"), parse: Ix, transform: pn.transform },
  Ai = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Rt = Ai("deg"),
  lt = Ai("%"),
  I = Ai("px"),
  _x = Ai("vh"),
  Fx = Ai("vw"),
  Md = (() => ({
    ...lt,
    parse: (e) => lt.parse(e) / 100,
    transform: (e) => lt.transform(e * 100),
  }))(),
  jn = {
    test: Wu("hsl", "hue"),
    parse: Lm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      lt.transform($r(t)) +
      ", " +
      lt.transform($r(n)) +
      ", " +
      $r(hi.transform(r)) +
      ")",
  },
  re = {
    test: (e) => pn.test(e) || fl.test(e) || jn.test(e),
    parse: (e) =>
      pn.test(e) ? pn.parse(e) : jn.test(e) ? jn.parse(e) : fl.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? pn.transform(e)
        : jn.transform(e),
    getAnimatableNone: (e) => {
      const t = re.parse(e);
      return (t.alpha = 0), re.transform(t);
    },
  },
  Ox =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function zx(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Uu)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(Ox)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Vm = "number",
  bm = "color",
  jx = "var",
  Bx = "var(",
  Rd = "${}",
  $x =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      $x,
      (l) => (
        re.test(l)
          ? (r.color.push(o), i.push(bm), n.push(re.parse(l)))
          : l.startsWith(Bx)
          ? (r.var.push(o), i.push(jx), n.push(l))
          : (r.number.push(o), i.push(Vm), n.push(parseFloat(l))),
        ++o,
        Rd
      )
    )
    .split(Rd);
  return { values: n, split: a, indexes: r, types: i };
}
function Im(e) {
  return pi(e).values;
}
function _m(e) {
  const { split: t, types: n } = pi(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Vm
          ? (o += $r(i[s]))
          : a === bm
          ? (o += re.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const Ux = (e) =>
  typeof e == "number" ? 0 : re.test(e) ? re.getAnimatableNone(e) : e;
function Wx(e) {
  const t = Im(e);
  return _m(e)(t.map(Ux));
}
const Yt = {
  test: zx,
  parse: Im,
  createTransformer: _m,
  getAnimatableNone: Wx,
};
function ta(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Hx({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = ta(l, a, e + 1 / 3)), (o = ta(l, a, e)), (s = ta(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Qo(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Y = (e, t, n) => e + (t - e) * n,
  na = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Kx = [fl, pn, jn],
  Gx = (e) => Kx.find((t) => t.test(e));
function Dd(e) {
  const t = Gx(e);
  if (!Boolean(t)) return !1;
  let n = t.parse(e);
  return t === jn && (n = Hx(n)), n;
}
const Ad = (e, t) => {
    const n = Dd(e),
      r = Dd(t);
    if (!n || !r) return Qo(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = na(n.red, r.red, o)),
      (i.green = na(n.green, r.green, o)),
      (i.blue = na(n.blue, r.blue, o)),
      (i.alpha = Y(n.alpha, r.alpha, o)),
      pn.transform(i)
    );
  },
  hl = new Set(["none", "hidden"]);
function Yx(e, t) {
  return hl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Qx(e, t) {
  return (n) => Y(e, t, n);
}
function Hu(e) {
  return typeof e == "number"
    ? Qx
    : typeof e == "string"
    ? $u(e)
      ? Qo
      : re.test(e)
      ? Ad
      : qx
    : Array.isArray(e)
    ? Fm
    : typeof e == "object"
    ? re.test(e)
      ? Ad
      : Xx
    : Qo;
}
function Fm(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Hu(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function Xx(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Hu(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function Zx(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      s = e.indexes[o][r[o]],
      a = e.values[s] ?? 0;
    (n[i] = a), r[o]++;
  }
  return n;
}
const qx = (e, t) => {
  const n = Yt.createTransformer(t),
    r = pi(e),
    i = pi(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (hl.has(e) && !i.values.length) || (hl.has(t) && !r.values.length)
      ? Yx(e, t)
      : Ri(Fm(Zx(r, i), i.values), n)
    : Qo(e, t);
};
function Om(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Y(e, t, n)
    : Hu(e)(e, t);
}
const Jx = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => W.update(t, n),
      stop: () => Gt(t),
      now: () => (de.isProcessing ? de.timestamp : Ee.now()),
    };
  },
  zm = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++)
      r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Xo = 2e4;
function Ku(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Xo; ) (t += n), (r = e.next(t));
  return t >= Xo ? 1 / 0 : t;
}
function ew(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(Ku(r), Xo);
  return {
    type: "keyframes",
    ease: (o) => r.next(i * o).value / t,
    duration: at(i),
  };
}
const tw = 5;
function jm(e, t, n) {
  const r = Math.max(t - tw, 0);
  return xm(n - e(r), t - r);
}
const q = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  ra = 0.001;
function nw({
  duration: e = q.duration,
  bounce: t = q.bounce,
  velocity: n = q.velocity,
  mass: r = q.mass,
}) {
  let i,
    o,
    s = 1 - t;
  (s = Ct(q.minDamping, q.maxDamping, s)),
    (e = Ct(q.minDuration, q.maxDuration, at(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            y = pl(u, s),
            v = Math.exp(-d);
          return ra - (f / y) * v;
        }),
        (o = (u) => {
          const d = u * s * e,
            f = d * n + n,
            y = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            w = pl(Math.pow(u, 2), s);
          return ((-i(u) + ra > 0 ? -1 : 1) * ((f - y) * v)) / w;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -ra + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = iw(i, o, a);
  if (((e = st(e)), isNaN(l)))
    return { stiffness: q.stiffness, damping: q.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const rw = 12;
function iw(e, t, n) {
  let r = n;
  for (let i = 1; i < rw; i++) r = r - e(r) / t(r);
  return r;
}
function pl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const ow = ["duration", "bounce"],
  sw = ["stiffness", "damping", "mass"];
function Ld(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function aw(e) {
  let t = {
    velocity: q.velocity,
    stiffness: q.stiffness,
    damping: q.damping,
    mass: q.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Ld(e, sw) && Ld(e, ow))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * Ct(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: q.mass, stiffness: i, damping: o };
    } else {
      const n = nw(e);
      (t = { ...t, ...n, mass: q.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Zo(e = q.visualDuration, t = q.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: y,
    } = aw({ ...n, velocity: -at(n.velocity || 0) }),
    v = f || 0,
    w = u / (2 * Math.sqrt(l * c)),
    k = s - o,
    p = at(Math.sqrt(l / c)),
    h = Math.abs(k) < 5;
  r || (r = h ? q.restSpeed.granular : q.restSpeed.default),
    i || (i = h ? q.restDelta.granular : q.restDelta.default);
  let m;
  if (w < 1) {
    const C = pl(p, w);
    m = (P) => {
      const E = Math.exp(-w * p * P);
      return (
        s - E * (((v + w * p * k) / C) * Math.sin(C * P) + k * Math.cos(C * P))
      );
    };
  } else if (w === 1) m = (C) => s - Math.exp(-p * C) * (k + (v + p * k) * C);
  else {
    const C = p * Math.sqrt(w * w - 1);
    m = (P) => {
      const E = Math.exp(-w * p * P),
        T = Math.min(C * P, 300);
      return (
        s - (E * ((v + w * p * k) * Math.sinh(T) + C * k * Math.cosh(T))) / C
      );
    };
  }
  const S = {
    calculatedDuration: (y && d) || null,
    next: (C) => {
      const P = m(C);
      if (y) a.done = C >= d;
      else {
        let E = C === 0 ? v : 0;
        w < 1 && (E = C === 0 ? st(v) : jm(m, C, P));
        const T = Math.abs(E) <= r,
          V = Math.abs(s - P) <= i;
        a.done = T && V;
      }
      return (a.value = a.done ? s : P), a;
    },
    toString: () => {
      const C = Math.min(Ku(S), Xo),
        P = zm((E) => S.next(C * E).value, C, 30);
      return C + "ms " + P;
    },
    toTransition: () => {},
  };
  return S;
}
Zo.applyToOptions = (e) => {
  const t = ew(e, 100, Zo);
  return (
    (e.ease = t.ease), (e.duration = st(t.duration)), (e.type = "keyframes"), e
  );
};
function ml({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    y = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    v = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
        ? a
        : l;
  let w = n * t;
  const k = d + w,
    p = s === void 0 ? k : s(k);
  p !== k && (w = p - d);
  const h = (T) => -w * Math.exp(-T / r),
    m = (T) => p + h(T),
    S = (T) => {
      const V = h(T),
        L = m(T);
      (f.done = Math.abs(V) <= u), (f.value = f.done ? p : L);
    };
  let C, P;
  const E = (T) => {
    y(f.value) &&
      ((C = T),
      (P = Zo({
        keyframes: [f.value, v(f.value)],
        velocity: jm(m, T, f.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let V = !1;
        return (
          !P && C === void 0 && ((V = !0), S(T), E(T)),
          C !== void 0 && T >= C ? P.next(T - C) : (!V && S(T), f)
        );
      },
    }
  );
}
function lw(e, t, n) {
  const r = [],
    i = n || Tt.mix || Om,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ue : t;
      a = Ri(l, a);
    }
    r.push(a);
  }
  return r;
}
function uw(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((xs(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = lw(t, r, i),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = fi(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(Ct(e[0], e[o - 1], c)) : u;
}
function cw(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = fi(0, t, r);
    e.push(Y(n, 1, i));
  }
}
function dw(e) {
  const t = [0];
  return cw(t, e.length - 1), t;
}
function fw(e, t) {
  return e.map((n) => n * t);
}
function hw(e, t) {
  return e.map(() => t || Mm).splice(0, e.length - 1);
}
function Ur({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Tx(r) ? r.map(Nd) : Nd(r),
    o = { done: !1, value: t[0] },
    s = fw(n && n.length === t.length ? n : dw(t), e),
    a = uw(s, t, { ease: Array.isArray(i) ? i : hw(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const pw = (e) => e !== null;
function Gu(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const o = e.filter(pw),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : o.length - 1;
  return !a || r === void 0 ? o[a] : r;
}
const mw = { decay: ml, inertia: ml, tween: Ur, keyframes: Ur, spring: Zo };
function Bm(e) {
  typeof e.type == "string" && (e.type = mw[e.type]);
}
class Yu {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const gw = (e) => e / 100;
class Qu extends Yu {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== Ee.now() && this.tick(Ee.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r));
      }),
      Br.mainThread++,
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Bm(t);
    const {
      type: n = Ur,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o,
      velocity: s = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Ur;
    l !== Ur &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = Ri(gw, Om(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    o === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -s,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = Ku(u));
    const { calculatedDuration: c } = u;
    (this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u);
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: s,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: f,
      repeatDelay: y,
      type: v,
      onUpdate: w,
      finalKeyframe: k,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t);
    const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      h = this.playbackSpeed >= 0 ? p < 0 : p > i;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i);
    let m = this.currentTime,
      S = r;
    if (d) {
      const T = Math.min(this.currentTime, i) / a;
      let V = Math.floor(T),
        L = T % 1;
      !L && T >= 1 && (L = 1),
        L === 1 && V--,
        (V = Math.min(V, d + 1)),
        Boolean(V % 2) &&
          (f === "reverse"
            ? ((L = 1 - L), y && (L -= y / a))
            : f === "mirror" && (S = s)),
        (m = Ct(0, 1, L) * a);
    }
    const C = h ? { done: !1, value: c[0] } : S.next(m);
    o && (C.value = o(C.value));
    let { done: P } = C;
    !h &&
      l !== null &&
      (P =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      E && v !== ml && (C.value = Gu(c, this.options, k, this.speed)),
      w && w(C.value),
      E && this.finish(),
      C
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return at(this.calculatedDuration);
  }
  get time() {
    return at(this.currentTime);
  }
  set time(t) {
    var n;
    (t = st(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Ee.now());
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = at(this.currentTime));
  }
  play() {
    var i, o;
    if (this.isStopped) return;
    const { driver: t = Jx, startTime: n } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))),
      (o = (i = this.options).onPlay) == null || o.call(i);
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(Ee.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var t, n;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null),
      Br.mainThread--;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function yw(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const mn = (e) => (e * 180) / Math.PI,
  gl = (e) => {
    const t = mn(Math.atan2(e[1], e[0]));
    return yl(t);
  },
  vw = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: gl,
    rotateZ: gl,
    skewX: (e) => mn(Math.atan(e[1])),
    skewY: (e) => mn(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  yl = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Vd = gl,
  bd = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Id = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  xw = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: bd,
    scaleY: Id,
    scale: (e) => (bd(e) + Id(e)) / 2,
    rotateX: (e) => yl(mn(Math.atan2(e[6], e[5]))),
    rotateY: (e) => yl(mn(Math.atan2(-e[2], e[0]))),
    rotateZ: Vd,
    rotate: Vd,
    skewX: (e) => mn(Math.atan(e[4])),
    skewY: (e) => mn(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function vl(e) {
  return e.includes("scale") ? 1 : 0;
}
function xl(e, t) {
  if (!e || e === "none") return vl(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) (r = xw), (i = n);
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = vw), (i = a);
  }
  if (!i) return vl(t);
  const o = r[t],
    s = i[1].split(",").map(Sw);
  return typeof o == "function" ? o(s) : s[o];
}
const ww = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return xl(n, t);
};
function Sw(e) {
  return parseFloat(e.trim());
}
const hr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  pr = (() => new Set(hr))(),
  _d = (e) => e === fr || e === I,
  kw = new Set(["x", "y", "z"]),
  Cw = hr.filter((e) => !kw.has(e));
function Tw(e) {
  const t = [];
  return (
    Cw.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const vn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => xl(t, "x"),
  y: (e, { transform: t }) => xl(t, "y"),
};
vn.translateX = vn.x;
vn.translateY = vn.y;
const xn = new Set();
let wl = !1,
  Sl = !1,
  kl = !1;
function $m() {
  if (Sl) {
    const e = Array.from(xn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = Tw(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) == null || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Sl = !1), (wl = !1), xn.forEach((e) => e.complete(kl)), xn.clear();
}
function Um() {
  xn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Sl = !0);
  });
}
function Pw() {
  (kl = !0), Um(), $m(), (kl = !1);
}
class Xu {
  constructor(t, n, r, i, o, s = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (xn.add(this), wl || ((wl = !0), W.read(Um), W.resolveKeyframes($m)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const o = i == null ? void 0 : i.get(),
        s = t[t.length - 1];
      if (o !== void 0) t[0] = o;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = s), i && o === void 0 && i.set(t[0]);
    }
    yw(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      xn.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (xn.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Ew = (e) => e.startsWith("--");
function Nw(e, t, n) {
  Ew(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const Mw = Fu(() => window.ScrollTimeline !== void 0),
  Rw = {};
function Dw(e, t) {
  const n = Fu(e);
  return () => Rw[t] ?? n();
}
const Wm = Dw(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Ar = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Fd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ar([0, 0.65, 0.55, 1]),
    circOut: Ar([0.55, 0, 1, 0.45]),
    backIn: Ar([0.31, 0.01, 0.66, -0.59]),
    backOut: Ar([0.33, 1.53, 0.69, 0.99]),
  };
function Hm(e, t) {
  if (e)
    return typeof e == "function"
      ? Wm()
        ? zm(e, t)
        : "ease-out"
      : Rm(e)
      ? Ar(e)
      : Array.isArray(e)
      ? e.map((n) => Hm(n, t) || Fd.easeOut)
      : Fd[e];
}
function Aw(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = Hm(a, i);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal",
  };
  return u && (f.pseudoElement = u), e.animate(c, f);
}
function Km(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function Lw({ type: e, ...t }) {
  return Km(e) && Wm()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Vw extends Yu {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: s = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    (this.isPseudoElement = Boolean(o)),
      (this.allowFlatten = s),
      (this.options = t),
      xs(typeof t.type != "string");
    const u = Lw(t);
    (this.animation = Aw(n, r, i, u, o)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const c = Gu(i, this.options, a, this.speed);
          this.updateMotionValue ? this.updateMotionValue(c) : Nw(n, r, c),
            this.animation.cancel();
        }
        l == null || l(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement ||
      (n = (t = this.animation).commitStyles) == null ||
      n.call(t);
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return at(Number(t));
  }
  get time() {
    return at(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    (this.finishedTime = null), (this.animation.currentTime = st(t));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && Mw() ? ((this.animation.timeline = t), Ue) : n(this)
    );
  }
}
const Gm = { anticipate: Pm, backInOut: Tm, circInOut: Nm };
function bw(e) {
  return e in Gm;
}
function Iw(e) {
  typeof e.ease == "string" && bw(e.ease) && (e.ease = Gm[e.ease]);
}
const Od = 10;
class _w extends Vw {
  constructor(t) {
    Iw(t),
      Bm(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: o,
      ...s
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Qu({ ...s, autoplay: !1 }),
      l = st(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - Od).value, a.sample(l).value, Od), a.stop();
  }
}
const zd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Yt.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Fw(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Ow(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = zd(i, t),
    a = zd(o, t);
  return !s || !a ? !1 : Fw(e) || ((n === "spring" || Km(n)) && r);
}
function Cl(e) {
  (e.duration = 0), e.type;
}
const zw = new Set(["opacity", "clipPath", "filter", "transform"]),
  jw = Fu(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Bw(e) {
  var c;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: o,
    type: s,
  } = e;
  if (
    !(
      ((c = t == null ? void 0 : t.owner) == null
        ? void 0
        : c.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    jw() &&
    n &&
    zw.has(n) &&
    (n !== "transform" || !u) &&
    !l &&
    !r &&
    i !== "mirror" &&
    o !== 0 &&
    s !== "inertia"
  );
}
const $w = 40;
class Uw extends Yu {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...d
  }) {
    var v;
    super(),
      (this.stop = () => {
        var w, k;
        this._animation &&
          (this._animation.stop(),
          (w = this.stopTimeline) == null || w.call(this)),
          (k = this.keyframeResolver) == null || k.cancel();
      }),
      (this.createdAt = Ee.now());
    const f = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        name: l,
        motionValue: u,
        element: c,
        ...d,
      },
      y = (c == null ? void 0 : c.KeyframeResolver) || Xu;
    (this.keyframeResolver = new y(
      a,
      (w, k, p) => this.onKeyframesResolved(w, k, f, !p),
      l,
      u,
      c
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const {
      name: o,
      type: s,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    (this.resolvedAt = Ee.now()),
      Ow(t, o, s, a) ||
        ((Tt.instantAnimations || !l) && (c == null || c(Gu(t, r, n))),
        (t[0] = t[t.length - 1]),
        Cl(r),
        (r.repeat = 0));
    const f = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > $w
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      y =
        !u && Bw(f)
          ? new _w({ ...f, element: f.motionValue.owner.current })
          : new Qu(f);
    y.finished.then(() => this.notifyFinished()).catch(Ue),
      this.pendingTimeline &&
        ((this.stopTimeline = y.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = y);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), Pw()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel();
  }
}
const Ww = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Hw(e) {
  const t = Ww.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Ym(e, t, n = 1) {
  const [r, i] = Hw(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return gm(s) ? parseFloat(s) : s;
  }
  return $u(i) ? Ym(i, t, n + 1) : i;
}
function Zu(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Qm = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...hr,
  ]),
  Kw = { test: (e) => e === "auto", parse: (e) => e },
  Xm = (e) => (t) => t.test(e),
  Zm = [fr, I, lt, Rt, Fx, _x, Kw],
  jd = (e) => Zm.find(Xm(e));
function Gw(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || vm(e)
    : !0;
}
const Yw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Qw(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Uu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Yw.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Xw = /\b([a-z-]*)\(.*?\)/gu,
  Tl = {
    ...Yt,
    getAnimatableNone: (e) => {
      const t = e.match(Xw);
      return t ? t.map(Qw).join(" ") : e;
    },
  },
  Bd = { ...fr, transform: Math.round },
  Zw = {
    rotate: Rt,
    rotateX: Rt,
    rotateY: Rt,
    rotateZ: Rt,
    scale: no,
    scaleX: no,
    scaleY: no,
    scaleZ: no,
    skew: Rt,
    skewX: Rt,
    skewY: Rt,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: hi,
    originX: Md,
    originY: Md,
    originZ: I,
  },
  qu = {
    borderWidth: I,
    borderTopWidth: I,
    borderRightWidth: I,
    borderBottomWidth: I,
    borderLeftWidth: I,
    borderRadius: I,
    radius: I,
    borderTopLeftRadius: I,
    borderTopRightRadius: I,
    borderBottomRightRadius: I,
    borderBottomLeftRadius: I,
    width: I,
    maxWidth: I,
    height: I,
    maxHeight: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    backgroundPositionX: I,
    backgroundPositionY: I,
    ...Zw,
    zIndex: Bd,
    fillOpacity: hi,
    strokeOpacity: hi,
    numOctaves: Bd,
  },
  qw = {
    ...qu,
    color: re,
    backgroundColor: re,
    outlineColor: re,
    fill: re,
    stroke: re,
    borderColor: re,
    borderTopColor: re,
    borderRightColor: re,
    borderBottomColor: re,
    borderLeftColor: re,
    filter: Tl,
    WebkitFilter: Tl,
  },
  qm = (e) => qw[e];
function Jm(e, t) {
  let n = qm(e);
  return (
    n !== Tl && (n = Yt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Jw = new Set(["auto", "none", "0"]);
function eS(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !Jw.has(o) && pi(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = Jm(n, i);
}
class tS extends Xu {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), $u(u))) {
        const c = Ym(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !Qm.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = jd(i),
      a = jd(o);
    if (s !== a)
      if (_d(s) && _d(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else vn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || Gw(t[i])) && r.push(i);
    r.length && eS(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = vn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1,
      s = r[o];
    (r[o] = vn[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function nS(e, t, n) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let r = document;
    t && (r = t.current);
    const i = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const eg = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function tg(e) {
  return ym(e) && "offsetHeight" in e;
}
const $d = 30,
  rS = (e) => !isNaN(parseFloat(e));
class iS {
  constructor(t, n = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var o;
        const i = Ee.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((o = this.events.change) == null || o.notify(this.current),
            this.dependents))
        )
          for (const s of this.dependents) s.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Ee.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = rS(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ou());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            W.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Ee.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > $d
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, $d);
    return xm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    (t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function or(e, t) {
  return new iS(e, t);
}
const { schedule: Ju, cancel: dC } = Dm(queueMicrotask, !1),
  Ye = { x: !1, y: !1 };
function ng() {
  return Ye.x || Ye.y;
}
function oS(e) {
  return e === "x" || e === "y"
    ? Ye[e]
      ? null
      : ((Ye[e] = !0),
        () => {
          Ye[e] = !1;
        })
    : Ye.x || Ye.y
    ? null
    : ((Ye.x = Ye.y = !0),
      () => {
        Ye.x = Ye.y = !1;
      });
}
function rg(e, t) {
  const n = nS(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Ud(e) {
  return !(e.pointerType === "touch" || ng());
}
function sS(e, t, n = {}) {
  const [r, i, o] = rg(e, n),
    s = (a) => {
      if (!Ud(a)) return;
      const { target: l } = a,
        u = t(l, a);
      if (typeof u != "function" || !l) return;
      const c = (d) => {
        Ud(d) && (u(d), l.removeEventListener("pointerleave", c));
      };
      l.addEventListener("pointerleave", c, i);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", s, i);
    }),
    o
  );
}
const ig = (e, t) => (t ? (e === t ? !0 : ig(e, t.parentElement)) : !1),
  ec = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  aS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function lS(e) {
  return aS.has(e.tagName) || e.tabIndex !== -1;
}
const So = new WeakSet();
function Wd(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ia(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const uS = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Wd(() => {
    if (So.has(n)) return;
    ia(n, "down");
    const i = Wd(() => {
        ia(n, "up");
      }),
      o = () => ia(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Hd(e) {
  return ec(e) && !ng();
}
function cS(e, t, n = {}) {
  const [r, i, o] = rg(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!Hd(a)) return;
      So.add(l);
      const u = t(l, a),
        c = (y, v) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            So.has(l) && So.delete(l),
            Hd(y) && typeof u == "function" && u(y, { success: v });
        },
        d = (y) => {
          c(
            y,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              ig(l, y.target)
          );
        },
        f = (y) => {
          c(y, !1);
        };
      window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i);
    };
  return (
    r.forEach((a) => {
      (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        tg(a) &&
          (a.addEventListener("focus", (u) => uS(u, i)),
          !lS(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
    }),
    o
  );
}
function og(e) {
  return ym(e) && "ownerSVGElement" in e;
}
function dS(e) {
  return og(e) && e.tagName === "svg";
}
const ye = (e) => Boolean(e && e.getVelocity),
  fS = [...Zm, re, Yt],
  hS = (e) => fS.find(Xm(e)),
  tc = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class pS extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        i = (tg(r) && r.offsetWidth) || 0,
        o = this.props.sizeRef.current;
      (o.height = n.offsetHeight || 0),
        (o.width = n.offsetWidth || 0),
        (o.top = n.offsetTop),
        (o.left = n.offsetLeft),
        (o.right = i - o.width - o.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function mS({ children: e, isPresent: t, anchorX: n, root: r }) {
  const i = x.useId(),
    o = x.useRef(null),
    s = x.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: a } = x.useContext(tc);
  return (
    x.useInsertionEffect(() => {
      const { width: l, height: u, top: c, left: d, right: f } = s.current;
      if (t || !o.current || !l || !u) return;
      const y = n === "left" ? `left: ${d}` : `right: ${f}`;
      o.current.dataset.motionPopId = i;
      const v = document.createElement("style");
      a && (v.nonce = a);
      const w = r ?? document.head;
      return (
        w.appendChild(v),
        v.sheet &&
          v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            ${y}px !important;
            top: ${c}px !important;
          }
        `),
        () => {
          w.contains(v) && w.removeChild(v);
        }
      );
    }, [t]),
    g(pS, {
      isPresent: t,
      childRef: o,
      sizeRef: s,
      children: x.cloneElement(e, { ref: o }),
    })
  );
}
const gS = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
  anchorX: a,
  root: l,
}) => {
  const u = Vu(yS),
    c = x.useId();
  let d = !0,
    f = x.useMemo(
      () => (
        (d = !1),
        {
          id: c,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (y) => {
            u.set(y, !0);
            for (const v of u.values()) if (!v) return;
            r && r();
          },
          register: (y) => (u.set(y, !1), () => u.delete(y)),
        }
      ),
      [n, u, r]
    );
  return (
    o && d && (f = { ...f }),
    x.useMemo(() => {
      u.forEach((y, v) => u.set(v, !1));
    }, [n]),
    x.useEffect(() => {
      !n && !u.size && r && r();
    }, [n]),
    s === "popLayout" &&
      (e = g(mS, { isPresent: n, anchorX: a, root: l, children: e })),
    g(vs.Provider, { value: f, children: e })
  );
};
function yS() {
  return new Map();
}
function sg(e = !0) {
  const t = x.useContext(vs);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = x.useId();
  x.useEffect(() => {
    if (e) return i(o);
  }, [e]);
  const s = x.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const ro = (e) => e.key || "";
function Kd(e) {
  const t = [];
  return (
    x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const mi = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: o = "sync",
    propagate: s = !1,
    anchorX: a = "left",
    root: l,
  }) => {
    const [u, c] = sg(s),
      d = x.useMemo(() => Kd(e), [e]),
      f = s && !u ? [] : d.map(ro),
      y = x.useRef(!0),
      v = x.useRef(d),
      w = Vu(() => new Map()),
      [k, p] = x.useState(d),
      [h, m] = x.useState(d);
    mm(() => {
      (y.current = !1), (v.current = d);
      for (let P = 0; P < h.length; P++) {
        const E = ro(h[P]);
        f.includes(E) ? w.delete(E) : w.get(E) !== !0 && w.set(E, !1);
      }
    }, [h, f.length, f.join("-")]);
    const S = [];
    if (d !== k) {
      let P = [...d];
      for (let E = 0; E < h.length; E++) {
        const T = h[E],
          V = ro(T);
        f.includes(V) || (P.splice(E, 0, T), S.push(T));
      }
      return o === "wait" && S.length && (P = S), m(Kd(P)), p(d), null;
    }
    const { forceRender: C } = x.useContext(Lu);
    return g(Qt, {
      children: h.map((P) => {
        const E = ro(P),
          T = s && !u ? !1 : d === h || f.includes(E),
          V = () => {
            if (w.has(E)) w.set(E, !0);
            else return;
            let L = !0;
            w.forEach((H) => {
              H || (L = !1);
            }),
              L &&
                (C == null || C(),
                m(v.current),
                s && (c == null || c()),
                r && r());
          };
        return g(
          gS,
          {
            isPresent: T,
            initial: !y.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: o,
            root: l,
            onExitComplete: T ? void 0 : V,
            anchorX: a,
            children: P,
          },
          E
        );
      }),
    });
  },
  ag = x.createContext({ strict: !1 }),
  Gd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  sr = {};
for (const e in Gd) sr[e] = { isEnabled: (t) => Gd[e].some((n) => !!t[n]) };
function vS(e) {
  for (const t in e) sr[t] = { ...sr[t], ...e[t] };
}
const xS = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function qo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    xS.has(e)
  );
}
let lg = (e) => !qo(e);
function wS(e) {
  typeof e == "function" && (lg = (t) => (t.startsWith("on") ? !qo(t) : e(t)));
}
try {
  wS(require("@emotion/is-prop-valid").default);
} catch {}
function SS(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((lg(i) ||
        (n === !0 && qo(i)) ||
        (!t && !qo(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
const ws = x.createContext({});
function Ss(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function gi(e) {
  return typeof e == "string" || Array.isArray(e);
}
const nc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  rc = ["initial", ...nc];
function ks(e) {
  return Ss(e.animate) || rc.some((t) => gi(e[t]));
}
function ug(e) {
  return Boolean(ks(e) || e.variants);
}
function kS(e, t) {
  if (ks(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || gi(n) ? n : void 0,
      animate: gi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function CS(e) {
  const { initial: t, animate: n } = kS(e, x.useContext(ws));
  return x.useMemo(() => ({ initial: t, animate: n }), [Yd(t), Yd(n)]);
}
function Yd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const yi = {};
function TS(e) {
  for (const t in e) (yi[t] = e[t]), Bu(t) && (yi[t].isCSSVariable = !0);
}
function cg(e, { layout: t, layoutId: n }) {
  return (
    pr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!yi[e] || e === "opacity"))
  );
}
const PS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  ES = hr.length;
function NS(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < ES; o++) {
    const s = hr[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = eg(a, qu[s]);
      if (!l) {
        i = !1;
        const c = PS[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function ic(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (pr.has(l)) {
      s = !0;
      continue;
    } else if (Bu(l)) {
      i[l] = u;
      continue;
    } else {
      const c = eg(u, qu[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = NS(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const oc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function dg(e, t, n) {
  for (const r in t) !ye(t[r]) && !cg(r, n) && (e[r] = t[r]);
}
function MS({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = oc();
    return ic(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function RS(e, t) {
  const n = e.style || {},
    r = {};
  return dg(r, n, e), Object.assign(r, MS(e, t)), r;
}
function DS(e, t) {
  const n = {},
    r = RS(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const AS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  LS = { offset: "strokeDashoffset", array: "strokeDasharray" };
function VS(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? AS : LS;
  e[o.offset] = I.transform(-r);
  const s = I.transform(t),
    a = I.transform(n);
  e[o.array] = `${s} ${a}`;
}
function fg(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: o = 1,
    pathOffset: s = 0,
    ...a
  },
  l,
  u,
  c
) {
  if ((ic(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: f } = e;
  d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete d.transformBox),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && VS(d, i, o, s, !1);
}
const hg = () => ({ ...oc(), attrs: {} }),
  pg = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function bS(e, t, n, r) {
  const i = x.useMemo(() => {
    const o = hg();
    return (
      fg(o, t, pg(r), e.transformTemplate, e.style),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    dg(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
const IS = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function sc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(IS.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function _S(e, t, n, { latestValues: r }, i, o = !1) {
  const a = (sc(e) ? bS : DS)(t, r, i, e),
    l = SS(t, typeof e == "string", o),
    u = e !== x.Fragment ? { ...l, ...a, ref: n } : {},
    { children: c } = t,
    d = x.useMemo(() => (ye(c) ? c.get() : c), [c]);
  return x.createElement(e, { ...u, children: d });
}
function Qd(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function ac(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = Qd(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = Qd(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function ko(e) {
  return ye(e) ? e.get() : e;
}
function FS({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: OS(n, r, i, e), renderState: t() };
}
function OS(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const f in o) i[f] = ko(o[f]);
  let { initial: s, animate: a } = e;
  const l = ks(e),
    u = ug(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  if (d && typeof d != "boolean" && !Ss(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let y = 0; y < f.length; y++) {
      const v = ac(e, f[y]);
      if (v) {
        const { transitionEnd: w, transition: k, ...p } = v;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const S = c ? m.length - 1 : 0;
            m = m[S];
          }
          m !== null && (i[h] = m);
        }
        for (const h in w) i[h] = w[h];
      }
    }
  }
  return i;
}
const mg = (e) => (t, n) => {
  const r = x.useContext(ws),
    i = x.useContext(vs),
    o = () => FS(e, t, r, i);
  return n ? o() : Vu(o);
};
function lc(e, t, n) {
  var o;
  const { style: r } = e,
    i = {};
  for (const s in r)
    (ye(r[s]) ||
      (t.style && ye(t.style[s])) ||
      cg(s, e) ||
      ((o = n == null ? void 0 : n.getValue(s)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (i[s] = r[s]);
  return i;
}
const zS = mg({ scrapeMotionValuesFromProps: lc, createRenderState: oc });
function gg(e, t, n) {
  const r = lc(e, t, n);
  for (const i in e)
    if (ye(e[i]) || ye(t[i])) {
      const o =
        hr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
const jS = mg({ scrapeMotionValuesFromProps: gg, createRenderState: hg }),
  BS = Symbol.for("motionComponentSymbol");
function Bn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function $S(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Bn(n) && (n.current = r));
    },
    [t]
  );
}
const uc = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  US = "framerAppearId",
  yg = "data-" + uc(US),
  vg = x.createContext({});
function WS(e, t, n, r, i) {
  var w, k;
  const { visualElement: o } = x.useContext(ws),
    s = x.useContext(ag),
    a = x.useContext(vs),
    l = x.useContext(tc).reducedMotion,
    u = x.useRef(null);
  (r = r || s.renderer),
    !u.current &&
      r &&
      (u.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const c = u.current,
    d = x.useContext(vg);
  c &&
    !c.projection &&
    i &&
    (c.type === "html" || c.type === "svg") &&
    HS(u.current, n, i, d);
  const f = x.useRef(!1);
  x.useInsertionEffect(() => {
    c && f.current && c.update(n, a);
  });
  const y = n[yg],
    v = x.useRef(
      Boolean(y) &&
        !((w = window.MotionHandoffIsComplete) != null && w.call(window, y)) &&
        ((k = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : k.call(window, y))
    );
  return (
    mm(() => {
      c &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        c.updateFeatures(),
        c.scheduleRenderMicrotask(),
        v.current && c.animationState && c.animationState.animateChanges());
    }),
    x.useEffect(() => {
      c &&
        (!v.current && c.animationState && c.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) == null ||
              p.call(window, y);
          }),
          (v.current = !1)),
        (c.enteringChildren = void 0));
    }),
    c
  );
}
function HS(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : xg(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: Boolean(s) || (a && Bn(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function xg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : xg(e.parent);
}
function oa(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  n && vS(n);
  const i = sc(e) ? jS : zS;
  function o(a, l) {
    let u;
    const c = { ...x.useContext(tc), ...a, layoutId: KS(a) },
      { isStatic: d } = c,
      f = CS(a),
      y = i(a, d);
    if (!d && bu) {
      GS();
      const v = YS(c);
      (u = v.MeasureLayout),
        (f.visualElement = WS(e, y, c, r, v.ProjectionNode));
    }
    return M(ws.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? g(u, { visualElement: f.visualElement, ...c })
          : null,
        _S(e, a, $S(y, f.visualElement, l), y, d, t),
      ],
    });
  }
  o.displayName = `motion.${
    typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`
  }`;
  const s = x.forwardRef(o);
  return (s[BS] = e), s;
}
function KS({ layoutId: e }) {
  const t = x.useContext(Lu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function GS(e, t) {
  x.useContext(ag).strict;
}
function YS(e) {
  const { drag: t, layout: n } = sr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function QS(e, t) {
  if (typeof Proxy > "u") return oa;
  const n = new Map(),
    r = (o, s) => oa(o, s, e, t),
    i = (o, s) => r(o, s);
  return new Proxy(i, {
    get: (o, s) =>
      s === "create"
        ? r
        : (n.has(s) || n.set(s, oa(s, void 0, e, t)), n.get(s)),
  });
}
function wg({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function XS({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function ZS(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function sa(e) {
  return e === void 0 || e === 1;
}
function Pl({ scale: e, scaleX: t, scaleY: n }) {
  return !sa(e) || !sa(t) || !sa(n);
}
function un(e) {
  return (
    Pl(e) ||
    Sg(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Sg(e) {
  return Xd(e.x) || Xd(e.y);
}
function Xd(e) {
  return e && e !== "0%";
}
function Jo(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Zd(e, t, n, r, i) {
  return i !== void 0 && (e = Jo(e, i, r)), Jo(e, n, r) + t;
}
function El(e, t = 0, n = 1, r, i) {
  (e.min = Zd(e.min, t, n, r, i)), (e.max = Zd(e.max, t, n, r, i));
}
function kg(e, { x: t, y: n }) {
  El(e.x, t.translate, t.scale, t.originPoint),
    El(e.y, n.translate, n.scale, n.originPoint);
}
const qd = 0.999999999999,
  Jd = 1.0000000000001;
function qS(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Un(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), kg(e, s)),
      r && un(o.latestValues) && Un(e, o.latestValues));
  }
  t.x < Jd && t.x > qd && (t.x = 1), t.y < Jd && t.y > qd && (t.y = 1);
}
function $n(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function ef(e, t, n, r, i = 0.5) {
  const o = Y(e.min, e.max, i);
  El(e, t, n, o, r);
}
function Un(e, t) {
  ef(e.x, t.x, t.scaleX, t.scale, t.originX),
    ef(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Cg(e, t) {
  return wg(ZS(e.getBoundingClientRect(), t));
}
function JS(e, t, n) {
  const r = Cg(e, n),
    { scroll: i } = t;
  return i && ($n(r.x, i.offset.x), $n(r.y, i.offset.y)), r;
}
const tf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Wn = () => ({ x: tf(), y: tf() }),
  nf = () => ({ min: 0, max: 0 }),
  te = () => ({ x: nf(), y: nf() }),
  Nl = { current: null },
  Tg = { current: !1 };
function e2() {
  if (((Tg.current = !0), !!bu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Nl.current = e.matches);
      e.addEventListener("change", t), t();
    } else Nl.current = !1;
}
const t2 = new WeakMap();
function n2(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (ye(i)) e.addValue(r, i);
    else if (ye(o)) e.addValue(r, or(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, or(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const rf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class r2 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Xu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const f = Ee.now();
        this.renderScheduledAt < f &&
          ((this.renderScheduledAt = f), W.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = Boolean(o)),
      (this.isControllingVariants = ks(n)),
      (this.isVariantNode = ug(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = Boolean(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const y = d[f];
      l[f] !== void 0 && ye(y) && y.set(l[f]);
    }
  }
  mount(t) {
    var n;
    (this.current = t),
      t2.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, i) => this.bindToMotionValue(i, r)),
      Tg.current || e2(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Nl.current),
      (n = this.parent) == null || n.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(),
      Gt(this.notifyUpdate),
      Gt(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = pr.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (s) => {
      (this.latestValues[t] = s),
        this.props.onUpdate && W.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in sr) {
      const n = sr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : te();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < rf.length; r++) {
      const i = rf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = n2(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = or(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options);
    return (
      r != null &&
        (typeof r == "string" && (gm(r) || vm(r))
          ? (r = parseFloat(r))
          : !hS(r) && Yt.test(n) && (r = Jm(t, n)),
        this.setBaseTarget(t, ye(r) ? r.get() : r)),
      ye(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var o;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = ac(
        this.props,
        n,
        (o = this.presenceContext) == null ? void 0 : o.custom
      );
      s && (r = s[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !ye(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ou()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Ju.render(this.render);
  }
}
class Pg extends r2 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = tS);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ye(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Eg(e, { style: t, vars: n }, r, i) {
  const o = e.style;
  let s;
  for (s in t) o[s] = t[s];
  i == null || i.applyProjectionStyles(o, r);
  for (s in n) o.setProperty(s, n[s]);
}
function i2(e) {
  return window.getComputedStyle(e);
}
class o2 extends Pg {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Eg);
  }
  readValueFromInstance(t, n) {
    var r;
    if (pr.has(n))
      return (r = this.projection) != null && r.isProjecting ? vl(n) : ww(t, n);
    {
      const i = i2(t),
        o = (Bu(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Cg(t, n);
  }
  build(t, n, r) {
    ic(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return lc(t, n, r);
  }
}
const Ng = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function s2(e, t, n, r) {
  Eg(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Ng.has(i) ? i : uc(i), t.attrs[i]);
}
class a2 extends Pg {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = te);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (pr.has(n)) {
      const r = qm(n);
      return (r && r.default) || 0;
    }
    return (n = Ng.has(n) ? n : uc(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return gg(t, n, r);
  }
  build(t, n, r) {
    fg(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    s2(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = pg(t.tagName)), super.mount(t);
  }
}
const l2 = (e, t) =>
  sc(e) ? new a2(t) : new o2(t, { allowProjection: e !== x.Fragment });
function Zn(e, t, n) {
  const r = e.getProps();
  return ac(r, t, n !== void 0 ? n : r.custom, e);
}
const Ml = (e) => Array.isArray(e);
function u2(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, or(n));
}
function c2(e) {
  return Ml(e) ? e[e.length - 1] || 0 : e;
}
function d2(e, t) {
  const n = Zn(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = c2(o[s]);
    u2(e, s, a);
  }
}
function f2(e) {
  return Boolean(ye(e) && e.add);
}
function Rl(e, t) {
  const n = e.getValue("willChange");
  if (f2(n)) return n.add(t);
  if (!n && Tt.WillChange) {
    const r = new Tt.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Mg(e) {
  return e.props[yg];
}
const h2 = (e) => e !== null;
function p2(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(h2),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const m2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  g2 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  y2 = { type: "keyframes", duration: 0.8 },
  v2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  x2 = (e, { keyframes: t }) =>
    t.length > 2
      ? y2
      : pr.has(e)
      ? e.startsWith("scale")
        ? g2(t[1])
        : m2
      : v2;
function w2({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const cc =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = Zu(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - st(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    w2(a) || Object.assign(c, x2(e, c)),
      c.duration && (c.duration = st(c.duration)),
      c.repeatDelay && (c.repeatDelay = st(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (Cl(c), c.delay === 0 && (d = !0)),
      (Tt.instantAnimations || Tt.skipAnimations) &&
        ((d = !0), Cl(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      d && !o && t.get() !== void 0)
    ) {
      const f = p2(c.keyframes, a);
      if (f !== void 0) {
        W.update(() => {
          c.onUpdate(f), c.onComplete();
        });
        return;
      }
    }
    return a.isSync ? new Qu(c) : new Uw(c);
  };
function S2({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Rg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = t;
  r && (o = r);
  const l = [],
    u = i && e.animationState && e.animationState.getState()[i];
  for (const c in a) {
    const d = e.getValue(c, e.latestValues[c] ?? null),
      f = a[c];
    if (f === void 0 || (u && S2(u, c))) continue;
    const y = { delay: n, ...Zu(o || {}, c) },
      v = d.get();
    if (
      v !== void 0 &&
      !d.isAnimating &&
      !Array.isArray(f) &&
      f === v &&
      !y.velocity
    )
      continue;
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const p = Mg(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, c, W);
        h !== null && ((y.startTime = h), (w = !0));
      }
    }
    Rl(e, c),
      d.start(
        cc(c, d, f, e.shouldReduceMotion && Qm.has(c) ? { type: !1 } : y, e, w)
      );
    const k = d.animation;
    k && l.push(k);
  }
  return (
    s &&
      Promise.all(l).then(() => {
        W.update(() => {
          s && d2(e, s);
        });
      }),
    l
  );
}
function Dg(e, t, n, r = 0, i = 1) {
  const o = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    s = e.size,
    a = (s - 1) * r;
  return typeof n == "function" ? n(o, s) : i === 1 ? o * r : a - o * r;
}
function Dl(e, t, n = {}) {
  var l;
  const r = Zn(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Rg(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return k2(e, t, u, c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, s] : [s, o];
    return u().then(() => c());
  } else return Promise.all([o(), s(n.delay)]);
}
function k2(e, t, n = 0, r = 0, i = 0, o = 1, s) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t),
      a.push(
        Dl(l, t, {
          ...s,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            Dg(e.variantChildren, l, r, i, o),
        }).then(() => l.notify("AnimationComplete", t))
      );
  return Promise.all(a);
}
function C2(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Dl(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Dl(e, t, n);
  else {
    const i = typeof t == "function" ? Zn(e, t, n.custom) : t;
    r = Promise.all(Rg(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Ag(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const T2 = rc.length;
function Lg(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Lg(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < T2; n++) {
    const r = rc[n],
      i = e.props[r];
    (gi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const P2 = [...nc].reverse(),
  E2 = nc.length;
function N2(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => C2(e, n, r)));
}
function M2(e) {
  let t = N2(e),
    n = of(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = Zn(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) == null
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: y, transitionEnd: v, ...w } = d;
      u = { ...u, ...w, ...v };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = Lg(e.parent) || {},
      d = [],
      f = new Set();
    let y = {},
      v = 1 / 0;
    for (let k = 0; k < E2; k++) {
      const p = P2[k],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        S = gi(m),
        C = p === l ? h.isActive : null;
      C === !1 && (v = k);
      let P = m === c[p] && m !== u[p] && S;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (h.protectedKeys = { ...y }),
        (!h.isActive && C === null) ||
          (!m && !h.prevProp) ||
          Ss(m) ||
          typeof m == "boolean")
      )
        continue;
      const E = R2(h.prevProp, m);
      let T = E || (p === l && h.isActive && !P && S) || (k > v && S),
        V = !1;
      const L = Array.isArray(m) ? m : [m];
      let H = L.reduce(i(p), {});
      C === !1 && (H = {});
      const { prevResolvedValues: Nt = {} } = h,
        tn = { ...Nt, ...H },
        gr = (ee) => {
          (T = !0),
            f.has(ee) && ((V = !0), f.delete(ee)),
            (h.needsAnimating[ee] = !0);
          const R = e.getValue(ee);
          R && (R.liveStyle = !1);
        };
      for (const ee in tn) {
        const R = H[ee],
          b = Nt[ee];
        if (y.hasOwnProperty(ee)) continue;
        let _ = !1;
        Ml(R) && Ml(b) ? (_ = !Ag(R, b)) : (_ = R !== b),
          _
            ? R != null
              ? gr(ee)
              : f.add(ee)
            : R !== void 0 && f.has(ee)
            ? gr(ee)
            : (h.protectedKeys[ee] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = H),
        h.isActive && (y = { ...y, ...H }),
        r && e.blockInitialAnimation && (T = !1);
      const Vi = P && E;
      T &&
        (!Vi || V) &&
        d.push(
          ...L.map((ee) => {
            const R = { type: p };
            if (
              typeof ee == "string" &&
              r &&
              !Vi &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: b } = e,
                _ = Zn(b, ee);
              if (b.enteringChildren && _) {
                const { delayChildren: K } = _.transition || {};
                R.delay = Dg(b.enteringChildren, e, K);
              }
            }
            return { animation: ee, options: R };
          })
        );
    }
    if (f.size) {
      const k = {};
      if (typeof u.initial != "boolean") {
        const p = Zn(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        p && p.transition && (k.transition = p.transition);
      }
      f.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (k[p] = h ?? null);
      }),
        d.push({ animation: k });
    }
    let w = Boolean(d.length);
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      w ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) == null ||
      d.forEach((f) => {
        var y;
        return (y = f.animationState) == null ? void 0 : y.setActive(l, u);
      }),
      (n[l].isActive = u);
    const c = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = of()), (r = !0);
    },
  };
}
function R2(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ag(t, e) : !1;
}
function on(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function of() {
  return {
    animate: on(!0),
    whileInView: on(),
    whileHover: on(),
    whileTap: on(),
    whileDrag: on(),
    whileFocus: on(),
    exit: on(),
  };
}
class en {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class D2 extends en {
  constructor(t) {
    super(t), t.animationState || (t.animationState = M2(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ss(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let A2 = 0;
class L2 extends en {
  constructor() {
    super(...arguments), (this.id = A2++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const V2 = { animation: { Feature: D2 }, exit: { Feature: L2 } };
function vi(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Li(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const b2 = (e) => (t) => ec(t) && e(t, Li(t));
function Wr(e, t, n, r) {
  return vi(e, t, b2(n), r);
}
const Vg = 1e-4,
  I2 = 1 - Vg,
  _2 = 1 + Vg,
  bg = 0.01,
  F2 = 0 - bg,
  O2 = 0 + bg;
function we(e) {
  return e.max - e.min;
}
function z2(e, t, n) {
  return Math.abs(e - t) <= n;
}
function sf(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Y(t.min, t.max, e.origin)),
    (e.scale = we(n) / we(t)),
    (e.translate = Y(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= I2 && e.scale <= _2) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= F2 && e.translate <= O2) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Hr(e, t, n, r) {
  sf(e.x, t.x, n.x, r ? r.originX : void 0),
    sf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function af(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + we(t));
}
function j2(e, t, n) {
  af(e.x, t.x, n.x), af(e.y, t.y, n.y);
}
function lf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + we(t));
}
function Kr(e, t, n) {
  lf(e.x, t.x, n.x), lf(e.y, t.y, n.y);
}
function Oe(e) {
  return [e("x"), e("y")];
}
const Ig = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  uf = (e, t) => Math.abs(e - t);
function B2(e, t) {
  const n = uf(e.x, t.x),
    r = uf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class _g {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: s = 3,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = la(this.lastMoveEventInfo, this.history),
          y = this.startEvent !== null,
          v = B2(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!y && !v) return;
        const { point: w } = f,
          { timestamp: k } = de;
        this.history.push({ ...w, timestamp: k });
        const { onStart: p, onMove: h } = this.handlers;
        y ||
          (p && p(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          h && h(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, y) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = aa(y, this.transformPagePoint)),
          W.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, y) => {
        this.end();
        const { onEnd: v, onSessionEnd: w, resumeAnimation: k } = this.handlers;
        if (
          (this.dragSnapToOrigin && k && k(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const p = la(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : aa(y, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(f, p), w && w(f, p);
      }),
      !ec(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = s),
      (this.contextWindow = i || window);
    const a = Li(t),
      l = aa(a, this.transformPagePoint),
      { point: u } = l,
      { timestamp: c } = de;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, la(l, this.history)),
      (this.removeListeners = Ri(
        Wr(this.contextWindow, "pointermove", this.handlePointerMove),
        Wr(this.contextWindow, "pointerup", this.handlePointerUp),
        Wr(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Gt(this.updatePoint);
  }
}
function aa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function cf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function la({ point: e }, t) {
  return {
    point: e,
    delta: cf(e, Fg(t)),
    offset: cf(e, $2(t)),
    velocity: U2(t, 0.1),
  };
}
function $2(e) {
  return e[0];
}
function Fg(e) {
  return e[e.length - 1];
}
function U2(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Fg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > st(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = at(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function W2(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Y(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Y(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function df(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function H2(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: df(e.x, n, i), y: df(e.y, t, r) };
}
function ff(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function K2(e, t) {
  return { x: ff(e.x, t.x), y: ff(e.y, t.y) };
}
function G2(e, t) {
  let n = 0.5;
  const r = we(e),
    i = we(t);
  return (
    i > r
      ? (n = fi(t.min, t.max - r, e.min))
      : r > i && (n = fi(e.min, e.max - i, t.min)),
    Ct(0, 1, n)
  );
}
function Y2(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Al = 0.35;
function Q2(e = Al) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Al),
    { x: hf(e, "left", "right"), y: hf(e, "top", "bottom") }
  );
}
function hf(e, t, n) {
  return { min: pf(e, t), max: pf(e, n) };
}
function pf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const X2 = new WeakMap();
class Z2 {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = te()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Li(d).point);
      },
      s = (d, f) => {
        const { drag: y, dragPropagation: v, onDragStart: w } = this.getProps();
        if (
          y &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = oS(y)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Oe((p) => {
            let h = this.getAxisMotionValue(p).get() || 0;
            if (lt.test(h)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const S = m.layout.layoutBox[p];
                S && (h = we(S) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[p] = h;
          }),
          w && W.postRender(() => w(d, f)),
          Rl(this.visualElement, "transform");
        const { animationState: k } = this.visualElement;
        k && k.setActive("whileDrag", !0);
      },
      a = (d, f) => {
        (this.latestPointerEvent = d), (this.latestPanInfo = f);
        const {
          dragPropagation: y,
          dragDirectionLock: v,
          onDirectionLock: w,
          onDrag: k,
        } = this.getProps();
        if (!y && !this.openDragLock) return;
        const { offset: p } = f;
        if (v && this.currentDirection === null) {
          (this.currentDirection = q2(p)),
            this.currentDirection !== null && w && w(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, p),
          this.updateAxis("y", f.point, p),
          this.visualElement.render(),
          k && k(d, f);
      },
      l = (d, f) => {
        (this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          this.stop(d, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      u = () =>
        Oe((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) == null
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new _g(
      t,
      {
        onSessionStart: o,
        onStart: s,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: Ig(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !r)) return;
    const { velocity: s } = i;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && W.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !io(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = W2(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (o = this.visualElement.projection) == null
          ? void 0
          : o.layout,
      i = this.constraints;
    t && Bn(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = H2(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = Q2(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Oe((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = Y2(r.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Bn(t)) return !1;
    const r = t.current;
    xs();
    const { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = JS(r, i.root, this.visualElement.getTransformPagePoint());
    let s = K2(i.layout.layoutBox, o);
    if (n) {
      const a = n(XS(s));
      (this.hasMutatedConstraints = !!a), a && (s = wg(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Oe((c) => {
        if (!io(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Rl(this.visualElement, t), r.start(cc(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Oe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Oe((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Oe((n) => {
      const { drag: r } = this.getProps();
      if (!io(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - Y(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Bn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Oe((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = G2({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Oe((s) => {
        if (!io(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(Y(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    X2.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Wr(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Bn(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      W.read(r);
    const s = vi(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Oe((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Al,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function io(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function q2(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class J2 extends en {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ue),
      (this.removeListeners = Ue),
      (this.controls = new Z2(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ue);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const mf = (e) => (t, n) => {
  e && W.postRender(() => e(t, n));
};
class ek extends en {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ue);
  }
  onPointerDown(t) {
    this.session = new _g(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ig(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: mf(t),
      onStart: mf(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && W.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Wr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Co = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function gf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Er = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (I.test(e)) e = parseFloat(e);
        else return e;
      const n = gf(e, t.target.x),
        r = gf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  tk = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Yt.parse(e);
      if (i.length > 5) return r;
      const o = Yt.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = Y(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
let ua = !1;
class nk extends x.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    TS(rk),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        ua && o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Co.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      { projection: s } = r;
    return (
      s &&
        ((s.isPresent = o),
        (ua = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              W.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Ju.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    (ua = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Og(e) {
  const [t, n] = sg(),
    r = x.useContext(Lu);
  return g(nk, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(vg),
    isPresent: t,
    safeToRemove: n,
  });
}
const rk = {
  borderRadius: {
    ...Er,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Er,
  borderTopRightRadius: Er,
  borderBottomLeftRadius: Er,
  borderBottomRightRadius: Er,
  boxShadow: tk,
};
function ik(e, t, n) {
  const r = ye(e) ? e : or(e);
  return r.start(cc("", r, t, n)), r.animation;
}
const ok = (e, t) => e.depth - t.depth;
class sk {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Iu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    _u(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(ok),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function ak(e, t) {
  const n = Ee.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Gt(r), e(o - t));
    };
  return W.setup(r, !0), () => Gt(r);
}
const zg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  lk = zg.length,
  yf = (e) => (typeof e == "string" ? parseFloat(e) : e),
  vf = (e) => typeof e == "number" || I.test(e);
function uk(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Y(0, n.opacity ?? 1, ck(r))),
      (e.opacityExit = Y(t.opacity ?? 1, 0, dk(r))))
    : o && (e.opacity = Y(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < lk; s++) {
    const a = `border${zg[s]}Radius`;
    let l = xf(t, a),
      u = xf(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || vf(l) === vf(u)
        ? ((e[a] = Math.max(Y(yf(l), yf(u), r), 0)),
          (lt.test(u) || lt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Y(t.rotate || 0, n.rotate || 0, r));
}
function xf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ck = jg(0, 0.5, Em),
  dk = jg(0.5, 0.95, Ue);
function jg(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(fi(e, t, r)));
}
function wf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Fe(e, t) {
  wf(e.x, t.x), wf(e.y, t.y);
}
function Sf(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function kf(e, t, n, r, i) {
  return (
    (e -= t), (e = Jo(e, 1 / n, r)), i !== void 0 && (e = Jo(e, 1 / i, r)), e
  );
}
function fk(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (lt.test(t) &&
      ((t = parseFloat(t)), (t = Y(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = Y(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = kf(e.min, t, n, a, i)),
    (e.max = kf(e.max, t, n, a, i));
}
function Cf(e, t, [n, r, i], o, s) {
  fk(e, t[n], t[r], t[i], t.scale, o, s);
}
const hk = ["x", "scaleX", "originX"],
  pk = ["y", "scaleY", "originY"];
function Tf(e, t, n, r) {
  Cf(e.x, t, hk, n ? n.x : void 0, r ? r.x : void 0),
    Cf(e.y, t, pk, n ? n.y : void 0, r ? r.y : void 0);
}
function Pf(e) {
  return e.translate === 0 && e.scale === 1;
}
function Bg(e) {
  return Pf(e.x) && Pf(e.y);
}
function Ef(e, t) {
  return e.min === t.min && e.max === t.max;
}
function mk(e, t) {
  return Ef(e.x, t.x) && Ef(e.y, t.y);
}
function Nf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function $g(e, t) {
  return Nf(e.x, t.x) && Nf(e.y, t.y);
}
function Mf(e) {
  return we(e.x) / we(e.y);
}
function Rf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class gk {
  constructor() {
    this.members = [];
  }
  add(t) {
    Iu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (_u(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function yk(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: y,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const cn = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
  ca = ["", "X", "Y", "Z"],
  vk = 1e3;
let xk = 0;
function da(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ug(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Mg(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", W, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Ug(r);
}
function Wg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = xk++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            bt.value &&
              (cn.nodes =
                cn.calculatedTargetDeltas =
                cn.calculatedProjections =
                  0),
            this.nodes.forEach(kk),
            this.nodes.forEach(Ek),
            this.nodes.forEach(Nk),
            this.nodes.forEach(Ck),
            bt.addProjectionMetrics && bt.addProjectionMetrics(cn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new sk());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Ou()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s) {
      if (this.instance) return;
      (this.isSVG = og(s) && !dS(s)), (this.instance = s);
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          d = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        W.read(() => {
          d = window.innerWidth;
        }),
          e(s, () => {
            const y = window.innerWidth;
            y !== d &&
              ((d = y),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = ak(f, 250)),
              Co.hasAnimatedSinceResize &&
                ((Co.hasAnimatedSinceResize = !1), this.nodes.forEach(Lf)));
          });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeLayoutChanged: f,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || u.getDefaultTransition() || Lk,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: k } =
                  u.getProps(),
                p = !this.targetLayout || !$g(this.targetLayout, y),
                h = !d && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                h ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const m = { ...Zu(v, "layout"), onPlay: w, onComplete: k };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((m.delay = 0), (m.type = !1)),
                  this.startAnimation(m),
                  this.setAnimationOrigin(c, h);
              } else
                d || Lf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Gt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Mk),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Ug(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Df);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Af);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Pk),
            this.nodes.forEach(wk),
            this.nodes.forEach(Sk))
          : this.nodes.forEach(Af),
        this.clearAllSnapshots();
      const a = Ee.now();
      (de.delta = Ct(0, 1e3 / 60, a - de.timestamp)),
        (de.timestamp = a),
        (de.isProcessing = !0),
        Js.update.process(de),
        Js.preRender.process(de),
        Js.render.process(de),
        (de.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ju.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Tk), this.sharedNodes.forEach(Rk);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        W.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      W.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !we(this.snapshot.measuredBox.x) &&
          !we(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = te()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = Boolean(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Bg(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        this.instance &&
        (a || un(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        Vk(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: s } = this.options;
      if (!s) return te();
      const a = s.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(bk)
        )
      ) {
        const { scroll: c } = this.root;
        c && ($n(a.x, c.offset.x), $n(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = te();
      if ((Fe(a, s), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && Fe(a, s), $n(a.x, d.offset.x), $n(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = te();
      Fe(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Un(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          un(c.latestValues) && Un(l, c.latestValues);
      }
      return un(this.latestValues) && Un(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = te();
      Fe(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !un(u.latestValues)) continue;
        Pl(u.latestValues) && u.updateSnapshot();
        const c = te(),
          d = u.measurePageBox();
        Fe(c, d),
          Tf(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return un(this.latestValues) && Tf(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== de.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var f;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = Boolean(this.resumingFrom) || this !== a;
      if (
        !(
          s ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((f = this.parent) != null && f.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!(!this.layout || !(c || d))) {
        if (
          ((this.resolvedRelativeTargetAt = de.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = te()),
              (this.relativeTargetOrigin = te()),
              Kr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              Fe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = te()), (this.targetWithTransforms = te())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                j2(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (Boolean(this.resumingFrom)
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Fe(this.target, this.layout.layoutBox),
                kg(this.target, this.targetDelta))
              : Fe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            Boolean(y.resumingFrom) === Boolean(this.resumingFrom) &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = te()),
                (this.relativeTargetOrigin = te()),
                Kr(this.relativeTargetOrigin, this.target, y.target),
                Fe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          bt.value && cn.calculatedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Pl(this.parent.latestValues) ||
          Sg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return Boolean(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
          this.layout
      );
    }
    calcProjection() {
      var v;
      const s = this.getLead(),
        a = Boolean(this.resumingFrom) || this !== s;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === de.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = Boolean(
          (this.parent && this.parent.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      Fe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      qS(this.layoutCorrected, this.treeScale, this.path, a),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = te()));
      const { target: y } = s;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Sf(this.prevProjectionDelta.x, this.projectionDelta.x),
          Sf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Hr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !Rf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Rf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        bt.value && cn.calculatedProjections++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Wn()),
        (this.projectionDelta = Wn()),
        (this.projectionDeltaWithTransform = Wn());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Wn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = te(),
        y = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        w = y !== v,
        k = this.getStack(),
        p = !k || k.members.length <= 1,
        h = Boolean(
          w && !p && this.options.crossfade === !0 && !this.path.some(Ak)
        );
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        Vf(d.x, s.x, C),
          Vf(d.y, s.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Kr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Dk(this.relativeTarget, this.relativeTargetOrigin, f, C),
            m && mk(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = te()),
            Fe(m, this.relativeTarget)),
          w &&
            ((this.animationValues = c), uk(c, u, this.latestValues, C, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      var a, l, u;
      this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (Gt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = W.update(() => {
          (Co.hasAnimatedSinceResize = !0),
            Br.layout++,
            this.motionValue || (this.motionValue = or(0)),
            (this.currentAnimation = ik(this.motionValue, [0, 1e3], {
              ...s,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                this.mixTargetDelta(c), s.onUpdate && s.onUpdate(c);
              },
              onStop: () => {
                Br.layout--;
              },
              onComplete: () => {
                Br.layout--,
                  s.onComplete && s.onComplete(),
                  this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(vk),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Hg(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || te();
          const d = we(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = we(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        Fe(a, l),
          Un(a, c),
          Hr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new gk()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && da("z", s, u, this.animationValues);
      for (let c = 0; c < ca.length; c++)
        da(`rotate${ca[c]}`, s, u, this.animationValues),
          da(`skew${ca[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (s.visibility = ""),
          (s.opacity = ""),
          (s.pointerEvents = ko(a == null ? void 0 : a.pointerEvents) || ""),
          (s.transform = l ? l(this.latestValues, "") : "none");
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId &&
          ((s.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (s.pointerEvents = ko(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !un(this.latestValues) &&
            ((s.transform = l ? l({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      s.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = yk(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (d = l(c, d)), (s.transform = d);
      const { x: f, y } = this.projectionDelta;
      (s.transformOrigin = `${f.origin * 100}% ${y.origin * 100}% 0`),
        u.animationValues
          ? (s.opacity =
              u === this
                ? c.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : c.opacityExit)
          : (s.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                ? c.opacityExit
                : 0);
      for (const v in yi) {
        if (c[v] === void 0) continue;
        const { correct: w, applyTo: k, isCSSVariable: p } = yi[v],
          h = d === "none" ? c[v] : w(c[v], u);
        if (k) {
          const m = k.length;
          for (let S = 0; S < m; S++) s[k[S]] = h;
        } else
          p ? (this.options.visualElement.renderState.vars[v] = h) : (s[v] = h);
      }
      this.options.layoutId &&
        (s.pointerEvents =
          u === this ? ko(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Df),
        this.root.sharedNodes.clear();
    }
  };
}
function wk(e) {
  e.updateLayout();
}
function Sk(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = t.source !== e.layout.source;
    o === "size"
      ? Oe((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            y = we(f);
          (f.min = r[d].min), (f.max = f.min + y);
        })
      : Hg(o, t.layoutBox, r) &&
        Oe((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            y = we(r[d]);
          (f.max = f.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + y));
        });
    const a = Wn();
    Hr(a, r, t.layoutBox);
    const l = Wn();
    s ? Hr(l, e.applyTransform(i, !0), t.measuredBox) : Hr(l, r, t.layoutBox);
    const u = !Bg(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: y } = d;
        if (f && y) {
          const v = te();
          Kr(v, t.layoutBox, f.layoutBox);
          const w = te();
          Kr(w, r, y.layoutBox),
            $g(v, w) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = w),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function kk(e) {
  bt.value && cn.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = Boolean(
          e.isProjectionDirty ||
            e.parent.isProjectionDirty ||
            e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Ck(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Tk(e) {
  e.clearSnapshot();
}
function Df(e) {
  e.clearMeasurements();
}
function Af(e) {
  e.isLayoutDirty = !1;
}
function Pk(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Lf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Ek(e) {
  e.resolveTargetDelta();
}
function Nk(e) {
  e.calcProjection();
}
function Mk(e) {
  e.resetSkewAndRotation();
}
function Rk(e) {
  e.removeLeadSnapshot();
}
function Vf(e, t, n) {
  (e.translate = Y(t.translate, 0, n)),
    (e.scale = Y(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function bf(e, t, n, r) {
  (e.min = Y(t.min, n.min, r)), (e.max = Y(t.max, n.max, r));
}
function Dk(e, t, n, r) {
  bf(e.x, t.x, n.x, r), bf(e.y, t.y, n.y, r);
}
function Ak(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Lk = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  If = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  _f = If("applewebkit/") && !If("chrome/") ? Math.round : Ue;
function Ff(e) {
  (e.min = _f(e.min)), (e.max = _f(e.max));
}
function Vk(e) {
  Ff(e.x), Ff(e.y);
}
function Hg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !z2(Mf(t), Mf(n), 0.2))
  );
}
function bk(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Ik = Wg({
    attachResizeListener: (e, t) => vi(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  fa = { current: void 0 },
  Kg = Wg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!fa.current) {
        const e = new Ik({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (fa.current = e);
      }
      return fa.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) =>
      Boolean(window.getComputedStyle(e).position === "fixed"),
  }),
  _k = {
    pan: { Feature: ek },
    drag: { Feature: J2, ProjectionNode: Kg, MeasureLayout: Og },
  };
function Of(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = r[i];
  o && W.postRender(() => o(t, Li(t)));
}
class Fk extends en {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = sS(
        t,
        (n, r) => (Of(this.node, r, "Start"), (i) => Of(this.node, i, "End"))
      ));
  }
  unmount() {}
}
class Ok extends en {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ri(
      vi(this.node.current, "focus", () => this.onFocus()),
      vi(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function zf(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = r[i];
  o && W.postRender(() => o(t, Li(t)));
}
class zk extends en {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = cS(
        t,
        (n, r) => (
          zf(this.node, r, "Start"),
          (i, { success: o }) => zf(this.node, i, o ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Ll = new WeakMap(),
  ha = new WeakMap(),
  jk = (e) => {
    const t = Ll.get(e.target);
    t && t(e);
  },
  Bk = (e) => {
    e.forEach(jk);
  };
function $k({ root: e, ...t }) {
  const n = e || document;
  ha.has(n) || ha.set(n, {});
  const r = ha.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Bk, { root: e, ...t })), r[i];
}
function Uk(e, t, n) {
  const r = $k(t);
  return (
    Ll.set(e, n),
    r.observe(e),
    () => {
      Ll.delete(e), r.unobserve(e);
    }
  );
}
const Wk = { some: 0, all: 1 };
class Hk extends en {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Wk[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return Uk(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Kk(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Kk({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Gk = {
    inView: { Feature: Hk },
    tap: { Feature: zk },
    focus: { Feature: Ok },
    hover: { Feature: Fk },
  },
  Yk = { layout: { ProjectionNode: Kg, MeasureLayout: Og } },
  Qk = { ...V2, ...Gk, ..._k, ...Yk },
  A = QS(Qk, l2),
  mr = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(!1),
      i = Jt(),
      o = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/gallery", label: "Blog" },
        { href: "/contact", label: "Contact" },
      ];
    return (
      x.useEffect(() => {
        const s = () => r(window.scrollY > 50);
        return (
          window.addEventListener("scroll", s),
          () => window.removeEventListener("scroll", s)
        );
      }, []),
      M("nav", {
        className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          n ? "bg-black/90 shadow-lg backdrop-blur-lg" : "bg-transparent"
        }`,
        children: [
          M("div", {
            className:
              "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",
            children: [
              M(A.div, {
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
                className:
                  "text-2xl md:text-3xl font-extrabold tracking-wide uppercase cursor-pointer",
                children: [
                  g("span", { className: "text-white", children: "Olivier" }),
                  " ",
                  g("span", {
                    className: "text-purple-500",
                    children: "The Box",
                  }),
                ],
              }),
              M("div", {
                className: "hidden md:flex items-center space-x-8",
                children: [
                  o.map((s, a) =>
                    M(
                      A.div,
                      {
                        className: "relative group",
                        whileHover: { scale: 1.08 },
                        whileTap: { scale: 0.95 },
                        children: [
                          g(Ae, {
                            to: s.href,
                            className: `font-semibold tracking-wide transition-colors duration-300 ${
                              i.pathname === s.href
                                ? "text-purple-400"
                                : "text-white hover:text-purple-300"
                            }`,
                            children: s.label,
                          }),
                          g("span", {
                            className: `absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-500 ${
                              i.pathname === s.href
                                ? "w-full bg-purple-400"
                                : "w-0 bg-purple-400 group-hover:w-full"
                            }`,
                          }),
                        ],
                      },
                      a
                    )
                  ),
                  g(Ae, {
                    to: "/booking",
                    children: g(A.button, {
                      whileHover: {
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(168,85,247,0.6)",
                      },
                      whileTap: { scale: 0.95 },
                      className:
                        "ml-4 px-6 py-2 font-semibold rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition",
                      children: "Book Now",
                    }),
                  }),
                ],
              }),
              g("div", {
                className: "md:hidden flex items-center space-x-3",
                children: g("button", {
                  onClick: () => t(!e),
                  className: "focus:outline-none text-white",
                  children: e ? g(yx, { size: 28 }) : g(lx, { size: 28 }),
                }),
              }),
            ],
          }),
          g(mi, {
            children:
              e &&
              M(A.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 z-40",
                children: [
                  o.map((s, a) =>
                    g(
                      A.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: a * 0.1 },
                        whileHover: { scale: 1.1 },
                        children: g(Ae, {
                          to: s.href,
                          className: `text-2xl font-bold transition ${
                            i.pathname === s.href
                              ? "text-purple-400"
                              : "text-white hover:text-purple-300"
                          }`,
                          onClick: () => t(!1),
                          children: s.label,
                        }),
                      },
                      a
                    )
                  ),
                  g(Ae, {
                    to: "/booking",
                    onClick: () => t(!1),
                    children: g(A.button, {
                      whileHover: {
                        scale: 1.08,
                        boxShadow: "0 0 20px rgba(168,85,247,0.8)",
                      },
                      whileTap: { scale: 0.95 },
                      className:
                        "mt-6 px-10 py-3 font-semibold text-lg rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition",
                      children: "Book Now",
                    }),
                  }),
                ],
              }),
          }),
        ],
      })
    );
  },
  pa = [
    {
      id: 1,
      bg: "bg-[url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center",
    },
    {
      id: 2,
      bg: "bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center",
    },
    {
      id: 3,
      bg: "bg-[url('https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center",
    },
  ],
  Xk = ({ texts: e, speed: t = 100, pause: n = 2e3 }) => {
    const [r, i] = x.useState(0),
      [o, s] = x.useState(0),
      [a, l] = x.useState(!1);
    return (
      x.useEffect(() => {
        if (r >= e.length) return;
        if (o === e[r].length + 1 && !a) {
          setTimeout(() => l(!0), n);
          return;
        }
        if (o === 0 && a) {
          l(!1), i((c) => (c + 1) % e.length);
          return;
        }
        const u = setTimeout(
          () => {
            s((c) => c + (a ? -1 : 1));
          },
          a ? t / 2 : t
        );
        return () => clearTimeout(u);
      }, [o, r, a, e, t, n]),
      M("span", {
        className: "text-purple-400 font-semibold",
        children: [
          e[r].substring(0, o),
          g("span", { className: "animate-pulse", children: "|" }),
        ],
      })
    );
  },
  Zk = () => {
    const [e, t] = x.useState(0),
      n = () => t((r) => (r + 1) % pa.length);
    return (
      x.useEffect(() => {
        const r = setInterval(n, 8e3);
        return () => clearInterval(r);
      }, []),
      M("section", {
        className:
          "relative h-screen w-full overflow-hidden bg-black text-white",
        children: [
          g(mi, {
            children: pa.map((r, i) =>
              i === e
                ? g(
                    A.div,
                    {
                      initial: { opacity: 0, scale: 1.05 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 1.3, ease: "easeInOut" },
                      className: `absolute inset-0 ${r.bg}`,
                      children: g("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90",
                      }),
                    },
                    r.id
                  )
                : null
            ),
          }),
          M("div", {
            className:
              "relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-12 md:px-20",
            children: [
              M(A.h1, {
                initial: { y: 60, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { duration: 1 },
                className:
                  "text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight uppercase",
                children: [
                  "Olivier ",
                  g("span", {
                    className: "text-purple-500",
                    children: "The Box",
                  }),
                ],
              }),
              g(A.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.6, duration: 1 },
                className: "mt-4 text-lg sm:text-xl md:text-2xl text-gray-200",
                children: g(Xk, {
                  texts: [
                    "Rwanda’s #1 Boxing Trainer",
                    "Building Champions Inside the Ring",
                    "Discipline • Strength • Skill",
                  ],
                }),
              }),
              M(A.p, {
                initial: { y: 30, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { duration: 1, delay: 1 },
                className:
                  "mt-6 max-w-2xl text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed",
                children: [
                  "Shaping champions with ",
                  g("span", {
                    className: "text-purple-400",
                    children: "discipline",
                  }),
                  ",",
                  " ",
                  g("span", {
                    className: "text-purple-400",
                    children: "strength",
                  }),
                  ", and",
                  " ",
                  g("span", {
                    className: "text-purple-400",
                    children: "skill",
                  }),
                  " — inside and outside the ring.",
                ],
              }),
              M(A.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1.4 },
                className: "mt-10 flex flex-col sm:flex-row gap-4",
                children: [
                  g(Ae, {
                    to: "/book",
                    className:
                      "px-8 py-3 text-base font-semibold rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-purple-500/40 transition-all duration-300",
                    children: "Book Now",
                  }),
                  g(Ae, {
                    to: "/contact",
                    className:
                      "px-8 py-3 text-base font-semibold rounded-full border border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300",
                    children: "Contact Me",
                  }),
                ],
              }),
            ],
          }),
          g("div", {
            className:
              "absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20",
            children: pa.map((r, i) =>
              g(
                "button",
                {
                  onClick: () => t(i),
                  className: `w-3 h-3 rounded-full transition-all duration-300 ${
                    e === i
                      ? "bg-purple-500 scale-125 shadow-lg"
                      : "bg-gray-500/70 hover:bg-purple-400"
                  }`,
                },
                i
              )
            ),
          }),
          g("div", {
            className:
              "absolute bottom-8 right-8 text-gray-400 animate-bounce z-20",
            children: g(dx, { size: 22 }),
          }),
        ],
      })
    );
  },
  Gg = () =>
    M("section", {
      className: "relative py-24 bg-black text-white overflow-hidden",
      children: [
        M(A.div, {
          className: "max-w-7xl mx-auto px-6 mb-12 text-center",
          initial: { y: -20, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          transition: { duration: 0.8 },
          viewport: { once: !0 },
          children: [
            g("h2", {
              className:
                "text-3xl md:text-4xl font-extrabold text-purple-500 tracking-wide uppercase",
              children: "About Us",
            }),
            g("div", {
              className: "w-20 h-1 bg-purple-500 rounded-full mx-auto mt-2",
            }),
          ],
        }),
        M("div", {
          className:
            "max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12",
          children: [
            M(A.div, {
              className: "flex-1 space-y-8",
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0 },
              children: [
                M(A.h2, {
                  className:
                    "text-4xl md:text-5xl font-extrabold tracking-tight text-purple-500 relative inline-block",
                  variants: {
                    hidden: { x: -50, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 0.8 },
                    },
                  },
                  children: [
                    "Olivier Boxing Trainer",
                    g("span", {
                      className:
                        "absolute left-0 -bottom-2 w-16 h-1 bg-purple-500 rounded-full",
                    }),
                  ],
                }),
                M(A.h3, {
                  className:
                    "text-xl md:text-2xl font-semibold text-gray-300 flex items-center gap-2",
                  variants: {
                    hidden: { x: -50, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { delay: 0.2, duration: 0.8 },
                    },
                  },
                  children: [
                    g("span", {
                      className:
                        "w-1 h-8 bg-purple-500 rounded-full inline-block",
                    }),
                    "Rwanda’s Leading National Boxing Coach",
                  ],
                }),
                M(A.div, {
                  className:
                    "space-y-4 text-gray-400 leading-relaxed text-lg md:text-xl",
                  variants: {
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                  },
                  children: [
                    g(A.p, {
                      variants: {
                        hidden: { x: -30, opacity: 0 },
                        visible: { x: 0, opacity: 1 },
                      },
                      children:
                        "Olivier is Rwanda’s top national boxing coach, dedicated to shaping champions. He transforms raw talent into disciplined fighters ready for big stages. His training combines modern techniques with mental and physical strength. Passionate and driven, Olivier inspires the next generation of boxers.",
                    }),
                    g(A.p, {
                      variants: {
                        hidden: { x: -30, opacity: 0 },
                        visible: { x: 0, opacity: 1 },
                      },
                      children:
                        "Olivier is the head coach at The Real Boxing Club and a dedicated boxing trainer at Soho Gym. Renowned for his expertise and discipline, he has trained athletes of all levels, from beginners to professional fighters. Olivier combines technical skill, strategic insight, and motivation to help his students achieve their peak performance both in and out of the ring. Under his guidance, countless boxers have built strength, confidence, and championship potential.",
                    }),
                  ],
                }),
              ],
            }),
            M("div", {
              className: "flex-1 relative w-full h-[500px] md:h-[600px]",
              children: [
                g(A.img, {
                  src: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Creative Work 1",
                  className:
                    "absolute top-0 left-0 w-3/5 h-4/5 md:w-3/5 md:h-4/5 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500",
                  initial: { y: 20, opacity: 0, rotate: -2 },
                  whileInView: { y: 0, opacity: 1, rotate: 0 },
                  transition: { duration: 0.8 },
                }),
                g(A.img, {
                  src: "https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Creative Work 2",
                  className:
                    "absolute top-16 right-0 w-2/5 h-2/5 md:w-2/5 md:h-2/5 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500",
                  initial: { y: 20, opacity: 0, rotate: 2 },
                  whileInView: { y: 0, opacity: 1, rotate: 0 },
                  transition: { duration: 0.8, delay: 0.2 },
                }),
                g(A.img, {
                  src: "https://plus.unsplash.com/premium_photo-1672791843132-cea1902ad66b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Creative Work 3",
                  className:
                    "absolute bottom-0 left-1/3 w-2/5 h-2/5 md:w-2/5 md:h-2/5 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500",
                  initial: { y: 20, opacity: 0, rotate: -1 },
                  whileInView: { y: 0, opacity: 1, rotate: 0 },
                  transition: { duration: 0.8, delay: 0.4 },
                }),
              ],
            }),
          ],
        }),
        M("div", {
          className: "lg:hidden mt-10 grid grid-cols-1 gap-4 px-6",
          children: [
            g(A.img, {
              src: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Creative Work 1",
              className:
                "w-full h-64 md:h-72 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
            }),
            g(A.img, {
              src: "https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Creative Work 2",
              className:
                "w-full h-64 md:h-72 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 },
            }),
            g(A.img, {
              src: "https://plus.unsplash.com/premium_photo-1672791843132-cea1902ad66b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Creative Work 3",
              className:
                "w-full h-64 md:h-72 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.4 },
            }),
          ],
        }),
      ],
    }),
  qk = [
    {
      id: 1,
      type: "image",
      category: "Training",
      src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      height: "300px",
    },
    {
      id: 2,
      type: "video",
      category: "Training",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      height: "500px",
    },
    {
      id: 3,
      type: "image",
      category: "Events",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      height: "400px",
    },
    {
      id: 4,
      type: "video",
      category: "Events",
      src: "https://www.w3schools.com/html/movie.mp4",
      height: "450px",
    },
    {
      id: 5,
      type: "image",
      category: "Boxers",
      src: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
      height: "350px",
    },
    {
      id: 6,
      type: "image",
      category: "Training",
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      height: "500px",
    },
  ],
  Jk = ["All", "Images", "Videos", "Training", "Events", "Boxers"],
  Yg = () => {
    const [e, t] = x.useState(null),
      [n, r] = x.useState("All"),
      i = qk.filter((s) =>
        n === "All"
          ? !0
          : n === "Images"
          ? s.type === "image"
          : n === "Videos"
          ? s.type === "video"
          : s.category === n
      ),
      o = Array.from({ length: 30 });
    return M(Qt, {
      children: [
        g(mr, {}),
        M("section", {
          className: "relative py-24 bg-black text-white overflow-hidden",
          children: [
            M("div", {
              className: "absolute inset-0 z-0",
              children: [
                g("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90",
                }),
                o.map((s, a) =>
                  g(
                    A.div,
                    {
                      className:
                        "absolute rounded-full bg-purple-500/30 blur-xl opacity-40",
                      style: {
                        width: `${5 + Math.random() * 15}px`,
                        height: `${5 + Math.random() * 15}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      },
                      animate: {
                        y: [0, 20 + Math.random() * 20, 0],
                        x: [0, 15 + Math.random() * 10, 0],
                        opacity: [0.2, 0.7, 0.2],
                      },
                      transition: {
                        duration: 12 + Math.random() * 5,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: Math.random() * 5,
                      },
                    },
                    a
                  )
                ),
              ],
            }),
            M("div", {
              className: "relative z-10 max-w-7xl mx-auto px-6",
              children: [
                M(A.div, {
                  className: "text-center mb-12",
                  initial: { y: -20, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  transition: { duration: 0.8 },
                  viewport: { once: !0 },
                  children: [
                    g("h2", {
                      className:
                        "text-3xl md:text-4xl font-extrabold text-purple-500 uppercase",
                      children: "Olivier’s Gallery",
                    }),
                    g("div", {
                      className:
                        "w-24 h-1 bg-purple-500 rounded-full mx-auto mt-2",
                    }),
                    g("p", {
                      className: "text-gray-300 mt-4 max-w-xl mx-auto text-lg",
                      children:
                        "Explore highlights from training sessions, boxing events, and fighters from The Real Boxing Club & Soho Gym.",
                    }),
                  ],
                }),
                g("div", {
                  className: "flex justify-center gap-4 mb-12 flex-wrap",
                  children: Jk.map((s) =>
                    g(
                      "button",
                      {
                        onClick: () => r(s),
                        className: `px-6 py-2 font-semibold rounded-full border ${
                          n === s
                            ? "bg-purple-500 border-purple-500 text-black"
                            : "border-gray-500 text-white hover:border-purple-500 hover:text-purple-500"
                        } transition-all duration-300`,
                        children: s,
                      },
                      s
                    )
                  ),
                }),
                g("div", {
                  className:
                    "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6",
                  children: g(mi, {
                    children: i.map((s, a) =>
                      g(
                        A.div,
                        {
                          className:
                            "relative rounded-3xl shadow-xl overflow-hidden break-inside-avoid border border-gray-800 bg-white/5 backdrop-blur-lg cursor-pointer",
                          layout: !0,
                          initial: { opacity: 0, y: 50 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: 50 },
                          whileHover: {
                            scale: 1.05,
                            rotate: a % 2 === 0 ? 1 : -1,
                          },
                          transition: { duration: 0.6 },
                          onClick: () => t(s),
                          style: { height: s.height },
                          children: g("div", {
                            className:
                              "relative w-full h-full bg-black rounded-3xl overflow-hidden",
                            children:
                              s.type === "image"
                                ? g("img", {
                                    src: s.src,
                                    alt: `Gallery ${s.id}`,
                                    className:
                                      "w-full h-full object-cover transition-transform duration-500 hover:scale-105",
                                  })
                                : M("div", {
                                    className: "relative w-full h-full",
                                    children: [
                                      g("video", {
                                        src: s.src,
                                        muted: !0,
                                        loop: !0,
                                        className: "w-full h-full object-cover",
                                      }),
                                      g(px, {
                                        className:
                                          "absolute inset-0 m-auto w-12 h-12 text-white opacity-70 pointer-events-none",
                                      }),
                                    ],
                                  }),
                          }),
                        },
                        s.id
                      )
                    ),
                  }),
                }),
              ],
            }),
            g(mi, {
              children:
                e &&
                g(A.div, {
                  className:
                    "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  onClick: () => t(null),
                  children: g(A.div, {
                    className: "relative w-full max-w-3xl",
                    initial: { scale: 0.9 },
                    animate: { scale: 1 },
                    exit: { scale: 0.9 },
                    children:
                      e.type === "image"
                        ? g("img", {
                            src: e.src,
                            alt: "Selected",
                            className: "w-full h-auto rounded-2xl shadow-2xl",
                          })
                        : g("video", {
                            src: e.src,
                            controls: !0,
                            autoPlay: !0,
                            className: "w-full h-auto rounded-2xl shadow-2xl",
                          }),
                  }),
                }),
            }),
            g(A.a, {
              href: "https://wa.me/250781288442",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-[9999]",
              animate: { y: [0, -8, 0] },
              transition: {
                duration: 2,
                repeat: 1 / 0,
                repeatType: "loop",
                ease: "easeInOut",
              },
              whileHover: {
                scale: 1.1,
                boxShadow: "0 0 25px rgba(0,255,0,0.8)",
              },
              children: g(Ni, { size: 28 }),
            }),
            g(A.a, {
              href: "tel:+250781288442",
              className:
                "fixed bottom-20 right-6 bg-purple-500 text-white p-4 rounded-full shadow-2xl z-[9999]",
              animate: { y: [0, -8, 0] },
              transition: {
                duration: 2,
                repeat: 1 / 0,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.5,
              },
              whileHover: {
                scale: 1.1,
                boxShadow: "0 0 25px rgba(128,0,255,0.8)",
              },
              children: g(Mi, { size: 28 }),
            }),
          ],
        }),
      ],
    });
  },
  eC = [
    {
      id: 1,
      title: "Personalized Fitness Programs",
      description:
        "Tailored strength, conditioning, and weight-loss programs designed with boxing fundamentals.",
      price: "Custom",
      features: [
        "Individual assessment",
        "Strength & cardio balance",
        "Weight-loss strategies",
        "Boxing-based drills",
      ],
    },
    {
      id: 2,
      title: "Amateur & Pro Boxer Coaching",
      description:
        "Professional fight preparation: sparring, advanced tactics, and stamina drills for competitions.",
      price: "$120/session",
      features: [
        "Fight strategy & tactics",
        "High-level sparring",
        "Endurance conditioning",
        "Competition readiness",
      ],
      popular: !0,
    },
    {
      id: 3,
      title: "Boxing Bootcamps",
      description:
        "High-intensity group sessions mixing cardio, strength, and boxing technique.",
      price: "$60/session",
      features: [
        "Explosive workouts",
        "Strength & conditioning",
        "Cardio boxing drills",
        "Community motivation",
      ],
    },
    {
      id: 4,
      title: "Youth Boxing Academy",
      description:
        "Programs for kids & teens focusing on discipline, self-defense, and confidence building.",
      price: "$40/session",
      features: [
        "Safe sparring drills",
        "Confidence & respect training",
        "Fundamental boxing skills",
        "Fitness & agility drills",
      ],
    },
    {
      id: 5,
      title: "Corporate Team Training",
      description:
        "Boxing-inspired workouts for companies to build teamwork, stress relief, and fitness.",
      price: "Custom",
      features: [
        "Fun group workouts",
        "Stress-relief routines",
        "Team bonding activities",
        "Boost productivity & morale",
      ],
    },
    {
      id: 6,
      title: "Women’s Self-Defense & Fitness",
      description:
        "Classes designed for women focusing on empowerment, strength, and safety.",
      price: "$50/session",
      features: [
        "Self-defense techniques",
        "Strength & cardio training",
        "Confidence building",
        "Supportive environment",
      ],
    },
    {
      id: 7,
      title: "Nutrition & Recovery Coaching",
      description:
        "Meal planning + recovery routines (stretching, massage therapy, etc.) for athletes.",
      price: "Custom",
      features: [
        "Personalized meal plans",
        "Recovery routines",
        "Massage & therapy guidance",
        "Sleep & recovery optimization",
      ],
    },
    {
      id: 8,
      title: "Virtual/Online Training Sessions",
      description:
        "For people who can’t train in person—Zoom/online personalized workouts.",
      price: "$30/session",
      features: [
        "Live 1-on-1 coaching",
        "Flexible schedules",
        "Boxing & fitness drills",
        "Train anywhere worldwide",
      ],
    },
    {
      id: 9,
      title: "Fight Camps & Competition Prep",
      description:
        "Short-term intensive training for athletes preparing for tournaments or pro fights.",
      price: "Custom",
      features: [
        "Simulation fights",
        "Tailored fight camp",
        "Mental preparation",
        "Nutrition guidance",
      ],
    },
    {
      id: 10,
      title: "Boxing for Seniors / Wellness Programs",
      description:
        "Low-impact sessions for older adults focusing on mobility, balance, and cardiovascular health.",
      price: "$35/session",
      features: [
        "Mobility & balance training",
        "Light cardio boxing drills",
        "Safe exercise routines",
        "Heart health focus",
      ],
    },
  ],
  Qg = () => {
    const e = Array.from({ length: 40 });
    return M("section", {
      className: "relative py-24 overflow-hidden bg-black text-white",
      children: [
        M("div", {
          className: "absolute inset-0 z-0",
          children: [
            g("div", {
              className:
                "absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90",
            }),
            e.map((t, n) =>
              g(
                A.div,
                {
                  className:
                    "absolute rounded-full bg-purple-500/30 blur-xl opacity-40",
                  style: {
                    width: `${5 + Math.random() * 15}px`,
                    height: `${5 + Math.random() * 15}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  },
                  animate: {
                    y: [0, 20 + Math.random() * 20, 0],
                    x: [0, 10 + Math.random() * 10, 0],
                    opacity: [0.2, 0.6, 0.2],
                  },
                  transition: {
                    duration: 10 + Math.random() * 5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: Math.random() * 5,
                  },
                },
                n
              )
            ),
          ],
        }),
        M("div", {
          className: "relative z-10 max-w-7xl mx-auto px-6",
          children: [
            M(A.div, {
              className: "text-center mb-16",
              initial: { opacity: 0, y: -20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              viewport: { once: !0 },
              children: [
                g("h2", {
                  className:
                    "text-3xl md:text-4xl font-extrabold text-purple-500 uppercase",
                  children: "Advanced Boxing Services",
                }),
                g("div", {
                  className: "w-24 h-1 bg-purple-500 rounded-full mx-auto mt-3",
                }),
              ],
            }),
            g("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",
              children: eC.map((t, n) =>
                M(
                  A.div,
                  {
                    className:
                      "relative p-6 flex flex-col justify-between rounded-3xl shadow-xl border border-gray-800 bg-white/5 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 hover:-translate-y-2",
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: n * 0.2 },
                    viewport: { once: !0 },
                    children: [
                      t.popular &&
                        g("div", {
                          className:
                            "absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-bold text-black uppercase shadow-lg animate-pulse",
                          children: "Most Popular",
                        }),
                      M("div", {
                        className: "space-y-4",
                        children: [
                          g("h3", {
                            className:
                              "text-xl md:text-2xl font-bold text-purple-500",
                            children: t.title,
                          }),
                          g("p", {
                            className: "text-gray-300 text-sm md:text-base",
                            children: t.description,
                          }),
                          g("p", {
                            className:
                              "text-2xl md:text-3xl font-extrabold text-white mt-2",
                            children: t.price,
                          }),
                          g("ul", {
                            className: "mt-4 space-y-2 text-gray-300 text-sm",
                            children: t.features.map((r, i) =>
                              M(
                                A.li,
                                {
                                  className: "flex items-center space-x-2",
                                  initial: { opacity: 0, x: -20 },
                                  whileInView: { opacity: 1, x: 0 },
                                  transition: { duration: 0.5, delay: i * 0.1 },
                                  children: [
                                    g("span", {
                                      className:
                                        "w-2 h-2 bg-purple-500 rounded-full inline-block",
                                    }),
                                    g("span", { children: r }),
                                  ],
                                },
                                i
                              )
                            ),
                          }),
                        ],
                      }),
                      g(A.button, {
                        whileHover: {
                          scale: 1.05,
                          boxShadow: t.popular
                            ? "0 0 30px rgba(128,0,255,0.8)"
                            : "0 0 15px rgba(128,0,255,0.5)",
                        },
                        whileTap: { scale: 0.95 },
                        className: `mt-6 w-full py-2 font-semibold rounded-full text-black transition ${
                          t.popular
                            ? "bg-gradient-to-r from-purple-500 to-pink-500"
                            : "bg-purple-500"
                        }`,
                        children: "Book Now",
                      }),
                    ],
                  },
                  t.id
                )
              ),
            }),
          ],
        }),
        g(A.a, {
          href: "https://wa.me/250781288442",
          target: "_blank",
          rel: "noopener noreferrer",
          className:
            "fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-[9999]",
          animate: { y: [0, -8, 0] },
          transition: {
            duration: 2,
            repeat: 1 / 0,
            repeatType: "loop",
            ease: "easeInOut",
          },
          whileHover: { scale: 1.1, boxShadow: "0 0 25px rgba(0,255,0,0.8)" },
          children: g(Ni, { size: 28 }),
        }),
        g(A.a, {
          href: "tel:+250781288442",
          className:
            "fixed bottom-20 right-6 bg-purple-500 text-white p-4 rounded-full shadow-2xl z-[9999]",
          animate: { y: [0, -8, 0] },
          transition: {
            duration: 2,
            repeat: 1 / 0,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          },
          whileHover: { scale: 1.1, boxShadow: "0 0 25px rgba(128,0,255,0.8)" },
          children: g(Mi, { size: 28 }),
        }),
      ],
    });
  },
  jf = [
    {
      id: 1,
      name: "GNA IntelleX",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Placeholder_logo.png",
      link: "https://gnaintellex.com",
    },
    {
      id: 2,
      name: "Creative Studio",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Placeholder_logo.png",
      link: "#",
    },
    {
      id: 3,
      name: "MediaWorks",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Placeholder_logo.png",
      link: "#",
    },
    {
      id: 4,
      name: "DesignLab",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Placeholder_logo.png",
      link: "#",
    },
    {
      id: 5,
      name: "NextGen Media",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Placeholder_logo.png",
      link: "#",
    },
  ],
  tC = () =>
    g("section", {
      className: "relative py-24 bg-black text-white overflow-hidden",
      children: M("div", {
        className: "max-w-7xl mx-auto px-6",
        children: [
          M(A.div, {
            className: "text-center mb-12",
            initial: { opacity: 0, y: -20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: !0 },
            children: [
              g("h2", {
                className:
                  "text-3xl md:text-4xl font-extrabold text-purple-500 uppercase",
                children: "Our Partners",
              }),
              g("div", {
                className: "w-20 h-1 bg-purple-500 rounded-full mx-auto mt-2",
              }),
              g("p", {
                className: "text-gray-400 mt-4 text-lg",
                children:
                  "We collaborate with industry leaders to deliver the best services.",
              }),
            ],
          }),
          g("div", {
            className: "relative overflow-hidden",
            children: g(A.div, {
              className: "flex gap-10 w-max",
              animate: { x: ["0%", "-50%"] },
              transition: {
                repeat: 1 / 0,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
              children: [...jf, ...jf].map((e, t) =>
                g(
                  "a",
                  {
                    href: e.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "flex items-center justify-center p-4 bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105",
                    children: g("img", {
                      src: e.logo,
                      alt: e.name,
                      className: "max-h-20 object-contain",
                    }),
                  },
                  t
                )
              ),
            }),
          }),
        ],
      }),
    }),
  Ge = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "CEO, Creative Co.",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      message:
        "Okello Studios transformed our brand! The visuals and storytelling exceeded our expectations.",
    },
    {
      id: 2,
      name: "David Smith",
      role: "Marketing Head, MediaWorks",
      photo: "https://randomuser.me/api/portraits/men/46.jpg",
      message:
        "Their professionalism and creativity are unmatched. Highly recommend for video and web projects.",
    },
    {
      id: 3,
      name: "Sara Williams",
      role: "Entrepreneur",
      photo: "https://randomuser.me/api/portraits/women/48.jpg",
      message:
        "A phenomenal team! Our campaign engagement increased dramatically thanks to Okello Studios.",
    },
  ],
  Xg = () => {
    const [e, t] = x.useState(0);
    x.useEffect(() => {
      const o = setInterval(() => {
        t((s) => (s + 1) % Ge.length);
      }, 6e3);
      return () => clearInterval(o);
    }, []);
    const n = (o) => t(o),
      r = () => t((o) => (o + 1) % Ge.length),
      i = () => t((o) => (o - 1 + Ge.length) % Ge.length);
    return M("section", {
      className: "relative py-24 overflow-hidden bg-black text-white",
      children: [
        [...Array(15)].map((o, s) =>
          g(
            A.div,
            {
              className: "absolute bg-purple-500 rounded-full opacity-20",
              style: {
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              },
              animate: { y: [0, 20, 0] },
              transition: {
                duration: Math.random() * 4 + 4,
                repeat: 1 / 0,
                ease: "easeInOut",
              },
            },
            s
          )
        ),
        M("div", {
          className: "max-w-4xl mx-auto px-6 text-center",
          children: [
            g("h2", {
              className:
                "text-3xl md:text-4xl font-extrabold text-purple-500 uppercase mb-2",
              children: "What Our Clients Say",
            }),
            g("div", {
              className: "w-20 h-1 bg-purple-500 rounded-full mx-auto mb-10",
            }),
            g(mi, {
              children: M(
                A.div,
                {
                  initial: { opacity: 0, x: 100 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -100 },
                  transition: { duration: 0.8 },
                  className: "bg-gray-900 rounded-2xl p-10 shadow-2xl relative",
                  children: [
                    M("p", {
                      className: "text-gray-300 text-lg md:text-xl mb-6",
                      children: ['"', Ge[e].message, '"'],
                    }),
                    M("div", {
                      className: "flex items-center justify-center gap-4",
                      children: [
                        g("img", {
                          src: Ge[e].photo,
                          alt: Ge[e].name,
                          className:
                            "w-16 h-16 rounded-full object-cover border-2 border-purple-500",
                        }),
                        M("div", {
                          className: "text-left",
                          children: [
                            g("h4", {
                              className: "font-bold text-purple-500 text-lg",
                              children: Ge[e].name,
                            }),
                            g("p", {
                              className: "text-gray-400 text-sm",
                              children: Ge[e].role,
                            }),
                          ],
                        }),
                      ],
                    }),
                    g("div", {
                      className:
                        "absolute top-1/2 -translate-y-1/2 left-6 md:left-4 cursor-pointer text-purple-500 hover:text-white transition text-3xl select-none",
                      onClick: i,
                      children: "❮",
                    }),
                    g("div", {
                      className:
                        "absolute top-1/2 -translate-y-1/2 right-6 md:right-4 cursor-pointer text-purple-500 hover:text-white transition text-3xl select-none",
                      onClick: r,
                      children: "❯",
                    }),
                  ],
                },
                Ge[e].id
              ),
            }),
            g("div", {
              className: "flex justify-center mt-6 gap-3",
              children: Ge.map((o, s) =>
                g(
                  "span",
                  {
                    onClick: () => n(s),
                    className: `w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                      e === s ? "bg-purple-500 scale-125" : "bg-gray-600"
                    }`,
                  },
                  s
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  nC = () =>
    M(Qt, {
      children: [
        g(mr, {}),
        g(Zk, {}),
        g(Gg, {}),
        g(Qg, {}),
        g(tC, {}),
        g(Xg, {}),
        g(Yg, {}),
        g(A.a, {
          href: "https://wa.me/250781288442",
          target: "_blank",
          rel: "noopener noreferrer",
          className:
            "fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl",
          style: { zIndex: 9999 },
          animate: { y: [0, -8, 0] },
          transition: {
            duration: 2,
            repeat: 1 / 0,
            repeatType: "loop",
            ease: "easeInOut",
          },
          whileHover: { scale: 1.1, boxShadow: "0 0 25px rgba(0,255,0,0.8)" },
          children: g(Ni, { size: 28 }),
        }),
        g(A.a, {
          href: "tel:+250781288442",
          className:
            "fixed bottom-20 right-6 bg-purple-500 text-white p-4 rounded-full shadow-2xl",
          style: { zIndex: 9999 },
          animate: { y: [0, -8, 0] },
          transition: {
            duration: 2,
            repeat: 1 / 0,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          },
          whileHover: { scale: 1.1, boxShadow: "0 0 25px rgba(128,0,255,0.8)" },
          children: g(Mi, { size: 28 }),
        }),
      ],
    }),
  rC = [
    {
      id: 1,
      name: "Olivier Niyigena",
      role: "Founder & Coach",
      phone: "+250 781 288 442",
    },
    {
      id: 2,
      name: "Josue Ntwari",
      role: "Assistant",
      phone: "+250 788 234 567",
    },
  ],
  iC = () => {
    const e = Array.from({ length: 25 });
    return M("section", {
      className: "relative py-24 overflow-hidden",
      children: [
        M("div", {
          className: "absolute inset-0 z-0",
          children: [
            g("div", {
              className:
                "absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90",
            }),
            e.map((t, n) =>
              g(
                A.div,
                {
                  className: "absolute rounded-full bg-purple-500 opacity-30",
                  style: {
                    width: `${5 + Math.random() * 15}px`,
                    height: `${5 + Math.random() * 15}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  },
                  animate: {
                    y: [0, 20 + Math.random() * 20, 0],
                    x: [0, 10 + Math.random() * 10, 0],
                    opacity: [0.2, 0.6, 0.2],
                  },
                  transition: {
                    duration: 8 + Math.random() * 5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: Math.random() * 5,
                  },
                },
                n
              )
            ),
          ],
        }),
        M("div", {
          className: "relative z-10 max-w-7xl mx-auto px-6",
          children: [
            M(A.div, {
              className: "text-center mb-16",
              initial: { opacity: 0, y: -20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              viewport: { once: !0 },
              children: [
                g("h2", {
                  className:
                    "text-3xl md:text-4xl font-extrabold text-purple-500 uppercase",
                  children: "Our Executive Committee",
                }),
                g("div", {
                  className: "w-24 h-1 bg-purple-500 rounded-full mx-auto mt-3",
                }),
              ],
            }),
            g("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10",
              children: rC.map((t, n) =>
                M(
                  A.div,
                  {
                    className:
                      "bg-white/10 backdrop-blur-md rounded-3xl border border-gray-700 hover:border-purple-500 hover:scale-105 hover:shadow-2xl transition-all duration-500 p-6 text-center",
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: n * 0.2 },
                    viewport: { once: !0 },
                    children: [
                      g("div", {
                        className: "mb-5",
                        children: g("div", {
                          className:
                            "w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-white shadow-lg",
                          children: t.name
                            .split(" ")
                            .map((r) => r[0])
                            .join(""),
                        }),
                      }),
                      g("h3", {
                        className:
                          "text-xl md:text-2xl font-bold text-white mb-2",
                        children: t.name,
                      }),
                      g("p", {
                        className: "text-gray-300 italic mb-2",
                        children: t.role,
                      }),
                      g("p", {
                        className: "text-gray-200 font-medium",
                        children: t.phone,
                      }),
                    ],
                  },
                  t.id
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  Cs = () =>
    M("footer", {
      className: "relative z-10 py-20 bg-black text-white overflow-hidden",
      children: [
        g(A.div, {
          className: "absolute inset-0 w-full h-full pointer-events-none",
          initial: { y: 50 },
          animate: { y: [-30, 30, -30] },
          transition: { duration: 20, repeat: 1 / 0, ease: "easeInOut" },
          children: g("div", {
            className:
              "absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-600 via-purple-900 to-black opacity-30 blur-3xl",
          }),
        }),
        M("div", {
          className:
            "relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12",
          children: [
            M(A.div, {
              initial: { x: -50, opacity: 0 },
              whileInView: { x: 0, opacity: 1 },
              transition: { duration: 0.8 },
              children: [
                M("h2", {
                  className: "text-2xl font-extrabold text-purple-500 mb-4",
                  children: [
                    "Okello St",
                    g("span", { className: "text-white", children: "udio" }),
                    "'s",
                  ],
                }),
                g("p", {
                  className: "text-gray-400 leading-relaxed",
                  children:
                    "Rwanda’s premier creative and production studio specializing in photography, branding, web & digital experiences. Crafting visually compelling stories.",
                }),
                M("div", {
                  className: "flex gap-4 mt-4",
                  children: [
                    g("a", {
                      href: "#",
                      className: "hover:text-purple-500 transition",
                      children: g(fm, { className: "w-6 h-6" }),
                    }),
                    g("a", {
                      href: "#",
                      className: "hover:text-purple-500 transition",
                      children: g(pm, { className: "w-6 h-6" }),
                    }),
                    g("a", {
                      href: "#",
                      className: "hover:text-purple-500 transition",
                      children: g(dm, { className: "w-6 h-6" }),
                    }),
                    g("a", {
                      href: "mailto:info@okellostudio.com",
                      className: "hover:text-purple-500 transition",
                      children: g(hm, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              ],
            }),
            M(A.div, {
              initial: { y: 50, opacity: 0 },
              whileInView: { y: 0, opacity: 1 },
              transition: { duration: 0.8 },
              children: [
                g("h3", {
                  className: "text-xl font-bold text-purple-500 mb-4",
                  children: "Quick Links",
                }),
                M("ul", {
                  className: "space-y-2",
                  children: [
                    g("li", {
                      children: g(Ae, {
                        to: "/",
                        className: "hover:text-purple-500 transition",
                        children: "Home",
                      }),
                    }),
                    g("li", {
                      children: g(Ae, {
                        to: "/about",
                        className: "hover:text-purple-500 transition",
                        children: "About",
                      }),
                    }),
                    g("li", {
                      children: g(Ae, {
                        to: "/services",
                        className: "hover:text-purple-500 transition",
                        children: "Services",
                      }),
                    }),
                    g("li", {
                      children: g(Ae, {
                        to: "/gallery",
                        className: "hover:text-purple-500 transition",
                        children: "Gallery",
                      }),
                    }),
                    g("li", {
                      children: g(Ae, {
                        to: "/contact",
                        className: "hover:text-purple-500 transition",
                        children: "Contact",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            M(A.div, {
              initial: { x: 50, opacity: 0 },
              whileInView: { x: 0, opacity: 1 },
              transition: { duration: 0.8 },
              children: [
                g("h3", {
                  className: "text-xl font-bold text-purple-500 mb-4",
                  children: "Subscribe",
                }),
                g("p", {
                  className: "text-gray-400 mb-4",
                  children:
                    "Get our latest updates and offers directly in your inbox.",
                }),
                M("div", {
                  className: "flex gap-2",
                  children: [
                    g("input", {
                      type: "email",
                      placeholder: "Your email",
                      className:
                        "w-full px-4 py-2 rounded-l-full bg-gray-900 text-white focus:outline-none border border-gray-700",
                    }),
                    g("button", {
                      className:
                        "px-6 py-2 bg-purple-500 rounded-r-full text-black font-semibold hover:bg-purple-600 transition",
                      children: "Subscribe",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        M("div", {
          className:
            "relative z-10 mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4 p-4",
          children: [
            M("span", {
              children: [
                "© ",
                new Date().getFullYear(),
                " Okello Studios. All rights reserved.",
              ],
            }),
            M("span", {
              children: [
                "Powered by",
                " ",
                g("a", {
                  href: "https://gnintellex.netlify.app",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-purple-500 hover:underline font-semibold",
                  children: "GNA IntelleX",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  oC = () =>
    M(Qt, {
      children: [
        g(mr, {}),
        g(Gg, {}),
        g(iC, {}),
        g(Xg, {}),
        g(Cs, {}),
        g(A.a, {
          href: "https://wa.me/250781288442",
          target: "_blank",
          rel: "noopener noreferrer",
          className:
            "fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-[9999]",
          animate: { y: [0, -8, 0] },
          transition: {
            duration: 2,
            repeat: 1 / 0,
            repeatType: "loop",
            ease: "easeInOut",
          },
          whileHover: { scale: 1.1, boxShadow: "0 0 25px rgba(0,255,0,0.8)" },
          children: g(Ni, { size: 28 }),
        }),
        g(A.a, {
          href: "tel:+250781288442",
          className:
            "fixed bottom-20 right-6 bg-purple-500 text-white p-4 rounded-full shadow-2xl z-[9999]",
          animate: { y: [0, -8, 0] },
          transition: {
            duration: 2,
            repeat: 1 / 0,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          },
          whileHover: { scale: 1.1, boxShadow: "0 0 25px rgba(128,0,255,0.8)" },
          children: g(Mi, { size: 28 }),
        }),
      ],
    }),
  sC = () => {
    const [e, t] = x.useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      }),
      n = (i) => {
        const { name: o, value: s } = i.target;
        t({ ...e, [o]: s });
      },
      r = (i) => {
        i.preventDefault(),
          console.log("Contact Form Data:", e),
          alert("Thank you! Your message has been sent to Olivier."),
          t({ name: "", email: "", subject: "", message: "" });
      };
    return M(Qt, {
      children: [
        g(mr, {}),
        M("section", {
          className: "relative py-24 bg-black text-white",
          children: [
            M("div", {
              className: "max-w-7xl mx-auto px-6",
              children: [
                M(A.div, {
                  className: "text-center mb-12",
                  initial: { opacity: 0, y: -20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  viewport: { once: !0 },
                  children: [
                    g("h2", {
                      className:
                        "text-3xl md:text-4xl font-extrabold text-purple-500 uppercase",
                      children: "Contact Olivier",
                    }),
                    g("div", {
                      className:
                        "w-20 h-1 bg-purple-500 rounded-full mx-auto mt-2",
                    }),
                    g("p", {
                      className: "text-gray-400 mt-4 text-lg",
                      children:
                        "Reach out for training sessions, bookings at The Real Boxing Club, Soho Gym, or collaboration inquiries.",
                    }),
                  ],
                }),
                M("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                  children: [
                    M(A.div, {
                      className: "space-y-6",
                      initial: { opacity: 0, x: -50 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 0.8 },
                      viewport: { once: !0 },
                      children: [
                        g("h3", {
                          className: "text-2xl font-bold text-purple-500",
                          children: "Contact Info",
                        }),
                        M("p", {
                          className: "text-gray-400",
                          children: [
                            "Olivier – Boxing Trainer ",
                            g("br", {}),
                            "The Real Boxing Club & Soho Gym ",
                            g("br", {}),
                            "Kigali, Rwanda ",
                            g("br", {}),
                            "Phone:",
                            " ",
                            g("a", {
                              href: "tel:+250781288442",
                              className: "text-purple-400 hover:underline",
                              children: "+250 788 123 456",
                            }),
                            g("br", {}),
                            "Email:",
                            " ",
                            g("a", {
                              href: "mailto:olivier@boxingclub.com",
                              className: "text-purple-400 hover:underline",
                              children: "olivier@boxingclub.com",
                            }),
                          ],
                        }),
                        M("div", {
                          className: "flex items-center space-x-4 mt-4",
                          children: [
                            g("a", {
                              href: "#",
                              target: "_blank",
                              className: "text-purple-500 hover:text-white",
                              children: g(fm, { size: 28 }),
                            }),
                            g("a", {
                              href: "#",
                              target: "_blank",
                              className: "text-purple-500 hover:text-white",
                              children: g(pm, { size: 28 }),
                            }),
                            g("a", {
                              href: "#",
                              target: "_blank",
                              className: "text-purple-500 hover:text-white",
                              children: g(dm, { size: 28 }),
                            }),
                            g("a", {
                              href: "mailto:olivier@boxingclub.com",
                              className: "text-purple-500 hover:text-white",
                              children: g(hm, { size: 28 }),
                            }),
                          ],
                        }),
                        g("div", {
                          className:
                            "mt-6 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800",
                          children: g("iframe", {
                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d30.058!3d-1.944",
                            width: "100%",
                            height: "300",
                            style: { border: 0 },
                            allowFullScreen: !0,
                            loading: "lazy",
                            className: "rounded-2xl",
                          }),
                        }),
                      ],
                    }),
                    M(A.form, {
                      onSubmit: r,
                      className:
                        "bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-6",
                      initial: { opacity: 0, x: 50 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 0.8 },
                      viewport: { once: !0 },
                      children: [
                        M("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                          children: [
                            g("input", {
                              type: "text",
                              name: "name",
                              value: e.name,
                              onChange: n,
                              placeholder: "Full Name",
                              required: !0,
                              className:
                                "w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition",
                            }),
                            g("input", {
                              type: "email",
                              name: "email",
                              value: e.email,
                              onChange: n,
                              placeholder: "Email Address",
                              required: !0,
                              className:
                                "w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition",
                            }),
                          ],
                        }),
                        g("input", {
                          type: "text",
                          name: "subject",
                          value: e.subject,
                          onChange: n,
                          placeholder: "Subject",
                          required: !0,
                          className:
                            "w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition",
                        }),
                        g("textarea", {
                          name: "message",
                          value: e.message,
                          onChange: n,
                          placeholder: "Message",
                          rows: 5,
                          required: !0,
                          className:
                            "w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition",
                        }),
                        g(A.button, {
                          type: "submit",
                          whileHover: {
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(128,0,255,0.6)",
                          },
                          whileTap: { scale: 0.95 },
                          className:
                            "w-full py-3 font-semibold rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition",
                          children: "Send Message",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            g(A.a, {
              href: "https://wa.me/250781288442",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl",
              style: { zIndex: 9999 },
              animate: { y: [0, -8, 0] },
              transition: {
                duration: 2,
                repeat: 1 / 0,
                repeatType: "loop",
                ease: "easeInOut",
              },
              whileHover: {
                scale: 1.1,
                boxShadow: "0 0 25px rgba(0,255,0,0.8)",
              },
              children: g(Ni, { size: 28 }),
            }),
            g(A.a, {
              href: "tel:+250781288442",
              className:
                "fixed bottom-20 right-6 bg-purple-500 text-white p-4 rounded-full shadow-2xl",
              style: { zIndex: 9999 },
              animate: { y: [0, -8, 0] },
              transition: {
                duration: 2,
                repeat: 1 / 0,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.5,
              },
              whileHover: {
                scale: 1.1,
                boxShadow: "0 0 25px rgba(128,0,255,0.8)",
              },
              children: g(Mi, { size: 28 }),
            }),
          ],
        }),
        g(Cs, {}),
      ],
    });
  },
  aC = [
    "Boxing Training",
    "Personal Coaching",
    "Photography",
    "Video Production",
    "Social Media Content",
  ],
  lC = ({ defaultService: e }) => {
    const [t, n] = x.useState(1),
      [r, i] = x.useState({
        name: "",
        email: "",
        phone: "",
        service: e || "",
        date: "",
        time: "",
        message: "",
      });
    x.useEffect(() => {
      e && i((u) => ({ ...u, service: e }));
    }, [e]);
    const o = (u) => {
        const { name: c, value: d } = u.target;
        i({ ...r, [c]: d });
      },
      s = () => n((u) => Math.min(u + 1, 3)),
      a = () => n((u) => Math.max(u - 1, 1)),
      l = (u) => {
        u.preventDefault(),
          console.log("Booking Data:", r),
          alert(
            `Thank you! Your booking for ${r.service} with Coach Olivier has been submitted.`
          ),
          i({
            name: "",
            email: "",
            phone: "",
            service: e || "",
            date: "",
            time: "",
            message: "",
          }),
          n(1);
      };
    return M(Qt, {
      children: [
        g(mr, {}),
        g("section", {
          className: "relative py-24 bg-black text-white min-h-screen",
          children: M("div", {
            className: "max-w-5xl mx-auto px-6",
            children: [
              M(A.div, {
                className: "text-center mb-12",
                initial: { y: -20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                transition: { duration: 0.8 },
                children: [
                  g("h2", {
                    className:
                      "text-4xl md:text-5xl font-extrabold text-purple-500 uppercase",
                    children: "Book a Session with Olivier",
                  }),
                  g("div", {
                    className:
                      "w-28 h-1 bg-purple-500 rounded-full mx-auto mt-2",
                  }),
                  g("p", {
                    className: "text-gray-400 mt-4 text-lg",
                    children:
                      "Step-by-step booking for training or services at The Real Boxing Club & Soho Gym.",
                  }),
                ],
              }),
              g("div", {
                className: "flex justify-between items-center mb-8",
                children: [1, 2, 3].map((u) =>
                  g(
                    A.div,
                    {
                      className: `w-1/3 h-2 rounded-full mx-1 ${
                        t >= u ? "bg-purple-500" : "bg-gray-700"
                      }`,
                      layout: !0,
                    },
                    u
                  )
                ),
              }),
              M(A.form, {
                className: "bg-gray-900 rounded-3xl shadow-2xl p-8 space-y-6",
                onSubmit: l,
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { duration: 0.8 },
                children: [
                  t === 1 &&
                    M(A.div, {
                      initial: { opacity: 0, x: -50 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: 50 },
                      className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                      children: [
                        g("input", {
                          type: "text",
                          name: "name",
                          placeholder: "Full Name",
                          value: r.name,
                          onChange: o,
                          required: !0,
                          className:
                            "w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition",
                        }),
                        g("input", {
                          type: "email",
                          name: "email",
                          placeholder: "Email Address",
                          value: r.email,
                          onChange: o,
                          required: !0,
                          className:
                            "w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition",
                        }),
                        g("input", {
                          type: "tel",
                          name: "phone",
                          placeholder: "Phone Number",
                          value: r.phone,
                          onChange: o,
                          required: !0,
                          className:
                            "w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition",
                        }),
                      ],
                    }),
                  t === 2 &&
                    M(A.div, {
                      initial: { opacity: 0, x: 50 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: -50 },
                      className: "space-y-6",
                      children: [
                        g("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                          children: aC.map((u, c) =>
                            g(
                              "div",
                              {
                                onClick: () => i({ ...r, service: u }),
                                className: `p-4 rounded-xl border-2 cursor-pointer text-center transition ${
                                  r.service === u
                                    ? "bg-purple-500 border-purple-500 text-black shadow-lg"
                                    : "border-gray-700 hover:border-purple-500 hover:bg-gray-800"
                                }`,
                                children: u,
                              },
                              c
                            )
                          ),
                        }),
                        M("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                          children: [
                            g("input", {
                              type: "date",
                              name: "date",
                              value: r.date,
                              onChange: o,
                              required: !0,
                              className:
                                "w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition",
                            }),
                            g("input", {
                              type: "time",
                              name: "time",
                              value: r.time,
                              onChange: o,
                              required: !0,
                              className:
                                "w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition",
                            }),
                          ],
                        }),
                      ],
                    }),
                  t === 3 &&
                    M(A.div, {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 },
                      children: [
                        g("textarea", {
                          name: "message",
                          placeholder: "Additional Details (Optional)",
                          value: r.message,
                          onChange: o,
                          rows: 4,
                          className:
                            "w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition",
                        }),
                        M("div", {
                          className: "mt-4 bg-gray-800 rounded-xl p-4",
                          children: [
                            g("h4", {
                              className: "text-purple-500 font-bold mb-2",
                              children: "Summary",
                            }),
                            M("p", {
                              children: [
                                g("strong", { children: "Service:" }),
                                " ",
                                r.service,
                              ],
                            }),
                            M("p", {
                              children: [
                                g("strong", { children: "Date:" }),
                                " ",
                                r.date,
                              ],
                            }),
                            M("p", {
                              children: [
                                g("strong", { children: "Time:" }),
                                " ",
                                r.time,
                              ],
                            }),
                            M("p", {
                              children: [
                                g("strong", { children: "Name:" }),
                                " ",
                                r.name,
                              ],
                            }),
                            M("p", {
                              children: [
                                g("strong", { children: "Email:" }),
                                " ",
                                r.email,
                              ],
                            }),
                            M("p", {
                              children: [
                                g("strong", { children: "Phone:" }),
                                " ",
                                r.phone,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  M("div", {
                    className: "flex justify-between mt-6",
                    children: [
                      t > 1 &&
                        g("button", {
                          type: "button",
                          onClick: a,
                          className:
                            "px-6 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition",
                          children: "Previous",
                        }),
                      t < 3
                        ? g("button", {
                            type: "button",
                            onClick: s,
                            className:
                              "ml-auto px-6 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition",
                            children: "Next",
                          })
                        : g(A.button, {
                            type: "submit",
                            whileHover: {
                              scale: 1.05,
                              boxShadow: "0 0 20px rgba(128,0,255,0.6)",
                            },
                            whileTap: { scale: 0.95 },
                            className:
                              "ml-auto px-6 py-2 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition",
                            children: "Submit Booking",
                          }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        g(Cs, {}),
      ],
    });
  },
  uC = () => M(Qt, { children: [g(mr, {}), g(Qg, {}), g(Cs, {})] }),
  cC = () =>
    g(Qt, {
      children: M(x1, {
        children: [
          g(ln, { path: "/", element: g(nC, {}) }),
          g(ln, { path: "/gallery", element: g(Yg, {}) }),
          g(ln, { path: "/about", element: g(oC, {}) }),
          g(ln, { path: "/booking", element: g(lC, {}) }),
          g(ln, { path: "/contact", element: g(sC, {}) }),
          g(ln, { path: "/services", element: g(uC, {}) }),
        ],
      }),
    });
ma.createRoot(document.getElementById("root")).render(
  g(m0.StrictMode, { children: M(U1, { children: [g(cC, {}), "   "] }) })
);
