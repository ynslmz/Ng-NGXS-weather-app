import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherListComponent } from './pages/weather-list/weather-list.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherCityComponent } from './components/weather-city/weather-city.component';
import { WeatherService } from '../../shared/services/weather.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherDetailOfCityComponent } from './components/weather-detail-of-city/weather-detail-of-city.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';



@NgModule({
  declarations: [
    WeatherListComponent,
    WeatherCityComponent,
    WeatherDetailOfCityComponent,
    WeatherIconComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
