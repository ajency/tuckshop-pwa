import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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

	constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private http : Http) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SearchPage');
	}

	ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }


	//search and display part

	url = "http://www.mocky.io/v2/5975a52c1100004501b1bb90";

	getI(ev) : void {
		this.obItem = this.getItems(ev);
		this.obItem.subscribe(
		(response) => {console.log("items",response); this.items = response;},
		(error) => {this.errorMessage = error});
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

}
