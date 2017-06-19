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

  newdistance: {} = null;

  initialValue : number = 0;

  instance = [];

  placeholder : string = '../../assets/images/holder.jpg';

  range : number = 3;

  parking : number = 0;
  garden  : number = 0;
  one_bedroom : number = 0;
  two_bedroom : number = 0;
  three_bedroom : number = 0;
  one_bathroom  : number = 0;
  two_bathroom  : number = 0;
  three_bathroom: number = 0;
  guest_room    : number = 0;
  library       : number = 0;
  solar_pannels : number = 0;



  constructor(public propertyHttpService : PropertyService,
              private toasterService : ToasterService) { }

  ngOnInit() {
    this.getProperties();
  }

  setCriteria(item){

    if(item === 'parking'){
        this.parking = 1
    }
    if(item === 'garden'){
      this.garden = 1
    }

    if(item === 'one_bedroom'){
      this.one_bedroom = 1
    }

    if(item === 'two_bedroom'){
      this.two_bedroom = 1
    }

    if(item === 'three_bedroom'){
      this.three_bedroom = 1
    }

    if(item === 'one_bathroom'){
      this.one_bathroom = 1
    }

    if(item === 'two_bathroom'){
      this.two_bathroom = 1
    }

    if(item === 'three_bathroom'){
      this.three_bathroom = 1
    }

    if(item === 'guest_room'){
      this.guest_room = 1
    }

    if(item === 'library'){
      this.library = 1
    }

    if(item === 'solar_pannels'){
      this.solar_pannels = 1
    }
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

  search(){
    this.propertyHttpService.search({range : this.range, instance : [this.parking, this.garden, this.one_bedroom,this.two_bedroom, this.three_bedroom, this.one_bathroom, this.two_bathroom, this.three_bathroom, this.guest_room, this.library, this.solar_pannels ]}).subscribe(response => {
      this.newdistance = response;
      console.log(this.newdistance);
      this.reCheckIfNewDistanceIsset();
    }, error => {
      this.toasterService.pop('error', 'Error', error)
    });
  }
  //
  // checkIfNewDistanceIsset(value){
  //
  //   if (this.newdistance && this.newdistance.hasOwnProperty(value) ) {
  //
  //     this.initialValue = value + 1;
  //
  //     return true;
  //   }
  //
  //   this.initialValue = value + 1;
  // }

  reCheckIfNewDistanceIsset(){

    var value = 0;

    this.properties.forEach((property, index) => {
      if (this.newdistance && this.newdistance.hasOwnProperty(value) ) {

        value = value + 1;

        property.class_exists = true;

        return true;
      }

      property.class_exists = false;

      value = value + 1;
    });
  }

  setRange(range){

    this.range = range;
  }
}
