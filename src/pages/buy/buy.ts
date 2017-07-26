import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BuyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {

	private item = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  	this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
