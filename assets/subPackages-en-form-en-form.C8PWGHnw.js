import{r as e,o as a,c as l,w as o,i as t,a as r,v as d,b as u,f as s,j as m}from"./index-DKo2e5NO.js";import{u as n,_ as i,a as p,b as c}from"./top-image2.toMoVpQX.js";import{r as f}from"./uni-app.es.BBFJ5dYZ.js";import{_ as b,a as V}from"./uni-forms.C3nLaDbY.js";import{_}from"./uni-easyinput.DptMW2v8.js";import{_ as F}from"./unit-picker.BldYpYuA.js";import{r as D,a as h,c as y}from"./constant.ixvWox50.js";import{_ as v}from"./export-helper-BCo6x5W8.js";import"./uni-icons.CUZN6vEy.js";import"./uni-popup.RAWHNu0h.js";const g=v({components:{UnitPicker:F,unitMutiSelect:n,unitPickerAddress:i},data:()=>({identity:[{text:"供方",value:"0"},{text:"需方",value:"1"}],verify:[{text:"是",value:"1"},{text:"否",value:"0"}],methods:[{name:"分账提成",value:"0"},{name:"居间佣金",value:"1"},{name:"底价自加",value:"2"}],options:{rangs:D,areas:h,circles:y},baseFormData:{identity:"",name:"",introduction:"",area:"",rang:"",circle:"",verify:"",method:"",amount:"",rote:""}}),methods:{}},[["render",function(D,h,y,v,g,q){const x=s,j=t,U=f(e("uni-data-checkbox"),p),k=f(e("uni-forms-item"),b),w=f(e("uni-easyinput"),_),P=f(e("unit-picker"),F),A=f(e("unit-muti-select"),n),I=f(e("unit-picker-address"),i),M=f(e("uni-forms"),V),S=m;return a(),l(j,{class:"linear-gradient"},{default:o((()=>[r(j,null,{default:o((()=>[r(x,{class:"top-image",src:c,mode:"widthFix"})])),_:1}),r(j,{class:"page-content m-t-20"},{default:o((()=>[r(j,{class:"form-wrap page-card"},{default:o((()=>[r(M,{ref:"baseForm","label-width":"160rpx",modelValue:g.baseFormData},{default:o((()=>[r(k,{label:"供需关系",required:""},{default:o((()=>[r(j,{class:"d-flex d-center",style:{height:"100%"}},{default:o((()=>[r(U,{modelValue:g.baseFormData.identity,"onUpdate:modelValue":h[0]||(h[0]=e=>g.baseFormData.identity=e),localdata:g.identity},null,8,["modelValue","localdata"])])),_:1})])),_:1}),r(k,{label:"项目名称",required:""},{default:o((()=>[r(w,{modelValue:g.baseFormData.name,"onUpdate:modelValue":h[1]||(h[1]=e=>g.baseFormData.name=e),placeholder:"请输入项目名称"},null,8,["modelValue"])])),_:1}),r(k,{label:"项目简介",required:""},{default:o((()=>[r(w,{type:"textarea",modelValue:g.baseFormData.introduction,"onUpdate:modelValue":h[2]||(h[2]=e=>g.baseFormData.introduction=e),placeholder:"请输入项目简介"},null,8,["modelValue"])])),_:1}),r(k,{label:"领域",required:""},{default:o((()=>[r(P,{modelValue:g.baseFormData.area,"onUpdate:modelValue":h[3]||(h[3]=e=>g.baseFormData.area=e),options:g.options.areas,placeholder:"请选择领域"},null,8,["modelValue","options"])])),_:1}),r(k,{label:"圈子",required:""},{default:o((()=>[r(A,{modelValue:g.baseFormData.circle,"onUpdate:modelValue":h[4]||(h[4]=e=>g.baseFormData.circle=e),props:{name:"name"},options:g.options.circles,placeholder:"请选择圈子"},null,8,["modelValue","options"])])),_:1}),r(k,{label:"合作范围",required:""},{default:o((()=>[r(P,{modelValue:g.baseFormData.rang,"onUpdate:modelValue":h[5]||(h[5]=e=>g.baseFormData.rang=e),options:g.options.rangs,placeholder:"请选择合作范围"},null,8,["modelValue","options"])])),_:1}),r(k,{label:"地点",required:""},{default:o((()=>[r(I,{"no-county":!0})])),_:1}),r(k,{label:"合作方式",required:""},{default:o((()=>[r(P,{modelValue:g.baseFormData.method,"onUpdate:modelValue":h[6]||(h[6]=e=>g.baseFormData.method=e),options:g.methods,placeholder:"请选择合作方式"},null,8,["modelValue","options"])])),_:1}),"0"===g.baseFormData.method?(a(),l(k,{key:0,label:"分账比例",required:""},{default:o((()=>[r(w,{modelValue:g.baseFormData.rote,"onUpdate:modelValue":h[7]||(h[7]=e=>g.baseFormData.rote=e),placeholder:"请输入分账比例"},null,8,["modelValue"])])),_:1})):"0"===g.baseFormData.method?(a(),l(k,{key:1,label:"佣金金额",required:""},{default:o((()=>[r(w,{modelValue:g.baseFormData.amount,"onUpdate:modelValue":h[8]||(h[8]=e=>g.baseFormData.amount=e),placeholder:"请输入佣金金额"},null,8,["modelValue"])])),_:1})):"2"===g.baseFormData.method?(a(),l(k,{key:2,label:"金额",required:""},{default:o((()=>[r(w,{modelValue:g.baseFormData.amount,"onUpdate:modelValue":h[9]||(h[9]=e=>g.baseFormData.amount=e),placeholder:"请输入金额"},null,8,["modelValue"])])),_:1})):d("",!0),r(k,{label:"是否申请验证",required:""},{default:o((()=>[r(j,{class:"d-flex d-center",style:{height:"100%"}},{default:o((()=>[r(U,{modelValue:g.baseFormData.verify,"onUpdate:modelValue":h[10]||(h[10]=e=>g.baseFormData.verify=e),localdata:g.verify},null,8,["modelValue","localdata"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),r(j,{class:"m-t-20"},{default:o((()=>[r(S,{class:"button is-orange"},{default:o((()=>[u("提交")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-8d924cff"]]);export{g as default};
