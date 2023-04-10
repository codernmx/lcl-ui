import{a3 as t,_ as h,c as v,E as y,A as u,y as o,a as s,C as d,o as E}from"./chunks/framework.e571ae38.js";const{defineComponent:V}=t,g=V({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,createVNode:p,toDisplayString:c,createTextVNode:r,Fragment:F,openBlock:D,createElementBlock:l}=t;function n(e,i){const f=a("lcl-input");return D(),l(F,null,[p(f,{modelValue:e.input,"onUpdate:modelValue":i[0]||(i[0]=_=>e.input=_)},null,8,["modelValue"]),r(" "+c(e.input),1)],64)}const{defineComponent:C,ref:m}=t,A=C({name:"Input",setup(){return{input:m("")}}});return{render:n,...A}}()}}),$=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md"}'),x=o("h1",{id:"input",tabindex:"-1"},[s("Input "),o("a",{class:"header-anchor",href:"#input","aria-label":'Permalink to "Input"'},"​")],-1),k=o("p",null,"常用的Input。",-1),B=o("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),o("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),N=o("div",{class:"language-vue"},[o("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"lcl-input"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"v-model"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"input"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},"></"),o("span",{style:{color:"#F07178"}},"lcl-input"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"   {{input}}")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"script"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#A6ACCD"}},"defineComponent"),o("span",{style:{color:"#89DDFF"}},","),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#A6ACCD"}},"ref"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"}"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#C3E88D"}},"vue"),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#89DDFF"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#82AAFF"}},"defineComponent"),o("span",{style:{color:"#A6ACCD"}},"("),o("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#F07178"}},"name"),o("span",{style:{color:"#89DDFF"}},":"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#C3E88D"}},"Input"),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#89DDFF"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#F07178"}},"setup"),o("span",{style:{color:"#89DDFF"}},"()"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F07178"}},"    "),o("span",{style:{color:"#C792EA"}},"const"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#A6ACCD"}},"input"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#82AAFF"}},"ref"),o("span",{style:{color:"#F07178"}},"("),o("span",{style:{color:"#89DDFF"}},"''"),o("span",{style:{color:"#F07178"}},")"),o("span",{style:{color:"#89DDFF"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F07178"}},"    "),o("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F07178"}},"     "),o("span",{style:{color:"#A6ACCD"}},"input")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F07178"}},"    "),o("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F07178"}},"  "),o("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"}"),o("span",{style:{color:"#A6ACCD"}},")"),o("span",{style:{color:"#89DDFF"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"script"),o("span",{style:{color:"#89DDFF"}},">")])])])],-1);function I(a,p,c,r,F,D){const l=d("render-demo-0"),n=d("demo");return E(),v("div",null,[x,k,B,y(n,{customClass:"undefined",sourceCode:`<template>
  <lcl-input v-model="input"></lcl-input>   {{input}}
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Input',
  setup() {
    const input = ref('');
    return {
     input
    };
  },
});
<\/script>

`},{highlight:u(()=>[N]),default:u(()=>[y(l)]),_:1})])}const P=h(g,[["render",I]]);export{$ as __pageData,P as default};
