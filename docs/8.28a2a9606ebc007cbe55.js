(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4D6J":function(t,n,e){"use strict";e.r(n),e.d(n,"NoteModule",(function(){return I}));var o=e("ofXK"),r=e("tyNb"),c=e("z6cu"),s=e("JIr8"),i=e("fXoL"),b=e("AytR"),l=e("tk/3"),a=e("DbDQ");let u=(()=>{class t{constructor(t,n){this.http=t,this.errorResponseService=n,this.noteUrl="note"}getNotes(){return this.http.get(b.a.SERVER_URL+this.noteUrl).pipe(Object(s.a)(this.errorResponseService.handleError))}postNote(t){return this.http.post(b.a.SERVER_URL+this.noteUrl,t).pipe(Object(s.a)(this.errorResponseService.handleError))}}return t.\u0275fac=function(n){return new(n||t)(i.Wb(l.b),i.Wb(a.a))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function f(t,n){if(1&t&&(i.Ob(0,"tr"),i.Ob(1,"td"),i.wc(2),i.Nb(),i.Ob(3,"td"),i.wc(4),i.Nb(),i.Nb()),2&t){const t=n.$implicit;i.xb(2),i.xc(t.id),i.xb(2),i.xc(t.content)}}function p(t,n){if(1&t&&(i.Ob(0,"div",4),i.Ob(1,"table",5),i.Ob(2,"thead"),i.Ob(3,"tr",6),i.Ob(4,"th",7),i.wc(5,"ID"),i.Nb(),i.Ob(6,"th",7),i.wc(7,"Content"),i.Nb(),i.Nb(),i.Nb(),i.Ob(8,"tbody"),i.uc(9,f,5,2,"tr",8),i.Nb(),i.Nb(),i.Nb()),2&t){const t=i.bc().ngIf;i.xb(9),i.gc("ngForOf",t)}}function d(t,n){1&t&&(i.Ob(0,"div",9),i.wc(1,"No records found."),i.Nb())}function g(t,n){if(1&t&&(i.Ob(0,"div"),i.uc(1,p,10,1,"div",2),i.uc(2,d,2,0,"ng-template",null,3,i.vc),i.Nb()),2&t){const t=n.ngIf,e=i.nc(3);i.xb(1),i.gc("ngIf",t.length>0)("ngIfElse",e)}}function h(t,n){if(1&t&&(i.Mb(0),i.Ob(1,"div",11),i.wc(2),i.Nb(),i.Lb()),2&t){const t=i.bc(2);i.xb(2),i.xc(t.error)}}function O(t,n){1&t&&(i.Ob(0,"div"),i.wc(1,"Loading ..."),i.Nb())}function v(t,n){if(1&t&&(i.uc(0,h,3,1,"ng-container",0),i.uc(1,O,2,0,"ng-template",null,10,i.vc)),2&t){const t=i.nc(2),n=i.bc();i.gc("ngIf",n.error)("ngIfElse",t)}}const N=[{path:"",component:(()=>{class t{constructor(t){this.noteService=t,this.notes$=null,this.error=null}ngOnInit(){this.notes$=this.noteService.getNotes().pipe(Object(s.a)(t=>(this.error=t,Object(c.a)(t))))}}return t.\u0275fac=function(n){return new(n||t)(i.Jb(u))},t.\u0275cmp=i.Db({type:t,selectors:[["daja-note"]],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["loadingOrError",""],["class","table-responsive-sm",4,"ngIf","ngIfElse"],["notFound",""],[1,"table-responsive-sm"],[1,"table","table-sm"],[1,"table-secondary"],["scope","col"],[4,"ngFor","ngForOf"],[1,"alert","alert-warning"],["loading",""],[1,"alert","alert-danger"]],template:function(t,n){if(1&t&&(i.Ob(0,"h2"),i.wc(1,"Notes"),i.Nb(),i.uc(2,g,4,2,"div",0),i.cc(3,"async"),i.uc(4,v,3,2,"ng-template",null,1,i.vc)),2&t){const t=i.nc(5);i.xb(2),i.gc("ngIf",i.dc(3,2,n.notes$))("ngIfElse",t)}},directives:[o.k,o.j],pipes:[o.b],styles:[""]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(n){return new(n||t)},imports:[[r.d.forChild(N)],r.d]}),t})(),I=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(n){return new(n||t)},imports:[[o.c,w]]}),t})()}}]);