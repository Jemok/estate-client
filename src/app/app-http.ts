import {Observable} from "rxjs";
import {Response, RequestOptions, Headers, URLSearchParams} from "@angular/http";

export class AppHttp {
    token: string;

    constructor() {
        this.token = localStorage.getItem('token');
    }

    extractData(res: Response) {
        return res.json();
    }

    handleErrors(error: Response | any) {
        let errMsg = error.json();
        return Observable.throw(errMsg);
    }

    getOptions(parameters = null): RequestOptions {
        let headers = new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
            'Accept':'application/json'
        });

        if (parameters != null) {
            let params: URLSearchParams = new URLSearchParams();
            for (let p of parameters) {
                params.set(p.key, p.value);
            }
            return new RequestOptions({search: params, headers: headers});
        }

        return new RequestOptions({headers: headers});
    }
}
