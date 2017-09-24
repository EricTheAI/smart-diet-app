import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodayPage } from '../today/today';
import { ScanPage } from '../scan/scan';
import { MePage } from '../me/me';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TodayPage;
  tab2Root: any = ScanPage;
  tab3Root: any = MePage;
  constructor(public navCtrl: NavController) {
  }
  
}
