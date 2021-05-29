import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Weather } from 'src/app/shared/interfaces/weather.model';
import { AppState } from 'src/app/shared/store/app.state';

@Component({
  selector: 'bb-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent implements OnInit {

  @Input() weather!: Weather[];

  constructor() { }

  ngOnInit(): void {
  }

}
