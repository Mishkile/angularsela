import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainpageComponent } from './classex2/mainpage/mainpage.component';
import { Stage1Component } from './classex2/stage1/stage1.component';
import { Stage2Component } from './classex2/stage2/stage2.component';
import { Stage3Component } from './classex2/stage3/stage3.component';

import {Routes, RouterModule} from "@angular/router"

import {HttpClientModule} from "@angular/common/http"

import {AngularFirestoreModule} from "@angular/fire/compat/firestore"
import {AngularFireModule} from "@angular/fire/compat";
import { Demo1compComponent } from './demo1_fireabse/demo1comp/demo1comp.component';
import { CarsComponent } from './exfirabse/cars/cars.component';
import { AddcarComponent } from './exfirabse/addcar/addcar.component';
import { UpdateCarComponent } from './exfirabse/update-car/update-car.component'


const appRoutes : Routes = [
  {path: "", component: Stage1Component},
  {path: "stage2", component: Stage2Component},
  {path: "stage3", component: Stage3Component},
]


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    Stage1Component,
    Stage2Component,
    Stage3Component,
    Demo1compComponent,
    CarsComponent,
    AddcarComponent,
    UpdateCarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA4k-by4cfwR6sWxKKAhg7R_d6p_F-e6NE",
      authDomain: "sela-2e622.firebaseapp.com",
      projectId: "sela-2e622",
      storageBucket: "sela-2e622.appspot.com",
      messagingSenderId: "689677740099",
      appId: "1:689677740099:web:2705e9a022d5b733644cf6"
    }), // connects to firebase server
    AngularFirestoreModule // connects to firestore database

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
