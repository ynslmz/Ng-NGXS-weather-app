import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitiesWeatherList } from 'src/app/shared/interfaces/weather.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) { }

  // to get cities weather data
  getCitiesWeatherData(lat: number, long: number, count: number, unit: string): Observable<CitiesWeatherList> {
    return this.httpClient
      .get<CitiesWeatherList>(`${environment.apiUrl.weather}/find?lat=${lat}&lon=${long}&cnt=${count}&appid=${environment.apiId}&units=${unit}`);
  }

  getDetailOfCity(lat: number, long: number, unit: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl.weather}/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,daily,alerts&appid=${environment.apiId}&units=${unit}`)
  }
}
