import{k as t,l as o,o as i,c as e,w as s,m as a,p as n,q as d,s as r,i as c,n as l,r as h,u,a as p,d as f,e as g,F as m,b as w,f as v,S as _,g as b,h as k,j as y}from"./index-Cf3bm2qz.js";import{_ as j}from"./uni-easyinput.BUzvoQxC.js";import{r as C}from"./uni-app.es.CvZnoQJg.js";import{_ as T}from"./export-helper-BCo6x5W8.js";import{u as x}from"./unit-project.CO2pI2BA.js";import{p as W}from"./mock.DyGV-WP0.js";import"./uni-icons.Bqn3GtkC.js";const H=T({emits:["btnTouchend","btnClick","btnTouchstart"],props:{isDock:{type:Boolean,default:!1},existTabBar:{type:Boolean,default:!1}},data:()=>({top:0,left:0,width:0,height:0,offsetWidth:0,offsetHeight:0,windowWidth:0,windowHeight:0,isMove:!0,started:!1,edge:0,isMounted:!1}),mounted(){const i=t();this.windowWidth=i.windowWidth,this.windowHeight=i.windowHeight,i.windowTop&&(this.windowHeight+=i.windowTop);o().in(this).select("#_drag_button").boundingClientRect((t=>{this.width=t.width,this.height=t.height,this.offsetWidth=t.width/2,this.offsetHeight=t.height/2,this.left=this.windowWidth-this.width-this.edge,this.top=this.windowHeight-this.height-this.edge-20,this.isMounted=!0})).exec()},methods:{click(){this.$emit("btnClick")},touchstart(t){this.started=!0,this.$emit("btnTouchstart")},touchmove(t){if(1!==t.touches.length)return!1;this.isMove=!0,this.left=t.touches[0].clientX-this.offsetWidth;let o=t.touches[0].clientY-this.offsetHeight;o+=this.height;let i=this.windowHeight-this.height-this.edge;o<this.edge?this.top=this.edge:this.top=o>i?i:o},touchend(t){if(this.isDock){let t=this.windowWidth-this.width-this.edge;this.left=t}this.isMove=!1,this.$emit("btnTouchend")}}},[["render",function(t,o,l,h,u,p){const f=c;return i(),e(f,{id:"_drag_button",class:n(["drag",{"is-move":u.isMove&&u.started,hidden:!u.isMounted,transition:l.isDock&&!u.isMove}]),style:d("left: "+u.left+"px; top:"+u.top+"px;"),onTouchstart:p.touchstart,onTouchmove:r(p.touchmove,["stop","prevent"]),onTouchend:p.touchend,onClick:r(p.click,["stop","prevent"])},{default:s((()=>[a(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onTouchstart","onTouchmove","onTouchend","onClick"])}],["__scopeId","data-v-3769a87f"]]),M=""+new URL("banner1-BcvWWAnS.png",import.meta.url).href;const B=T({components:{dragButton:H,unitProject:x},data:()=>({keywoed:"",indicatorDots:!0,indicatorColor:"rgba(255,255,255, 0.3)",indicatorActiveColor:"rgba(255,255,255, 0.7)",autoplay:!0,interval:2e3,duration:500,directionStr:"垂直",horizontal:"right",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#da3a2a",buttonColor:"#da3a2a",iconColor:"#fff"},is_color_type:!1,projectList:W}),methods:{navigateTo(){l({url:"/subPackages/en-form/en-form"})}}},[["render",function(t,o,a,n,d,r){const l=C(h("uni-easyinput"),j),T=c,x=v,W=_,B=b,D=u("unitProject"),A=k,$=y,z=C(h("drag-button"),H);return i(),e(T,null,{default:s((()=>[p(T,{class:"energize-top"},{default:s((()=>[p(T,{class:"uni-easyinput-round"},{default:s((()=>[p(l,{class:"is-round",prefixIcon:"search",modelValue:d.keywoed,"onUpdate:modelValue":o[0]||(o[0]=t=>d.keywoed=t),placeholder:"关键字搜索"},null,8,["modelValue"])])),_:1}),p(T,{class:"swiper-box m-t-20"},{default:s((()=>[p(B,{class:"swiper",circular:"","indicator-dots":d.indicatorDots,"indicator-color":d.indicatorColor,"indicator-active-color":d.indicatorActiveColor,autoplay:d.autoplay,interval:d.interval,duration:d.duration},{default:s((()=>[p(W,null,{default:s((()=>[p(T,{class:"swiper-item"},{default:s((()=>[p(x,{class:"image",src:M,mode:"widthFix"})])),_:1})])),_:1})])),_:1},8,["indicator-dots","indicator-color","indicator-active-color","autoplay","interval","duration"])])),_:1})])),_:1}),p(T,{class:"page-content m-t-20"},{default:s((()=>[p(T,{class:"project-list"},{default:s((()=>[(i(!0),f(m,null,g(d.projectList,(t=>(i(),e(D,{key:t.id,data:t},null,8,["data"])))),128))])),_:1})])),_:1}),p(z,{"is-dock":!0,"exist-tab-bar":!1},{default:s((()=>[p($,{"open-type":"contact",class:"app-regist-btn",onClick:r.navigateTo},{default:s((()=>[p(A,{class:"text bg-primary"},{default:s((()=>[w("我要发布")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-31ab2600"]]);export{B as default};
