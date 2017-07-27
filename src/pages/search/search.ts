import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Item } from '../../app/item';


declare const gapi : any;

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


	private loadingItems = false;
	private loadResults = false;
	private loadError = false;

	private response: any;

  // items : Array<Item>;
  // public items = new Item();
  	 public items : any [];
  	 public itemsss : any [];

  	   private itemss: any[];

	constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public modalCtrl: ModalController, public toastCtrl: ToastController) {
	this.initializeItems();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SearchPage');
		    console.log(this.items);


	}


	initializeItems() {

    this.itemss = [

     {'itemName' : 'Vanilla oreo','itemCode' : '111'},

     {'itemName' : 'Golden Oreo','itemCode' : '222'}

    ];

    console.log(this.itemss);

    for(var i= 0 ; i< 2;i++)
    {
    console.log(this.itemss[i].itemName, typeof(this.itemss[i].itemName));
    }

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

	// url = "http://www.mocky.io/v2/5975a52c1100004501b1bb90";


	// getI(ev) : void {
	// 	this.loadingItems = true
	// 	this.obItem = this.getItems(ev);
	// 	this.obItem.subscribe(
	// 	(response) => {
	// 		console.log("items",response);
	// 		this.items = response;
	// 		this.loadingItems = false;
	// 		this.loadError = false;
	// 		this.loadResults = true;
	// 	},
	// 	(error) => {
	// 		this.errorMessage = error;
	// 		this.loadingItems = false;
	// 		this.loadError = true;
	// 		this.errorToast();
	// 	});
	// }

 //  	getItems(ev) : Observable<Item[]> {

	//     var val = ev.target.value;
	//     console.log(val);

	//     let headers = new Headers();
	//     headers.append('Content-Type', 'application/json');


	//     return this.http.post(this.url,val,headers)
	//         .map(this.extractData)
	//         .catch(this.handleErrorObservable);
 //  	}


	// private extractData(res: Response) {
	// 	let body = res.json();
	// 	console.log("extract data: ",body);
	// 	return body.data;
	// }

	// private handleErrorObservable (error: Response | any) {
	// 	console.error(error.message );
	// 	return Observable.throw(error.message || error);
	// }




callScriptFunction(ev) {
        console.log("callScriptFunction", ev.target.value);
      var scriptId = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";

      let that = this;

       // Create execution request.
var request = {
    'function': 'search',
    'parameters': ev.target.value
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
  op.execute(function(resp) {
  that.processResponse(resp);
 
 //  var result = resp.response.result;
 //  console.log(resp, typeof(resp));
 //  // console.log(result , typeof(result));


	// // let that =this;
 //  let json = result;

 // //  let objs : Item[];
 //  that.items = Object.keys(json).map(key => json[key]);

 // //  console.log(that.objs[0]);

 //    // this.test = result[0];
 //    // console.log(that.items);
 //    // that.items.push({ name : this.result.name});
 //    // console.log(that.items);
 //    // for(var i= 0 ; i< 2;i++)
 //    // {
 //    // console.log(that.items[i].itemName, typeof(that.items[i].itemName));
 //    // }

 //    that.testfunction();

 //  if (result.error && result.error.status) {
 //    // The API encountered a problem before the script
 //    // started executing.
 //    // appendPre('Error calling API:');
 //    // appendPre(JSON.stringify(result, null, 2));
 //  } else if (result.error) {
 //    // The API executed, but the script returned an error.

 //    // Extract the first (and only) set of error details.
 //    // The values of this object are the script's 'errorMessage' and
 //    // 'errorType', and an array of stack trace elements.
 //    var error = result.error.details[0];
 //    // appendPre('Script error message: ' + error.errorMessage);

 //    if (error.scriptStackTraceElements) {
 //      // There may not be a stacktrace if the script didn't start
 //      // executing.
 //      // appendPre('Script error stacktrace:');
 //      for (var i = 0; i < error.scriptStackTraceElements.length; i++) {
 //        var trace = error.scriptStackTraceElements[i];
 //        // appendPre('\t' + trace.function + ':' + trace.lineNumber);
 //      }
 //    }
 //  } else {
 //    // The structure of the result will depend upon what the Apps
 //    // Script function returns. Here, the function returns an Apps
 //    // Script Object with String keys and values, and so the result
 //    // is treated as a JavaScript object (folderSet).

 //    // appendPre("Entry Successful");
 //    // var folderSet = result.response.result;
 //    }

    
});


}



processResponse(resp: any) {

this.response = resp.response.result;
console.log(this.response);

// this.items = Object.keys(response).map(key => response[key]);
// console.log(this.items);

}

public	 testfunction(){
	 	 console.log(this.items);

    console.log(this.items);
    for(var i= 0 ; i< 2;i++)
    {
    console.log(this.items[i].itemName, typeof(this.items[i].itemName));
    }

    this.itemsss = this.items;
		for(var i= 0 ; i< 2;i++)
    {
    console.log(this.itemsss[i].itemName, typeof(this.itemsss[i].itemName));
    }


	 }



	confirmPurchase(item) {
		let product = [];
		product = item;
		let modal = this.modalCtrl.create('BuyPage',{item: product});
		console.log(item.name)
		modal.present();
	}

}



