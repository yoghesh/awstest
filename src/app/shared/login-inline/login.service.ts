import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor(private _http: Http) { }

public login(username: string, password: string) : Observable<JSON>{
    let url = "http://localhost:50408/api/login";
    let resJson : JSON;
    var data = { username: username, password: password };
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(url, body, options).map((response:Response) => <JSON>response.json());
}
}
