import { Component, OnInit } from '@angular/core';
import { ForecastpingService } from './../forecastping.service';

@Component({
  selector: 'app-seattle-component',
  templateUrl: './seattle-component.component.html',
  styleUrls: ['./seattle-component.component.css']
})
export class SeattleComponentComponent implements OnInit {
  avgTemp;
  highTemp;
  lowTemp;
  status;
  humidity;
  constructor (private _myWeather: ForecastpingService) {}

  ngOnInit() {
      this._myWeather.cityWeather('seattle')
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
