import{M as a,N as e,r as o,o as s,c as t,w as l,i as r,a as m,b as u,j as n}from"./index-D3pQfe-w.js";import{_ as d}from"./uni-easyinput._OA5oGpN.js";import{r as i}from"./uni-app.es.vKXccQxM.js";import{_ as p,a as c}from"./uni-forms.EEqJXkJK.js";import{_ as f}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.CmbUMx5J.js";const b=f({data:()=>({baseFormData:{companyName:"",job:""}}),methods:{onSubmit(){const o=this;a({success:function(){e("acceptDataFromOpenerPage",{key:"jobData",data:o.baseFormData})}})}}},[["render",function(a,e,f,b,_,j){const D=i(o("uni-easyinput"),d),F=i(o("uni-forms-item"),p),h=i(o("uni-forms"),c),V=n,y=r;return s(),t(y,{style:{height:"100%"}},{default:l((()=>[m(y,{class:"page-content"},{default:l((()=>[m(y,{class:"page-card"},{default:l((()=>[m(h,{ref:"baseForm","label-width":"160rpx",modelValue:_.baseFormData},{default:l((()=>[m(F,{label:"公司",required:""},{default:l((()=>[m(D,{modelValue:_.baseFormData.companyName,"onUpdate:modelValue":e[0]||(e[0]=a=>_.baseFormData.companyName=a),placeholder:"请输入公司"},null,8,["modelValue"])])),_:1}),m(F,{label:"职务",required:""},{default:l((()=>[m(D,{modelValue:_.baseFormData.job,"onUpdate:modelValue":e[1]||(e[1]=a=>_.baseFormData.job=a),placeholder:"请输入职务"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),m(y,{class:"d-flex footer"},{default:l((()=>[m(V,{class:"button is-plain"},{default:l((()=>[u("取消")])),_:1}),m(V,{class:"button is-orange",onClick:j.onSubmit},{default:l((()=>[u("确定")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-21d383ee"]]);export{b as default};
