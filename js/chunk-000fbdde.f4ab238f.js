(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-000fbdde"],{7842:function(t,e,s){"use strict";s("c737")},c737:function(t,e,s){},e6b5:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"dialog",duration:500},on:{"after-leave":t.onHide,"after-enter":t.onShow}},[t.dialogOpened?e("Dialog",{staticClass:"connection-issue-dialog",attrs:{resizable:!1},on:{clickOutside:t.hide},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",[e("div",{staticClass:"dialog__title"},[e("i",{staticClass:"icon-warning -lower"}),t._v(" Connection issue ")])]),e("div",{staticClass:"column -center"})]},proxy:!0},{key:"footer",fn:function(){return[t.stepIndex?[t.stepIndex?e("button",{staticClass:"btn -text -large mrauto",attrs:{disabled:t.isTesting,type:"button"},on:{click:t.prev}},[t._v(" Back ")]):t._e(),t.stepIndex?e("button",{staticClass:"btn -green ml8 -large",attrs:{disabled:1===t.stepIndex&&!t.valid||t.isTesting,type:"button"},on:{click:t.next}},[t._v(" Next → ")]):t._e()]:[e("button",{staticClass:"btn -text mrauto",attrs:{type:"button"},on:{click:t.dismiss}},[t._v(" Dismiss ")]),e("button",{staticClass:"btn -text ml8 -large",attrs:{type:"button"},on:{click:t.next}},[t._v(" Troubleshoot ")])]]},proxy:!0}],null,!1,3046815621)},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("transition-height",{staticClass:"connection-issue-dialog__stepper",attrs:{stepper:"",name:"slide-fade-"+(t.isBack?"left":"right"),duration:500}},[0===t.stepIndex?e("div",{key:"step-0",staticClass:"connection-issue-dialog__step"},[e("p",{staticClass:"form-feedback mt0 mb0"},[t._v(" Can't connect to "+t._s(t.restrictedUrl)+". "),e("i",{directives:[{name:"tippy",rawName:"v-tippy",value:{boundary:"window",distance:24},expression:"{ boundary: 'window', distance: 24 }"}],staticClass:"icon-info -lower",attrs:{title:"Exchange API refused to connect<br>or blocked connection."}})])]):t._e(),1===t.stepIndex?e("div",{key:"step-1",staticClass:"connection-issue-dialog__step"},[e("div",[e("ToggableSection",{attrs:{model:t.sections,outline:"","auto-close":""},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Potential causes ")]},proxy:!0}],null,!1,2031791583)},[e("p",{staticClass:"-inline mb0 mt0"},[t._v(" The exchange API is unreachable due to "),e("span",{directives:[{name:"tippy",rawName:"v-tippy"}],attrs:{title:"Since the end of November\n            2022, Binance started rejecting API calls from US IPs."}},[t._v("geo restriction")]),t._v(" or something else. ")]),e("ol",{staticClass:"mb0"},[t.currentWsProxyUrl?e("li",[e("p",[t._v(" The current proxy URL might not be working"),e("br"),t._v(" Last used : "),e("code",[t._v(t._s(t.currentWsProxyUrl))])]),e("button",{staticClass:"btn -red mrauto -cases",attrs:{type:"button",disable:t.selectedAction},on:{click:t.deleteWsProxyUrl}},[e("i",{staticClass:"icon-eraser mr8"}),t._v(" Clear proxy URL ")])]):t._e(),e("li",[e("p",[t._v(" Disable all binance pairs so you won't see the issue anymore ")]),e("button",{staticClass:"btn -red -cases",attrs:{type:"button",disable:t.selectedAction},on:{click:t.disableExchange}},[e("i",{staticClass:"icon-cross mr8"}),t._v(" Disable  "),e("span",[t._v(t._s(t.exchangeId))]),e("i",{staticClass:"ml4",class:"icon-"+t.exchangeId})])]),e("li",[e("p",[t._v("Use a VPN")]),e("button",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"btn -green -cases",attrs:{type:"button",disable:t.selectedAction,title:"Retry connection with exchange"},on:{click:t.refreshExchange}},[e("i",{staticClass:"icon-refresh mr8"}),t._v(" I enabled my VPN ")])]),e("li",[e("p",[t._v("Connect through a proxy instead")]),e("button",{staticClass:"btn -green -cases",attrs:{type:"button",disable:t.selectedAction},on:{click:t.next}},[t._v(" I setup a proxy → ")])])])]),e("ToggableSection",{staticClass:"mb16",attrs:{model:t.sections,outline:"","auto-close":""},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Proxy install ")]},proxy:!0}],null,!1,1588870544)},[e("p",{staticClass:"mt0"},[t._v(" Since "),e("i",{staticClass:"-lower",class:"icon-"+t.exchangeId}),t._v(" "+t._s(t.exchangeId)+" is blocking your IP you may want to get realtime data from that exchange through a proxy located in an authorized country."),e("br"),e("br"),t._v("At the moment you will have to set it up yourself using a simple NodeJS script that you can download below. ")]),e("a",{attrs:{target:"_blank",href:"https://gist.github.com/Tucsky/91a9ed6bc6bb436ccf0c3e97b66c43eb"}},[e("i",{staticClass:"icon-download"}),e("span",{staticClass:"ml8"},[t._v("Download server code")])])])],1),e("button",{staticClass:"btn -red -cases -large w-100",attrs:{type:"button",disable:t.selectedAction},on:{click:t.disableExchange}},[e("i",{staticClass:"icon-cross"}),t._v("  "),e("i",{staticClass:"mrauto",class:"icon-"+t.exchangeId}),t._v(" Disable  "),e("span",[t._v(t._s(t.exchangeId))])]),e("div",{staticClass:"divider -horizontal",staticStyle:{display:"flex"}},[t._v("Or")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"proxyUrl"}},[t._v("Enter a proxy url")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.proxyUrl,expression:"proxyUrl"}],ref:"input",staticClass:"form-control",attrs:{id:"proxyUrl",name:"proxyUrl",type:"text",placeholder:"ws://localhost:3000"},domProps:{value:t.proxyUrl},on:{input:function(e){e.target.composing||(t.proxyUrl=e.target.value)}}})])]):2===t.stepIndex?e("div",{key:"step-3",staticClass:"connection-issue-dialog__step"},[e("p",{staticClass:"mx0 text-center text-muted"},[t._v("Connecting to")]),e("p",{staticClass:"mt0 text-center"},[e("code",[t._v(t._s(t.testUrl))])]),e("loader",{ref:"loader"}),e("p",{staticClass:"mb0 text-center text-muted"},[t._v("Please wait")])],1):t._e()])],1)]):t._e()],1)},n=[],a=s("1ea0"),o=s("fea2"),r=s("ec0e"),c=s("4bfa"),l=s("a914"),d=s("16f5"),h={name:"ConnectionIssueDialog",components:{TransitionHeight:o["a"],ToggableSection:r["a"],Loader:c["a"]},props:{exchangeId:{type:String},restrictedUrl:{type:String}},mixins:[a["a"]],data(){return{data:null,proxyUrl:"",isTesting:!1,selectedAction:null,isBack:!1,stepIndex:0,dialogOpened:!1,sections:[]}},computed:{currentWsProxyUrl(){return this.$store.state.settings.wsProxyUrl},valid(){return/wss?:\/\/.{3,}/.test(this.proxyUrl)},computedUrl(){const[t,e]=this.proxyUrl.split("?"),s=t.replace(/([^/])$/,"$1/");return e&&e.length?s+"?"+e+"&url=":s+"?url="},testUrl(){return this.computedUrl+this.restrictedUrl},contextId(){return this.exchangeId+this.restrictedUrl}},watch:{stepIndex(t,e){this.isBack=t<e,2===t&&this.test()}},created(){this.currentWsProxyUrl&&(this.proxyUrl=this.currentWsProxyUrl.replace(/(&|\?)url=/g,"")),l["a"].on("connection",this.onSubscribed)},beforeDestroy(){l["a"].off("connection",this.onSubscribed)},mounted(){this.data||this.show()},methods:{onSubscribed(t){t.url!==this.restrictedUrl&&t.url!==this.testUrl||this.hide()},show(){this.dialogOpened=!0},hide(t=null){this.isTesting||(this.data=t,this.dialogOpened=!1)},onShow(){},onHide(){this.close(this.data)},submit(){this.valid&&this.hide()},dismiss(){this.hide(),d["a"].dismiss(this.contextId,6048e5)},next(){1!==this.stepIndex||this.valid?this.stepIndex=Math.min(2,this.stepIndex+1):this.$refs.input.focus()},prev(){this.stepIndex=Math.max(0,this.stepIndex-1)},async disableExchange(){this.selectedAction="disable";try{await this.$store.dispatch("exchanges/toggleExchange",this.exchangeId),this.hide()}catch(t){this.$store.dispatch("app/showNotice",{title:t.message})}finally{this.selectedAction=null}},async refreshExchange(){this.selectedAction="disable";try{await this.$store.dispatch("exchanges/disconnect",this.exchangeId),await this.$store.dispatch("exchanges/connect",this.exchangeId),this.hide()}catch(t){this.$store.dispatch("app/showNotice",{title:t.message})}finally{this.selectedAction=null}},validate(){return!!this.valid},test(){if(!this.proxyUrl)return!1;this.isTesting=!0;const t=this.testUrl;return new Promise(e=>{const s=new WebSocket(t);let i,n,a;const o=()=>{s.removeEventListener("open",n),s.removeEventListener("error",a),s.removeEventListener("close",a),s.readyState<2&&s.close()};n=()=>{i=setTimeout(()=>{i=null,e(!0),o()},3e3)},a=()=>{i&&clearTimeout(i),setTimeout(()=>{e(!1),o()},1e3)},s.addEventListener("open",n),s.addEventListener("error",a),s.addEventListener("close",a)}).then(e=>(this.isTesting=!1,e?this.hide(this.computedUrl):(this.$store.dispatch("app/showNotice",{title:"Failed to open ws connection with "+t,type:"error"}),this.prev()),e))},deleteWsProxyUrl(){this.hide("")}}},p=h,u=(s("7842"),s("2877")),b=Object(u["a"])(p,i,n,!1,null,null,null);e["default"]=b.exports}}]);