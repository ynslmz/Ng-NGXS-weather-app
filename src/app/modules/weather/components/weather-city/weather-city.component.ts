import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Coord, WeatherByCityName } from 'src/app/shared/interfaces/weather.model';
import { GetDetailOfCity } from 'src/app/shared/store/app.actions';
import { AppState } from 'src/app/shared/store/app.state';

@Component({
  selector: 'bb-weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.scss']
})
export class WeatherCityComponent implements OnInit {

  @Input() cityWeatherData!: WeatherByCityName;
  unit: string;
  constructor(public store: Store) {
    this.unit = this.store.selectSnapshot(AppState.selectUnit)
  }

  ngOnInit(): void {
  }

  onClick(coord: Coord, cityName: string) {
    this.store.dispatch(new GetDetailOfCity(coord.lat, coord.lon, cityName));
  };
}
