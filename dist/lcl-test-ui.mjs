import { defineComponent as p, computed as b, openBlock as l, createElementBlock as s, normalizeClass as h, unref as x, createElementVNode as n, renderSlot as m, normalizeStyle as v, ref as S, onMounted as w, withDirectives as C, createCommentVNode as i, toDisplayString as z, vShow as I, pushScopeId as V, popScopeId as $, createVNode as M, render as f } from "vue";
const d = (e, t) => {
  const c = e.__vccOpts || e;
  for (const [o, a] of t)
    c[o] = a;
  return c;
}, k = { class: "my-button" }, B = p({
  name: "lclButton"
}), E = /* @__PURE__ */ Object.assign(B, {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const t = e, c = b(() => ["lcl-button", `lcl-button-${t.type}`]);
    return (o, a) => (l(), s("div", {
      class: h(x(c))
    }, [
      n("button", k, [
        m(o.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), L = /* @__PURE__ */ d(E, [["__scopeId", "data-v-b726384c"]]);
const j = ["value", "placeholder"], D = p({
  name: "lclInput"
}), N = /* @__PURE__ */ Object.assign(D, {
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
    const c = (o) => {
      t("update:modelValue", o.target.value);
    };
    return (o, a) => (l(), s("div", null, [
      n("input", {
        class: "lcl-input",
        type: "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        onInput: c
      }, null, 40, j)
    ]));
  }
}), O = /* @__PURE__ */ d(N, [["__scopeId", "data-v-f6d98ac9"]]);
const T = { class: "lcl-divider-text" }, F = p({
  name: "lclDivider"
}), H = /* @__PURE__ */ Object.assign(F, {
  props: {
    position: {
      type: String,
      default: "center"
    },
    //竖直还是水平
    direction: {
      type: String,
      default: "horizontal"
    },
    // 实线虚线。。。
    lineStyle: {
      type: String,
      default: "solid"
    }
  },
  setup(e) {
    return (t, c) => (l(), s("div", {
      class: h(["lcl-divider", { "lcl-vertical": e.direction === "vertical" }]),
      style: v({ "justify-content": e.position, "border-bottom": `1px ${e.lineStyle} #dcdfe6` })
    }, [
      n("div", T, [
        m(t.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), P = /* @__PURE__ */ d(H, [["__scopeId", "data-v-0a858515"]]);
const U = {
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
    }, t = S(!1);
    return w(() => {
      t.value = !0;
    }), { style: e, visible: t };
  }
}, r = (e) => (V("data-v-a983a60b"), e = e(), $(), e), q = { class: "lcl-message-box" }, A = {
  key: 0,
  focusable: "false",
  class: "",
  "data-icon": "check-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
}, G = /* @__PURE__ */ r(() => /* @__PURE__ */ n("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" }, null, -1)), J = [
  G
], K = {
  key: 1,
  focusable: "false",
  class: "",
  "data-icon": "exclamation-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
}, Q = /* @__PURE__ */ r(() => /* @__PURE__ */ n("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" }, null, -1)), R = [
  Q
], W = {
  key: 2,
  focusable: "false",
  class: "",
  "data-icon": "close-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
}, X = /* @__PURE__ */ r(() => /* @__PURE__ */ n("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" }, null, -1)), Y = [
  X
], Z = {
  key: 3,
  focusable: "false",
  class: "",
  "data-icon": "info-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
}, ee = /* @__PURE__ */ r(() => /* @__PURE__ */ n("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" }, null, -1)), te = [
  ee
], ce = { class: "text" };
function oe(e, t, c, o, a, se) {
  return l(), s("div", q, [
    C(n("div", {
      class: "lcl-message",
      style: v(o.style[c.type])
    }, [
      c.type === "success" ? (l(), s("svg", A, J)) : i("", !0),
      c.type === "warning" ? (l(), s("svg", K, R)) : i("", !0),
      c.type === "error" ? (l(), s("svg", W, Y)) : i("", !0),
      c.type === "info" ? (l(), s("svg", Z, te)) : i("", !0),
      n("span", ce, z(c.str), 1)
    ], 4), [
      [I, o.visible]
    ])
  ]);
}
const ne = /* @__PURE__ */ d(U, [["render", oe], ["__scopeId", "data-v-a983a60b"]]), u = typeof document < "u" && typeof document.createElement < "u" ? document.createElement("div") : "";
let _ = null;
const y = ({ str: e, type: t }) => {
  document.body.appendChild(u);
  const c = M(ne, { str: e, type: t });
  f(c, u), _ && clearTimeout(_), _ = setTimeout(() => {
    f(null, u);
  }, 5e6);
}, le = [
  L,
  O,
  P,
  y
], g = function(e) {
  le.forEach((t) => {
    e.component(t.name, t);
  }), e.config.globalProperties.$lclMessage = y, typeof window < "u" && window.Vue && g(window.Vue);
}, ie = {
  install: g
};
export {
  y as Message,
  ie as default,
  g as install,
  L as lclButton,
  P as lclDivider,
  O as lclInput
};
