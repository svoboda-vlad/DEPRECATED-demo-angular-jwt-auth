(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0eKG":function(e,r,t){"use strict";t.d(r,"b",function(){return h}),t.d(r,"a",function(){return i});var n=t("JIr8"),c=t("AytR"),s=t("fXoL"),a=t("tk/3"),o=t("DbDQ");let h=(()=>{class e{constructor(e,r){this.http=e,this.errorResponseService=r,this.currencyCodeUrl="currency-code"}getCurrencyCodes(){return this.http.get(c.a.SERVER_URL+this.currencyCodeUrl).pipe(Object(n.a)(this.errorResponseService.handleError))}postCurrencyCode(e){return this.http.post(c.a.SERVER_URL+this.currencyCodeUrl,e).pipe(Object(n.a)(this.errorResponseService.handleError))}getCurrencyCode(e){return this.http.get(c.a.SERVER_URL+this.currencyCodeUrl+"/"+e).pipe(Object(n.a)(this.errorResponseService.handleError))}deleteCurrencyCode(e){return this.http.delete(c.a.SERVER_URL+this.currencyCodeUrl+"/"+e).pipe(Object(n.a)(this.errorResponseService.handleError))}updateCurrencyCode(e){return this.http.put(c.a.SERVER_URL+this.currencyCodeUrl+"/"+e.id,e).pipe(Object(n.a)(this.errorResponseService.handleError))}}return e.\u0275fac=function(r){return new(r||e)(s.Sb(a.b),s.Sb(o.a))},e.\u0275prov=s.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class i{constructor(e,r,t){this.currencyCode=e,this.country=r,this.rateQty=t}}},eguW:function(e,r,t){"use strict";t.d(r,"b",function(){return h}),t.d(r,"a",function(){return i});var n=t("JIr8"),c=t("AytR"),s=t("fXoL"),a=t("tk/3"),o=t("DbDQ");let h=(()=>{class e{constructor(e,r){this.http=e,this.errorResponseService=r,this.exchangeRateUrl="exchange-rate",this.exchangeRateByCurrencyCodeUrl="exchange-rate/currency-code",this.exchangeRateByDateUrl="exchange-rate/date"}getExchangeRatesByDate(e){const r=e.toISOString().slice(0,10);return this.http.get(c.a.SERVER_URL+this.exchangeRateByDateUrl+"/"+r).pipe(Object(n.a)(this.errorResponseService.handleError))}postExchangeRate(e){return this.http.post(c.a.SERVER_URL+this.exchangeRateUrl,e).pipe(Object(n.a)(this.errorResponseService.handleError))}getExchangeRatesByCurrencyCode(e){return this.http.get(c.a.SERVER_URL+this.exchangeRateByCurrencyCodeUrl+"/"+e.id).pipe(Object(n.a)(this.errorResponseService.handleError))}getExchangeRate(e){return this.http.get(c.a.SERVER_URL+this.exchangeRateUrl+"/"+e).pipe(Object(n.a)(this.errorResponseService.handleError))}deleteExchangeRate(e){return this.http.delete(c.a.SERVER_URL+this.exchangeRateUrl+"/"+e).pipe(Object(n.a)(this.errorResponseService.handleError))}updateExchangeRate(e){return this.http.put(c.a.SERVER_URL+this.exchangeRateUrl+"/"+e.id,e).pipe(Object(n.a)(this.errorResponseService.handleError))}}return e.\u0275fac=function(r){return new(r||e)(s.Sb(a.b),s.Sb(o.a))},e.\u0275prov=s.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class i{constructor(e,r,t){this.rateDate=e,this.rate=r,this.currencyCode=t}}}}]);