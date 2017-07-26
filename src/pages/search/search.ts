import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Item } from '../../app/item';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

	obItem : Observable<Item[]>;
	items : Item[];
	errorMessage : String;

	private loadingItems = false;
	private loadResults = false;
	private loadError = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public modalCtrl: ModalController, public toastCtrl: ToastController, private http : Http) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SearchPage');
	}

	ionViewWillEnter() {
		this.viewCtrl.showBackButton(false);
	}

	errorToast() {
	    let toast = this.toastCtrl.create({
	      message: 'Something went wrong! Please try again.',
	      showCloseButton: true,
	      closeButtonText: "OK",
	      dismissOnPageChange: true
	    });
	    toast.present();
	}


	//search and display part

	url = "http://www.mocky.io/v2/5975a52c1100004501b1bb90";

	getI(ev) : void {
		this.loadingItems = true
		this.obItem = this.getItems(ev);
		this.obItem.subscribe(
		(response) => {
			console.log("items",response);
			this.items = response;
			this.loadingItems = false;
			this.loadError = false;
			this.loadResults = true;
		},
		(error) => {
			this.errorMessage = error;
			this.loadingItems = false;
			this.loadError = true;
			this.errorToast();
		});
	}

  	getItems(ev) : Observable<Item[]> {

	    var val = ev.target.value;
	    console.log(val);

	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');


	    return this.http.post(this.url,val,headers)
	        .map(this.extractData)
	        .catch(this.handleErrorObservable);
  	}

	private extractData(res: Response) {
		let body = res.json();
		console.log("extract data: ",body);
		return body.data;
	}

	private handleErrorObservable (error: Response | any) {
		console.error(error.message );
		return Observable.throw(error.message || error);
	}

	confirmPurchase(item) {
		let product = [];
		product = item;
		let modal = this.modalCtrl.create('BuyPage',{item: product});
		console.log(item.name)
		modal.present();
	}

}
