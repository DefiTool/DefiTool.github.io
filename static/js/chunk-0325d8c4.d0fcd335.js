(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0325d8c4"],{"0d32":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.tokenInfo.id?[a("HeaderBox",{attrs:{"token-info":t.tokenInfo}}),a("ul",{staticClass:"otherInfoBox"},[a("li",[a("span",{staticClass:"label"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"coin-wallet2"}}),t._v(" Total Liquidity ")],1),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(111111)))])]),a("li",[a("span",{staticClass:"label"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"chart"}}),t._v(" Volume (24hrs) ")],1),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(1e4)))])]),a("li",[a("span",{staticClass:"label"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"tree"}}),t._v(" Transactions (24hrs) ")],1),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(1e4)))])])]),a("div",{staticClass:"infoBox",staticStyle:{display:"block"}},[a("div",{staticClass:"chart"},[a("Chart",{attrs:{"chart-type":"token","token-info":t.tokenInfo}})],1)]),a("div",{staticClass:"section"},[a("SectionTitle",{attrs:{title:"Top Pairs"}}),a("div",{staticClass:"table"},[a("TopPairs")],1)],1),a("div",{staticClass:"section"},[a("SectionTitle",{attrs:{title:"Transactions"}}),a("div",{staticClass:"table"},[a("Transactions")],1)],1),a("div",{staticClass:"section"},[a("SectionTitle",{attrs:{title:"Token Information"}}),a("TokenInformation",{attrs:{"token-info":t.tokenInfo}})],1)]:[a("Loading")]],2)},n=[],o=a("60b5"),i=a("6abc"),r=(a("6a61"),a("52c1")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{directives:[{name:"el-table-infinite-scroll",rawName:"v-el-table-infinite-scroll",value:t.onPageLoad,expression:"onPageLoad"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:t.pageList,"empty-text":t.$t("common.noData"),height:t.tableHeight}},[a("el-table-column",{attrs:{label:"Name",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row,n=e.$index;return[a("a",{staticClass:"name",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$router.push({name:"pair",params:{address:s.pair,platform:t.platformInfo.key}})}}},[a("span",{staticClass:"index"},[t._v(t._s(n+1))]),a("div",{staticClass:"imgBox"},[a("el-image",{staticClass:"img img1",attrs:{src:t.$utils.getTokenLogo(s.token1)}},[a("div",{staticClass:"img-err",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:t.$utils.tokenLogoErrImg}})])]),a("el-image",{staticClass:"img img2",attrs:{src:t.$utils.getTokenLogo(s.token2)}},[a("div",{staticClass:"img-err",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:t.$utils.tokenLogoErrImg}})])])],1),a("span",{staticClass:"pairs"},[t._v(t._s(t._f("maxStrLen")(s.token1_symbol))+"-"+t._s(t._f("maxStrLen")(s.token2_symbol)))])])]}}])}),a("el-table-column",{attrs:{label:"Liquidity Amount",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t._f("autoFixed")(a.liquidity1))+" "+t._s(t._f("maxStrLen")(a.token1_symbol))+" ")]}}])}),a("el-table-column",{attrs:{label:"Liquidity Amount",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t._f("autoFixed")(a.liquidity2))+" "+t._s(t._f("maxStrLen")(a.token2_symbol))+" ")]}}])}),a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"append"},slot:"append"},[t.loading||0===t.pageList.length?a("Loading"):t._e()],1)],1)},c=[],u=(a("77ad"),a("2eeb"),a("781b")),d={components:{Loading:u["a"]},props:{},data:function(){return{page:0,page_size:20,loading:!0,list:[],tableHeight:300}},computed:Object(i["a"])(Object(i["a"])({},Object(r["b"])(["account","platformInfo","isPc"])),{},{pageList:function(){return this.list.slice(0,this.page_size*this.page)}}),watch:{pageList:function(t){this.loading=!(this.page_size*this.page>t.length)}},created:function(){this.getData()},mounted:function(){},methods:{getData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,n,o,r,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$route.params.address,e.next=3,t.$api.getTokenPairs(a);case 3:s=e.sent,n=s.data,o=n.list,r=n.tokens,l=o.map((function(t){var e=Object(i["a"])(Object(i["a"])({},t),{},{token1_symbol:r[t.token1].symbol,token2_symbol:r[t.token2].symbol});return e})),t.list=l,console.log(l,"res toppairs"),console.log(r,"tokens");case 9:case"end":return e.stop()}}),e)})))()},onPageLoad:function(){this.loading&&(this.page++,console.log(this.page,"this.page"))}}},p=d,f=(a("4bbd"),a("5d22")),m=Object(f["a"])(p,l,c,!1,null,"36872c00",null),_=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{directives:[{name:"el-table-infinite-scroll",rawName:"v-el-table-infinite-scroll",value:t.onPageLoad,expression:"onPageLoad"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:t.list,"empty-text":t.$t("common.noData"),height:t.tableHeight}},[a("el-table-column",{attrs:{width:"220"},scopedSlots:t._u([{key:"header",fn:function(){return[a("ul",{staticClass:"tableSelectTypeList"},t._l(t.tableSelectTypeList,(function(e){return a("li",{key:e.value,class:{on:e.value===t.tableSelectType},on:{click:function(a){return t.onChangeTransaction(e.value)}}},[t._v(t._s(e.label))])})),0)]},proxy:!0},{key:"default",fn:function(e){var s=e.row;return[a("a",{staticClass:"name",attrs:{href:t.$utils.getTxLink(s.transaction_hash),target:"_blank"}},[1===s.type||2===s.type?[a("span",{staticClass:"swapText"},[t._v(t._s("Swap "+t.$utils.maxStrLen(s.token1_symbol)+" for "+t.$utils.maxStrLen(s.token2_symbol)))])]:3===s.type?[t._v(t._s("Add "+t.$utils.maxStrLen(s.token1_symbol)+" and "+t.$utils.maxStrLen(s.token2_symbol)))]:4===s.type?[t._v(t._s("Remove "+t.$utils.maxStrLen(s.token1_symbol)+" and "+t.$utils.maxStrLen(s.token2_symbol)))]:t._e()],2)]}}])}),a("el-table-column",{attrs:{label:"Type",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[1===s.type?a("el-tag",{attrs:{type:"success",effect:"dark"}},[t._v("Buy")]):2===s.type?a("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Sell")]):3===s.type?a("el-tag",{attrs:{type:"success",effect:"dark"}},[t._v("Add")]):4===s.type?a("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Remove")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"Total Value",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" $"+t._s(t._f("autoFixed")(a.price*a.amount1))+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"Token Amount"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[t._v(" "+t._s(t._f("autoFixed")(s.amount1))+" "),a("a",{attrs:{href:"/defi/token?address=",target:"_blank"}},[t._v(t._s(t._f("maxStrLen")(s.token1_symbol)))])]}}])}),a("el-table-column",{attrs:{label:"Token Amount",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[t._v(" "+t._s(t._f("autoFixed")(s.amount2))+" "),a("a",{attrs:{href:"/defi/token?address=",target:"_blank"}},[t._v(t._s(t._f("maxStrLen")(s.token2_symbol)))])]}}])}),a("el-table-column",{attrs:{align:"center",label:"Account"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("a",{attrs:{href:t.$utils.getAddressLink(s.from),target:"_blank"}},[t._v(" "+t._s(t._f("miniAddress")(s.from)))])]}}])}),a("el-table-column",{attrs:{align:"center",label:"Time"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t._f("formatTime")(a.timestamp))+" ")]}}])}),a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"append"},slot:"append"},[t.loading?a("Loading"):t._e()],1)],1)},b=[],v={components:{Loading:u["a"]},props:{},data:function(){return{address:"",page:1,page_size:10,loading:!0,tableSelectType:0,tableSelectTypeList:[{value:0,label:"All"},{value:1,label:"Swap"},{value:3,label:"Add"},{value:4,label:"Remove"}],list:[],tableHeight:600}},computed:Object(i["a"])({},Object(r["b"])(["isPc"])),watch:{},created:function(){var t=this.$route.params.address;this.address=t,this.getData()},mounted:function(){},methods:{onChangeTransaction:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.tableSelectType=t,e.$forceUpdate(),console.log("type",t),e.getData();case 4:case"end":return a.stop()}}),a)})))()},getData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,n,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.list=[],e.next=4,t.$api.getTokenSwapList({address:t.address,type:t.tableSelectType,page_size:100});case 4:a=e.sent,s=a.data,n=s.list,o=s.tokens,r=s.pairs,t.list=n.map((function(t){var e=r[t.pair_id].token1,a=r[t.pair_id].token2,s=Object(i["a"])(Object(i["a"])({},t),{},{token1_symbol:o[e].symbol,token2_symbol:o[a].symbol});return s})),t.loading=!1,console.log(t.list,"this.list");case 9:case"end":return e.stop()}}),e)})))()},onPageLoad:function(){console.log("onPageLoad")}}},k=v,y=(a("86ee"),Object(f["a"])(k,g,b,!1,null,"208ad9a2",null)),h=y.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headerBox"},[a("p",{staticClass:"tokens"},[a("span",[t._v("Tokens")]),a("span",[t._v(" → ")]),a("span",{staticClass:"symbol"},[t._v(t._s(t.tokenInfo.symbol))]),a("span",{staticClass:"address"},[t._v("("+t._s(t._f("autoAddress")(t.tokenInfo.address))+")")])]),a("h1",[a("el-image",{staticClass:"img",attrs:{src:t.$utils.getTokenLogo(t.tokenInfo.address)}},[a("div",{staticClass:"img-err",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:t.$utils.tokenLogoErrImg}})])]),a("span",[t._v(t._s(t.tokenInfo.name)+" ("+t._s(t.tokenInfo.symbol)+") ")]),a("span",{staticClass:"price"},[t._v("$"+t._s(111.11))]),a("span",{staticClass:"rate"},[t._v("-0.53%")])],1),a("div",{staticClass:"btnBox"},[a("a",{attrs:{href:t.$utils.getAddLiquidityLink(t.tokenInfo.address),target:"_blank"}},[a("el-button",{staticClass:"btn btn1",attrs:{type:"primary",icon:"el-icon-plus",plain:"",size:"mini"}},[t._v("Add Liquidity")])],1),a("a",{attrs:{href:t.$utils.getTradeLink(t.tokenInfo.address),target:"_blank"}},[a("el-button",{staticClass:"btn btn2",attrs:{type:"primary",size:"mini"}},[t._v("Trade")])],1)])])},x=[],L={components:{},props:{tokenInfo:{type:Object,require:!0}},data:function(){return{}},mounted:function(){},methods:{}},w=L,S=(a("6a69"),Object(f["a"])(w,C,x,!1,null,"7ad47b6e",null)),T=S.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"information",attrs:{gutter:10,justify:"center"}},[a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v("Tokens")]),a("span",{staticClass:"value"},[t._v(t._s(t.tokenInfo.symbol)+" ")])])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v("Name")]),a("span",{staticClass:"value"},[t._v(t._s(t.tokenInfo.name))])])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v("Address")]),a("span",{staticClass:"value"},[a("a",{attrs:{href:t.$utils.getAddressLink(t.tokenInfo.address),target:"_blank"}},[t._v(" "+t._s(t._f("miniAddress")(t.tokenInfo.address)))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.tokenInfo.address,expression:"tokenInfo.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticStyle:{padding:"0"},attrs:{type:"text"}},[a("svg-icon",{staticClass:"copy",attrs:{"icon-class":"copy"}})],1)],1)])]),a("el-col",{staticClass:"btnBox",attrs:{xs:12,span:12,align:"right"}},[a("a",{attrs:{href:t.$utils.getAddressLink(t.tokenInfo.address),target:"_blank"}},[a("el-button",{attrs:{type:"primary",size:"large"}},[t._v("View on BlockScan")])],1)])],1)},I=[],j={components:{},props:{tokenInfo:{type:Object,require:!0}},inject:["onCopySuccess"],data:function(){return{}},mounted:function(){},methods:{}},O=j,A=(a("6432"),Object(f["a"])(O,$,I,!1,null,"ef732906",null)),P=A.exports,R=a("29e9"),B=a("30c0"),q="token",z={name:q,components:{Chart:B["a"],Loading:u["a"],SectionTitle:R["a"],HeaderBox:T,TopPairs:_,Transactions:h,TokenInformation:P},inject:["onCopySuccess"],data:function(){return{ws:null,address:"",tokenInfo:{}}},computed:Object(i["a"])({},Object(r["b"])(["isPc"])),watch:{},created:function(){var t=this.$route.params.address;this.address=t},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.getTokenInfo(t.address);case 2:a=e.sent,s=a.data,t.tokenInfo=s;case 5:case"end":return e.stop()}}),e)})))()},methods:{}},E=z,F=(a("c8ae"),Object(f["a"])(E,s,n,!1,null,"771fcca2",null));e["default"]=F.exports},"1e40":function(t,e,a){},"2b56":function(t,e,a){},"4bbd":function(t,e,a){"use strict";a("2b56")},6325:function(t,e,a){},6432:function(t,e,a){"use strict";a("1e40")},"6a69":function(t,e,a){"use strict";a("ff93")},"86ee":function(t,e,a){"use strict";a("a031")},a031:function(t,e,a){},c8ae:function(t,e,a){"use strict";a("6325")},ff93:function(t,e,a){}}]);