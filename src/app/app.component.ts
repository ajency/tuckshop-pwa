import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import {Http, RequestOptions, URLSearchParams} from '@angular/http';

import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/map';


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  items;
  public data;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private http : Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.initialiseItems()

  }

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





    getItems(ev) {
    public data;
    // Reset items back to all of the items
    this.initialiseItems();

     //set val to the value of the ev target
    var val = ev.target.value;

     //if the value is an empty string don't filter the items
     if (val && val.trim() != '') {
     this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

    console.log(val);


   /*     let headers = new Headers({ 'Content-Type' : 'application/json' });
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
    */

    this.http.get("http://www.mocky.io/v2/596dc5480f000022032b7f0a")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });



  }
}

