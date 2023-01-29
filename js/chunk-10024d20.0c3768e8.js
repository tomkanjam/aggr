(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10024d20"],{"0c11":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("Dialog",{staticClass:"pane-dialog",on:{clickOutside:t.close},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"dialog__title -editable",domProps:{textContent:t._s(t.name)},on:{dblclick:t.renamePane}}),e("div",{staticClass:"column -center"})]},proxy:!0}])},[e("stats-settings",{attrs:{paneId:t.paneId}})],1)},n=[],i=a("1ea0"),r=a("1506"),c=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"settings-stats settings-section"},[e("div",{staticClass:"column mb16"},[e("div",{staticClass:"form-group -fill"},[e("label",[t._v("Window "),e("i",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"icon-info",attrs:{title:"Interval in which data is summed (ex: 1m)"}})]),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Window (minutes)"},domProps:{value:t.statsWindowStringified},on:{change:function(e){return t.$store.commit(t.paneId+"/SET_WINDOW",e.target.value)}}})]),e("div",{staticClass:"form-group -tight"},[e("label",{attrs:{for:""}},[t._v("Graph")]),e("label",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"bottom"},expression:"{ placement: 'bottom' }"}],staticClass:"checkbox-control checkbox-control-input flex-right",attrs:{title:"Enable graph"}},[e("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:t.enableChart},on:{change:function(e){return t.$store.commit(t.paneId+"/TOGGLE_CHART",e.target.checked)}}}),e("div")])])]),e("div",{staticClass:"column"},[e("i",{staticClass:"icon-bucket -center mr4"}),e("span",{staticClass:"-fill"},[t._v("BUCKETS ("+t._s(t.buckets.length)+")")]),e("a",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"-nowrap -text",attrs:{href:"javascript:void(0);",title:"Add a stat"},on:{click:function(e){return t.$store.dispatch(t.paneId+"/createBucket")}}},[t._v(" Add "),e("i",{staticClass:"icon-plus ml4 -lower"})])]),t._l(t.buckets,(function(a){return e("div",{key:a.id,staticClass:"column mt8"},[e("div",{staticClass:"form-group -tight"},[e("label",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"bottom"},expression:"{ placement: 'bottom' }"}],staticClass:"checkbox-control checkbox-control-input flex-right",attrs:{title:"Enable bucket"}},[e("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:a.enabled},on:{change:function(e){return t.$store.dispatch(t.paneId+"/updateBucket",{id:a.id,prop:"enabled",value:e.target.checked})}}}),e("div")])]),e("div",{staticClass:"form-group -fill -center"},[t._v(" "+t._s(a.name)+" ")]),e("div",{staticClass:"form-group -tight"},[e("button",{staticClass:"btn -green",on:{click:function(e){return t.openStat(a.id)}}},[e("i",{staticClass:"icon-edit"})])])])}))],2)},o=[],p=a("9ab4"),l=a("0c01"),d=a("2818"),u=a("60a3"),h=a("28f3");let m=class extends u["c"]{get enableChart(){return this.$store.state[this.paneId].enableChart}get buckets(){return Object.keys(this.$store.state[this.paneId].buckets).map(t=>this.$store.state[this.paneId].buckets[t])}get window(){return this.$store.state[this.paneId].window}get statsWindowStringified(){return Object(h["n"])(this.window||0)}openStat(t){l["a"].open(d["a"],{bucketId:t,paneId:this.paneId})}};m=Object(p["a"])([Object(u["a"])({name:"StatsSettings",props:{paneId:{type:String,required:!0}}})],m);var b=m,g=b,f=a("2877"),v=Object(f["a"])(g,c,o,!1,null,null,null),k=v.exports,C={components:{StatsSettings:k},mixins:[i["a"],r["a"]],data:()=>({renaming:!1}),methods:{}},I=C,w=Object(f["a"])(I,s,n,!1,null,null,null);e["default"]=w.exports},1506:function(t,e,a){"use strict";var s=a("9ab4"),n=a("0c01"),i=a("06c2"),r=a("be31"),c=a("bd60"),o=a("2b0e"),p=a("2fe1");let l=class extends o["default"]{get pane(){return this.$store.state.panes.panes[this.paneId]}get name(){const t=this.$store.state.panes.panes[this.paneId].name;if(!t){if(!t&&this.$store.state.panes.panes[this.paneId].markets.length){const[,t]=Object(i["m"])(this.$store.state.panes.panes[this.paneId].markets[0]);return t+" - "+this.$store.state.panes.panes[this.paneId].type}return this.paneId}return t}set name(t){this.$store.commit("panes/SET_PANE_NAME",{id:this.paneId,name:t})}async renamePane(){const t=await n["a"].prompt({action:"Rename",input:this.name});null!==t&&t!==this.name&&(this.name=t)}async resetPane(t){await this.close(),t||(t=JSON.parse(JSON.stringify(c["a"][this.$store.state.panes.panes[this.paneId].type].state))),await this.$store.dispatch("panes/resetPane",{id:this.paneId,data:t})}async getPreset(){let t=await r["a"].getState(this.paneId);return t||(await r["a"].saveState(this.paneId,this.$store.state[this.paneId]),t=await r["a"].getState(this.paneId)),t}};l=Object(s["a"])([Object(p["b"])({props:{paneId:{required:!0,type:String}}})],l),e["a"]=l}}]);