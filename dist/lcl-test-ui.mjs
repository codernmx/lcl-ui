import { defineComponent as c, computed as p, openBlock as a, createElementBlock as s, normalizeClass as r, unref as i, createElementVNode as u, renderSlot as f } from "vue";
const d = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, m = { class: "my-button" }, y = c({
  name: "lclButton"
}), v = /* @__PURE__ */ Object.assign(y, {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const t = e, n = p(() => ["lcl-button", `lcl-button-${t.type}`]);
    return (l, o) => (a(), s("div", {
      class: r(i(n))
    }, [
      u("button", m, [
        f(l.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), h = /* @__PURE__ */ d(v, [["__scopeId", "data-v-657cf03b"]]);
const b = ["value", "placeholder"], g = c({
  name: "lclInput"
}), x = /* @__PURE__ */ Object.assign(g, {
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
    const n = (l) => {
      t("update:modelValue", l.target.value);
    };
    return (l, o) => (a(), s("div", null, [
      u("input", {
        class: "lcl-input",
        type: "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        onInput: n
      }, null, 40, b)
    ]));
  }
}), V = /* @__PURE__ */ d(x, [["__scopeId", "data-v-f6d98ac9"]]), w = [
  h,
  V
], _ = function(e) {
  w.forEach((t) => {
    e.component(t.name, t);
  }), typeof window < "u" && window.Vue && _(window.Vue);
}, $ = {
  install: _
};
export {
  $ as default,
  _ as install,
  h as lclButton,
  V as lclInput
};
