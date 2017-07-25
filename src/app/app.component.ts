import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs';


import 'rxjs/add/operator/map';
import { Item } from './item';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})



export class MyApp  {
  rootPage:any = HomePage;
  

  obItem : Observable<Item[]>;
  items : Item[];
  errorMessage : String;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private http : Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

   // this.initialiseItems()

  }


// login part

     public gapi : any;

 
        public CLIENT_ID  : any = '660542430424-1b1q0p8uadmj21evjkjsm1bp595ao9ec.apps.googleusercontent.com';
      // public CLIENT_ID  : any = '660542430424-82kuc06uf5b068dib6sjgcb1cr4jp286.apps.googleusercontent.com';
         // public CLIENT_ID : any = '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com';
         // public CLIENT_ID : any = '660542430424-6li5v66sn86fa1qkmjjv4ca0t9kp6obl.apps.googleusercontent.com';
      // Array of API discovery doc URLs for APIs used by the quickstart
      // public DISCOVERY_DOCS: any  = ["https://script.googleapis.com/$discovery/rest?version=v1"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      // public SCOPES : any = 'https://www.googleapis.com/auth/spreadsheets';

      //var authorizeButton = document.getElementById('authorize-button');
     // var signoutButton = document.getElementById('signout-button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      handleClientLoad() {
                 console.log(this.CLIENT_ID);

        gapi.load('client:auth2', this.initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      initClient() {
        console.log("init");
        gapi.client.init({
          discoveryDocs: ["https://script.googleapis.com/$discovery/rest?version=v1"],
          clientId: "CLIENT_ID",
          scope: 'https://www.googleapis.com/auth/spreadsheets'
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

          // Handle the initial sign-in state.
          this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          //authorizeButton.onclick = handleAuthClick;
          // signoutButton.onclick = handleSignoutClick;
        });
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
       updateSigninStatus(isSignedIn) {
        console.log("updateSigninStatus");
        if (isSignedIn) {
          // authorizeButton.style.display = 'none';
          // signoutButton.style.display = 'block';
          this.callScriptFunction();
        } else {
          // authorizeButton.style.display = 'block';
          // signoutButton.style.display = 'none';
        }
      }

      /**
       *  Sign in the user upon button click.
       */
      handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
      handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
      // appendPre(message) {
      //   var pre = document.getElementById('content');
      //   var textContent = document.createTextNode(message + '\n');
      //   pre.appendChild(textContent);
      // }

      /**
       * Load the API and make an API call.  Display the results on the screen.
       */
      callScriptFunction() {
        console.log("callScriptFunction");
      var scriptId = "MnJ7AR9l8ekV2TFue5cnxnyh_GrEu24Vl";
      // var scriptId = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";

        // Call the Execution API run method
        //   'scriptId' is the URL parameter that states what script to run
        //   'resource' describes the run request body (with the function name
        //              to execute)
       //  gapi.client.script.scripts.run({
       //    'scriptId': scriptId,
       //    'resource': {
       //      'function' : 'search',
       //      'parameters' : 'pa' //search query will be placed here
       //    }
       //  }).then(function(resp) {
       //    var result = resp.result;
       //    if (result.error && result.error.status) {
       //      // The API encountered a problem before the script
       //      // started executing.
       //      // appendPre('Error calling API:');
       //      // appendPre(JSON.stringify(result, null, 2));
       //    } else if (result.error) {
       //      // The API executed, but the script returned an error.

       //      // Extract the first (and only) set of error details.
       //      // The values of this object are the script's 'errorMessage' and
       //      // 'errorType', and an array of stack trace elements.
       //      var error = result.error.details[0];
       //      // appendPre('Script error message: ' + error.errorMessage);

       //      if (error.scriptStackTraceElements) {
       //        // There may not be a stacktrace if the script didn't start
       //        // executing.
       //        // appendPre('Script error stacktrace:');
       //        for (var i = 0; i < error.scriptStackTraceElements.length; i++) {
       //          var trace = error.scriptStackTraceElements[i];
       //          // appendPre('\t' + trace.function + ':' + trace.lineNumber);
       //        }
       //      }
       //    } else {
       //      // The structure of the result will depend upon what the Apps
       //      // Script function returns. Here, the function returns an Apps
       //      // Script Object with String keys and values, and so the result
       //      // is treated as a JavaScript object (folderSet).

       //      var folderSet = result.response.result;
       //      // if (Object.keys(folderSet).length == 0) {
       //      //     appendPre('No folders returned!');
       //      // } else {
       //      //   appendPre('Folders under your root folder:');
       //      //   Object.keys(folderSet).forEach(function(id){
       //      //     appendPre('\t' + folderSet[id] + ' (' + id  + ')');
       //      //   });
       //      // }
       //     // document.write(folderSet);
       //    }
       //  });

       // }

       // Create execution request.
var request = {
    'function': 'search',
    'parameters': 'a'
    // 'devMode': true   // Optional.
};
// Make the request.
var op = gapi.client.request({
    // 'root': 'https://script.googleapis.com',
    'path': 'v1/scripts/' + scriptId + ':run',
    'method': 'POST',
    'body': request
});

//logging the results
op.execute(function(resp) {
  var result = resp.result;
  if (result.error && result.error.status) {
    // The API encountered a problem before the script
    // started executing.
    // appendPre('Error calling API:');
    // appendPre(JSON.stringify(result, null, 2));
  } else if (result.error) {
    // The API executed, but the script returned an error.

    // Extract the first (and only) set of error details.
    // The values of this object are the script's 'errorMessage' and
    // 'errorType', and an array of stack trace elements.
    var error = result.error.details[0];
    // appendPre('Script error message: ' + error.errorMessage);

    if (error.scriptStackTraceElements) {
      // There may not be a stacktrace if the script didn't start
      // executing.
      // appendPre('Script error stacktrace:');
      for (var i = 0; i < error.scriptStackTraceElements.length; i++) {
        var trace = error.scriptStackTraceElements[i];
        // appendPre('\t' + trace.function + ':' + trace.lineNumber);
      }
    }
  } else {
    // The structure of the result will depend upon what the Apps
    // Script function returns. Here, the function returns an Apps
    // Script Object with String keys and values, and so the result
    // is treated as a JavaScript object (folderSet).

    // appendPre("Entry Successful");
    var folderSet = result.response.result;
    if (Object.keys(folderSet).length == 0) {
        // appendPre('No folders returned!');
    } else {
      // appendPre('Folders under your root folder:');
      Object.keys(folderSet).forEach(function(id){
        // appendPre('\t' + folderSet[id] + ' (' + id  + ')');
      });
    }
  }
})
}

/*
<script async defer src="https://apis.google.com/js/api.js"
      onload="this.onload=function(){};handleClientLoad()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()">
    </script>
*/












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



/*
  initialiseItems()
  {
  this.items = [
  'sharang',
  'sujit',
  'omkar',
  'shashank',
  'ashish',
  'manohar',
  'prajyot',

  ];
  }
*/




  /*  getItems(ev) {
    // Reset items back to all of the items
    //this.initialiseItems();

     //set val to the value of the ev target
//    var val = ev.target.value;

     //if the value is an empty string don't filter the items
     if (val && val.trim() != '') {
     this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

   // console.log(val);


        let headers = new Headers({ 'Content-Type' : 'application/json' });
        let options = new RequestOptions({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: new URLSearchParams(val)
        });

        return this.http.get('http://www.mocky.io/v2/5971f993120000eb04bb747e', options)
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.items = data.json();
                }, 1000);
                            });
    

    this.http.get("http://www.mocky.io/v2/596dc5480f000022032b7f0a")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });



  }

  */
}

