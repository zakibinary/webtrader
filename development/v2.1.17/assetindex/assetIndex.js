define(["exports","jquery","../windows/windows","../websockets/binary_websockets","../navigation/menu","lodash","datatables","jquery-growl"],function(a,b,c,d,e,f){"use strict";function g(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(a,"__esModule",{value:!0}),a.init=void 0;var h=g(b),i=g(c),j=g(d),k=g(e),l=g(f),m=null,n=null,o=a.init=function(a){a.click(function(){n?n.moveToTop():(n=i["default"].createBlankWindow(h["default"]("<div/>"),{title:"Asset Index".i18n(),dialogClass:"assetIndex",width:700,height:400}),n.track({module_id:"assetIndex",is_unique:!0,data:null}),n.dialog("open"),require(["text!assetindex/assetIndex.html"],r))})},p=function(a){a=k["default"].extractChartableMarkets(a);var b={};return a.forEach(function(a){var c=b[a.display_name]={};a.submarkets.forEach(function(a){c[a.display_name]=a.instruments.map(function(a){return a.display_name})})}),b},q=function(){var a=[],b={},c=function(c,d){var e=b[c][d],f=a.filter(function(a){return e.indexOf(a[1])>-1}).map(function(a){var b=a[2].map(function(a){return a[2]+" - "+a[3]});return b.unshift(a[1]),b});m.api().rows().remove(),m.api().rows.add(f),m.api().draw()},d=h["default"]("#"+m.attr("id")+"_processing").show();Promise.all([j["default"].cached.send({trading_times:(new Date).toISOString().slice(0,10)}),j["default"].cached.send({asset_index:1,landing_company:"champion"})]).then(function(e){try{isChampionFx()&&l["default"].remove(e[0].trading_times.markets,{name:"Volatility Indices"}),a=e[1].asset_index,b=p(e[0]);var f=(n.parent().find(".ui-dialog-title").addClass("with-content"),n.parent().find(".ui-dialog-titlebar-buttonpane")),g=i["default"].makeSelectmenu(h["default"]("<select />").insertBefore(f),{list:Object.keys(b),inx:1,changed:function(a){var d=Object.keys(b[a]);k.update_list(d),c(g.val(),k.val())},width:"180px"});g.selectmenu("widget").addClass("asset-index-selectmenu");var j=local_storage.get("i18n")&&"ar"===local_storage.get("i18n").value,k=i["default"].makeSelectmenu(h["default"]("<select />").insertBefore(j?g:f),{list:Object.keys(b[g.val()]),inx:0,changed:function(){c(g.val(),k.val())},width:"200px"});k.selectmenu("widget").addClass("asset-index-selectmenu"),c(g.val(),k.val()),d.hide()}catch(m){}})["catch"](function(a){h["default"].growl.error({message:a.message})})},r=function(a){a=h["default"](a).i18n(),m=a.filter("table"),a.appendTo(n),m=m.dataTable({data:[],columnDefs:[{className:"dt-body-center dt-header-center",targets:[0,1,2,3,4]},{defaultContent:"-",targets:[0,1,2,3,4]}],paging:!1,ordering:!1,searching:!0,processing:!0}),m.parent().addClass("hide-search-input"),m.api().column(0).every(function(){var a=this;h["default"]("input",this.header()).on("keyup change",function(){a.search()!==this.value&&a.search(this.value).draw()})}),q()};a["default"]={init:o}});