import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { zip } from 'rxjs';
import { WeatherByCityName, WeatherDetailOfCity } from '../interfaces/weather.model';
import { WeatherService } from '../services/weather.service';
import { DeleteRequest, GetCitiesWeatherInfo, GetDetailOfCity, RecordRequest, UnitChanged } from './app.actions';


export interface AppStateModel {
  unit: string;
  citiesWeatherInfo: WeatherByCityName[];
  detailOfCity: WeatherDetailOfCity;
  httpRequests: string[]
}


export const defaultAppState: Partial<AppStateModel> = {
  unit: 'metric',
  citiesWeatherInfo: [],
  httpRequests: []
}

@State<AppStateModel>({
  name: "AppState",
  defaults: <AppStateModel>defaultAppState
})
@Injectable({ providedIn: 'root' })
export class AppState {

  constructor(private weatherService: WeatherService) { }

  @Selector() static selectUnit(state: AppStateModel): string { return state.unit; }

  @Selector() static selectCitiesWeatherInfo(state: AppStateModel): WeatherByCityName[] { return state.citiesWeatherInfo; }

  @Selector() static selectDetailOfCity(state: AppStateModel): WeatherDetailOfCity { return state.detailOfCity!; }

  @Selector() static selectIsLoading(state: AppStateModel): Boolean { return state.httpRequests.length > 0; }

  // to change units globally
  @Action(UnitChanged)
  unitChanged(ctx: StateContext<AppStateModel>, action: UnitChanged) {
    ctx.patchState({ unit: action.unit })
  }

  // to fetch cities weather data
  @Action(GetCitiesWeatherInfo)
  getCitiesWeatherInfo(ctx: StateContext<AppStateModel>, action: GetCitiesWeatherInfo) {
    let unit = ctx.getState().unit;
    zip(...action.cities.map(city => this.weatherService.getWeatherByCityName(city, unit))).subscribe(
      res => ctx.patchState({ citiesWeatherInfo: res })
    )
  }

  @Action(GetDetailOfCity)
  getDetailOfCity(ctx: StateContext<AppStateModel>, action: GetDetailOfCity) {
    let unit = ctx.getState().unit;
    this.weatherService.getWeatherDetailOfCity(action.lat, action.lon, unit).subscribe(
      res => ctx.patchState({ detailOfCity: { ...res, name: action.cityName } })
    )
  }

  @Action(RecordRequest)
  recordRequest(ctx: StateContext<AppStateModel>, action: RecordRequest) {
    ctx.patchState({ httpRequests: [...ctx.getState().httpRequests, action.request] })
  }

  @Action(DeleteRequest)
  deleteRequest(ctx: StateContext<AppStateModel>, action: DeleteRequest) {
    let reqs = [...ctx.getState().httpRequests]
    const index = reqs.indexOf(action.request);
    if (index >= 0) {
      reqs.splice(index, 1);
    }
    ctx.patchState({ httpRequests: reqs });
  }
}
