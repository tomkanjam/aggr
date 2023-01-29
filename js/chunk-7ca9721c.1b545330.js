(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ca9721c"],{"024c":function(t,e,s){"use strict";var i=s("9ab4"),a=s("2b0e"),n=s("2fe1");let o=class extends a["default"]{get pane(){return this.$store.state.panes.panes[this.paneId]}mounted(){this.$el.id=this.paneId,this.refreshZoom(),this.$nextTick(()=>{const t=this.$el.clientWidth;"function"===typeof this.onResize&&this.onResize(t,this.$el.clientHeight,!0)}),this.$el.addEventListener("mousedown",this.focusPane)}beforeDestroy(){this.$el.removeEventListener("mousedown",this.focusPane),this._onStoreMutation&&this._onStoreMutation()}refreshZoom(){this.$store.dispatch("panes/refreshZoom",this.paneId)}focusPane(){this.$store.commit("app/SET_FOCUSED_PANE",this.paneId)}};o=Object(i["a"])([Object(n["b"])({props:{paneId:{required:!0,type:String}}})],o),e["a"]=o},"34d5":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"pane-trades"},[e("pane-header",{ref:"paneHeader",attrs:{paneId:t.paneId,settings:()=>s.e("chunk-5af9f071").then(s.bind(null,"34c1"))}},[e("dropdown",{attrs:{interactive:"","no-scroll":""},model:{value:t.sliderDropdownTrigger,callback:function(e){t.sliderDropdownTrigger=e},expression:"sliderDropdownTrigger"}},[e("slider",{staticStyle:{width:"100px"},attrs:{min:0,max:10,step:.01,label:"","show-completion":!1,gradient:t.gradient,value:t.thresholdsMultipler,log:""},on:{input:function(e){return t.$store.commit(t.paneId+"/SET_THRESHOLDS_MULTIPLER",{value:e,market:t.market})},reset:function(e){return t.$store.commit(t.paneId+"/SET_THRESHOLDS_MULTIPLER",{value:1,market:t.market})}}})],1),e("button",{staticClass:"toolbar__label",attrs:{name:t.paneId},on:{click:function(e){t.sliderDropdownTrigger=t.sliderDropdownTrigger?null:e.currentTarget}}},[e("i",{staticClass:"icon-gauge"})])],1),e("div",{ref:"tradesContainer",staticClass:"trades-list",class:["hide-scrollbar",this.showLogos&&"-logos",!this.monochromeLogos&&"-logos-colors"]}),t.showPlaceholder?e("trades-placeholder",{attrs:{paneId:t.paneId}}):t._e()],1)},a=[],n=s("9ab4"),o=s("60a3"),r=s("a914"),h=s("0613"),d=s("28f3"),l=s("be31");class c{constructor(){this.cache={},this.promisesOfGifs={},setTimeout(this.cleanExpiredGifs.bind(this),6e4+6e4*Math.random())}async cleanExpiredGifs(){const t=await l["a"].getGifsKeywords(),e=Date.now();for(const s of t){if(this.cache[s])continue;const t=Object(d["x"])(s),i=await l["a"].getGifs(t);(!i||e-i.timestamp>=6048e5)&&this.deleteGifs(s)}}forgetGifs(t){this.cache[t]&&(h["b"].dispatch("app/showNotice",{title:"Forgeting "+this.cache[t].length+' gifs about "'+t+'"',type:"info"}),delete this.cache[t])}async deleteGifs(t){const e=Object(d["x"])(t);await l["a"].deleteGifs(e),h["b"].dispatch("app/showNotice",{title:'Removed gifs about "'+t+'"',type:"info"})}async getGifs(t,e){if(!t)return;if(this.cache[t])return this.cache[t];if(this.promisesOfGifs[t])return this.promisesOfGifs[t];const s=Object(d["x"])(t);return this.promisesOfGifs[t]=l["a"].getGifs(s).then(s=>(delete this.promisesOfGifs[t],s&&Date.now()-s.timestamp<6048e5?(this.cache[t]=s.data,s.data):this.fetchGifByKeyword(t,e))),this.promisesOfGifs[t]}async fetchGifByKeyword(t,e){if(!t)return;const s=Object(d["x"])(t);return fetch("https://api.giphy.com/v1/gifs/search?q="+t+"&rating=r&limit=100&api_key=b5Y5CZcpj9spa0xEfskQxGGnhChYt3hi").then(t=>t.json()).then(async i=>{if(i.data&&i.data.length){this.cache[t]=[];for(const e of i.data)this.cache[t].push(e.images.downsized.url);return e&&h["b"].dispatch("app/showNotice",{title:"Fetched "+this.cache[t].length+" "+t+" gifs",type:"success"}),await l["a"].saveGifs({slug:s,keyword:t,timestamp:Date.now(),data:this.cache[t]}),this.cache[t]}}).finally(()=>{delete this.promisesOfGifs[t]})}}var p=new c,u=s("024c"),m=s("8c91"),g=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"trades-placeholder hide-scrollbar"},[e("p",{staticClass:"trades-placeholder__dimmed"},[t._v(t._s(t.filterRecap))]),t.exchangesReady?[t.showMore?e("pre",{domProps:{textContent:t._s(t.paneMarketStringified)}}):e("div",{staticClass:"pl16 pr16"},t._l(t.pairs,(function(s,i){return e("button",{key:i,staticClass:"btn mx4 -small",attrs:{disabled:""}},[t._v(" "+t._s(s)+" ")])})),0),e("button",{staticClass:"mt8 btn -text trades-placeholder__dimmed -small",on:{click:t.toggleShowMore}},[t._v(" "+t._s(t.showMore?"Show less":"Show more")+" ")])]:e("p",[t._v("...")])],2)},f=[],b=s("06c2");let T=class extends o["c"]{constructor(){super(...arguments),this.showMore=!1}get exchangesReady(){return this.$store.state.app.isExchangesReady}get paneMarkets(){return this.$store.state.panes.panes[this.paneId].markets}get paneMarketStringified(){return this.paneMarkets.join("\n")}get pairs(){const t=this.$store.state.settings.searchTypes.mergeUsdt;return this.paneMarkets.reduce((e,s)=>{const i=this.$store.state.panes.marketsListeners[s];let a=i?i.local:s;return t&&(a=Object(b["o"])(a)),-1===e.indexOf(a)&&e.push(a),e},[])}get tradesThresholds(){return this.$store.state[this.paneId].thresholds}get liquidationsThresholds(){return this.$store.state[this.paneId].liquidations}get showTrades(){return this.$store.state[this.paneId].showTrades}get showLiquidations(){return this.$store.state[this.paneId].showLiquidations}get filterRecap(){const t=this.tradesThresholds[0].amount,e=this.liquidationsThresholds[0].amount;return this.showTrades&&this.showLiquidations?`Waiting for trades or liquidations > ${Object(b["c"])(t)} / ${Object(b["c"])(e)}`:this.showTrades?"Waiting for trades > "+Object(b["c"])(t):"Waiting for liquidations > "+Object(b["c"])(e)}toggleShowMore(){this.showMore=!this.showMore;const t=document.activeElement;t&&t.blur()}};T=Object(n["a"])([Object(o["a"])({name:"TradesPlaceholder",props:{paneId:{type:String,required:!0}}})],T);var _=T,w=_,I=(s("a53d"),s("2877")),y=Object(I["a"])(w,g,f,!1,null,null,null),v=y.exports,L=s("4902"),E=s("fa07");class x{constructor(t,e,s){this.paneId=t,this.containerElement=e,this.count=0,this.maxCount=s,this.cachePreferences(),this.cachePaneMarkets(),this.loadGifs(),this.prepareColors(),this.cacheAudio()}processTrades(t){let e="";for(let s=0;s<t.length;s++){const i=t[s].exchange+":"+t[s].pair;if(!this.paneMarkets[i])continue;const a=t[s];"undefined"!==typeof this.marketsMultipliers[i]&&(a.amount/=this.marketsMultipliers[i]),!a.liquidation&&this.showTrades?a.amount>=this.minimumTradeAmount&&a.amount<this.maximumTradeAmount?e+=this.showTrade(a,i,this.tradesColors,this.tradesAudios,this.significantTradeAmount):a.amount>this.audioThreshold&&a.amount<this.maximumTradeAmount&&this.tradesAudios[0][a.side](L["d"],a.amount/this.significantTradeAmount):a.liquidation&&this.showLiquidations&&(a.amount>=this.minimumLiquidationAmount&&a.amount<this.maximumLiquidationAmount?e+=this.showTrade(a,i,this.liquidationsColors,this.liquidationsAudios,this.significantLiquidationAmount):a.amount>this.audioThreshold&&a.amount<this.maximumLiquidationAmount&&this.liquidationsAudios[0][a.side](L["d"],a.amount/this.significantLiquidationAmount))}return!!e.length&&(this.containerElement.insertAdjacentHTML("afterbegin",e),this.trim(),!0)}processTradesSilent(t){const e=this.audioThreshold,s=this.showGifs;this.audioThreshold=1/0,this.showGifs=!1,this.processTrades(t),this.audioThreshold=e,this.showGifs=s}getTradeInlineStyles(t,e,s){const i=(Math.max(t.amount,e.from)-e.from)/e.range,a=Math.min(1,t.amount/s),n=e[t.side];let o="";if(this.showGifs&&e[t.side].gif){const s=e[t.side].gif;p.cache[s]&&(o=`background-image:url('${p.cache[s][Math.floor(Math.random()*(p.cache[s].length-1))]}')`)}const r=n[(i<.5?"from":"to")+"Luminance"],h=Object(E["d"])(n.from,n.to,i);let d;return d=r>(o?.15:.33)?"rgba(0, 0, 0, "+Math.min(1,.33+a)+")":"rgba(255, 255, 255, "+Math.min(1,.33+a)+")",`background-color:rgb(${h[0]}, ${h[1]}, ${h[2]});color:${d};${o}`}showTrade(t,e,s,i,a){let n=this.maxLevel,o=s[n];for(n=0;n<s.length;n++)if(t.amount<s[n].to){o=s[n];break}return n<s.length&&t.amount>this.audioThreshold&&i[n][t.side](L["d"],t.amount/a),this.count++,this.renderRow(t,e,o,a)}renderRow(t,e,s,i){let a="",n="";if(t.timestamp!==this.lastTimestamp&&(a=" -timestamp",this.lastTimestamp=t.timestamp,!this.showTimeAgo)){const e=new Date(+t.timestamp);n=e.getHours()+":"+e.getMinutes(),a+=" -fixed"}let o="";this.slippageMode&&t.slippage&&(o=`<small>${t.slippage>0?"+":""}${t.slippage}${"bps"===this.slippageMode?" bps":""}</small>`);let r="";this.showLogos||(r=t.exchange.replace("_"," "));let h="";const d=t.side;(t.liquidation||d!==this.lastSide)&&(h=" icon-side",this.lastSide=d);let l="";return this.showPairs&&(l=`<div class="trade__pair">${t.pair.replace("_"," ")}</div>`),`<li class="trade -${t.exchange} -${t.side} -level-${s.level}${t.liquidation?" -liquidation":""}" title="${t.exchange}:${t.pair}" style="${this.getTradeInlineStyles(t,s,i)}">\n    <div class="trade__side${h}"></div>\n    <div class="trade__exchange">${r}</div>\n    ${l}\n    ${this.showPrices?`<div class="trade__price">${Object(b["d"])(t.price,e)}${o}</div>`:""}\n    <div class="trade__amount">\n      <span class="trade__amount__quote">\n        <span class="icon-quote"></span>\n        <span>${Object(b["c"])(t.size*t.price)}</span>\n      </span>\n      <span class="trade__amount__base">\n        <span class="icon-base"></span>\n        <span>${Object(b["c"])(t.size)}</span>\n      </span>\n    </div>\n    <div class="trade__time ${a}" data-timestamp="${t.timestamp.toString()}">${n}</div>\n    </li>`}getTradesThesholds(){return h["b"].state[this.paneId].thresholds}getLiquidationsThresholds(){return h["b"].state[this.paneId].liquidations}async loadGifs(){this.loadThresholdsGifs(this.getTradesThesholds()),this.loadThresholdsGifs(this.getLiquidationsThresholds())}async loadThresholdsGifs(t){for(const e of t)e.buyGif&&p.getGifs(e.buyGif),e.sellGif&&p.getGifs(e.sellGif)}prepareColors(){const t=this.getTradesThesholds(),e=this.getLiquidationsThresholds(),s=Object(E["b"])();this.tradesColors=this.prepareColorsThresholds(t,s),this.liquidationsColors=this.prepareColorsThresholds(e,s),this.maxLevel=t.length-1,this.minimumTradeAmount=t[0].amount,this.significantTradeAmount=t[1].amount,t[t.length-1].max?this.maximumTradeAmount=t[t.length-1].amount:this.maximumTradeAmount=1/0,this.minimumLiquidationAmount=e[0].amount,this.significantLiquidationAmount=e[1].amount,e[e.length-1].max?this.maximumLiquidationAmount=e[e.length-1].amount:this.maximumLiquidationAmount=1/0}prepareColorsThresholds(t,e){const s=[],i=t.length;for(let a=0;a<i;a++){if(a===i-1){s.push({...s[s.length-1],max:1/0});break}const n=Object(E["l"])(t[a].buyColor,e),o=Object(E["l"])(t[a+1].buyColor,e),r=Object(E["l"])(t[a].sellColor,e),h=Object(E["l"])(t[a+1].sellColor,e);s.push({from:t[a].amount,to:t[a+1].amount,range:t[a+1].amount-t[a].amount,level:Math.floor(a/(i-1)*4),max:a===i-1&&t[a+1].max,buy:{from:n,to:o,fromLuminance:Object(E["e"])(n,e),toLuminance:Object(E["e"])(o,e),gif:t[a].buyGif},sell:{from:r,to:h,fromLuminance:Object(E["e"])(r,e),toLuminance:Object(E["e"])(h,e),gif:t[a].sellGif}})}return s}async cacheAudio(t=!0){const e=h["b"].state[this.paneId].audioThreshold;if(h["b"].state.settings.useAudio&&!h["b"].state[this.paneId].muted&&0!==h["b"].state[this.paneId].audioVolume){if(e?"string"===typeof e&&/\d\s*%$/.test(e)?this.audioThreshold=this.minimumTradeAmount*(parseFloat(e)/100):this.audioThreshold=+e:this.audioThreshold=.1*this.minimumTradeAmount,!this.tradesAudios||t){const t=h["b"].state[this.paneId].audioPitch;this.tradesAudios=await this.cacheAudioThresholds(this.getTradesThesholds(),t),this.liquidationsAudios=await this.cacheAudioThresholds(this.getLiquidationsThresholds(),t)}}else this.audioThreshold=1/0}async cacheAudioThresholds(t,e){const s=[];for(let i=0;i<t.length;i++)s.push({buy:await L["d"].buildAudioFunction(t[i].buyAudio,"buy",e),sell:await L["d"].buildAudioFunction(t[i].sellAudio,"sell",e)});return s}cachePreferences(){this.slippageMode=h["b"].state.settings.calculateSlippage,this.showTrades=h["b"].state[this.paneId].showTrades,this.showLiquidations=h["b"].state[this.paneId].showLiquidations,this.showGifs=!h["b"].state.settings.disableAnimations,this.showLogos=h["b"].state[this.paneId].showLogos,this.showPairs=h["b"].state[this.paneId].showPairs,this.showPrices=h["b"].state[this.paneId].showPrices,this.showTimeAgo=h["b"].state[this.paneId].showTimeAgo,this.showTimeAgo&&!this.timeUpdateInterval?this.setupTimeUpdateInterval():!this.showTimeAgo&&this.timeUpdateInterval&&(clearInterval(this.timeUpdateInterval),this.timeUpdateInterval=null)}cachePaneMarkets(){this.marketsMultipliers={},this.paneMarkets=h["b"].state.panes.panes[this.paneId].markets.reduce((t,e)=>{const[s]=e.split(":");if(!h["b"].state.app.activeExchanges[s])return t[e]=!1,t;const i=h["b"].state[this.paneId].multipliers[e];return"undefined"!==typeof i&&(this.marketsMultipliers[e]=i),t[e]=!0,t},{})}setupTimeUpdateInterval(){let t;const e=t=>t<6e4?Math.floor(t/1e3)+"s":t<36e5?Math.floor(t/6e4)+"m":Math.floor(t/36e5)+"h";this.timeUpdateInterval=setInterval(()=>{const s=this.containerElement.getElementsByClassName("-timestamp"),i=s.length;if(!i)return;t=Date.now();const a=t/1e3%60<1;let n;for(let o=0;o<i;o++){if("undefined"===typeof s[o])break;const i=t-s[o].getAttribute("data-timestamp"),r=e(i);if(r===n&&r)s[o-1].textContent="",s[o-1].className="trade__time";else{if(r!=s[o].textContent&&(s[o].textContent=r,!a&&"s"!==r[r.length-1]))break;n=r}}},1e3)}setMaxCount(t){this.maxCount=t}trim(){while(this.count>this.maxCount)this.containerElement.removeChild(this.containerElement.lastChild),this.count--}clear(){this.containerElement.innerHTML="",this.count=0}destroy(){clearInterval(this.timeUpdateInterval)}}var $=s("7ab0");let O=class extends(Object(o["b"])(u["a"])){constructor(){super(...arguments),this.showPlaceholder=!0,this.sliderDropdownTrigger=null}get market(){return this.pane.markets[0]}get showLogos(){return this.$store.state[this.paneId].showLogos}get monochromeLogos(){return this.$store.state[this.paneId].monochromeLogos}get thresholdsMultipler(){return this.$store.state[this.paneId].thresholdsMultipler}get gradient(){return[this.$store.state[this.paneId].thresholds[0].buyColor,this.$store.state[this.paneId].thresholds[this.$store.state[this.paneId].thresholds.length-1].buyColor]}created(){r["a"].on("trades",this.onTrades),this._onStoreMutation=this.$store.subscribe(t=>{switch(t.type){case"app/EXCHANGE_UPDATED":case"settings/TOGGLE_SLIPPAGE":case this.paneId+"/TOGGLE_PREFERENCE":this.feed.cachePreferences(),this.refreshList();break;case this.paneId+"/SET_MAX_ROWS":this.feed.setMaxCount(t.payload);break;case"panes/SET_PANE_MARKETS":case this.paneId+"/SET_THRESHOLD_MULTIPLIER":"panes/SET_PANE_MARKETS"===t.type&&t.payload.id!==this.paneId||(this.feed.cachePaneMarkets(),this.refreshList());break;case this.paneId+"/SET_THRESHOLD_GIF":p.getGifs(t.payload.value,!0),this.feed.prepareColors(),this.refreshList();break;case this.paneId+"/SET_THRESHOLD_AUDIO":case this.paneId+"/SET_AUDIO_VOLUME":case this.paneId+"/SET_AUDIO_PITCH":case"settings/SET_AUDIO_VOLUME":case"settings/TOGGLE_AUDIO":this.feed.cacheAudio();break;case this.paneId+"/SET_AUDIO_THRESHOLD":case this.paneId+"/TOGGLE_MUTED":this.feed.cacheAudio(!1);break;case"settings/SET_BACKGROUND_COLOR":case this.paneId+"/SET_THRESHOLD_COLOR":case this.paneId+"/SET_THRESHOLD_AMOUNT":case this.paneId+"/SET_THRESHOLDS_MULTIPLER":case this.paneId+"/TOGGLE_THRESHOLD_MAX":case this.paneId+"/DELETE_THRESHOLD":case this.paneId+"/ADD_THRESHOLD":this.feed.prepareColors(),this.refreshList(),(t.type===this.paneId+"/DELETE_THRESHOLD"||(this.paneId,1))&&this.feed.cacheAudio();break}})}mounted(){this.feed=new x(this.paneId,this.$refs.tradesContainer,this.$store.state[this.paneId].maxRows)}beforeDestroy(){r["a"].off("trades",this.onTrades),this.feed&&this.feed.destroy()}onTrades(t){this.feed.processTrades(t)===this.showPlaceholder&&(this.showPlaceholder=!1)}refreshList(){const t=this.$el.getElementsByClassName("trade"),e=[];for(const i of t){var s;const[t,a]=Object(b["m"])(i.getAttribute("title")),n=i.querySelector(".trade__time").getAttribute("data-timestamp"),o=parseFloat(null===(s=i.querySelector(".trade__price"))||void 0===s?void 0:s.innerText)||0,r=parseFloat(i.querySelector(".trade__amount__base").innerText)||0,h=i.classList.contains("-buy")?"buy":"sell",d=r*(this.$store.state.settings.preferQuoteCurrencySize?o:1),l={timestamp:n,exchange:t,pair:a,price:o,amount:d,size:r,side:h};i.classList.contains("-liquidation")&&(l.liquidation=!0),e.push(l)}this.feed.clear(),this.feed.processTradesSilent(e)}};O=Object(n["a"])([Object(o["a"])({components:{PaneHeader:m["a"],TradesPlaceholder:v,Slider:$["a"]},name:"Trades"})],O);var C=O,A=C,S=(s("76fc"),Object(I["a"])(A,i,a,!1,null,null,null));e["default"]=S.exports},"63a9":function(t,e,s){},"76fc":function(t,e,s){"use strict";s("90d1")},"8c91":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"pane-header hide-scrollbar pane-overlay d-flex",class:{"-loading":t.loading}},[e("span",{staticClass:"pane-header__name mrauto",on:{dblclick:t.renamePane}},[t._v(t._s(t.name))]),e("div",{staticClass:"toolbar flex-grow-1",on:{dblclick:t.maximizePane}},[t._t("default"),e("button",{staticClass:"btn toolbar__label toolbar__label--768 -text",attrs:{type:"button"},on:{click:t.openSearch}},[e("i",{staticClass:"icon-search"})]),t.settings?e("btn",{staticClass:"toolbar__label toolbar__label--768 -text",attrs:{type:"button",loading:t.isLoading},on:{click:t.openSettings}},[e("i",{staticClass:"icon-cog"})]):t._e(),e("button",{staticClass:"toolbar__label",attrs:{type:"button"},on:{click:t.toggleDropdown}},[e("i",{staticClass:"icon-more"})]),e("dropdown",{model:{value:t.paneDropdownTrigger,callback:function(e){t.paneDropdownTrigger=e},expression:"paneDropdownTrigger"}},[e("div",{staticClass:"d-flex btn-group"},[e("button",{staticClass:"btn -green",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.changeZoom(e,-1)}}},[e("i",{staticClass:"icon-minus"})]),e("button",{staticClass:"btn -green text-monospace flex-grow-1 text-center",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.resetZoom.apply(null,arguments)}}},[t._v(" × "+t._s(t.zoom.toFixed(2))+" ")]),e("button",{staticClass:"btn -green",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.changeZoom(e,1)}}},[e("i",{staticClass:"icon-plus"})])]),t._t("menu"),null!==t.settings?e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.openSettings}},[e("i",{staticClass:"icon-cog"}),e("span",[t._v("Settings")])]):t._e(),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(e){return t.$store.dispatch("app/showSearch",t.paneId)}}},[e("i",{staticClass:"icon-search"}),e("span",[t._v("Sources")])]),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.maximizePane}},[e("i",{staticClass:"icon-enlarge"}),e("span",[t._v("Maximize")])]),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.duplicatePane}},[e("i",{staticClass:"icon-copy-paste"}),e("span",[t._v("Duplicate")])]),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.downloadPane}},[e("i",{staticClass:"icon-download"}),e("span",[t._v("Download")])]),e("div",{staticClass:"dropdown--divider"}),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.removePane}},[e("i",{staticClass:"icon-trash"}),e("span",[t._v("Remove")])])],2)],2)])},a=[],n=s("9ab4"),o=s("2b0e"),r=s("2fe1"),h=s("017a"),d=s("28f3"),l=s("0c01");let c=class extends o["default"]{constructor(){super(...arguments),this.paneDropdownTrigger=null,this.isLoading=!1}get zoom(){return this.$store.state.panes.panes[this.paneId].zoom||1}get type(){return this.$store.state.panes.panes[this.paneId].type}get name(){const t=this.$store.state.panes.panes[this.paneId].name,e=this.$store.state.panes.marketsListeners[this.$store.state.panes.panes[this.paneId].markets[0]];return t||(e?e.local:this.type)}openSearch(){this.$store.dispatch("app/showSearch",this.paneId)}changeZoom(t,e){const s=this.zoom+(t.shiftKey?.0625:.125)*e;this.$store.dispatch("panes/setZoom",{id:this.paneId,zoom:s}),this.$emit("zoom",s)}resetZoom(){this.$store.dispatch("panes/setZoom",{id:this.paneId,zoom:1}),this.$emit("zoom",1)}async removePane(){await l["a"].confirm(`Delete pane "${this.paneId}" ?`)&&this.$store.dispatch("panes/removePane",this.paneId)}duplicatePane(){this.$store.dispatch("panes/duplicatePane",this.paneId)}highlightPane(t){this.$el.parentElement.parentElement.classList[t?"add":"remove"]("-highlight")}maximizePane(t){if("dblclick"===t.type&&t.currentTarget!==t.target)return;const e=this.$el.parentElement.parentElement,s=e.classList.toggle("-maximized"),i=Object(d["o"])(e);for(const n of i)n.getAttribute("type")&&(n.classList.remove("-maximized"),n.style.display=s?"none":"block");const a=Event;window.dispatchEvent(new a("resize"))}async renamePane(){const t=await l["a"].prompt({action:"Rename",input:this.name});t!==this.name&&this.$store.commit("panes/SET_PANE_NAME",{id:this.paneId,name:t})}async downloadPane(){Object(d["f"])({name:`${this.type}:${this.paneId}`,type:this.type,data:this.$store.state[this.paneId],createdAt:Date.now(),updatedAt:null},Object(d["x"])(this.paneId))}toggleDropdown(t){this.paneDropdownTrigger?this.paneDropdownTrigger=null:this.paneDropdownTrigger=t.currentTarget}async openSettings(){this.settings&&(this.isLoading=!0,l["a"].open((await this.settings()).default,{paneId:this.paneId}),this.isLoading=!1)}};c=Object(n["a"])([Object(r["b"])({name:"PaneHeader",props:{paneId:{type:String},settings:{type:Function,default:null},loading:{type:Boolean,default:!1}},components:{Btn:h["a"]}})],c);var p=c,u=p,m=s("2877"),g=Object(m["a"])(u,i,a,!1,null,null,null);e["a"]=g.exports},"90d1":function(t,e,s){},a53d:function(t,e,s){"use strict";s("63a9")}}]);