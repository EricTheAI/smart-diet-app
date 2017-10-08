import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodayPage } from '../today/today';
import { FoodConfirmPage } from '../food-confirm/food-confirm';
import { ManuallyAddFoodPage } from '../manually-add-food/manually-add-food';
import { CameraPage } from '../camera/camera';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import {createBlobService} from 'azure-storage';
import {HttpserviceProvider} from '../../providers/httpservice/httpservice';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  private ishidden: Boolean=false;
  constructor(public navCtrl: NavController,private cameraPreview: CameraPreview,public httpService: HttpserviceProvider) { 

  }

  public picture: any;
  public user:any;
  public istake:boolean=false;
  initializePreview() {
    this.picture="";
    // Make the width and height of the preview equal 
    // to the width and height of the app's window
    let cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };
  
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });
  }
  ionViewWillEnter(){
    this.istake=false;
    if (this.ishidden){
      this.cameraPreview.show();
      this.ishidden=false;
    }else{
      this.initializePreview();
    }
  }
  ionViewWillLeave(){
    this.cameraPreview.hide();
    this.ishidden=true;
    this.istake=false;
  }
  btntakepicture(){
    this.httpService.foodDectect(this.picture)
    .then(data => {
      this.user = data;
      console.log(this.user);
      
    });
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    }
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      this.picture='data:image/jpeg;base64,' + imageData;
      this.cameraPreview.hide();
      this.istake=true;
      this.httpService.foodDectect(this.picture)
      .then(data => {
        this.user = data;
        console.log(this.user);
        
      });
    }, (err) => {
      console.log(err);
      this.picture = 'assets/img/test.jpg';
    });
    this.picture="";
    this.goToFoodConfirm(this.user.name);
  }
  goToToday(params){
    if (!params) params = {};
    this.navCtrl.push(TodayPage);
  }goToFoodConfirm(params){
    if (!params) {
      params = {}
      this.navCtrl.push(FoodConfirmPage);
    } else{
      params={"name":params};
      console.log(params);
      this.navCtrl.push(FoodConfirmPage,params);
    }
  }goToScan(params){
    if (!params) params = {};
    this.navCtrl.push(ScanPage);
  }goToManuallyAddFood(params){
    if (!params) params = {};
    this.navCtrl.push(ManuallyAddFoodPage);
  }goToCamera(params){
    if (!params) params = {};
    this.navCtrl.push(CameraPage);
  }
  
}
