webpackJsonp([2],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPageModule", function() { return BuyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyPageModule = (function () {
    function BuyPageModule() {
    }
    return BuyPageModule;
}());
BuyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__buy__["a" /* BuyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy__["a" /* BuyPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__buy__["a" /* BuyPage */]
        ]
    })
], BuyPageModule);

//# sourceMappingURL=buy.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyPage; });
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


/**
 * Generated class for the BuyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BuyPage = (function () {
    function BuyPage(navCtrl, navParams, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.item = [];
        this.item = this.navParams.get('item');
    }
    BuyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyPage');
    };
    BuyPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    BuyPage.prototype.handleClientLoad = function () {
        // let that = this;
        gapi.load('client:auth2', function () {
            gapi.client.init({
                client_id: '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'https://www.googleapis.com/auth/spreadsheets'
            }).then(function () {
                // Listen for sign-in state changes.
                // gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);
                console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
                var user = gapi.auth2.getAuthInstance().currentUser.get().BasicProfile.getEmail();
                console.log(user);
                // this.test(true);
                // that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                // authorizeButton.onclick = handleAuthClick;
                // signoutButton.onclick = handleSignoutClick;
            });
        });
    };
    BuyPage.prototype.onBuy = function (ev) {
        console.log("onBuy", ev);
        var scriptId = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";
        // let that = this;
        var user = gapi.auth2.getAuthInstance().currentUser.get().w3.U3;
        console.log(user);
        // Create execution request.
        var request = {
            'function': 'log',
            'parameters': [ev, user]
            // 'devMode': true   // Optional.
        };
        // Make the request.
        var op = gapi.client.request({
            'root': 'https://script.googleapis.com',
            'path': 'v1/scripts/' + scriptId + ':run',
            'method': 'POST',
            'body': request
        });
        //logging the results
        op.execute(function (resp) {
            // that.processResponse(resp);
        });
        this.viewCtrl.dismiss();
        this.confirmationToast();
    };
    BuyPage.prototype.confirmationToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Order placed successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    return BuyPage;
}());
BuyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-buy',template:/*ion-inline-start:"/home/aj-sujit/tuckshop-pwa/src/pages/buy/buy.html"*/'<!--\n  Generated template for the BuyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<ion-title>Are you sure you want to buy?</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list no-lines>\n		<ion-item no-padding>\n			<div item-left>\n				{{item.itemName}}\n			</div>\n			<div item-end>\n			  <small>Rs.</small>{{item.price}}\n			</div>\n		</ion-item>\n	</ion-list>\n	<p>\n		{{item.description}}\n	</p>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n		<ion-buttons >\n			<button ion-button color="danger" (click)="dismiss()">\n				Cancel\n			</button>\n		</ion-buttons>\n		<ion-buttons end>\n			<button ion-button color="dark" (click) = "onBuy(item.itemCode)">\n				Buy\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/aj-sujit/tuckshop-pwa/src/pages/buy/buy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], BuyPage);

//# sourceMappingURL=buy.js.map

/***/ })

});
//# sourceMappingURL=2.js.map