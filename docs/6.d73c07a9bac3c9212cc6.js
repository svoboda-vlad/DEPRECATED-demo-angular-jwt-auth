(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{SaXW:function(n,c,t){"use strict";t.r(c),t.d(c,"HelloModule",(function(){return g}));var e=t("ofXK"),o=t("tyNb"),r=t("z6cu"),l=t("JIr8"),i=t("fXoL"),s=t("4CrM");function b(n,c){if(1&n&&(i.Ob(0,"div"),i.wc(1),i.Nb()),2&n){const n=c.ngIf;i.xb(1),i.yc(" ",n.text," ")}}function u(n,c){if(1&n&&(i.Mb(0),i.Ob(1,"div",4),i.wc(2),i.Nb(),i.Lb()),2&n){const n=i.bc(2);i.xb(2),i.xc(n.error)}}function a(n,c){1&n&&(i.Ob(0,"div"),i.wc(1,"Loading ..."),i.Nb())}function f(n,c){if(1&n&&(i.uc(0,u,3,1,"ng-container",1),i.uc(1,a,2,0,"ng-template",null,3,i.vc)),2&n){const n=i.nc(2),c=i.bc();i.gc("ngIf",c.error)("ngIfElse",n)}}const p=[{path:"",component:(()=>{class n{constructor(n){this.helloService=n,this.hello$=null,this.error=null}ngOnInit(){this.hello$=this.helloService.getHello().pipe(Object(l.a)(n=>(this.error=n,Object(r.a)(n))))}}return n.\u0275fac=function(c){return new(c||n)(i.Jb(s.a))},n.\u0275cmp=i.Db({type:n,selectors:[["daja-hello"]],decls:7,vars:4,consts:[[1,"mb-2","p-3"],[4,"ngIf","ngIfElse"],["loadingOrError",""],["loading",""],[1,"alert","alert-danger"]],template:function(n,c){if(1&n&&(i.Ob(0,"div",0),i.Ob(1,"h2"),i.wc(2,"Hello"),i.Nb(),i.uc(3,b,2,1,"div",1),i.cc(4,"async"),i.uc(5,f,3,2,"ng-template",null,2,i.vc),i.Nb()),2&n){const n=i.nc(6);i.xb(3),i.gc("ngIf",i.dc(4,2,c.hello$))("ngIfElse",n)}},directives:[e.k],pipes:[e.b],styles:[""]}),n})()}];let d=(()=>{class n{}return n.\u0275mod=i.Hb({type:n}),n.\u0275inj=i.Gb({factory:function(c){return new(c||n)},imports:[[o.c.forChild(p)],o.c]}),n})(),g=(()=>{class n{}return n.\u0275mod=i.Hb({type:n}),n.\u0275inj=i.Gb({factory:function(c){return new(c||n)},imports:[[e.c,d]]}),n})()}}]);