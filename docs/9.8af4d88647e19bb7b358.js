(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9QTQ":function(e,t,o){"use strict";o.r(t),o.d(t,"GoogleLoginModule",function(){return m});var n=o("ofXK"),r=o("tyNb"),i=o("z6cu"),s=o("bOdf"),c=o("lJxs"),a=o("JIr8"),l=o("AytR"),g=o("fXoL"),u=o("tk/3"),b=o("DbDQ");let h=(()=>{class e{constructor(e,t){this.http=e,this.errorResponseService=t,this.googleLoginUrl="google-login",this.authorizationHeader="Authorization",this.jwtKey="jwt"}logIn(e){return this.http.post(l.a.SERVER_URL+this.googleLoginUrl,e,{observe:"response"}).pipe(Object(c.a)(e=>localStorage.setItem(this.jwtKey,e.headers.get(this.authorizationHeader))),Object(a.a)(this.errorResponseService.handleError))}getJwtToken(){return localStorage.getItem(this.jwtKey)}logOut(){localStorage.removeItem(this.jwtKey)}}return e.\u0275fac=function(t){return new(t||e)(g.Sb(u.b),g.Sb(b.a))},e.\u0275prov=g.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class p{constructor(e){this.idToken=e}}var f=o("VGjC");function d(e,t){1&e&&g.Kb(0,"div")}function v(e,t){if(1&e&&(g.Mb(0),g.Ob(1,"div",3),g.kc(2),g.Nb(),g.Lb()),2&e){const e=g.Xb(2);g.zb(2),g.lc(e.error)}}function j(e,t){1&e&&(g.Ob(0,"div"),g.kc(1,"Loading ..."),g.Nb())}function w(e,t){if(1&e&&(g.ic(0,v,3,1,"ng-container",0),g.ic(1,j,2,0,"ng-template",null,2,g.jc)),2&e){const e=g.ec(2),t=g.Xb();g.bc("ngIf",t.error)("ngIfElse",e)}}const I=[{path:"",component:(()=>{class e{constructor(e,t,o){this.router=e,this.googleLoginService=t,this.userService=o,this.accessTokenKey="access_token",this.error=null,this.googleLogin$=null}ngOnInit(){let e="",t="";location.hash.replace("#","").split("&").forEach(o=>{const n=o.split("=");"access_token"==n[0]&&(e=n[1]),"id_token"==n[0]&&(t=n[1])}),localStorage.setItem(this.accessTokenKey,e);const o=new p(t);this.googleLogin$=this.googleLoginService.logIn(o).pipe(Object(s.a)(()=>this.userService.getCurrentUser().pipe(Object(c.a)(()=>{this.router.navigate([""])}))),Object(a.a)(e=>(this.error=e,Object(i.a)(e))))}}return e.\u0275fac=function(t){return new(t||e)(g.Jb(r.b),g.Jb(h),g.Jb(f.c))},e.\u0275cmp=g.Db({type:e,selectors:[["daja-google-login"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loadingOrError",""],["loading",""],[1,"alert","alert-danger"]],template:function(e,t){if(1&e&&(g.ic(0,d,1,0,"div",0),g.Yb(1,"async"),g.ic(2,w,3,2,"ng-template",null,1,g.jc)),2&e){const e=g.ec(3);g.bc("ngIf",g.Zb(1,2,t.googleLogin$))("ngIfElse",e)}},directives:[n.k],pipes:[n.b],styles:[""]}),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.Hb({type:e}),e.\u0275inj=g.Gb({imports:[[r.f.forChild(I)],r.f]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.Hb({type:e}),e.\u0275inj=g.Gb({imports:[[n.c,k]]}),e})()}}]);