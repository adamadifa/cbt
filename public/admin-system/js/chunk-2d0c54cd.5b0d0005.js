(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c54cd"],{"3f04":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[a._v(" Capaian peserta ujian ")]),e("div",{staticClass:"card-body"},[a._m(0),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[e("b-form-group",{attrs:{label:"Ujian","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[e("v-select",{attrs:{label:"alias",options:a.ujians,reduce:function(a){return a.id}},model:{value:a.jadwal,callback:function(t){a.jadwal=t},expression:"jadwal"}})],1)],1)]),e("div",{staticClass:"table-responsive-md"},[e("b-table",{attrs:{striped:"",hover:"",bordered:"",small:"",fields:a.fields,items:a.banksoals,"show-empty":""},scopedSlots:a._u([{key:"cell(actions)",fn:function(t){return[e("b-button",{attrs:{disabled:a.isLoading,variant:"success",size:"sm"},on:{click:function(e){a.banksoal_id=t.item.id,a.$bvModal.show("modal-scoped-download-capaian-ujian")}}},[e("i",{staticClass:"flaticon-download"}),a._v(" Download ")])]}}])})],1)])])]),e("b-modal",{attrs:{id:"modal-scoped-download-capaian-ujian","hide-header":""},scopedSlots:a._u([{key:"modal-footer",fn:function(t){var s=t.cancel;return[e("b-button",{attrs:{size:"sm",variant:"primary",disabled:a.isLoading||(0==a.jurusan_download||""==a.jurusan_download||null==a.jurusan_download)&&!a.isGroup},on:{click:a.download}},[a._v(" "+a._s(a.isLoading?"Processing...":"Download")+" ")]),e("b-button",{attrs:{size:"sm",variant:"secondary",disabled:a.isLoading},on:{click:function(a){return s()}}},[a._v(" Cancel ")])]}}])},[e("div",{staticClass:"mb-2"},[e("b-form-checkbox",{attrs:{switch:""},model:{value:a.isGroup,callback:function(t){a.isGroup=t},expression:"isGroup"}},[a._v("Gunakan grup")])],1),a.isGroup?e("div",{staticClass:"row"},[a.isGroup?e("div",{staticClass:"col-12 col-md-6"},[e("label",[e("small",[a._v("Grup")])]),e("div",{staticClass:"input-group input-group-sm"},[e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[e("i",{staticClass:"flaticon-browser"})])]),e("select",{directives:[{name:"model",rawName:"v-model",value:a.groupParent,expression:"groupParent"}],staticClass:"custom-select",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.groupParent=t.target.multiple?e:e[0]}}},a._l(a.groupping,(function(t,s){return e("option",{key:s,domProps:{value:t.id}},[a._v(a._s(t.name))])})),0)])]):a._e(),a.isGroup?e("div",{staticClass:"col-12 col-md-6"},[e("label",[e("small",[a._v("Sub-grup")])]),e("div",{staticClass:"input-group input-group-sm"},[e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon3"}},[e("i",{staticClass:"flaticon-browser"})])]),e("select",{directives:[{name:"model",rawName:"v-model",value:a.groupChild,expression:"groupChild"}],staticClass:"custom-select",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.groupChild=t.target.multiple?e:e[0]}}},a._l(a.childs,(function(t,s){return e("option",{key:s,domProps:{value:t.id}},[a._v(a._s(t.name))])})),0)])]):a._e()]):a._e(),a.isGroup?a._e():e("div",{staticClass:"form-group"},[e("label",[a._v("Jurusan")]),e("v-select",{attrs:{label:"nama",options:a.jurusans,multiple:"",reduce:function(a){return a.id}},model:{value:a.jurusan_download,callback:function(t){a.jurusan_download=t},expression:"jurusan_download"}})],1)])],1)},n=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-5"},[e("h4",{staticClass:"card-title mb-0",attrs:{id:"traffic"}},[a._v("Capaian peserta ujian")]),e("div",{staticClass:"small text-muted"},[a._v("Filter dengan jadwal")])]),e("div",{staticClass:"d-none d-md-block col-sm-7"})])}],r=(e("4de4"),e("a15b"),e("d81d"),e("96cf"),e("1da1")),i=e("5530"),o=e("2f62"),l=e("4a7a"),u=e.n(l),c=(e("6dfc"),e("f2d9")),d=e("cecb"),p={name:"DataAnalysSiswa",components:{vSelect:u.a,downloadExcel:c["a"]},data:function(){return{fields:[{key:"kode_banksoal",label:"Kode banksoal"},{key:"actions",label:"Aksi"}],jadwal:0,jurusan_download:0,jurusan_select:0,banksoal_id:0,isGroup:!1,groupParent:0,groupChild:0}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["c"])(["isLoading"])),Object(o["e"])("ujian",{banksoals:function(a){return a.banksoals},ujians:function(a){return a.ujianAll}})),Object(o["e"])("grup",["groups"])),Object(o["e"])("jurusan",{jurusans:function(a){return a.all_jurusan}})),{},{jurusands:function(){if(""==this.jurusans)return[];var a=this.jurusans.map((function(a){return a}));return a.push({id:0,nama:"Semua"}),a},groupping:function(){return this.groups?this.groups.filter((function(a){return 0===a.parent_id||null===a.parent_id})):[]},childs:function(){var a=this;if(!this.groups||0==this.groupParent)return[];var t=this.groups.filter((function(t){return t.parent_id==a.groupParent}));return t.push({id:0,name:"Semua sub-grup"}),t}}),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["b"])("ujian",["getAllUjians","getResultBanksoal","downloadExcel","getLinkExcelCapaianSiswa"])),Object(o["b"])("jurusan",["allJurusan"])),Object(o["b"])("grup",["getAllGroup"])),{},{capaian:function(a,t){a&&t?this.$router.push({params:{jadwal:a,banksoal:t},name:"kelola.analys.capaian.siswa.data"}):this.$swal({title:"Hei!!",text:"Pilih ujian dan banksoal",icon:"error"})},download:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var e,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a.jadwal){t.next=3;break}return a.$swal({title:"Hei!!",text:"Pilih ujian terlebih dahulu",icon:"error"}),t.abrupt("return");case 3:return t.prev=3,e=0,s=0,a.isGroup?(e=0==a.groupChild?a.groupParent:a.groupChild,s=""):(s=a.jurusan_download.join(","),e=""),t.next=9,a.getLinkExcelCapaianSiswa({ujian:a.jadwal,banksoal:a.banksoal_id,jurusan:s,group:e});case 9:n=t.sent,window.open(n.data,"_self"),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),a.$bvToast.toast(t.t0.message,Object(d["b"])());case 16:case"end":return t.stop()}}),t,null,[[3,13]])})))()}}),created:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.getAllUjians();case 3:return t.next=5,a.allJurusan();case 5:a.getAllGroup(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),a.$bvToast.toast(t.t0.message,Object(d["b"])());case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},watch:{jadwal:function(a){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a)try{t.getResultBanksoal(a)}catch(s){t.$bvToast.toast(s.message,Object(d["b"])())}case 1:case"end":return e.stop()}}),e)})))()}}},b=p,m=e("2877"),v=Object(m["a"])(b,s,n,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0c54cd.5b0d0005.js.map