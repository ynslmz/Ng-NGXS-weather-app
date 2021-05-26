import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Action, ActionType, getActionTypeFromInstance, Selector, State, StateContext } from '@ngxs/store';
import { CitiesWeatherList } from '../interfaces/weather.model';
import { WeatherService } from '../services/weather.service';
import { GetCitiesWeatherData, RecordLastWeatherAction, UnitChanged } from './app.actions';


export class AppStateModel {
  unit!: string;
  citiesWeatherData!: CitiesWeatherList | null;
  lastAction!: ActionType | null
}

export const defaultAppState: AppStateModel = {
  unit: 'standard',
  citiesWeatherData: null,
  lastAction: null
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

}
