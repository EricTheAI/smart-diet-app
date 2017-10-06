import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodayPage } from '../today/today';
import { FoodConfirmPage } from '../food-confirm/food-confirm';
import { ScanPage } from '../scan/scan';

@Component({
  selector: 'page-food-confirm',
  templateUrl: 'food-confirm.html'
})
export class FoodConfirmPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToToday(params){
    if (!params) params = {};
    this.navCtrl.push(TodayPage);
  }goToFoodConfirm(params){
    if (!params) params = {};
    this.navCtrl.push(FoodConfirmPage);
  }goToScan(params){
    if (!params) params = {};
    this.navCtrl.push(ScanPage);
  }
}
