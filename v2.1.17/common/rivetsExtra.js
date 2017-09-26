define(["exports","lodash","jquery","rivets","moment","jquery-ui","jquery-sparkline","chosen","color-picker"],function(a,b,c,d,e){"use strict";function f(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(a,"__esModule",{value:!0}),a.binders=a.formatters=a.bind=void 0;var g=f(b),h=f(c),i=f(d),j=f(e);rivets._.View.prototype.observe=function(a,b){for(var c=this.models,d=0;-1!==(d=a.indexOf("."));)c=c[a.substring(0,d)],a=a.substring(d+1);this.adapters["."].observe(c,a,function(){return b(c[a])})},i["default"].formatters.i18n=function(a){return"string"==typeof a?a.i18n():a},i["default"].formatters.prop=function(a,b){return a&&a[b]},i["default"].formatters["one-of"]=function(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];for(var d=b[0],e=1;e<b.length;++e)if(b[e]===d)return!0;return!1},i["default"].formatters.trim=function(a){return g["default"].trim(a)},i["default"].formatters.negate=function(a){return!a},i["default"].formatters.eq=function(a,b){return a===b},i["default"].formatters["not-eq"]=function(a,b){return a!==b},i["default"].formatters.or=function(a,b){return a||b},i["default"].formatters["or-not"]=function(a,b){return a||!b},i["default"].formatters.and=function(a,b){return a&&b},i["default"].formatters["and-not"]=function(a,b){return a&&!b},i["default"].formatters.gt=function(a,b){return a>b},i["default"].formatters.lt=function(a,b){return b>a},i["default"].formatters["format-price"]=function(a,b){return a?formatPrice(a,b):void 0},i["default"].formatters.capitalize={read:function(a){return g["default"].capitalize(a)},publish:function(a){return a.toLowerCase()}},i["default"].formatters["to-fixed"]=function(a,b){return h["default"].isNumeric(a)&&h["default"].isNumeric(b)?(1*a).toFixed(b||2):void 0},i["default"].formatters.notify=function(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];for(var d=b[0],e=1;e<b.length;++e)g["default"].defer(b[e],d);return d},i["default"].formatters.checkbox={read:function(a,b){return g["default"].trim(a," '\"")==b},publish:function(a,b,c){return g["default"].trim(a?b:c," '\"")}},i["default"].formatters.bind=function(a,b){return a.bind(void 0,b)},i["default"].formatters.map=function(a,b){return g["default"].map(a,b)},i["default"].formatters.prepend=function(a,b){return b&&a?b+a:a},i["default"].formatters.append=function(a,b){return b&&a?a+b:a},i["default"].formatters.ternary=function(a,b,c){return a?b:c},i["default"].formatters.currency=function(a,b){var c={USD:"$",EUR:"€",CRC:"₡",GBP:"£",ILS:"₪",INR:"₹",JPY:"¥",KRW:"₩",NGN:"₦",PHP:"₱",PLN:"zł",PYG:"₲",THB:"฿",UAH:"₴",VND:"₫"};return a?(c[b]||b)+a:a},i["default"].formatters["utc-time"]=function(a){var b=new Date(1e3*a);return("00"+b.getUTCHours()).slice(-2)+":"+("00"+b.getUTCMinutes()).slice(-2)+":"+("00"+b.getUTCSeconds()).slice(-2)},i["default"].formatters.moment=function(a,b){return b=b||"YYYY-MM-DD HH:mm:ss",a&&j["default"].utc(1e3*a).format(b)},i["default"].formatters["moment-humanize"]=function(a,b){if(!a||!b)return void 0;var c="",d=b-a,e=j["default"].duration(d,"seconds");return e.days()>0&&(c+=" "+e.days()+" "+(e.days()>1?"days":"day")),e.hours()>0&&(c+=" "+e.hours()+" "+(e.hours()>1?"hours":"hour")),e.minutes()>0&&(c+=" "+e.minutes()+" "+(e.minutes()>1?"minutes":"minute")),e.seconds()>0&&600>d&&(c+=" "+e.seconds()+" "+(e.seconds()>1?"seconds":"second")),g["default"].trim(c).i18n()},i["default"].formatters["bold-last-character"]=function(a){return a+="",a.substring(0,a.length-1)+"<strong>"+g["default"].last(a)+"</strong>"},i["default"].formatters["percent-of"]=function(a,b){return void 0!==a&&b?(100*(a-b)/b).toFixed(2)+"%":void 0},i["default"].formatters["is-valid-email"]=function(a){return""===a||validateEmail(a)},i["default"].formatters["is-valid-date"]=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return j["default"](a,b,!0).isValid()},i["default"].formatters["is-valid-regex"]=function(a,b){return new RegExp(b).test(a)},i["default"].formatters.length=function(a){return a.length},i["default"].formatters.debounce=function(a,b){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:250;return clearTimeout(b._timer_notify),b._timer_notify=setTimeout(b.bind(void 0,a),c),a},i["default"].formatters.filter=function(a,b,c){return g["default"].filter(a,function(a){return a[b]===c})},i["default"].binders.selectmenu={priority:101,publishes:!0,bind:function(a){var b=this.publish,c=h["default"](a);c.selectmenu({classes:{"ui-selectmenu-button":"ui-selectmenu-button ui-state-default"},change:function(){b(c.val()),c.trigger("change")}})},unbind:function(a){return h["default"](a).selectmenu("destroy")},routine:function(a,b){a=h["default"](a),a.val(b),a.find("option[value='"+b+"']").length>0&&a.selectmenu("refresh")}},i["default"].binders["is-valid-number"]={priority:100,publishes:!0,bind:function(a){var b=this.keypath.split(".")[1],c=this.model,d=h["default"](a),e=/^(?!0\d)\d*(\.\d{1,4})?$/;d.on("input",function(){var a=d.val(),f=e.test(a);c[b]=f&&""!==a})},unbind:function(){},routine:function(){}},i["default"].binders["dom-*"]=function(a,b){var c=this.args[0];b&&setTimeout(function(){return a[c]()},0)},i["default"].binders["selectmenu-*"]=function(a,b){this.args[0]={appendto:"appendTo"}[this.args[0]]||this.args[0],h["default"](a).selectmenu("option",this.args[0],b)},i["default"].binders["selectmenu-css-*"]=function(a,b){h["default"](a).selectmenu("menuWidget").css(this.args[0],b)},i["default"].binders.selectrefresh={priority:99,routine:function(a,b){a=h["default"](a),("string"!=typeof b||(a.val(b),0!==a.find("option[value='"+b+"']").length))&&a.selectmenu("refresh")}},i["default"].binders.chosen={priority:100,publishes:!0,bind:function(a){var b=this.publish;h["default"](a).chosen({width:h["default"](a).css("width")}).change(function(){b(h["default"](this).val())})},unbind:function(a){return h["default"](a).chosen("destroy")}},i["default"].binders.chosenrefresh=function(a){return h["default"](a).trigger("chosen:updated")},h["default"].widget("ui.webtrader_spinner",h["default"].ui.spinner,{_buttonHtml:function(){var a=function(a,b,c,d,e){return b="ui-icon-"+b+"-1-"+("up"===a?"n":"s"),e="right: "+(e||"0px")+";",d=d||"5px",d="border-radius: 0 "+("up"==a?d+" 0":"0 "+d)+" 0","<button step='"+c+"' class='ui-spinner-button ui-spinner-"+a+"' style='"+e+d+"'><span class='ui-icon "+b+"'>&#9650;</span></button>"},b="";return b+=a("up","triangle",this.options.step_big||this.options.step,"5px"),b+=a("down","triangle","-"+(this.options.step_big||this.options.step),"5px")}}),i["default"].binders.spinner={priority:98,publishes:!0,bind:function(a){var b=(this.model,this.publish),c=h["default"](a);c.webtrader_spinner({stop:function(){var a=c.val();b(1*a)},spin:function(a){var b=h["default"](a.currentTarget).attr("step")+"",c=(b.split(".")[1]||[]).length;value=1*h["default"](this).val()+1*b,h["default"](this).val(value.toFixed(c)),a.preventDefault()},step:c.attr("step")||1,step_big:c.attr("step-big")||null})},unbind:function(a){return h["default"](a).webtrader_spinner("destroy")},routine:function(a,b){return h["default"](a).webtrader_spinner("value",1*b)}},i["default"].binders["input-enter"]={priority:93,publishes:!1,routine:function(a,b){h["default"](a).keyup(function(c){13==c.keyCode&&b(a)})},"function":!0},i["default"].binders["spinner-*"]=function(a,b){h["default"](a).webtrader_spinner("option",this.args[0],b)},i["default"].binders["dialog-*"]=function(a,b){h["default"](a).dialog("option",this.args[0],b)},i["default"].binders["color-picker"]={priority:96,publishes:!0,bind:function(a){var b=h["default"](a),c=this.publish,d=this.model,e=(d.value||"#cd0a0a",h["default"]('<div style="width:100%;"/>'));b.after(e),b.colorpicker({showOn:"alt",altField:e,position:{my:"left-100 bottom+5",of:"element",collision:"fit"},parts:["map","bar"],alpha:!0,layout:{map:[0,0,2,2],bar:[2,0,1,2]},colorFormat:"RGBA",part:{map:{size:128},bar:{size:128}},select:function(a,b){return c(b)}}),setTimeout(function(){parent=b.scrollParent(),parent.scroll(function(){return b.colorpicker("close")})},1e3)},unbind:function(){},routine:function(){}},i["default"].binders.slider={priority:95,publishes:!0,bind:function(a){var b=h["default"](a),c=h["default"]('<div class="ui-slider-handle"></div>');b.append(c);var d=(this.publish,this.model);b.slider({step:1*b.attr("step")||1,min:void 0===b.attr("min")?1:1*b.attr("min"),max:1*b.attr("max")||100,create:function(){c.text(h["default"](this).slider("value"))},slide:function(a,b){c.text(b.value),d.value=1*b.value}})},unbind:function(a){return h["default"](a).slider("destroy")},routine:function(a,b){h["default"](a).slider("value",b),h["default"](a).find("> div").text(b)}},i["default"].binders.datepicker={priority:94,publishes:!0,bind:function(a){var b=h["default"](a),c=this.publish,d=this.model,e={marginTop:b.attr("marginTop")||"0px",marginLeft:b.attr("marginLeft")||"0px"},f={showOn:d.showOn||"focus",numberOfMonths:1*b.attr("numberOfMonths")||2,dateFormat:d.dateFormat||"yy-mm-dd",showAnim:d.showAnim||"drop",showButtonPanel:void 0!==d.showButtonPanel?d.showButtonPanel:!0,changeMonth:d.changeMonth||!0,changeYear:d.changeYear||!0,onSelect:function(){h["default"](this).change()},beforeShow:function(a,b){return b.dpDiv.css(e)},closeText:"Done".i18n(),currentText:"Today".i18n()};d.yearRange?f.yearRange=d.yearRange:(f.maxDate=d.maxDate||null,f.minDate=d.minDate||0);b.datepicker(f);b.on("change",function(){var a=b.val();c(a),b.blur()}),h["default"].datepicker._gotoToday=function(a){h["default"](a).datepicker("setDate",new Date).change().datepicker("hide")}},unbind:function(a){return h["default"](a).datepicker("destroy")},routine:function(a,b){return h["default"](a).datepicker("setDate",b)}},i["default"].binders.timepicker={priority:93,publishes:!0,bind:function(a){var b=h["default"](a),c=this.publish,d=this.model,e=function(){return!0},f={marginTop:b.attr("marginTop")||"0px",marginLeft:b.attr("marginLeft")||"0px"};b.on("change",function(){c(b.val()),b.blur()}),b.timepicker({showPeriod:d.showPeriod||!1,showLeadingZero:d.showLeadingZero||!0,showCloseButton:d.showCloseButton||!0,showNowButton:d.showNowButton||!1,onHourShow:d.onHourShow||e,onMinuteShow:d.onMinuteShow||e,beforeShow:function(a,b){return b.tpDiv.css(f)},onSelect:function(){h["default"](this).change()},hourText:"Hour".i18n(),minuteText:"Minute".i18n(),amPmText:["AM".i18n(),"PM".i18n()],closeButtonText:"Done".i18n(),nowButtonText:"Now".i18n(),deselectButtonText:"Deselect".i18n()})},unbind:function(a){return h["default"](a).timepicker("destroy")},routine:function(a,b){return h["default"](a).val(b)}},i["default"].binders["jq-class"]={priority:92,routine:function(a,b){a=h["default"](a);var c=h["default"]("#"+a.attr("id")+"-menu");c.removeClass(a.data("jq-class")),a.data({"jq-class":b}),c.addClass(b)}},i["default"].binders["input-default-btn"]=function(a,b){h["default"](a).keyup(function(a){13==a.keyCode&&h["default"](b).click()})},i["default"].binders["css-*"]=function(a,b){var c={};c[this.args[0]]=b,h["default"](a).css(c)},h["default"].fn.getHiddenOffsetWidth=function(){var a=h["default"](this).clone().appendTo("body"),b=a.outerWidth();return a.remove(),b},i["default"].binders["scale-font-size"]=function(a,b){var c=14,d=h["default"](a);do a.style.fontSize=c+"px",c-=1;while(d.getHiddenOffsetWidth()>1*b)},i["default"].binders.show=function(a,b){return a.style.display=b?"":"none",b},i["default"].binders.visible=function(a,b){return a.style.visibility=b?"visible":"hidden",b},i["default"].binders.disabled=function(a,b){b?h["default"](a).attr("disabled","disabled"):h["default"](a).removeAttr("disabled")},i["default"].binders["auto-scroll-bottom"]={priority:91,routine:function(a){h["default"](a).animate({scrollTop:a.scrollHeight-h["default"](a).height()},"slow")}};var k=function(a){var b=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/),c=0;return b&&(c=Math.max(0,(b[1]?b[1].length:0)-(b[2]?+b[2]:0))),c};i["default"].binders["decimal-round"]={priority:3001,routine:function(a,b){var c={0:1,1:10,2:100,3:1e3,4:1e4,5:1e5,8:1e8}[b];a=h["default"](a),a.on("input",function(){var d=a.attr("prefered-sign")||"",e=a.attr("no-symbol"),f=a.val();if(""!==f&&"-"!==f&&("+"!==f||e)){var g=k(f);if(!(g&&b>=g)){var h=f.endsWith(".")?".":"",i=f[0];i="+"===i||"-"===i?i:"",f=f.replace(/[^\d.-]/g,""),f=Math.round(f*c)/c,f=Math.abs(f),isNaN(f)||(d&&""===i&&(i=d),e&&(i=""),a.val(i+f+h))}}})}},i["default"].binders["attr-*"]={priority:1e4,routine:function(a,b){a.setAttribute(this.args[0],b)}},i["default"].binders.sparkline=function(a,b){var c=h["default"](a),d={type:"line",lineColor:"#606060",fillColor:!1,spotColor:"#00f000",minSpotColor:"#f00000",maxSpotColor:"#0000f0",highlightSpotColor:"#ffff00",highlightLineColor:"#000000",spotRadius:1.25};setTimeout(function(){c.sparkline(b,d),b.length?c.show():c.hide()},0)},i["default"].binders["indicative-color"]=function(a,b){var c=1*(a._perv_indicative_color||0),d="#d71818",e="#02920e",f="black";h["default"].isNumeric(b)?c!==1*b&&h["default"](a).css({color:1*b>c?e:d}):h["default"](a).css({color:f}),a._perv_indicative_color=b};var l=function(a,b,c){setTimeout(function(){for(var d=function(d){var e=c[d],f=g["default"].last(e.split(".")),h=a.observers[f];h&&(h.options.adapters["."].observe(h.target,g["default"].last(h.keypath.split(".")),function(){var a=h.target[g["default"].last(h.keypath.split("."))];b.value=a}),a.componentView.observe(e,function(a){return h.setValue(a)}))},e=0;e<c.length;++e)d(e)},0)};rivets.components["price-spinner"]={"static":["class","min"],template:function(){return'<span class="ui-spinner ui-widget ui-widget-content ui-corner-all">\n               <input rv-class="data.class" type="text" rv-value="data.value" rv-decimal-round="data.decimals | or 5" no-symbol="no-symbol" />\n             </span>'},initialize:function(a,b){{var c=1*(b.decimals||2);1*(b.min||0)}return l(this,b,["data.value"]),h["default"](a).on("change",function(){b.value=(+b.value).toFixed(c)}),h["default"](a).trigger("change"),{data:b}}};var m=a.bind=function(a,b){return i["default"].bind(a,b)},n=a.formatters=i["default"].formatters,o=a.binders=i["default"].binders;a["default"]={bind:m,formatters:n,binders:o}});