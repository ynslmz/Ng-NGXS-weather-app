import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UnitSelectorComponent } from './components/unit-selector/unit-selector.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavbarComponent,
    UnitSelectorComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
  ]
})
export class CoreModule { }
