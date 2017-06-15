import { Component, OnInit } from '@angular/core';
import {PropertyService} from "../services/property.service";
import {Property} from "../interfaces/property";
import {ToasterService} from "angular2-toaster/angular2-toaster";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  properties : [Property];

  newdistance = [0, 1];

  initialValue : number = 0;

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
    });
  }

  search(data){
    this.propertyHttpService.search({instance : [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1]}).subscribe(response => {
    }, error => {
      this.toasterService.pop('error', 'Error', error)
    });
  }

  checkIfNewDistanceIsset(value){

    if(this.newdistance.includes(value)){
      this.initialValue = value + 1;

      return true;
    }

    this.initialValue = value + 1;
  }
}
