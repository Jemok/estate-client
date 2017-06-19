import { Injectable } from '@angular/core';
import {AppHttp} from "../app-http";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Property} from "../interfaces/property";
import {base_url} from "../app.constants";




@Injectable()
export class PropertyService extends AppHttp{

  constructor(private http : Http) {
    super();
  }

  getProperties(): Observable<[Property]> {
    return this.http.post(`${base_url}properties`, this.getOptions())
        .map(this.extractData)
        .catch(this.handleErrors);
  }

  showProperty(houseId): Observable<Property>{
    return this.http.post(`${base_url}properties/show`, houseId, this.getOptions())
        .map(this.extractData)
        .catch(this.handleErrors);
  }

  search(data): Observable<any> {
    return this.http.post(`${base_url}mining/search`, data, this.getOptions())
        .map(this.extractData)
        .catch(this.handleErrors);
  }

  addProperty(propertyData): Observable<any>{
    return this.http.post(`${base_url}properties/add`, propertyData, this.getOptions())
        .map(this.extractData)
        .catch(this.handleErrors);
  }

  updateProperty(propertyData): Observable<any>{
    return this.http.post(`${base_url}properties/update`, propertyData, this.getOptions())
        .map(this.extractData)
        .catch(this.handleErrors);
  }

  deleteProperty(propertyData) : Observable<any>{
    return this.http.post(`${base_url}properties/delete`, propertyData, this.getOptions())
        .map(this.extractData)
        .catch(this.handleErrors);
  }

  uploadImage(propertyData) : Observable<any>{
    return this.http.post(`${base_url}properties/image`, propertyData, this.getOptions())
        .map(this.extractData)
        .catch(this.handleErrors);
  }
}
