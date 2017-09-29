import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlavorTestLoopPage } from '../flavor-test-loop/flavor-test-loop';
import { FlavorTestFinishPage } from '../flavor-test-finish/flavor-test-finish';
import { TodayPage } from '../today/today';
import { FoodConfirmPage } from '../food-confirm/food-confirm';
import { ScanPage } from '../scan/scan';
import { ManuallyAddFoodPage } from '../manually-add-food/manually-add-food';
import { CameraPage } from '../camera/camera';
import {HttpserviceProvider} from '../../providers/httpservice/httpservice';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  @ViewChild('username') username;
  @ViewChild('password') password;
  public user:any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public httpService: HttpserviceProvider) {
  }
  loadSignup(){
    this.httpService.load(this.username.value,this.password.value)
    .then(data => {
      this.user = data;
      console.log(this.user.success);
      if (this.user.success==true){
        alert("successful Login");
        this.goToFlavorTestLoop({});
      }
    });
  }

  btnSignUp_click(){
    console.log(this.username.value);
    this.loadSignup();

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
