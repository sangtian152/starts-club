import{o as e,c as a,w as t,a as s,b as l,t as i,m as r,p as o,q as n,h as p,f as d,i as u,A as h}from"./index-Bp0BPGKX.js";import{_ as c}from"./export-helper-BCo6x5W8.js";const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEUAAACTk5WMj5GNjpGNjZKOjo6MjpGNjpGNjpKOjpGNjpKQkJGMj5KNjpGMjpGNj5GNj5KNj5JwQTKDAAAAEXRSTlMADMrFFQnq4tsf0yixo5d0abQsqWsAAABLSURBVDjL1crJEcAgDARBCSEfGNso/2TJYPdDQTHfadms9jkGFobFc4wRykTC4ubinCQqBJmAfEVR/NPSX8LYd/CVfKnky/+6bFoHf/sDH3K1FjcAAAAASUVORK5CYII=";const g=c({name:"unit-picker",emits:["pickerChange","update:modelValue"],props:{modelValue:[String,Number],placeholder:{type:String,default:"请选择"},options:{type:Array,required:!0},height:String,border:{type:Boolean,default:!0},disabled:Boolean,rangeKey:{type:String,default:"name"},prop:Object},data:()=>({selectValue:""}),computed:{hasValue(){return this.selectValue||0===this.selectValue},selectLabel(){const{modelValue:e,hasValue:a}=this;if(a){return(this.options.find((a=>a.value===e))||{}).name}return""}},watch:{modelValue:{handler(e){const a=this.options.findIndex((a=>a.value===e));this.selectValue=-1===a?"":a},immediate:!0}},methods:{pickerChange(e){const a=this.options[e.target.value].value;this.$emit("update:modelValue",a),this.$emit("pickerChange",a,this.prop)},clear(){this.selectValue="",this.$emit("update:modelValue",this.selectValue),this.$emit("pickerChange",this.selectValue,this.prop)}}},[["render",function(c,g,m,V,f,j){const b=p,y=d,k=u,C=h;return e(),a(C,{disabled:m.disabled,onChange:g[0]||(g[0]=e=>j.pickerChange(e)),"range-key":m.rangeKey,value:f.selectValue,range:m.options},{default:t((()=>[s(k,{class:o(["picker-box",{"no-border":!m.border}]),style:n({height:m.height,lineHeight:m.height})},{default:t((()=>[j.hasValue?(e(),a(b,{key:0,class:"text",style:{color:"#262628"}},{default:t((()=>[l(i(j.selectLabel),1)])),_:1})):(e(),a(b,{key:1,class:"placeholder"},{default:t((()=>[l(i(m.placeholder),1)])),_:1})),r(c.$slots,"suffix"),s(y,{class:"right-arrow",src:A,mode:"widthFix"})])),_:3},8,["class","style"])])),_:3},8,["disabled","range-key","value","range"])}]]);export{g as _,A as a};
