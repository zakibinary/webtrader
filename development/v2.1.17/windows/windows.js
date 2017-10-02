define(["exports","jquery","lodash","navigation/navigation","windows/tracker","../workspace/workspace.js","jquery.dialogextend","modernizr","common/util","css!windows/windows.css"],function(a,b,c,d,e,f){"use strict";function g(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(a,"__esModule",{value:!0}),a.event_off=a.event_on=a.makeSelectmenu=a.createBlankWindow=a.init=void 0;{var h=g(b),i=g(c),j=(g(d),g(e)),k=g(f),l=0,m=function(a){a=h["default"].extend({width:350,height:400},a);var b=Math.floor(h["default"](window).height()/a.height)||1,c=Math.floor(h["default"](window).width()/a.width)||1;return isSmallView()&&(b=c=1),b*c>4&&(b=1,c=4),{rows:b,cols:c,total:b*c}},n={},o=function(a){a=h["default"].extend({title:"title",date:null,changed:function(){},cleared:function(){},addDateDropDowns:!0},a);var b=this.parent().find(".ui-dialog-title").addClass("with-content"),c=function(a){var c=function(a,b){var c=a%4==0&&(a%100!=0||a%400==0);return[31,c?29:28,31,30,31,30,31,31,30,31,30,31][b]},d=function(a,b){var c=b.render||function(a){return a+""};a.children().remove();for(var d=b.min;d<=b.max;++d)h["default"]("<option/>").val(d).text(c(d)).appendTo(a);return a.val(b.initial||b.min),a.selectmenu("refresh"),a.title=a.title||function(c){if(c)a._title=a._title||h["default"]("<option/>").val(-1).prependTo(a),a._title.text(c),a.updating=!0,a.val(-1).selectmenu("refresh"),a.updating=!1;else if(a._title){var d=-1===a.val()?b.initial:a.val();a._title.remove(),a.updating=!0,a.val(d).selectmenu("refresh"),a.updating=!1,this._title=null}},a},e=a.date||new Date,f=h["default"]("<select />").insertAfter(b).selectmenu({classes:{"ui-selectmenu-button":"ui-selectmenu-button ui-state-default"},width:"auto"}),g=h["default"]("<select />").insertAfter(b).selectmenu({classes:{"ui-selectmenu-button":"ui-selectmenu-button ui-state-default"},width:"auto"}),i=h["default"]("<select />").insertAfter(b).selectmenu({classes:{"ui-selectmenu-button":"ui-selectmenu-button ui-state-default"},width:"auto"});i.selectmenu("menuWidget").addClass("date-day"),f=d(f,{min:2010,max:e.getFullYear(),initial:e.getFullYear()}),g=d(g,{min:0,max:11,initial:e.getMonth(),render:function(a){return["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][a]}}),i=d(i,{min:1,max:c(e.getFullYear(),e.getMonth()),initial:e.getDate()}),a.date||(f.title("Year"),g.title("Month"),i.title("Day"));var j=function(){var b=new Date(Date.UTC(f.val(),g.val(),i.val())).toISOString().slice(0,10);a.onchange(b)};i.on("selectmenuchange",function(){i.updating||(i.title(null),g.title(null),f.title(null),j())});var k=function(){var a={min:1,max:c(f.val(),g.val()),initial:i.val()};a.initial>a.max&&(a.initial=a.min),d(i,a)};return[f,g].forEach(function(a){a.on("selectmenuchange",function(){g.updating||f.updating||(i.title(null),g.title(null),f.title(null),k(),j())})}),{update:function(a){i.title(null),g.title(null),f.title(null);var b=a.split("-");f.val(0|b[0]),f.selectmenu("refresh"),g.val((0|b[1])-1),g.selectmenu("refresh"),i.val(0|b[2]),k()},clear:function(){f.title("Year"),g.title("Month"),i.title("Day")}}},d=function(a){var c=h["default"]("<input type='hidden' />").insertAfter(b),d=function(b){setTimeout(function(){var c=h["default"](b).datepicker("widget").find(".ui-datepicker-buttonpane");h["default"]("<button/>",{text:"Clear".i18n(),click:function(){a.onclear&&a.onclear(),h["default"](b).datepicker("hide")}}).addClass("ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all").appendTo(c)},0)},e={showOn:"both",numberOfMonths:1,maxDate:0,minDate:new Date(2010,0,1),dateFormat:"yy-mm-dd",showAnim:"drop",showButtonPanel:!0,changeMonth:!0,changeYear:!0,onSelect:function(){h["default"](this).change()},beforeShow:function(a,b){d(a),b.dpDiv.css({marginTop:"10px",marginLeft:"-220px"})},onChangeMonthYear:d,closeText:"Done".i18n(),currentText:"Today".i18n()},f=c.datepicker(e).datepicker("setDate",a.date.toISOString().slice(0,10));return h["default"].datepicker._gotoToday=function(a){h["default"](a).datepicker("setDate",new Date).change().datepicker("hide")},f.next("button").text("").button({icons:{primary:"ui-icon-calendar"}}),c.on("change",function(){var b=h["default"](this).val();a.onchange&&a.onchange(b)}),c},e=h["default"]('<span style="line-height: 24px; position: relative; left: 10px"></span>'),f=d({date:a.date||new Date,onchange:function(b){e.text(b),g&&g.update(b),a.changed(b)},onclear:function(){g&&g.clear(),a.cleared()}}),g=null;return a.addDateDropDowns?g=c({date:a.date,onchange:function(b){f.datepicker("setDate",b),a.changed(b)}}):(e.insertAfter(b),e.text(a.date.toISOString().slice(0,10))),h["default"]('<span class="span-in-dialog-header">'+a.title+"</span>").insertAfter(b),{clear:function(){return g&&g.clear()}}},p=function(){var a=h["default"](".addiction-warning").height(),b=h["default"](document).height()-h["default"](window).height()-h["default"](window).scrollTop();h["default"]("#dialog-extend-fixed-container").css("bottom",Math.max(0,a-b))},q=a.init=function(){var a=h["default"].fn.dialog;return h["default"].fn.dialog=function(b){return"destroy"===b?(this.trigger("dialogdestroy"),a.call(this,"destroy")):a.apply(this,arguments)},require(["charts/chartWindow","websockets/binary_websockets","navigation/menu"],function(a,b,c){if(!j["default"].is_empty())return void j["default"].reopen();var d=m();b.cached.send({trading_times:(new Date).toISOString().slice(0,10)}).then(function(b){b=c.extractChartableMarkets(b),isChampionFx()&&i["default"].remove(b,{display_name:"Volatility Indices"});for(var e=function(a){return a[Math.floor(Math.random()*a.length)]},f=["2h","4h","8h","1d"],g=["candlestick","line","ohlc","spline"],h=0;h<d.total;++h){var j=e(b).submarkets,l=e(j).instruments,m=e(l),n=e(f),o=e(g);a.addNewWindow({instrumentCode:m.symbol,instrumentName:m.display_name,timePeriod:n,type:o,delayAmount:m.delay_amount})}k["default"].tileDialogs()})}),require(["websockets/binary_websockets"],function(a){if(local_storage.get("oauth")){var b=local_storage.get("oauth");Promise.all(b.slice(1).map(function(a){return{authorize:a.token}}).map(function(b){return a.send(b)})).then(function(b){return a.cached.authorize().then(function(a){var c=local_storage.get("oauth");b.forEach(function(a){if(a.authorize){var b=c.find(function(b){return b.id==a.authorize.loginid});b.currency=a.authorize.currency}}),local_storage.set("oauth",c),b.unshift(a);for(var d=!1,e=0;e<b.length;++e)c[e].id=b[e].authorize.loginid,c[e].is_virtual=b[e].authorize.is_virtual,-1!==b[e].authorize.landing_company_name.indexOf("japan")&&(d=!0);return local_storage.set("oauth",c),d})}).then(function(b){b&&b===!0&&(a.invalidate(),h["default"].growl.error({message:"Japan accounts are not supported.".i18n(),duration:6e3}),local_storage.remove("oauth"),local_storage.remove("oauth-login"))})["catch"](function(c){return"SelfExclusion"===c.code?void b.forEach(function(b){return b.id.match(/^VRTC|VRCH/)?void a.switch_account(b.id):void 0}):(h["default"].growl.error({message:c.message}),local_storage.remove("oauth"),void h["default"](".login").trigger("login-error"))})}}),h["default"](window).scroll(p),this},r=a.createBlankWindow=function(a,b){a=h["default"](a);var c="windows-dialog-"+ ++l;b=h["default"].extend({autoOpen:!1,resizable:!0,collapsable:!1,draggable:!0,width:350,height:400,my:"center",at:"center",of:window,title:"Blank window".i18n(),hide:"fade",icons:{close:"custom-icon-close",minimize:"custom-icon-minimize",maximize:"custom-icon-maximize"}},b||{}),b.minWidth=b.minWidth||b.width,b.minHeight=b.minHeight||b.height,b.resize&&(b.maximize=b.minimize=b.restore=b.resize);var d=a.attr("id",c);b.ignoreTileAction||d.addClass("webtrader-dialog"),d.dialog(b).dialogExtend(b);var e=d.dialog("widget");e.addClass("webtrader-dialog-widget"),b.draggable!==!1&&(e.draggable("option","containment",!1),e.draggable("option","scroll",!0)),e.on("dragstop",function(){var a=e.offset().top;0>a&&e.animate({top:"0px"},300,e.trigger.bind(e,"animated"))}),b.destroy&&d.on("dialogdestroy",b.destroy),d.on("dialogopen",function(){var a=this;i["default"].defer(function(){var b=["#msg-notification","#topbar","#nav-menu"].map(function(a){return h["default"](a).outerHeight()}).reduce(function(a,b){return a+b},0),c=h["default"](a).parent();1*c.css("top").replace("px","")<=b&&c.animate({top:b+(15*Math.random()|0),left:"+="+((10*Math.random()|0)-20)+"px"},300,e.trigger.bind(e,"animated"))})}),d.moveToTop=function(){d.dialog("open"),d.dialogExtend("restore"),d.dialog("widget").effect("bounce",{times:2,distance:15},450)};var f=function(){var a=k["default"].addDialog(b.title,d.moveToTop,function(){return d.dialog("close")});d.on("dialogclose",a)};b.ignoreTileAction||f(),b.resize&&b.resize.call(a[0]),d.addDateToHeader=o;var g=Object.keys(b).filter(function(a){return i["default"].startsWith(a,"data-")});if(g.forEach(function(a){return d.attr(a,b[a])}),b.refresh){var m=d.parent().find(".ui-dialog-title"),n=m.append("<img class='reload' src='images/refresh.svg' title='reload'/>").find(".reload");n.on("click",b.refresh)}return d.track=function(a){return j["default"].track(a,d)},d.destroy=function(){d.data("ui-dialog")&&d.dialog("destroy"),d.remove()},d},s=a.makeSelectmenu=function(a,b){b=h["default"].extend({list:["empty"],inx:0,changed:function(){}},b);var c=b.inx,d=b.list,e=function(b){a.children().remove();for(var c=0;c<b.length;++c)h["default"]("<option/>").val(b[c]).text(b[c]).appendTo(a)};return e(d),a.val(d[c]),a=a.selectmenu({classes:{"ui-selectmenu-button":"ui-selectmenu-button ui-state-default"},width:b.width}),a.on("selectmenuchange",function(){var a=h["default"](this).val();b.changed(a)}),a.update_list=function(b){e(b),a.val(b[0]),a.selectmenu("refresh")},a};a.event_on=function(a,b){return(n[a]=n[a]||[]).push(b),b},a.event_off=function(a,b){if(n[a]){var c=n[a].indexOf(b);-1!==c&&n[a].splice(c,1)}}}a["default"]={init:q,createBlankWindow:r,makeSelectmenu:s}});