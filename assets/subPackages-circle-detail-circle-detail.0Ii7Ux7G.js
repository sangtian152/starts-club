import{T as t,l as e,o as a,c as n,w as o,i as s,a as i,f as l,a2 as h}from"./index-Bp0BPGKX.js";import{_ as r}from"./export-helper-BCo6x5W8.js";const d=""+new URL("banner-Ddks9O4m.jpg",import.meta.url).href;const c=r({data:()=>({fonts:[{text:"北京大学"},{text:"清华大学"},{text:"政法大学"},{text:"高校联盟"},{text:"东北校友会"},{text:"科创大赛"},{text:"高教研究院"}],circle:""}),onLoad(e){this.title=e.title,t({title:e.title})},onUnload(){this.circle&&(this.circle=this.circle.destroy())},onReady(){this.initCanvas()},methods:{getRandomColor:()=>"#"+(Math.round(255*Math.random())<<16|Math.round(255*Math.random())<<8|Math.round(255*Math.random())).toString(16),getHeight:()=>new Promise((t=>{e().select("#canvasView").boundingClientRect((e=>{e&&t(e)})).exec()})),initCanvas(){const t=e(),a=this;t.select("#bubbleCanvas").node().exec((t=>{const e=t[0].node,{fonts:n}=a,o=(t,a,o)=>{const s=a*n[t].text.length,i=Math.random()*(e.width-s),l=e.width-s;return Math.min(l,i)};this.getHeight().then((t=>{e.width=t.width,e.height=t.height;const s=e.getContext("2d"),i=[],l=a.fonts.length;for(let r=0;r<l;r++){const t=Math.max(40-4*r,12);i.push({x:o(r,t,n[r].text),y:Math.random()*e.height,fontSize:Math.max(40-4*r,12),alpha:Math.max(1-.1*r,.2),speed:.2*Math.random()+.15,color:a.getRandomColor()})}const h=()=>{s.clearRect(0,0,e.width,e.height);const{fonts:t}=a;for(let a=0;a<l;a++)s.font=`${i[a].fontSize}px Arial`,s.globalAlpha=i[a].alpha,s.fillStyle=i[a].color,s.fillText(t[a].text,i[a].x,i[a].y),i[a].y-=i[a].speed,i[a].y<i[a].fontSize&&(i[a].x=o(a,i[a].fontSize,t[a].text),i[a].y=e.height+i[a].fontSize);e.requestAnimationFrame(h)};h()}))}))}}},[["render",function(t,e,r,c,x,f){const m=l,g=s,p=h;return a(),n(g,{class:"unit-page d-flex-column"},{default:o((()=>[i(g,{class:"flex-fixed"},{default:o((()=>[i(m,{class:"top-image",src:d,mode:"aspectFill"})])),_:1}),i(g,{class:"page-content flex-fit",id:"canvasView"},{default:o((()=>[i(p,{class:"canvas",id:"bubbleCanvas",type:"2d"})])),_:1})])),_:1})}],["__scopeId","data-v-66e67542"]]);export{c as default};
