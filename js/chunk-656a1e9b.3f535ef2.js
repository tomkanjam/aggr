(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-656a1e9b"],{"024c":function(t,e,s){"use strict";var a=s("9ab4"),i=s("2b0e"),o=s("2fe1");let n=class extends i["default"]{get pane(){return this.$store.state.panes.panes[this.paneId]}mounted(){this.$el.id=this.paneId,this.refreshZoom(),this.$nextTick(()=>{const t=this.$el.clientWidth;"function"===typeof this.onResize&&this.onResize(t,this.$el.clientHeight,!0)}),this.$el.addEventListener("mousedown",this.focusPane)}beforeDestroy(){this.$el.removeEventListener("mousedown",this.focusPane),this._onStoreMutation&&this._onStoreMutation()}refreshZoom(){this.$store.dispatch("panes/refreshZoom",this.paneId)}focusPane(){this.$store.commit("app/SET_FOCUSED_PANE",this.paneId)}};n=Object(a["a"])([Object(o["b"])({props:{paneId:{required:!0,type:String}}})],n),e["a"]=n},"0bb8":function(t,e,s){"use strict";s("2182")},2182:function(t,e,s){},"8c91":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"pane-header hide-scrollbar pane-overlay d-flex",class:{"-loading":t.loading}},[e("span",{staticClass:"pane-header__name mrauto",on:{dblclick:t.renamePane}},[t._v(t._s(t.name))]),e("div",{staticClass:"toolbar flex-grow-1",on:{dblclick:t.maximizePane}},[t._t("default"),e("button",{staticClass:"btn toolbar__label toolbar__label--768 -text",attrs:{type:"button"},on:{click:t.openSearch}},[e("i",{staticClass:"icon-search"})]),t.settings?e("btn",{staticClass:"toolbar__label toolbar__label--768 -text",attrs:{type:"button",loading:t.isLoading},on:{click:t.openSettings}},[e("i",{staticClass:"icon-cog"})]):t._e(),e("button",{staticClass:"toolbar__label",attrs:{type:"button"},on:{click:t.toggleDropdown}},[e("i",{staticClass:"icon-more"})]),e("dropdown",{model:{value:t.paneDropdownTrigger,callback:function(e){t.paneDropdownTrigger=e},expression:"paneDropdownTrigger"}},[e("div",{staticClass:"d-flex btn-group"},[e("button",{staticClass:"btn -green",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.changeZoom(e,-1)}}},[e("i",{staticClass:"icon-minus"})]),e("button",{staticClass:"btn -green text-monospace flex-grow-1 text-center",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.resetZoom.apply(null,arguments)}}},[t._v(" × "+t._s(t.zoom.toFixed(2))+" ")]),e("button",{staticClass:"btn -green",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.changeZoom(e,1)}}},[e("i",{staticClass:"icon-plus"})])]),t._t("menu"),null!==t.settings?e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.openSettings}},[e("i",{staticClass:"icon-cog"}),e("span",[t._v("Settings")])]):t._e(),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(e){return t.$store.dispatch("app/showSearch",t.paneId)}}},[e("i",{staticClass:"icon-search"}),e("span",[t._v("Sources")])]),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.maximizePane}},[e("i",{staticClass:"icon-enlarge"}),e("span",[t._v("Maximize")])]),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.duplicatePane}},[e("i",{staticClass:"icon-copy-paste"}),e("span",[t._v("Duplicate")])]),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.downloadPane}},[e("i",{staticClass:"icon-download"}),e("span",[t._v("Download")])]),e("div",{staticClass:"dropdown--divider"}),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.removePane}},[e("i",{staticClass:"icon-trash"}),e("span",[t._v("Remove")])])],2)],2)])},i=[],o=s("9ab4"),n=s("2b0e"),r=s("2fe1"),c=s("017a"),l=s("28f3"),p=s("0c01");let h=class extends n["default"]{constructor(){super(...arguments),this.paneDropdownTrigger=null,this.isLoading=!1}get zoom(){return this.$store.state.panes.panes[this.paneId].zoom||1}get type(){return this.$store.state.panes.panes[this.paneId].type}get name(){const t=this.$store.state.panes.panes[this.paneId].name,e=this.$store.state.panes.marketsListeners[this.$store.state.panes.panes[this.paneId].markets[0]];return t||(e?e.local:this.type)}openSearch(){this.$store.dispatch("app/showSearch",this.paneId)}changeZoom(t,e){const s=this.zoom+(t.shiftKey?.0625:.125)*e;this.$store.dispatch("panes/setZoom",{id:this.paneId,zoom:s}),this.$emit("zoom",s)}resetZoom(){this.$store.dispatch("panes/setZoom",{id:this.paneId,zoom:1}),this.$emit("zoom",1)}async removePane(){await p["a"].confirm(`Delete pane "${this.paneId}" ?`)&&this.$store.dispatch("panes/removePane",this.paneId)}duplicatePane(){this.$store.dispatch("panes/duplicatePane",this.paneId)}highlightPane(t){this.$el.parentElement.parentElement.classList[t?"add":"remove"]("-highlight")}maximizePane(t){if("dblclick"===t.type&&t.currentTarget!==t.target)return;const e=this.$el.parentElement.parentElement,s=e.classList.toggle("-maximized"),a=Object(l["o"])(e);for(const o of a)o.getAttribute("type")&&(o.classList.remove("-maximized"),o.style.display=s?"none":"block");const i=Event;window.dispatchEvent(new i("resize"))}async renamePane(){const t=await p["a"].prompt({action:"Rename",input:this.name});t!==this.name&&this.$store.commit("panes/SET_PANE_NAME",{id:this.paneId,name:t})}async downloadPane(){Object(l["f"])({name:`${this.type}:${this.paneId}`,type:this.type,data:this.$store.state[this.paneId],createdAt:Date.now(),updatedAt:null},Object(l["x"])(this.paneId))}toggleDropdown(t){this.paneDropdownTrigger?this.paneDropdownTrigger=null:this.paneDropdownTrigger=t.currentTarget}async openSettings(){this.settings&&(this.isLoading=!0,p["a"].open((await this.settings()).default,{paneId:this.paneId}),this.isLoading=!1)}};h=Object(o["a"])([Object(r["b"])({name:"PaneHeader",props:{paneId:{type:String},settings:{type:Function,default:null},loading:{type:Boolean,default:!1}},components:{Btn:c["a"]}})],h);var u=h,d=u,m=s("2877"),g=Object(m["a"])(d,a,i,!1,null,null,null);e["a"]=g.exports},"92b4":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("dropdown-button",{attrs:{options:["none","price","volume","delta","change"]},on:{input:function(e){return t.selectSortType(e)}},model:{value:t.sortType,callback:function(e){t.sortType=e},expression:"sortType"}})},i=[],o=s("9ab4"),n=s("60a3"),r=s("3918");let c=class extends n["c"]{get sortType(){return this.$store.state[this.paneId].sortType}get sortOrder(){return this.$store.state[this.paneId].sortOrder}selectSortType(t){t===this.sortType&&this.$store.commit(this.paneId+"/TOGGLE_SORT_ASC"),this.$store.commit(this.paneId+"/SET_SORT_TYPE",t)}};c=Object(o["a"])([Object(n["a"])({name:"PricesSortDropdown",components:{DropdownButton:r["a"]},props:{paneId:{type:String,required:!0},buttonClass:{type:String,default:"-text -arrow"}}})],c);var l=c,p=l,h=s("2877"),u=Object(h["a"])(p,a,i,!1,null,null,null);e["a"]=u.exports},daa3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"pane-prices",on:{mouseenter:function(e){t.pauseSort=!0},mouseleave:function(e){t.pauseSort=!1}}},[e("pane-header",{attrs:{paneId:t.paneId,settings:()=>s.e("chunk-423a7a69").then(s.bind(null,"0be0"))}},[e("prices-sort-dropdown",{staticClass:"toolbar__label -arrow -text",attrs:{"pane-id":t.paneId}})],1),e("div",{staticClass:"markets-bar__wrapper hide-scrollbar"},[e(t.animateSort?"transition-group":"div",{tag:"component",staticClass:"markets-bar hide-scrollbar pane",class:["horizontal"===t.mode&&"-horizontal"],attrs:{name:t.transitionGroupName,tag:"div"}},t._l(t.markets,(function(s){return e("div",{key:s.id,staticClass:"market",class:s.status,attrs:{title:s.id}},[e("div",{staticClass:"market__exchange",class:s.exchange}),t.showPairs?e("div",{staticClass:"market__pair"},[t._v(t._s(s.local))]):t._e(),t.showPrice?e("div",{staticClass:"market__price"},[t._v(t._s(s.price))]):t._e(),t.showChange?e("div",{staticClass:"market__change"},[t._v(" "+t._s((s.change>=0?"+":"")+s.change.toFixed(2))+"% ")]):t._e(),t.showVolume?e("div",{staticClass:"market__volume"},[t._v(" "+t._s(t.formatAmount(s.volume,2))+" ")]):t._e(),t.showVolumeDelta?e("div",{staticClass:"market__volume"},[t._v(" "+t._s(t.formatAmount(s.volumeDelta,2))+" ")]):t._e()])})),0)],1)],1)},i=[],o=s("9ab4"),n=s("60a3"),r=s("92b4"),c=s("a914"),l=s("024c"),p=s("8c91"),h=s("06c2");let u=class extends(Object(n["b"])(l["a"])){constructor(){super(...arguments),this.mode="vertical",this.pauseSort=!1,this.markets=[]}marketChange(t,e){for(const s of e)-1===t.indexOf(s)&&this.removeMarketFromList(s);for(const s of t)if(-1===e.indexOf(s)){const[t,e]=Object(h["m"])(s);this.addMarketToList({id:s,exchange:t,pair:e})}}periodChange(t){t>0?this.periodReset():this.clearPeriodReset()}get exchanges(){return this.$store.state.exchanges}get disableAnimations(){return this.$store.state.settings.disableAnimations}get showPairs(){return this.$store.state[this.paneId].showPairs}get showChange(){return this.$store.state[this.paneId].showChange}get showPrice(){return this.$store.state[this.paneId].showPrice}get showVolume(){return this.$store.state[this.paneId].showVolume}get showVolumeDelta(){return this.$store.state[this.paneId].showVolumeDelta}get animateSort(){return this.$store.state[this.paneId].animateSort}get sortType(){return this.$store.state[this.paneId].sortType}get sortOrder(){return this.$store.state[this.paneId].sortOrder}get period(){return this.$store.state[this.paneId].period}get transitionGroupName(){return this.animateSort?"flip-list":null}created(){this._initialValues={},this._onStoreMutation=this.$store.watch(t=>[t[this.paneId].sortType,t[this.paneId].sortOrder],this.cacheSortFunction),this.cacheSortFunction(),this.refreshMarkets()}mounted(){c["a"].on("prices",this.updateMarkets)}beforeDestroy(){c["a"].off("prices",this.updateMarkets),this._resetTimeout&&clearTimeout(this._resetTimeout)}refreshMarkets(){this.markets=[];for(const t of this.pane.markets){const[e,s]=Object(h["m"])(t);this.addMarketToList({id:t,pair:s,exchange:e})}}updateMarkets(t){const e=this.showChange;for(const s of this.markets){const a=t[s.id];if(a&&a.volume!==s.volume){if(s.volume=a.volume-this._initialValues[s.id].volume,s.volumeDelta=a.volumeDelta-this._initialValues[s.id].volumeDelta,e&&a.price){const t=a.price-a.initialPrice-this._initialValues[s.id].change;s.change=t/a.price*100,s.status=t>0?"-up":"-down"}else null===a.price?s.status="-pending":s.price>a.price?s.status="-down":s.price<a.price?s.status="-up":s.status="-neutral";s.price=Object(h["d"])(a.price,s.id)}}this.pauseSort||null===this._sortFunction||(this.markets=this.markets.sort(this._sortFunction))}removeMarketFromList(t){this._initialValues[t]&&delete this._initialValues[t];const e=this.markets.indexOf(this.markets.find(e=>e.id===t));-1!==e&&this.markets.splice(e,1)}addMarketToList(t){this._initialValues[t.id]={change:0,volume:0,volumeDelta:0};const e=Object(h["h"])(t.exchange,t.pair);this.markets.push({...t,local:e.local,status:"-pending",price:null,change:0,volume:0,volumeDelta:0})}cacheSortFunction(){const t="horizontal"===this.mode?this.sortOrder>0?-1:1:this.sortOrder,e=this.sortType;e&&"none"!==e?("price"===e?this._sortFunction=1===t?(t,e)=>t.price-e.price:(t,e)=>e.price-t.price:"change"===e?this._sortFunction=1===t?(t,e)=>t.change-e.change:(t,e)=>e.change-t.change:"volume"===e?this._sortFunction=1===t?(t,e)=>t.volume-e.volume:(t,e)=>e.volume-t.volume:"delta"===e&&(this._sortFunction=1===t?(t,e)=>t.volumeDelta-e.volumeDelta:(t,e)=>e.volumeDelta-t.volumeDelta),this.markets=this.markets.sort(this._sortFunction)):this._sortFunction=null}formatAmount(t){return Object(h["c"])(t,2)}onResize(t,e){this.mode=t>3*e?"horizontal":"vertical"}getTimeToNextReset(){const t=Date.now(),e=1e3*this.period*60,s=Math.ceil(t/e)*e;return s-t}scheduleNextPeriodReset(){this._resetTimeout&&clearTimeout(this._resetTimeout),this._resetTimeout=setTimeout(this.periodReset.bind(this),this.getTimeToNextReset())}periodReset(){c["a"].once("prices",t=>{for(const e of this.markets)t[e.id]&&(this._initialValues[e.id].change=t[e.id].price-t[e.id].initialPrice,this._initialValues[e.id].volume=t[e.id].volume,this._initialValues[e.id].volumeDelta=t[e.id].volumeDelta);this.updateMarkets(t),this.period&&this.scheduleNextPeriodReset()})}clearPeriodReset(){for(const t in this._initialValues)this._initialValues[t].change=this._initialValues[t].volume=this._initialValues[t].volumeDelta=0;this._resetTimeout&&(clearTimeout(this._resetTimeout),this._resetTimeout=null)}};Object(o["a"])([Object(n["d"])("pane.markets")],u.prototype,"marketChange",null),Object(o["a"])([Object(n["d"])("period",{immediate:!0})],u.prototype,"periodChange",null),u=Object(o["a"])([Object(n["a"])({components:{PaneHeader:p["a"],PricesSortDropdown:r["a"]},name:"Prices"})],u);var d=u,m=d,g=(s("0bb8"),s("2877")),_=Object(g["a"])(m,a,i,!1,null,"19ffa956",null);e["default"]=_.exports}}]);