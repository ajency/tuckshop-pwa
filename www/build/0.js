webpackJsonp([0],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]
        ]
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, zone, navParams, viewCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingItems = false;
        this.loadResults = false;
        this.loadError = false;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
        this.handleClientLoad();
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    SearchPage.prototype.errorToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Something went wrong! Please try again.',
            showCloseButton: true,
            closeButtonText: "OK",
            dismissOnPageChange: true
        });
        toast.present();
    };
    // Authentication of user to search 
    SearchPage.prototype.handleClientLoad = function () {
        console.log("handleClientLoad");
        var that = this;
        gapi.load('client:auth2', function () {
            gapi.client.init({
                client_id: '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'https://www.googleapis.com/auth/spreadsheets'
            }).then(function () {
                // Listen for sign-in state changes.
                gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);
                console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
                // this.test(true);
                that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                // authorizeButton.onclick = handleAuthClick;
                // signoutButton.onclick = handleSignoutClick;
            });
        });
    };
    SearchPage.prototype.updateSigninStatus = function (isSignedIn) {
        if (isSignedIn) {
            //Do nothing
            this.callScriptFunction();
        }
        else {
            // *  Sign in the user upon button click.
            gapi.auth2.getAuthInstance().signIn();
            // this.navCtrl.push('SearchPage');
        }
    };
    //search and display part
    SearchPage.prototype.callScriptFunction = function () {
        // if(ev.target.value!=undefined && ev.target.value != "") {
        //      	this.loadingItems = true;
        //      	this.loadError = false;
        //      	console.log("callScriptFunction", ev.target.value);
        var scriptId = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";
        var that = this;
        // Create execution request.
        var request = {
            'function': 'search',
            'parameters': ""
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
            that.processResponse(resp);
        });
        // }
    };
    SearchPage.prototype.processResponse = function (resp) {
        this.response = resp.response.result;
        console.log(this.response);
        if (Object.keys(this.response).length == 0) {
            this.loadError = true;
            this.loadingItems = false;
        }
        this.loadingItems = false;
        this.zone.run(function () { });
    };
    SearchPage.prototype.confirmPurchase = function (item) {
        var product = [];
        product = item;
        var modal = this.modalCtrl.create('BuyPage', { item: product });
        console.log(item.itemName);
        modal.present();
    };
    SearchPage.prototype.onCancel = function () {
        console.log("cancel button");
    };
    SearchPage.prototype.callFilter = function () {
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/home/aj-sujit/tuckshop-pwa/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n	<ion-navbar align="center" color="ajency">\n		<ion-title>Tuckshop</ion-title>\n		<ion-buttons start>\n      <button ion-button>\n        <ion-icon name="contact" >\n        	\n        </ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n	<!-- Search Bar-->\n	<ion-searchbar (ionInput)="callFilter($event)" [(ngModel)]="myInput" debounce = 2000 autocomplete = "on" autocorrect = "on">\n ></ion-searchbar>\n\n\n	<div *ngIf="loadingItems" text-center class="search-load">\n		<ion-spinner margin color="ajency"></ion-spinner>\n	</div>\n\n	<ion-list >\n		<ion-item *ngFor="let item of response" (click)="confirmPurchase(item)" class="fadeInUp">\n			{{ item.itemName }}\n			<div item-end><small>Rs.</small>{{item.price}}</div>\n		</ion-item>\n	</ion-list>\n\n\n\n	<div margin text-center *ngIf="loadError">\n		No Results\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/aj-sujit/tuckshop-pwa/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(191);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=0.js.map