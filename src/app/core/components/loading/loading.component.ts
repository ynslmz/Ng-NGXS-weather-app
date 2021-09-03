import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/store/app.state';

@Component({
  selector: 'bb-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Select(AppState.selectIsLoading) visibility$!: Observable<boolean>

  constructor() { }

  ngOnInit(): void {
  }

}
