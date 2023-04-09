function Cn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const In = () => {
}, xt = Object.assign, Rn = Object.prototype.hasOwnProperty, Ve = (e, t) => Rn.call(e, t), z = Array.isArray, te = (e) => $t(e) === "[object Map]", Tn = (e) => typeof e == "function", Pn = (e) => typeof e == "string", Ge = (e) => typeof e == "symbol", xe = (e) => e !== null && typeof e == "object", Mn = Object.prototype.toString, $t = (e) => Mn.call(e), Dt = (e) => $t(e).slice(8, -1), qe = (e) => Pn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, jn = Fn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Le = (e, t) => !Object.is(e, t), An = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
function ct(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ct;
function zn(e, t = Ct) {
  t && t.active && t.effects.push(e);
}
function Kn() {
  return Ct;
}
const oe = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, It = (e) => (e.w & H) > 0, Rt = (e) => (e.n & H) > 0, Hn = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= H;
}, Un = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      It(r) && !Rt(r) ? r.delete(e) : t[n++] = r, r.w &= ~H, r.n &= ~H;
    }
    t.length = n;
  }
}, Me = /* @__PURE__ */ new WeakMap();
let ee = 0, H = 1;
const Fe = 30;
let S;
const J = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), je = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Tt {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, zn(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = S, n = K;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = S, S = this, K = !0, H = 1 << ++ee, ee <= Fe ? Hn(this) : lt(this), this.fn();
    } finally {
      ee <= Fe && Un(this), H = 1 << --ee, S = this.parent, K = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    S === this ? this.deferStop = !0 : this.active && (lt(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function lt(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let K = !0;
const Pt = [];
function Mt() {
  Pt.push(K), K = !1;
}
function Ft() {
  const e = Pt.pop();
  K = e === void 0 ? !0 : e;
}
function V(e, t, n) {
  if (K && S) {
    let o = Me.get(e);
    o || Me.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = oe());
    const s = process.env.NODE_ENV !== "production" ? { effect: S, target: e, type: t, key: n } : void 0;
    Ae(r, s);
  }
}
function Ae(e, t) {
  let n = !1;
  ee <= Fe ? Rt(e) || (e.n |= H, n = !It(e)) : n = !e.has(S), n && (e.add(S), S.deps.push(e), process.env.NODE_ENV !== "production" && S.onTrack && S.onTrack(Object.assign({ effect: S }, t)));
}
function U(e, t, n, o, r, s) {
  const i = Me.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && z(e)) {
    const p = Number(o);
    i.forEach((d, l) => {
      (l === "length" || l >= p) && c.push(d);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        z(e) ? qe(n) && c.push(i.get("length")) : (c.push(i.get(J)), te(e) && c.push(i.get(je)));
        break;
      case "delete":
        z(e) || (c.push(i.get(J)), te(e) && c.push(i.get(je)));
        break;
      case "set":
        te(e) && c.push(i.get(J));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? Q(c[0], u) : Q(c[0]));
  else {
    const p = [];
    for (const d of c)
      d && p.push(...d);
    process.env.NODE_ENV !== "production" ? Q(oe(p), u) : Q(oe(p));
  }
}
function Q(e, t) {
  const n = z(e) ? e : [...e];
  for (const o of n)
    o.computed && ut(o, t);
  for (const o of n)
    o.computed || ut(o, t);
}
function ut(e, t) {
  (e !== S || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(xt({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Wn = /* @__PURE__ */ Cn("__proto__,__v_isRef,__isVue"), jt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ge)
), Bn = /* @__PURE__ */ Ye(), Jn = /* @__PURE__ */ Ye(!0), Gn = /* @__PURE__ */ Ye(!0, !0), at = /* @__PURE__ */ qn();
function qn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = f(this);
      for (let s = 0, i = this.length; s < i; s++)
        V(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(f)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Mt();
      const o = f(this)[t].apply(this, n);
      return Ft(), o;
    };
  }), e;
}
function Ln(e) {
  const t = f(this);
  return V(t, "has", e), t.hasOwnProperty(e);
}
function Ye(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Ut : Ht : t ? ar : Kt).get(o))
      return o;
    const i = z(o);
    if (!e) {
      if (i && Ve(at, r))
        return Reflect.get(at, r, s);
      if (r === "hasOwnProperty")
        return Ln;
    }
    const c = Reflect.get(o, r, s);
    return (Ge(r) ? jt.has(r) : Wn(r)) || (e || V(o, "get", r), t) ? c : y(c) ? i && qe(r) ? c : c.value : xe(c) ? e ? Bt(c) : Wt(c) : c;
  };
}
const Yn = /* @__PURE__ */ Qn();
function Qn(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (W(i) && y(i) && !y(r))
      return !1;
    if (!e && (!we(r) && !W(r) && (i = f(i), r = f(r)), !z(n) && y(i) && !y(r)))
      return i.value = r, !0;
    const c = z(n) && qe(o) ? Number(o) < n.length : Ve(n, o), u = Reflect.set(n, o, r, s);
    return n === f(s) && (c ? Le(r, i) && U(n, "set", o, r, i) : U(n, "add", o, r)), u;
  };
}
function Xn(e, t) {
  const n = Ve(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && U(e, "delete", t, void 0, o), r;
}
function Zn(e, t) {
  const n = Reflect.has(e, t);
  return (!Ge(t) || !jt.has(t)) && V(e, "has", t), n;
}
function kn(e) {
  return V(e, "iterate", z(e) ? "length" : J), Reflect.ownKeys(e);
}
const er = {
  get: Bn,
  set: Yn,
  deleteProperty: Xn,
  has: Zn,
  ownKeys: kn
}, At = {
  get: Jn,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && ct(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && ct(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, tr = /* @__PURE__ */ xt({}, At, {
  get: Gn
}), Qe = (e) => e, $e = (e) => Reflect.getPrototypeOf(e);
function ae(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = f(e), s = f(t);
  n || (t !== s && V(r, "get", t), V(r, "get", s));
  const { has: i } = $e(r), c = o ? Qe : n ? ke : se;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function fe(e, t = !1) {
  const n = this.__v_raw, o = f(n), r = f(e);
  return t || (e !== r && V(o, "has", e), V(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function pe(e, t = !1) {
  return e = e.__v_raw, !t && V(f(e), "iterate", J), Reflect.get(e, "size", e);
}
function ft(e) {
  e = f(e);
  const t = f(this);
  return $e(t).has.call(t, e) || (t.add(e), U(t, "add", e, e)), this;
}
function pt(e, t) {
  t = f(t);
  const n = f(this), { has: o, get: r } = $e(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && zt(n, o, e) : (e = f(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? Le(t, i) && U(n, "set", e, t, i) : U(n, "add", e, t), this;
}
function dt(e) {
  const t = f(this), { has: n, get: o } = $e(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && zt(t, n, e) : (e = f(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && U(t, "delete", e, void 0, s), i;
}
function ht() {
  const e = f(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? te(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && U(e, "clear", void 0, void 0, n), o;
}
function de(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = f(i), u = t ? Qe : e ? ke : se;
    return !e && V(c, "iterate", J), i.forEach((p, d) => o.call(r, u(p), u(d), s));
  };
}
function he(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = f(r), i = te(s), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, p = r[e](...o), d = n ? Qe : t ? ke : se;
    return !t && V(s, "iterate", u ? je : J), {
      // iterator protocol
      next() {
        const { value: l, done: a } = p.next();
        return a ? { value: l, done: a } : {
          value: c ? [d(l[0]), d(l[1])] : d(l),
          done: a
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function F(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${jn(e)} operation ${n}failed: target is readonly.`, f(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function nr() {
  const e = {
    get(s) {
      return ae(this, s);
    },
    get size() {
      return pe(this);
    },
    has: fe,
    add: ft,
    set: pt,
    delete: dt,
    clear: ht,
    forEach: de(!1, !1)
  }, t = {
    get(s) {
      return ae(this, s, !1, !0);
    },
    get size() {
      return pe(this);
    },
    has: fe,
    add: ft,
    set: pt,
    delete: dt,
    clear: ht,
    forEach: de(!1, !0)
  }, n = {
    get(s) {
      return ae(this, s, !0);
    },
    get size() {
      return pe(this, !0);
    },
    has(s) {
      return fe.call(this, s, !0);
    },
    add: F(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: F(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: F(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: F(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: de(!0, !1)
  }, o = {
    get(s) {
      return ae(this, s, !0, !0);
    },
    get size() {
      return pe(this, !0);
    },
    has(s) {
      return fe.call(this, s, !0);
    },
    add: F(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: F(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: F(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: F(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: de(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = he(s, !1, !1), n[s] = he(s, !0, !1), t[s] = he(s, !1, !0), o[s] = he(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [rr, or, sr, ir] = /* @__PURE__ */ nr();
function Xe(e, t) {
  const n = t ? e ? ir : sr : e ? or : rr;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(Ve(n, r) && r in o ? n : o, r, s);
}
const cr = {
  get: /* @__PURE__ */ Xe(!1, !1)
}, lr = {
  get: /* @__PURE__ */ Xe(!0, !1)
}, ur = {
  get: /* @__PURE__ */ Xe(!0, !0)
};
function zt(e, t, n) {
  const o = f(n);
  if (o !== n && t.call(e, o)) {
    const r = Dt(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Kt = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap();
function fr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function pr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fr(Dt(e));
}
function Wt(e) {
  return W(e) ? e : Ze(e, !1, er, cr, Kt);
}
function Bt(e) {
  return Ze(e, !0, At, lr, Ht);
}
function _e(e) {
  return Ze(e, !0, tr, ur, Ut);
}
function Ze(e, t, n, o, r) {
  if (!xe(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = pr(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return r.set(e, c), c;
}
function G(e) {
  return W(e) ? G(e.__v_raw) : !!(e && e.__v_isReactive);
}
function W(e) {
  return !!(e && e.__v_isReadonly);
}
function we(e) {
  return !!(e && e.__v_isShallow);
}
function ze(e) {
  return G(e) || W(e);
}
function f(e) {
  const t = e && e.__v_raw;
  return t ? f(t) : e;
}
function dr(e) {
  return An(e, "__v_skip", !0), e;
}
const se = (e) => xe(e) ? Wt(e) : e, ke = (e) => xe(e) ? Bt(e) : e;
function Jt(e) {
  K && S && (e = f(e), process.env.NODE_ENV !== "production" ? Ae(e.dep || (e.dep = oe()), {
    target: e,
    type: "get",
    key: "value"
  }) : Ae(e.dep || (e.dep = oe())));
}
function Gt(e, t) {
  e = f(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? Q(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Q(n));
}
function y(e) {
  return !!(e && e.__v_isRef === !0);
}
function hr(e) {
  return _r(e, !1);
}
function _r(e, t) {
  return y(e) ? e : new gr(e, t);
}
class gr {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : f(t), this._value = n ? t : se(t);
  }
  get value() {
    return Jt(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || we(t) || W(t);
    t = n ? t : f(t), Le(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : se(t), Gt(this, t));
  }
}
function qt(e) {
  return y(e) ? e.value : e;
}
const mr = {
  get: (e, t, n) => qt(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return y(r) && !y(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Er(e) {
  return G(e) ? e : new Proxy(e, mr);
}
var Lt;
class Nr {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Lt] = !1, this._dirty = !0, this.effect = new Tt(t, () => {
      this._dirty || (this._dirty = !0, Gt(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = f(this);
    return Jt(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Lt = "__v_isReadonly";
function wr(e, t, n = !1) {
  let o, r;
  const s = Tn(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : In) : (o = e.get, r = e.set);
  const i = new Nr(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
function et(e) {
  if (b(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = R(o) ? yr(o) : et(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (R(e))
      return e;
    if ($(e))
      return e;
  }
}
const br = /;(?![^(]*\))/g, Or = /:([^]+)/, Sr = /\/\*.*?\*\//gs;
function yr(e) {
  const t = {};
  return e.replace(Sr, "").split(br).forEach((n) => {
    if (n) {
      const o = n.split(Or);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function De(e) {
  let t = "";
  if (R(e))
    t = e;
  else if (b(e))
    for (let n = 0; n < e.length; n++) {
      const o = De(e[n]);
      o && (t += o + " ");
    }
  else if ($(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const _t = (e) => R(e) ? e : e == null ? "" : b(e) || $(e) && (e.toString === kt || !N(e.toString)) ? JSON.stringify(e, Yt, 2) : String(e), Yt = (e, t) => t && t.__v_isRef ? Yt(e, t.value) : Xt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : Zt(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : $(t) && !b(t) && !en(t) ? String(t) : t, P = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, vr = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Qt = () => {
}, Vr = /^on[^a-z]/, xr = (e) => Vr.test(e), M = Object.assign, $r = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Dr = Object.prototype.hasOwnProperty, w = (e, t) => Dr.call(e, t), b = Array.isArray, Xt = (e) => tt(e) === "[object Map]", Zt = (e) => tt(e) === "[object Set]", N = (e) => typeof e == "function", R = (e) => typeof e == "string", $ = (e) => e !== null && typeof e == "object", Cr = (e) => $(e) && N(e.then) && N(e.catch), kt = Object.prototype.toString, tt = (e) => kt.call(e), en = (e) => tt(e) === "[object Object]", tn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ir = /-(\w)/g, be = tn((e) => e.replace(Ir, (t, n) => n ? n.toUpperCase() : "")), Ke = tn((e) => e.charAt(0).toUpperCase() + e.slice(1)), gt = (e, t) => !Object.is(e, t);
let mt;
const Rr = () => mt || (mt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), q = [];
function Tr(e) {
  q.push(e);
}
function Pr() {
  q.pop();
}
function m(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  Mt();
  const n = q.length ? q[q.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Mr();
  if (o)
    L(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${yn(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...Fr(r)), console.warn(...s);
  }
  Ft();
}
function Mr() {
  let e = q[q.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Fr(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...jr(n));
  }), t;
}
function jr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${yn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...Ar(e.props), s] : [r + s];
}
function Ar(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...nn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function nn(e, t, n) {
  return R(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : y(t) ? (t = nn(e, f(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : N(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = f(t), n ? t : [`${e}=`, t]);
}
const rn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function L(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    on(s, t, n);
  }
  return r;
}
function He(e, t, n, o) {
  if (N(e)) {
    const s = L(e, t, n, o);
    return s && Cr(s) && s.catch((i) => {
      on(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(He(e[s], t, n, o));
  return r;
}
function on(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? rn[n] : n;
    for (; s; ) {
      const p = s.ec;
      if (p) {
        for (let d = 0; d < p.length; d++)
          if (p[d](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      L(u, null, 10, [e, i, c]);
      return;
    }
  }
  zr(e, n, r, o);
}
function zr(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = rn[t];
    if (n && Tr(n), m(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Pr(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Oe = !1, Ue = !1;
const D = [];
let A = 0;
const Z = [];
let T = null, j = 0;
const sn = /* @__PURE__ */ Promise.resolve();
let nt = null;
const Kr = 100;
function Hr(e) {
  const t = nt || sn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ur(e) {
  let t = A + 1, n = D.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    ie(D[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function rt(e) {
  (!D.length || !D.includes(e, Oe && e.allowRecurse ? A + 1 : A)) && (e.id == null ? D.push(e) : D.splice(Ur(e.id), 0, e), cn());
}
function cn() {
  !Oe && !Ue && (Ue = !0, nt = sn.then(un));
}
function ln(e) {
  b(e) ? Z.push(...e) : (!T || !T.includes(e, e.allowRecurse ? j + 1 : j)) && Z.push(e), cn();
}
function Wr(e) {
  if (Z.length) {
    const t = [...new Set(Z)];
    if (Z.length = 0, T) {
      T.push(...t);
      return;
    }
    for (T = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), T.sort((n, o) => ie(n) - ie(o)), j = 0; j < T.length; j++)
      process.env.NODE_ENV !== "production" && an(e, T[j]) || T[j]();
    T = null, j = 0;
  }
}
const ie = (e) => e.id == null ? 1 / 0 : e.id, Br = (e, t) => {
  const n = ie(e) - ie(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function un(e) {
  Ue = !1, Oe = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), D.sort(Br);
  const t = process.env.NODE_ENV !== "production" ? (n) => an(e, n) : Qt;
  try {
    for (A = 0; A < D.length; A++) {
      const n = D[A];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        L(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    A = 0, D.length = 0, Wr(e), Oe = !1, nt = null, (D.length || Z.length) && un(e);
  }
}
function an(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Kr) {
      const o = t.ownerInstance, r = o && st(o.type);
      return m(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
const k = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Rr().__VUE_HMR_RUNTIME__ = {
  createRecord: Re(Jr),
  rerender: Re(Gr),
  reload: Re(qr)
});
const Se = /* @__PURE__ */ new Map();
function Jr(e, t) {
  return Se.has(e) ? !1 : (Se.set(e, {
    initialDef: ne(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ne(e) {
  return vn(e) ? e.__vccOpts : e;
}
function Gr(e, t) {
  const n = Se.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, ne(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function qr(e, t) {
  const n = Se.get(e);
  if (!n)
    return;
  t = ne(t), Et(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = ne(r.type);
    k.has(s) || (s !== n.initialDef && Et(s, t), k.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (k.add(s), r.ceReload(t.styles), k.delete(s)) : r.parent ? rt(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  ln(() => {
    for (const r of o)
      k.delete(ne(r.type));
  });
}
function Et(e, t) {
  M(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Re(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
function Lr(e, ...t) {
}
const Yr = /* @__PURE__ */ Qr(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
);
function Qr(e) {
  return (t) => {
    Lr(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
let E = null, fn = null;
function Nt(e) {
  const t = E;
  return E = e, fn = e && e.type.__scopeId || null, t;
}
function ge(e, t = E, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && vt(-1);
    const s = Nt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Nt(s), o._d && vt(1);
    }
    return process.env.NODE_ENV !== "production" && Yr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
const Xr = (e) => e.__isSuspense;
function Zr(e, t) {
  t && t.pendingBranch ? b(e) ? t.effects.push(...e) : t.effects.push(e) : ln(e);
}
const me = {};
function kr(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = P) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && m('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && m('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (h) => {
    m("Invalid watch source: ", h, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = Kn() === (I == null ? void 0 : I.scope) ? I : null;
  let p, d = !1, l = !1;
  if (y(e) ? (p = () => e.value, d = we(e)) : G(e) ? (p = () => e, o = !0) : b(e) ? (l = !0, d = e.some((h) => G(h) || we(h)), p = () => e.map((h) => {
    if (y(h))
      return h.value;
    if (G(h))
      return X(h);
    if (N(h))
      return L(
        h,
        u,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && c(h);
  })) : N(e) ? t ? p = () => L(
    e,
    u,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : p = () => {
    if (!(u && u.isUnmounted))
      return a && a(), He(e, u, 3, [_]);
  } : (p = Qt, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const h = p;
    p = () => X(h());
  }
  let a, _ = (h) => {
    a = x.onStop = () => {
      L(
        h,
        u,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, g = l ? new Array(e.length).fill(me) : me;
  const v = () => {
    if (x.active)
      if (t) {
        const h = x.run();
        (o || d || (l ? h.some(($n, Dn) => gt($n, g[Dn])) : gt(h, g))) && (a && a(), He(t, u, 3, [
          h,
          // pass undefined as the old value when it's changed for the first time
          g === me ? void 0 : l && g[0] === me ? [] : g,
          _
        ]), g = h);
      } else
        x.run();
  };
  v.allowRecurse = !!t;
  let ue;
  r === "sync" ? ue = v : r === "post" ? ue = () => yt(v, u && u.suspense) : (v.pre = !0, u && (v.id = u.uid), ue = () => rt(v));
  const x = new Tt(p, ue);
  return process.env.NODE_ENV !== "production" && (x.onTrack = s, x.onTrigger = i), t ? n ? v() : g = x.run() : r === "post" ? yt(x.run.bind(x), u && u.suspense) : x.run(), () => {
    x.stop(), u && u.scope && $r(u.scope.effects, x);
  };
}
function eo(e, t, n) {
  const o = this.proxy, r = R(e) ? e.includes(".") ? to(o, e) : () => o[e] : e.bind(o, o);
  let s;
  N(t) ? s = t : (s = t.handler, n = t);
  const i = I;
  Vt(this);
  const c = kr(r, s.bind(o), n);
  return i ? Vt(i) : No(), c;
}
function to(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function X(e, t) {
  if (!$(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), y(e))
    X(e.value, t);
  else if (b(e))
    for (let n = 0; n < e.length; n++)
      X(e[n], t);
  else if (Zt(e) || Xt(e))
    e.forEach((n) => {
      X(n, t);
    });
  else if (en(e))
    for (const n in e)
      X(e[n], t);
  return e;
}
function pn(e) {
  return N(e) ? { setup: e, name: e.name } : e;
}
const no = (e) => !!e.type.__asyncLoader, We = "components";
function wt(e, t) {
  return oo(We, e, !0, t) || e;
}
const ro = Symbol();
function oo(e, t, n = !0, o = !1) {
  const r = E || I;
  if (r) {
    const s = r.type;
    if (e === We) {
      const c = st(
        s,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (c && (c === t || c === be(t) || c === Ke(be(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      bt(r[e] || s[e], t) || // global registration
      bt(r.appContext[e], t)
    );
    if (!i && o)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const c = e === We ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      m(`Failed to resolve ${e.slice(0, -1)}: ${t}${c}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && m(`resolve${Ke(e.slice(0, -1))} can only be used in render() or setup().`);
}
function bt(e, t) {
  return e && (e[t] || e[be(t)] || e[Ke(be(t))]);
}
function dn(e, t, n = {}, o, r) {
  if (E.isCE || E.parent && no(E.parent) && E.parent.isCE)
    return t !== "default" && (n.name = t), le("slot", n, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (m("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), Ie();
  const i = s && hn(s(n)), c = En(
    Ce,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), s && s._c && (s._d = !0), c;
}
function hn(e) {
  return e.some((t) => Nn(t) ? !(t.type === _n || t.type === Ce && !hn(t.children)) : !0) ? e : null;
}
const Be = (e) => e ? wo(e) ? Oo(e) || e.proxy : Be(e.parent) : null, re = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ M(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? _e(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? _e(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? _e(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? _e(e.refs) : e.refs,
    $parent: (e) => Be(e.parent),
    $root: (e) => Be(e.root),
    $emit: (e) => e.emit,
    $options: (e) => co(e),
    $forceUpdate: (e) => e.f || (e.f = () => rt(e.update)),
    $nextTick: (e) => e.n || (e.n = Hr.bind(e.proxy)),
    $watch: (e) => eo.bind(e)
  })
), so = (e) => e === "_" || e === "$", Te = (e, t) => e !== P && !e.__isScriptSetup && w(e, t), io = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Te(o, t))
          return i[t] = 1, o[t];
        if (r !== P && w(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && w(p, t)
        )
          return i[t] = 3, s[t];
        if (n !== P && w(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const d = re[t];
    let l, a;
    if (d)
      return t === "$attrs" && (V(e, "get", t), process.env.NODE_ENV !== "production" && void 0), d(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== P && w(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      a = u.config.globalProperties, w(a, t)
    )
      return a[t];
    process.env.NODE_ENV !== "production" && E && (!R(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== P && so(t[0]) && w(r, t) ? m(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === E && m(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Te(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && w(r, t) ? (m(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== P && w(o, t) ? (o[t] = n, !0) : w(e.props, t) ? (process.env.NODE_ENV !== "production" && m(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && m(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let c;
    return !!n[i] || e !== P && w(e, i) || Te(t, i) || (c = s[0]) && w(c, i) || w(o, i) || w(re, i) || w(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : w(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (io.ownKeys = (e) => (m("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function co(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, c = s.get(t);
  let u;
  return c ? u = c : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach((p) => ye(u, p, i, !0)), ye(u, t, i)), $(t) && s.set(t, u), u;
}
function ye(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && ye(e, s, n, !0), r && r.forEach((i) => ye(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && m('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = lo[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const lo = {
  data: Ot,
  props: B,
  emits: B,
  // objects
  methods: B,
  computed: B,
  // lifecycle
  beforeCreate: O,
  created: O,
  beforeMount: O,
  mounted: O,
  beforeUpdate: O,
  updated: O,
  beforeDestroy: O,
  beforeUnmount: O,
  destroyed: O,
  unmounted: O,
  activated: O,
  deactivated: O,
  errorCaptured: O,
  serverPrefetch: O,
  // assets
  components: B,
  directives: B,
  // watch
  watch: ao,
  // provide / inject
  provide: Ot,
  inject: uo
};
function Ot(e, t) {
  return t ? e ? function() {
    return M(N(e) ? e.call(this, this) : e, N(t) ? t.call(this, this) : t);
  } : t : e;
}
function uo(e, t) {
  return B(St(e), St(t));
}
function St(e) {
  if (b(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function O(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function B(e, t) {
  return e ? M(M(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function ao(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = M(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = O(e[o], t[o]);
  return n;
}
const yt = Zr, fo = (e) => e.__isTeleport, Ce = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), po = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), _n = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0);
Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0);
const Ee = [];
let C = null;
function Ie(e = !1) {
  Ee.push(C = e ? null : []);
}
function ho() {
  Ee.pop(), C = Ee[Ee.length - 1] || null;
}
let ce = 1;
function vt(e) {
  ce += e;
}
function gn(e) {
  return e.dynamicChildren = ce > 0 ? C || vr : null, ho(), ce > 0 && C && C.push(e), e;
}
function mn(e, t, n, o, r, s) {
  return gn(Y(
    e,
    t,
    n,
    o,
    r,
    s,
    !0
    /* isBlock */
  ));
}
function En(e, t, n, o, r) {
  return gn(le(
    e,
    t,
    n,
    o,
    r,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function Nn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const _o = (...e) => On(...e), wn = "__vInternal", bn = ({ key: e }) => e ?? null, Ne = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? R(e) || y(e) || N(e) ? { i: E, r: e, k: t, f: !!n } : e : null;
function Y(e, t = null, n = null, o = 0, r = null, s = e === Ce ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bn(t),
    ref: t && Ne(t),
    scopeId: fn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: E
  };
  return c ? (ot(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= R(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && m("VNode created with invalid key (NaN). VNode type:", u.type), ce > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  C && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && C.push(u), u;
}
const le = process.env.NODE_ENV !== "production" ? _o : On;
function On(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === ro) && (process.env.NODE_ENV !== "production" && !e && m(`Invalid vnode type when creating vnode: ${e}.`), e = _n), Nn(e)) {
    const c = ve(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ot(c, n), ce > 0 && !s && C && (c.shapeFlag & 6 ? C[C.indexOf(e)] = c : C.push(c)), c.patchFlag |= -2, c;
  }
  if (vn(e) && (e = e.__vccOpts), t) {
    t = go(t);
    let { class: c, style: u } = t;
    c && !R(c) && (t.class = De(c)), $(u) && (ze(u) && !b(u) && (u = M({}, u)), t.style = et(u));
  }
  const i = R(e) ? 1 : Xr(e) ? 128 : fo(e) ? 64 : $(e) ? 4 : N(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && ze(e) && (e = f(e), m("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Y(e, t, n, o, r, i, s, !0);
}
function go(e) {
  return e ? ze(e) || wn in e ? M({}, e) : e : null;
}
function ve(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? mo(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && bn(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? b(r) ? r.concat(Ne(t)) : [r, Ne(t)] : Ne(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && b(i) ? i.map(Sn) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ce ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ve(e.ssContent),
    ssFallback: e.ssFallback && ve(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Sn(e) {
  const t = ve(e);
  return b(e.children) && (t.children = e.children.map(Sn)), t;
}
function Je(e = " ", t = 0) {
  return le(po, null, e, t);
}
function ot(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (b(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ot(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(wn in t) ? t._ctx = E : r === 3 && E && (E.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    N(t) ? (t = { default: t, _ctx: E }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Je(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function mo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = De([t.class, o.class]));
      else if (r === "style")
        t.style = et([t.style, o.style]);
      else if (xr(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(b(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
let I = null;
const Eo = () => I || E, Vt = (e) => {
  I = e, e.scope.on();
}, No = () => {
  I && I.scope.off(), I = null;
};
function wo(e) {
  return e.vnode.shapeFlag & 4;
}
let bo = !1;
function Oo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Er(dr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in re)
          return re[n](e);
      },
      has(t, n) {
        return n in t || n in re;
      }
    }));
}
const So = /(?:^|[-_])(\w)/g, yo = (e) => e.replace(So, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function st(e, t = !0) {
  return N(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function yn(e, t, n = !1) {
  let o = st(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? yo(o) : n ? "App" : "Anonymous";
}
function vn(e) {
  return N(e) && "__vccOpts" in e;
}
const vo = (e, t) => wr(e, t, bo);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Pe(e) {
  return !!(e && e.__v_isShallow);
}
function Vo() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(l) {
      return $(l) ? l.__isVue ? ["div", e, "VueInstance"] : y(l) ? [
        "div",
        {},
        ["span", e, d(l)],
        "<",
        c(l.value),
        ">"
      ] : G(l) ? [
        "div",
        {},
        ["span", e, Pe(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${W(l) ? " (readonly)" : ""}`
      ] : W(l) ? [
        "div",
        {},
        ["span", e, Pe(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...s(l.$)
        ];
    }
  };
  function s(l) {
    const a = [];
    l.type.props && l.props && a.push(i("props", f(l.props))), l.setupState !== P && a.push(i("setup", l.setupState)), l.data !== P && a.push(i("data", f(l.data)));
    const _ = u(l, "computed");
    _ && a.push(i("computed", _));
    const g = u(l, "inject");
    return g && a.push(i("injected", g)), a.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), a;
  }
  function i(l, a) {
    return a = M({}, a), Object.keys(a).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(a).map((_) => [
          "div",
          {},
          ["span", o, _ + ": "],
          c(a[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, a = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", o, l] : $(l) ? ["object", { object: a ? f(l) : l }] : ["span", n, String(l)];
  }
  function u(l, a) {
    const _ = l.type;
    if (N(_))
      return;
    const g = {};
    for (const v in l.ctx)
      p(_, v, a) && (g[v] = l.ctx[v]);
    return g;
  }
  function p(l, a, _) {
    const g = l[_];
    if (b(g) && g.includes(a) || $(g) && a in g || l.extends && p(l.extends, a, _) || l.mixins && l.mixins.some((v) => p(v, a, _)))
      return !0;
  }
  function d(l) {
    return Pe(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function xo() {
  Vo();
}
process.env.NODE_ENV !== "production" && xo();
const it = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, $o = { class: "my-button" }, Do = pn({
  name: "lclButton"
}), Co = /* @__PURE__ */ Object.assign(Do, {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const t = e, n = vo(() => ["lcl-button", `lcl-button-${t.type}`]);
    return (o, r) => (Ie(), mn("div", {
      class: De(qt(n))
    }, [
      Y("button", $o, [
        dn(o.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Io = /* @__PURE__ */ it(Co, [["__scopeId", "data-v-480044a2"]]);
const Ro = ["value", "placeholder"], To = pn({
  name: "lclInput"
}), Po = /* @__PURE__ */ Object.assign(To, {
  props: {
    placeholder: {
      type: String,
      default: "placeholder"
    },
    modelValue: {
      type: String || Number,
      default: "placeholder"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = (o) => {
      t("update:modelValue", o.target.value);
    };
    return (o, r) => (Ie(), mn("div", null, [
      Y("input", {
        class: "lcl-input",
        type: "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        onInput: n
      }, null, 40, Ro)
    ]));
  }
}), Mo = /* @__PURE__ */ it(Po, [["__scopeId", "data-v-0ee1e3ed"]]);
const Fo = { style: { padding: "0 12px" } }, jo = { style: { display: "flex", "justify-content": "center" } }, Ao = {
  name: "lclConfirmDialog"
}, zo = /* @__PURE__ */ Object.assign(Ao, {
  props: {
    confirmText: {
      type: String,
      default: "确定"
    },
    title: {
      type: String,
      default: "是否确认删除？"
    },
    sda: String,
    strData: String,
    arrFor: Array
  },
  setup(e) {
    const { proxy: t } = Eo(), n = hr(!0), o = (s) => {
      t.$emit("close");
    }, r = (s) => {
      t.$emit("submit");
    };
    return (s, i) => {
      const c = wt("el-button"), u = wt("el-dialog");
      return Ie(), En(u, {
        modelValue: n.value,
        "onUpdate:modelValue": i[1] || (i[1] = (p) => n.value = p),
        width: "417px",
        "before-close": o,
        modal: !1,
        style: { "border-radius": "16px" },
        top: "30vh"
      }, {
        footer: ge(() => [
          Y("div", jo, [
            le(c, {
              onClick: i[0] || (i[0] = (p) => n.value = !1),
              color: "#D5D9E2",
              class: "btn"
            }, {
              default: ge(() => [
                Je("取消")
              ]),
              _: 1
            }),
            le(c, {
              onClick: r,
              color: "#3F50F2",
              class: "btn"
            }, {
              default: ge(() => [
                Je(_t(e.confirmText), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ge(() => [
          Y("h3", null, _t(e.title), 1),
          Y("div", Fo, [
            dn(s.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["modelValue"]);
    };
  }
}), Ko = /* @__PURE__ */ it(zo, [["__scopeId", "data-v-43ef7861"]]), Vn = [
  Io,
  Mo,
  Ko
], xn = function(e) {
  Vn.forEach((t) => {
    e.component(t.name, t);
  }), typeof window < "u" && window.Vue && xn(window.Vue);
}, Uo = {
  install: xn,
  ...Vn
};
export {
  Uo as default
};
