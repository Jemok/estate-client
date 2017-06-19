import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PropertyService} from "../services/property.service";
import {ToasterService} from "angular2-toaster/angular2-toaster";
import {Property} from "../interfaces/property";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  property : Property;

  houseId : number;

  constructor(public route: ActivatedRoute,
              public propertyHttpService : PropertyService,
              private toasterService : ToasterService) { }

  ngOnInit() {
    this.getHouse();
  }

  getHouse(){
    this.route.params.subscribe(params => {
      this.houseId = params['houseId'];
      this.propertyHttpService.showProperty({houseId : this.houseId})
          .subscribe(data => {
            this.property = data;
            console.log(this.property);
          }, error => {
            this.toasterService.pop('error', 'Error', error.message)
          })
    });
  }

  checkIfLoggedIn(){

      if(localStorage.getItem('token')){
          return true;
      }
  }

}
