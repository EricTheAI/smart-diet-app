import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpserviceProvider {
  private data;
  private ID:String;
  private userdata:any;
  private username:String;
  private profile:any;
  private fooddata:any;
  private foodlist:String[]=[];
  private favorfoods:any=[];
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(public http: Http) {
    console.log('Hello HttpserviceProvider Provider');
  }
  load(username: String,password: String) {
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/register',("username="+ username+"&password="+password),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  
  foodDectect(imgData: String) {
    let headersj = new Headers({ 'Content-Type': 'image/jpeg' });
    let optionsj = new RequestOptions({ headers: headersj });
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/fooddetect',JSON.stringify({image:imgData}),optionsj)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  getusername(){
    return this.username;
  }
  login(username: String,password: String){
    this.username=username;
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/login',("username="+ username+"&password="+password),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  baseStruct(){
    var date=new Date();

    var sent="userid="+ this.ID+"&favorite=&weight=&height=&gender=&goal=&dob=&caloriegoal=";
    return sent;
  }
  setID(ID: String){
    this.ID=ID;
  }
  getID(){
    return this.ID;
  }
  getuserprofile(){
    return this.profile;
  }
  getfoodlist(){
    return this.foodlist;
  }
  FoodData(){
    this.http.post('http://13.73.106.72/food/all',"",this.options)
    .map(res => res.json())
    .subscribe(data => {
      this.data = data.food;
      this.fooddata=this.data;
      console.log(this.data);
    });
  }
  getFoodData(){
    return this.fooddata;
  }
  getUserFoodData(){
      this.http.post('http://13.73.106.72/record/all',('userid='+this.ID),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.userdata = data.records;
          if(! this.userdata){
            this.userdata={};
          }
          console.log(this.userdata);
          var day = new Date();
          var today=day.getDate().toString()+day.getMonth().toString()+day.getFullYear().toString();
          this.foodlist=[];
          for (var i in this.userdata){
              if (this.userdata[i][today])
                this.foodlist.push(this.userdata[i][today]);
                console.log(this.userdata[i][today]);
                console.log(this.foodlist);
              }
          });
  }
  userprofile(){
      this.http.post('http://13.73.106.72/profile',('userid='+this.ID),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.profile = data;
          console.log(this.profile);
        });
  }
  userprofileUpdate(userData:any,value:any){
    var sent=""
    if(userData=="favourite"){
      for (var i in value){
        sent+="favourite="+ value[i];
        if (i!=value.length){
          sent+="&";
        }
      }
    }else{
      sent=userData+"="+ value;
    }
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/profile/update',("userid="+this.ID+"&" +sent),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          this.userprofile();
        });
    });
  }
  userprofileAllupdate(){
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/profile/update',this.baseStruct(),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
        });
    });
  }
  initdata(){
    var day = new Date();
    var today=day.getDate().toString()+day.getMonth().toString()+day.getFullYear().toString();
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/records',today+"=",this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
        });
    });
  }
  editfavourite(food:String,add:boolean){
    if(!this.userdata["favorite"]){
      this.userdata["favorite"]="";
    }else{
      this.favorfoods=this.userdata["favorite"].split(',');
    }
    if (add){
      this.favorfoods.push(food);
      console.log(this.favorfoods);
    } else{
      for(var i in this.favorfoods){
        if (this.favorfoods[i]==food){
          this.favorfoods.splice(i,1);
          break;
        }
      }
    }
    this.userprofileUpdate("favorite",this.favorfoods);
  }
  flavorfood(foods:String[]){
    var sent="";
    for (var i=0;i<foods.length;i++){
      sent+="food"+i.toString()+"="+foods[i];
      if (i!=foods.length){
        sent+="&";
      }
    }
    if (sent==""){
      sent="food1=";
    }
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/user/favorfood',(sent),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  suggestion(){
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/user/suggestion',('userid='+this.ID),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  confirmfood(food:any,quantity:any){
    var day = new Date();
    var today=day.getDate().toString()+day.getMonth().toString()+day.getFullYear().toString();
    var found=false;
    console.log(this.userdata);
    var sent=today+"="+ food+".."+Number(quantity);
    for (var i in this.userdata){
      if (this.userdata[i]==today){
        found=true;
        break;
      }
    }
    this.http.post('http://13.73.106.72/record/create',('userid='+this.ID+'&'+ sent),this.options)
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
      this.data = data;
      this.getUserFoodData();
    });

  }
}
