import{a3 as _,_ as h,c as C,E as i,A as c,y as t,a as e,Q as b,C as y,o as m}from"./chunks/framework.57558014.js";const{defineComponent:D}=_,F=D({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:n,resolveComponent:r,withCtx:o,createVNode:l,openBlock:d,createElementBlock:p}=_,a={style:{display:"flex","justify-content":"space-between"}};function u(N,V){const s=r("lcl-button");return d(),p("div",a,[l(s,null,{default:o(()=>[n("default")]),_:1}),l(s,{type:"primary"},{default:o(()=>[n("primary")]),_:1}),l(s,{type:"success"},{default:o(()=>[n("success")]),_:1}),l(s,{type:"warning"},{default:o(()=>[n("warning")]),_:1}),l(s,{type:"danger"},{default:o(()=>[n("danger")]),_:1})])}return{render:u,...{}}}()}}),$=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md"}'),A=t("h1",{id:"button-按钮",tabindex:"-1"},[e("Button 按钮 "),t("a",{class:"header-anchor",href:"#button-按钮","aria-label":'Permalink to "Button 按钮"'},"​")],-1),f=t("p",null,"常用的操作按钮。",-1),B=t("h2",{id:"基础用法",tabindex:"-1"},[e("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),g=t("p",null,"基础的按钮用法。",-1),E=t("div",null,[e("使用 "),t("code",null,"type"),e(" 属性来定义 Button 的样式。")],-1),x=t("div",{class:"language-vue"},[t("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"div"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#C792EA"}},"style"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#B2CCD6"}},"display"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}},"flex"),t("span",{style:{color:"#89DDFF"}},";"),t("span",{style:{color:"#B2CCD6"}},"justify-content"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," space-between"),t("span",{style:{color:"#89DDFF"}},";"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    <lcl-button>default</lcl-button>")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},'    <lcl-button type="primary">primary</lcl-button>')]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},'    <lcl-button type="success">success</lcl-button>')]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},'    <lcl-button type="warning">warning</lcl-button>')]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},'    <lcl-button type="danger">danger</lcl-button>')]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"div"),t("span",{style:{color:"#89DDFF"}},">")])])])],-1),v=b('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>string</td><td>primary / success / warning / danger</td><td>default</td></tr></tbody></table>',2);function w(n,r,o,l,d,p){const a=y("render-demo-0"),u=y("demo");return m(),C("div",null,[A,f,B,g,i(u,{customClass:"undefined",sourceCode:`<div style="display:flex;justify-content: space-between;">
    <lcl-button>default</lcl-button>
    <lcl-button type="primary">primary</lcl-button>
    <lcl-button type="success">success</lcl-button>
    <lcl-button type="warning">warning</lcl-button>
    <lcl-button type="danger">danger</lcl-button>
</div>
`},{description:c(()=>[E]),highlight:c(()=>[x]),default:c(()=>[i(a)]),_:1}),v])}const j=h(F,[["render",w]]);export{$ as __pageData,j as default};