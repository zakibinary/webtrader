MOM=function(a,b,c){IndicatorBase.call(this,a,b,c),this.priceData=[];for(var d=0;d<a.length;d++){if(d>=this.options.period){var e=this.indicators.getIndicatorOrPriceValue(a[d],this.options.appliedTo),f=this.indicators.getIndicatorOrPriceValue(a[d-this.options.period],this.options.appliedTo),g=toFixed(100*(e-f),4);this.indicatorData.push({time:a[d].time,value:g})}else this.indicatorData.push({time:a[d].time,value:0});this.priceData.push(a[d])}},MOM.prototype=Object.create(IndicatorBase.prototype),MOM.prototype.constructor=MOM,MOM.prototype.addPoint=function(a){this.priceData.push(a);var b=this.priceData.length-1,c=this.indicators.getIndicatorOrPriceValue(this.priceData[b],this.options.appliedTo),d=this.indicators.getIndicatorOrPriceValue(this.priceData[b-this.options.period],this.options.appliedTo),e=toFixed(100*(c-d),4);return this.indicatorData.push({time:a.time,value:e}),[{id:this.uniqueID,value:e}]},MOM.prototype.update=function(a){var b=this.priceData.length-1;this.priceData[b].open=a.open,this.priceData[b].high=a.high,this.priceData[b].low=a.low,this.priceData[b].close=a.close;var c=this.indicators.getIndicatorOrPriceValue(this.priceData[b],this.options.appliedTo),d=this.indicators.getIndicatorOrPriceValue(this.priceData[b-this.options.period],this.options.appliedTo),e=toFixed(100*(c-d),4);return this.indicatorData[b].value=e,[{id:this.uniqueID,value:e}]},MOM.prototype.toString=function(){return"MOM ("+this.options.period+", "+this.indicators.appliedPriceString(this.options.appliedTo)+")"};