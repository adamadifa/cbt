(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ad0d8a2"],{"3bed":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"d-flex justify-content-between"},[a("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"matpel.add"}}},[t._v("Tambah matpel")]),a("button",{staticClass:"btn-sm btn btn-white",attrs:{title:"Informasi"},on:{click:function(e){return t.featureInfo("page_matpel_tabel")}}},[a("i",{staticClass:"flaticon-info"})])],1)]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"d-md-block col-sm-7"},[a("router-link",{staticClass:"btn float-right btn-success btn-sm",attrs:{to:{name:"matpel.upload"}}},[a("i",{staticClass:"flaticon-upload-1"}),t._v(" Import matpel ")])],1)]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5"},[a("b-form-group",{attrs:{label:"Filter","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Cari dengan nama matpel"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.search},on:{click:function(e){t.search=""}}},[t._v("Clear")])],1)],1)],1),a("b-form-group",{attrs:{label:"Per page","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm","label-for":"perPageSelect"}},[a("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1)]),t.matpels&&"undefined"!=typeof t.matpels.data?a("div",{staticClass:"table-responsive-md"},[a("b-table",{ref:"selectableTable",attrs:{id:"table-transition-example","primary-key":"kode_mapel","tbody-transition-props":t.transProps,striped:"",hover:"",bordered:"",small:"","show-empty":"",fields:t.fields,items:t.matpels.data,selectable:"","selected-variant":"danger"},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([{key:"cell(show_details)",fn:function(t){return[a("b-button",{attrs:{size:"sm",variant:t.detailsShowing?"danger":"info"},on:{click:t.toggleDetails}},[a("i",{class:t.detailsShowing?"flaticon-circle":"flaticon2-add"})])]}},{key:"row-details",fn:function(e){return[a("b-card",[a("div",{staticClass:"table-responsive-md"},[a("table",{staticClass:"table table-bordered"},[a("tr",[a("td",{attrs:{width:"230"}},[t._v("Setting matpel")]),a("td",[a("ul",[a("li",{directives:[{name:"show",rawName:"v-show",value:0==e.item.jurusans&&0==e.item.agama,expression:"row.item.jurusans == 0 && row.item.agama == 0"}]},[t._v("umum tanpa kecuali")]),a("li",{directives:[{name:"show",rawName:"v-show",value:0!=e.item.jurusans,expression:"row.item.jurusans != 0"}]},[t._v("khusus jurusan")]),0!=e.item.jurusans?a("ul",t._l(e.item.jurusans,(function(e,s){return a("li",{key:s,domProps:{textContent:t._s(e.nama)}})})),0):t._e(),a("li",{directives:[{name:"show",rawName:"v-show",value:0!=e.item.agama,expression:"row.item.agama != 0"}]},[t._v("agama tertentu")])])])]),a("tr",[a("td",[t._v("Tim pengoreksi")]),a("td",[0!=e.item.correctors_name?a("ul",t._l(e.item.correctors_name,(function(e,s){return a("li",{key:s,domProps:{textContent:t._s(e.name)}})})),0):t._e()])])])])])]}},{key:"cell(nama)",fn:function(e){return[t._v(" "+t._s(e.item.nama)+" ")]}},{key:"cell(actions)",fn:function(e){return[a("router-link",{staticClass:"btn btn-warning btn-sm mr-1",attrs:{to:{name:"matpel.edit",params:{id:e.item.id}}}},[a("i",{staticClass:"flaticon-edit"}),t._v(" Edit ")]),a("button",{staticClass:"btn btn-danger btn-sm",attrs:{disabled:t.isLoading},on:{click:function(a){return t.deleteMatpel(e.item.id)}}},[a("i",{staticClass:"flaticon2-trash"}),t._v(" Hapus ")])]}}],null,!1,1502642070)}),a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[a("b-button",{attrs:{variant:"outline-dark",size:"sm"},on:{click:t.selectAllRows}},[a("i",{staticClass:"flaticon-list-3"}),t._v(" Select all ")]),a("b-button",{attrs:{variant:"outline-dark",size:"sm"},on:{click:t.clearSelected}},[a("i",{staticClass:"flaticon2-reload"}),t._v(" Clear selected ")]),a("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:t.bulkRemove}},[a("i",{staticClass:"flaticon2-trash"}),t._v(" Bulk remove ")])],1),a("p",[a("i",{staticClass:"fa fa-bars"}),t._v(" "),a("b",[t._v(t._s(t.matpels.data.length))]),t._v(" matpel dari "),a("b",[t._v(t._s(t.matpels.total))]),t._v(" total data matpel")])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"float-right"},[a("b-pagination",{attrs:{size:"sm","total-rows":t.matpels.total,"per-page":t.matpels.per_page,disabled:t.isLoading},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])])],1):[a("div",{staticClass:"text-center my-2"},[t._v(" Loading... ")])]],2),t._m(1)])]),a("b-modal",{attrs:{id:"modal-feature-info",size:"lg"},scopedSlots:t._u([{key:"modal-header",fn:function(e){e.close;return[a("h5",[t._v("Informasi Fitur")])]}},{key:"modal-footer",fn:function(e){var s=e.cancel;return[a("b-button",{attrs:{size:"sm",variant:"secondary",disabled:t.isLoading},on:{click:function(t){return s()}}},[t._v(" Cancel ")])]}}])},[t._is_feature_info?[a("div",{domProps:{innerHTML:t._s(t.feature_info.content)}})]:t._e()],2)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-5"},[a("h4",{staticClass:"card-title mb-0",attrs:{id:"traffic"}},[t._v("Manage Matpel")]),a("div",{staticClass:"small text-muted"},[t._v("Buat edit dan hapus matpel")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-footer"},[a("strong",[t._v("Sematic kode matpel : ")]),t._v(" "),a("u",[t._v("kode-nomor-kategori")]),t._v(" "),a("strong",[t._v("Contoh :")]),t._v(" BC-012-U (U: Umum, A: Agama, K: khusus) ")])}],l=(a("d81d"),a("ac1f"),a("841c"),a("5530")),n=a("2f62"),r=a("cecb"),o=a("2ef0"),c=a.n(o),u={name:"DataMatpel",created:function(){this.getMatpels({perPage:this.perPage})},data:function(){return{transProps:{name:"flip-list"},fields:[{key:"show_details",label:"Detail"},{key:"kode_mapel",label:"Kode matpel",sortable:!0},{key:"nama",label:"Nama mata pelajaran",sortable:!0},{key:"actions",label:"Aksi"}],perPage:20,pageOptions:[20,50,100],search:"",data:{nama:"",kode_mapel:""},isBusy:!0,selected:[]}},computed:Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(n["c"])(["isLoading"])),Object(n["e"])(["errors"])),Object(n["e"])("feature",["feature_info"])),Object(n["e"])("matpel",{matpels:function(t){return t.matpels},from:function(t){return t.from}})),{},{page:{get:function(){return this.$store.state.matpel.page},set:function(t){this.$store.commit("matpel/SET_PAGE",t)}},_is_feature_info:function(){return"undefined"!=typeof this.feature_info}}),methods:Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(n["b"])("matpel",["getMatpels","removeMatpel","removeMatpelMultiple"])),Object(n["b"])("feature",["getFeatureInfo"])),{},{onRowSelected:function(t){this.selected=t},selectAllRows:function(){this.$refs.selectableTable.selectAllRows()},clearSelected:function(){this.$refs.selectableTable.clearSelected()},bulkRemove:function(){var t=this;""!=this.selected&&this.$swal({title:"Informasi",text:"Matpel yang dipilih akan dihapus beserta data yang terkait",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#c7c7c7",confirmButtonText:"Iya, Lanjutkan!"}).then((function(e){if(e.value){var a=t.selected.map((function(t){return t.id}));t.removeMatpelMultiple({matpel_id:a}).then((function(){t.getMatpels({search:t.search,perPage:t.perPage}),t.$bvToast.toast("Data matpel berhasil dihapus.",Object(r["c"])())})).catch((function(e){t.$bvToast.toast(e.message,Object(r["b"])())}))}}))},deleteMatpel:function(t){var e=this;this.$swal({title:"Informasi",text:"Matpel yang dipilih akan dihapus beserta data yang terkait",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#c7c7c7",confirmButtonText:"Iya, Lanjutkan!"}).then((function(a){a.value&&e.removeMatpel(t).then((function(){e.getMatpels({search:e.search,perPage:e.perPage}),e.$bvToast.toast("Data matpel berhasil dihapus.",Object(r["c"])())})).catch((function(t){e.$bvToast.toast(t.message,Object(r["b"])())}))}))},featureInfo:function(t){var e=this;this.getFeatureInfo(t).then((function(){e.$bvModal.show("modal-feature-info")}))}}),watch:{page:function(){this.getMatpels({search:this.search,perPage:this.perPage})},search:c.a.debounce((function(t){this.getMatpels({search:this.search,perPage:this.perPage})}),500),perPage:function(){this.getMatpels({search:this.search,perPage:this.perPage})}}},d=u,m=a("2877"),p=Object(m["a"])(d,s,i,!1,null,null,null);e["default"]=p.exports},d81d:function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").map,l=a("1dde"),n=a("ae40"),r=l("map"),o=n("map");s({target:"Array",proto:!0,forced:!r||!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-7ad0d8a2.8a61dff3.js.map