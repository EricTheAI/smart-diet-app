import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpserviceProvider} from '../../providers/httpservice/httpservice';
@Component({
  selector: 'page-gender',
  templateUrl: 'gender.html'
})
export class GenderPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  gender:String;
  private ismale:boolean=false;
  private isfemale:boolean=false;
  constructor(public navCtrl: NavController,private httpservice:HttpserviceProvider) {
  }
  ionViewDidLoad(){
    if (this.httpservice.getuserprofile()["gender"]){
      this.gender=this.httpservice.getuserprofile()["gender"];
      if (this.gender=="Male"){
        this.ismale=true;
      }
      if (this.gender=="Female"){
        this.isfemale=true;
      }
    }
  }
  clickbtn(){
    if (this.gender!=this.httpservice.getuserprofile()["gender"]){
      this.httpservice.userprofileUpdate("gender",this.gender);
    }
    this.navCtrl.pop();
  }
  updatemale(){
    this.ismale=!this.ismale;
    if (this.ismale){
      this.gender="Male";
      this.isfemale=false;
    }
  }
  updatefemale(){
    this.isfemale=!this.isfemale;
    if (this.isfemale){
      this.gender="Female";
      this.ismale=false;
    }
  }
}
