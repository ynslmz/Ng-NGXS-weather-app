import { Component, Input, OnInit } from '@angular/core';
import { CityWeatherData } from 'src/app/shared/interfaces/weather.model';

@Component({
  selector: 'bb-weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.scss']
})
export class WeatherCityComponent implements OnInit {

  @Input() cityWeatherData!: CityWeatherData;
  constructor() { }

  ngOnInit(): void {
  }

}
