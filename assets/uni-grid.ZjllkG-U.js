import{o as i,c as t,w as e,a as r,p as o,q as d,m as s,v as h,i as l,l as n}from"./index-DMqOC-YM.js";import{_ as a}from"./export-helper-BCo6x5W8.js";const c=a({name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:()=>({column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}),created(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy(){this.grid.children.forEach(((i,t)=>{i===this&&this.grid.children.splice(t,1)}))},methods:{_onClick(){this.grid.change({detail:{index:this.index}})}}},[["render",function(n,a,c,g,u,p){const m=l;return u.width?(i(),t(m,{key:0,style:d("width:"+u.width+";"+(u.square?"height:"+u.width:"")),class:"uni-grid-item"},{default:e((()=>[r(m,{class:o([{"uni-grid-item--border":u.showBorder,"uni-grid-item--border-top":u.showBorder&&c.index<u.column,"uni-highlight":u.highlight},"uni-grid-item__box"]),style:d({"border-right-color":u.borderColor,"border-bottom-color":u.borderColor,"border-top-color":u.borderColor}),onClick:p._onClick},{default:e((()=>[s(n.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])])),_:3},8,["style"])):h("",!0)}],["__scopeId","data-v-0810a0ad"]]);const g=a({name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide(){return{grid:this}},data:()=>({elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,width:0}),created(){this.children=[]},mounted(){this.$nextTick((()=>{this.init()}))},methods:{init(){setTimeout((()=>{this._getSize((i=>{this.children.forEach(((t,e)=>{t.width=i}))}))}),50)},change(i){this.$emit("change",i)},_getSize(i){n().in(this).select(`#${this.elId}`).boundingClientRect().exec((t=>{this.width=parseInt((t[0].width-1)/this.column)+"px",i(this.width)}))}}},[["render",function(h,n,a,c,g,u){const p=l;return i(),t(p,{class:"uni-grid-wrap"},{default:e((()=>[r(p,{id:g.elId,ref:"uni-grid",class:o(["uni-grid",{"uni-grid--border":a.showBorder}]),style:d({"border-left-color":a.borderColor})},{default:e((()=>[s(h.$slots,"default",{},void 0,!0)])),_:3},8,["id","class","style"])])),_:3})}],["__scopeId","data-v-257e8068"]]);export{c as _,g as a};
