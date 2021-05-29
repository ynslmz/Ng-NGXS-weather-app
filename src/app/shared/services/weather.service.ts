import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDetailOfCity, WeatherByCityName } from 'src/app/shared/interfaces/weather.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) { }

  // to get city weather data
  getWeatherByCityName(city: string, unit: string): Observable<WeatherByCityName> {
    return this.httpClient.get<WeatherByCityName>(`${environment.apiUrl.weather}/weather?q=${city}&appid=${environment.apiId}&units=${unit}`);
  }

  getWeatherDetailOfCity(lat: number, long: number, unit: string): Observable<WeatherDetailOfCity> {
    return this.httpClient.get<WeatherDetailOfCity>(`${environment.apiUrl.weather}/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,daily,alerts&appid=${environment.apiId}&units=${unit}`)
  }
}
