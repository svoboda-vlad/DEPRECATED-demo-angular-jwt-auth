(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{X3zk:function(r,n,t){"use strict";t.r(n),t.d(n,"LoginModule",(function(){return p}));var e=t("ofXK"),o=t("tyNb"),s=t("3Pt+"),i=t("XNvx"),a=t("bOdf"),u=t("fXoL"),c=t("0jD/");function l(r,n){1&r&&(u.Ob(0,"div",9),u.Ob(1,"strong"),u.xc(2,"Failed to login!"),u.Nb(),u.xc(3," Please check your username and password.\n"),u.Nb())}const b=[{path:"",component:(()=>{class r{constructor(r,n,t,e){this.fb=r,this.router=n,this.loginService=t,this.currentUserService=e,this.loginError=!1,this.loginForm=this.fb.group({username:[null,[s.m.required]],password:[null,[s.m.required]]})}ngOnInit(){this.loginService.getJwtToken()&&this.router.navigate([""])}logIn(){const r=new i.a(this.loginForm.get("username").value,this.loginForm.get("password").value);this.loginSubscription=this.loginService.logIn(r).pipe(Object(a.a)(()=>this.currentUserService.getCurrentUser())).subscribe(()=>{this.loginError=!1,this.router.navigate([""])},()=>this.loginError=!0)}useDefaultCredentials(){const r=new i.a("user","password");this.loginForm.patchValue({username:r.username,password:r.password})}ngOnDestroy(){null!=this.loginSubscription&&this.loginSubscription.unsubscribe()}}return r.\u0275fac=function(n){return new(n||r)(u.Jb(s.b),u.Jb(o.b),u.Jb(i.b),u.Jb(c.a))},r.\u0275cmp=u.Db({type:r,selectors:[["daja-login"]],decls:16,vars:2,consts:[["class","alert alert-danger",4,"ngIf"],[1,"btn","btn-primary",3,"click"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["type","text","formControlName","username",1,"form-control"],["for","password"],["type","password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-primary"],[1,"alert","alert-danger"]],template:function(r,n){1&r&&(u.Ob(0,"h2"),u.xc(1,"Login"),u.Nb(),u.vc(2,l,4,0,"div",0),u.Ob(3,"button",1),u.Zb("click",(function(){return n.useDefaultCredentials()})),u.xc(4," Use default credentials\n"),u.Nb(),u.Ob(5,"form",2),u.Zb("ngSubmit",(function(){return n.logIn()})),u.Ob(6,"div",3),u.Ob(7,"label",4),u.xc(8,"Username"),u.Nb(),u.Kb(9,"input",5),u.Nb(),u.Ob(10,"div",3),u.Ob(11,"label",6),u.xc(12,"Password"),u.Nb(),u.Kb(13,"input",7),u.Nb(),u.Ob(14,"button",8),u.xc(15,"Login"),u.Nb(),u.Nb()),2&r&&(u.xb(2),u.hc("ngIf",n.loginError),u.xb(3),u.hc("formGroup",n.loginForm))},directives:[e.l,s.o,s.i,s.d,s.a,s.h,s.c],styles:[""]}),r})()}];let g=(()=>{class r{}return r.\u0275mod=u.Hb({type:r}),r.\u0275inj=u.Gb({factory:function(n){return new(n||r)},imports:[[o.f.forChild(b)],o.f]}),r})(),p=(()=>{class r{}return r.\u0275mod=u.Hb({type:r}),r.\u0275inj=u.Gb({factory:function(n){return new(n||r)},imports:[[e.c,g,s.l]]}),r})()}}]);