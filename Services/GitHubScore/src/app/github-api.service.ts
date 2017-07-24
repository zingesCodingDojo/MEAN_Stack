import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class GithubAPIService {

  constructor(private _http: Http) { }

  retrieveAPIScore(username) {
      return this._http.get('https://api.github.com/users/' + username).map(data => data.json()).toPromise();
  }
}
