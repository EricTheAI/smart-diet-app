import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-manually-add-food',
  templateUrl: 'manually-add-food.html'
})
export class ManuallyAddFoodPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCamera(params){
    if (!params) params = {};
    this.navCtrl.push(CameraPage);
  }
}
