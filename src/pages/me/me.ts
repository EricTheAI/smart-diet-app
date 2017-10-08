import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { GenderPage } from '../gender/gender';
import { DateOfBirthPage } from '../date-of-birth/date-of-birth';
import { HeightPage } from '../height/height';
import { WeightPage } from '../weight/weight';
import { GoalPage } from '../goal/goal';
import { CustomCalorieGoalPage } from '../custom-calorie-goal/custom-calorie-goal';
import { HealthReportPage } from '../health-report/health-report';
import {HttpserviceProvider} from '../../providers/httpservice/httpservice';
@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  private first:boolean =false;
  name:String;
  constructor(public navCtrl: NavController,private httpservice:HttpserviceProvider) {
    this.name=this.httpservice.getusername();
  }
  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }goToGender(params){
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
  }goToHealthReport(params){
    if (!params) params = {};
    this.navCtrl.push(HealthReportPage);
  }
}
