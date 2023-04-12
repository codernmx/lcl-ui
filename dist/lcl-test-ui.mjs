import { defineComponent as h, computed as v, openBlock as n, createElementBlock as l, normalizeClass as y, unref as g, createElementVNode as s, renderSlot as b, ref as w, onMounted as x, withDirectives as S, normalizeStyle as C, createCommentVNode as d, toDisplayString as z, vShow as V, pushScopeId as I, popScopeId as M, createVNode as k, render as p } from "vue";
const _ = (e, c) => {
  const t = e.__vccOpts || e;
  for (const [o, a] of c)
    t[o] = a;
  return t;
}, B = { class: "my-button" }, E = h({
  name: "lclButton"
}), L = /* @__PURE__ */ Object.assign(E, {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const c = e, t = v(() => ["lcl-button", `lcl-button-${c.type}`]);
    return (o, a) => (n(), l("div", {
      class: y(g(t))
    }, [
      s("button", B, [
        b(o.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), $ = /* @__PURE__ */ _(L, [["__scopeId", "data-v-b7918169"]]);
const N = ["value", "placeholder"], O = h({
  name: "lclInput"
}), j = /* @__PURE__ */ Object.assign(O, {
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
  setup(e, { emit: c }) {
    const t = (o) => {
      c("update:modelValue", o.target.value);
    };
    return (o, a) => (n(), l("div", null, [
      s("input", {
        class: "lcl-input",
        type: "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        onInput: t
      }, null, 40, N)
    ]));
  }
}), D = /* @__PURE__ */ _(j, [["__scopeId", "data-v-f6d98ac9"]]);
const T = {
  name: "lclMessage",
  //	这个是传值方法，通过父级组件传入提示状态以及提示文本
  //	可以根据不同业务自定义更多的状态
  props: {
    type: {
      type: String,
      //	success 成功
      //	warn 警告
      //	error 错误
      default: "success"
    },
    str: {
      type: String,
      default: "登陆成功"
    }
  },
  setup() {
    const e = {
      warning: {
        color: "#faad14"
      },
      error: {
        color: "#F56C6C"
      },
      success: {
        color: "#52c41a"
      },
      info: {
        color: "#1890ff"
      }
    }, c = w(!1);
    return x(() => {
      c.value = !0;
    }), { style: e, visible: c };
  }
}, i = (e) => (I("data-v-a983a60b"), e = e(), M(), e), F = { class: "lcl-message-box" }, H = {
  key: 0,
  focusable: "false",
  class: "",
  "data-icon": "check-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
}, P = /* @__PURE__ */ i(() => /* @__PURE__ */ s("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" }, null, -1)), U = [
  P
], q = {
  key: 1,
  focusable: "false",
  class: "",
  "data-icon": "exclamation-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
}, A = /* @__PURE__ */ i(() => /* @__PURE__ */ s("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" }, null, -1)), G = [
  A
], J = {
  key: 2,
  focusable: "false",
  class: "",
  "data-icon": "close-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
}, K = /* @__PURE__ */ i(() => /* @__PURE__ */ s("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" }, null, -1)), Q = [
  K
], R = {
  key: 3,
  focusable: "false",
  class: "",
  "data-icon": "info-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
}, W = /* @__PURE__ */ i(() => /* @__PURE__ */ s("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" }, null, -1)), X = [
  W
], Y = { class: "text" };
function Z(e, c, t, o, a, ce) {
  return n(), l("div", F, [
    S(s("div", {
      class: "lcl-message",
      style: C(o.style[t.type])
    }, [
      t.type === "success" ? (n(), l("svg", H, U)) : d("", !0),
      t.type === "warning" ? (n(), l("svg", q, G)) : d("", !0),
      t.type === "error" ? (n(), l("svg", J, Q)) : d("", !0),
      t.type === "info" ? (n(), l("svg", R, X)) : d("", !0),
      s("span", Y, z(t.str), 1)
    ], 4), [
      [V, o.visible]
    ])
  ]);
}
const ee = /* @__PURE__ */ _(T, [["render", Z], ["__scopeId", "data-v-a983a60b"]]), r = typeof document < "u" && typeof document.createElement < "u" ? document.createElement("div") : "";
let u = null;
const f = ({ str: e, type: c }) => {
  document.body.appendChild(r);
  const t = k(ee, { str: e, type: c });
  p(t, r), u && clearTimeout(u), u = setTimeout(() => {
    p(null, r);
  }, 5e6);
}, te = [
  $,
  D,
  f
], m = function(e) {
  te.forEach((c) => {
    e.component(c.name, c);
  }), e.config.globalProperties.$lclMessage = f, typeof window < "u" && window.Vue && m(window.Vue);
}, se = {
  install: m
};
export {
  f as Message,
  se as default,
  m as install,
  $ as lclButton,
  D as lclInput
};
