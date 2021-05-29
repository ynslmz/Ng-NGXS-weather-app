import { Injectable } from '@angular/core';
import { Action, ActionType, Selector, State, StateContext } from '@ngxs/store';
import { zip } from 'rxjs';
import { WeatherByCityName, WeatherDetailOfCity } from '../interfaces/weather.model';
import { WeatherService } from '../services/weather.service';
import { GetCitiesWeatherInfo, GetDetailOfCity, RecordLastWeatherAction, UnitChanged } from './app.actions';


export interface AppStateModel {
  unit: string;
  citiesWeatherInfo: WeatherByCityName[];
  lastAction: ActionType;
  detailOfCity: WeatherDetailOfCity;
}

export const defaultAppState: Partial<AppStateModel> = {
  unit: 'standard',
  citiesWeatherInfo: []
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

  // to change units globally
  @Action(UnitChanged)
  unitChanged(ctx: StateContext<AppStateModel>, action: UnitChanged) {
    ctx.patchState({ unit: action.unit })
    // call last action to fetch data with new unit!
    ctx.dispatch(ctx.getState().lastAction);
  }

  // to fetch cities weather data
  @Action(GetCitiesWeatherInfo)
  getCitiesWeatherInfo(ctx: StateContext<AppStateModel>, action: GetCitiesWeatherInfo) {
    let unit = ctx.getState().unit;
    zip(...action.cities.map(city => this.weatherService.getWeatherByCityName(city, unit))).subscribe(
      res => ctx.patchState({ citiesWeatherInfo: res })
    )
  }

  @Action(RecordLastWeatherAction)
  recordLastWeatherAction(ctx: StateContext<AppStateModel>, action: RecordLastWeatherAction) {
    ctx.patchState({ lastAction: action.actionType })
  }

  @Action(GetDetailOfCity)
  getDetailOfCity(ctx: StateContext<AppStateModel>, action: GetDetailOfCity) {
    let unit = ctx.getState().unit;
    this.weatherService.getWeatherDetailOfCity(action.lat, action.lon, unit).subscribe(
      res => ctx.patchState({ detailOfCity: { ...res, name: action.cityName } })
    )
  }
}
