import{o as e,c as a,w as t,d as s,e as l,F as u,i,a as n,p as c,b as o,t as d}from"./index-D2uiAhli.js";import{_ as r}from"./export-helper-BCo6x5W8.js";const m=r({name:"unit-tab",emits:["update:modelValue","change"],props:{modelValue:[String,Number],tabs:{type:Array,required:!0}},data:()=>({selectValue:""}),watch:{modelValue:{handler(e){this.selectValue=e},immediate:!0}},methods:{onClick(e){this.selectValue=e.value,this.$emit("update:modelValue",e.value),this.$emit("change",e.value)}}},[["render",function(r,m,p,h,_,b){const v=i;return e(),a(v,{class:"unit-tab"},{default:t((()=>[(e(!0),s(u,null,l(p.tabs,(s=>(e(),a(v,{class:"unit-tab-item",key:s.value},{default:t((()=>[n(v,{class:c(["tab",{"unit-active":_.selectValue===s.value}]),onClick:e=>b.onClick(s)},{default:t((()=>[o(d(s.name),1)])),_:2},1032,["class","onClick"])])),_:2},1024)))),128))])),_:1})}],["__scopeId","data-v-12d374f0"]]);export{m as _};
