(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26c885db"],{"032a":function(t,e,a){"use strict";a("7f3b")},"11ba":function(t,e,a){},"23ef":function(t,e,a){"use strict";a("4ee53")},"27d3":function(t,e,a){"use strict";a("11ba")},"2a50":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.pairInfo.id?[a("HeaderBox",{attrs:{"pair-info":t.pairInfo}}),a("ul",{staticClass:"otherInfoBox"},[a("li",[t._m(0),a("span",{staticClass:"value"},[t._v(t._s(t._f("formatTime")(t.pairInfo.timestamp)))])]),a("li",[t._m(1),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(1e4)))])]),a("li",[t._m(2),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(1e4)))])])]),a("div",{staticClass:"infoBox"},[a("div",{staticClass:"itemBox"},[a("div",{staticClass:"item item1"},[a("span",{staticClass:"label"},[t._v("Total Liquidity")]),a("span",{staticClass:"value"},[t._v("$"+t._s(t._f("toThousandFilter")(t._f("autoFixed")(111111))))])]),a("div",{staticClass:"item item2"},[a("span",{staticClass:"label"},[t._v("Volume (24hrs)")]),a("span",{staticClass:"value"},[t._v("$"+t._s(t._f("toThousandFilter")(t._f("autoFixed")(t.pairInfo.volume_24hour))))])]),a("div",{staticClass:"item item3"},[a("span",{staticClass:"label"},[t._v("Fees (24hrs)")]),a("span",{staticClass:"value"},[t._v("$"+t._s(t._f("toThousandFilter")(t._f("autoFixed")(t.pairInfo.fees_24hour))))])]),a("div",{staticClass:"item item4"},[a("span",{staticClass:"label"},[t._v("Pooled Tokens")]),a("div",{staticClass:"tokenInfo",on:{click:function(e){return t.$router.push({name:"token",params:{address:t.pairInfo.token1,platform:t.platformInfo.key}})}}},[a("el-image",{staticClass:"img",attrs:{src:t.$utils.getTokenLogo(t.pairInfo.token1)}},[a("div",{staticClass:"img-err",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:t.$utils.tokenLogoErrImg}})])]),a("span",{staticClass:"val"},[t._v(" $"+t._s(t._f("toThousandFilter")(t._f("autoFixed")(123123)))+" "+t._s(t.pairInfo.token_info1.symbol)+" ")])],1),a("div",{staticClass:"tokenInfo",on:{click:function(e){return t.$router.push({name:"token",params:{address:t.pairInfo.token2,platform:t.platformInfo.key}})}}},[a("el-image",{staticClass:"img",attrs:{src:t.$utils.getTokenLogo(t.pairInfo.token2)}},[a("div",{staticClass:"img-err",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:t.$utils.tokenLogoErrImg}})])]),a("span",{staticClass:"val"},[t._v(" $"+t._s(t._f("toThousandFilter")(t._f("autoFixed")(123123)))+" "+t._s(t.pairInfo.token_info2.symbol)+" ")])],1)])]),a("div",{staticClass:"chart"},[a("el-radio-group",{staticClass:"klineTimeType",model:{value:t.klineTimeType,callback:function(e){t.klineTimeType=e},expression:"klineTimeType"}},t._l(t.timeRangeList,(function(e,s){return a("el-radio-button",{key:s,attrs:{label:s}},[t._v(t._s(e.label))])})),1),a("Chart",{ref:"Chart",staticClass:"chart"})],1)]),a("div",{staticClass:"section"},[t._m(3),a("div",{staticClass:"table"},[a("Transactions")],1)]),a("div",{staticClass:"section"},[t._m(4),a("PairInformation",{attrs:{"pair-info":t.pairInfo}})],1),a("div",{staticClass:"section"},[t._m(5),a("OtherInformation",{attrs:{"pair-info":t.pairInfo}})],1)]:[a("Loading")]],2)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"label"},[a("i",{staticClass:"el-icon-time icon"}),t._v(" 创建时间 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"label"},[a("i",{staticClass:"el-icon-s-promotion icon"}),t._v(" 共计Tx ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"label"},[a("i",{staticClass:"el-icon-user icon"}),t._v(" 持有人 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("span",[t._v("Transactions")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("span",[t._v("Pair Information")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("span",[t._v("Other Information")])])}],i=a("60b5"),o=a("6abc"),r=(a("2eeb"),a("6a61"),a("52c1")),l=a("b40e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{directives:[{name:"el-table-infinite-scroll",rawName:"v-el-table-infinite-scroll",value:t.onPageLoad,expression:"onPageLoad"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:t.list,"empty-text":t.$t("common.noData"),height:t.tableHeight}},[a("el-table-column",{attrs:{width:"220"},scopedSlots:t._u([{key:"header",fn:function(){return[a("ul",{staticClass:"tableSelectTypeList"},t._l(t.tableSelectTypeList,(function(e){return a("li",{key:e.value,class:{on:e.value===t.tableSelectType},on:{click:function(a){return t.onChangeTransaction(e.value)}}},[t._v(t._s(e.label))])})),0)]},proxy:!0},{key:"default",fn:function(e){var s=e.row;return[a("a",{staticClass:"name",attrs:{href:t.$utils.getTxLink(s.transaction_hash),target:"_blank"}},[1===s.type||2===s.type?[a("span",{staticClass:"swapText"},[t._v(t._s("Swap "+t.$utils.maxStrLen(s.token1_symbol)+" for "+t.$utils.maxStrLen(s.token2_symbol)))])]:3===s.type?[t._v(t._s("Add "+t.$utils.maxStrLen(s.token1_symbol)+" and "+t.$utils.maxStrLen(s.token2_symbol)))]:4===s.type?[t._v(t._s("Remove "+t.$utils.maxStrLen(s.token1_symbol)+" and "+t.$utils.maxStrLen(s.token2_symbol)))]:t._e()],2)]}}])}),a("el-table-column",{attrs:{label:"Type",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[1===s.type?a("el-tag",{attrs:{type:"success",effect:"dark"}},[t._v("Buy")]):2===s.type?a("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Sell")]):3===s.type?a("el-tag",{attrs:{type:"success",effect:"dark"}},[t._v("Add")]):4===s.type?a("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Remove")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"Total Value",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" $"+t._s(t._f("autoFixed")(a.price*a.amount1))+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"Token Amount"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("i",{staticClass:"link",on:{click:function(e){return t.$router.push({name:"token",params:{address:s.token1,platform:t.platformInfo.key}})}}},[t._v(" "+t._s(t._f("autoFixed")(s.amount1))+" "+t._s(t._f("maxStrLen")(s.token1_symbol))+" ")])]}}])}),a("el-table-column",{attrs:{label:"Token Amount",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("i",{staticClass:"link",on:{click:function(e){return t.$router.push({name:"token",params:{address:s.token2,platform:t.platformInfo.key}})}}},[t._v(" "+t._s(t._f("autoFixed")(s.amount2))+" "+t._s(t._f("maxStrLen")(s.token2_symbol))+" ")])]}}])}),a("el-table-column",{attrs:{align:"center",label:"Account"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("a",{staticClass:"link",attrs:{href:t.$utils.getAddressLink(s.from),target:"_blank"}},[t._v(" "+t._s(t._f("miniAddress")(s.from)))])]}}])}),a("el-table-column",{attrs:{align:"center",label:"Time"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t._f("formatTime")(a.timestamp))+" ")]}}])}),a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"append"},slot:"append"},[t.loading?a("Loading"):t._e()],1)],1)},u=[],p=a("781b"),f={components:{Loading:p["a"]},props:{},data:function(){return{address:"",page:1,page_size:10,loading:!0,tableSelectType:0,tableSelectTypeList:[{value:0,label:"All"},{value:1,label:"Swap"},{value:3,label:"Add"},{value:4,label:"Remove"}],list:[],tableHeight:600}},computed:Object(o["a"])({},Object(r["b"])(["isPc","platformInfo"])),watch:{},created:function(){var t=this.$route.params.address;this.address=t,this.getData()},mounted:function(){},methods:{onChangeTransaction:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.tableSelectType=t,e.$forceUpdate(),e.getData();case 3:case"end":return a.stop()}}),a)})))()},getData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.list=[],e.next=4,t.$api.getPairSwapList({address:t.address,type:t.tableSelectType,page_size:100});case 4:a=e.sent,s=a.data,n=s.list,i=s.tokens,r=s.pairs,t.list=n.map((function(t){var e=r[t.pair_id].token1,a=r[t.pair_id].token2,s=Object(o["a"])(Object(o["a"])({},t),{},{token1:e,token2:a,token1_symbol:i[e].symbol,token2_symbol:i[a].symbol});return s})),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()},onPageLoad:function(){console.log("onPageLoad")}}},d=f,m=(a("b605"),a("5d22")),v=Object(m["a"])(d,c,u,!1,null,"8934b9ba",null),_=v.exports,h=a("30c0"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headerBox"},[a("h1",[a("el-image",{staticClass:"img img1",attrs:{src:t.$utils.getTokenLogo(t.pairInfo.token1)}},[a("div",{staticClass:"img-err",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:t.$utils.tokenLogoErrImg}})])]),a("el-image",{staticClass:"img img2",attrs:{src:t.$utils.getTokenLogo(t.pairInfo.token2)}},[a("div",{staticClass:"img-err",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:t.$utils.tokenLogoErrImg}})])]),a("span",[a("i",{on:{click:function(e){return t.$router.push({name:"token",params:{address:t.pairInfo.token1,platform:t.platformInfo.key}})}}},[t._v(" "+t._s(t.pairInfo.token_info1.symbol)+" ")]),t._v(" - "),a("i",{on:{click:function(e){return t.$router.push({name:"token",params:{address:t.pairInfo.token2,platform:t.platformInfo.key}})}}},[t._v(" "+t._s(t.pairInfo.token_info2.symbol)+" ")])]),a("span",{staticClass:"price"},[t._v("Pair")])],1),a("div",{staticClass:"tokens"},[a("div",{staticClass:"tokenInfo",on:{click:function(e){return t.$router.push({name:"token",params:{address:t.pairInfo.token1,platform:t.platformInfo.key}})}}},[a("span",{staticClass:"label"},[t._v("1 "+t._s(t.pairInfo.token_info1.symbol)+" = ")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("autoFixed")(.1111))+" "+t._s(t.pairInfo.token_info2.symbol))])]),a("div",{staticClass:"tokenInfo",on:{click:function(e){return t.$router.push({name:"token",params:{address:t.pairInfo.token2,platform:t.platformInfo.key}})}}},[a("span",{staticClass:"label"},[t._v("1 "+t._s(t.pairInfo.token_info2.symbol)+" = ")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("autoFixed")(.1111))+" "+t._s(t.pairInfo.token_info1.symbol))])])]),a("div",{staticClass:"btnBox"},[a("a",{attrs:{href:t.$utils.getAddLiquidityLink(t.pairInfo.token1,t.pairInfo.token2),target:"_blank"}},[a("el-button",{staticClass:"btn btn1",attrs:{type:"primary",icon:"el-icon-plus",plain:"",size:"mini"}},[t._v("Add Liquidity")])],1),a("a",{attrs:{href:t.$utils.getTradeLink(t.pairInfo.token1,t.pairInfo.token2),target:"_blank"}},[a("el-button",{staticClass:"btn btn2",attrs:{type:"primary",size:"mini"}},[t._v("Trade")])],1)])])},k=[],g={components:{},props:{pairInfo:{type:Object,require:!0}},data:function(){return{}},computed:Object(o["a"])({},Object(r["b"])(["platformInfo"])),mounted:function(){},methods:{}},C=g,y=(a("afc7"),Object(m["a"])(C,b,k,!1,null,"5f8704ac",null)),I=y.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"information",attrs:{gutter:10,justify:"center"}},[a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v("Pair Name")]),a("span",{staticClass:"value"},[a("i",{staticClass:"hover",on:{click:function(e){return t.$router.push({name:"token",params:{address:t.pairInfo.token_info1.address,platform:t.platformInfo.key}})}}},[t._v(" "+t._s(t._f("maxStrLen")(t.pairInfo.token_info1.symbol))+" ")]),t._v(" - "),a("i",{staticClass:"hover",on:{click:function(e){return t.$router.push({name:"token",params:{address:t.pairInfo.token_info2.address,platform:t.platformInfo.key}})}}},[t._v(" "+t._s(t._f("maxStrLen")(t.pairInfo.token_info2.symbol))+" ")])])])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v("Pair Address")]),a("span",{staticClass:"value"},[a("a",{staticClass:"hover",attrs:{href:t.$utils.getAddressLink(t.pairInfo.pair),target:"_blank"}},[t._v(t._s(t._f("miniAddress")(t.pairInfo.pair)))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.pairInfo.pair,expression:"pairInfo.pair",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticStyle:{padding:"0"},attrs:{type:"text"}},[a("svg-icon",{staticClass:"copy",attrs:{"icon-class":"copy"}})],1)],1)])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v(t._s(t._f("maxStrLen")(t.pairInfo.token_info1.symbol))+" Address")]),a("span",{staticClass:"value"},[a("a",{staticClass:"hover",attrs:{href:t.$utils.getAddressLink(t.pairInfo.token_info1.address),target:"_blank"}},[t._v(t._s(t._f("miniAddress")(t.pairInfo.token_info1.address)))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.pairInfo.token_info1.address,expression:"pairInfo.token_info1.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticStyle:{padding:"0"},attrs:{type:"text"}},[a("svg-icon",{staticClass:"copy",attrs:{"icon-class":"copy"}})],1)],1)])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v(t._s(t._f("maxStrLen")(t.pairInfo.token_info2.symbol))+" Address")]),a("span",{staticClass:"value"},[a("a",{staticClass:"hover",attrs:{href:t.$utils.getAddressLink(t.pairInfo.token_info2.address),target:"_blank"}},[t._v(t._s(t._f("miniAddress")(t.pairInfo.token_info2.address)))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.pairInfo.token_info2.address,expression:"pairInfo.token_info2.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticStyle:{padding:"0"},attrs:{type:"text"}},[a("svg-icon",{staticClass:"copy",attrs:{"icon-class":"copy"}})],1)],1)])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v("Fee")]),a("span",{staticClass:"value"},[t._v(t._s(.111)+"%")])])]),a("el-col",{staticClass:"btnBox",attrs:{xs:12,span:4,align:"right"}},[a("a",{attrs:{href:t.$utils.getAddressLink(t.pairInfo.pair),target:"_blank"}},[a("el-button",{attrs:{type:"primary",size:"large"}},[t._v("View on BlockScan")])],1)])],1)},w=[],$={components:{},props:{pairInfo:{type:Object,require:!0}},inject:["onCopySuccess"],computed:Object(o["a"])({},Object(r["b"])(["platformInfo"])),data:function(){return{}},mounted:function(){},methods:{}},S=$,T=(a("032a"),Object(m["a"])(S,x,w,!1,null,"014d745a",null)),L=T.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"information",attrs:{gutter:10,justify:"center"}},[a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v(t._s(t.pairInfo.token_info1.symbol)+" Mining Rate")]),a("span",{staticClass:"value"},[t._v("0.00%")])])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v(t._s(t.pairInfo.token_info2.symbol)+" Mining Rate")]),a("span",{staticClass:"value"},[t._v("0.00%")])])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v("Dummy 0%")]),a("span",{staticClass:"value"},[t._v("0.00%")])])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v("Dummy 0%")]),a("span",{staticClass:"value"},[t._v("0.00%")])])])],1)},j=[],D={components:{},props:{pairInfo:{type:Object,require:!0}},inject:["onCopySuccess"],data:function(){return{}},mounted:function(){},methods:{}},E=D,F=(a("6746"),Object(m["a"])(E,O,j,!1,null,"12416a6a",null)),A=F.exports,R="pair",P={name:R,components:{Loading:p["a"],HeaderBox:I,Transactions:_,Chart:h["a"],PairInformation:L,OtherInformation:A},inject:["onCopySuccess"],data:function(){return{ws:null,address:"",pairInfo:{},timeRangeList:{},klineTimeType:"1min",lineChartData:[]}},computed:Object(o["a"])({},Object(r["b"])(["isPc","platformInfo"])),watch:{klineTimeType:function(t,e){this.ws&&(this.wsSend({unsub:"market.kline.".concat(e),id:this.pairInfo.id}),this.wsSend(this.getKlineReqParams()),this.wsSend({sub:"market.kline.".concat(t),id:this.pairInfo.id}))}},activated:function(){console.log("pair activated"),this.ws&&this.wsSend({sub:"market.kline.".concat(this.timeRangeList[this.klineTimeType].value),id:this.pairInfo.id})},deactivated:function(){console.log("pair deactivated"),this.ws&&this.wsSend({unsub:"market.kline.".concat(this.timeRangeList[this.klineTimeType].value),id:this.pairInfo.id})},beforeDestroy:function(){this.ws&&this.ws.close()},created:function(){var t=this.$route.params.address;this.address=t,this.timeRangeList=l["c"]},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.getPairInfo(t.address);case 2:a=e.sent,s=a.data,t.pairInfo=s,t.onConnectWebSocket();case 6:case"end":return e.stop()}}),e)})))()},methods:{handleChartData:function(t){return{open:this.$utils.autoFixed(t.open),close:this.$utils.autoFixed(t.close),low:this.$utils.autoFixed(t.low),high:this.$utils.autoFixed(t.high),time:t.id}},wsSend:function(t){this.ws.send(JSON.stringify(t))},getKlineReqParams:function(){return{req:"market.kline.".concat(this.timeRangeList[this.klineTimeType].value),id:this.pairInfo.id,from:Math.round((new Date).getTime()/1e3)-60*this.timeRangeList[this.klineTimeType].time,to:Math.round((new Date).getTime()/1e3)}},onConnectWebSocket:function(){var t=this;console.log("pair onConnectWebSocket"),this.ws=new WebSocket(this.$utils.getWsUrl()),this.ws.onopen=function(){t.wsSend(t.getKlineReqParams()),t.wsSend({sub:"market.kline.".concat(t.timeRangeList[t.klineTimeType].value),id:t.pairInfo.id})},this.ws.onmessage=function(e){var a=JSON.parse(e.data);if(a.msg==="market.kline.".concat(t.timeRangeList[t.klineTimeType].value)){var s=a.data.map((function(e,s){return t.handleChartData(Object(o["a"])(Object(o["a"])({},e),{},{open:0===s?e.open:a.data[s-1].close}))}));t.lineChartData=s,t.$refs.Chart.init({chartData:s})}else if(a.ch){var n=t.handleChartData(Object(o["a"])(Object(o["a"])({},a.tick),{},{open:0===t.lineChartData.length?a.tick.open:t.lineChartData[t.lineChartData.length-1].close}));t.lineChartData.push(n),t.$refs.Chart.update(n)}},this.ws.onclose=function(){console.log("token ws closed")}}}},B=P,N=(a("efcf"),Object(m["a"])(B,s,n,!1,null,"99c483ca",null));e["default"]=N.exports},"30c0":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chartBox"},[a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"chart"}})])}],i=(a("b4fb"),a("dac0")),o={data:function(){return{series:null,chartExample:null,isInit:!1}},mounted:function(){},methods:{update:function(t){this.series.update(t)},set:function(t){console.log("set",t),this.series.setData(t)},init:function(t){var e=this,a=t.chartData,s=void 0===a?[]:a;if(console.log("chartDatachartDatachartDatachartData",s),this.isInit)return console.log("setData"),void this.series.setData(JSON.parse(JSON.stringify(s)));var n,o=document.getElementById("chart"),r=document.createElement("div");o.appendChild(r),this.chartExample=Object(i["a"])(r,{rightPriceScale:{visible:!0},leftPriceScale:{visible:!1},timeScale:{borderVisible:!0,timeVisible:!0,visible:!0},layout:{backgroundColor:"#23232F",textColor:"rgba(255, 255, 255, 0.5)"},grid:{horzLines:{color:"rgba(255, 255, 255, 0.05)",visible:!0},vertLines:{color:"#f99",visible:!1}},crosshair:{vertLine:{labelVisible:!0}}}),this.chartExample.resize(o.offsetWidth,o.offsetHeight),document.body.onresize=function(){n&&clearTimeout(n),n=setTimeout((function(){e.chartExample.resize(o.offsetWidth,o.offsetHeight)}),100)};var l=this.chartExample.addCandlestickSeries({upColor:"#4AB167",borderUpColor:"#4AB167",downColor:"#FF4248",borderDownColor:"#FF4248"});l.setData(JSON.parse(JSON.stringify(s)));var c=80,u=80,p=15,f=document.createElement("div");f.className="floating-tooltip-2",r.appendChild(f),this.isInit=!0,this.series=l,this.chartExample.subscribeCrosshairMove((function(t){if(void 0===t.point||!t.time||t.point.x<0||t.point.x>r.clientWidth||t.point.y<0||t.point.y>r.clientHeight)f.style.display="none";else{f.style.display="block";var a=t.seriesPrices.get(l);f.innerHTML='\n            <div style="font-size: 14px;line-height: 22px;">\n              <p>'.concat(e.$t("common.high"),":").concat(a.high,"</p>\n              <p>").concat(e.$t("common.low"),":").concat(a.low,"</p>\n              <p>").concat(e.$t("common.open"),":").concat(a.open,"</p>\n              <p>").concat(e.$t("common.close"),":").concat(a.close,"</p>\n            </div>\n          ");var s=l.priceToCoordinate(a),n=t.point.x-50;if(null===s)return;n=Math.max(0,Math.min(r.clientWidth-c,n));var i=s-u-p>0?s-u-p:Math.max(0,Math.min(r.clientHeight-u-p,s+p));f.style.left=n+"px",f.style.top=i+"px"}}))}}},r=o,l=(a("23ef"),a("5d22")),c=Object(l["a"])(r,s,n,!1,null,null,null);e["a"]=c.exports},"4b1c":function(t,e,a){},"4ee53":function(t,e,a){},6746:function(t,e,a){"use strict";a("e45b")},"781b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loadingBox"},[a("div",{staticClass:"loading"},[a("div"),a("div"),a("div"),a("div")])])}],i=a("6abc"),o=a("52c1"),r={components:{},data:function(){return{}},computed:Object(i["a"])({},Object(o["b"])(["isConnect","account","isPc","language"])),created:function(){},mounted:function(){},methods:{}},l=r,c=(a("27d3"),a("5d22")),u=Object(c["a"])(l,s,n,!1,null,"298ae9f9",null);e["a"]=u.exports},"7f3b":function(t,e,a){},afc7:function(t,e,a){"use strict";a("cc4b")},b1d5:function(t,e,a){},b605:function(t,e,a){"use strict";a("b1d5")},cc4b:function(t,e,a){},e45b:function(t,e,a){},efcf:function(t,e,a){"use strict";a("4b1c")}}]);