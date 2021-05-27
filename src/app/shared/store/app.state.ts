import { Injectable } from '@angular/core';
import { Action, ActionType, Selector, State, StateContext } from '@ngxs/store';
import { CitiesWeatherList } from '../interfaces/weather.model';
import { WeatherService } from '../services/weather.service';
import { GetCitiesWeatherData, GetDetailOfCity, RecordLastWeatherAction, UnitChanged } from './app.actions';


export class AppStateModel {
  unit!: string;
  citiesWeatherData!: CitiesWeatherList | null;
  lastAction!: ActionType | null;
  detailOfCity: any;
}

export const defaultAppState: AppStateModel = {
  unit: 'standard',
  citiesWeatherData: null,
  lastAction: null,
  detailOfCity: null
}

@State<AppStateModel>({
  name: "AppState",
  defaults: defaultAppState
})
@Injectable({ providedIn: 'root' })
export class AppState {

  constructor(private weatherService: WeatherService) { }

  @Selector() static selectUnit(state: AppStateModel): string { return state.unit; }

  @Selector() static selectCitiesWeatherData(state: AppStateModel): CitiesWeatherList { return state.citiesWeatherData!; }

  @Selector() static selectDetailOfCity(state: AppStateModel) { return state.detailOfCity; }

  // to change units globally
  @Action(UnitChanged)
  unitChanged(ctx: StateContext<AppStateModel>, action: UnitChanged) {
    ctx.patchState({ unit: action.unit })
    // call last action to fetch data with new unit!
    ctx.dispatch(ctx.getState().lastAction);
  }

  // to fetch cities weather data
  @Action(GetCitiesWeatherData)
  getCitiesWeatherData(ctx: StateContext<AppStateModel>, action: GetCitiesWeatherData) {
    let unit = ctx.getState().unit;
    this.weatherService.getCitiesWeatherData(action.lat, action.lon, action.take, unit).subscribe(
      (res: CitiesWeatherList) => {
        ctx.patchState({ citiesWeatherData: res })
      }
    )
  }

  @Action(RecordLastWeatherAction)
  recordLastWeatherAction(ctx: StateContext<AppStateModel>, action: RecordLastWeatherAction) {
    ctx.patchState({ lastAction: action.actionType })
  }

  @Action(GetDetailOfCity)
  getDetailOfCity(ctx: StateContext<AppStateModel>, action: GetDetailOfCity) {
    let unit = ctx.getState().unit;
    this.weatherService.getDetailOfCity(action.lat, action.lon, unit).subscribe(
      res => ctx.patchState({ detailOfCity: res })
    )
  }
}
