define(["exports"],function(a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var b={width:2,color:"red",dashStyle:"dash"},c=a.toggleCrossHair=function(a){var c=$(a).highcharts();c&&(c.xAxis[0].crosshair=c.xAxis[0].crosshair?!1:b,c.yAxis[0].crosshair=c.yAxis[0].crosshair?!1:b,c.tooltip.options.formatter=c.yAxis[0].crosshair?null:function(){return!1})};a["default"]={toggleCrossHair:c}});