import { Component,ViewChild } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { TodayPage } from '../today/today';
import { ScanPage } from '../scan/scan';
import { ManuallyAddFoodPage } from '../manually-add-food/manually-add-food';
import { CameraPage } from '../camera/camera'
import {HttpserviceProvider} from '../../providers/httpservice/httpservice';

@Component({
  selector: 'page-food-confirm',
  templateUrl: 'food-confirm.html'
})
export class FoodConfirmPage {
  @ViewChild('foodnum') foodnumber;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  food:String;
  image:String;
  protein:number;
  cal:number;
  favor:boolean;
  constructor(public navCtrl: NavController,public navpram:NavParams,public httpService: HttpserviceProvider) {
  }
  Back(){
    this.navCtrl.pop();
  }
  ionViewWillEnter(){
    this.food=this.navpram.get("name");
    var fooddata=this.httpService.getFoodData();
    for (var i in fooddata){
      if (fooddata[i].name==this.food){
        this.image=fooddata[i].imageUrl;
        var favfoods=this.httpService.getuserprofile()["favorite"].split(',');
        for (var j in favfoods){
          if (favfoods[j]==this.food){
            this.favor=true;
            return;
          }
        }
        this.favor=false;
        break;
      }
    }
  }
  btnfavor(){
    this.favor=!this.favor;
    this.httpService.editfavourite(this.food,this.favor);
  }
  Addfood(){
    //if (this.httpService.getUserFoodData)
    this.httpService.confirmfood(this.food,this.foodnumber.value);
    this.navCtrl.pop();
  }
  goToToday(params){
    if (!params) params = {};
    this.navCtrl.push(TodayPage);
  }goToFoodConfirm(params){
    if (!params) params = {};
    this.navCtrl.push(FoodConfirmPage);
  }goToManuallyAddFood(params){
    if (!params) params = {};
    this.navCtrl.push(ManuallyAddFoodPage);
  }goToCamera(params){
  }goToScan(params){
    if (!params) params = {};
    this.navCtrl.push(CameraPage);
  }
}
