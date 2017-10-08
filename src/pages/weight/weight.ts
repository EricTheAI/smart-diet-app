import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpserviceProvider} from '../../providers/httpservice/httpservice';
@Component({
  selector: 'page-weight',
  templateUrl: 'weight.html'
})
export class WeightPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  value: number =0;
  constructor(public navCtrl: NavController,private httpservice:HttpserviceProvider) {
  }
  ionViewDidLoad(){
    if (this.httpservice.getuserprofile()["weight"]){
      this.value=Number(this.httpservice.getuserprofile()["weight"]);
    }
  }
  updateweight(){
    if (this.value.toString!=this.httpservice.getuserprofile()["weight"]){
      this.httpservice.userprofileUpdate("weight",this.value.toString());
    }
    this.navCtrl.pop();
  }
}
