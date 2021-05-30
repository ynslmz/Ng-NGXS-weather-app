import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { RecordRequest } from 'src/app/shared/store/app.actions';
import { AppState } from 'src/app/shared/store/app.state';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store: Store;

  // for testing ngxs
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingComponent],
      imports: [NgxsModule.forRoot([AppState])],
      providers: [
        {
          provide: WeatherService,
          // not need any service to test showing loading
          useValue: {}
        }
      ]
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading when dispatch record request', () => {
    store = TestBed.inject(Store);
    store.dispatch(new RecordRequest("test"));

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span.fs-3').textContent).toContain('Loading...');
  });


});
