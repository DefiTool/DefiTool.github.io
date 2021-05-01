(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b07de5ee"],{"02f4f":function(t,e,a){"use strict";a("6fdd")},"0d32":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("HeaderBox",{attrs:{"token-info":t.tokenInfo}}),a("div",{staticClass:"infoBox"},[a("div",{staticClass:"itemBox"},[a("div",{staticClass:"item item1"},[a("span",{staticClass:"label"},[t._v("Total Liquidity")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(t._f("autoFixed")(111111))))])]),a("div",{staticClass:"item item2"},[a("span",{staticClass:"label"},[t._v("Volume (24hrs)")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(t._f("autoFixed")(t.tokenInfo.volume_24hour))))])]),a("div",{staticClass:"item item3"},[a("span",{staticClass:"label"},[t._v("Transactions (24hrs)")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(t._f("autoFixed")(t.tokenInfo.transactions_24hours))))])])]),a("div",{staticClass:"chart"},[a("el-radio-group",{staticClass:"klineTimeType",model:{value:t.klineTimeType,callback:function(e){t.klineTimeType=e},expression:"klineTimeType"}},t._l(t.timeRangeList,(function(e){return a("el-radio-button",{key:e.value,attrs:{label:e.value}},[t._v(t._s(e.label))])})),1),a("Chart",{ref:"Chart",staticClass:"chart"})],1)]),a("div",{staticClass:"section"},[t._m(0),a("TokenInformation",{attrs:{"token-info":t.tokenInfo}})],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("span",[t._v("Token Information")])])}],i=a("60b5"),o=a("6abc"),r=(a("6a61"),a("4194"),a("2eeb"),a("aafd"),a("52c1")),l=a("b40e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{directives:[{name:"el-table-infinite-scroll",rawName:"v-el-table-infinite-scroll",value:t.onPageLoad,expression:"onPageLoad"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:t.pageList,"empty-text":t.$t("common.noData"),height:t.tableHeight}},[a("el-table-column",{attrs:{label:"Name",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row,n=e.$index;return[a("a",{staticClass:"name",attrs:{href:"/defi/pair?address="+s.pair,target:"_blank"}},[a("span",{staticClass:"index"},[t._v(t._s(n+1))]),a("div",{staticClass:"imgBox"},[a("el-image",{staticClass:"img img1",attrs:{src:t.$utils.getTokenLogo(s.token1)}},[a("div",{staticClass:"img-err",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:t.$utils.tokenLogoErrImg}})])]),a("el-image",{staticClass:"img img2",attrs:{src:t.$utils.getTokenLogo(s.token2)}},[a("div",{staticClass:"img-err",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:t.$utils.tokenLogoErrImg}})])])],1),a("span",{staticClass:"pairs"},[t._v(t._s(s.token1_symbol)+"-"+t._s(s.token2_symbol))])])]}}])}),a("el-table-column",{attrs:{label:"Liquidity Amount",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t._f("autoFixed")(a.liquidity1))+" "+t._s(a.token1_symbol)+" ")]}}])}),a("el-table-column",{attrs:{label:"Liquidity Amount",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t._f("autoFixed")(a.liquidity2))+" "+t._s(a.token2_symbol)+" ")]}}])}),a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"append"},slot:"append"},[t.loading||0===t.pageList.length?a("Loading"):t._e()],1)],1)},u=[],d=(a("77ad"),a("781b")),f={components:{Loading:d["a"]},props:{},data:function(){return{page:0,page_size:60,loading:!0,list:[],tableHeight:300}},computed:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["account","isPc"])),{},{pageList:function(){return this.list.slice(0,this.page_size*this.page)}}),watch:{pageList:function(t){this.loading=!(this.page_size*this.page>t.length)}},created:function(){this.getData()},mounted:function(){},methods:{getData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,n,i,r,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$route.query.address,e.next=3,t.$api.getTokenPairs(a);case 3:s=e.sent,n=s.data,i=n.list,r=n.tokens,l=i.map((function(t){var e=Object(o["a"])(Object(o["a"])({},t),{},{token1_symbol:r[t.token1].symbol,token2_symbol:r[t.token2].symbol});return e})),t.list=l,console.log(l,"res toppairs"),console.log(r,"tokens");case 9:case"end":return e.stop()}}),e)})))()},onPageLoad:function(){this.loading&&(this.page++,console.log(this.page,"this.page"))}}},m=f,p=(a("93e8"),a("5d22")),h=Object(p["a"])(m,c,u,!1,null,"ba484612",null),b=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{directives:[{name:"el-table-infinite-scroll",rawName:"v-el-table-infinite-scroll",value:t.onPageLoad,expression:"onPageLoad"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:t.list,"empty-text":t.$t("common.noData"),height:t.tableHeight}},[a("el-table-column",{attrs:{width:"180"},scopedSlots:t._u([{key:"header",fn:function(){return[a("ul",{staticClass:"tableSelectTypeList"},t._l(t.tableSelectTypeList,(function(e){return a("li",{key:e.value,class:{on:e.value===t.tableSelectType},on:{click:function(a){return t.onChangeTransaction(e.value)}}},[t._v(t._s(e.label))])})),0)]},proxy:!0},{key:"default",fn:function(e){var s=e.row;return[a("a",{staticClass:"name",attrs:{href:t.$utils.getTxLink(s.transaction_hash),target:"_blank"}},[1===s.type||2===s.type?[t._v(t._s("Swap "+s.token1_symbol+" for "+s.token2_symbol))]:3===s.type?[t._v(t._s("Add "+s.token1_symbol+" and "+s.token2_symbol))]:4===s.type?[t._v(t._s("Remove "+s.token1_symbol+" and "+s.token2_symbol))]:t._e()],2)]}}])}),a("el-table-column",{attrs:{label:"Total Value",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" $"+t._s(t._f("autoFixed")(a.price*a.amount1))+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"Token Amount"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[t._v(" "+t._s(t._f("autoFixed")(s.amount1))+" "),a("a",{attrs:{href:"/defi/token?address=",target:"_blank"}},[t._v(t._s(s.token1_symbol))])]}}])}),a("el-table-column",{attrs:{label:"Token Amount",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[t._v(" "+t._s(t._f("autoFixed")(s.amount2))+" "),a("a",{attrs:{href:"/defi/token?address=",target:"_blank"}},[t._v(t._s(s.token2_symbol))])]}}])}),a("el-table-column",{attrs:{align:"center",label:"Account"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("a",{attrs:{href:t.$utils.getAddressLink(s.from),target:"_blank"}},[t._v(" "+t._s(t._f("miniAddress")(s.from)))])]}}])}),a("el-table-column",{attrs:{align:"center",label:"Time"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t._f("formatTime")(a.timestamp))+" ")]}}])}),a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"append"},slot:"append"},[t.loading?a("Loading"):t._e()],1)],1)},v=[],_={components:{Loading:d["a"]},props:{},data:function(){return{address:"",page:1,page_size:20,loading:!0,tableSelectType:0,tableSelectTypeList:[{value:0,label:"All"},{value:1,label:"Swap"},{value:3,label:"Add"},{value:4,label:"Remove"}],list:[],tableHeight:300}},computed:Object(o["a"])({},Object(r["b"])(["isPc"])),watch:{},created:function(){var t=this.$route.query.address;this.address=t,this.getData()},mounted:function(){},methods:{onChangeTransaction:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.tableSelectType=t,e.$forceUpdate(),console.log("type",t),e.getData();case 4:case"end":return a.stop()}}),a)})))()},getData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.list=[],e.next=4,t.$api.getTokenSwapList({address:t.address,type:t.tableSelectType,page_size:100});case 4:a=e.sent,s=a.data,n=s.list,i=s.tokens,r=s.pairs,t.list=n.map((function(t){var e=r[t.pair_id].token1,a=r[t.pair_id].token2,s=Object(o["a"])(Object(o["a"])({},t),{},{token1_symbol:i[e].symbol,token2_symbol:i[a].symbol});return s})),t.loading=!1,console.log(t.list,"this.list");case 9:case"end":return e.stop()}}),e)})))()},onPageLoad:function(){console.log("onPageLoad")}}},k=_,y=(a("423d"),Object(p["a"])(k,g,v,!1,null,"ac7ae940",null)),C=y.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chart"}})},x=[],T=(a("b4fb"),a("dac0")),S={data:function(){return{series:null,chartExample:null,isInit:!1}},mounted:function(){},methods:{onResizeHandler:function(){var t,e=this,a=document.getElementById("chart");t&&clearTimeout(t),t=setTimeout((function(){e.chartExample.resize(a.offsetWidth,a.offsetHeight)}),200)},update:function(t){this.series.update(t)},set:function(t){console.log("set",t),this.series.setData(t)},init:function(t){var e=this,a=t.chartData,s=void 0===a?[]:a;if(console.log("chartDatachartDatachartDatachartData",s),this.isInit)this.series.setData(s);else{var n,i=document.getElementById("chart"),o=document.createElement("div");i.appendChild(o),this.chartExample=Object(T["a"])(o,{rightPriceScale:{visible:!0},leftPriceScale:{visible:!1},timeScale:{borderVisible:!0,timeVisible:!0,visible:!0},layout:{backgroundColor:"#23232F",textColor:"rgba(255, 255, 255, 0.5)"},grid:{horzLines:{color:"rgba(255, 255, 255, 0.05)",visible:!0},vertLines:{color:"#f99",visible:!1}},crosshair:{vertLine:{labelVisible:!0}}}),this.chartExample.resize(i.offsetWidth,i.offsetHeight),document.body.onresize=function(){n&&clearTimeout(n),n=setTimeout((function(){e.chartExample.resize(i.offsetWidth,i.offsetHeight)}),100)};var r=this.chartExample.addCandlestickSeries({upColor:"#4AB167",borderUpColor:"#4AB167",downColor:"#FF4248",borderDownColor:"#FF4248"});r.setData(JSON.parse(JSON.stringify(s)));var l=80,c=80,u=15,d=document.createElement("div");d.className="floating-tooltip-2",o.appendChild(d),this.isInit=!0,this.series=r,this.chartExample.subscribeCrosshairMove((function(t){if(void 0===t.point||!t.time||t.point.x<0||t.point.x>o.clientWidth||t.point.y<0||t.point.y>o.clientHeight)d.style.display="none";else{d.style.display="block";var a=t.seriesPrices.get(r);d.innerHTML='\n            <div style="font-size: 14px;line-height: 22px;">\n              <p>'.concat(e.$t("common.high"),":").concat(a.high,"</p>\n              <p>").concat(e.$t("common.low"),":").concat(a.low,"</p>\n              <p>").concat(e.$t("common.open"),":").concat(a.open,"</p>\n              <p>").concat(e.$t("common.close"),":").concat(a.close,"</p>\n            </div>\n          ");var s=r.priceToCoordinate(a),n=t.point.x-50;if(null===s)return;n=Math.max(0,Math.min(o.clientWidth-l,n));var i=s-c-u>0?s-c-u:Math.max(0,Math.min(o.clientHeight-c-u,s+u));d.style.left=n+"px",d.style.top=i+"px"}}))}}}},L=S,$=(a("23ef"),Object(p["a"])(L,w,x,!1,null,null,null)),I=$.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headerBox"},[a("p",{staticClass:"tokens"},[a("span",[t._v("Tokens")]),a("span",[t._v(" → ")]),a("span",{staticClass:"symbol"},[t._v(t._s(t.tokenInfo.symbol))]),a("span",{staticClass:"address"},[t._v("("+t._s(t._f("autoAddress")(t.tokenInfo.address))+")")])]),a("h1",[a("el-image",{staticClass:"img",attrs:{src:t.$utils.getTokenLogo(t.tokenInfo.address)}},[a("div",{staticClass:"img-err",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:t.$utils.tokenLogoErrImg}})])]),a("span",[t._v(t._s(t.tokenInfo.name)+" ("+t._s(t.tokenInfo.symbol)+") ")]),a("span",{staticClass:"price"},[t._v("$"+t._s(111.11))]),a("span",{staticClass:"rate"},[t._v("-0.53%")])],1),a("div",{staticClass:"btnBox"},[a("a",{attrs:{href:t.$utils.getAddLiquidityLink(t.tokenInfo.address),target:"_blank"}},[a("el-button",{staticClass:"btn btn1",attrs:{type:"primary",icon:"el-icon-plus",plain:"",size:"mini"}},[t._v("Add Liquidity")])],1),a("a",{attrs:{href:t.$utils.getTradeLink(t.tokenInfo.address),target:"_blank"}},[a("el-button",{staticClass:"btn btn2",attrs:{type:"primary",size:"mini"}},[t._v("Trade")])],1)])])},j=[],D={components:{},props:{tokenInfo:{type:Object,require:!0}},data:function(){return{}},mounted:function(){},methods:{}},E=D,A=(a("6625"),Object(p["a"])(E,O,j,!1,null,"cfefbcc8",null)),P=A.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"information",attrs:{gutter:10,justify:"center"}},[a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v("Tokens")]),a("span",{staticClass:"value"},[t._v(t._s(t.tokenInfo.symbol)+" ")])])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v("Name")]),a("span",{staticClass:"value"},[t._v(t._s(t.tokenInfo.name))])])]),a("el-col",{attrs:{xs:12,span:4}},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[t._v("Address")]),a("span",{staticClass:"value"},[a("a",{attrs:{href:t.$utils.getAddressLink(t.tokenInfo.address),target:"_blank"}},[t._v(" "+t._s(t._f("miniAddress")(t.tokenInfo.address)))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.tokenInfo.address,expression:"tokenInfo.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticStyle:{padding:"0"},attrs:{type:"text"}},[a("svg-icon",{staticClass:"copy",attrs:{"icon-class":"copy"}})],1)],1)])]),a("el-col",{staticClass:"btnBox",attrs:{xs:12,span:12,align:"right"}},[a("a",{attrs:{href:t.$utils.getAddressLink(t.tokenInfo.address),target:"_blank"}},[a("el-button",{attrs:{type:"primary",size:"large"}},[t._v("View on BlockScan")])],1)])],1)},q=[],F={components:{},props:{tokenInfo:{type:Object,require:!0}},inject:["onCopySuccess"],data:function(){return{}},mounted:function(){},methods:{}},z=F,B=(a("02f4f"),Object(p["a"])(z,R,q,!1,null,"3cbacd6f",null)),H=B.exports,M="token",N={name:M,components:{HeaderBox:P,TopPairs:b,Transactions:C,Chart:I,TokenInformation:H},inject:["onCopySuccess"],data:function(){return{ws:null,address:"",tokenInfo:{id:1424,from:"0xefc4b31e5d8323bd62eff68ad1e275700642c53f",name:"MMC name",symbol:"MMC",total_supply:21e6,decimals:18,address:"0x0ac27602e8317c5fd7af08f20ae47a8eff9d5a75",timestamp:1619069676,volume_24hour:"98.71580547",transactions_24hours:2},timeRangeList:[],klineTimeType:"1day",lineChartData:[],price:""}},computed:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["isPc"])),{},{defaultTime:function(t){var e=this;return console.log("defaultTime=======",t),l["b"].find((function(t){return t.value===e.klineTimeType}))}}),watch:{klineTimeType:function(t,e){this.wsSend({unsub:"market.kline.".concat(e),address:this.address}),this.wsSend(this.getKlineReqParams()),this.wsSend({sub:"market.kline.".concat(t),address:this.address})}},beforeDestroy:function(){this.ws&&(console.log("token beforeDestroy"),this.ws.close())},activated:function(){console.log("token activated"),this.ws&&this.wsSend({sub:"market.kline.".concat(this.defaultTime.value),address:this.address})},deactivated:function(){this.ws&&(console.log("token deactivated"),this.ws.close())},created:function(){var t=this.$route.query.address;this.address=t,this.timeRangeList=l["b"]},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.onConnectWebSocket(),e.next=3,t.$api.getTokenInfo(t.address);case 3:a=e.sent,s=a.data,t.tokenInfo=s;case 6:case"end":return e.stop()}}),e)})))()},methods:{handleChartData:function(t){return{open:+t.open,close:+t.close,low:+t.low,high:+t.high,time:t.id}},wsSend:function(t){console.log(t),this.ws.send(JSON.stringify(t))},getKlineReqParams:function(){return console.log(this.defaultTime),{req:"market.kline.".concat(this.defaultTime.value),address:this.address,from:Math.round((new Date).getTime()/1e3)-60*this.defaultTime.time,to:Math.round((new Date).getTime()/1e3)}},onConnectWebSocket:function(){var t=this;console.log("onConnectWebSocket"),this.ws=new WebSocket(this.$utils.getWsUrl()),this.ws.onopen=function(){t.wsSend(t.getKlineReqParams()),t.wsSend({sub:"market.kline.".concat(t.defaultTime.value),address:t.address})},this.ws.onmessage=function(e){var a=JSON.parse(e.data);if(console.log("clg",a),a.msg==="market.kline.".concat(t.defaultTime.value)){var s=a.data.map((function(e){return t.handleChartData(e)}));t.$refs.Chart.init({chartData:s})}else a.sub&&(console.log("res.subres===================",a.data),t.$refs.Chart.update(a.data))},this.ws.onclose=function(){console.log("token ws closed")}}}},W=N,J=(a("3a3b"),Object(p["a"])(W,s,n,!1,null,"c2bdd5ce",null));e["default"]=J.exports},"11ba":function(t,e,a){},"23ef":function(t,e,a){"use strict";a("4ee53")},"27d3":function(t,e,a){"use strict";a("11ba")},"3a3b":function(t,e,a){"use strict";a("4eb1")},"3b1e":function(t,e,a){},"423d":function(t,e,a){"use strict";a("9951")},"4eb1":function(t,e,a){},"4ee53":function(t,e,a){},6625:function(t,e,a){"use strict";a("3b1e")},"6fdd":function(t,e,a){},"781b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loadingBox"},[a("div",{staticClass:"loading"},[a("div"),a("div"),a("div"),a("div")])])}],i=a("6abc"),o=a("52c1"),r={components:{},data:function(){return{}},computed:Object(i["a"])({},Object(o["b"])(["isConnect","account","isPc","language"])),created:function(){},mounted:function(){},methods:{}},l=r,c=(a("27d3"),a("5d22")),u=Object(c["a"])(l,s,n,!1,null,"298ae9f9",null);e["a"]=u.exports},"8f51":function(t,e,a){},"93e8":function(t,e,a){"use strict";a("8f51")},9951:function(t,e,a){}}]);