import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherListComponent } from './pages/weather-list/weather-list.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherCityComponent } from './components/weather-city/weather-city.component';
import { WeatherService } from '../../shared/services/weather.service';



@NgModule({
  declarations: [
    WeatherListComponent,
    WeatherCityComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
