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
    let headersj = new Headers({ 'Content-Type': 'application/json' });
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

  login(username: String,password: String){
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/login',("username="+ username+"&password="+password),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  setID(ID: String){
    this.ID=ID;
  }
  getID(){
    return this.ID;
  }
  userprofile(){
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/profile',('userID='+this.ID),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  userprofileUpdate(userData: Map<String,String>){
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/profile/update',('userID='+this.ID),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  search(food:String){
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/search',('food='+food),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
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
      this.http.post('http://13.73.106.72/user/flavorfood',(sent),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  getData(){
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/user/dailydata',('userID='+this.ID),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  suggestion(){
    return new Promise(resolve => {
      this.http.post('http://13.73.106.72/user/suggestion',('userID='+this.ID),this.options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
