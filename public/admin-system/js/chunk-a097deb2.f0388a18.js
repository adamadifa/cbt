(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a097deb2"],{"0227":function(_,t,e){"use strict";e.r(t);var a=function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"card",staticStyle:{border:"1.9px solid #2517a3"}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex justify-content-between"},[e("router-link",{staticClass:"btn btn-light btn-sm mr-1",attrs:{to:{name:"ujian.event.data"}}},[_._v("Kembali")]),e("button",{staticClass:"btn float-right btn-primary btn-sm mx-1",on:{click:_.print}},[e("i",{staticClass:"flaticon2-print"}),_._v(" Cetak Berita Acara")])],1)])])])]),e("div",{staticClass:"table-responsive-md"},[e("div",{staticClass:"paper",attrs:{id:"printBeritaAcara"}},[e("div",{staticClass:"page"},[e("div",{staticClass:"d-flex mb-3"},[e("div",["undefined"!=typeof _.sekolah.value?e("img",{staticStyle:{"max-height":"46px"},attrs:{src:""!=_.sekolah.value.logo?"/storage/public/"+_.sekolah.value.logo:"/img/logo.jpg",alt:"Logo"}}):_._e()]),e("div",{staticClass:"flex-fill text-center"},[e("h4",{staticClass:"text-uppercase"},[_._v("BERITA ACARA PELAKSANAAN "),e("br"),_._v(" "+_._s(_.event.name)+" "),e("br"),_._v("TAHUN PELAJARAN "+_._s(_.semester))])]),_._m(0)]),"undefined"!=typeof _.sekolah.value?e("section",{staticStyle:{"line-height":"2"}},[e("p",{staticClass:"small",staticStyle:{"line-height":"2","font-size":"20px"}},[_._v("Pada hari ini __________ tanggal ___________ bulan ____________ tahun "+_._s((new Date).getFullYear())+", bertempat di "+_._s(_.sekolah.value.nama_sekolah))]),e("table",{staticClass:"table table-borderless table-sm small",staticStyle:{"line-height":"2","font-size":"20px"}},[e("tr",[e("td",{attrs:{width:"20px",rowspan:"2"}},[_._v(" 1. ")]),e("td",[e("p",{staticClass:"small",staticStyle:{"line-height":"2","font-size":"20px"}},[_._v("Telah diselanggarakan "+_._s(_.event.name)+" untuk Mata Pelajaran _____________________ dari pukul ______________ sampai dengan pukul _________________, sesi _________________.")])])]),_._m(1)]),_._m(2),e("p",{staticClass:"small",staticStyle:{"line-height":"2","font-size":"20px"}},[_._v("Yang membuat berita acara ")]),_._m(3)]):_._e(),e("footer",{staticStyle:{"line-height":"2",position:"absolute",bottom:"0",width:"100%",left:"0"}},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"border border-dark mr-1",staticStyle:{width:"20px"}}),"undefined"!=typeof _.sekolah.value?e("div",{staticClass:"border border-dark flex-fill text-center text-uppercase"},[_._v(" "+_._s(_.sekolah.value.nama_sekolah)+" ")]):_._e(),e("div",{staticClass:"border border-dark ml-1",staticStyle:{width:"20px"}})])])])])])])])},s=[function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("div",[e("div",{staticStyle:{width:"46px"}})])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("tr",[e("td",[e("table",{staticClass:"table table-borderless table-sm small",staticStyle:{"line-height":"2","font-size":"20px"}},[e("tr",[e("td",{attrs:{width:"280px"}},[_._v("Ruang")]),e("td",[_._v(": __________________________________________")])]),e("tr",[e("td",[_._v("Jumlah peserta seharusnya")]),e("td",[_._v(": __________________________________________")])]),e("tr",[e("td",[_._v("Jumlah Hadir(Ikut Ujian)")]),e("td",[_._v(": __________________________________________")])]),e("tr",[e("td",[_._v("Jumlah Tidak Hadir")]),e("td",[_._v(": __________________________________________")])]),e("tr",[e("td",[_._v("No.Peserta yang Tidak Hadir")]),e("td",[_._v(": __________________________________________")])])])])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("table",{staticClass:"table table-borderless table-sm small",staticStyle:{"line-height":"2","font-size":"20px"}},[e("tr",[e("td",{attrs:{width:"20px",rowspan:"2"}},[_._v(" 2. ")]),e("td",[e("p",[_._v("Catatan selama pelaksanaan ujian: ")])])]),e("tr",[e("td",[e("p",[_._v("_________________________________________________________________________________________________________")]),e("p",[_._v("_________________________________________________________________________________________________________")]),e("p",[_._v("_________________________________________________________________________________________________________")]),e("p",[_._v("_________________________________________________________________________________________________________")]),e("p",[_._v("_________________________________________________________________________________________________________")])])])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("table",{staticClass:"table table-borderless table-sm small",staticStyle:{"line-height":"2","font-size":"20px"}},[e("tr",[e("td",{attrs:{width:"20px",rowspan:"2"}},[_._v(" 1. ")]),e("td",{attrs:{width:"100px"}},[_._v(" Pengawas I ")]),e("td",[_._v(" _____________________________ ")]),e("td",{attrs:{rowspan:"2"}},[_._v(" 1. _____________________________ ")])]),e("tr",[e("td",[_._v(" NIP ")]),e("td",[_._v(" _____________________________ ")])]),e("tr",[e("td",{attrs:{width:"20px",rowspan:"2"}},[_._v(" 2. ")]),e("td",[_._v(" Pengawas II ")]),e("td",[_._v(" _____________________________ ")]),e("td",{attrs:{rowspan:"2"}},[_._v(" 2. _____________________________ ")])]),e("tr",[e("td",[_._v(" NIP ")]),e("td",[_._v(" _____________________________ ")])])])}],i=(e("99af"),e("b0c0"),e("96cf"),e("1da1")),r=e("5530"),l=e("2f62"),n={data:function(){return{semester:"",event:""}},computed:Object(r["a"])(Object(r["a"])({},Object(l["c"])(["baseURL"])),Object(l["e"])("setting",{sekolah:function(_){return _.set_sekolah}})),methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])("event",["getEventById"])),{},{getSemester:function(){var _=new Date,t=_.getMonth(),e=_.getFullYear();this.semester=t<6?"".concat(e-1,"/").concat(e):"".concat(e,"/").concat(e+1)},print:function(){this.$htmlToPaper("printBeritaAcara")},getData:function(_){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.$store.commit("LOADING_PAGE",!0),e.next=4,t.getEventById(_);case 4:a=e.sent,t.event={name:a.name},t.$store.commit("LOADING_PAGE",!1),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$store.commit("LOADING_PAGE",!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}),created:function(){this.getSemester(),this.getData(this.$route.params.id)}},c=n,d=(e("502d"),e("2877")),o=Object(d["a"])(c,a,s,!1,null,null,null);t["default"]=o.exports},"502d":function(_,t,e){"use strict";var a=e("c467"),s=e.n(a);s.a},c467:function(_,t,e){}}]);
//# sourceMappingURL=chunk-a097deb2.f0388a18.js.map