import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CitiesWeatherList } from 'src/app/shared/interfaces/weather.model';
import { WeatherService } from '../../services/weather.service';

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

  constructor(private weatherService: WeatherService) {
    this.$result = this.weatherService
      .getCitiesWeatherData(this.coord.lat, this.coord.lon, this.coord.take, this.coord.unit)
  }

  ngOnInit(): void {
  }

}
