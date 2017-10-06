import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TodayPage } from '../pages/today/today';
import { ScanPage } from '../pages/scan/scan';
import { MePage } from '../pages/me/me';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { FoodConfirmPage } from '../pages/food-confirm/food-confirm';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { DailyRecordPage } from '../pages/daily-record/daily-record';
import { ChangeUsernamePage } from '../pages/change-username/change-username';
import { GenderPage } from '../pages/gender/gender';
import { GoalPage } from '../pages/goal/goal';
import { DateOfBirthPage } from '../pages/date-of-birth/date-of-birth';
import { HeightPage } from '../pages/height/height';
import { WeightPage } from '../pages/weight/weight';
import { CustomCalorieGoalPage } from '../pages/custom-calorie-goal/custom-calorie-goal';
import { HealthReportPage } from '../pages/health-report/health-report';
import { SettingsPage } from '../pages/settings/settings';
import { FrequentQuestionsPage } from '../pages/frequent-questions/frequent-questions';
import { HowToEstimateFoodQuantityPage } from '../pages/how-to-estimate-food-quantity/how-to-estimate-food-quantity';
import { ManuallyAddFoodPage } from '../pages/manually-add-food/manually-add-food';
import { FlavorTestFinishPage } from '../pages/flavor-test-finish/flavor-test-finish';
import { FlavorTestLoopPage } from '../pages/flavor-test-loop/flavor-test-loop';
import { CameraPage } from '../pages/camera/camera';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TodayPage,
    ScanPage,
    MePage,
    TabsControllerPage,
    SignupPage,
    LoginPage,
    ProfilePage,
    FoodConfirmPage,
    SearchResultsPage,
    DailyRecordPage,
    ChangeUsernamePage,
    GenderPage,
    GoalPage,
    DateOfBirthPage,
    HeightPage,
    WeightPage,
    CustomCalorieGoalPage,
    HealthReportPage,
    SettingsPage,
    FrequentQuestionsPage,
    HowToEstimateFoodQuantityPage,
    ManuallyAddFoodPage,
    FlavorTestFinishPage,
    FlavorTestLoopPage,
    CameraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodayPage,
    ScanPage,
    MePage,
    TabsControllerPage,
    SignupPage,
    LoginPage,
    ProfilePage,
    FoodConfirmPage,
    SearchResultsPage,
    DailyRecordPage,
    ChangeUsernamePage,
    GenderPage,
    GoalPage,
    DateOfBirthPage,
    HeightPage,
    WeightPage,
    CustomCalorieGoalPage,
    HealthReportPage,
    SettingsPage,
    FrequentQuestionsPage,
    HowToEstimateFoodQuantityPage,
    ManuallyAddFoodPage,
    FlavorTestFinishPage,
    FlavorTestLoopPage,
    CameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}