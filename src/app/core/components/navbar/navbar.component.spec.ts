import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { UnitSelectorComponent } from '../unit-selector/unit-selector.component';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        UnitSelectorComponent
      ],
      imports: [NgxsModule.forRoot([])]
    })
      .compileComponents();
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span.fs-3').textContent).toContain('Backbase Weather Forecast');
  });
});
