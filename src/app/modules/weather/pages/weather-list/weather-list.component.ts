import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import {
  WeatherDetailOfCity,
  WeatherByCityName,
} from 'src/app/shared/interfaces/weather.model';
import { GetCitiesWeatherInfo } from 'src/app/shared/store/app.actions';
import { AppState } from 'src/app/shared/store/app.state';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'bb-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  // onpush strategy to limit change detection cycles and to get performance
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherListComponent implements OnInit, OnDestroy {
  @Select(AppState.selectCitiesWeatherInfo) cities$!: Observable<
    WeatherByCityName[]
  >;
  cities = ['Amsterdam', 'Eindhoven', 'Bursa', 'Istanbul', 'Fethiye'];
  city$!: Observable<WeatherDetailOfCity>;
  showDetail = false;
  unitSelectorSubscription: Subscription;

  constructor(private store: Store) {
    this.unitSelectorSubscription = this.store
      .select(AppState.selectUnit)
      .subscribe((res) => {
        if (!!res) {
          this.dispatchWethearRequest();
        }
      });

    // filter null values and open modal when data receives
    this.city$ = this.store.select(AppState.selectDetailOfCity).pipe(
      filter((res) => !!res),
      tap((res) => (this.showDetail = true))
    );
  }

  dispatchWethearRequest(): void {
    // request 5 cities weather data
    this.store.dispatch(new GetCitiesWeatherInfo(this.cities));
    console.log('requested');
  }

  ngOnDestroy(): void {
    // this.subscriptions.forEach((s) => s.unsubscribe());
    if (!!this.unitSelectorSubscription) {
      this.unitSelectorSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    // this.dispatchWethearRequest();
  }

  closeClicked() {
    this.showDetail = false;
  }
}
