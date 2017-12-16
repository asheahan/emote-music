webpackJsonp([1],{"1Nvh":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-layout",{staticClass:"mt-4",attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v(t._s(t.name))]),t._v(" "),a("v-spacer"),t._v(" "),t.showPlaylist&&!t.loading?a("v-btn",{attrs:{outline:""},on:{click:t.reset}},[a("v-icon",[t._v("settings")]),t._v(" Settings\n          ")],1):t._e()],1),t._v(" "),a("v-card-text",[a("transition",{attrs:{name:"slide-fade"}},[t.showPlaylist?a("div",[t.loading?a("div",{staticClass:"text-xs-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:70}})],1):a("div",[t._l(t.emotions,function(e){return a("v-chip",{key:e.emotion,attrs:{outline:"",color:e.color}},[a("v-avatar",{class:e.color},[t._v(t._s(e.value))]),t._v(t._s(e.emotion))],1)}),t._v(" "),a("play-list",{attrs:{tracks:t.tracks}})],2)]):a("div",[a("div",{staticClass:"subheading mb-2"},[t._v("Use the sliders below to adjust emotion settings. Click the button below to generate the Spotify playlist.")]),t._v(" "),a("v-slider",{attrs:{label:"Anger","thumb-label":"",step:"10",color:t.settings.anger.color},model:{value:t.settings.anger.value,callback:function(e){t.$set(t.settings.anger,"value",e)},expression:"settings.anger.value"}}),t._v(" "),a("v-slider",{attrs:{label:"Contempt","thumb-label":"",step:"10",color:t.settings.contempt.color},model:{value:t.settings.contempt.value,callback:function(e){t.$set(t.settings.contempt,"value",e)},expression:"settings.contempt.value"}}),t._v(" "),a("v-slider",{attrs:{label:"Disgust","thumb-label":"",step:"10",color:t.settings.disgust.color},model:{value:t.settings.disgust.value,callback:function(e){t.$set(t.settings.disgust,"value",e)},expression:"settings.disgust.value"}}),t._v(" "),a("v-slider",{attrs:{label:"Fear","thumb-label":"",step:"10",color:t.settings.fear.color},model:{value:t.settings.fear.value,callback:function(e){t.$set(t.settings.fear,"value",e)},expression:"settings.fear.value"}}),t._v(" "),a("v-slider",{attrs:{label:"Happiness","thumb-label":"",step:"10",color:t.settings.happiness.color},model:{value:t.settings.happiness.value,callback:function(e){t.$set(t.settings.happiness,"value",e)},expression:"settings.happiness.value"}}),t._v(" "),a("v-slider",{attrs:{label:"Neutral","thumb-label":"",step:"10",color:t.settings.neutral.color},model:{value:t.settings.neutral.value,callback:function(e){t.$set(t.settings.neutral,"value",e)},expression:"settings.neutral.value"}}),t._v(" "),a("v-slider",{attrs:{label:"Sadness","thumb-label":"",step:"10",color:t.settings.sadness.color},model:{value:t.settings.sadness.value,callback:function(e){t.$set(t.settings.sadness,"value",e)},expression:"settings.sadness.value"}}),t._v(" "),a("v-slider",{attrs:{label:"Surprise","thumb-label":"",step:"10",color:t.settings.surprise.color},model:{value:t.settings.surprise.value,callback:function(e){t.$set(t.settings.surprise,"value",e)},expression:"settings.surprise.value"}})],1)])],1),t._v(" "),t.showPlaylist?t._e():a("v-card-actions",[a("v-btn",{attrs:{flat:"",outline:""},on:{click:t.getPlaylist}},[t._v("Generate Playlist")])],1)],1)],1)],1)],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},"69ZQ":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{app:"","mini-variant":t.mini},on:{"update:miniVariant":function(e){t.mini=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[a("v-list",{staticClass:"pa-0"},[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v("Emotify")])],1),t._v(" "),a("v-list-tile-action",[a("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[a("v-icon",[t._v("chevron_left")])],1)],1)],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider"),t._v(" "),t._l(t.items,function(e){return a("v-list-tile",{key:e.name,on:{click:function(a){t.goToRoute(e.name)}}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2)],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},"79yD":function(t,e,a){"use strict";e.a={name:"app-toolbar",computed:{title:function(){return this.$route.meta.title}}}},"9sPq":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("navigation-drawer"),t._v(" "),a("app-toolbar"),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},"AZE/":function(t,e){},BgxI:function(t,e){},DrmI:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"results",attrs:{id:"results"}})},n=[],i={render:s,staticRenderFns:n};e.a=i},ExvP:function(t,e){},GUTb:function(t,e,a){"use strict";var s=a("gClT"),n=a.n(s);e.a={data:function(){return{image:n.a}}}},M93x:function(t,e,a){"use strict";function s(t){a("yr8Y")}var n=a("xJD8"),i=a("9sPq"),r=a("VU/8"),l=s,o=r(n.a,i.a,!1,l,null,null);e.a=o.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("3EgV"),i=a.n(n),r=a("M93x"),l=a("YaEn");s.a.config.productionTip=!1,s.a.use(i.a),new s.a({el:"#app",router:l.a,template:"<App/>",components:{App:r.a}})},O6MC:function(t,e,a){"use strict";function s(t){a("PoxU")}var n=a("wNj6"),i=a("69ZQ"),r=a("VU/8"),l=s,o=r(n.a,i.a,!1,l,null,null);e.a=o.exports},PoxU:function(t,e){},QVVP:function(t,e,a){"use strict";var s=a("vwbq");a.n(s);e.a={name:"emotion-chart",props:{data:{type:Array},options:{type:Object,default:function(){return{w:600,h:600,margin:{top:20,right:20,bottom:20,left:20},levels:3,maxValue:0,labelFactor:1.25,wrapWidth:60,opacityArea:.35,dotRadius:4,opacityCircles:.1,strokeWidth:2,roundStrokes:!1,color:s.scale.category10()}}}},methods:{init:function(){this.maxValue=Math.max(this.options.maxValue,s.max(this.data,function(t){return s.max(t.map(function(t){return t.value}))})),this.allAxis=this.data[0].map(function(t){return t.axis}),this.total=this.allAxis.length,this.radius=Math.min(this.options.w/3,this.options.h/3),this.numberFormat=s.format("%"),this.angleSlice=2*Math.PI/this.total,this.rScale=s.scale.linear().range([0,this.radius]).domain([0,this.maxValue])},drawChart:function(){var t=this;s.select(this.$el).select("svg").remove(),this.svg=s.select(this.$el).append("svg").attr("width",this.options.w+this.options.margin.left+this.options.margin.right).attr("height",this.options.h+this.options.margin.top+this.options.margin.bottom).attr("class","radar");var e=this.svg.append("g").attr("transform","translate("+(this.options.w/2+this.options.margin.left)+","+(this.options.h/2+this.options.margin.top)+")"),a=e.append("defs").append("filter").attr("id","glow"),n=(a.append("feGaussianBlur").attr("stdDeviation","2.5").attr("result","coloredBlur"),a.append("feMerge")),i=(n.append("feMergeNode").attr("in","coloredBlur"),n.append("feMergeNode").attr("in","SourceGraphic"),e.append("g").attr("class","axisWrapper"));i.selectAll(".levels").data(s.range(1,this.options.levels+1).reverse()).enter().append("circle").attr("class","gridCircle").attr("r",function(e){return t.radius/t.options.levels*e}).style("fill","#CDCDCD").style("stroke","#CDCDCD").style("fill-opacity",this.options.opacityCircles).style("filter","url(#glow)"),i.selectAll(".axisLabel").data(s.range(1,this.options.levels+1).reverse()).enter().append("text").attr("class","axisLabel").attr("x",4).attr("y",function(e){return-e*t.radius/t.options.levels}).attr("dy","0.4em").style("font-size","10px").attr("fill","#737373").text(function(e){return t.numberFormat(t.maxValue*e/t.options.levels)});var r=i.selectAll(".axis").data(this.allAxis).enter().append("g").attr("class","axis");r.append("line").attr("x1",0).attr("y1",0).attr("x2",function(e,a){return t.rScale(1.1*t.maxValue)*Math.cos(t.angleSlice*a-Math.PI/2)}).attr("y2",function(e,a){return t.rScale(1.1*t.maxValue)*Math.sin(t.angleSlice*a-Math.PI/2)}).attr("class","line").style("stroke","white").style("stroke-width","2px"),r.append("text").attr("class","legend").style("font-size","11px").attr("text-anchor","middle").attr("dy","0.35em").attr("x",function(e,a){return t.rScale(t.maxValue*t.options.labelFactor)*Math.cos(t.angleSlice*a-Math.PI/2)}).attr("y",function(e,a){return t.rScale(t.maxValue*t.options.labelFactor)*Math.sin(t.angleSlice*a-Math.PI/2)}).text(function(t){return t}).call(this.wrap,this.options.wrapWidth);var l=s.svg.line.radial().interpolate("linear-closed").radius(function(e){return t.rScale(e.value)}).angle(function(e,a){return a*t.angleSlice});this.options.roundStrokes&&l.interpolate("cardinal-closed");var o=e.selectAll(".radarWrapper").data(this.data).enter().append("g").attr("class","radarWrapper");o.append("path").attr("class","radarArea").attr("d",function(t){return l(t)}).style("fill",function(e,a){return t.options.color(a)}).style("fill-opacity",this.options.opacityArea).on("mouseover",function(t,e){s.selectAll(".radarArea").transition().duration(200).style("fill-opacity",.1),s.select(this).transition().duration(200).style("fill-opacity",.7)}).on("mouseout",function(){s.selectAll(".radarArea").transition().duration(200).style("fill-opacity",t.options.opacityArea)}),o.append("path").attr("class","radarStroke").attr("d",function(t){return l(t)}).style("stroke-width",this.options.strokeWidth+"px").style("stroke",function(e,a){return t.options.color(a)}).style("fill","none").style("filter","url(#glow)"),o.selectAll(".radarCircle").data(function(t){return t}).enter().append("circle").attr("class","radarCircle").attr("r",this.options.dotRadius).attr("cx",function(e,a){return t.rScale(e.value)*Math.cos(t.angleSlice*a-Math.PI/2)}).attr("cy",function(e,a){return t.rScale(e.value)*Math.sin(t.angleSlice*a-Math.PI/2)}).style("fill",function(e,a,s){return t.options.color(s)}).style("fill-opacity",.8),e.selectAll(".radarCircleWrapper").data(this.data).enter().append("g").attr("class","radarCircleWrapper").selectAll(".radarInvisibleCircle").data(function(t){return t}).enter().append("circle").attr("class","radarInvisibleCircle").attr("r",1.5*this.options.dotRadius).attr("cx",function(e,a){return t.rScale(e.value)*Math.cos(t.angleSlice*a-Math.PI/2)}).attr("cy",function(e,a){return t.rScale(e.value)*Math.sin(t.angleSlice*a-Math.PI/2)}).style("fill","none").style("pointer-events","all").on("mouseover",function(t,e){newX=parseFloat(s.select(this).attr("cx"))-10,newY=parseFloat(s.select(this).attr("cy"))-10,c.attr("x",newX).attr("y",newY).text(Format(t.value)).transition().duration(200).style("opacity",1)}).on("mouseout",function(){c.transition().duration(200).style("opacity",0)});var c=e.append("text").attr("class","tooltip").style("opacity",0)},wrap:function(t,e){t.each(function(){for(var t=s.select(this),a=t.text().split(/\s+/).reverse(),n=void 0,i=[],r=0,l=t.attr("y"),o=t.attr("x"),c=parseFloat(t.attr("dy")),u=t.text(null).append("tspan").attr("x",o).attr("y",l).attr("dy",c+"em");n=a.pop();)i.push(n),u.text(i.join(" ")),u.node().getComputedTextLength()>e&&(i.pop(),u.text(i.join(" ")),i=[n],u=t.append("tspan").attr("x",o).attr("y",l).attr("dy",1.4*++r+c+"em").text(n))})}},mounted:function(){this.init(),this.drawChart()}}},Qgu7:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{app:"",color:"primary"}},[a("v-toolbar-title",{staticClass:"white--text"},[t._v("\n    "+t._s(t.title)+"\n  ")])],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},S7DX:function(t,e,a){"use strict";function s(t){a("ExvP")}var n=a("fSG9"),i=a("1Nvh"),r=a("VU/8"),l=s,o=r(n.a,i.a,!1,l,"data-v-6931b324",null);e.a=o.exports},WGJH:function(t,e){},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),n=a("/ocq"),i=a("wrM5"),r=a("S7DX"),l=a("gI2D");s.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"home",component:i.a,meta:{title:"Home",icon:"home"}},{path:"/manual",name:"manual",component:r.a,meta:{title:"Manual",icon:"build"}},{path:"/image",name:"image",component:l.a,meta:{title:"Image",icon:"portrait"}}]})},ZohN:function(t,e,a){"use strict";function s(t){a("cQjR")}var n=a("79yD"),i=a("Qgu7"),r=a("VU/8"),l=s,o=r(n.a,i.a,!1,l,null,null);e.a=o.exports},ah4o:function(t,e,a){"use strict";var s=a("M4fF"),n=(a.n(s),a("n5Qe")),i=a("tVgt"),r=a("cUHA");e.a={name:"image-page",components:{EmotionChart:i.a,PlayList:r.a},data:function(){return{image:"",isUploading:!1,loading:!1,showPlaylist:!1,uploadFieldName:"emotionImage",scores:{},chartScores:[],tracks:[]}},computed:{name:function(){return this.loading?"Generating Playlist...":this.showPlaylist?"Playlist":"Facial Expression Detection"}},methods:{onFileChange:function(t){var e=this;this.isUploading=!0;var a=t.target.files||t.dataTransfer.files;a.length&&this.uploadImage(a[0]).then(function(){e.createImage(a[0]),e.isUploading=!1})},uploadImage:function(t){var e=this,a=new FormData;return a.append("file",t),Object(n.b)(a).then(function(t){e.scores=t.rawScores,e.chartScores=t.scores})},createImage:function(t){var e=this,a=(new Image,new FileReader);a.onload=function(t){e.image=t.target.result},a.readAsDataURL(t)},getPlaylist:function(){var t=this;this.showPlaylist=!0,this.loading=!0,Object(n.a)(this.scores).then(function(e){t.loading=!1,t.tracks=e.tracks}).catch(function(e){t.loading=!1,console.error(e.message)})},removeImage:function(){this.image="",this.scores={},this.chartScores=[]},reset:function(){this.tracks=[],this.showPlaylist=!1}}}},cQjR:function(t,e){},cUHA:function(t,e,a){"use strict";function s(t){a("wrCJ")}var n=a("ofsE"),i=a("jT7N"),r=a("VU/8"),l=s,o=r(n.a,i.a,!1,l,null,null);e.a=o.exports},fSG9:function(t,e,a){"use strict";var s=a("M4fF"),n=a.n(s),i=a("n5Qe"),r=a("cUHA");e.a={name:"manual-page",data:function(){return{settings:{anger:{value:0,color:"red darken-2"},contempt:{value:0,color:"teal darken-2"},disgust:{value:0,color:"light-green darken-2"},fear:{value:0,color:"blue-grey darken-2"},happiness:{value:0,color:"orange darken-2"},neutral:{value:0,color:"grey darken-2"},sadness:{value:0,color:"blue darken-2"},surprise:{value:0,color:"purple darken-2"}},showPlaylist:!1,tracks:[],loading:!1}},computed:{emotions:function(){var t=[];return n.a.forEach(this.settings,function(e,a){e.value>0&&t.push({emotion:a,color:e.color,value:e.value})}),t},name:function(){return this.loading?"Generating Playlist...":this.showPlaylist?"Playlist":"Emotion Settings"}},methods:{getPlaylist:function(){var t=this;this.showPlaylist=!0,this.loading=!0,Object(i.a)(n.a.mapValues(this.settings,function(t){return t.value})).then(function(e){t.loading=!1,t.tracks=e.tracks}).catch(function(e){t.loading=!1,console.error(e.message)})},reset:function(){this.showPlaylist=!1,this.tracks=[]}},components:{PlayList:r.a}}},gClT:function(t,e,a){t.exports=a.p+"static/img/road-image.c400890.jpg"},gI2D:function(t,e,a){"use strict";function s(t){a("WGJH")}var n=a("ah4o"),i=a("kAvk"),r=a("VU/8"),l=s,o=r(n.a,i.a,!1,l,null,null);e.a=o.exports},jT7N:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{attrs:{"two-line":""}},t._l(t.tracks,function(e){return a("v-list-tile",{key:e.id,attrs:{avatar:""},on:{click:function(t){}}},[a("v-list-tile-avatar",[a("img",{attrs:{src:e.album.images[0].url}})]),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))]),t._v(" "),a("v-list-tile-sub-title",[t._v(t._s(e.artists[0].name)+" - "+t._s(e.album.name))])],1),t._v(" "),a("v-list-tile-action",[a("a",{attrs:{href:e.external_urls.spotify,target:"_blank"}},[a("v-btn",{attrs:{icon:"",ripple:""}},[a("v-icon",{attrs:{color:"green"}},[t._v("play_arrow")])],1)],1)])],1)}))},n=[],i={render:s,staticRenderFns:n};e.a=i},kAvk:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-layout",{staticClass:"mt-4",attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v(t._s(t.name))]),t._v(" "),a("v-spacer"),t._v(" "),t.showPlaylist&&!t.loading?a("v-btn",{attrs:{outline:""},on:{click:t.reset}},[a("v-icon",[t._v("settings")]),t._v(" Settings\n          ")],1):t._e()],1),t._v(" "),a("v-card-text",[a("transition",{attrs:{name:"slide-fade"}},[t.showPlaylist?a("div",[t.loading?a("div",{staticClass:"text-xs-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:70}})],1):a("div",[a("play-list",{attrs:{tracks:t.tracks}})],1)]):a("div",[a("v-tabs",{attrs:{fixed:"",icons:"",centered:"",dark:""}},[a("v-tabs-bar",{staticClass:"primary"},[a("v-tabs-slider",{attrs:{color:"accent"}}),t._v(" "),a("v-tabs-item",{attrs:{href:"#upload",ripple:""}},[a("v-icon",[t._v("file_upload")]),t._v("\n                    Upload\n                  ")],1)],1),t._v(" "),a("v-tabs-items",[a("v-tabs-content",{staticClass:"pt-4",attrs:{id:"upload"}},[t.image?a("div",[a("v-btn",{attrs:{outline:""},on:{click:t.removeImage}},[t._v("Reset")]),t._v(" "),a("v-container",{attrs:{"grid-list-lg":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2"}},[a("img",{staticClass:"emotion-image",attrs:{src:t.image,height:"300"}})])],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",{staticClass:"white--text"},[t._v("\n                                    Emotion Attributes\n                                  ")])],1)],1),t._v(" "),a("v-card-text",[a("emotion-chart",{attrs:{data:t.chartScores}})],1)],1)],1)],1)],1)],1):a("div",{staticClass:"dropbox"},[a("input",{staticClass:"input-file",attrs:{type:"file",name:t.uploadFieldName,disabled:t.isUploading,accept:"image/*"},on:{change:t.onFileChange}}),t._v(" "),t.isUploading?a("p",[t._v("\n                        Processing image...\n                      ")]):a("p",[t._v("\n                        Drag your file here to begin"),a("br"),t._v(" or click to browse\n                      ")])])])],1)],1)],1)])],1),t._v(" "),t.showPlaylist?t._e():a("v-card-actions",[a("v-btn",{attrs:{flat:"",outline:""},on:{click:t.getPlaylist}},[t._v("Generate Playlist")])],1)],1)],1)],1)],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},n5Qe:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return c});var s=a("//Fk"),n=a.n(s),i=a("mtWM"),r=a.n(i),l=r.a.create({baseURL:"/api"}),o=function(t){return l.get("/playlist/recommend",{params:t}).then(function(t){return 200===t.status?t.data.data:n.a.reject(new Error("Error getting playlist"))})},c=function(t){return l.post("/emotions/image",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){return 200===t.status?t.data.data:n.a.reject(new Error("Error uploading image"))})}},ofsE:function(t,e,a){"use strict";e.a={name:"play-list",props:{tracks:{type:Array,default:[]}}}},tVgt:function(t,e,a){"use strict";function s(t){a("AZE/")}var n=a("QVVP"),i=a("DrmI"),r=a("VU/8"),l=s,o=r(n.a,i.a,!1,l,null,null);e.a=o.exports},vcFH:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-parallax",{attrs:{src:t.image,height:"1000",jumbotron:""}},[a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("h1",[a("span",{staticClass:"accent--text"},[t._v("Emot")]),t._v("ify")]),t._v(" "),a("h4",{staticClass:"white--text"},[t._v("Explore Spotify music based on emotions")]),t._v(" "),a("div",[a("v-btn",{attrs:{outline:"",color:"white"}},[t._v("Use image")]),t._v(" "),a("router-link",{attrs:{to:{name:"manual"}}},[a("v-btn",{attrs:{outline:"",color:"white"}},[t._v("Manual")])],1)],1)])],1)],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},wNj6:function(t,e,a){"use strict";e.a={name:"navigation-drawer",data:function(){return{drawer:!0,mini:!0,items:[]}},created:function(){var t=this;this.$router.options.routes.forEach(function(e){t.items.push({name:e.name,path:e.path,title:e.meta.title,icon:e.meta.icon})})},methods:{goToRoute:function(t){this.$router.push({name:t})}}}},wrCJ:function(t,e){},wrM5:function(t,e,a){"use strict";function s(t){a("BgxI")}var n=a("GUTb"),i=a("vcFH"),r=a("VU/8"),l=s,o=r(n.a,i.a,!1,l,null,null);e.a=o.exports},xJD8:function(t,e,a){"use strict";var s=a("O6MC"),n=a("ZohN");e.a={name:"app",components:{AppToolbar:n.a,NavigationDrawer:s.a}}},yr8Y:function(t,e){}},["NHnr"]);