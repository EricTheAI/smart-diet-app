import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GenderPage } from '../gender/gender';
import { DateOfBirthPage } from '../date-of-birth/date-of-birth';
import { HeightPage } from '../height/height';
import { WeightPage } from '../weight/weight';
import { GoalPage } from '../goal/goal';
import { CustomCalorieGoalPage } from '../custom-calorie-goal/custom-calorie-goal';
import { ChangeUsernamePage } from '../change-username/change-username';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToGender(params){
    if (!params) params = {};
    this.navCtrl.push(GenderPage);
  }goToDateOfBirth(params){
    if (!params) params = {};
    this.navCtrl.push(DateOfBirthPage);
  }goToHeight(params){
    if (!params) params = {};
    this.navCtrl.push(HeightPage);
  }goToWeight(params){
    if (!params) params = {};
    this.navCtrl.push(WeightPage);
  }goToGoal(params){
    if (!params) params = {};
    this.navCtrl.push(GoalPage);
  }goToCustomCalorieGoal(params){
    if (!params) params = {};
    this.navCtrl.push(CustomCalorieGoalPage);
  }goToChangeUsername(params){
    if (!params) params = {};
    this.navCtrl.push(ChangeUsernamePage);
  }
}
