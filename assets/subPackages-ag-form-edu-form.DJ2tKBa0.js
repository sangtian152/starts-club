import{M as a,N as e,r as o,o as t,c as s,w as l,i,a as r,b as u,j as n}from"./index-DKo2e5NO.js";import{_ as d}from"./unit-picker.BldYpYuA.js";import{r as m}from"./uni-app.es.BBFJ5dYZ.js";import{_ as p,a as c}from"./uni-forms.C3nLaDbY.js";import{_ as f}from"./uni-easyinput.DptMW2v8.js";import{e as b}from"./constant.ixvWox50.js";import{_}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.CUZN6vEy.js";const j=_({data:()=>({options:{education:b},baseFormData:{education:"",institution:"",major:""}}),methods:{onSubmit(){const o=this;a({success:function(){e("acceptDataFromOpenerPage",{key:"eduData",data:o.baseFormData})}})}}},[["render",function(a,e,b,_,j,D){const F=m(o("unit-picker"),d),V=m(o("uni-forms-item"),p),h=m(o("uni-easyinput"),f),g=m(o("uni-forms"),c),k=n,x=i;return t(),s(x,{style:{height:"100%"}},{default:l((()=>[r(x,{class:"page-content"},{default:l((()=>[r(x,{class:"page-card"},{default:l((()=>[r(g,{ref:"baseForm","label-width":"160rpx",modelValue:j.baseFormData},{default:l((()=>[r(V,{label:"学历",required:""},{default:l((()=>[r(F,{modelValue:j.baseFormData.education,"onUpdate:modelValue":e[0]||(e[0]=a=>j.baseFormData.education=a),options:j.options.education,placeholder:"请选择学历"},null,8,["modelValue","options"])])),_:1}),r(V,{label:"院校",required:""},{default:l((()=>[r(h,{modelValue:j.baseFormData.institution,"onUpdate:modelValue":e[1]||(e[1]=a=>j.baseFormData.institution=a),placeholder:"请输入院校"},null,8,["modelValue"])])),_:1}),r(V,{label:"专业",required:""},{default:l((()=>[r(h,{modelValue:j.baseFormData.major,"onUpdate:modelValue":e[2]||(e[2]=a=>j.baseFormData.major=a),placeholder:"请输入专业"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),r(x,{class:"d-flex footer"},{default:l((()=>[r(k,{class:"button is-plain"},{default:l((()=>[u("取消")])),_:1}),r(k,{class:"button is-orange",onClick:D.onSubmit},{default:l((()=>[u("确定")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-5e57f90e"]]);export{j as default};
