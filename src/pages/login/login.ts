import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { FlavorTestLoopPage } from '../flavor-test-loop/flavor-test-loop';
import { FlavorTestFinishPage } from '../flavor-test-finish/flavor-test-finish';
import { ScanPage } from '../scan/scan';
import { FoodConfirmPage } from '../food-confirm/food-confirm';
import { ManuallyAddFoodPage } from '../manually-add-food/manually-add-food';
import { CameraPage } from '../camera/camera';
import { TodayPage } from '../today/today';
import {TabsControllerPage} from '../tabs-controller/tabs-controller';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,private app: App) {
  }
  goToTab(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToFlavorTestLoop(params){
    if (!params) params = {};
    this.navCtrl.push(FlavorTestLoopPage);
  }goToFlavorTestFinish(params){
    if (!params) params = {};
    this.navCtrl.push(FlavorTestFinishPage);
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
  }goToToday(params){
    if (!params) params = {};
    this.navCtrl.push(TodayPage);
  }
}
