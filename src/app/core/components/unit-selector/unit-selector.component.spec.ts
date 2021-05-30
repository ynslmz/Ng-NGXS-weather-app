import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';

import { UnitSelectorComponent } from './unit-selector.component';

describe('UnitSelectorComponent', () => {
  let component: UnitSelectorComponent;
  let fixture: ComponentFixture<UnitSelectorComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitSelectorComponent],
      imports: [NgxsModule.forRoot([])]
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
});
