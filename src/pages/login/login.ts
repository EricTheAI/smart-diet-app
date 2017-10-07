import { Component,ViewChild } from '@angular/core';
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
import {HttpserviceProvider} from '../../providers/httpservice/httpservice';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,private app: App,private httpService: HttpserviceProvider) {
  }
  private user:any;
  @ViewChild("username") username;
  @ViewChild("password") password;
  loadlogin(){
    this.httpService.login(this.username.value,this.password.value)
    .then(data => {
      this.user = data;
      console.log(this.user);
      if (this.user.success==true){
        this.httpService.setID(this.user.id);
        alert("successful Login");
        this.httpService.userprofile();
        this.httpService.getUserFoodData();
        this.goToTab({});
      }
    });
  }
  
  btnLogin(){
    this.loadlogin();
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
