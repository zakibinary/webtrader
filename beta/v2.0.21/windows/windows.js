define(["jquery","lodash","navigation/navigation","jquery.dialogextend","modernizr","common/util","css!windows/windows.css"],function(a,b){function c(b){b=a.extend({width:350,height:400},b);var c=Math.floor(a(window).height()/b.height)||1,d=Math.floor(a(window).width()/b.width)||1;return isSmallView()&&(c=d=1),c*d>4&&(c=1,d=4),{rows:c,cols:d,total:c*d}}function d(a){for(var b,c,d=a.length;d>0;)c=Math.floor(Math.random()*d),--d,b=a[d],a[d]=a[c],a[c]=b;return a}function e(){for(var b=a(".webtrader-dialog").filter(function(b,c){var d=a(c);return d.hasClass("ui-dialog-content")&&d.dialog("isOpen")&&!d.hasClass("ui-dialog-minimized")}),c=function(b,c){for(var d=0,e=a(window).width(),f=isSmallView()?100:80,g=0;g<b.length;){for(var i=g,j=0,k=0;g!=b.length;){var l=a(b[g]),m=l.dialog("option","width"),n=l.dialog("option","height");if(j=Math.max(j,n),!(e>=k+m))break;k+=m,++g}var o=e>k?e-k:0,p=e>k?(e-k)/(g-i+1):0;g!=b.length&&(d+=o),k=0;for(var q=i;g>q;++q){k+=p;var l=a(b[q]),m=l.dialog("option","width"),n=l.dialog("option","height");c&&l.dialog("widget").animate({left:k+"px",top:f+"px"},1500),k+=m}f+=j+20}return c&&setTimeout(h,1600),d},e=null,f=1e6,g=0;1e3>g;++g){d(b);var i=c(b,!1);f>i&&(e=b.slice(),f=i)}c(e,!0)}function f(b){b=a.extend({title:"title",date:null,changed:function(){},cleared:function(){}},b);var c=this.parent().find(".ui-dialog-title").addClass("with-content"),d=function(b){function d(a,b){var c=a%4==0&&(a%100!=0||a%400==0);return[31,c?29:28,31,30,31,30,31,31,30,31,30,31][b]}function e(b,c){var d=c.render||function(a){return a+""};b.children().remove();for(var e=c.min;e<=c.max;++e)a("<option/>").val(e).text(d(e)).appendTo(b);return b.val(c.initial||c.min),b.selectmenu("refresh"),b.title=b.title||function(d){if(d)b._title=b._title||a("<option/>").val(-1).prependTo(b),b._title.text(d),b.updating=!0,b.val(-1).selectmenu("refresh"),b.updating=!1;else if(b._title){var e=-1===b.val()?c.initial:b.val();b._title.remove(),b.updating=!0,b.val(e).selectmenu("refresh"),b.updating=!1,this._title=null}},b}var f=b.date||new Date,g=a("<select />").insertAfter(c).selectmenu({width:"auto"}),h=a("<select />").insertAfter(c).selectmenu({width:"auto"}),i=a("<select />").insertAfter(c).selectmenu({width:"auto"});g=e(g,{min:2010,max:f.getFullYear(),initial:f.getFullYear()}),h=e(h,{min:0,max:11,initial:f.getMonth(),render:function(a){return["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][a]}}),i=e(i,{min:1,max:d(f.getFullYear(),f.getMonth()),initial:f.getDate()}),b.date||(g.title("Year"),h.title("Month"),i.title("Day"));var j=function(){var a=new Date(Date.UTC(g.val(),h.val(),i.val())).toISOString().slice(0,10);b.onchange(a)};i.on("selectmenuchange",function(){i.updating||(i.title(null),h.title(null),g.title(null),j())});var k=function(){var a={min:1,max:d(g.val(),h.val()),initial:i.val()};a.initial>a.max&&(a.initial=a.min),e(i,a)};return[g,h].forEach(function(a){a.on("selectmenuchange",function(){h.updating||g.updating||(i.title(null),h.title(null),g.title(null),k(),j())})}),{update:function(a){i.title(null),h.title(null),g.title(null);var b=a.split("-");g.val(0|b[0]),g.selectmenu("refresh"),h.val((0|b[1])-1),h.selectmenu("refresh"),i.val(0|b[2]),k()},clear:function(){g.title("Year"),h.title("Month"),i.title("Day")}}},e=function(b){var d=a("<input type='hidden' />").insertAfter(c),e=function(c){setTimeout(function(){var d=a(c).datepicker("widget").find(".ui-datepicker-buttonpane");a("<button/>",{text:"Clear",click:function(){b.onclear&&b.onclear(),a(c).datepicker("hide")}}).addClass("ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all").appendTo(d)},0)},f={showOn:"both",numberOfMonths:2,maxDate:0,minDate:new Date(2010,0,1),dateFormat:"yy-mm-dd",showAnim:"drop",showButtonPanel:!0,changeMonth:!0,changeYear:!0,onSelect:function(){a(this).change()},beforeShow:function(a,b){e(a),b.dpDiv.css({marginTop:"10px",marginLeft:"-220px"})},onChangeMonthYear:e},g=d.datepicker(f).datepicker("setDate",b.date.toISOString().slice(0,10));return a.datepicker._gotoToday=function(b){a(b).datepicker("setDate",new Date).change().datepicker("hide")},g.next("button").text("").button({icons:{primary:"ui-icon-calendar"}}),d.on("change",function(){var c=a(this).val();b.onchange&&b.onchange(c)}),d},f=e({date:b.date||new Date,onchange:function(a){g.update(a),b.changed(a)},onclear:function(){g.clear(),b.cleared()}}),g=d({date:b.date,onchange:function(a){f.datepicker("setDate",a),b.changed(a)}});return a('<span class="span-in-dialog-header">'+b.title+"</span>").insertAfter(c),{clear:function(){g.clear()}}}function g(b){var c=a(".ui-dialog").map(function(b,c){var d=a(c),e=d.find(".webtrader-dialog");if(e&&e.hasClass("ui-dialog-content")&&!e.hasClass("ui-dialog-minimized")){var f=d.offset();return f&&f.top+d.height()||0}return 0});return b||c.push(a("body").height()),Math.max.apply(null,c)}function h(b){a("body > .footer").width(a("body").width());var c=g(!0),d=a("body").height(),e=a(".addiction-warning").height(),f=a("body > .footer").height(),h=Math.max(c+e+15,d);f>h&&b===!0||a("body > .footer").height(h)}function i(){var b=a(".addiction-warning").height(),c=a(document).height()-a(window).height()-a(window).scrollTop();a("#dialog-extend-fixed-container").css("bottom",Math.max(0,b-c))}var j=null,k=0,l=null;return{init:function(b){var d=a.fn.dialog;return a.fn.dialog=function(a){return"destroy"===a?(this.trigger("dialogdestroy"),d.call(this,"destroy")):d.apply(this,arguments)},l=b.find("ul"),tileObject=l.find(".tile"),j=l.find(".closeAll"),j.click(function(){a(".webtrader-dialog").length>0&&a(".webtrader-dialog").dialog("close")}),require(["charts/chartWindow","websockets/binary_websockets","navigation/menu"],function(a,b,d){tileObject.click(e);var f=c();b.cached.send({trading_times:(new Date).toISOString().slice(0,10)}).then(function(b){b=d.extractChartableMarkets(b);for(var c=function(a){return a[Math.floor(Math.random()*a.length)]},g=["2h","4h","8h","1d"],h=["candlestick","line","ohlc","spline"],i=0;i<f.total;++i){var j=c(b).submarkets,k=c(j).instruments,l=c(k),m=c(g),n=c(h);a.addNewWindow({instrumentCode:l.symbol,instrumentName:l.display_name,timePeriod:m,type:n,delayAmount:l.delay_amount})}e()})}),require(["websockets/binary_websockets","js-cookie"],function(a,b){b.get("webtrader_token")&&a.cached.authorize()["catch"](function(a){})}),a(window).resize(h),a(window).scroll(i),this},tile:e,closeAll:function(){j&&j.click()},createBlankWindow:function(c,d){c=a(c);var e="windows-dialog-"+ ++k;d=a.extend({autoOpen:!1,resizable:!0,width:350,height:400,my:"center",at:"center",of:window,title:"blank window",hide:"fade"},d||{}),d.minWidth=d.minWidth||d.width,d.minHeight=d.minHeight||d.height,d.resize&&(d.maximize=d.minimize=d.restore=d.resize);var i=c.attr("id",e).addClass("webtrader-dialog").dialog(d).dialogExtend(d),j=i.dialog("widget");j.draggable("option","containment",!1),j.draggable("option","scroll",!0),j.on("dragstop",function(){var a=j.offset().top;0>a&&j.animate({top:"0px"},300)}),j.on("dragstop",h),j.on("drag",function(){h(!0)}),i.on("dialogextendminimize",h),d.destroy&&i.on("dialogdestroy",d.destroy),i.moveToTop=function(){i.dialog("open"),i.dialogExtend("restore"),i.dialog("widget").effect("bounce",{times:2,distance:15},450)};var m=null,n=function(){var b=a("<a href='#'>"+d.title+"</a>");b.click(i.moveToTop),m=a("<li />").addClass(e+"LI").html(b),l.append(m)};n(),i.on("dialogclose",function(){m.remove(),m=null}),i.on("dialogopen",function(){!m&&n()});var o={};i.on("dialogextendbeforerestore",function(){var b=a(document);o={height:g(),width:b.width()}}),i.on("dialogextendrestore",function(){var a=j.offset(),b={},c={width:j.width(),height:j.height()},d=o;b.left=a.left+c.width>d.width?d.width-c.width-5:a.left,b.top=a.top+c.height>d.height?d.height-c.height-5:a.top,(b.left!==a.left||b.top!==a.top)&&j.animate({left:b.left+"px",top:b.top+"px"},500),i.dialog("moveToTop")}),d.resize&&d.resize.call(c[0]),i.addDateToHeader=f;var p=Object.keys(d).filter(function(a){return b.startsWith(a,"data-")});if(p.forEach(function(a){return i.attr(a,d[a])}),d.refresh){var q=i.parent().find(".ui-dialog-title"),r=a("<span class='reload' style='position:absolute; right:85px' title='reload'/>").insertBefore(q);r.on("click",d.refresh)}return i},makeSelectmenu:function(b,c){c=a.extend({list:["empty"],inx:0,changed:function(){}},c);var d=c.inx,e=c.list,f=function(c){b.children().remove();for(var d=0;d<c.length;++d)a("<option/>").val(c[d]).text(c[d]).appendTo(b)};return f(e),b.val(e[d]),b=b.selectmenu({width:c.width}),b.on("selectmenuchange",function(){var b=a(this).val();c.changed(b)}),b.update_list=function(a){f(a),b.val(a[0]),b.selectmenu("refresh")},b}}});