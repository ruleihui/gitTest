(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8857cb2"],{"18d6":function(t,e,a){"use strict";a("4330")},4330:function(t,e,a){},b30d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"SalSobCfg"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",border:""}},[a("el-table-column",{attrs:{label:"姓名",width:"100",prop:"name"}}),a("el-table-column",{attrs:{label:"工号",width:"100",prop:"workId"}}),a("el-table-column",{attrs:{label:"电子邮件",width:"200",prop:"email"}}),a("el-table-column",{attrs:{label:"电话号码",width:"100",prop:"phone"}}),a("el-table-column",{attrs:{label:"所属部门",width:"100",prop:"department.name"}}),a("el-table-column",{attrs:{label:"工资账套",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.salary?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"right"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"SalSobCfgTooltipBody"},[a("div",[a("el-tag",{attrs:{size:"mini"}},[t._v("基本工资")]),t._v(" ¥ "+t._s(e.row.salary.basicSalary)+" ")],1),a("div",[a("el-tag",{attrs:{size:"mini"}},[t._v("奖金")]),t._v(" ¥ "+t._s(e.row.salary.bonus)+" ")],1),a("div",[a("el-tag",{attrs:{size:"mini"}},[t._v("午餐补助")]),t._v(" ¥ "+t._s(e.row.salary.lunchSalary)+" ")],1),a("div",[a("el-tag",{attrs:{size:"mini"}},[t._v("交通补助")]),t._v(" ¥ "+t._s(e.row.salary.trafficSalary)+" ")],1),a("div",[a("el-tag",{attrs:{size:"mini"}},[t._v("养老金比率")]),t._v(" "+t._s(e.row.salary.pensionPer)+" ")],1),a("div",[a("el-tag",{attrs:{size:"mini"}},[t._v("养老金基数")]),t._v(" ¥ "+t._s(e.row.salary.pensionBase)+" ")],1),a("div",[a("el-tag",{attrs:{size:"mini"}},[t._v("公积金比率")]),t._v(" "+t._s(e.row.salary.accumulationFundPer)+" ")],1),a("div",[a("el-tag",{attrs:{size:"mini"}},[t._v("公积金基数")]),t._v(" ¥ "+t._s(e.row.salary.accumulationFundBase)+" ")],1),a("div",[a("el-tag",{attrs:{size:"mini"}},[t._v("医疗保险比率")]),t._v(" "+t._s(e.row.salary.medicalPer)+" ")],1),a("div",[a("el-tag",{attrs:{size:"mini"}},[t._v("医疗保险基数")]),t._v(" ¥ "+t._s(e.row.salary.medicalBase)+" ")],1)])]),a("el-tag",[t._v(t._s(e.row.salary.name))])],1):a("el-tag",[t._v("暂无")])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"left",width:"200",trigger:"click"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(a){return t.setValue(a,e.row)}},model:{value:e.row.optionsId,callback:function(a){t.$set(e.row,"optionsId",a)},expression:"scope.row.optionsId"}},t._l(t.options,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[t._v("修改账套")])],1)]}}])})],1),a("el-pagination",{attrs:{background:"","page-size":t.pageSize,layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:t.total},on:{"current-change":t.currentPage,"size-change":t.sizeChange,"prev-click":t.prevClick,"next-click":t.nextClick}})],1)},n=[],s=(a("96cf"),a("1da1")),r={name:"SalSobCfg",data:function(){return{tableData:[],total:0,pageSize:10,currentIndex:1,prevAndNext:!1,loading:!1,options:[]}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.initSalary();case 2:return e.next=4,t.init();case 4:case"end":return e.stop()}}),e)})))()},methods:{init:function(){var t=this;return this.$axios.execute("get","/salary/sobCfg").then((function(e){e&&(t.tableData=e.data,t.total=e.total)}))},initSalary:function(){var t=this;return this.$axios.execute("get","/salary/sob").then((function(e){e&&(t.options=e)}))},setValue:function(t,e){var a=this;e.salary?this.$axios.execute("put","/salary/sobCfg/"+e.id+"/"+e.optionsId).then((function(i){a.$set(e,"optionsId",t),a.currentPage(a.currentIndex)})):this.$axios.execute("post","/salary/sobCfg/"+e.id+"/"+e.optionsId).then((function(i){a.$set(e,"optionsId",t),a.currentPage(a.currentIndex)}))},currentPage:function(t){var e=this;if(this.currentIndex=t,!this.prevAndNext){this.loading=!0;var a="/salary/sobCfg?page="+t+"&size="+this.pageSize+"&"+this.uri;this.$axios.execute("get",a).then((function(t){t&&(e.tableData=t.data,e.total=t.total,e.loading=!1)}))}},sizeChange:function(t){var e=this;if(!this.prevAndNext){this.loading=!0;var a="/salary/sobCfg?page=&size="+t+"&"+this.uri;this.$axios.execute("get",a).then((function(t){t&&(e.tableData=t.data,e.total=t.total,e.loading=!1)}))}},prevClick:function(t){var e=this;this.currentIndex=t,this.prevAndNext=!0,this.loading=!0;var a="/salary/sobCfg?page="+t+"&size="+this.pageSize+"&"+this.uri;this.$axios.execute("get",a).then((function(t){t&&(e.tableData=t.data,e.total=t.total,e.prevAndNext=!1,e.loading=!1)}))},nextClick:function(t){var e=this;this.currentIndex=t,this.prevAndNext=!0,this.loading=!0;var a="/salary/sobCfg?page="+t+"&size="+this.pageSize+"&"+this.uri;this.$axios.execute("get",a).then((function(t){t&&(e.tableData=t.data,e.total=t.total,e.prevAndNext=!1,e.loading=!1)}))}}},l=r,o=(a("18d6"),a("2877")),c=Object(o["a"])(l,i,n,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-f8857cb2.bad13c3d.js.map