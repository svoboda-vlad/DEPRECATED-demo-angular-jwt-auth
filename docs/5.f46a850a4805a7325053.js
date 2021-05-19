(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{k1ab:function(e,r,t){"use strict";t.r(r),t.d(r,"CurrencyCodeModule",(function(){return B}));var c=t("ofXK"),n=t("tyNb"),o=t("3Pt+"),b=t("0eKG"),i=t("fXoL");function d(e,r){1&e&&(i.Ob(0,"div",10),i.Ob(1,"strong"),i.xc(2,"Failed to add new currency code!"),i.Nb(),i.xc(3," Please check the data.\n"),i.Nb())}function a(e,r){1&e&&(i.Ob(0,"div"),i.xc(1," Currency Code must be between 1 and 255 characters long. "),i.Nb())}function u(e,r){if(1&e&&(i.Ob(0,"div",10),i.vc(1,a,2,0,"div",11),i.Nb()),2&e){const e=i.bc();i.xb(1),i.hc("ngIf",e.currencyCode.errors.required||e.currencyCode.errors.minlength||e.currencyCode.errors.maxlength)}}function s(e,r){1&e&&(i.Ob(0,"div"),i.xc(1," Country must be between 1 and 255 characters long. "),i.Nb())}function l(e,r){if(1&e&&(i.Ob(0,"div",10),i.vc(1,s,2,0,"div",11),i.Nb()),2&e){const e=i.bc();i.xb(1),i.hc("ngIf",e.country.errors.required||e.country.errors.minlength||e.country.errors.maxlength)}}function y(e,r){1&e&&(i.Ob(0,"div"),i.xc(1," Rate Quantity must be a number greater than 0. "),i.Nb())}function h(e,r){if(1&e&&(i.Ob(0,"div",10),i.vc(1,y,2,0,"div",11),i.Nb()),2&e){const e=i.bc();i.xb(1),i.hc("ngIf",e.rateQty.errors.required||e.rateQty.errors.min)}}let f=(()=>{class e{constructor(e,r,t){this.fb=e,this.router=r,this.currencyCodeService=t,this.currencyCodeAddError=!1,this.error=null,this.currencyCodeAddForm=this.fb.group({currencyCode:[null,[o.m.required,o.m.minLength(1),o.m.maxLength(255)]],country:[null,[o.m.required,o.m.minLength(1),o.m.maxLength(255)]],rateQty:[0,[o.m.required,o.m.min(1)]]})}ngOnInit(){}addNewCurrencyCode(){const e=new b.a(this.currencyCodeAddForm.get("currencyCode").value,this.currencyCodeAddForm.get("country").value,this.currencyCodeAddForm.get("rateQty").value);this.currencyCodeAddSubscription=this.currencyCodeService.postCurrencyCode(e).subscribe(()=>{this.currencyCodeAddError=!1,this.router.navigate(["/currency-code"])},()=>this.currencyCodeAddError=!0)}get currencyCode(){return this.currencyCodeAddForm.get("currencyCode")}get country(){return this.currencyCodeAddForm.get("country")}get rateQty(){return this.currencyCodeAddForm.get("rateQty")}ngOnDestroy(){null!=this.currencyCodeAddSubscription&&this.currencyCodeAddSubscription.unsubscribe()}}return e.\u0275fac=function(r){return new(r||e)(i.Jb(o.b),i.Jb(n.b),i.Jb(b.b))},e.\u0275cmp=i.Db({type:e,selectors:[["daja-currency-code-add"]],decls:21,vars:6,consts:[["class","alert alert-danger",4,"ngIf"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","currencyCode"],["type","text","formControlName","currencyCode",1,"form-control"],["for","country"],["type","text","formControlName","country",1,"form-control"],["for","rateQty"],["type","number","formControlName","rateQty",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(e,r){1&e&&(i.Ob(0,"h2"),i.xc(1,"Add Currency Code"),i.Nb(),i.vc(2,d,4,0,"div",0),i.Ob(3,"form",1),i.Zb("ngSubmit",(function(){return r.addNewCurrencyCode()})),i.Ob(4,"div",2),i.Ob(5,"label",3),i.xc(6,"Currency Code"),i.Nb(),i.Kb(7,"input",4),i.vc(8,u,2,1,"div",0),i.Nb(),i.Ob(9,"div",2),i.Ob(10,"label",5),i.xc(11,"Country"),i.Nb(),i.Kb(12,"input",6),i.vc(13,l,2,1,"div",0),i.Nb(),i.Ob(14,"div",2),i.Ob(15,"label",7),i.xc(16,"Rate Quantity"),i.Nb(),i.Kb(17,"input",8),i.vc(18,h,2,1,"div",0),i.Nb(),i.Ob(19,"button",9),i.xc(20,"Save"),i.Nb(),i.Nb()),2&e&&(i.xb(2),i.hc("ngIf",r.currencyCodeAddError),i.xb(1),i.hc("formGroup",r.currencyCodeAddForm),i.xb(5),i.hc("ngIf",r.currencyCode.invalid&&(r.currencyCode.dirty||r.currencyCode.touched)),i.xb(5),i.hc("ngIf",r.country.invalid&&(r.country.dirty||r.country.touched)),i.xb(5),i.hc("ngIf",r.rateQty.invalid&&(r.rateQty.dirty||r.rateQty.touched)),i.xb(1),i.hc("disabled",r.currencyCodeAddForm.invalid))},directives:[c.l,o.o,o.i,o.d,o.a,o.h,o.c,o.k],styles:[""]}),e})();var g=t("z6cu"),v=t("JIr8");function x(e,r){if(1&e&&(i.Ob(0,"div",6),i.Ob(1,"table",7),i.Ob(2,"thead"),i.Ob(3,"tr",8),i.Ob(4,"th",9),i.xc(5,"Name"),i.Nb(),i.Ob(6,"th",9),i.xc(7,"Value"),i.Nb(),i.Nb(),i.Nb(),i.Ob(8,"tbody"),i.Ob(9,"tr"),i.Ob(10,"th"),i.xc(11,"ID"),i.Nb(),i.Ob(12,"td"),i.xc(13),i.Nb(),i.Nb(),i.Ob(14,"tr"),i.Ob(15,"th"),i.xc(16,"Currency Code"),i.Nb(),i.Ob(17,"td"),i.xc(18),i.Nb(),i.Nb(),i.Ob(19,"tr"),i.Ob(20,"th"),i.xc(21,"Country"),i.Nb(),i.Ob(22,"td"),i.xc(23),i.Nb(),i.Nb(),i.Ob(24,"tr"),i.Ob(25,"th"),i.xc(26,"Rate Qty"),i.Nb(),i.Ob(27,"td"),i.xc(28),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&e){const e=i.bc().ngIf;i.xb(13),i.yc(e.id),i.xb(5),i.yc(e.currencyCode),i.xb(5),i.yc(e.country),i.xb(5),i.yc(e.rateQty)}}function m(e,r){1&e&&(i.Ob(0,"div",10),i.xc(1,"No record found."),i.Nb())}const O=function(e){return["/exchange-rate","currency-code",e]};function C(e,r){if(1&e&&(i.Ob(0,"div"),i.vc(1,x,29,4,"div",2),i.vc(2,m,2,0,"ng-template",null,3,i.wc),i.Ob(4,"div"),i.Ob(5,"button",4),i.xc(6,"Add Exchange Rate"),i.Nb(),i.Nb(),i.Ob(7,"div"),i.Ob(8,"button",5),i.xc(9,"Show Exchange Rates"),i.Nb(),i.Nb(),i.Nb()),2&e){const e=r.ngIf,t=i.oc(3);i.xb(1),i.hc("ngIf",e)("ngIfElse",t),i.xb(7),i.hc("routerLink",i.kc(3,O,e.id))}}function N(e,r){if(1&e&&(i.Mb(0),i.Ob(1,"div",12),i.xc(2),i.Nb(),i.Lb()),2&e){const e=i.bc(2);i.xb(2),i.yc(e.error)}}function p(e,r){1&e&&(i.Ob(0,"div"),i.xc(1,"Loading ..."),i.Nb())}function I(e,r){if(1&e&&(i.vc(0,N,3,1,"ng-container",0),i.vc(1,p,2,0,"ng-template",null,11,i.wc)),2&e){const e=i.oc(2),r=i.bc();i.hc("ngIf",r.error)("ngIfElse",e)}}let w=(()=>{class e{constructor(e,r){this.currencyCodeService=e,this.route=r,this.currencyCode$=null,this.error=null}ngOnInit(){this.currencyCodeDetailSubscription=this.route.params.subscribe(e=>{this.currencyCode$=this.currencyCodeService.getCurrencyCode(e.id).pipe(Object(v.a)(e=>(this.error=e,Object(g.a)(e))))})}ngOnDestroy(){this.currencyCodeDetailSubscription.unsubscribe()}}return e.\u0275fac=function(r){return new(r||e)(i.Jb(b.b),i.Jb(n.a))},e.\u0275cmp=i.Db({type:e,selectors:[["daja-currency-code-detail"]],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["loadingOrError",""],["class","table-responsive-sm",4,"ngIf","ngIfElse"],["notFound",""],["routerLink","exchange-rate/add",1,"btn","btn-primary"],[1,"btn","btn-primary",3,"routerLink"],[1,"table-responsive-sm"],[1,"table","table-sm"],[1,"table-secondary"],["scope","col"],[1,"alert","alert-warning"],["loading",""],[1,"alert","alert-danger"]],template:function(e,r){if(1&e&&(i.Ob(0,"h2"),i.xc(1,"Currency Code Detail"),i.Nb(),i.vc(2,C,10,5,"div",0),i.cc(3,"async"),i.vc(4,I,3,2,"ng-template",null,1,i.wc)),2&e){const e=i.oc(5);i.xb(2),i.hc("ngIf",i.dc(3,2,r.currencyCode$))("ngIfElse",e)}},directives:[c.l,n.c],pipes:[c.b],styles:[""]}),e})();var A=t("bOdf"),E=t("eguW");function R(e,r){1&e&&(i.Ob(0,"div",11),i.Ob(1,"strong"),i.xc(2,"Failed to add new exchange rate!"),i.Nb(),i.xc(3," Please check the data. "),i.Nb())}function S(e,r){1&e&&(i.Ob(0,"div"),i.xc(1," Rate Date is required. "),i.Nb())}function D(e,r){if(1&e&&(i.Ob(0,"div",11),i.vc(1,S,2,0,"div",12),i.Nb()),2&e){const e=i.bc(2);i.xb(1),i.hc("ngIf",e.rateDate.errors.required)}}function F(e,r){1&e&&(i.Ob(0,"div"),i.xc(1," Rate must be a number greater than 0. "),i.Nb())}function k(e,r){if(1&e&&(i.Ob(0,"div",11),i.vc(1,F,2,0,"div",12),i.Nb()),2&e){const e=i.bc(2);i.xb(1),i.hc("ngIf",e.rate.errors.required||e.rate.errors.min)}}const L=function(e){return["/currency-code",e]};function Q(e,r){if(1&e){const e=i.Pb();i.Ob(0,"div"),i.Ob(1,"div"),i.xc(2,"Currency code: "),i.Ob(3,"a",2),i.xc(4),i.Nb(),i.Nb(),i.vc(5,R,4,0,"div",3),i.Ob(6,"form",4),i.Zb("ngSubmit",(function(){return i.pc(e),i.bc().addNewExchangeRate()})),i.Ob(7,"div",5),i.Ob(8,"label",6),i.xc(9,"Rate Date"),i.Nb(),i.Kb(10,"input",7),i.vc(11,D,2,1,"div",3),i.Nb(),i.Ob(12,"div",5),i.Ob(13,"label",8),i.xc(14,"Rate"),i.Nb(),i.Kb(15,"input",9),i.vc(16,k,2,1,"div",3),i.Nb(),i.Ob(17,"button",10),i.xc(18,"Save"),i.Nb(),i.Nb(),i.Nb()}if(2&e){const e=i.bc();i.xb(3),i.hc("routerLink",i.kc(7,L,e.currencyCode.id)),i.xb(1),i.yc(e.currencyCode.currencyCode),i.xb(1),i.hc("ngIf",e.exchangeRateAddError),i.xb(1),i.hc("formGroup",e.exchangeRateAddForm),i.xb(5),i.hc("ngIf",e.rateDate.invalid&&(e.rateDate.dirty||e.rateDate.touched)),i.xb(5),i.hc("ngIf",e.rate.invalid&&(e.rate.dirty||e.rate.touched)),i.xb(1),i.hc("disabled",e.exchangeRateAddForm.invalid)}}function J(e,r){if(1&e&&(i.Mb(0),i.Ob(1,"div",11),i.xc(2),i.Nb(),i.Lb()),2&e){const e=i.bc(2);i.xb(2),i.yc(e.currencyCodeError)}}function j(e,r){1&e&&(i.Ob(0,"div"),i.xc(1,"Loading ..."),i.Nb())}function q(e,r){if(1&e&&(i.vc(0,J,3,1,"ng-container",0),i.vc(1,j,2,0,"ng-template",null,13,i.wc)),2&e){const e=i.oc(2),r=i.bc();i.hc("ngIf",r.currencyCodeError)("ngIfElse",e)}}let G=(()=>{class e{constructor(e,r,t,c,n){this.fb=e,this.router=r,this.exchangeRateService=t,this.currencyCodeService=c,this.route=n,this.exchangeRateAddError=!1,this.currencyCodeError=null,this.currencyCode=null,this.exchangeRateAddForm=this.fb.group({rateDate:[null,[o.m.required]],rate:[0,[o.m.required,o.m.min(.001)]]})}ngOnInit(){this.currencyCodeSubscription=this.route.params.pipe(Object(A.a)(e=>this.currencyCodeService.getCurrencyCode(e.id))).subscribe(e=>this.currencyCode=e,e=>(this.currencyCodeError=e,Object(g.a)(e)))}addNewExchangeRate(){const e=new E.a(this.exchangeRateAddForm.get("rateDate").value,this.exchangeRateAddForm.get("rate").value,this.currencyCode);this.exchangeRateAddSubscription=this.exchangeRateService.postExchangeRate(e).subscribe(()=>{this.exchangeRateAddError=!1,this.router.navigate(["/exchange-rate/currency-code",this.currencyCode.id])},()=>this.exchangeRateAddError=!0)}get rateDate(){return this.exchangeRateAddForm.get("rateDate")}get rate(){return this.exchangeRateAddForm.get("rate")}ngOnDestroy(){this.currencyCodeSubscription.unsubscribe(),null!=this.exchangeRateAddSubscription&&this.exchangeRateAddSubscription.unsubscribe()}}return e.\u0275fac=function(r){return new(r||e)(i.Jb(o.b),i.Jb(n.b),i.Jb(E.b),i.Jb(b.b),i.Jb(n.a))},e.\u0275cmp=i.Db({type:e,selectors:[["daja-exchange-rate-add"]],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["loadingOrError",""],[3,"routerLink"],["class","alert alert-danger",4,"ngIf"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","rateDate"],["type","date","formControlName","rateDate",1,"form-control"],["for","rate"],["type","number","formControlName","rate",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"],[4,"ngIf"],["loading",""]],template:function(e,r){if(1&e&&(i.Ob(0,"h2"),i.xc(1,"Add Exchange Rate"),i.Nb(),i.vc(2,Q,19,9,"div",0),i.vc(3,q,3,2,"ng-template",null,1,i.wc)),2&e){const e=i.oc(4);i.xb(2),i.hc("ngIf",r.currencyCode)("ngIfElse",e)}},directives:[c.l,n.e,o.o,o.i,o.d,o.a,o.h,o.c,o.k],styles:[""]}),e})();const K=function(e){return["/currency-code",e]};function $(e,r){if(1&e&&(i.Ob(0,"tr"),i.Ob(1,"td"),i.Ob(2,"a",10),i.xc(3),i.Nb(),i.Nb(),i.Ob(4,"td"),i.xc(5),i.Nb(),i.Ob(6,"td"),i.xc(7),i.Nb(),i.Nb()),2&e){const e=r.$implicit;i.xb(2),i.hc("routerLink",i.kc(4,K,e.id)),i.xb(1),i.yc(e.currencyCode),i.xb(2),i.yc(e.country),i.xb(2),i.yc(e.rateQty)}}function M(e,r){if(1&e&&(i.Ob(0,"div",5),i.Ob(1,"table",6),i.Ob(2,"thead"),i.Ob(3,"tr",7),i.Ob(4,"th",8),i.xc(5,"Currency Code"),i.Nb(),i.Ob(6,"th",8),i.xc(7,"Country"),i.Nb(),i.Ob(8,"th",8),i.xc(9,"Rate Qty"),i.Nb(),i.Nb(),i.Nb(),i.Ob(10,"tbody"),i.vc(11,$,8,6,"tr",9),i.Nb(),i.Nb(),i.Nb()),2&e){const e=i.bc().ngIf;i.xb(11),i.hc("ngForOf",e)}}function P(e,r){1&e&&(i.Ob(0,"div",11),i.xc(1,"No records found."),i.Nb())}function H(e,r){if(1&e&&(i.Ob(0,"div"),i.vc(1,M,12,1,"div",3),i.vc(2,P,2,0,"ng-template",null,4,i.wc),i.Nb()),2&e){const e=r.ngIf,t=i.oc(3);i.xb(1),i.hc("ngIf",e.length>0)("ngIfElse",t)}}function X(e,r){if(1&e&&(i.Mb(0),i.Ob(1,"div",13),i.xc(2),i.Nb(),i.Lb()),2&e){const e=i.bc(2);i.xb(2),i.yc(e.error)}}function Z(e,r){1&e&&(i.Ob(0,"div"),i.xc(1,"Loading ..."),i.Nb())}function z(e,r){if(1&e&&(i.vc(0,X,3,1,"ng-container",1),i.vc(1,Z,2,0,"ng-template",null,12,i.wc)),2&e){const e=i.oc(2),r=i.bc();i.hc("ngIf",r.error)("ngIfElse",e)}}const V=[{path:"",component:(()=>{class e{constructor(e){this.currencyCodeService=e,this.currencyCodes$=null,this.error=null}ngOnInit(){this.currencyCodes$=this.currencyCodeService.getCurrencyCodes().pipe(Object(v.a)(e=>(this.error=e,Object(g.a)(e))))}}return e.\u0275fac=function(r){return new(r||e)(i.Jb(b.b))},e.\u0275cmp=i.Db({type:e,selectors:[["daja-currency-code"]],decls:9,vars:4,consts:[["routerLink","/currency-code/add",1,"btn","btn-primary"],[4,"ngIf","ngIfElse"],["loadingOrError",""],["class","table-responsive-sm",4,"ngIf","ngIfElse"],["notFound",""],[1,"table-responsive-sm"],[1,"table","table-sm"],[1,"table-secondary"],["scope","col"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"alert","alert-warning"],["loading",""],[1,"alert","alert-danger"]],template:function(e,r){if(1&e&&(i.Ob(0,"h2"),i.xc(1,"Currency Codes"),i.Nb(),i.Ob(2,"div"),i.Ob(3,"button",0),i.xc(4,"Add New Currency Code"),i.Nb(),i.Nb(),i.vc(5,H,4,2,"div",1),i.cc(6,"async"),i.vc(7,z,3,2,"ng-template",null,2,i.wc)),2&e){const e=i.oc(8);i.xb(5),i.hc("ngIf",i.dc(6,2,r.currencyCodes$))("ngIfElse",e)}},directives:[n.c,c.l,c.k,n.e],pipes:[c.b],styles:[""]}),e})()},{path:"add",component:f},{path:":id",component:w},{path:":id/exchange-rate/add",component:G}];let W=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(r){return new(r||e)},imports:[[n.f.forChild(V)],n.f]}),e})(),B=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(r){return new(r||e)},imports:[[c.c,W,o.l]]}),e})()}}]);