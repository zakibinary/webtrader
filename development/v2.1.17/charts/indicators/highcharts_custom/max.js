MAX=function(a,b,c){IndicatorBase.call(this,a,b,c),this.priceData=[],this.CalculateMAXValue=function(a,b){for(var c=this.indicators.getIndicatorOrPriceValue(a[b],this.options.appliedTo),d=0;d<this.options.period;d++){var e=this.indicators.getIndicatorOrPriceValue(a[b-d],this.options.appliedTo);c=Math.max(c,e)}return toFixed(c,4)};for(var d=0;d<a.length;d++){if(d>=this.options.period-1){var e=this.CalculateMAXValue(a,d);this.indicatorData.push({time:a[d].time,value:e})}else this.indicatorData.push({time:a[d].time,value:0});this.priceData.push(a[d])}},MAX.prototype=Object.create(IndicatorBase.prototype),MAX.prototype.constructor=MAX,MAX.prototype.addPoint=function(a){this.priceData.push(a);var b=this.CalculateMAXValue(this.priceData,this.priceData.length-1);return this.indicatorData.push({time:a.time,value:b}),[{id:this.uniqueID,value:b}]},MAX.prototype.update=function(a){var b=this.priceData.length-1;this.priceData[b].open=a.open,this.priceData[b].high=a.high,this.priceData[b].low=a.low,this.priceData[b].close=a.close;var c=this.CalculateMAXValue(this.priceData,b);return this.indicatorData[b].value=c,[{id:this.uniqueID,value:c}]},MAX.prototype.toString=function(){return"MAX ("+this.options.period+", "+this.indicators.appliedPriceString(this.options.appliedTo)+")"};