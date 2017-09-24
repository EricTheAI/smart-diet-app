import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FrequentQuestionsPage } from '../frequent-questions/frequent-questions';
import { HowToEstimateFoodQuantityPage } from '../how-to-estimate-food-quantity/how-to-estimate-food-quantity';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToFrequentQuestions(params){
    if (!params) params = {};
    this.navCtrl.push(FrequentQuestionsPage);
  }goToHowToEstimateFoodQuantity(params){
    if (!params) params = {};
    this.navCtrl.push(HowToEstimateFoodQuantityPage);
  }
}
