import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodConfirmPage } from '../food-confirm/food-confirm';
import { ScanPage } from '../scan/scan';
import { ManuallyAddFoodPage } from '../manually-add-food/manually-add-food';
import { CameraPage } from '../camera/camera';
declare var echarts;
@Component({
  selector: 'page-today',
  templateUrl: 'today.html'
})
export class TodayPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad(){
    var myChart = echarts.init(document.getElementById("today-container2"));
    
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };
    
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
  }
  goToFoodConfirm(params){
    if (!params) params = {};
    this.navCtrl.push(FoodConfirmPage);
  }goToToday(params){
    if (!params) params = {};
    this.navCtrl.push(TodayPage);
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
