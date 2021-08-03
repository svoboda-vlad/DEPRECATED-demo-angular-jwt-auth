(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{k1ab:function(e,r,t){"use strict";t.r(r),t.d(r,"CurrencyCodeModule",function(){return ae});var c=t("ofXK"),n=t("tyNb"),i=t("3Pt+"),o=t("0eKG"),b=t("fXoL");function d(e,r){1&e&&(b.Ob(0,"div",10),b.Ob(1,"strong"),b.kc(2,"Failed to add new currency code!"),b.Nb(),b.kc(3," Please check the data.\n"),b.Nb())}function u(e,r){1&e&&(b.Ob(0,"div"),b.kc(1," Currency Code must be between 1 and 255 characters long. "),b.Nb())}function a(e,r){if(1&e&&(b.Ob(0,"div",10),b.ic(1,u,2,0,"div",11),b.Nb()),2&e){const e=b.Xb();b.zb(1),b.bc("ngIf",e.currencyCode.errors.required||e.currencyCode.errors.minlength||e.currencyCode.errors.maxlength)}}function s(e,r){1&e&&(b.Ob(0,"div"),b.kc(1," Country must be between 1 and 255 characters long. "),b.Nb())}function l(e,r){if(1&e&&(b.Ob(0,"div",10),b.ic(1,s,2,0,"div",11),b.Nb()),2&e){const e=b.Xb();b.zb(1),b.bc("ngIf",e.country.errors.required||e.country.errors.minlength||e.country.errors.maxlength)}}function y(e,r){1&e&&(b.Ob(0,"div"),b.kc(1," Rate Quantity must be a number greater than 0. "),b.Nb())}function f(e,r){if(1&e&&(b.Ob(0,"div",10),b.ic(1,y,2,0,"div",11),b.Nb()),2&e){const e=b.Xb();b.zb(1),b.bc("ngIf",e.rateQty.errors.required||e.rateQty.errors.min)}}let g=(()=>{class e{constructor(e,r,t){this.fb=e,this.router=r,this.currencyCodeService=t,this.currencyCodeAddError=!1,this.error=null,this.currencyCodeAddForm=this.fb.group({currencyCode:[null,[i.i.required,i.i.minLength(1),i.i.maxLength(255)]],country:[null,[i.i.required,i.i.minLength(1),i.i.maxLength(255)]],rateQty:[0,[i.i.required,i.i.min(1)]]})}ngOnInit(){}addNewCurrencyCode(){const e=new o.a(this.currencyCodeAddForm.get("currencyCode").value,this.currencyCodeAddForm.get("country").value,this.currencyCodeAddForm.get("rateQty").value);this.currencyCodeAddSubscription=this.currencyCodeService.postCurrencyCode(e).subscribe(()=>{this.currencyCodeAddError=!1,this.router.navigate(["/currency-code"])},()=>this.currencyCodeAddError=!0)}get currencyCode(){return this.currencyCodeAddForm.get("currencyCode")}get country(){return this.currencyCodeAddForm.get("country")}get rateQty(){return this.currencyCodeAddForm.get("rateQty")}ngOnDestroy(){null!=this.currencyCodeAddSubscription&&this.currencyCodeAddSubscription.unsubscribe()}}return e.\u0275fac=function(r){return new(r||e)(b.Jb(i.b),b.Jb(n.b),b.Jb(o.b))},e.\u0275cmp=b.Db({type:e,selectors:[["daja-currency-code-add"]],decls:21,vars:6,consts:[["class","alert alert-danger",4,"ngIf"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","currencyCode"],["type","text","formControlName","currencyCode",1,"form-control"],["for","country"],["type","text","formControlName","country",1,"form-control"],["for","rateQty"],["type","number","formControlName","rateQty",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(e,r){1&e&&(b.Ob(0,"h2"),b.kc(1,"Add Currency Code"),b.Nb(),b.ic(2,d,4,0,"div",0),b.Ob(3,"form",1),b.Vb("ngSubmit",function(){return r.addNewCurrencyCode()}),b.Ob(4,"div",2),b.Ob(5,"label",3),b.kc(6,"Currency Code"),b.Nb(),b.Kb(7,"input",4),b.ic(8,a,2,1,"div",0),b.Nb(),b.Ob(9,"div",2),b.Ob(10,"label",5),b.kc(11,"Country"),b.Nb(),b.Kb(12,"input",6),b.ic(13,l,2,1,"div",0),b.Nb(),b.Ob(14,"div",2),b.Ob(15,"label",7),b.kc(16,"Rate Quantity"),b.Nb(),b.Kb(17,"input",8),b.ic(18,f,2,1,"div",0),b.Nb(),b.Ob(19,"button",9),b.kc(20,"Save"),b.Nb(),b.Nb()),2&e&&(b.zb(2),b.bc("ngIf",r.currencyCodeAddError),b.zb(1),b.bc("formGroup",r.currencyCodeAddForm),b.zb(5),b.bc("ngIf",r.currencyCode.invalid&&(r.currencyCode.dirty||r.currencyCode.touched)),b.zb(5),b.bc("ngIf",r.country.invalid&&(r.country.dirty||r.country.touched)),b.zb(5),b.bc("ngIf",r.rateQty.invalid&&(r.rateQty.dirty||r.rateQty.touched)),b.zb(1),b.bc("disabled",r.currencyCodeAddForm.invalid))},directives:[c.k,i.j,i.f,i.d,i.a,i.e,i.c,i.g],styles:[""]}),e})();var h=t("z6cu"),C=t("JIr8");function m(e,r){if(1&e&&(b.Ob(0,"div",6),b.Ob(1,"table",7),b.Ob(2,"thead"),b.Ob(3,"tr",8),b.Ob(4,"th",9),b.kc(5,"Name"),b.Nb(),b.Ob(6,"th",9),b.kc(7,"Value"),b.Nb(),b.Nb(),b.Nb(),b.Ob(8,"tbody"),b.Ob(9,"tr"),b.Ob(10,"th"),b.kc(11,"ID"),b.Nb(),b.Ob(12,"td"),b.kc(13),b.Nb(),b.Nb(),b.Ob(14,"tr"),b.Ob(15,"th"),b.kc(16,"Currency Code"),b.Nb(),b.Ob(17,"td"),b.kc(18),b.Nb(),b.Nb(),b.Ob(19,"tr"),b.Ob(20,"th"),b.kc(21,"Country"),b.Nb(),b.Ob(22,"td"),b.kc(23),b.Nb(),b.Nb(),b.Ob(24,"tr"),b.Ob(25,"th"),b.kc(26,"Rate Qty"),b.Nb(),b.Ob(27,"td"),b.kc(28),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e){const e=b.Xb().ngIf;b.zb(13),b.lc(e.id),b.zb(5),b.lc(e.currencyCode),b.zb(5),b.lc(e.country),b.zb(5),b.lc(e.rateQty)}}function p(e,r){1&e&&(b.Ob(0,"div",10),b.kc(1,"No record found."),b.Nb())}const O=function(e){return["/currency-code",e,"edit"]},v=function(e){return["/exchange-rate","currency-code",e]},N=function(e){return["/currency-code",e,"exchange-rate","add"]};function k(e,r){if(1&e){const e=b.Pb();b.Ob(0,"div"),b.Ob(1,"div"),b.Ob(2,"button",2),b.kc(3,"Edit"),b.Nb(),b.Ob(4,"button",3),b.Vb("click",function(){b.fc(e);const t=r.ngIf;return b.Xb().deleteCurrencyCode(t.id)}),b.kc(5,"Delete"),b.Nb(),b.Nb(),b.ic(6,m,29,4,"div",4),b.ic(7,p,2,0,"ng-template",null,5,b.jc),b.Ob(9,"h5"),b.kc(10,"Exchange Rates"),b.Nb(),b.Ob(11,"div"),b.Ob(12,"button",2),b.kc(13,"Show Exchange Rates"),b.Nb(),b.Ob(14,"button",2),b.kc(15,"Add Exchange Rate"),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=r.ngIf,t=b.ec(8);b.zb(2),b.bc("routerLink",b.cc(5,O,e.id)),b.zb(4),b.bc("ngIf",e)("ngIfElse",t),b.zb(6),b.bc("routerLink",b.cc(7,v,e.id)),b.zb(2),b.bc("routerLink",b.cc(9,N,e.id))}}function I(e,r){if(1&e&&(b.Mb(0),b.Ob(1,"div",12),b.kc(2),b.Nb(),b.Lb()),2&e){const e=b.Xb(2);b.zb(2),b.lc(e.error)}}function E(e,r){1&e&&(b.Ob(0,"div"),b.kc(1,"Loading ..."),b.Nb())}function z(e,r){if(1&e&&(b.ic(0,I,3,1,"ng-container",0),b.ic(1,E,2,0,"ng-template",null,11,b.jc)),2&e){const e=b.ec(2),r=b.Xb();b.bc("ngIf",r.error)("ngIfElse",e)}}let x=(()=>{class e{constructor(e,r,t){this.currencyCodeService=e,this.route=r,this.router=t,this.currencyCode$=null,this.error=null,this.deleteError=null}ngOnInit(){this.currencyCodeDetailSubscription=this.route.params.subscribe(e=>{this.currencyCode$=this.currencyCodeService.getCurrencyCode(e.id).pipe(Object(C.a)(e=>(this.error=e,Object(h.a)(e))))})}ngOnDestroy(){this.currencyCodeDetailSubscription.unsubscribe(),null!=this.deleteCurrencyCodeSubscription&&this.deleteCurrencyCodeSubscription.unsubscribe()}deleteCurrencyCode(e){this.deleteCurrencyCodeSubscription=this.currencyCodeService.deleteCurrencyCode(e).subscribe(()=>{this.deleteError=!1,this.router.navigate(["/currency-code"])},()=>this.deleteError=!0)}}return e.\u0275fac=function(r){return new(r||e)(b.Jb(o.b),b.Jb(n.a),b.Jb(n.b))},e.\u0275cmp=b.Db({type:e,selectors:[["daja-currency-code-detail"]],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["loadingOrError",""],[1,"btn","btn-primary","m-1",3,"routerLink"],[1,"btn","btn-primary","m-1",3,"click"],["class","table-responsive-sm",4,"ngIf","ngIfElse"],["notFound",""],[1,"table-responsive-sm"],[1,"table","table-sm"],[1,"table-secondary"],["scope","col"],[1,"alert","alert-warning"],["loading",""],[1,"alert","alert-danger"]],template:function(e,r){if(1&e&&(b.Ob(0,"h2"),b.kc(1,"Currency Code Detail"),b.Nb(),b.ic(2,k,16,11,"div",0),b.Yb(3,"async"),b.ic(4,z,3,2,"ng-template",null,1,b.jc)),2&e){const e=b.ec(5);b.zb(2),b.bc("ngIf",b.Zb(3,2,r.currencyCode$))("ngIfElse",e)}},directives:[c.k,n.c],pipes:[c.b],styles:[""]}),e})();var S=t("lJxs");function A(e,r){1&e&&(b.Ob(0,"div",12),b.Ob(1,"strong"),b.kc(2,"Failed to update currency code!"),b.Nb(),b.kc(3," Please check the data. "),b.Nb())}function F(e,r){1&e&&(b.Ob(0,"div"),b.kc(1," Currency Code must be between 1 and 255 characters long. "),b.Nb())}function j(e,r){if(1&e&&(b.Ob(0,"div",12),b.ic(1,F,2,0,"div",13),b.Nb()),2&e){const e=b.Xb().ngIf;b.zb(1),b.bc("ngIf",e.errors.required||e.errors.minlength||e.errors.maxlength)}}function R(e,r){1&e&&(b.Ob(0,"div"),b.kc(1," Country must be between 1 and 255 characters long. "),b.Nb())}function Q(e,r){if(1&e&&(b.Ob(0,"div",12),b.ic(1,R,2,0,"div",13),b.Nb()),2&e){const e=b.Xb(2);b.zb(1),b.bc("ngIf",e.country.errors.required||e.country.errors.minlength||e.country.errors.maxlength)}}function w(e,r){1&e&&(b.Ob(0,"div"),b.kc(1," Rate Quantity must be a number greater than 0. "),b.Nb())}function D(e,r){if(1&e&&(b.Ob(0,"div",12),b.ic(1,w,2,0,"div",13),b.Nb()),2&e){const e=b.Xb(2);b.zb(1),b.bc("ngIf",e.rateQty.errors.required||e.rateQty.errors.min)}}function L(e,r){if(1&e){const e=b.Pb();b.Ob(0,"div"),b.ic(1,A,4,0,"div",2),b.Ob(2,"form",3),b.Vb("ngSubmit",function(){return b.fc(e),b.Xb().updateCurrencyCode()}),b.Ob(3,"div",4),b.Ob(4,"label",5),b.kc(5,"Currency Code"),b.Nb(),b.Kb(6,"input",6),b.ic(7,j,2,1,"div",2),b.Nb(),b.Ob(8,"div",4),b.Ob(9,"label",7),b.kc(10,"Country"),b.Nb(),b.Kb(11,"input",8),b.ic(12,Q,2,1,"div",2),b.Nb(),b.Ob(13,"div",4),b.Ob(14,"label",9),b.kc(15,"Rate Quantity"),b.Nb(),b.Kb(16,"input",10),b.ic(17,D,2,1,"div",2),b.Nb(),b.Ob(18,"button",11),b.kc(19,"Save"),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=r.ngIf,t=b.Xb();b.zb(1),b.bc("ngIf",t.currencyCodeUpdateError),b.zb(1),b.bc("formGroup",t.currencyCodeEditForm),b.zb(5),b.bc("ngIf",e.invalid&&(e.dirty||e.touched)),b.zb(5),b.bc("ngIf",t.country.invalid&&(t.country.dirty||t.country.touched)),b.zb(5),b.bc("ngIf",t.rateQty.invalid&&(t.rateQty.dirty||t.rateQty.touched)),b.zb(1),b.bc("disabled",t.currencyCodeEditForm.invalid)}}function X(e,r){if(1&e&&(b.Mb(0),b.Ob(1,"div",12),b.kc(2),b.Nb(),b.Lb()),2&e){const e=b.Xb(2);b.zb(2),b.lc(e.error)}}function J(e,r){1&e&&(b.Ob(0,"div"),b.kc(1,"Loading ..."),b.Nb())}function q(e,r){if(1&e&&(b.ic(0,X,3,1,"ng-container",0),b.ic(1,J,2,0,"ng-template",null,14,b.jc)),2&e){const e=b.ec(2),r=b.Xb();b.bc("ngIf",r.error)("ngIfElse",e)}}let K=(()=>{class e{constructor(e,r,t,c){this.fb=e,this.router=r,this.currencyCodeService=t,this.route=c,this.currencyCodeUpdateError=!1,this.error=null,this.currencyCodeObject=null,this.currencyCode$=null,this.currencyCodeEditForm=this.fb.group({currencyCode:[null,[i.i.required,i.i.minLength(1),i.i.maxLength(255)]],country:[null,[i.i.required,i.i.minLength(1),i.i.maxLength(255)]],rateQty:[0,[i.i.required,i.i.min(1)]]})}ngOnInit(){this.currencyCodeDetailSubscription=this.route.params.subscribe(e=>{this.currencyCode$=this.currencyCodeService.getCurrencyCode(e.id).pipe(Object(S.a)(e=>(this.currencyCodeObject=e,this.currencyCodeEditForm.patchValue({currencyCode:e.currencyCode,country:e.country,rateQty:e.rateQty}),e)),Object(C.a)(e=>(this.error=e,Object(h.a)(e))))})}updateCurrencyCode(){const e=new o.a(this.currencyCodeEditForm.get("currencyCode").value,this.currencyCodeEditForm.get("country").value,this.currencyCodeEditForm.get("rateQty").value);e.id=this.currencyCodeObject.id,this.currencyCodeUpdateSubscription=this.currencyCodeService.updateCurrencyCode(e).subscribe(()=>{this.currencyCodeUpdateError=!1,this.router.navigate(["/currency-code",e.id,"detail"])},()=>this.currencyCodeUpdateError=!0)}get currencyCode(){return this.currencyCodeEditForm.get("currencyCode")}get country(){return this.currencyCodeEditForm.get("country")}get rateQty(){return this.currencyCodeEditForm.get("rateQty")}ngOnDestroy(){this.currencyCodeDetailSubscription.unsubscribe(),null!=this.currencyCodeUpdateSubscription&&this.currencyCodeUpdateSubscription.unsubscribe()}}return e.\u0275fac=function(r){return new(r||e)(b.Jb(i.b),b.Jb(n.b),b.Jb(o.b),b.Jb(n.a))},e.\u0275cmp=b.Db({type:e,selectors:[["daja-currency-code-edit"]],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["loadingOrError",""],["class","alert alert-danger",4,"ngIf"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","currencyCode"],["type","text","formControlName","currencyCode",1,"form-control"],["for","country"],["type","text","formControlName","country",1,"form-control"],["for","rateQty"],["type","number","formControlName","rateQty",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"],[4,"ngIf"],["loading",""]],template:function(e,r){if(1&e&&(b.Ob(0,"h2"),b.kc(1,"Edit Currency Code"),b.Nb(),b.ic(2,L,20,6,"div",0),b.Yb(3,"async"),b.ic(4,q,3,2,"ng-template",null,1,b.jc)),2&e){const e=b.ec(5);b.zb(2),b.bc("ngIf",b.Zb(3,2,r.currencyCode$))("ngIfElse",e)}},directives:[c.k,i.j,i.f,i.d,i.a,i.e,i.c,i.g],pipes:[c.b],styles:[""]}),e})();var $=t("bOdf"),G=t("eguW");function P(e,r){1&e&&(b.Ob(0,"div",11),b.Ob(1,"strong"),b.kc(2,"Failed to add new exchange rate!"),b.Nb(),b.kc(3," Please check the data. "),b.Nb())}function U(e,r){1&e&&(b.Ob(0,"div"),b.kc(1," Rate Date is required. "),b.Nb())}function V(e,r){if(1&e&&(b.Ob(0,"div",11),b.ic(1,U,2,0,"div",12),b.Nb()),2&e){const e=b.Xb(2);b.zb(1),b.bc("ngIf",e.rateDate.errors.required)}}function M(e,r){1&e&&(b.Ob(0,"div"),b.kc(1," Rate must be a number greater than 0. "),b.Nb())}function Y(e,r){if(1&e&&(b.Ob(0,"div",11),b.ic(1,M,2,0,"div",12),b.Nb()),2&e){const e=b.Xb(2);b.zb(1),b.bc("ngIf",e.rate.errors.required||e.rate.errors.min)}}const Z=function(e){return["/currency-code",e,"detail"]};function H(e,r){if(1&e){const e=b.Pb();b.Ob(0,"div"),b.Ob(1,"div"),b.kc(2,"Currency code: "),b.Ob(3,"a",2),b.kc(4),b.Nb(),b.Nb(),b.ic(5,P,4,0,"div",3),b.Ob(6,"form",4),b.Vb("ngSubmit",function(){return b.fc(e),b.Xb().addNewExchangeRate()}),b.Ob(7,"div",5),b.Ob(8,"label",6),b.kc(9,"Rate Date"),b.Nb(),b.Kb(10,"input",7),b.ic(11,V,2,1,"div",3),b.Nb(),b.Ob(12,"div",5),b.Ob(13,"label",8),b.kc(14,"Rate"),b.Nb(),b.Kb(15,"input",9),b.ic(16,Y,2,1,"div",3),b.Nb(),b.Ob(17,"button",10),b.kc(18,"Save"),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=b.Xb();b.zb(3),b.bc("routerLink",b.cc(7,Z,e.currencyCode.id)),b.zb(1),b.lc(e.currencyCode.currencyCode),b.zb(1),b.bc("ngIf",e.exchangeRateAddError),b.zb(1),b.bc("formGroup",e.exchangeRateAddForm),b.zb(5),b.bc("ngIf",e.rateDate.invalid&&(e.rateDate.dirty||e.rateDate.touched)),b.zb(5),b.bc("ngIf",e.rate.invalid&&(e.rate.dirty||e.rate.touched)),b.zb(1),b.bc("disabled",e.exchangeRateAddForm.invalid)}}function W(e,r){if(1&e&&(b.Mb(0),b.Ob(1,"div",11),b.kc(2),b.Nb(),b.Lb()),2&e){const e=b.Xb(2);b.zb(2),b.lc(e.currencyCodeError)}}function B(e,r){1&e&&(b.Ob(0,"div"),b.kc(1,"Loading ..."),b.Nb())}function T(e,r){if(1&e&&(b.ic(0,W,3,1,"ng-container",0),b.ic(1,B,2,0,"ng-template",null,13,b.jc)),2&e){const e=b.ec(2),r=b.Xb();b.bc("ngIf",r.currencyCodeError)("ngIfElse",e)}}let _=(()=>{class e{constructor(e,r,t,c,n){this.fb=e,this.router=r,this.exchangeRateService=t,this.currencyCodeService=c,this.route=n,this.exchangeRateAddError=!1,this.currencyCodeError=null,this.currencyCode=null,this.exchangeRateAddForm=this.fb.group({rateDate:[null,[i.i.required]],rate:[0,[i.i.required,i.i.min(.001)]]})}ngOnInit(){this.currencyCodeSubscription=this.route.params.pipe(Object($.a)(e=>this.currencyCodeService.getCurrencyCode(e.id))).subscribe(e=>this.currencyCode=e,e=>(this.currencyCodeError=e,Object(h.a)(e)))}addNewExchangeRate(){const e=new G.a(this.exchangeRateAddForm.get("rateDate").value,this.exchangeRateAddForm.get("rate").value,this.currencyCode);this.exchangeRateAddSubscription=this.exchangeRateService.postExchangeRate(e).subscribe(()=>{this.exchangeRateAddError=!1,this.router.navigate(["/exchange-rate/currency-code",this.currencyCode.id])},()=>this.exchangeRateAddError=!0)}get rateDate(){return this.exchangeRateAddForm.get("rateDate")}get rate(){return this.exchangeRateAddForm.get("rate")}ngOnDestroy(){this.currencyCodeSubscription.unsubscribe(),null!=this.exchangeRateAddSubscription&&this.exchangeRateAddSubscription.unsubscribe()}}return e.\u0275fac=function(r){return new(r||e)(b.Jb(i.b),b.Jb(n.b),b.Jb(G.b),b.Jb(o.b),b.Jb(n.a))},e.\u0275cmp=b.Db({type:e,selectors:[["daja-exchange-rate-add"]],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["loadingOrError",""],[3,"routerLink"],["class","alert alert-danger",4,"ngIf"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","rateDate"],["type","date","formControlName","rateDate",1,"form-control"],["for","rate"],["type","number","formControlName","rate",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"],[4,"ngIf"],["loading",""]],template:function(e,r){if(1&e&&(b.Ob(0,"h2"),b.kc(1,"Add Exchange Rate"),b.Nb(),b.ic(2,H,19,9,"div",0),b.ic(3,T,3,2,"ng-template",null,1,b.jc)),2&e){const e=b.ec(4);b.zb(2),b.bc("ngIf",r.currencyCode)("ngIfElse",e)}},directives:[c.k,n.e,i.j,i.f,i.d,i.a,i.e,i.c,i.g],styles:[""]}),e})();const ee=function(e){return["/currency-code",e,"detail"]};function re(e,r){if(1&e&&(b.Ob(0,"tr"),b.Ob(1,"td"),b.Ob(2,"a",10),b.kc(3),b.Nb(),b.Nb(),b.Ob(4,"td"),b.kc(5),b.Nb(),b.Ob(6,"td"),b.kc(7),b.Nb(),b.Nb()),2&e){const e=r.$implicit;b.zb(2),b.bc("routerLink",b.cc(4,ee,e.id)),b.zb(1),b.lc(e.currencyCode),b.zb(2),b.lc(e.country),b.zb(2),b.lc(e.rateQty)}}function te(e,r){if(1&e&&(b.Ob(0,"div",5),b.Ob(1,"table",6),b.Ob(2,"thead"),b.Ob(3,"tr",7),b.Ob(4,"th",8),b.kc(5,"Currency Code"),b.Nb(),b.Ob(6,"th",8),b.kc(7,"Country"),b.Nb(),b.Ob(8,"th",8),b.kc(9,"Rate Qty"),b.Nb(),b.Nb(),b.Nb(),b.Ob(10,"tbody"),b.ic(11,re,8,6,"tr",9),b.Nb(),b.Nb(),b.Nb()),2&e){const e=b.Xb().ngIf;b.zb(11),b.bc("ngForOf",e)}}function ce(e,r){1&e&&(b.Ob(0,"div",11),b.kc(1,"No records found."),b.Nb())}function ne(e,r){if(1&e&&(b.Ob(0,"div"),b.ic(1,te,12,1,"div",3),b.ic(2,ce,2,0,"ng-template",null,4,b.jc),b.Nb()),2&e){const e=r.ngIf,t=b.ec(3);b.zb(1),b.bc("ngIf",e.length>0)("ngIfElse",t)}}function ie(e,r){if(1&e&&(b.Mb(0),b.Ob(1,"div",13),b.kc(2),b.Nb(),b.Lb()),2&e){const e=b.Xb(2);b.zb(2),b.lc(e.error)}}function oe(e,r){1&e&&(b.Ob(0,"div"),b.kc(1,"Loading ..."),b.Nb())}function be(e,r){if(1&e&&(b.ic(0,ie,3,1,"ng-container",1),b.ic(1,oe,2,0,"ng-template",null,12,b.jc)),2&e){const e=b.ec(2),r=b.Xb();b.bc("ngIf",r.error)("ngIfElse",e)}}const de=[{path:"",component:(()=>{class e{constructor(e){this.currencyCodeService=e,this.currencyCodes$=null,this.error=null}ngOnInit(){this.currencyCodes$=this.currencyCodeService.getCurrencyCodes().pipe(Object(C.a)(e=>(this.error=e,Object(h.a)(e))))}}return e.\u0275fac=function(r){return new(r||e)(b.Jb(o.b))},e.\u0275cmp=b.Db({type:e,selectors:[["daja-currency-code"]],decls:9,vars:4,consts:[["routerLink","/currency-code/add",1,"btn","btn-primary"],[4,"ngIf","ngIfElse"],["loadingOrError",""],["class","table-responsive-sm",4,"ngIf","ngIfElse"],["notFound",""],[1,"table-responsive-sm"],[1,"table","table-sm"],[1,"table-secondary"],["scope","col"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"alert","alert-warning"],["loading",""],[1,"alert","alert-danger"]],template:function(e,r){if(1&e&&(b.Ob(0,"h2"),b.kc(1,"Currency Codes"),b.Nb(),b.Ob(2,"div"),b.Ob(3,"button",0),b.kc(4,"Add New Currency Code"),b.Nb(),b.Nb(),b.ic(5,ne,4,2,"div",1),b.Yb(6,"async"),b.ic(7,be,3,2,"ng-template",null,2,b.jc)),2&e){const e=b.ec(8);b.zb(5),b.bc("ngIf",b.Zb(6,2,r.currencyCodes$))("ngIfElse",e)}},directives:[n.c,c.k,c.j,n.e],pipes:[c.b],styles:[""]}),e})()},{path:"add",component:g},{path:":id/detail",component:x},{path:":id/exchange-rate/add",component:_},{path:":id/edit",component:K}];let ue=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({imports:[[n.f.forChild(de)],n.f]}),e})(),ae=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({imports:[[c.c,ue,i.h]]}),e})()}}]);