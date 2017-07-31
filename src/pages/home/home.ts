import { Component } from '@angular/core';

import { IonicPage,NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

  declare const gapi : any;


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  navigateToSearch() {
    this.navCtrl.push('SearchPage');
    console.log('Navigating to another module');
  }

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
		 this.handleClientLoad();

		// this.googleInit();
	}



	public auth2: any;


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


     // public updateSigninStatus(isSignedIn) {
     //  // let that = this;
     //  console.log(this);
     //    if (isSignedIn) {
     //      console.log(this);
     //      // authorizeButton.style.display = 'none';
     //      // signoutButton.style.display = 'block';
     //      // callScriptFunction();
     //      //call API
     //      this.navCtrl.push('SearchPage');
     //    } else {

     //   // *  Sign in the user upon button click.

     //    	        gapi.auth2.getAuthInstance().signIn();
     //              console.log(this);
     //    	                  // this.navCtrl.push('SearchPage');


     //      // authorizeButton.style.display = 'block';
     //      // signoutButton.style.display = 'none';
     //    }
     //  }

   


  // public googleInit() {
  //   let that = this;
  //   gapi.load('auth2', function () {
  //     that.auth2 = gapi.auth2.init({
  //       client_id: '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com',
  //       cookiepolicy: 'single_host_origin',
  //       scope: 'https://www.googleapis.com/auth/spreadsheets'
  //     });
  //     that.attachSignin(document.getElementById('googleBtn'));
  //   });

  //   gapi.load('client:auth2', function() {
  //   gapi.client.init({
  //         // discoveryDocs: DISCOVERY_DOCS,
  //       client_id: '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com',
  //       scope: 'https://www.googleapis.com/auth/spreadsheets'
  //       }).then(function () {
  //         // Listen for sign-in state changes.
  //         // gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

  //         // Handle the initial sign-in state.
  //         // updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  //         // authorizeButton.onclick = handleAuthClick;
  //         // signoutButton.onclick = handleSignoutClick;
  //       });

  //   });
  // }

  // loginError() {
  //     let toast = this.toastCtrl.create({
  //       message: 'Oops! You aren\'t signed in. ',
  //       showCloseButton: true,
  //       closeButtonText: "OK",
  //       dismissOnPageChange: true
  //     });
  //     toast.present();
  // }


  // public attachSignin(element) {
  //   let that = this;
  //   that.auth2.attachClickHandler(element, {},
  //     function (googleUser) {

  //       let profile = googleUser.getBasicProfile();
  //       console.log('Token || ' + googleUser.getAuthResponse().id_token);
  //       console.log('ID: ' + profile.getId());
  //       console.log('Name: ' + profile.getName());
  //       console.log('Image URL: ' + profile.getImageUrl());
  //       console.log('Email: ' + profile.getEmail());


  //       //YOUR CODE HERE
		//     that.navCtrl.push('SearchPage');

  //        // that.callScriptFunction();

  //     }, function (error) {
  //       // alert(JSON.stringify(error, undefined, 2));
  //       that.loginError()
  //     });
  // }





//        * Load the API and make an API call.  Display the results on the screen.
//        */

}
