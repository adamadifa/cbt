(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c730efea"],{"18fa":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("router-link",{staticClass:"btn btn-light btn-sm  ",attrs:{to:{name:"kelola.koreksi.esay"}}},[t._v("Kembali")])],1),a("div",{staticClass:"card-body"},[t._m(0),a("br"),a("div",{staticClass:"table-responsive-md"},[a("b-table",{attrs:{striped:"",hover:"",bordered:"",small:"",fields:t.fields,items:t.esies.data,"show-empty":""},scopedSlots:t._u([{key:"cell(no)",fn:function(e){return[t._v(" "+t._s((t.page-1)*t.esies.per_page+e.index+1)+" ")]}},{key:"cell(show_details)",fn:function(t){return[a("b-button",{attrs:{size:"sm",variant:t.detailsShowing?"danger":"info"},on:{click:t.toggleDetails}},[a("i",{class:t.detailsShowing?"flaticon-circle":"flaticon2-add"})])]}},{key:"cell(akurasi)",fn:function(e){return[a("b-progress",{attrs:{max:100,height:"2rem","show-progress":"",variant:"info"}},[a("b-progress-bar",{attrs:{value:e.item.similiar}},[t._v(" Akurasi: "),a("strong",{domProps:{textContent:t._s(e.item.similiar)}})])],1)]}},{key:"row-details",fn:function(e){return[a("b-card",[a("div",{staticClass:"table-responsive-md"},[a("table",{staticClass:"table table-lg table-bordered"},[a("tr",[a("td",{attrs:{width:"150px"}},[t._v("Pertanyaan")]),a("td",[a("div",{domProps:{innerHTML:t._s(e.item.pertanyaan)}})])]),a("tr",[a("td",[t._v("Jawaban rujukan")]),a("td",[a("div",{domProps:{innerHTML:t._s(e.item.rujukan)}})])]),a("tr",[a("td",[t._v("Jawaban peserta")]),a("td",[a("div",[a("pre",[t._v(t._s(e.item.esay))])])])]),a("tr",[a("td",[t._v("Point")]),a("td",[a("div",{staticClass:"input-group",staticStyle:{"max-width":"240px"}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.item.val,expression:"row.item.val",modifiers:{number:!0}}],staticClass:"form-control border-primary",class:{"is-invalid":e.item.val>1||e.item.val<0},attrs:{type:"number",placeholder:"Point",step:"0.1",max:"1",min:"0"},domProps:{value:e.item.val},on:{input:function(a){a.target.composing||t.$set(e.item,"val",t._n(a.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.isLoading},on:{click:function(a){return t.submitNilai(e.item.id)}}},[t._v("Submit")])])])])])])])])]}}])}),"undefined"!=typeof t.esies.data?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("p",[t._v(" "+t._s(t.esies.data.length)+" data dari "+t._s(t.esies.total)+" total jawaban peserta ")])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"float-right"},[a("b-pagination",{attrs:{size:"sm","total-rows":t.esies.total,"per-page":t.esies.per_page},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])]):t._e()],1)]),a("div",{staticClass:"card-footer"})])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-5"},[a("h4",{staticClass:"card-title mb-0",attrs:{id:"traffic"}},[t._v("Koreksi")]),a("div",{staticClass:"small text-muted"},[t._v("Cocokan data akurasi")])])])}],r=(a("c975"),a("d81d"),a("96cf"),a("1da1")),n=a("5530"),o=a("2f62"),l=a("cecb"),c={name:"KoreksiUjian",data:function(){return{fields:[{key:"no",label:"#"},{key:"show_details",label:"Detail"}],val:0}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(o["c"])(["isLoading"])),Object(o["e"])("ujian",{esies:function(t){return t.essies}})),{},{page:{get:function(){return this.$store.state.ujian.koreksi_page},set:function(t){this.$store.commit("ujian/SET_PAGE_KOREKSI",t)}}}),methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])("ujian",["getExistsByBanksoal","submitNilaiEsay"])),{},{submitNilai:function(t){var e=this,a=this.esies.data.map((function(t){return t.id})).indexOf(t);if(-1!=a){var s=this.esies.data[a];if(s){if(s.val>1)return void this.$swal({title:"Error",text:"Point tidak boleh lebih dari 1 (0, 0.1, 0.2, 0.3 .... 1)",icon:"error"});this.submitNilaiEsay({id:s.id,val:s.val}).then((function(t){e.val=0,e.getExistsByBanksoal(e.$route.params.banksoal),e.$bvToast.toast("Nilai berhasil disubmit.",Object(l["c"])())})).catch((function(t){e.$bvToast.toast(t.message,Object(l["b"])())}))}}}}),created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getExistsByBanksoal(t.$route.params.banksoal);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),t.$bvToast.toast(e.t0.message,Object(l["b"])());case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},d=c,u=a("2877"),m=Object(u["a"])(d,s,i,!1,null,null,null);e["default"]=m.exports},c975:function(t,e,a){"use strict";var s=a("23e7"),i=a("4d64").indexOf,r=a("a640"),n=a("ae40"),o=[].indexOf,l=!!o&&1/[1].indexOf(1,-0)<0,c=r("indexOf"),d=n("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:l||!c||!d},{indexOf:function(t){return l?o.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},d81d:function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").map,r=a("1dde"),n=a("ae40"),o=r("map"),l=n("map");s({target:"Array",proto:!0,forced:!o||!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-c730efea.c0b9eadf.js.map