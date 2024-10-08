import{Q as e,U as t,r as a,o,c as n,w as i,a as s,b as r,t as l,i as c,j as u,V as p,X as d,T as g,Y as h,O as m,Z as y,_ as f,u as b,d as _,F as v,v as A,f as C,x as P,h as k}from"./index-y1BHnERQ.js";import{_ as x}from"./uni-popup.romVtwwh.js";import{r as I}from"./uni-app.es.-Dqim2yh.js";import{_ as w}from"./export-helper-BCo6x5W8.js";const R=w({components:{},data:()=>({}),mounted(){this.open()},computed:{loginInfo(){return this.$store.getters.loginInfo},privacyContractName:()=>e().globalData.privacyContractName},methods:{...t({SHOWPRIVACY:"SHOWPRIVACY"}),open(){this.$refs.popupRef.open()},close(){this.$refs.popupRef.close()},openPrivacyContract(){this.canInitLoginChange(!1),wx.openPrivacyContract({success:e=>{console.log("openPrivacyContract success")}})},handleAgree(e){this.close(),setTimeout((()=>{this.SHOWPRIVACY(!1)}),800)}}},[["render",function(e,t,p,d,g,h){const m=c,y=u,f=I(a("uni-popup"),x);return o(),n(f,{type:"bottom",ref:"popupRef","mask-click":!1,"safe-area":!1},{default:i((()=>[s(m,{class:"privacy-box"},{default:i((()=>[s(m,{class:"title"},{default:i((()=>[r("用户隐私保护提示")])),_:1}),s(m,{class:"tips"},{default:i((()=>[r("感谢您使用本小程序，您使用本小程序前应当阅读并同意")])),_:1}),s(m,{class:"tips text-primary",onClick:h.openPrivacyContract},{default:i((()=>[r(l(h.privacyContractName),1)])),_:1},8,["onClick"]),s(m,{class:"tips"},{default:i((()=>[r("当您点击同意并继续时，即表示你已理解并同意该条款内容，该条款将对平台和您产生法律约束力。如您拒绝，将无法正常使用小程序某些功能。")])),_:1}),s(m,{class:"button-box"},{default:i((()=>[s(y,{class:"button is-round is-primary is-plain",onClick:h.close},{default:i((()=>[r("不同意")])),_:1},8,["onClick"]),s(y,{"open-type":"agreePrivacyAuthorization",class:"button is-round is-primary is-plain",onAgreeprivacyauthorization:h.handleAgree},{default:i((()=>[r(" 同意并继续 ")])),_:1},8,["onAgreeprivacyauthorization"])])),_:1})])),_:1})])),_:1},512)}],["__scopeId","data-v-f244ae4e"]]);const z=w({setup(){const{canInitLoginChange:t}=function(){const t=p(null);return{canInitLoginChange:(a=!1)=>{e().globalData.canInitLogin=a,clearTimeout(t.value),a||(t.value=setTimeout((()=>{e().globalData.canInitLogin=!0}),3e5))}}}();return{canInitLoginChange:t}},data:()=>({redirect:"",isAgree:!1,frontTitle:d("loginInfo").frontTitle}),onLoad(e){this.redirect=e.redirect||"",g({title:this.frontTitle})},computed:{...h(["loginInfo","showPrivacy","optiondata"]),osName:()=>e().globalData.osName},methods:{...t({SHOWPRIVACY:"SHOWPRIVACY"}),getphonenumber(e){if(!this.isAgree)return void m({title:"请勾选平台协议",icon:"none",duration:2500});let t=e.detail;this.SHOWPRIVACY(!1),this.$store.dispatch("loginHand",{encryptedData:t.encryptedData,iv:t.iv}).then((async e=>{1==e.Status&&(this.redirect?this.redirectUrl({query:this.optiondata}):"1"==e.Ret.popType?6==e.Ret.inviteType&&this.companyApplyWriteAdd(e):e.Ret.discounts&&e.Ret.discounts.length?y({url:"/subPackages/redEnvelope/index"}):this.optiondata.redirect?this.redirectUrl({query:this.optiondata}):f({url:"/pages/home/home"}))}))},openPrivacyContract(){this.canInitLoginChange(!1),wx.openPrivacyContract({success:e=>{}})},handleAgree(e){}}},[["render",function(e,t,l,p,d,g){const h=C,m=c,y=u,f=b("evan-checkbox"),x=P,w=k,z=I(a("privacy-popup"),R);return o(),n(m,{class:"qrcode-login"},{default:i((()=>[s(m,{style:{display:"flex","flex-direction":"column","align-items":"center",width:"100%",height:"100%","justify-content":"center"}},{default:i((()=>[s(h,{class:"logo",src:"https://youzi-pub.oss-cn-beijing.aliyuncs.com/images/bind-phone.png",mode:"widthFix"}),s(m,{class:"h3"},{default:i((()=>[r("欢迎登录/注册账户")])),_:1}),d.isAgree?(o(),_(v,{key:0},["windows"==g.osName||"macos"==g.osName?(o(),n(y,{key:0,class:"button",type:"primary","open-type":"getPhoneNumber",onGetphonenumber:g.getphonenumber,onAgreeprivacyauthorization:g.handleAgree},{default:i((()=>[r(" 手机号快速登录 ")])),_:1},8,["onGetphonenumber","onAgreeprivacyauthorization"])):(o(),n(y,{key:1,class:"button",type:"primary","open-type":"getPhoneNumber|agreePrivacyAuthorization",onGetphonenumber:g.getphonenumber,onAgreeprivacyauthorization:g.handleAgree},{default:i((()=>[r(" 手机号快速登录 ")])),_:1},8,["onGetphonenumber","onAgreeprivacyauthorization"]))],64)):(o(),n(y,{key:1,class:"button",type:"primary",onClick:g.getphonenumber},{default:i((()=>[r(" 手机号快速登录 ")])),_:1},8,["onClick"])),s(m,{class:"agree-box"},{default:i((()=>[s(m,{class:"agree-main"},{default:i((()=>[s(f,{modelValue:d.isAgree,"onUpdate:modelValue":t[0]||(t[0]=e=>d.isAgree=e),shape:"square","icon-size":12},null,8,["modelValue"]),s(m,{class:"agree-text",onClick:t[1]||(t[1]=e=>d.isAgree=!d.isAgree)},{default:i((()=>[r(" 请您仔细阅读并充分理解相关条款，勾选即代表已阅读并同意 "),s(x,{url:"./web-view?articleUrl=https://www.youzics.com/Agreement.html",class:"user-agreement"},{default:i((()=>[r("《用户协议》")])),_:1}),s(w,{style:{color:"#166FFF"},onClick:g.openPrivacyContract},{default:i((()=>[r("《隐私协议》")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1}),s(m,{class:"kuaisuqiehuan"},{default:i((()=>[s(x,{class:"icon-button",url:`/subPackages/login/login?loginType=code&redirect=${d.redirect}`},{default:i((()=>[s(w,{class:"iconfont text-primary"},{default:i((()=>[r("")])),_:1}),s(w,null,{default:i((()=>[r("手机验证码登录")])),_:1})])),_:1},8,["url"]),s(m,{class:"shuxian"}),s(x,{class:"icon-button",url:`/subPackages/login/login?loginType=pwd&redirect=${d.redirect}`},{default:i((()=>[s(w,{class:"iconfont text-primary"},{default:i((()=>[r("")])),_:1}),s(w,null,{default:i((()=>[r("账号密码登录")])),_:1})])),_:1},8,["url"])])),_:1}),e.showPrivacy?(o(),n(z,{key:0})):A("",!0)])),_:1})}],["__scopeId","data-v-67eb7a22"]]);export{z as default};
