import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Actions, ofActionCompleted, Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { WeatherDetailOfCity, WeatherByCityName } from 'src/app/shared/interfaces/weather.model';
import { GetCitiesWeatherInfo, GetDetailOfCity, RecordLastWeatherAction } from 'src/app/shared/store/app.actions';
import { AppState } from 'src/app/shared/store/app.state';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'bb-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  // onpush strategy to limit change detection cycles and to get performance
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherListComponent implements OnInit, OnDestroy {

  // $result!: Observable<CitiesWeatherList>;
  @Select(AppState.selectCitiesWeatherInfo) cities$!: Observable<WeatherByCityName[]>;
  subscriptions: Subscription[] = [];

  cities = ['Amsterdam', 'Barcelona', 'Bursa', 'Istanbul', 'Fethiye'];
  city$!: Observable<WeatherDetailOfCity>;
  showDetail = false;

  constructor(private store: Store, private actions$: Actions) {

    // save last action to call when unit changed
    this.subscriptions.push(
      this.actions$.pipe(ofActionCompleted(GetCitiesWeatherInfo, GetDetailOfCity))
        .subscribe((res) => {
          if (res.result.successful) {
            this.store.dispatch(new RecordLastWeatherAction(res.action))
          }
        }));

    // filter null values and open modal when data receives
    this.city$ = this.store.select(AppState.selectDetailOfCity).pipe(
      filter((res) => !!res),
      tap((res) => this.showDetail = true)
    )

    // request 5 cities weather data
    this.store.dispatch(new GetCitiesWeatherInfo(this.cities));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
  }

  closeClicked() {
    this.showDetail = false;
  }

}
