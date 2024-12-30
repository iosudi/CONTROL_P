import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(
    private _NgxSpinnerService: NgxSpinnerService,
    private _ngZone: NgZone
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._NgxSpinnerService.show();
    return next.handle(request).pipe(
      finalize(() => {
        this._NgxSpinnerService.hide();

        // Trigger Angular's change detection globally
        this._ngZone.run(() => {});
      })
    );
  }
}
