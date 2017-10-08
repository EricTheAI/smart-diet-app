import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpserviceProvider} from '../../providers/httpservice/httpservice';
@Component({
  selector: 'page-custom-calorie-goal',
  templateUrl: 'custom-calorie-goal.html'
})
export class CustomCalorieGoalPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  value:number=0;
  constructor(public navCtrl: NavController,private httpservice:HttpserviceProvider) {
  }
  ionViewDidLoad(){
    if (this.httpservice.getuserprofile()["caloriegoal"]){
      this.value=Number(this.httpservice.getuserprofile()["caloriegoal"]);
    }
  }
  updatecalorie(){
    if (this.value.toString!=this.httpservice.getuserprofile()["caloriegoal"]){
      this.httpservice.userprofileUpdate("caloriegoal",this.value.toString());
    }
    this.navCtrl.pop();
  }
}
