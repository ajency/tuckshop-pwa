webpackJsonp([2],{134:function(n,l,t){"use strict";function u(n){return i._23(2,[(n()(),i._4(0,null,null,0,"img",[],null,null,null,null,null))],null,null)}function o(n){return g._23(0,[(n()(),g._22(null,["\n\n"])),(n()(),g._4(0,null,null,10,"ion-header",[],null,null,null,null,null)),g._3(16384,null,0,b.a,[f.a,g.k,g.E,[2,p.a]],null,null),(n()(),g._22(null,["\n\t"])),(n()(),g._4(0,null,null,6,"ion-navbar",[["align","center"],["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,k.b,k.a)),g._3(49152,null,0,m.a,[v.a,[2,p.a],[2,y.a],f.a,g.k,g.E],null,null),(n()(),g._22(3,["\n\t\t"])),(n()(),g._4(0,null,3,2,"ion-title",[],null,null,null,w.b,w.a)),g._3(49152,null,0,C.a,[f.a,g.k,g.E,[2,E.a],[2,m.a]],null,null),(n()(),g._22(0,["Tuckshop"])),(n()(),g._22(3,["\n\t"])),(n()(),g._22(null,["\n"])),(n()(),g._22(null,["\n\n\n"])),(n()(),g._4(0,null,null,20,"ion-content",[["align","center"],["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,P.b,P.a)),g._3(4374528,null,0,I.a,[f.a,L.a,M.a,g.k,g.E,v.a,S.a,g.y,[2,p.a],[2,y.a]],null,null),(n()(),g._22(1,["\n\n\t"])),(n()(),g._22(1,["\n\n\n"])),(n()(),g._22(1,["\n\n\t"])),(n()(),g._4(0,null,1,1,"ion-img",[["height","400"],["src","/assets/img/tuckshop.jpg"],["width","400"]],null,null,null,u,h)),g._3(1228800,null,0,j.a,[g.k,g.E,L.a,[2,I.a],M.a],{src:[0,"src"],width:[1,"width"],height:[2,"height"]},null),(n()(),g._22(1,["\n\t"])),(n()(),g._4(0,null,1,0,"div",[],null,null,null,null,null)),(n()(),g._22(1,["\n\n\t"])),(n()(),g._4(0,null,1,1,"h2",[["class","welcome"],["text-center",""]],null,null,null,null,null)),(n()(),g._22(null,["\n\t\tGrab some Tuck!\n\t"])),(n()(),g._22(1,["\n\n\t"])),(n()(),g._4(0,null,1,5,"div",[["padding",""]],null,null,null,null,null)),(n()(),g._22(null,["\n\t\t"])),(n()(),g._4(0,null,null,2,"button",[["block",""],["color","ajency"],["ion-button",""]],null,[[null,"click"]],function(n,l,t){var u=!0,o=n.component;return"click"===l&&(u=!1!==o.handleClientLoad()&&u),u},O.b,O.a)),g._3(1097728,null,0,B.a,[[8,""],f.a,g.k,g.E],{color:[0,"color"],block:[1,"block"]},null),(n()(),g._22(0,[" Sign In "])),(n()(),g._22(null,["\n\t"])),(n()(),g._22(1,["\n\n\t"])),(n()(),g._22(1,["\n\n\n"]))],function(n,l){n(l,19,0,"/assets/img/tuckshop.jpg","400","400");n(l,29,0,"ajency","")},function(n,l){n(l,4,0,g._17(l,5)._hidden,g._17(l,5)._sbPadding),n(l,13,0,g._17(l,14).statusbarPadding,g._17(l,14)._hasRefresher)})}Object.defineProperty(l,"__esModule",{value:!0});t(0),t(62);var e=function(){function n(n,l){this.navCtrl=n,this.toastCtrl=l}return n.prototype.navigateToSearch=function(){this.navCtrl.push("SearchPage"),console.log("Navigating to another module")},n.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad HomePage")},n.prototype.handleClientLoad=function(){var n=this;gapi.load("client:auth2",function(){console.log(this),gapi.client.init({client_id:"676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com",cookiepolicy:"single_host_origin",scope:"https://www.googleapis.com/auth/spreadsheets"}).then(function(){console.log(gapi.auth2.getAuthInstance().isSignedIn.get()),console.log(n),gapi.auth2.getAuthInstance().isSignedIn.get()?n.navCtrl.push("SearchPage"):gapi.auth2.getAuthInstance().signIn().then(function(){n.navCtrl.push("SearchPage")})})})},n}(),a=(t(0),t(62),function(){return function(){}}()),i=t(0),s=t(67),r=t(3),_=t(28),c=t(8),d=[],h=i._2({encapsulation:2,styles:d,data:{}}),g=(i._1("ion-img",s.a,function(n){return i._23(0,[(n()(),i._4(0,null,null,1,"ion-img",[],null,null,null,u,h)),i._3(1228800,null,0,s.a,[i.k,i.E,r.a,[2,_.a],c.a],null,null)],null,null)},{src:"src",bounds:"bounds",cache:"cache",width:"width",height:"height",alt:"alt"},{},[]),t(0)),b=t(66),f=t(2),p=t(4),k=t(136),m=t(27),v=t(6),y=t(14),w=t(137),C=t(63),E=t(29),P=t(138),I=t(28),L=t(3),M=t(8),S=t(30),j=t(67),O=t(99),B=t(18),x=t(45),F=[],N=g._2({encapsulation:2,styles:F,data:{}}),A=g._1("page-home",e,function(n){return g._23(0,[(n()(),g._4(0,null,null,1,"page-home",[],null,null,null,o,N)),g._3(49152,null,0,e,[y.a,x.a],null,null)],null,null)},{},{},[]);t.d(l,"HomePageModuleNgFactory",function(){return G});var D=t(0),T=t(21),z=t(43),H=t(65),R=t(100),Z=t(101),K=t(102),V=t(32),Y=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function u(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(u.prototype=t.prototype,new u)}}(),q=function(n){function l(l){return n.call(this,l,[R.a,Z.a,K.a,A],[])||this}return Y(l,n),Object.defineProperty(l.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new T.i(this.parent.get(D.u))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new z.h),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new z.a),this.__FormBuilder_9},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new T.b,this._ɵba_1=new z.g,this._FormsModule_2=new z.b,this._ReactiveFormsModule_3=new z.f,this._IonicModule_4=new H.a,this._IonicPageModule_5=new H.b,this._HomePageModule_6=new a,this._LAZY_LOADED_TOKEN_10=e,this._HomePageModule_6},l.prototype.getInternal=function(n,l){return n===T.b?this._CommonModule_0:n===z.g?this._ɵba_1:n===z.b?this._FormsModule_2:n===z.f?this._ReactiveFormsModule_3:n===H.a?this._IonicModule_4:n===H.b?this._IonicPageModule_5:n===a?this._HomePageModule_6:n===T.j?this._NgLocalization_7:n===z.h?this._ɵi_8:n===z.a?this._FormBuilder_9:n===V.a?this._LAZY_LOADED_TOKEN_10:l},l.prototype.destroyInternal=function(){},l}(D.Z),G=new D.v(q,a)},136:function(n,l,t){"use strict";function u(n){return o._23(0,[(n()(),o._4(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),o._3(278528,null,0,e.f,[o.s,o.t,o.k,o.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o._4(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,t){var u=!0,o=n.component;return"click"===l&&(u=!1!==o.backButtonClick(t)&&u),u},i.b,i.a)),o._3(278528,null,0,e.f,[o.s,o.t,o.k,o.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._3(1097728,null,0,s.a,[[8,"bar-button"],r.a,o.k,o.E],null,null),(n()(),o._4(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._3(278528,null,0,e.f,[o.s,o.t,o.k,o.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._3(147456,null,0,_.a,[r.a,o.k,o.E],{name:[0,"name"]},null),(n()(),o._4(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),o._3(278528,null,0,e.f,[o.s,o.t,o.k,o.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o._22(null,["",""])),o._16(null,0),o._16(null,1),o._16(null,2),(n()(),o._4(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),o._3(278528,null,0,e.f,[o.s,o.t,o.k,o.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._16(null,3)],function(n,l){var t=l.component;n(l,1,0,"toolbar-background","toolbar-background-"+t._mode);n(l,3,0,"back-button","back-button-"+t._mode);n(l,6,0,"back-button-icon","back-button-icon-"+t._mode),n(l,7,0,t._bbIcon);n(l,9,0,"back-button-text","back-button-text-"+t._mode);n(l,15,0,"toolbar-content","toolbar-content-"+t._mode)},function(n,l){var t=l.component;n(l,2,0,t._hideBb),n(l,5,0,o._17(l,7)._hidden),n(l,10,0,t._backText)})}t.d(l,"a",function(){return b}),l.b=u;var o=t(0),e=t(21),a=t(27),i=t(99),s=t(18),r=t(2),_=t(42),c=t(6),d=t(4),h=t(14),g=[],b=o._2({encapsulation:2,styles:g,data:{}});o._1("ion-navbar",a.a,function(n){return o._23(0,[(n()(),o._4(0,null,null,1,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,u,b)),o._3(49152,null,0,a.a,[c.a,[2,d.a],[2,h.a],r.a,o.k,o.E],null,null)],null,function(n,l){n(l,0,0,o._17(l,1)._hidden,o._17(l,1)._sbPadding)})},{color:"color",mode:"mode",hideBackButton:"hideBackButton"},{},["[menuToggle],ion-buttons[left]","ion-buttons[start]","ion-buttons[end],ion-buttons[right]","*"])},137:function(n,l,t){"use strict";function u(n){return o._23(2,[(n()(),o._4(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),o._3(278528,null,0,e.f,[o.s,o.t,o.k,o.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._16(null,0)],function(n,l){n(l,1,0,"toolbar-title","toolbar-title-"+l.component._mode)},null)}t.d(l,"a",function(){return c}),l.b=u;var o=t(0),e=t(21),a=t(63),i=t(2),s=t(29),r=t(27),_=[],c=o._2({encapsulation:2,styles:_,data:{}});o._1("ion-title",a.a,function(n){return o._23(0,[(n()(),o._4(0,null,null,1,"ion-title",[],null,null,null,u,c)),o._3(49152,null,0,a.a,[i.a,o.k,o.E,[2,s.a],[2,r.a]],null,null)],null,null)},{color:"color",mode:"mode"},{},["*"])},138:function(n,l,t){"use strict";function u(n){return o._23(2,[o._20(402653184,1,{_fixedContent:0}),o._20(402653184,2,{_scrollContent:0}),(n()(),o._4(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),o._16(null,0),(n()(),o._4(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),o._16(null,1),o._16(null,2)],null,null)}t.d(l,"a",function(){return g}),l.b=u;var o=t(0),e=t(28),a=t(2),i=t(3),s=t(8),r=t(6),_=t(30),c=t(4),d=t(14),h=[],g=o._2({encapsulation:2,styles:h,data:{}});o._1("ion-content",e.a,function(n){return o._23(0,[(n()(),o._4(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,u,g)),o._3(4374528,null,0,e.a,[a.a,i.a,s.a,o.k,o.E,r.a,_.a,o.y,[2,c.a],[2,d.a]],null,null)],null,function(n,l){n(l,0,0,o._17(l,1).statusbarPadding,o._17(l,1)._hasRefresher)})},{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])}});