import{Z as e,O as a,M as t,o as l,c as s,w as o,i,a as d,b as n,v as u,t as r,h as c,I as f,j as p,x as m}from"./index-DKo2e5NO.js";import{_ as h}from"./export-helper-BCo6x5W8.js";const _=h({data:()=>({redirect:"",loginType:"",sendAuthCode:!0,auth_time:0,formData:{userName:"",verifyCode:"",password:""}}),onLoad(e){this.redirect=e.redirect||"",this.loginType=e.loginType||"code"},watch:{loginType(){this.formData.verifyCode="",this.formData.password=""}},computed:{...e(["loginInfo","showPrivacy","optiondata"])},methods:{getAuthCode(){if(""==this.formData.userName||!/^1[3457689]\d{9}$/.test(this.formData.userName))return a({title:"手机号不正确！",icon:"none",duration:2500}),!1;this.sendAuthCode=!1,this.auth_time=60;var e=setInterval((()=>{this.auth_time--,this.auth_time<=0&&(this.sendAuthCode=!0,clearInterval(e))}),1e3);this.messageCode()},messageCode(){this.$http.post("app/getRegisteCode.zm",{phone:this.formData.userName}).then((e=>{1!=e.Status&&(this.sendAuthCode=!0),a({title:e.Msg,icon:"none",duration:3e3})}))},login(){this.$store.dispatch("loginHand",{...this.formData}).then((async e=>{1==e.Status&&this.redirect&&t({complete:()=>{this.redirectUrl({query:this.optiondata})}})}))}}},[["render",function(e,a,t,h,_,y){const g=c,C=f,k=i,b=p,D=m;return l(),s(k,{class:"login-page"},{default:o((()=>[d(k,null,{default:o((()=>[d(k,{class:"cell-box"},{default:o((()=>[d(k,{class:"cell"},{default:o((()=>[d(g,{class:"label"},{default:o((()=>[n("手机号")])),_:1}),d(k,{class:"right"},{default:o((()=>[d(C,{class:"uni-input",modelValue:_.formData.userName,"onUpdate:modelValue":a[0]||(a[0]=e=>_.formData.userName=e),placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1})])),_:1}),"pwd"==_.loginType?(l(),s(k,{key:0,class:"cell"},{default:o((()=>[d(g,{class:"label"},{default:o((()=>[n("密码")])),_:1}),d(k,{class:"right"},{default:o((()=>[d(C,{class:"uni-input",modelValue:_.formData.password,"onUpdate:modelValue":a[1]||(a[1]=e=>_.formData.password=e),placeholder:"请输入密码",type:"password"},null,8,["modelValue"])])),_:1})])),_:1})):u("",!0),"code"==_.loginType?(l(),s(k,{key:1,class:"cell"},{default:o((()=>[d(g,{class:"label"},{default:o((()=>[n("验证码")])),_:1}),d(k,{class:"right d-flex d-center"},{default:o((()=>[d(C,{class:"uni-input",modelValue:_.formData.verifyCode,"onUpdate:modelValue":a[2]||(a[2]=e=>_.formData.verifyCode=e),style:{flex:"1"},placeholder:"请输入验证码"},null,8,["modelValue"]),d(k,null,{default:o((()=>[_.sendAuthCode?(l(),s(b,{key:0,class:"button is-primary is-plain",size:"mini",onClick:y.getAuthCode},{default:o((()=>[n("获取验证码")])),_:1},8,["onClick"])):(l(),s(b,{key:1,class:"button is-primary is-plain",size:"mini"},{default:o((()=>[n(r(_.auth_time)+"秒后重发",1)])),_:1}))])),_:1})])),_:1})])),_:1})):u("",!0)])),_:1}),d(k,{class:"button-box m-t-40"},{default:o((()=>[d(b,{class:"button is-primary",onClick:y.login},{default:o((()=>[n(" 立即登录 ")])),_:1},8,["onClick"])])),_:1})])),_:1}),d(k,{class:"kuaisuqiehuan"},{default:o((()=>[d(D,{class:"icon-button",delta:"1","open-type":"navigateBack"},{default:o((()=>[d(g,{class:"iconfont text-primary"},{default:o((()=>[n("")])),_:1}),d(g,null,{default:o((()=>[n("手机号快速登录")])),_:1})])),_:1}),d(k,{class:"shuxian"}),"pwd"==_.loginType?(l(),s(k,{key:0,class:"icon-button",onClick:a[3]||(a[3]=e=>_.loginType="code")},{default:o((()=>[d(g,{class:"iconfont text-primary"},{default:o((()=>[n("")])),_:1}),d(g,null,{default:o((()=>[n("手机验证码登录")])),_:1})])),_:1})):(l(),s(k,{key:1,class:"icon-button",onClick:a[4]||(a[4]=e=>_.loginType="pwd")},{default:o((()=>[d(g,{class:"iconfont text-primary"},{default:o((()=>[n("")])),_:1}),d(g,null,{default:o((()=>[n("账号密码登录")])),_:1})])),_:1}))])),_:1})])),_:1})}],["__scopeId","data-v-e5f56902"]]);export{_ as default};
