import { Component, OnInit } from '@angular/core';
import {Property} from "../interfaces/property";
import {PropertyService} from "../services/property.service";
import {ToasterService} from "angular2-toaster/angular2-toaster";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  properties : [Property];

  name : string = localStorage.getItem('name');

  constructor(public propertyHttpService : PropertyService,
              private toasterService : ToasterService) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(){
    this.propertyHttpService.getProperties().subscribe(properties => {
      this.properties = properties;
      console.log(this.properties);
    }, error => {
      this.toasterService.pop('error', 'Error', error)
    }, () =>{
    });
  }

}
