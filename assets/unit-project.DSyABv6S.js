import{u as a,o as e,c as t,w as s,a as l,v as c,b as d,t as r,i,h as n,x as o}from"./index-DMqOC-YM.js";import{U as u,a as f}from"./unit-checked.DMACUyAE.js";import{_ as p}from"./export-helper-BCo6x5W8.js";const m=p({name:"unit-project",components:{UnitFlag:u,UnitChecked:f},emits:["on-click"],props:{data:{type:Object,required:!0}},data:()=>({}),computed:{isNeed(){return"1"===this.data.flag},flagStyle(){return this.isNeed?"color: #efa403;":""}},methods:{onClick(){}}},[["render",function(u,f,p,m,_,g){const k=a("UnitFlag"),j=a("UnitChecked"),h=i,x=n,C=o;return e(),t(h,{class:"unit-project",onClick:g.onClick},{default:s((()=>[l(C,{url:`/subPackages/tips-detail/tips-detail?id=${p.data.id}`},{default:s((()=>[l(k,{flag:p.data.flag},null,8,["flag"]),p.data.checked?(e(),t(j,{key:0})):c("",!0),l(h,{class:"project-main"},{default:s((()=>[l(h,{class:"d-flex d-center"},{default:s((()=>[l(h,{class:"user-avatar"}),l(x,null,{default:s((()=>[d(r(p.data.userName),1)])),_:1})])),_:1}),l(h,{class:"project-name"},{default:s((()=>[l(x,null,{default:s((()=>[d(r(p.data.name),1)])),_:1})])),_:1})])),_:1}),l(h,{class:"project-footer d-flex j-space-between"},{default:s((()=>[l(x,{class:"text-gray"},{default:s((()=>[d(r(p.data.circle),1)])),_:1}),l(x,{class:"text-gray"},{default:s((()=>[d(r(p.data.place),1)])),_:1})])),_:1})])),_:1},8,["url"])])),_:1},8,["onClick"])}],["__scopeId","data-v-e0cfa5bd"]]);export{m as u};
