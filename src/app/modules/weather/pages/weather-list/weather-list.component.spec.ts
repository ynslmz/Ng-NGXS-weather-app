import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { AppState } from 'src/app/shared/store/app.state';
import { WeatherListComponent } from './weather-list.component';

import { WeatherMockService } from 'src/test-helpers/weather.service.mock';
import { GetCitiesWeatherInfo } from 'src/app/shared/store/app.actions';
import { WeatherCityComponent } from '../../components/weather-city/weather-city.component';
import { WeatherIconComponent } from '../../components/weather-icon/weather-icon.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { WeatherDetailOfCityComponent } from '../../components/weather-detail-of-city/weather-detail-of-city.component';
import { TakePipe } from 'src/app/shared/pipes/take/take.pipe';
import { UnixDateTimePipe } from 'src/app/shared/pipes/unix-date-time/unix-date-time-pipe.pipe';

describe('WeatherListComponent', () => {
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherListComponent,
        WeatherCityComponent,
        WeatherIconComponent,
        ModalComponent,
        WeatherDetailOfCityComponent,
        TakePipe,
        UnixDateTimePipe
      ],
      imports: [
        NgxsModule.forRoot([AppState])
      ],
      providers: [{
        provide: WeatherService,
        useClass: WeatherMockService
      }]
    })
      .compileComponents();
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data and list it', () => {
    const cities = ['Amsterdam']
    store.dispatch(new GetCitiesWeatherInfo(cities));
    fixture.detectChanges();
    let cityName = fixture.nativeElement.querySelector('span#cityName').textContent;
    expect(cityName).toEqual('Amsterdam');
  });

  // actually, this test is not belong here, but i wanted to show mocking a service.
  it('should show modal when click a city to see detail', () => {
    const cities = ['Amsterdam']
    store.dispatch(new GetCitiesWeatherInfo(cities));
    fixture.detectChanges();
    let card: HTMLElement = fixture.nativeElement.querySelector('.card');
    card.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    fixture.detectChanges();
    let modalTitle = fixture.nativeElement.querySelector('bb-modal span.fs-5').textContent;
    expect(modalTitle).toEqual('Amsterdam');
  });

});
