import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpserviceProvider} from '../../providers/httpservice/httpservice';
@Component({
  selector: 'page-date-of-birth',
  templateUrl: 'date-of-birth.html'
})
export class DateOfBirthPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  value: String;
  constructor(public navCtrl: NavController,private httpservice:HttpserviceProvider) {
  }
  ionViewDidLoad(){
    if (this.httpservice.getuserprofile()["dob"]){
      this.value=this.httpservice.getuserprofile()["dob"];
    }
  }
  updateweight(){
    if (this.value!=this.httpservice.getuserprofile()["dob"]){
      this.httpservice.userprofileUpdate("dob",this.value.toString());
    }
    this.navCtrl.pop();
  }
}
