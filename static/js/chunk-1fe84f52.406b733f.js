(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fe84f52"],{"0573":function(e,t,n){},"0df3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("PageSearch",{staticClass:"pageSearch",attrs:{loading:e.loading}},[n("el-form-item",{attrs:{label:e.$t("bigSwapExplorer.token"),size:"large"}},[n("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:e.$t("bigSwapExplorer.tokenPlaceholder"),size:"large"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),n("el-form-item",{attrs:{label:e.$t("bigSwapExplorer.total"),size:"large"}},[n("el-input",{staticStyle:{width:"100%"},attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:e.$t("bigSwapExplorer.totalPlaceholder"),size:"large"},model:{value:e.form.total,callback:function(t){e.$set(e.form,"total",t)},expression:"form.total"}})],1),n("el-form-item",{attrs:{label:e.$t("bigSwapExplorer.flowType"),size:"large"}},[n("el-radio-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[n("el-radio-button",{attrs:{label:0}},[e._v("All")]),n("el-radio-button",{attrs:{label:1}},[e._v("Buy")]),n("el-radio-button",{attrs:{label:2}},[e._v("Sell")])],1)],1)],1),0===e.pageList.length?n("Loading"):n("TableList",{attrs:{"page-list":e.pageList,loading:e.loading},on:{onPageLoad:e.onPageLoad}})],1)},i=[],o=n("60b5"),s=n("6abc"),r=(n("08ba"),n("dbb3"),n("77ad"),n("e18c"),n("af86"),n("b4fb"),n("6a61"),n("52c1")),l={zh:{bigSwapExplorer:{total:"最小成交U",totalPlaceholder:"请输入大于10000的值",token:"Token",tokenPlaceholder:"搜索Token",flowType:"流动类型",sort:"排序"}},en:{bigSwapExplorer:{total:"Min USDT",totalPlaceholder:"Please enter a value greater than 10000",token:"Token",tokenPlaceholder:"Search for Token",flowType:"Type",sort:"Sort"}}},c=n("4e3c"),u=n("781b"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list"},[n("el-table",{directives:[{name:"el-table-infinite-scroll",rawName:"v-el-table-infinite-scroll",value:e.onPageLoad,expression:"onPageLoad"}],ref:"table",staticClass:"table",attrs:{"empty-text":e.$t("common.noData"),data:e.pageList,height:e.tableHeight}},[n("el-table-column",{attrs:{label:"配对",align:"center",width:"120",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("a",{staticClass:"name",attrs:{href:"###"},on:{click:function(t){return e.$router.push({name:"pair",params:{address:a.pair}})}}},[e._v(" "+e._s(a.token1_name)+" / "+e._s(a.token2_name)+" ")])]}}])}),n("el-table-column",{attrs:{label:"Total Value",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(" $"+e._s(e._f("toThousandFilter")(e._f("autoFixed")(n.totalUSD)))+" ")]}}])}),n("el-table-column",{attrs:{label:"type",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",{class:{green:1===a.type,red:2===a.type}},[1===a.type?n("el-tag",{attrs:{type:"success",effect:"dark"}},[e._v("Buy")]):n("el-tag",{attrs:{type:"danger",effect:"dark"}},[e._v("Sell")])],1)]}}])}),n("el-table-column",{attrs:{label:"Token Amount",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(e._f("toThousandFilter")(e._f("autoFixed")(a.amount1)))+" "),1===a.type?n("span",[e._v(" "+e._s(a.token2_name))]):n("span",[e._v(" "+e._s(a.token1_name))])]}}])}),n("el-table-column",{attrs:{label:"Token Amount",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(e._f("toThousandFilter")(e._f("autoFixed")(a.amount2)))+" "),1===a.type?n("span",[e._v(" "+e._s(a.token1_name))]):n("span",[e._v(" "+e._s(a.token2_name))])]}}])}),n("el-table-column",{attrs:{label:"Account",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("a",{attrs:{href:e.$utils.getAddressLink(a.from),target:"_blank"}},[e._v(" "+e._s(e._f("miniAddress")(a.from))+" ")])]}}])}),n("el-table-column",{attrs:{label:"Time",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(" "+e._s(e._f("formatTime")(n.timestamp))+" ")]}}])}),n("el-table-column",{attrs:{label:"Price",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(" $"+e._s(e._f("toThousandFilter")(e._f("autoFixed")(n.price)))+" ")]}}])}),n("el-table-column",{attrs:{label:"Other",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("a",{attrs:{href:"###",target:"_blank"},on:{click:function(t){return e.$router.push({name:"pair",params:{address:a.pair}})}}},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"watch"}})],1),n("a",{attrs:{href:e.$utils.getTxLink(a.transaction_hash),target:"_blank"}},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"hash"}})],1)]}}])}),n("div",{staticStyle:{"text-align":"center"},attrs:{slot:"append"},slot:"append"},[e.loading||0===e.pageList.length?n("Loading"):e._e()],1)],1)],1)},d=[],p={components:{Loading:u["a"]},props:{loading:{type:Boolean,require:!0},pageList:{type:Array,require:!0}},data:function(){return{tableHeight:0}},computed:Object(s["a"])({},Object(r["b"])(["isConnect","account","isPc","language"])),created:function(){},mounted:function(){this.getTableHeight()},methods:{getTableHeight:function(){var e=this;this.$nextTick((function(){console.log(window.innerHeight,e.$refs.table.$el.offsetTop),e.tableHeight=window.innerHeight-e.$refs.table.$el.offsetTop-65;var t=e;window.onresize=function(){t.tableHeight=window.innerHeight-t.$refs.table.$el.offsetTop-65}}))},onPageLoad:function(){this.$emit("onPageLoad")}}},h=p,g=(n("3753"),n("5d22")),m=Object(g["a"])(h,f,d,!1,null,"30815962",null),b=m.exports,v="bigSwapExplorer",y={name:v,components:{PageSearch:c["a"],Loading:u["a"],TableList:b},inject:["getPlatformInfo"],data:function(){return{baseCoin:[],tableHeight:0,page:1,page_size:50,loading:!0,form:{type:0,total:1e4,address:""},list:[],pageList:[]}},computed:Object(s["a"])({},Object(r["b"])(["isConnect","account","isPc","language","cachePrice","platformInfo"])),watch:{form:{handler:function(e){this.page=1,this.getPageList()},deep:!0},list:function(){this.getPageList()},pageList:function(e){this.loading=!(this.page_size*this.page>e.length)}},created:function(){this.$i18n.getLocaleMessage("en")[v]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh)),this.getPlatformInfo()},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n in e.platformInfo.coin)e.baseCoin[e.platformInfo.coin[n].address]=n;return t.next=3,e.onGetData();case 3:case"end":return t.stop()}}),t)})))()},activated:function(){console.log("big-swap-explorer activated"),this.ws&&this.wsSend({sub:"market.big-swap-explorer"})},deactivated:function(){console.log("big-swap-explorer deactivated"),this.ws&&this.wsSend({unsub:"market.big-swap-explorer"})},beforeDestroy:function(){this.ws&&(console.log("big-swap-explorer beforeDestroy"),this.ws.close())},methods:{getPageList:function(){var e=this;console.log("getPageList");var t=[],n=[];this.list.forEach((function(e){1===e.type?t.push(e):2===e.type&&n.push(e)}));var a={0:this.list,1:t,2:n},i=a[this.form.type],o=i.filter((function(t){var n=e.form.address.toLowerCase();return t.token1_name.toLowerCase().indexOf(n)>-1}));this.pageList=o.slice(0,this.page_size*this.page)},onPageLoad:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading&&(e.page++,e.getPageList(),console.log(e.page,"this.page"));case 1:case"end":return t.stop()}}),t)})))()},onGetData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,i,o,s,r,l,c,u,f,d,p,h,g,m,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.getBigSwapExplorerList();case 2:if(n=t.sent,200===n.code){t.next=6;break}return e.$message.error("请求失败"),t.abrupt("return");case 6:a=n.data,i=a.list,o=a.pairs,s=a.tokens,t.t0=regeneratorRuntime.keys(i);case 8:if((t.t1=t.t0()).done){t.next=39;break}if(r=t.t1.value,l=o[i[r].pair_id],c=s[l.token1],u=s[l.token2],f=0,d=i[r].amount1,p=i[r].amount2,h=l.token1,g=l.token2,m=c.symbol,b=u.symbol,e.baseCoin[h]&&e.baseCoin[h].indexOf("USD")>-1&&(f=d),e.baseCoin[g]&&e.baseCoin[g].indexOf("USD")>-1&&(f=d),e.baseCoin[h]&&e.baseCoin[h].indexOf("USD")>-1&&2===i[r].type&&(f=p),e.baseCoin[g]&&e.baseCoin[g].indexOf("USD")>-1&&2===i[r].type&&(f=p),(e.baseCoin[h]&&!e.baseCoin[g]||e.baseCoin[h]&&e.baseCoin[g]&&e.baseCoin[h].indexOf("USD")>-1&&-1===e.baseCoin[g].indexOf("USD"))&&(d=i[r].amount2,p=i[r].amount1,h=l.token2,g=l.token1,m=u.symbol,b=c.symbol),e.cachePrice[h]&&(f=d*e.cachePrice[h]),e.cachePrice[g]&&(f=p*e.cachePrice[g]),0===f&&e.baseCoin[h]&&e.baseCoin[h].indexOf("USD")>-1&&(f=p*i[r].price),0!==f){t.next=30;break}return t.abrupt("continue",8);case 30:i[r].token1_name=m,i[r].token2_name=b,i[r].token1=h,i[r].token2=g,i[r].pair=l.pair,i[r].totalUSD=f,e.list.push(i[r]),t.next=8;break;case 39:case"end":return t.stop()}}),t)})))()},wsSend:function(e){this.ws.send(JSON.stringify(e))},onConnectWebSocket:function(){var e=this;this.ws=new WebSocket(this.$utils.getWsUrl()),this.ws.onopen=function(){e.wsSend({sub:"market.big-swap-explorer"})},this.ws.onmessage=function(t){var n=JSON.parse(t.data);"market.big-swap-explorer"===n.ch&&(e.list=n.tick.concat(e.list))},this.ws.onclose=function(){console.log("connection closed")}}}},w=y,_=(n("28a6"),Object(g["a"])(w,a,i,!1,null,"2e0c96ac",null));t["default"]=_.exports},"11ba":function(e,t,n){},"1eee":function(e,t,n){"use strict";n("b6e0")},"27d3":function(e,t,n){"use strict";n("11ba")},"28a6":function(e,t,n){"use strict";n("0573")},"31e2":function(e,t,n){!function(t,n){e.exports=n()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t,n){"use strict";var a=function(e,t,n,a,i,o,s,r){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:c}}({name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(e){return["height","width"].includes(e)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var e=this,t=[];return Object.keys(this.cachedStyles).forEach((function(n){t.push("".concat(e.convertToCssProperty(n)," ").concat(e.duration,"ms ").concat(e.easing))})),t.join(", ")}},methods:{beforeAppear:function(e){this.$emit("before-appear",e)},appear:function(e){this.$emit("appear",e)},afterAppear:function(e){this.$emit("after-appear",e)},appearCancelled:function(e){this.$emit("appear-cancelled",e)},beforeEnter:function(e){this.$emit("before-enter",e)},enter:function(e,t){this.detectAndCacheDimensions(e),this.setClosedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setOpenedDimensions(e),this.$emit("enter",e,t),setTimeout(t,this.duration)},afterEnter:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions(),this.$emit("after-enter",e)},enterCancelled:function(e){this.$emit("enter-cancelled",e)},beforeLeave:function(e){this.$emit("before-leave",e)},leave:function(e,t){this.detectAndCacheDimensions(e),this.setOpenedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setClosedDimensions(e),this.$emit("leave",e,t),setTimeout(t,this.duration)},afterLeave:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions(),this.$emit("after-leave",e)},leaveCancelled:function(e){this.$emit("leave-cancelled",e)},detectAndCacheDimensions:function(e){if(!this.cachedStyles){var t=e.style.visibility,n=e.style.display;e.style.visibility="hidden",e.style.display="",this.cachedStyles=this.detectRelevantDimensions(e),e.style.visibility=t,e.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(e){return"height"===this.dimension?{height:e.offsetHeight+"px",paddingTop:e.style.paddingTop||this.getCssValue(e,"padding-top"),paddingBottom:e.style.paddingBottom||this.getCssValue(e,"padding-bottom")}:"width"===this.dimension?{width:e.offsetWidth+"px",paddingLeft:e.style.paddingLeft||this.getCssValue(e,"padding-left"),paddingRight:e.style.paddingRight||this.getCssValue(e,"padding-right")}:{}},setTransition:function(e){e.style.transition=this.transition},unsetTransition:function(e){e.style.transition=""},hideOverflow:function(e){e.style.overflow="hidden"},unsetOverflow:function(e){e.style.overflow=""},setClosedDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]="0"}))},setOpenedDimensions:function(e){var t=this;Object.keys(this.cachedStyles).forEach((function(n){e.style[n]=t.cachedStyles[n]}))},unsetDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]=""}))},forceRepaint:function(e){getComputedStyle(e)[this.dimension]},getCssValue:function(e,t){return getComputedStyle(e,null).getPropertyValue(t)},convertToCssProperty:function(e){var t=e.match(/([A-Z])/g);if(!t)return e;for(var n=0,a=t.length;n<a;n++)e=e.replace(new RegExp(t[n]),"-"+t[n].toLowerCase());return"-"===e.slice(0,1)&&(e=e.slice(1)),e}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{name:e.name},on:{"before-appear":e.beforeAppear,appear:e.appear,"after-appear":e.afterAppear,"appear-cancelled":e.appearCancelled,"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"enter-cancelled":e.enterCancelled,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave,"leave-cancelled":e.leaveCancelled}},[e._t("default")],2)}),[],!1,null,null,null);t.a=a.exports},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"install",(function(){return i}));var a=n(0);function i(e){e.component("CollapseTransition",a.a)}n.d(t,"CollapseTransition",(function(){return a.a})),t.default=a.a;var o={install:i},s=null;"undefined"!=typeof window?s=window.Vue:void 0!==e&&(s=e.Vue),s&&s.use(o)}.call(this,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])}))},3753:function(e,t,n){"use strict";n("cfa6")},"4e3c":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",staticClass:"searchForm",attrs:{inline:!0,"label-position":e.isPc?"left":"top","label-suffix":":"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch(t)}}},[n("collapse-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isCollapse,expression:"isCollapse"}],staticClass:"collapseBox"},[e._t("default")],2)]),n("el-form-item",{staticClass:"btnBox",attrs:{size:"large"}},[n("div",{staticClass:"flexBox"},[n("el-button",{staticClass:"searchBtn",attrs:{loading:e.loading,type:"primary",size:"large"},on:{click:e.onSearch}},[n("svg-icon",{staticClass:"searchBtnIcon",attrs:{"icon-class":"search"}})],1),n("el-button",{staticClass:"rollBtn",attrs:{type:"text"},on:{click:function(t){e.isCollapse=!e.isCollapse}}},[n("span",{staticClass:"text"},[e._v(e._s(e.isCollapse?"Show":"Hide"))]),n("i",{staticClass:"rollBtnIcon",class:{"el-icon-arrow-down":e.isCollapse,"el-icon-arrow-up":!e.isCollapse}})])],1)])],1)},i=[],o=n("6abc"),s=n("52c1"),r=n("31e2"),l={components:{CollapseTransition:r["CollapseTransition"]},props:{loading:{type:Boolean,require:!0},form:{type:Object}},data:function(){return{isCollapse:!0,rules:{}}},computed:Object(o["a"])({},Object(s["b"])(["isConnect","account","isPc","language"])),created:function(){this.rules={}},mounted:function(){},methods:{onSearch:function(){this.$emit("onSearch")}}},c=l,u=(n("1eee"),n("5d22")),f=Object(u["a"])(c,a,i,!1,null,"17ea06e9",null);t["a"]=f.exports},"781b":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loadingBox"},[n("div",{staticClass:"loading"},[n("div"),n("div"),n("div"),n("div")])])}],o=n("6abc"),s=n("52c1"),r={components:{},data:function(){return{}},computed:Object(o["a"])({},Object(s["b"])(["isConnect","account","isPc","language"])),created:function(){},mounted:function(){},methods:{}},l=r,c=(n("27d3"),n("5d22")),u=Object(c["a"])(l,a,i,!1,null,"298ae9f9",null);t["a"]=u.exports},b6e0:function(e,t,n){},cfa6:function(e,t,n){}}]);