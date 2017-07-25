import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ForecastpingService {

  constructor(private _http: Http) { }
  mycity: string;

  cityWeather(mycity) {
      return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + mycity + '&APPID=1c99c00262b32485b28a5644d7236cb6' + '&units=imperial')
      .map( data => data.json())
      .toPromise();
  }
}
