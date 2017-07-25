import { Component } from '@angular/core';

import { IonicPage,NavController, NavParams, ModalController } from 'ionic-angular';

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

}
