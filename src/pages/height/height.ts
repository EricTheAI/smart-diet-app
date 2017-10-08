import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpserviceProvider} from '../../providers/httpservice/httpservice';
@Component({
  selector: 'page-height',
  templateUrl: 'height.html'
})
export class HeightPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  value: number =0;
  constructor(public navCtrl: NavController,private httpservice:HttpserviceProvider) {
  }
  ionViewDidLoad(){
    if (this.httpservice.getuserprofile()["height"]){
      this.value=Number(this.httpservice.getuserprofile()["height"]);
    }
  }
  updateheight(){
    if (this.value.toString!=this.httpservice.getuserprofile()["height"]){
      this.httpservice.userprofileUpdate("height",this.value.toString());
    }
    this.navCtrl.pop();
  }
}
