import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppHttp} from "../app-http";
import {Observable} from "rxjs/Rx";
import {base_url} from "../app.constants";
import {Login} from "../interfaces/login";

@Injectable()
export class AuthServiceService extends AppHttp{

  constructor(private http : Http) {
    super();
  }

  login(loginData): Observable<Login>{
    return this.http.post(`${base_url}auth/login`, loginData)
        .map(this.extractData)
        .catch(this.handleErrors);
  }

}
