import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpserviceProvider} from '../../providers/httpservice/httpservice';
@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html'
})
export class GoalPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  goal:String="loseweight";
  private losew:boolean=false;
  private keepfit:boolean=false;
  private getmuscle:boolean=false;
  constructor(public navCtrl: NavController,private httpservice:HttpserviceProvider) {
  }
  ionViewDidLoad(){
    if (this.httpservice.getuserprofile()["goal"]){
      this.goal=this.httpservice.getuserprofile()["goal"];
      if (this.goal=="loseweight"){
        this.losew=true;
      }
      if (this.goal=="keepfit"){
        this.keepfit=true;
      }
      if (this.goal=="getmuscle"){
        this.getmuscle=true;
      }
    }
  }
  clickbtn(){
    if (this.goal!=this.httpservice.getuserprofile()["goal"]){
      this.httpservice.userprofileUpdate("goal",this.goal);
    }
    this.navCtrl.pop();
  }
  updateloseweight(){
    this.losew=!this.losew;
    if (this.losew){
      this.goal="loseweight";
      this.keepfit=false;
      this.getmuscle=false;
    }
  }
  updatekeepfit(){
    this.keepfit=!this.keepfit;
    if (this.keepfit){
      this.goal="keepfit";
      this.losew=false;
      this.getmuscle=false;
    }
  }
  updategetmuscle(){
    this.getmuscle=!this.getmuscle;
    if (this.getmuscle){
      this.goal="getmuscle";
      this.losew=false;
      this.keepfit=false;
    }
  }
}
