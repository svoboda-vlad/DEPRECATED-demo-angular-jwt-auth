(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3WtA":function(e,n,t){"use strict";t.r(n),t.d(n,"HelloRestrictedModule",(function(){return h}));var c=t("ofXK"),r=t("tyNb"),i=t("z6cu"),o=t("JIr8"),s=t("XNvx"),l=t("fXoL"),a=t("4CrM");function u(e,n){if(1&e&&(l.Ob(0,"div",2),l.wc(1),l.Nb()),2&e){const e=n.ngIf;l.xb(1),l.yc(" ",e.text,"\n")}}function b(e,n){1&e&&(l.Mb(0),l.Ob(1,"div",5),l.wc(2,"ERROR"),l.Nb(),l.Lb())}function f(e,n){1&e&&(l.Ob(0,"div"),l.wc(1,"Loading ..."),l.Nb())}function d(e,n){if(1&e&&(l.uc(0,b,3,0,"ng-container",3),l.uc(1,f,2,0,"ng-template",null,4,l.vc)),2&e){const e=l.nc(2),n=l.bc();l.gc("ngIf",n.error)("ngIfElse",e)}}const g=[{path:"",component:(()=>{class e{constructor(e,n){this.loginService=e,this.helloService=n,this.hello$=null,this.error=null}ngOnInit(){this.loginService.login(new s.b("user","password")).pipe(Object(o.a)(e=>(this.error=e,Object(i.a)(e)))).subscribe(e=>{this.jwtToken=e.headers.get("Authorization"),this.hello$=this.helloService.getHelloRestricted(this.jwtToken).pipe(Object(o.a)(e=>(this.error=e,Object(i.a)(e))))})}}return e.\u0275fac=function(n){return new(n||e)(l.Jb(s.a),l.Jb(a.a))},e.\u0275cmp=l.Db({type:e,selectors:[["daja-hello-restricted"]],decls:4,vars:4,consts:[["class","m-2",4,"ngIf","ngIfElse"],["loadingOrError",""],[1,"m-2"],[4,"ngIf","ngIfElse"],["loading",""],[1,"alert","alert-danger"]],template:function(e,n){if(1&e&&(l.uc(0,u,2,1,"div",0),l.cc(1,"async"),l.uc(2,d,3,2,"ng-template",null,1,l.vc)),2&e){const e=l.nc(3);l.gc("ngIf",l.dc(1,2,n.hello$))("ngIfElse",e)}},directives:[c.k],pipes:[c.b],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(n){return new(n||e)},imports:[[r.b.forChild(g)],r.b]}),e})(),h=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(n){return new(n||e)},imports:[[c.c,p]]}),e})()}}]);