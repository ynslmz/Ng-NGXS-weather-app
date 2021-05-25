import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CitiesWeatherList } from 'src/app/shared/interfaces/weather.model';
import { WeatherService } from '../../../../shared/services/weather.service';

@Component({
  selector: 'bb-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  $result!: Observable<CitiesWeatherList>;
  coord = {
    lat: 52.374,
    lon: 4.8897,
    unit: 'metric',
    take: 5
  }



  constructor(private weatherService: WeatherService, private store: Store) {
    let unit = this.store.selectSnapshot(state => state.AppState.unit);
    this.$result = this.weatherService
      .getCitiesWeatherData(this.coord.lat, this.coord.lon, this.coord.take, unit)
  }

  ngOnInit(): void {
  }

}
