import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from '../../../../models/interfaces/WeatherDatas';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  standalone: false,
  templateUrl: './weather-card.component.html',
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherDatasInput!: WeatherDatas;
  minTemperatureIcon=faTemperatureLow;
  maxTemperatureIcon=faTemperatureHigh;
  humidityIcon=faDroplet;
  windiconIcon=faWind;
  ngOnInit(): void {
    console.log('Method not implemented.',this.weatherDatasInput);
  }
}
