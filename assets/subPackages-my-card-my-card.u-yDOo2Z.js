import{k as l,a3 as a,l as e,o as t,c as s,w as f,a as d,a2 as o,i as r,u as n,b as c,f as u,h as i}from"./index-D3pQfe-w.js";import{_ as h}from"./export-helper-BCo6x5W8.js";const m=h({name:"unit-pie",data:()=>({messarr:[{color:"#464af8",num:"20",flownum:"20"},{color:"#ff6262",num:"50",flownum:"50"},{color:"#f7c11b",num:"60",flownum:"60"},{color:"#ff8015",num:"80",flownum:"80"},{color:"#17d0bc",num:"20",flownum:"20"}]}),computed:{canvasId:()=>"canvas_"+function(l){l=l||32;const a="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",e=a.length;let t="";for(let s=0;s<l;s++)t+=a.charAt(Math.floor(Math.random()*e));return t}(6)},mounted(){},methods:{init(){const{uniPlatform:a}=l();"web"===a?this.drawH5():this.drawMp()},drawH5(){const l=a(this.canvasId,this);let e=60,t=60,s=this.messarr,f=[],d=0;for(let a=0;a<s.length;a++){let l=Number(s[a].flownum),e=s[a].color;d+=l,f.push({data:l,color:e})}console.log(l,70);for(var o=0;o<f.length;o++){var r=0;if(l.beginPath(),o>0)for(var n=0;n<o;n++)r+=f[n].data/d*2*Math.PI;var c=r+f[o].data/d*2*Math.PI;l.arc(e,t,60,r,c),l.setLineWidth(1),l.lineTo(e,t),l.setStrokeStyle("#fff"),l.setFillStyle(f[o].color),l.fill(),l.closePath(),l.stroke()}l.draw()},drawMp(){e().in(this).select("#"+this.canvasId).fields({node:!0,size:!0}).exec((a=>{const e=a[0].node,t=e.getContext("2d"),{uniPlatform:s,pixelRatio:f}=l();let d=f;"web"===s&&(d=1),e.width=a[0].width*d,e.height=a[0].height*d,console.log(a[0],d);let o={x:e.width/2,y:e.height/2},r=this.messarr,n=[],c=0;for(let l=0;l<r.length;l++){let a=Number(r[l].flownum),e=r[l].color;c+=a,n.push({data:a,color:e})}console.log(t,70);let u=e.width/2;for(var i=0;i<n.length;i++){var h=0;if(t.beginPath(),i>0)for(var m=0;m<i;m++)h+=n[m].data/c*2*Math.PI;var _=h+n[i].data/c*2*Math.PI;t.arc(o.x,o.y,u,h,_),t.lineWidth=1,t.lineTo(o.x,o.y),t.strokeStyle="#fff",t.fillStyle=n[i].color,t.fill(),t.closePath(),t.stroke()}}))}}},[["render",function(l,a,e,n,c,u){const i=o,h=r;return t(),s(h,null,{default:f((()=>[d(i,{type:"2d",style:{width:"260rpx",height:"260rpx"},"canvas-id":u.canvasId,id:u.canvasId},null,8,["canvas-id","id"])])),_:1})}]]),_=""+new URL("avatar-CUz_-M3A.png",import.meta.url).href,p=""+new URL("circle-C194tGGP.png",import.meta.url).href;const x=h({components:{UnitPie:m},data:()=>({}),onReady(){this.$refs.pieRef.init()},methods:{}},[["render",function(l,a,e,o,h,m){const x=r,w=u,v=i,g=n("UnitPie");return t(),s(x,{class:"my-card page-content"},{default:f((()=>[d(x,{class:"user-name"},{default:f((()=>[d(x,null,{default:f((()=>[c("理事：王总")])),_:1})])),_:1}),d(x,{class:"d-flex"},{default:f((()=>[d(x,{class:"user-avatar"},{default:f((()=>[d(w,{class:"avatar-image",src:_,mode:"widthFix"})])),_:1}),d(x,{class:"user-info"},{default:f((()=>[d(x,{class:"d-flex"},{default:f((()=>[d(x,{class:"flex-fixed"},{default:f((()=>[c("籍贯：")])),_:1})])),_:1}),d(x,{class:"m-t-20 d-flex"},{default:f((()=>[d(x,{class:"flex-fixed"},{default:f((()=>[c("职务：")])),_:1}),d(x,null,{default:f((()=>[d(v,null,{default:f((()=>[c("北京凌霄文苑教育科技文化有限公司创始人")])),_:1})])),_:1})])),_:1}),d(x,{class:"m-t-20 d-flex"},{default:f((()=>[d(x,{class:"flex-fixed"},{default:f((()=>[c("昵称：")])),_:1}),d(x,null,{default:f((()=>[d(v,null,{default:f((()=>[c("王总")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),d(x,{class:"d-flex m-t-40"},{default:f((()=>[d(x,{class:"flex-fit"},{default:f((()=>[d(x,{class:"card-label"},{default:f((()=>[d(v,null,{default:f((()=>[c("领域")])),_:1})])),_:1}),d(x,{class:"m-t-20"},{default:f((()=>[d(g,{ref:"pieRef"},null,512)])),_:1})])),_:1}),d(x,{class:"flex-fit"},{default:f((()=>[d(x,{class:"card-label"},{default:f((()=>[d(v,null,{default:f((()=>[c("圈子")])),_:1})])),_:1}),d(x,null,{default:f((()=>[d(w,{class:"circle-image",src:p,mode:"widthFix"})])),_:1})])),_:1})])),_:1}),d(x,{class:"d-flex m-t-40"},{default:f((()=>[d(x,{class:"flex-fit"},{default:f((()=>[d(x,{class:"card-label"},{default:f((()=>[d(v,null,{default:f((()=>[c("项目")])),_:1})])),_:1}),d(x,{class:"project-list m-t-20"},{default:f((()=>[d(x,{class:"project-item"},{default:f((()=>[c("项目1")])),_:1}),d(x,{class:"project-item"},{default:f((()=>[c("项目2")])),_:1}),d(x,{class:"project-item"},{default:f((()=>[c("项目3")])),_:1})])),_:1})])),_:1}),d(x,{class:"flex-fit"},{default:f((()=>[d(x,{class:"card-label"},{default:f((()=>[d(v,null,{default:f((()=>[c("自评")])),_:1})])),_:1}),d(x,{class:"self-evaluation m-t-20"},{default:f((()=>[c(" 我的项目我做主！ ")])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-19c8fe77"]]);export{x as default};
