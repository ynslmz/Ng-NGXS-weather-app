import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { DeleteRequest, RecordRequest } from 'src/app/shared/store/app.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(public store: Store) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.store.dispatch(new RecordRequest(request.url))
    return next.handle(request)
      .pipe(
        tap(
          (res) => {
            if ([2, 3, 4].includes(res.type)) {
              this.store.dispatch(new DeleteRequest(request.url))
            }
          },
          () => {
            this.store.dispatch(new DeleteRequest(request.url))
          }
        )
      );
  }
}
