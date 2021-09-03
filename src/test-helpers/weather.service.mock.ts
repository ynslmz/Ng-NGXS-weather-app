import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherByCityName, WeatherDetailOfCity } from 'src/app/shared/interfaces/weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherMockService {
  constructor() { }
  cityByNameMockData: WeatherByCityName = {
    "coord": {
      "lon": 4.8897,
      "lat": 52.374
    },
    "weather": [
      {
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 293.64,
      "feels_like": 293.15,
      "temp_min": 291.41,
      "temp_max": 296.54,
      "pressure": 1030,
      "humidity": 54
    },
    "visibility": 10000,
    "wind": {
      "speed": 1.34,
      "deg": 35,
      "gust": 3.13
    },
    "clouds": {
      "all": 20
    },
    "dt": 1622383807,
    "sys": {
      "type": 2,
      "id": 2005807,
      "country": "NL",
      "sunrise": 1622345174,
      "sunset": 1622404206
    },
    "timezone": 7200,
    "id": 2759794,
    "name": "Amsterdam",
    "cod": 200
  };

  getWeatherByCityName(cityName: string): Observable<WeatherByCityName> {
    return of(this.cityByNameMockData);
  }

  getWeatherDetailOfCity(lat: number, long: number, unit: string): Observable<WeatherDetailOfCity> {
    return of(this.detailOfCityMockData)
  }

  detailOfCityMockData: WeatherDetailOfCity = {
    "name": 'Amsterdam',
    "lat": 52.374,
    "lon": 4.8897,
    "timezone": "Europe/Amsterdam",
    "timezone_offset": 7200,
    "hourly": [{
      "dt": 1622383200,
      "temp": 293.47,
      "feels_like": 292.94,
      "pressure": 1030,
      "humidity": 53,
      "dew_point": 283.59,
      "uvi": 5,
      "clouds": 17,
      "visibility": 10000,
      "wind_speed": 3.75,
      "wind_deg": 61,
      "wind_gust": 4.35,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1622386800,
      "temp": 293.66,
      "feels_like": 293.2,
      "pressure": 1031,
      "humidity": 55,
      "dew_point": 284.32,
      "uvi": 3.55,
      "clouds": 20,
      "visibility": 10000,
      "wind_speed": 4.13,
      "wind_deg": 52,
      "wind_gust": 4.73,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1622390400,
      "temp": 293.29,
      "feels_like": 292.8,
      "pressure": 1030,
      "humidity": 55,
      "dew_point": 283.98,
      "uvi": 2.18,
      "clouds": 16,
      "visibility": 10000,
      "wind_speed": 4.28,
      "wind_deg": 44,
      "wind_gust": 4.94,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1622394000,
      "temp": 292.54,
      "feels_like": 292.05,
      "pressure": 1029,
      "humidity": 58,
      "dew_point": 284.07,
      "uvi": 1.09,
      "clouds": 12,
      "visibility": 10000,
      "wind_speed": 4.14,
      "wind_deg": 36,
      "wind_gust": 5.44,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1622397600,
      "temp": 291.23,
      "feels_like": 290.79,
      "pressure": 1028,
      "humidity": 65,
      "dew_point": 284.56,
      "uvi": 0.42,
      "clouds": 9,
      "visibility": 10000,
      "wind_speed": 3.57,
      "wind_deg": 30,
      "wind_gust": 6.33,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1622401200,
      "temp": 289.04,
      "feels_like": 288.64,
      "pressure": 1027,
      "humidity": 75,
      "dew_point": 284.62,
      "uvi": 0.12,
      "clouds": 4,
      "visibility": 10000,
      "wind_speed": 3.39,
      "wind_deg": 33,
      "wind_gust": 7.21,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1622404800,
      "temp": 286.19,
      "feels_like": 285.8,
      "pressure": 1026,
      "humidity": 86,
      "dew_point": 283.88,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 3.41,
      "wind_deg": 43,
      "wind_gust": 7.81,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1622408400,
      "temp": 285.29,
      "feels_like": 284.83,
      "pressure": 1026,
      "humidity": 87,
      "dew_point": 283.29,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 3.23,
      "wind_deg": 50,
      "wind_gust": 7.39,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1622412000,
      "temp": 284.57,
      "feels_like": 284.04,
      "pressure": 1026,
      "humidity": 87,
      "dew_point": 282.5,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 2.97,
      "wind_deg": 52,
      "wind_gust": 6.39,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },]
  }

}
