const zn = 2, m = /* @__PURE__ */ Symbol("uninitialized"), ft = !1;
var jt = Array.isArray, It = Array.prototype.indexOf, Te = Array.prototype.includes, Lt = Array.from, Yt = Object.defineProperty, ve = Object.getOwnPropertyDescriptor, qt = Object.prototype, Bt = Array.prototype, Ut = Object.getPrototypeOf, Ze = Object.isExtensible;
const Vt = () => {
};
function zt(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ut() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const k = 2, ge = 4, De = 8, ot = 1 << 24, R = 16, B = 32, U = 64, qe = 128, A = 512, E = 1024, b = 2048, N = 4096, M = 8192, D = 16384, ce = 32768, Je = 1 << 25, Ae = 65536, Ce = 1 << 17, Ht = 1 << 18, he = 1 << 19, $t = 1 << 20, te = 65536, Re = 1 << 21, ue = 1 << 22, $ = 1 << 23, Ie = /* @__PURE__ */ Symbol("$state"), Kt = /* @__PURE__ */ Symbol("attributes"), Gt = /* @__PURE__ */ Symbol("class"), Wt = /* @__PURE__ */ Symbol("style"), Be = /* @__PURE__ */ Symbol("text"), we = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Xt() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Zt() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Jt() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Qt() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function en() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function tn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function nn() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function rn() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function at(e) {
  return e === this.v;
}
let sn = !1, P = null;
function oe(e) {
  P = e;
}
function ln(e, t = !1, n) {
  P = {
    p: P,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      p
    ),
    l: null
  };
}
function fn(e) {
  var t = (
    /** @type {ComponentContext} */
    P
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Cn(r);
  }
  return t.i = !0, P = t.p, /** @type {T} */
  {};
}
function ct() {
  return !0;
}
let le = [];
function un() {
  var e = le;
  le = [], zt(e);
}
function X(e) {
  if (le.length === 0) {
    var t = le;
    queueMicrotask(() => {
      t === le && un();
    });
  }
  le.push(e);
}
function ht(e) {
  var t = p;
  if (t === null)
    return v.f |= $, e;
  if ((t.f & ce) === 0 && (t.f & ge) === 0)
    throw e;
  H(e, t);
}
function H(e, t) {
  if (!(t !== null && (t.f & D) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & qe) !== 0) {
        if ((t.f & ce) === 0)
          throw e;
        try {
          t.b.error(e);
          return;
        } catch (n) {
          e = n;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
const on = -7169;
function w(e, t) {
  e.f = e.f & on | t;
}
function He(e) {
  (e.f & A) !== 0 || e.deps === null ? w(e, E) : w(e, N);
}
function _t(e) {
  if (e !== null)
    for (const t of e)
      (t.f & k) === 0 || (t.f & te) === 0 || (t.f ^= te, _t(
        /** @type {Derived} */
        t.deps
      ));
}
function dt(e, t, n) {
  (e.f & b) !== 0 ? t.add(e) : (e.f & N) !== 0 && n.add(e), _t(e.deps), w(e, E);
}
function Pe(e) {
  var t = v, n = p;
  C(null), L(null);
  try {
    return e();
  } finally {
    C(t), L(n);
  }
}
function an(e) {
  let t = 0, n = Me(0), r;
  return () => {
    We() && (J(n), Fn(() => (t === 0 && (r = Yn(() => e(() => pe(n)))), t += 1, () => {
      X(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, pe(n));
      });
    })));
  };
}
var cn = Ae | he;
function hn(e, t, n, r) {
  new _n(e, t, n, r);
}
class _n {
  /** @type {Boundary | null} */
  parent;
  is_pending = !1;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #s;
  /** @type {TemplateNode | null} */
  #v = null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #c;
  /** @type {Effect} */
  #n;
  /** @type {Effect | null} */
  #l = null;
  /** @type {Effect | null} */
  #e = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {DocumentFragment | null} */
  #t = null;
  #d = 0;
  #f = 0;
  #u = !1;
  /** @type {Set<Effect>} */
  #a = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #p = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #o = null;
  #y = an(() => (this.#o = Me(this.#d), () => {
    this.#o = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    this.#s = t, this.#r = n, this.#c = (s) => {
      var u = (
        /** @type {Effect} */
        p
      );
      u.b = this, u.f |= qe, r(s);
    }, this.parent = /** @type {Effect} */
    p.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), this.#n = Nn(() => {
      this.#h();
    }, cn);
  }
  #g() {
    try {
      this.#l = G(() => this.#c(this.#s));
    } catch (t) {
      this.error(t);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #b(t) {
    const n = this.#r.failed, { reset: r, invoke_onerror: i } = this.#w(t);
    X(i), n && (this.#i = G(() => {
      n(
        this.#s,
        () => t,
        () => r
      );
    }));
  }
  /**
   * Creates the `reset` function for a failed boundary, along with a function
   * that invokes `onerror` with it (if provided)
   * @param {unknown} error
   * @returns {{ reset: () => void, invoke_onerror: () => void }}
   */
  #w(t) {
    var n = !1, r = !1;
    const i = () => {
      if (n) {
        rn();
        return;
      }
      n = !0, r && tn(), this.#i !== null && xe(this.#i, () => {
        this.#i = null;
      }), this.#_(() => {
        this.#h();
      });
    };
    return { reset: i, invoke_onerror: () => {
      try {
        r = !0, this.#r.onerror?.(t, i), r = !1;
      } catch (u) {
        H(u, this.#n && this.#n.parent);
      }
    } };
  }
  #E() {
    const t = this.#r.pending;
    t && (this.is_pending = !0, this.#e = G(() => t(this.#s)), X(() => {
      var n = this.#t = document.createDocumentFragment(), r = St();
      n.append(r), this.#l = this.#_(() => G(() => this.#c(r))), this.#f === 0 && (this.#s.before(n), this.#t = null, xe(
        /** @type {Effect} */
        this.#e,
        () => {
          this.#e = null;
        }
      ), this.#m(
        /** @type {Batch} */
        g
      ));
    }));
  }
  #h() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#f = 0, this.#d = 0, this.#l = G(() => {
        this.#c(this.#s);
      }), this.#f > 0) {
        var t = this.#t = document.createDocumentFragment();
        Mn(this.#l, t);
        const n = (
          /** @type {(anchor: Node) => void} */
          this.#r.pending
        );
        this.#e = G(() => n(this.#s));
      } else
        this.#m(
          /** @type {Batch} */
          g
        );
    } catch (n) {
      this.error(n);
    }
  }
  /**
   * @param {Batch} batch
   */
  #m(t) {
    this.is_pending = !1, t.transfer_effects(this.#a, this.#p);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    dt(t, this.#a, this.#p);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #_(t) {
    var n = p, r = v, i = P;
    L(this.#n), C(this.#n), oe(this.#n.ctx);
    try {
      return ne.ensure(), t();
    } catch (s) {
      return ht(s), null;
    } finally {
      L(n), C(r), oe(i);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  #k(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#k(t, n);
      return;
    }
    this.#f += t, this.#f === 0 && (this.#m(n), this.#e && xe(this.#e, () => {
      this.#e = null;
    }), this.#t && (this.#s.before(this.#t), this.#t = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    this.#k(t, n), this.#d += t, !(!this.#o || this.#u) && (this.#u = !0, X(() => {
      this.#u = !1, this.#o && Ne(this.#o, this.#d);
    }));
  }
  get_effect_pending() {
    return this.#y(), J(
      /** @type {Source<number>} */
      this.#o
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!this.#r.onerror && !this.#r.failed)
      throw t;
    g?.is_fork ? (this.#l && g.skip_effect(this.#l), this.#e && g.skip_effect(this.#e), this.#i && g.skip_effect(this.#i), g.oncommit(() => {
      this.#x(t);
    })) : this.#x(t);
  }
  /**
   * @param {unknown} error
   */
  #x(t) {
    this.#l && (j(this.#l), this.#l = null), this.#e && (j(this.#e), this.#e = null), this.#i && (j(this.#i), this.#i = null);
    let n = this.#r.failed;
    const r = (i) => {
      const { reset: s, invoke_onerror: u } = this.#w(i);
      u(), n && (this.#i = this.#_(() => {
        try {
          return G(() => {
            var f = (
              /** @type {Effect} */
              p
            );
            f.b = this, f.f |= qe, n(
              this.#s,
              () => i,
              () => s
            );
          });
        } catch (f) {
          return H(
            f,
            /** @type {Effect} */
            this.#n.parent
          ), null;
        }
      }));
    };
    X(() => {
      var i;
      try {
        i = this.transform_error(t);
      } catch (s) {
        H(s, this.#n && this.#n.parent);
        return;
      }
      i !== null && typeof i == "object" && typeof /** @type {any} */
      i.then == "function" ? i.then(
        r,
        /** @param {unknown} e */
        (s) => H(s, this.#n && this.#n.parent)
      ) : r(i);
    });
  }
}
function dn(e, t, n, r) {
  const i = pn;
  var s = e.filter((h) => !h.settled), u = t.map(i);
  if (n.length === 0 && s.length === 0) {
    r(u);
    return;
  }
  var f = (
    /** @type {Effect} */
    p
  ), l = vn(), o = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function _(h) {
    if ((f.f & D) === 0) {
      l();
      try {
        r([...u, ...h]);
      } catch (d) {
        H(d, f);
      }
      Oe();
    }
  }
  var c = vt();
  if (n.length === 0) {
    o.then(() => _([])).finally(c);
    return;
  }
  function a() {
    Promise.all(n.map((h) => /* @__PURE__ */ gn(h))).then(_).catch((h) => H(h, f)).finally(c);
  }
  o ? o.then(() => {
    l(), a(), Oe();
  }) : a();
}
function vn() {
  var e = (
    /** @type {Effect} */
    p
  ), t = v, n = P, r = (
    /** @type {Batch} */
    g
  );
  return function(s = !0) {
    L(e), C(t), oe(n), s && (e.f & D) === 0 && (r?.activate(), r?.apply());
  };
}
function Oe(e = !0) {
  L(null), C(null), oe(null), e && g?.deactivate();
}
function vt() {
  var e = (
    /** @type {Effect} */
    p
  ), t = e.b, n = (
    /** @type {Batch} */
    g
  ), r = !!t?.is_rendered();
  return t?.update_pending_count(1, n), n.increment(r, e), () => {
    t?.update_pending_count(-1, n), n.decrement(r, e);
  };
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
  var t = k | b;
  return p !== null && (p.f |= he), {
    ctx: P,
    deps: null,
    effects: null,
    equals: at,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      m
    ),
    wv: 0,
    parent: p,
    ac: null
  };
}
const _e = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function gn(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    p
  );
  r === null && Xt();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Me(
    /** @type {V} */
    m
  ), u = !v, f = /* @__PURE__ */ new Set();
  return On(() => {
    var l = (
      /** @type {Effect} */
      p
    ), o = ut();
    i = o.promise;
    try {
      Promise.resolve(e()).then(o.resolve, (h) => {
        h !== we && o.reject(h);
      }).finally(Oe);
    } catch (h) {
      o.reject(h), Oe();
    }
    var _ = (
      /** @type {Batch} */
      g
    );
    if (u) {
      if ((l.f & ce) !== 0)
        var c = vt();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        r.b?.is_rendered()
      )
        _.async_deriveds.get(l)?.reject(_e);
      else
        for (const h of f.values())
          h.reject(_e);
      f.add(o), _.async_deriveds.set(l, o);
    }
    const a = (h, d = void 0) => {
      c?.(), f.delete(o), d !== _e && (_.activate(), d ? (s.f |= $, Ne(s, d)) : ((s.f & $) !== 0 && (s.f ^= $), Ne(s, h)), _.deactivate());
    };
    o.promise.then(a, (h) => a(null, h || "unknown"));
  }), An(() => {
    for (const l of f)
      l.reject(_e);
  }), new Promise((l) => {
    function o(_) {
      function c() {
        _ === i ? l(s) : o(i);
      }
      _.then(c, c);
    }
    o(i);
  });
}
function yn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      j(
        /** @type {Effect} */
        t[n]
      );
  }
}
function $e(e) {
  var t, n = p, r = e.parent;
  if (!re && r !== null && e.v !== m && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (D | M)) !== 0)
    return nn(), e.v;
  L(r);
  try {
    e.f &= ~te, yn(e), t = Dt(e);
  } finally {
    L(n);
  }
  return t;
}
function pt(e) {
  var t = $e(e);
  if (!e.equals(t) && (e.wv = Ft(), (!g?.is_fork || e.deps === null) && (g !== null ? (g.capture(e, t, !0), Ue?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    w(e, E);
    return;
  }
  re || (O !== null ? (We() || g?.is_fork) && O.set(e, t) : He(e));
}
function wn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Pe(() => {
        t.ac.abort(we), t.ac = null;
      }), t.fn !== null && (t.teardown = Vt), ye(t, 0), Xe(t));
}
function gt(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && ae(t);
}
let Le = null, se = null, g = null, Ue = null, O = null, Ve = null, Ye = !1, fe = null, ke = null;
var Qe = 0;
let mn = 1;
class ne {
  id = mn++;
  /** True as soon as `#process` was called */
  #s = !1;
  linked = !0;
  /** @type {Batch | null} */
  #v = null;
  /** @type {Batch | null} */
  #r = null;
  /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
  async_deriveds = /* @__PURE__ */ new Map();
  /**
   * The current values of any signals that are updated in this batch.
   * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Value, [any, boolean]>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Value, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<(batch: Batch) => void>}
   */
  #c = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #n = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #l = 0;
  /**
   * Async effects that are currently in flight, _not_ inside a pending boundary
   * @type {Map<Effect, number>}
   */
  #e = /* @__PURE__ */ new Map();
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #i = null;
  /**
   * The root effects that need to be flushed
   * @type {Effect[]}
   */
  #t = [];
  /**
   * Effects created while this batch was active.
   * @type {Effect[]}
   */
  #d = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #f = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #u = /* @__PURE__ */ new Set();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #a = /* @__PURE__ */ new Map();
  /**
   * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
   * @type {Set<Effect>}
   */
  #p = /* @__PURE__ */ new Set();
  is_fork = !1;
  #o = !1;
  constructor() {
    se === null ? Le = se = this : (se.#r = this, this.#v = se), se = this;
  }
  #y() {
    if (this.is_fork) return !0;
    for (const r of this.#e.keys()) {
      for (var t = r, n = !1; t.parent !== null; ) {
        if (this.#a.has(t)) {
          n = !0;
          break;
        }
        t = t.parent;
      }
      if (!n)
        return !0;
    }
    return !1;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    this.#a.has(t) || this.#a.set(t, { d: [], m: [] }), this.#p.delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = this.#a.get(t);
    if (r) {
      this.#a.delete(t);
      for (var i of r.d)
        w(i, b), n(i);
      for (i of r.m)
        w(i, N), n(i);
    }
    this.#p.add(t);
  }
  #g() {
    this.#s = !0, Qe++ > 1e3 && (this.#_(), bn());
    for (const l of this.#f)
      this.#u.delete(l), w(l, b), this.schedule(l);
    for (const l of this.#u)
      w(l, N), this.schedule(l);
    const t = this.#t;
    this.#t = [], this.apply();
    var n = fe = [], r = [], i = ke = [];
    for (const l of t)
      try {
        this.#b(l, n, r);
      } catch (o) {
        throw mt(l), this.#y() || this.discard(), o;
      }
    if (g = null, i.length > 0) {
      var s = ne.ensure();
      for (const l of i)
        s.schedule(l);
    }
    if (fe = null, ke = null, this.#y()) {
      this.#h(r), this.#h(n);
      for (const [l, o] of this.#a)
        wt(l, o);
      i.length > 0 && /** @type {unknown} */
      g.#g();
      return;
    }
    const u = this.#w();
    if (u) {
      this.#h(r), this.#h(n), u.#E(this);
      return;
    }
    this.#f.clear(), this.#u.clear();
    for (const l of this.#c) l(this);
    this.#c.clear(), Ue = this, et(r), et(n), Ue = null, this.#i?.resolve();
    var f = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      g
    );
    if (this.#l === 0 && (this.#t.length === 0 || f !== null) && this.#_(), this.#t.length > 0)
      if (f !== null) {
        const l = f;
        l.#t.push(...this.#t.filter((o) => !l.#t.includes(o)));
      } else
        f = this;
    f !== null && f.#g();
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #b(t, n, r) {
    t.f ^= E;
    for (var i = t.first; i !== null; ) {
      var s = i.f, u = (s & (B | U)) !== 0, f = u && (s & E) !== 0, l = f || (s & M) !== 0 || this.#a.has(i);
      if (!l && i.fn !== null) {
        u ? i.f ^= E : (s & ge) !== 0 ? n.push(i) : me(i) && ((s & R) !== 0 && this.#u.add(i), ae(i));
        var o = i.first;
        if (o !== null) {
          i = o;
          continue;
        }
      }
      for (; i !== null; ) {
        var _ = i.next;
        if (_ !== null) {
          i = _;
          break;
        }
        i = i.parent;
      }
    }
  }
  #w() {
    for (var t = this.#v; t !== null; ) {
      if (!t.is_fork) {
        for (const [n, [, r]] of this.current)
          if (t.current.has(n) && !r)
            return t;
      }
      t = t.#v;
    }
    return null;
  }
  /**
   * @param {Batch} batch
   */
  #E(t) {
    for (const [r, i] of t.current)
      !this.previous.has(r) && t.previous.has(r) && this.previous.set(r, t.previous.get(r)), this.current.set(r, i);
    for (const [r, i] of t.async_deriveds) {
      const s = this.async_deriveds.get(r);
      s && i.promise.then(s.resolve).catch(s.reject);
    }
    t.async_deriveds.clear(), this.transfer_effects(t.#f, t.#u);
    const n = (r) => {
      var i = r.reactions;
      if (i !== null && !((r.f & k) !== 0 && (r.f & (b | N)) === 0))
        for (const f of i) {
          var s = f.f;
          if ((s & k) !== 0)
            n(
              /** @type {Derived} */
              f
            );
          else {
            var u = (
              /** @type {Effect} */
              f
            );
            s & (ue | R) && !this.async_deriveds.has(u) && (this.#u.delete(u), w(u, b), this.schedule(u));
          }
        }
    };
    for (const r of this.current.keys())
      n(r);
    this.oncommit(() => t.discard()), t.#_(), g = this, this.#g();
  }
  /**
   * @param {Effect[]} effects
   */
  #h(t) {
    for (var n = 0; n < t.length; n += 1)
      dt(t[n], this.#f, this.#u);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== m && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & $) === 0 && (this.current.set(t, [n, r]), O?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    g = this;
  }
  deactivate() {
    g = null, O = null;
  }
  flush() {
    try {
      Ye = !0, g = this, this.#g();
    } finally {
      Qe = 0, Ve = null, fe = null, ke = null, Ye = !1, g = null, O = null, Q.clear();
    }
  }
  discard() {
    for (const t of this.#n) t(this);
    this.#n.clear();
    for (const t of this.async_deriveds.values())
      t.reject(_e);
    this.#_(), this.#i?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    this.#d.push(t);
  }
  #m() {
    for (let c = Le; c !== null; c = c.#r) {
      var t = c.id < this.id, n = [];
      for (const [a, [h, d]] of this.current) {
        if (c.current.has(a)) {
          var r = (
            /** @type {[any, boolean]} */
            c.current.get(a)[0]
          );
          if (t && h !== r)
            c.current.set(a, [h, d]);
          else
            continue;
        }
        n.push(a);
      }
      if (t)
        for (const [a, h] of this.async_deriveds) {
          const d = c.async_deriveds.get(a);
          d && h.promise.then(d.resolve).catch(d.reject);
        }
      var i = [...c.current.keys()].filter(
        (a) => !/** @type {[any, boolean]} */
        c.current.get(a)[1]
      );
      if (!(!c.#s || i.length === 0)) {
        var s = i.filter((a) => !this.current.has(a));
        if (s.length === 0)
          t && c.discard();
        else if (n.length > 0) {
          if (t)
            for (const a of this.#p)
              c.unskip_effect(a, (h) => {
                (h.f & (R | ue)) !== 0 ? c.schedule(h) : c.#h([h]);
              });
          c.activate();
          var u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
          for (var l of n)
            yt(l, s, u, f);
          f = /* @__PURE__ */ new Map();
          var o = [...c.current].filter(([a, h]) => {
            const d = this.current.get(a);
            return d ? d[0] !== h[0] || d[1] !== h[1] : !0;
          }).map(([a]) => a);
          if (o.length > 0)
            for (const a of this.#d)
              (a.f & (D | M | Ce)) === 0 && Ke(a, o, f) && ((a.f & (ue | R)) !== 0 ? (w(a, b), c.schedule(a)) : c.#f.add(a));
          if (c.#t.length > 0 && !c.#o) {
            c.apply();
            for (var _ of c.#t)
              c.#b(_, [], []);
            c.#t = [];
          }
          c.deactivate();
        }
      }
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (this.#l += 1, t) {
      let r = this.#e.get(n) ?? 0;
      this.#e.set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (this.#l -= 1, t) {
      let r = this.#e.get(n) ?? 0;
      r === 1 ? this.#e.delete(n) : this.#e.set(n, r - 1);
    }
    this.#o || (this.#o = !0, X(() => {
      this.#o = !1, this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      this.#f.add(r);
    for (const r of n)
      this.#u.add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    this.#c.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#n.add(t);
  }
  settled() {
    return (this.#i ??= ut()).promise;
  }
  static ensure() {
    if (g === null) {
      const t = g = new ne();
      Ye || X(() => {
        t.#s || t.flush();
      });
    }
    return g;
  }
  apply() {
    {
      O = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Ve = t, t.b?.is_pending && (t.f & (ge | De | ot)) !== 0 && (t.f & ce) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (fe !== null && n === p && (v === null || (v.f & k) === 0))
        return;
      if ((r & (U | B)) !== 0) {
        if ((r & E) === 0)
          return;
        n.f ^= E;
      }
    }
    this.#t.push(n);
  }
  #_() {
    if (this.linked) {
      var t = this.#v, n = this.#r;
      t === null ? Le = n : t.#r = n, n === null ? se = t : n.#v = t, this.linked = !1;
    }
  }
}
function bn() {
  try {
    Zt();
  } catch (e) {
    H(e, Ve);
  }
}
let q = null;
function et(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (D | M)) === 0 && me(r) && (q = /* @__PURE__ */ new Set(), ae(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ct(r), q?.size > 0)) {
        Q.clear();
        for (const i of q) {
          if ((i.f & (D | M)) !== 0) continue;
          const s = [i];
          let u = i.parent;
          for (; u !== null; )
            q.has(u) && (q.delete(u), s.push(u)), u = u.parent;
          for (let f = s.length - 1; f >= 0; f--) {
            const l = s[f];
            (l.f & (D | M)) === 0 && ae(l);
          }
        }
        q.clear();
      }
    }
    q = null;
  }
}
function yt(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & k) !== 0 ? yt(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (ue | R)) !== 0 && (s & b) === 0 && Ke(i, t, r) && (w(i, b), Ge(
        /** @type {Effect} */
        i
      ));
    }
}
function Ke(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Te.call(t, i))
        return !0;
      if ((i.f & k) !== 0 && Ke(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Ge(e) {
  g.schedule(e);
}
function wt(e, t) {
  if (!((e.f & B) !== 0 && (e.f & E) !== 0)) {
    (e.f & b) !== 0 ? t.d.push(e) : (e.f & N) !== 0 && t.m.push(e), w(e, E);
    for (var n = e.first; n !== null; )
      wt(n, t), n = n.next;
  }
}
function mt(e) {
  w(e, E);
  for (var t = e.first; t !== null; )
    mt(t), t = t.next;
}
let Fe = /* @__PURE__ */ new Set();
const Q = /* @__PURE__ */ new Map();
let bt = !1;
function Me(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: at,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function z(e, t) {
  const n = Me(e);
  return jn(n), n;
}
function W(e, t, n = !1) {
  v !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!F || (v.f & Ce) !== 0) && ct() && (v.f & (k | R | ue | Ce)) !== 0 && (I === null || !I.has(e)) && en();
  let r = n ? de(t) : t;
  return Ne(e, r, ke);
}
function Ne(e, t, n = null) {
  if (!e.equals(t)) {
    Q.set(e, re ? t : e.v);
    var r = ne.ensure();
    if (r.capture(e, t), (e.f & k) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & b) !== 0 && $e(i), O === null && He(i);
    }
    e.wv = Ft(), Et(e, b, n), p !== null && (p.f & E) !== 0 && (p.f & (B | U)) === 0 && (T === null ? In([e]) : T.push(e)), !r.is_fork && Fe.size > 0 && !bt && En();
  }
  return t;
}
function En() {
  bt = !1;
  for (const e of Fe) {
    (e.f & E) !== 0 && w(e, N);
    let t;
    try {
      t = me(e);
    } catch {
      t = !0;
    }
    t && ae(e);
  }
  Fe.clear();
}
function pe(e) {
  W(e, e.v + 1);
}
function Et(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var u = r[s], f = u.f, l = (f & b) === 0;
      if (l && w(u, t), (f & Ce) !== 0)
        Fe.add(
          /** @type {Effect} */
          u
        );
      else if ((f & k) !== 0) {
        var o = (
          /** @type {Derived} */
          u
        );
        O?.delete(o), (f & te) === 0 && (f & A && (p === null || (p.f & Re) === 0) && (u.f |= te), Et(o, N, n));
      } else if (l) {
        var _ = (
          /** @type {Effect} */
          u
        );
        (f & R) !== 0 && q !== null && q.add(_), n !== null ? n.push(_) : Ge(_);
      }
    }
}
function de(e) {
  if (typeof e != "object" || e === null || Ie in e)
    return e;
  const t = Ut(e);
  if (t !== qt && t !== Bt)
    return e;
  var n = /* @__PURE__ */ new Map(), r = jt(e), i = /* @__PURE__ */ z(0), s = ee, u = (f) => {
    if (ee === s)
      return f();
    var l = v, o = ee;
    C(null), rt(s);
    var _ = f();
    return C(l), rt(o), _;
  };
  return r && n.set("length", /* @__PURE__ */ z(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, l, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Jt();
        var _ = n.get(l);
        return _ === void 0 ? u(() => {
          var c = /* @__PURE__ */ z(o.value);
          return n.set(l, c), c;
        }) : W(_, o.value, !0), !0;
      },
      deleteProperty(f, l) {
        var o = n.get(l);
        if (o === void 0) {
          if (l in f) {
            const _ = u(() => /* @__PURE__ */ z(m));
            n.set(l, _), pe(i);
          }
        } else
          W(o, m), pe(i);
        return !0;
      },
      get(f, l, o) {
        if (l === Ie)
          return e;
        var _ = n.get(l), c = l in f;
        if (_ === void 0 && (!c || ve(f, l)?.writable) && (_ = u(() => {
          var h = de(c ? f[l] : m), d = /* @__PURE__ */ z(h);
          return d;
        }), n.set(l, _)), _ !== void 0) {
          var a = J(_);
          return a === m ? void 0 : a;
        }
        return Reflect.get(f, l, o);
      },
      getOwnPropertyDescriptor(f, l) {
        var o = Reflect.getOwnPropertyDescriptor(f, l);
        if (o && "value" in o) {
          var _ = n.get(l);
          _ && (o.value = J(_));
        } else if (o === void 0) {
          var c = n.get(l), a = c?.v;
          if (c !== void 0 && a !== m)
            return {
              enumerable: !0,
              configurable: !0,
              value: a,
              writable: !0
            };
        }
        return o;
      },
      has(f, l) {
        if (l === Ie)
          return !0;
        var o = n.get(l), _ = o !== void 0 && o.v !== m || Reflect.has(f, l);
        if (o !== void 0 || p !== null && (!_ || ve(f, l)?.writable)) {
          o === void 0 && (o = u(() => {
            var a = _ ? de(f[l]) : m, h = /* @__PURE__ */ z(a);
            return h;
          }), n.set(l, o));
          var c = J(o);
          if (c === m)
            return !1;
        }
        return _;
      },
      set(f, l, o, _) {
        var c = n.get(l), a = l in f;
        if (r && l === "length")
          for (var h = o; h < /** @type {Source<number>} */
          c.v; h += 1) {
            var d = n.get(h + "");
            d !== void 0 ? W(d, m) : h in f && (d = u(() => /* @__PURE__ */ z(m)), n.set(h + "", d));
          }
        if (c === void 0)
          (!a || ve(f, l)?.writable) && (c = u(() => /* @__PURE__ */ z(void 0)), W(c, de(o)), n.set(l, c));
        else {
          a = c.v !== m;
          var y = u(() => de(o));
          W(c, y);
        }
        var V = Reflect.getOwnPropertyDescriptor(f, l);
        if (V?.set && V.set.call(_, o), !a) {
          if (r && typeof l == "string") {
            var Y = (
              /** @type {Source<number>} */
              n.get("length")
            ), ie = Number(l);
            Number.isInteger(ie) && ie >= Y.v && W(Y, ie + 1);
          }
          pe(i);
        }
        return !0;
      },
      ownKeys(f) {
        J(i);
        var l = Reflect.ownKeys(f).filter((c) => {
          var a = n.get(c);
          return a === void 0 || a.v !== m;
        });
        for (var [o, _] of n)
          _.v !== m && !(o in f) && l.push(o);
        return l;
      },
      setPrototypeOf() {
        Qt();
      }
    }
  );
}
var tt, kn, kt, xt;
function xn() {
  if (tt === void 0) {
    tt = window, kn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    kt = ve(t, "firstChild").get, xt = ve(t, "nextSibling").get, Ze(e) && (e[Gt] = void 0, e[Kt] = null, e[Wt] = void 0, e.__e = void 0), Ze(n) && (n[Be] = void 0);
  }
}
function St(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return (
    /** @type {TemplateNode | null} */
    kt.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  return (
    /** @type {TemplateNode | null} */
    xt.call(e)
  );
}
function $n(e, t) {
  return /* @__PURE__ */ Sn(e);
}
function Kn(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  );
}
function Tn(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function K(e, t) {
  var n = p;
  n !== null && (n.f & M) !== 0 && (e |= M);
  var r = {
    ctx: P,
    deps: null,
    nodes: null,
    f: e | b | A,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  g?.register_created_effect(r);
  var i = r;
  if ((e & ge) !== 0)
    fe !== null ? fe.push(r) : ne.ensure().schedule(r);
  else if (t !== null) {
    try {
      ae(r);
    } catch (u) {
      throw j(r), u;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & he) === 0 && (i = i.first, (e & R) !== 0 && (e & Ae) !== 0 && i !== null && (i.f |= Ae));
  }
  if (i !== null && (i.parent = n, n !== null && Tn(i, n), v !== null && (v.f & k) !== 0 && (e & U) === 0)) {
    var s = (
      /** @type {Derived} */
      v
    );
    (s.effects ??= []).push(i);
  }
  return r;
}
function We() {
  return v !== null && !F;
}
function An(e) {
  const t = K(De, null);
  return w(t, E), t.teardown = e, t;
}
function Cn(e) {
  return K(ge | $t, e);
}
function Rn(e) {
  ne.ensure();
  const t = K(U | he, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? xe(t, () => {
      j(t), r(void 0);
    }) : (j(t), r(void 0));
  });
}
function On(e) {
  return K(ue | he, e);
}
function Fn(e, t = 0) {
  return K(De | t, e);
}
function Gn(e, t = [], n = [], r = []) {
  dn(r, t, n, (i) => {
    K(De, () => {
      e(...i.map(J));
    });
  });
}
function Nn(e, t = 0) {
  var n = K(R | t, e);
  return n;
}
function G(e) {
  return K(B | he, e);
}
function At(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = re, r = v;
    nt(!0), C(null);
    try {
      t.call(null);
    } finally {
      nt(n), C(r);
    }
  }
}
function Xe(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Pe(() => {
      i.abort(we);
    });
    var r = n.next;
    (n.f & U) !== 0 ? n.parent = null : j(n, t), n = r;
  }
}
function Dn(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & B) === 0 && j(t), t = n;
  }
}
function j(e, t = !0) {
  var n = !1;
  (t || (e.f & Ht) !== 0) && e.nodes !== null && e.nodes.end !== null && (Pn(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= Je, Xe(e, t && !n), ye(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  At(e), e.f ^= Je, e.f |= D;
  var i = e.parent;
  i !== null && i.first !== null && Ct(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Pn(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Tt(e);
    e.remove(), e = n;
  }
}
function Ct(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function xe(e, t, n = !0) {
  var r = [];
  Rt(e, r, !0);
  var i = () => {
    n && j(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var u = () => --s || i();
    for (var f of r)
      f.out(u);
  } else
    i();
}
function Rt(e, t, n) {
  if ((e.f & M) === 0) {
    e.f ^= M;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const f of r)
        (f.is_global || n) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & U) === 0) {
        var u = (i.f & Ae) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & B) !== 0 && (e.f & R) !== 0;
        Rt(i, t, u ? n : !1);
      }
      i = s;
    }
  }
}
function Mn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Tt(n);
      t.append(n), n = i;
    }
}
let Se = !1, re = !1;
function nt(e) {
  re = e;
}
let v = null, F = !1;
function C(e) {
  v = e;
}
let p = null;
function L(e) {
  p = e;
}
let I = null;
function jn(e) {
  v !== null && (I ??= /* @__PURE__ */ new Set()).add(e);
}
let x = null, S = 0, T = null;
function In(e) {
  T = e;
}
let Ot = 1, Z = 0, ee = Z;
function rt(e) {
  ee = e;
}
function Ft() {
  return ++Ot;
}
function me(e) {
  var t = e.f;
  if ((t & b) !== 0)
    return !0;
  if (t & k && (e.f &= ~te), (t & N) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (me(
        /** @type {Derived} */
        s
      ) && pt(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & A) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    O === null && w(e, E);
  }
  return !1;
}
function Nt(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(I !== null && I.has(e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & k) !== 0 ? Nt(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? w(s, b) : (s.f & E) !== 0 && w(s, N), Ge(
        /** @type {Effect} */
        s
      ));
    }
}
function Dt(e) {
  var t = x, n = S, r = T, i = v, s = I, u = P, f = F, l = ee, o = e.f;
  x = /** @type {null | Value[]} */
  null, S = 0, T = null, v = (o & (B | U)) === 0 ? e : null, I = null, oe(e.ctx), F = !1, ee = ++Z, e.ac !== null && (Pe(() => {
    e.ac.abort(we);
  }), e.ac = null);
  try {
    e.f |= Re;
    var _ = (
      /** @type {Function} */
      e.fn
    ), c = _();
    e.f |= ce;
    var a = e.deps, h = g?.is_fork;
    if (x !== null) {
      var d;
      if (h || ye(e, S), a !== null && S > 0)
        for (a.length = S + x.length, d = 0; d < x.length; d++)
          a[S + d] = x[d];
      else
        e.deps = a = x;
      if (We() && (e.f & A) !== 0)
        for (d = S; d < a.length; d++)
          (a[d].reactions ??= []).push(e);
    } else !h && a !== null && S < a.length && (ye(e, S), a.length = S);
    if (ct() && T !== null && !F && a !== null && (e.f & (k | N | b)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      T.length; d++)
        Nt(
          T[d],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Z++, i.deps !== null)
        for (let y = 0; y < n; y += 1)
          i.deps[y].rv = Z;
      if (t !== null)
        for (const y of t)
          y.rv = Z;
      T !== null && (r === null ? r = T : r.push(.../** @type {Source[]} */
      T));
    }
    return (e.f & $) !== 0 && (e.f ^= $), c;
  } catch (y) {
    return ht(y);
  } finally {
    e.f ^= Re, x = t, S = n, T = r, v = i, I = s, oe(u), F = f, ee = l;
  }
}
function Ln(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = It.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & k) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (x === null || !Te.call(x, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & A) !== 0 && (s.f ^= A, s.f &= ~te), s.v !== m && He(s), s.ac !== null && Pe(() => {
      s.ac.abort(we), s.ac = null, w(s, b);
    }), wn(s), ye(s, 0);
  }
}
function ye(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ln(e, n[r]);
}
function ae(e) {
  var t = e.f;
  if ((t & D) === 0) {
    w(e, E);
    var n = p, r = Se;
    p = e, Se = (t & (B | U)) === 0;
    try {
      (t & (R | ot)) !== 0 ? Dn(e) : Xe(e), At(e);
      var i = Dt(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ot;
      var s;
      ft && sn && (e.f & b) !== 0 && e.deps;
    } finally {
      Se = r, p = n;
    }
  }
}
function J(e) {
  var t = e.f, n = (t & k) !== 0;
  if (v !== null && !F) {
    var r = p !== null && (p.f & D) !== 0;
    if (!r && (I === null || !I.has(e))) {
      var i = v.deps;
      if ((v.f & Re) !== 0)
        e.rv < Z && (e.rv = Z, x === null && i !== null && i[S] === e ? S++ : x === null ? x = [e] : x.push(e));
      else {
        v.deps ??= [], Te.call(v.deps, e) || v.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [v] : Te.call(s, v) || s.push(v);
      }
    }
  }
  if (re && Q.has(e))
    return Q.get(e);
  if (n) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (re) {
      var f = u.v;
      return ((u.f & E) === 0 && u.reactions !== null || Mt(u)) && (f = $e(u)), Q.set(u, f), f;
    }
    var l = (u.f & A) === 0 && !F && v !== null && (Se || (v.f & A) !== 0), o = (u.f & ce) === 0;
    me(u) && (l && (u.f |= A), pt(u)), l && !o && (gt(u), Pt(u));
  }
  if (O?.has(e))
    return O.get(e);
  if ((e.f & $) !== 0)
    throw e.v;
  return e.v;
}
function Pt(e) {
  if (e.f |= A, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & k) !== 0 && (t.f & A) === 0 && (gt(
        /** @type {Derived} */
        t
      ), Pt(
        /** @type {Derived} */
        t
      ));
}
function Mt(e) {
  if (e.v === m) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Q.has(t) || (t.f & k) !== 0 && Mt(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Yn(e) {
  var t = F;
  try {
    return F = !0, e();
  } finally {
    F = t;
  }
}
const be = /* @__PURE__ */ Symbol("events"), qn = /* @__PURE__ */ new Set(), it = /* @__PURE__ */ new Set();
let st = null;
function lt(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  st = e;
  var u = 0, f = st === e && e[be];
  if (f) {
    var l = i.indexOf(f);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[be] = t;
      return;
    }
    var o = i.indexOf(t);
    if (o === -1)
      return;
    l <= o && (u = l);
  }
  if (s = /** @type {Element} */
  i[u] || e.target, s !== t) {
    Yt(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var _ = v, c = p;
    C(null), L(null);
    try {
      for (var a, h = []; s !== null && s !== t; ) {
        try {
          var d = s[be]?.[r];
          d != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && d.call(s, e);
        } catch (y) {
          a ? h.push(y) : a = y;
        }
        if (e.cancelBubble) break;
        u++, s = u < i.length ? (
          /** @type {Element} */
          i[u]
        ) : null;
      }
      if (a) {
        for (let y of h)
          queueMicrotask(() => {
            throw y;
          });
        throw a;
      }
    } finally {
      e[be] = t, delete e.currentTarget, C(_), L(c);
    }
  }
}
const Bn = ["touchstart", "touchmove"];
function Un(e) {
  return Bn.includes(e);
}
function Wn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[Be] ??= e.nodeValue) && (e[Be] = n, e.nodeValue = `${n}`);
}
function Xn(e, t) {
  return Vn(e, t);
}
const Ee = /* @__PURE__ */ new Map();
function Vn(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: u = !0, transformError: f }) {
  xn();
  var l = void 0, o = Rn(() => {
    var _ = n ?? t.appendChild(St());
    hn(
      /** @type {TemplateNode} */
      _,
      {
        pending: () => {
        }
      },
      (h) => {
        ln({});
        var d = (
          /** @type {ComponentContext} */
          P
        );
        s && (d.c = s), i && (r.$$events = i), l = e(h, r) || {}, fn();
      },
      f
    );
    var c = /* @__PURE__ */ new Set(), a = (h) => {
      for (var d = 0; d < h.length; d++) {
        var y = h[d];
        if (!c.has(y)) {
          c.add(y);
          var V = Un(y);
          for (const je of [t, document]) {
            var Y = Ee.get(je);
            Y === void 0 && (Y = /* @__PURE__ */ new Map(), Ee.set(je, Y));
            var ie = Y.get(y);
            ie === void 0 ? (je.addEventListener(y, lt, { passive: V }), Y.set(y, 1)) : Y.set(y, ie + 1);
          }
        }
      }
    };
    return a(Lt(qn)), it.add(a), () => {
      for (var h of c)
        for (const V of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            Ee.get(V)
          ), y = (
            /** @type {number} */
            d.get(h)
          );
          --y == 0 ? (V.removeEventListener(h, lt), d.delete(h), d.size === 0 && Ee.delete(V)) : d.set(h, y);
        }
      it.delete(a), _ !== n && _.parentNode?.removeChild(_);
    };
  });
  return ze.set(l, o), l;
}
let ze = /* @__PURE__ */ new WeakMap();
function Zn(e, t) {
  const n = ze.get(e);
  return n ? (ze.delete(e), n(t)) : Promise.resolve();
}
export {
  Gt as C,
  zn as T,
  p as a,
  $n as b,
  Kn as c,
  Sn as g,
  kn as i,
  Xn as m,
  Wn as s,
  Gn as t,
  Zn as u
};
