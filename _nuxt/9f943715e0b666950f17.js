(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{303:function(t,e,n){var content=n(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("52cf9710",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";var r=n(303);n.n(r).a},309:function(t,e,n){(e=n(11)(!1)).push([t.i,".CardHeader{font-weight:700;font-size:24px;line-height:36px;color:#4d4d4d}.CardFooter,.CardHeader{font-family:Hiragino Sans;font-style:normal}.CardFooter{font-weight:400;font-size:10px;line-height:15px;color:grey}",""]),t.exports=e},326:function(t,e,n){"use strict";n.r(e);n(58);var r=n(21),o=n(14),l=n(20),c=n(25),d=n(26),f=n(19),h=n(67),v=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},m=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),e}(h.c);v([Object(h.b)()],m.prototype,"title",void 0),v([Object(h.b)({default:new Date})],m.prototype,"lastUpdateDate",void 0);var _=m=v([h.a],m),x=(n(308),n(42)),w=n(59),D=n.n(w),O=n(307),j=n(304),y=n(322),C=n(299),V=n(32),K=n(135),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{staticClass:"CardHeader",attrs:{flat:""}},[n("v-toolbar-title",{staticClass:"CardTitle"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),t._t("button")],2),t._v(" "),n("v-card-text",[t._t("default")],2),t._v(" "),n("v-footer",{staticClass:"CardFooter"},[t._v("\n    "+t._s(t._f("format-date")(t.lastUpdateDate))+"\n  ")])],1)}),[],!1,null,null,null),k=component.exports;D()(component,{VCard:O.a,VCardText:j.a,VFooter:y.a,VSpacer:C.a,VToolbar:V.a,VToolbarTitle:K.a});var R={components:{DataView:k},props:["title","number","unit"]},$=Object(x.a)(R,(function(){var t=this.$createElement;return(this._self._c||t)("data-view",{attrs:{title:this.title}},[this._v("\n  "+this._s(this.number+" "+this.unit)+"\n")])}),[],!1,null,null,null).exports,S={name:"DataSelector",props:["value"]},T=n(301),E=n(328),A=Object(x.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{attrs:{value:t.value},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{attrs:{value:"transition"}},[t._v("\n    推移\n  ")]),t._v(" "),n("v-btn",{attrs:{value:"cummulative"}},[t._v("\n    累積\n  ")])],1)}),[],!1,null,null,null),B=A.exports;D()(A,{VBtn:T.a,VBtnToggle:E.a});var F={components:{DataView:k,DataSelector:B},props:{title:String,chartData:Object,chartOption:Object},data:function(){return{dataKind:"transition"}},computed:{displayData:function(){return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:"green",borderWidth:1}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cummulative})),backgroundColor:"green",borderWidth:1}]}}}},H={components:{NumberDisplay:$,TimeBarChart:Object(x.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title},scopedSlots:t._u([{key:"button",fn:function(){return[n("data-selector",{model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0}])},[t._v(" "),n("bar",{attrs:{"chart-data":t.displayData,options:t.chartOption}})],1)}),[],!1,null,null,null).exports},asyncData:function(t){var e=t.$axios;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$get("https://script.google.com/macros/s/AKfycbxSAfW5s_Q57aMAhuxM7qj2x9RnXIrnqeXhdpQhlmKPBh0wJkA/exec");case 2:return n=t.sent,r=new Date,o=0,l=[],n.contacts.filter((function(t){return new Date(t["日付"])<r})).forEach((function(t){var dt=new Date(t["日付"]),e=parseInt(t["小計"]);isNaN(e)||(o+=e,l.push({label:"".concat(dt.getMonth()+1,"/").concat(dt.getDate()),transition:e,cummulative:o}))})),data={patients:n.patients?n.patients.length:0,contacts:l},t.abrupt("return",data);case 9:case"end":return t.stop()}}),t)})))()}},M=n(323),J=n(324),N=Object(x.a)(H,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{attrs:{xs12:"",sm6:"",md4:""}},[e("number-display",{attrs:{title:"本日の感染者",number:this.patients,unit:"人"}})],1),this._v(" "),e("v-col",{attrs:{xs12:"",sm6:"",md4:""}},[e("time-bar-chart",{attrs:{title:"test","chart-data":this.contacts,"chart-option":{}}})],1)],1)}),[],!1,null,null,null);e.default=N.exports;D()(N,{VCol:M.a,VRow:J.a})}}]);