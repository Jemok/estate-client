import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routes";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import {ToasterModule} from "angular2-toaster/angular2-toaster";
import {PropertyService} from "./services/property.service";
import {HttpModule} from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthServiceService} from "./services/auth.service";
import { EditPropertyComponent } from './edit-property/edit-property.component';
import {AngularFireModule} from "angularfire2/index";
import {firebaseConfig} from "./app.constants";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    EditPropertyComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    CarouselModule.forRoot(),
    ToasterModule,
    routing
  ],
  providers: [AuthServiceService, PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
