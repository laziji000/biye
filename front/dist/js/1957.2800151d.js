"use strict";(self["webpackChunks087"]=self["webpackChunks087"]||[]).push([[1957],{1957:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var a=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("添加")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("FormItem",{attrs:{label:"留言时间",prop:"date"}},[e("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),e("FormItem",{attrs:{label:"留言内容",prop:"content"}},[e("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},o=[],i=s(656);const l={name:"add",components:{},data(){return{submitLoading:!1,form:{date:"",content:""},formValidate:{}}},methods:{init(){},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,i.pK)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},r=l;var n=s(1001),c=(0,n.Z)(r,a,o,!1,null,null,null);const d=c.exports},656:(t,e,s)=>{s.d(e,{$O:()=>n,Bx:()=>l,CA:()=>r,Vx:()=>o,pK:()=>i});var a=s(7184);const o=t=>(0,a.A_)("/messageBoard/getByPage",t),i=t=>(0,a.j0)("/messageBoard/insert",t),l=t=>(0,a.j0)("/messageBoard/insertReply",t),r=t=>(0,a.j0)("/messageBoard/update",t),n=t=>(0,a.j0)("/messageBoard/delByIds",t)}}]);