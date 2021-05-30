import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { AppState } from 'src/app/shared/store/app.state';

import { UnitSelectorComponent } from './unit-selector.component';

describe('UnitSelectorComponent', () => {
  let component: UnitSelectorComponent;
  let fixture: ComponentFixture<UnitSelectorComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitSelectorComponent],
      imports: [NgxsModule.forRoot([AppState])],
      providers: [{
        provide: WeatherService,
        // no need to use service
        useValue: {}
      }]
    })
      .compileComponents();
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have test option', () => {
    component.unitList = ["test"]
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let select: HTMLSelectElement = compiled.querySelector("select.form-select");
    expect((select.options[0].value)).toEqual('test');
  });

  it('should change unit in state', () => {
    const unitlist = ['test', 'metric', 'test3']
    component.unitList = unitlist;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let select: HTMLSelectElement = compiled.querySelector('select.form-select');

    select.value = unitlist[1];
    select.dispatchEvent(new Event('change'));
    const unitInState = store.selectSnapshot(AppState.selectUnit);
    expect(unitInState).toEqual(unitlist[1]);
  });


});
