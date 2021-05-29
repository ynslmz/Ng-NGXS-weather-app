import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { WeatherDetailOfCity } from 'src/app/shared/interfaces/weather.model';
import { AppState } from 'src/app/shared/store/app.state';

@Component({
  selector: 'bb-weather-detail-of-city',
  templateUrl: './weather-detail-of-city.component.html',
  styleUrls: ['./weather-detail-of-city.component.scss']
})
export class WeatherDetailOfCityComponent implements OnInit {

  @Input() detailedCity!: WeatherDetailOfCity;

  @Select(AppState.selectUnit) unit$!: Observable<string>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
