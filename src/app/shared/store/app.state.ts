import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UnitChanged } from './app.actions';


export class AppStateModel {
  unit!: string;
}

export const defaultAppState: AppStateModel = {
  unit: 'standard'
}

@State<AppStateModel>({
  name: "AppState",
  defaults: defaultAppState
})
@Injectable({ providedIn: 'root' })
export class AppState {

  @Selector()
  static selectUnit(state: AppStateModel): string {
    return state.unit;
  }

  @Action(UnitChanged)
  unitChanged(ctx: StateContext<AppStateModel>, action: UnitChanged) {
    ctx.patchState({ unit: action.unit })
  }

}
