import{M as a,N as e,r as o,o as s,c as t,w as l,i as r,a as u,b as m,j as n}from"./index-MTMoKUzn.js";import{_ as d}from"./uni-easyinput.DWzKCA6T.js";import{r as i}from"./uni-app.es.CqKDl5BY.js";import{_ as p,a as c}from"./uni-forms.C0NGaKtg.js";import{_ as f}from"./export-helper-BCo6x5W8.js";import"./uni-icons.rQlK0eZt.js";const b=f({data:()=>({baseFormData:{companyName:"",job:""}}),methods:{onSubmit(){const o=this;a({success:function(){e("acceptDataFromOpenerPage",{key:"jobData",data:o.baseFormData})}})}}},[["render",function(a,e,f,b,_,j){const D=i(o("uni-easyinput"),d),F=i(o("uni-forms-item"),p),h=i(o("uni-forms"),c),y=n,V=r;return s(),t(V,{style:{height:"100%"}},{default:l((()=>[u(V,{class:"page-content"},{default:l((()=>[u(V,{class:"page-card"},{default:l((()=>[u(h,{ref:"baseForm","label-width":"160rpx",modelValue:_.baseFormData},{default:l((()=>[u(F,{label:"公司",required:""},{default:l((()=>[u(D,{modelValue:_.baseFormData.companyName,"onUpdate:modelValue":e[0]||(e[0]=a=>_.baseFormData.companyName=a),placeholder:"请输入公司"},null,8,["modelValue"])])),_:1}),u(F,{label:"职务",required:""},{default:l((()=>[u(D,{modelValue:_.baseFormData.job,"onUpdate:modelValue":e[1]||(e[1]=a=>_.baseFormData.job=a),placeholder:"请输入职务"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),u(V,{class:"d-flex footer"},{default:l((()=>[u(y,{class:"button is-plain"},{default:l((()=>[m("取消")])),_:1}),u(y,{class:"button is-orange",onClick:j.onSubmit},{default:l((()=>[m("确定")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-21d383ee"]]);export{b as default};
