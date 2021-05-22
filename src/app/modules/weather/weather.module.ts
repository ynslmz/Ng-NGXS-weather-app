import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherListComponent } from './pages/weather-list/weather-list.component';
import { WeatherRoutingModule } from './weather-routing.module';



@NgModule({
  declarations: [
    WeatherListComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
