import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Health } from '@ionic-native/health';
import {HttpserviceProvider} from '../../providers/httpservice/httpservice';
declare var echarts;
@Component({
  selector: 'page-health-report',
  templateUrl: 'health-report.html'
})
export class HealthReportPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  private myChart:any;
  private distance:any;
  private energy:number=0;
  constructor(public navCtrl: NavController,private health: Health,public httpservice: HttpserviceProvider) {
  }
  showgraph(){
    this.calenergy();
    
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data:['Calories']
        },
        xAxis: [
            {
                type: 'category',
                data: ['Consumed','Ingested'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '',
                min: 0,
                max: 2000,
                interval: 200,
                axisLabel: {
                    formatter: '{value} kcal'
                }
            }
        ],
        series: [
            {
                name:'Energy',
                type:'bar',
                data:[this.distance*60,this.energy ]
            }
        ]
    };
    
            this.myChart.setOption(option);
  }
  calenergy(){
    this.energy=0;
    var allfood=this.httpservice.getFoodData();
    var foodlist=this.httpservice.getfoodlist();
    for (var i in foodlist){
      var food=foodlist[i].split("..")[0];
      var quan=foodlist[i].split("..")[1];
      for (var j in allfood){

        if (allfood[j].name==food){
          this.energy+=allfood[j].energy*Number(quan);
        }
      }
    }
  }
  ionViewDidLoad(){
    this.myChart = echarts.init(document.getElementById("today-container2"));
    this.showgraph();
  }
  IonViewWillEnter(){
    this.health.isAvailable()
    .then((available:boolean) => {
      console.log(available);
      this.health.requestAuthorization([
        'distance', 'nutrition',  //read and write permissions
        {
          read: ['steps'],       //read only permission
          write: ['height', 'weight']  //write only permission
        }
      ])
      .then(res => {
        console.log(res);
        this.distance=res.distance;
      }
    )
      .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
    this.myChart = echarts.init(document.getElementById("today-container2"));
    this.showgraph();
  }
  
}
