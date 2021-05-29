import { ActionType } from "@ngxs/store";

export class UnitChanged {
  static readonly type = '[UnitSelector] Unit Changed';
  constructor(public unit: string) { }
}

export class GetCitiesWeatherInfo {
  static readonly type = '[Weather Module] Get Cities Weather Data'
  constructor(public cities: string[]) { }
}

export class GetDetailOfCity {
  static readonly type = '[Weather Module] Get Detail of a City'
  constructor(public lat: number, public lon: number, public cityName: string) { }
}

export class RecordLastWeatherAction {
  static readonly type = '[Weather Module] Record Last Weather Action'
  constructor(public actionType: ActionType) { }
}
