import { Component, OnInit } from '@angular/core';
import { ForecastpingService } from './../forecastping.service';

@Component({
  selector: 'app-washington-dccomponent',
  templateUrl: './washington-dccomponent.component.html',
  styleUrls: ['./washington-dccomponent.component.css']
})
export class WashingtonDCComponentComponent implements OnInit {
  avgTemp;
  highTemp;
  lowTemp;
  status;
  humidity;
  constructor (private _myWeather: ForecastpingService) {}

  ngOnInit() {
      this._myWeather.cityWeather('washingtondc')
      .then( data => {
        console.log(data);
        this.humidity = data.main.humidity;
        this.avgTemp = data.main.temp;
        this.highTemp = data.main.temp_max;
        this.lowTemp = data.main.temp_min;
        this.status = data.weather[0].description;
      });
  }
}
