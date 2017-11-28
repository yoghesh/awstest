import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { IProject } from './project';

@Injectable()
export class ProjectService {

  constructor(private _http: Http) { }

  public getProjects(): Observable<IProject[]> {
    let url:string = 'http://localhost:50408/api/projects';
    let header =new Headers({'Authorization': localStorage.getItem("access_token"), 'User':localStorage.getItem("username")});
    let option = new RequestOptions({headers: header});
    return this._http.get(url, option)
    .map((response:Response) => <IProject[]>response.json());
  }
}
