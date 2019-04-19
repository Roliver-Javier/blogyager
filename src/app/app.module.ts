import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  environment } from './core/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MockService } from './core/mock/mock.service';
import { FeaturesModule } from './features/features.module';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule  } from '@angular/flex-layout';

const Imports = [
  AngularFireAuthModule,
  AngularFireStorageModule,
  AngularFirestoreModule,
  AngularFireModule.initializeApp(environment.firebase),
  CoreModule,
  SharedModule,
  BrowserModule,
  FeaturesModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  FlexLayoutModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [...Imports],
  // providers: [
  //   ...MockService.initializeMockProviders()
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
