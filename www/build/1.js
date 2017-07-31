webpackJsonp([1],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    HomePage.prototype.navigateToSearch = function () {
        this.navCtrl.push('SearchPage');
        console.log('Navigating to another module');
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        // this.handleClientLoad();
        // this.googleInit();
    };
    HomePage.prototype.handleClientLoad = function () {
        var that = this;
        gapi.load('client:auth2', function () {
            console.log(this);
            gapi.client.init({
                client_id: '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'https://www.googleapis.com/auth/spreadsheets'
            }).then(function () {
                // Listen for sign-in state changes.
                // gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);
                // Handle the initial sign-in state.
                // let profile = googleUser.getBasicProfile();
                //       console.log('Token || ' + googleUser.getAuthResponse().id_token);
                //       console.log('ID: ' + profile.getId());
                //       console.log('Name: ' + profile.getName());
                //       console.log('Image URL: ' + profile.getImageUrl());
                //       console.log('Email: ' + profile.getEmail());
                // gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);
                console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
                console.log(that);
                if (gapi.auth2.getAuthInstance().isSignedIn.get())
                    that.navCtrl.push('SearchPage');
                else
                    gapi.auth2.getAuthInstance().signIn().then(function () {
                        that.navCtrl.push('SearchPage');
                    });
                // this.test(true);
                // that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                // authorizeButton.onclick = handleAuthClick;
                // signoutButton.onclick = handleSignoutClick;
            });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/aj-sujit/tuckshop-pwa/src/pages/home/home.html"*/'<!--<ion-header class= "bar bar-header bar-positive">\n\n<h1 align="center" >Search Google Spreadsheet</h1>\n\n</ion-header>\n-->\n\n<ion-header>\n	<ion-navbar align="center">\n		<ion-title>Tuckshop</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content align = "center" padding>\n\n	<!-- <ion-list>\n\n\n\n	</ion-list> -->\n\n\n<!-- <div id="googleBtn">Google</div> -->\n\n	<ion-img width="400" height="400" src="/assets/img/tuckshop.jpg"></ion-img>\n	<div></div>\n\n	<h2 text-center class="welcome">\n		Grab some Tuck!\n	</h2>\n\n	<div padding>\n		<button  (click) = "handleClientLoad()" ion-button block  color="ajency" > Sign In </button>\n	</div>\n\n	<!-- <ion-row>\n		<button (click)="navigateToSearch()"ion-button block color="ajency">Sign In</button>\n	</ion-row> -->\n\n\n</ion-content>'/*ion-inline-end:"/home/aj-sujit/tuckshop-pwa/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map