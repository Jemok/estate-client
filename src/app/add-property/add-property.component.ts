import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {ToasterService} from "angular2-toaster/angular2-toaster";
import {PropertyService} from "../services/property.service";

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  propertyForm: FormGroup;

  owner: FormControl;

  email: FormControl;

  phone : FormControl;

  description : FormControl;

  property : FormControl;

  location : FormControl;

  price : FormControl;

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
              public builder: FormBuilder,
              public toasterService: ToasterService,) { }

  ngOnInit() {
    this.makePropertyForm();
  }

  makePropertyForm(){

    this.owner = new FormControl('', [
      Validators.required
    ]);

    this.email = new FormControl('', [
      Validators.required
    ]);

    this.phone = new FormControl('', [
      Validators.required,
    ]);

    this.description = new FormControl('', [
      Validators.required,
    ]);

    this.property = new FormControl('', [
      Validators.required,
    ]);

    this.location = new FormControl('', [
      Validators.required,
    ]);

    this.price = new FormControl('', [
      Validators.required,
    ]);

    this.propertyForm = this.builder.group({
      owner : this.owner,
      email: this.email,
      phone: this.phone,
      description : this.description,
      property    : this.property,
      location    : this.location,
      price       : this.price
    });
  }


  addProperty(propertyData){

    propertyData.parking = this.parking;
    propertyData.garden  = this.garden;
    propertyData.one_bedroom = this.one_bedroom;
    propertyData.two_bedroom = this.two_bedroom;
    propertyData.three_bedroom = this.three_bedroom;
    propertyData.one_bathroom  = this.one_bathroom;
    propertyData.two_bathroom  = this.two_bathroom;
    propertyData.three_bathroom = this.three_bathroom;
    propertyData.guest_room     = this.guest_room;
    propertyData.library        = this.library;
    propertyData.solar_pannels  = this.solar_pannels;


    this.propertyHttpService.addProperty(propertyData).subscribe(data => {
      this.toasterService.pop('success', 'Created', data.message);

    }, error => {
      error.forEach(err => {
        this.toasterService.pop('error', 'Error', err);
      });
    })
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
}
