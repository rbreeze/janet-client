(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{183:function(t,e,n){var content=n(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("7a64200a",content,!0,{sourceMap:!1})},190:function(t,e,n){"use strict";var o=n(183);n.n(o).a},191:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"h1[data-v-f2d22876]{font-size:40px;margin-left:0;margin-top:20px}h3[data-v-f2d22876]{font-size:27px;font-weight:400;color:#000}.fa-boxes[data-v-f2d22876]{font-size:18px}.custom-container[data-v-f2d22876]{width:90%;margin:0 auto}.container-responsive[data-v-f2d22876]{border-collapse:collapse}.link.col[data-v-f2d22876]{text-transform:uppercase;font-size:21px;color:#45a6e2}.header.row .col[data-v-f2d22876]{text-align:center}.col[data-v-f2d22876]{white-space:nowrap}label[data-v-f2d22876]{text-align:right}.header.row[data-v-f2d22876]{border-bottom:1px solid grey;max-width:100%;padding-top:15px;font-weight:500;text-transform:uppercase;margin:0 auto}.aliases-container[data-v-f2d22876]{border-top:1px solid #b0b0b0;background:#f1ede2}.collection[data-v-f2d22876]{border-bottom:1px solid #b0b0b0}.collections[data-v-f2d22876]{border-radius:5px;border:1px solid #b0b0b0}",""])},196:function(t,e,n){"use strict";n.r(e);n(51);var o=n(5),r={components:{AliasList:function(){return n.e(0).then(n.bind(null,199))}},asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("http://54.188.72.217/api/collections");case 3:return o=t.sent,console.log(o),t.abrupt("return",{collections:o});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),methods:{deleteCollection:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(i,e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$delete("http://54.188.72.217/api/collection/"+e);case 2:this.collections.splice(i,1);case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),updateCollection:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(i){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$axios.$put("http://54.188.72.217/api/collection",this.collections[i],function(t,data){t?console.log(t):console.log("Successfully updated")});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),addAlias:function(i){this.collections[i].aliases.push({value:""})}}},c=(n(190),n(21)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-responsive px-5"},[n("div",{staticClass:"row"},[n("h3",{staticClass:"col-12 mb-2 mt-4"},[n("fa",{attrs:{icon:"boxes"}}),t._v(" Collections ")],1),t._v(" "),n("div",{staticClass:"container-responsive mt-3 mb-5 col-12 collections px-0"},t._l(t.collections,function(e,i){return n("div",{staticClass:"collection px-3 pt-3"},[n("div",{staticClass:"row col-12 pr-0 d-flex"},[n("div",{staticClass:"link col row mr-auto"},[n("nuxt-link",{staticClass:"align-self-center",attrs:{to:"/collection/"+e.name}},[t._v("\n              "+t._s(e.name)+" "),n("fa",{attrs:{icon:"link"}})],1)],1),t._v(" "),n("div",{staticClass:"col d-flex justify-content-end pr-0 ml-auto align-items-center"},[n("label",{staticClass:"mb-0"},[t._v(" Name "),n("fa",{attrs:{icon:"signature"}})],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"collection.name"}],staticClass:"form-control ml-3",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}}),t._v(" "),n("a",{staticClass:"btn btn-danger ml-3",on:{click:function(n){t.deleteCollection(i,e.name)}}},[t._v(" \n              Delete "),n("fa",{attrs:{icon:"trash-alt"}})],1),t._v(" "),n("a",{staticClass:"save btn btn-primary ml-2",on:{click:function(e){t.updateCollection(i)}}},[t._v(" Save "),n("fa",{attrs:{icon:"save"}})],1)])]),t._v(" "),n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"aliases-container col py-2"},[n("AliasList",{attrs:{aliases:e.aliases}})],1)])])}),0)])])},[],!1,null,"f2d22876",null);e.default=component.exports}}]);