(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-839985fe"],{"0466":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("router-link",{staticClass:"btn btn-light btn-sm",attrs:{to:{name:"matpel.data"}}},[a._v("kembali")])],1),e("div",{staticClass:"card-body"},[e("matpel-form"),e("div",{staticClass:"form-group"},[e("b-button",{attrs:{size:"sm",variant:"primary",disabled:a.isLoading},on:{click:a.submit}},[e("b-spinner",{directives:[{name:"show",rawName:"v-show",value:a.isLoading,expression:"isLoading"}],attrs:{small:"",type:"grow"}}),a._v("Simpan")],1)],1)],1),e("div",{staticClass:"card-footer"})])])])},r=[],n=e("5530"),o=e("2f62"),l=e("cecb"),i=e("d9fb"),c={name:"AddMatpel",data:function(){return{}},computed:Object(n["a"])({},Object(o["c"])(["isLoading"])),methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])("matpel",["submitMatpel"])),{},{submit:function(){var a=this;this.submitMatpel().then((function(t){a.$bvToast.toast("Data mapel berhasil disimpan.",Object(l["c"])()),a.$router.push({name:"matpel.data"})})).catch((function(t){a.$bvToast.toast(t.message,Object(l["b"])())}))}}),components:{"matpel-form":i["a"]}},u=c,m=e("2877"),p=Object(m["a"])(u,s,r,!1,null,null,null);t["default"]=p.exports},"04a7":function(a,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return n}));e("99af");function s(a){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",s=e.length,r=0;r<a;r++)t+=e.charAt(Math.floor(Math.random()*s));return t}function r(){var a=s(3),t=new Date,e=t.getFullYear();return"BKSL-".concat(a,"-").concat(e)}function n(){var a=s(2),t=s(3);return"MTPL-".concat(a,"-").concat(t)}},"0b4b":function(a,t,e){},"60bc":function(a,t,e){"use strict";var s=e("0b4b"),r=e.n(s);r.a},d9fb:function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"form-group"},[e("label",[a._v("Kode matpel")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.matpel.kode_mapel,expression:"matpel.kode_mapel"}],staticClass:"form-control",class:{"is-invalid":a.errors.kode_matpel},attrs:{type:"text",placeholder:"Kode matpel",autofocus:""},domProps:{value:a.matpel.kode_mapel},on:{input:function(t){t.target.composing||a.$set(a.matpel,"kode_mapel",t.target.value)}}}),a.errors.kode_mapel?e("p",{staticClass:"text-danger"},[a._v(a._s(a.errors.kode_mapel[0]))]):a._e()]),e("div",{staticClass:"form-group"},[e("label",[a._v("Nama matpel")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.matpel.nama,expression:"matpel.nama"}],staticClass:"form-control",class:{"is-invalid":a.errors.nama},attrs:{type:"text",placeholder:"Nama matpel"},domProps:{value:a.matpel.nama},on:{input:function(t){t.target.composing||a.$set(a.matpel,"nama",t.target.value)}}}),a.errors.nama?e("p",{staticClass:"text-danger"},[a._v(a._s(a.errors.nama[0]))]):a._e()]),e("div",{staticClass:"form-group"},[e("label",[a._v("Tim pengoreksi")]),a.users?e("multiselect",{attrs:{"tag-placeholder":"Cari untuk menambah tim pengoreksi",placeholder:"Tambah anggota pengoreksi",label:"name","track-by":"id",options:a.users,multiple:!0,taggable:!0},model:{value:a.matpel.correctors,callback:function(t){a.$set(a.matpel,"correctors",t)},expression:"matpel.correctors"}}):a._e()],1),e("div",{staticClass:"form-group"},[e("b-form-checkbox",{attrs:{switch:"",value:"1"},model:{value:a.produktif,callback:function(t){a.produktif=t},expression:"produktif"}},[a._v("Matpel khusus")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:a.produktif,expression:"produktif"}],staticClass:"form-group"},[e("label",[a._v("Jurusan")]),a.jurusans?e("multiselect",{attrs:{"tag-placeholder":"Cari untuk menambah jurusan",placeholder:"Tambah jurusan terkait matpel",label:"nama","track-by":"id",options:a.jurusans,multiple:!0,taggable:!0},model:{value:a.matpel.jurusan_id,callback:function(t){a.$set(a.matpel,"jurusan_id",t)},expression:"matpel.jurusan_id"}}):a._e()],1),e("div",{staticClass:"form-group"},[e("b-form-checkbox",{attrs:{switch:"",value:"1"},model:{value:a.agama,callback:function(t){a.agama=t},expression:"agama"}},[a._v("Matpel agama")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:a.agama,expression:"agama"}],staticClass:"form-group"},[e("label",[a._v("Agama")]),e("v-select",{attrs:{label:"nama",options:a.agamas,reduce:function(a){return a.id}},model:{value:a.matpel.agama_id,callback:function(t){a.$set(a.matpel,"agama_id",t)},expression:"matpel.agama_id"}})],1)])},r=[],n=(e("b0c0"),e("5530")),o=e("2f62"),l=e("4a7a"),i=e.n(l),c=e("8e5f"),u=e.n(c),m=(e("6dfc"),e("04a7")),p={name:"FormMatpel",created:function(){this.gatewayUserCorrectorList(),this.allJurusan(),this.getAgamas()},data:function(){return{produktif:!1,agama:!1}},components:{"v-select":i.a,Multiselect:u.a},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(o["e"])(["errors"])),Object(o["e"])("matpel",{matpel:function(a){return a.matpel}})),Object(o["e"])("agama",{agamas:function(a){return a.agamas}})),Object(o["e"])("jurusan",{jurusans:function(a){return a.all_jurusan}})),Object(o["e"])("user",{users:function(a){return a.users}})),methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(o["b"])("jurusan",["allJurusan"])),Object(o["b"])("agama",["getAgamas"])),Object(o["b"])("user",["getUserLists","gatewayUserCorrectorList"])),watch:{matpel:function(){0!=this.matpel.jurusan_id&&(this.produktif=1),0!=this.matpel.agama_id&&(this.agama=1)}},mounted:function(){"matpel.add"==this.$route.name&&(this.matpel.kode_mapel=Object(m["b"])())}},d=p,b=(e("60bc"),e("2877")),f=Object(b["a"])(d,s,r,!1,null,null,null);t["a"]=f.exports}}]);
//# sourceMappingURL=chunk-839985fe.79b33e39.js.map