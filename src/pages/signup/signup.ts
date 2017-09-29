import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlavorTestLoopPage } from '../flavor-test-loop/flavor-test-loop';
import { FlavorTestFinishPage } from '../flavor-test-finish/flavor-test-finish';
import { TodayPage } from '../today/today';
import { ScanPage } from '../scan/scan';
import { FoodConfirmPage } from '../food-confirm/food-confirm';
import { ManuallyAddFoodPage } from '../manually-add-food/manually-add-food';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToFlavorTestLoop(params){
    if (!params) params = {};
    this.navCtrl.push(FlavorTestLoopPage);
  }goToFlavorTestFinish(params){
    if (!params) params = {};
    this.navCtrl.push(FlavorTestFinishPage);
  }goToToday(params){
    if (!params) params = {};
    this.navCtrl.push(TodayPage);
  }goToScan(params){
    if (!params) params = {};
    this.navCtrl.push(ScanPage);
  }goToFoodConfirm(params){
    if (!params) params = {};
    this.navCtrl.push(FoodConfirmPage);
  }goToManuallyAddFood(params){
    if (!params) params = {};
    this.navCtrl.push(ManuallyAddFoodPage);
  }goToCamera(params){
    if (!params) params = {};
    this.navCtrl.push(CameraPage);
  }
}
