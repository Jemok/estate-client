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

  search(data): Observable<any> {
    return this.http.post(`${base_url}mining/search`, data, this.getOptions())
        .map(this.extractData)
        .catch(this.handleErrors);
  }
}
