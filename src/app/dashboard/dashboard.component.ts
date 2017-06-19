import { Component, OnInit, Inject } from '@angular/core';
import {Property} from "../interfaces/property";
import {PropertyService} from "../services/property.service";
import {ToasterService} from "angular2-toaster/angular2-toaster";
import {FirebaseApp} from "angularfire2";
import * as firebase from 'firebase';
import {Router} from "@angular/router";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  properties : [Property];

  name : string = localStorage.getItem('name');

  storageRef: any;

  image : string;

  placeholder : string = '../../assets/images/holder.jpg';

  uploading: boolean;


  constructor(@Inject(FirebaseApp) firebaseApp: any,
              public router: Router,
              public propertyHttpService : PropertyService,
              private toasterService : ToasterService) {
    this.storageRef = firebase.storage().ref();
  }

  ngOnInit() {
    this.getProperties();
  }

  deleteProperty(propertyData){
    if(confirm("Are you sure you want to delete property" + propertyData.houseName)) {
      this.propertyHttpService.deleteProperty(propertyData).subscribe(data => {
        this.properties.forEach((property) => {
          if (property === propertyData) {
            this.properties.splice(this.properties.indexOf(propertyData), 1)
          }
        });
        this.toasterService.pop('success', 'Deleted',  data.message);
      }, error => {
        error.forEach(err => {
          this.toasterService.pop('error', 'Error', err);
        });
      })
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

  updatePhoto(propertyData) {
    this.uploading = true;

    let file = (<HTMLInputElement>document.getElementById(`avatar-${propertyData.houseId}`)).files[0];

    let fileName = new Date().getTime() + file.name;

    let storageRef = this.storageRef.child(`images/${fileName}`);

    storageRef.put(file).then(success => {
      // this.avatar = success.a.downloadURLs[0].toString();
      this.image = success.downloadURL;

        this.propertyHttpService.uploadImage({image: this.image, houseId : propertyData.houseId})
            .subscribe(avatar => {
              this.uploading = false;

              this.toasterService.pop('success','Image Uploaded','Image was uploaded');
            }, error => {
              this.uploading = false;

            });

    }, error => {
      this.uploading = false;

    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/'])
  }

}
