import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AppState } from './store/app.state';

@NgModule({
  imports: [NgxsModule.forRoot([AppState], {
    developmentMode: !environment.production
  })],
  exports: [],
  declarations: [],
  providers: [],
})
export class SharedModule { }
