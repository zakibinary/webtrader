ROCP=function(a,b,c){IndicatorBase.call(this,a,b,c),this.priceData=[];for(var d=0;d<a.length;d++){if(d>=this.options.period){var e=this.indicators.getIndicatorOrPriceValue(a[d],this.options.appliedTo),f=this.indicators.getIndicatorOrPriceValue(a[d-this.options.period],this.options.appliedTo),g=toFixed((e-f)/f,4);this.indicatorData.push({time:a[d].time,value:g})}else this.indicatorData.push({time:a[d].time,value:0});this.priceData.push(a[d])}},ROCP.prototype=Object.create(IndicatorBase.prototype),ROCP.prototype.constructor=ROCP,ROCP.prototype.addPoint=function(a){this.priceData.push(a);var b=this.priceData.length-1,c=this.indicators.getIndicatorOrPriceValue(this.priceData[b],this.options.appliedTo),d=this.indicators.getIndicatorOrPriceValue(this.priceData[b-this.options.period],this.options.appliedTo),e=toFixed((c-d)/d,4);return this.indicatorData.push({time:a.time,value:e}),[{id:this.uniqueID,value:e}]},ROCP.prototype.update=function(a){var b=this.priceData.length-1;this.priceData[b].open=a.open,this.priceData[b].high=a.high,this.priceData[b].low=a.low,this.priceData[b].close=a.close;var c=this.indicators.getIndicatorOrPriceValue(this.priceData[b],this.options.appliedTo),d=this.indicators.getIndicatorOrPriceValue(this.priceData[b-this.options.period],this.options.appliedTo),e=toFixed((c-d)/d,4);return this.indicatorData[b].value=e,[{id:this.uniqueID,value:e}]},ROCP.prototype.toString=function(){return"ROCP ("+this.options.period+", "+this.indicators.appliedPriceString(this.options.appliedTo)+")"};