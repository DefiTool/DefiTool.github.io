(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a94aa7a"],{"175e":function(t,e,a){},"8bd7":function(t,e,a){"use strict";a("175e")},a62a:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"containerCenter"},[a("div",{staticClass:"header"},[a("svg-icon",{staticClass:"uniswapIcon",attrs:{"icon-class":t.icon}}),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"input",attrs:{placeholder:"Please enter..."},domProps:{value:t.searchInput},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch(e)},input:function(e){e.target.composing||(t.searchInput=e.target.value)}}})])],1),a("el-row",{staticClass:"cardList",attrs:{gutter:20}},t._l(t.resList,(function(e,r){return a("el-col",{key:r,attrs:{lg:12,xs:24}},[a("div",{staticClass:"card"},[a("div",{staticClass:"coinInfo"},[a("div",{staticClass:"imgBox"},[a("el-image",{staticClass:"img img1",attrs:{src:t.logo_link.replace("#address#",e.token1)}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png"}})])]),a("el-image",{staticClass:"img img2",attrs:{src:t.logo_link.replace("#address#",e.token2)}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("img",{staticClass:"img",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png"}})])])],1),a("div",{staticClass:"sybmol"},[a("a",{attrs:{href:"/defi/token?platform="+t.platform+"&address="+e.token1,target:"_blank"}},[t._v(t._s(e.token1Sybmol))]),t._v(" /"),a("a",{attrs:{href:"/defi/token?platform="+t.platform+"&address="+e.token2,target:"_blank"}},[t._v(t._s(e.token2Sybmol))])])]),a("ul",[a("li",[a("i",{staticClass:"el-icon-time icon"}),a("p",[a("span",{staticClass:"key"},[t._v("Date:")]),t._v(t._s(e.timestamp))])]),a("li",[a("i",{staticClass:"el-icon-tickets icon"}),a("p",[a("span",{staticClass:"key"},[t._v("Pair:")]),a("a",{attrs:{href:"/defi/pair?platform="+t.platform+"&address="+e.pair,target:"_blank"}},[t._v(t._s(e.pair))])])]),a("li",[a("i",{staticClass:"el-icon-menu icon"}),a("p",[a("span",{staticClass:"key"},[t._v("Liquidity:")]),a("a",{attrs:{href:"/defi/pair?platform="+t.platform+"&address="+e.pair,target:"_balnk"}},[t._v(t._s(t._f("autoFixed")(e.liquidity1))+" "+t._s(e.token1Sybmol))]),t._v(" / "),a("a",{attrs:{href:"/defi/pair?platform="+t.platform+"&address="+e.pair,target:"_balnk"}},[t._v(t._s(t._f("autoFixed")(e.liquidity2))+" "+t._s(e.token2Sybmol))])])])])])])})),1)],1)])},n=[],s=a("60b5"),o=(a("6a61"),a("053b"),a("5e9f"),a("e35a"),a("e18c"),a("1c2e"),{zh:{uniswap:{title:"Uniswap最新交易对"}},en:{uniswap:{title:"Uniswap latest trading pairs"}}}),c=a("9182"),i=a("8feb"),l=a.n(i),u=a("b893"),p="defi",d={name:"Defi",data:function(){return{searchInput:"",resList:[],rpc_node:"",factory_address:"",platform:"",logo_link:"",icon:""}},created:function(){this.$i18n.getLocaleMessage("en")[p]||(this.$i18n.mergeLocaleMessage("en",o.en),this.$i18n.mergeLocaleMessage("zh",o.zh))},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r,n,s,o,c,i,u,p,d,m,f,h,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.platform=t.icon=t.$route.name,"uniswap"===t.platform&&(t.rpc_node="https://mainnet.infura.io/v3/5f9c7a4d6f0e4c9aa48ae4044daee46b",t.blockscan="https://etherscan.io",t.logo_link="https://tokens.1inch.exchange/#address#.png",t.factory_address="0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"),"mdex"===t.platform&&(t.rpc_node="https://heconode.ifoobar.com/",t.blockscan="https://hecoinfo.com",t.factory_address="0xb0b670fc1F7724119963018DB0BfA86aDb22d941",t.logo_link="https://raw.githubusercontent.com/mdexSwap/token-icons/main/heco/#address#.png"),"pancakeswap"===t.platform&&(t.rpc_node="https://bsc-dataseed1.binance.org/",t.blockscan="https://bscscan.com",t.factory_address="0xbcfccbde45ce874adcb698cc183debcf17952812",t.logo_link="https://tokens.1inch.exchange/#address#.png"),e.next=6,t.Data();case 6:a=e.sent,r=[],n=1,s=a.length-1;case 10:if(!(s>=0)){e.next=44;break}if(!(n>=80)){e.next=13;break}return e.abrupt("break",44);case 13:if(console.log(a[s]),o=a[s].data.replace("0x000000000000000000000000","0x").substring(0,42),c=a[s].topics[1].replace("000000000000000000000000",""),i=a[s].topics[2].replace("000000000000000000000000",""),r[c]){e.next=21;break}return e.next=20,t.getTokenInfo(c);case 20:r[c]=e.sent;case 21:if(r[i]){e.next=25;break}return e.next=24,t.getTokenInfo(i);case 24:r[i]=e.sent;case 25:return u=r[c].symbol,p=r[i].symbol,e.t0=l.a.abi,e.t1=["uint112","uint112","uint32"],e.next=31,t.Liquidity(o);case 31:return e.t2=e.sent,d=e.t0.decodeParams.call(e.t0,e.t1,e.t2),m=parseInt("0x"+d[0].toString(16))/Math.pow(10,r[c].decimal),f=parseInt("0x"+d[1].toString(16))/Math.pow(10,r[i].decimal),e.next=37,t.BlockByHash(a[s].blockHash);case 37:h=e.sent,b=new Date(1e3*parseInt(h.timestamp)).toLocaleString(),t.resList.push({token1:c,token2:i,token1Sybmol:u,token2Sybmol:p,liquidity1:m,liquidity2:f,pair:o,timestamp:b}),n++;case 41:s--,e.next=10;break;case 44:case"end":return e.stop()}}),e)})))()},methods:{onSearch:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getTokenInfo(t.searchInput);case 3:a=e.sent,"UNI-V2"===a.symbol||"HMDX"===a.symbol||"Cake-LP"===a.symbol?t.$router.push({name:"Pair",query:{platform:t.platform,address:t.searchInput}}):t.$router.push({name:"Token",query:{platform:t.platform,address:t.searchInput}}),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()},Data:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.t1=t.rpc_node,e.t2=t.factory_address,e.t3=["0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9"],e.t4=c["toHex"],e.next=7,t.blockNumber();case 7:return e.t5=e.sent,e.t6=e.t5-4999,e.t7=(0,e.t4)(e.t6),e.t8={address:e.t2,topics:e.t3,fromBlock:e.t7,toBlock:"latest"},e.t9=[e.t8],e.t10={jsonrpc:"2.0",id:1,method:"eth_getLogs",params:e.t9},e.t11={url:e.t1,method:"post",data:e.t10},e.next=16,e.t0.$ajax.call(e.t0,e.t11);case 16:return a=e.sent,e.abrupt("return",a.result);case 18:case"end":return e.stop()}}),e)})))()},blockNumber:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:t.rpc_node,method:"post",data:{jsonrpc:"2.0",method:"eth_blockNumber",params:[],id:83}});case 2:return a=e.sent,e.abrupt("return",parseInt(a.result));case 4:case"end":return e.stop()}}),e)})))()},Liquidity:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x0902f1ac"},"latest"]}});case 2:return r=a.sent,a.abrupt("return",r.result);case 4:case"end":return a.stop()}}),a)})))()},BlockByHash:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",method:"eth_getBlockByHash",params:[t,!1],id:1}});case 2:return r=a.sent,a.abrupt("return",r.result);case 4:case"end":return a.stop()}}),a)})))()},getTokenInfo:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x95d89b41"},"latest"]}});case 2:return r=a.sent,a.next=5,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x313ce567"},"latest"]}});case 5:return n=a.sent,a.abrupt("return",{symbol:u["a"].cleanAsciiText(l.a.toAscii(r.result).toString()),decimal:parseInt(n.result)});case 7:case"end":return a.stop()}}),a)})))()}}},m=d,f=(a("8bd7"),a("5d22")),h=Object(f["a"])(m,r,n,!1,null,"6198ad43",null);e["default"]=h.exports},b893:function(t,e,a){"use strict";var r=a("303e"),n=a("acf6"),s=(a("6db4"),a("5e9f"),a("e35a"),a("4360"),function(){function t(){Object(r["a"])(this,t)}return Object(n["a"])(t,[{key:"cleanAsciiText",value:function(t){if(t)return t.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}}]),t}()),o=new s;e["a"]=o}}]);