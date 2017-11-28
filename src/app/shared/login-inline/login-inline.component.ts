import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, HttpModule } from '@angular/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-inline',
  templateUrl: './login-inline.component.html',
  styleUrls: ['./login-inline.component.css'],
  providers: [HttpModule]
})
export class LoginInlineComponent implements OnInit {

  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
  }

  login(event, username, password) {
    event.preventDefault();

    let url = "http://localhost:50408/api/login";
    var data = { username: username.value, password: password.value };
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this._http.post(url, body, options).subscribe(response => {
      if (response.json().Status == '0') {
        localStorage.setItem('access_token', response.json().access_token);
        localStorage.setItem('expires_in', response.json().expires_in);
        localStorage.setItem('token_type', response.json().token_type);
        localStorage.setItem('username', response.json().username);
      }
      else if(response.json().Status == '1')
      {
        alert(response.json().Message);
      }
    },
      error => {
        alert('Error! Please try again later');
      });
  }
}
