import { Component, NgZone } from '@angular/core';
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
	public auth2: any;

  
	constructor(public navCtrl: NavController, public zone: NgZone, public navParams: NavParams, private viewCtrl: ViewController, public modalCtrl: ModalController, public toastCtrl: ToastController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SearchPage');

		this.handleClientLoad();

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



// Authentication of user to search 


// handleClientLoad() {

// 	  	let that = this;
//         gapi.load('client:auth2', function () {
//         gapi.client.init({
//            client_id: '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com',
//         cookiepolicy: 'single_host_origin',
//         scope: 'https://www.googleapis.com/auth/spreadsheets'
//         }).then(function () {

//           // Listen for sign-in state changes.

//   				          gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);

//           console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
//           // this.test(true);
//           that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

           
     
//           // authorizeButton.onclick = handleAuthClick;
//           // signoutButton.onclick = handleSignoutClick;
//         });
//         });

//       }


 public handleClientLoad() {

	  	let that = this;
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

          if(gapi.auth2.getAuthInstance().isSignedIn.get())
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
        
      }



      

      // updateSigninStatus(isSignedIn) {
      //   if (isSignedIn) {
      //   	//Do nothing
      //   			this.callScriptFunction();

      //   } else {

      //  // *  Sign in the user upon button click.

		    // 	        gapi.auth2.getAuthInstance().signIn();
	     //            // this.navCtrl.push('SearchPage');
      //   }
      // }
	




//search and display part

	
callScriptFunction() {

 // if(ev.target.value!=undefined && ev.target.value != "") {
       
 //      	this.loadingItems = true;
 //      	this.loadError = false;
 //      	console.log("callScriptFunction", ev.target.value);

      

      var scriptId = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";

      let that = this;

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
  op.execute(function(resp ) {
  that.processResponse(resp);

    
});

// }
}



processResponse(resp: any) {

this.response = resp.response.result;
console.log(this.response);

if(Object.keys(this.response).length ==0)
	{this.loadError = true
  this.loadingItems = false;
}
this.loadingItems = false;
this.zone.run(() => {});


}




confirmPurchase(item) {
		let product = [];
		product = item;
		let modal = this.modalCtrl.create('BuyPage',{item: product});
		console.log(item.itemName);
		modal.present();
	}

	onCancel()
	{
		console.log("cancel button");
	}


	public callFilter()
	{

	}

}


