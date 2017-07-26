import { Component } from '@angular/core';

import { IonicPage,NavController, NavParams, ModalController } from 'ionic-angular';

declare const gapi : any;


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  
  }

  navigateToSearch() {
    this.navCtrl.push('SearchPage');
    console.log('Navigating to another module');
  }

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');

		this.googleInit();
	}



	public auth2: any;


  public googleInit() {
    let that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: '660542430424-1b1q0p8uadmj21evjkjsm1bp595ao9ec.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'https://www.googleapis.com/auth/spreadsheets'
      });
      that.attachSignin(document.getElementById('googleBtn'));
    });

    gapi.load('client:auth2', function() {
    gapi.client.init({
          // discoveryDocs: DISCOVERY_DOCS,
        client_id: '660542430424-1b1q0p8uadmj21evjkjsm1bp595ao9ec.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/spreadsheets'
        }).then(function () {
          // Listen for sign-in state changes.
          // gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          // updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          // authorizeButton.onclick = handleAuthClick;
          // signoutButton.onclick = handleSignoutClick;
        });

    });
  }


  public attachSignin(element) {
    let that = this;
    that.auth2.attachClickHandler(element, {},
      function (googleUser) {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());


        //YOUR CODE HERE
		    that.navCtrl.push('SearchPage');

         // that.callScriptFunction();

      }, function (error) {
        alert(JSON.stringify(error, undefined, 2));
      });
  }





//        * Load the API and make an API call.  Display the results on the screen.
//        */

}
