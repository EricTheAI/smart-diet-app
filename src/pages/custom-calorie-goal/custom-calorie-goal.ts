import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-custom-calorie-goal',
  templateUrl: 'custom-calorie-goal.html'
})
export class CustomCalorieGoalPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
