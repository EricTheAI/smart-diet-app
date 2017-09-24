import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-how-to-estimate-food-quantity',
  templateUrl: 'how-to-estimate-food-quantity.html'
})
export class HowToEstimateFoodQuantityPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
