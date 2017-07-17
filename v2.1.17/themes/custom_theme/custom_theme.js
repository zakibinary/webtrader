define(["exports","jquery","../../windows/windows","text!./custom_theme.html","highstock-release/highstock","color-picker","css!./custom_theme.css"],function(a,b,c,d){"use strict";function e(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(a,"__esModule",{value:!0}),a.init=void 0;var f=e(b),g=e(c),h=e(d),i=[[1452412800,32.87,33.75,32.5,33.28],[1452427200,33.27,34.45,32.81,34.22],[1452441600,34.23,34.73,33.72,33.77],[1452456e3,34.23,34.48,33.73,33.84],[1452470400,33.84,34.42,33.2,33.33],[1452484800,33.34,33.73,32.8,33.55],[1452499200,32.7,33.22,32.56,32.91],[1452513600,32.89,33.38,32.05,32.17],[1452528e3,32.16,32.2,31.21,31.54],[1452542400,30.8,31.87,30.76,31.65],[1452556800,31.66,32.37,30.88,31.09],[1452571200,31.1,31.27,30.38,30.84],[1452585600,31.52,31.84,31.23,31.48]],j=f["default"].extend(!0,{},Highcharts.getOptions(),{}),k=null,l={},m=function(a,b){if(b){b=b.substring(0,b.indexOf(")")+1);var c="",d="";a.split("_").forEach(function(a,e,f){return d+="}",e===f.length-1?void(c=c+'{"'+a+'":"'+b+'"'):void(c=c+'{"'+a+'":')}),c+=d,f["default"].extend(l,JSON.parse(c))}},n=a.init=function(a){a.click(function(){if(k)return void k.moveToTop();var a=f["default"](h["default"]).i18n();a.find(".color_input_width").each(function(a,b){var c=f["default"](b).attr("id").replace("theme_",""),d=f["default"](b).attr("alpha"),e=o(c);e?f["default"](b).css({background:e}):(e=f["default"](b).css("background-color"),m(c,e),Highcharts.setOptions(l)),f["default"](b).data("prevColor",e),f["default"](b).colorpicker({showOn:"click",position:{my:"left+50 bottom+100",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},alpha:d?!0:!1,colorFormat:"RGBA",open:function(a,b){b.colorPicker.setColor(f["default"](this).css("background-color"))},select:function(a,d){f["default"](b).css({background:d.formatted}).val(""),m(c,d.formatted),r()},ok:function(a,d){d.formatted&&(f["default"](b).css({background:d.formatted}).val(""),f["default"](b).data("prevColor",f["default"](b).css("background-color")),m(c,d.formatted),r())},cancel:function(){f["default"](b).css({background:f["default"](b).data("prevColor")}).val(""),m(c,f["default"](b).data("prevColor")),r()}})}),k=g["default"].createBlankWindow(a,{autoOpen:!1,resizable:!1,collapsable:!1,minimizable:!1,maximizable:!1,closable:!1,closeOnEscape:!1,width:650,height:515,title:"Customize chart appearance".i18n(),modal:!0,destroy:function(){k=null},buttons:{Apply:function(){return require(["themes/themes"],function(a){var b=f["default"]("a.theme_custom"),c=b.text(),d=b.attr("class");a.confirmationDialog(Highcharts.getOptions(),d,c)})},Cancel:function(){f["default"](this).dialog("close"),f["default"](this).dialog("destroy"),p()}}}),k.dialog("open"),q()})},o=function(a){var b=j;return a.split("_").forEach(function(a){b&&(b=b[a])}),b},p=function(){var a=Highcharts.getOptions();for(var b in a)"function"!=typeof a[b]&&delete a[b];Highcharts.setOptions(j)},q=function(){var a={chart:{spacingLeft:0,marginLeft:45},series:[{type:"candlestick",data:i}],navigator:{enabled:!0,series:{id:"navigator"}},title:{text:"Some random index".i18n()},credits:{href:"#",text:""},xAxis:{ordinal:!1},yAxis:[{opposite:!1}],rangeSelector:{enabled:!1},tooltip:{crosshairs:[{width:2,color:"red",dashStyle:"dash"},{width:2,color:"red",dashStyle:"dash"}],enabled:!0,enabledIndicators:!0},exporting:{enabled:!1}};f["default"]("#preview-chart").highcharts("StockChart",a)},r=function(){Highcharts.setOptions(l),f["default"]("#preview-chart").highcharts().destroy(),q()};a["default"]={init:n}});