import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UnitChanged } from 'src/app/shared/store/app.actions';

@Component({
  selector: 'bb-unit-selector',
  templateUrl: './unit-selector.component.html',
  styleUrls: ['./unit-selector.component.scss']
})
export class UnitSelectorComponent implements OnInit {

  constructor(public store: Store) { }

  ngOnInit(): void {
  }

  default = "standard";

  unitList = [
    "standard",
    "metric",
    "imperial",
  ]

  change(e: any) {
    if (!!e.target.value) {
      this.store.dispatch(new UnitChanged(e.target.value));
    }
  }
}
