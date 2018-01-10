import { BusService } from './bus.service';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  private token = 'InitialAuthorizationToken';

  constructor(private busService: BusService) {
    this.subscribeToTokenChanges();
  }

  private subscribeToTokenChanges() {
    this.busService.getUserToken$().subscribe(this.setTokenIfAny.bind(this));
  }
  private setTokenIfAny(data) {
    if (data && data.token) {
      this.token = data.token;
    }
  }
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authorizationReq = this.setAuthHeader(req);
    const handledRequest = next.handle(authorizationReq);
    return handledRequest;
  }
  private setAuthHeader(req: HttpRequest<any>): HttpRequest<any> {
    const authorization = `Bearer ${this.token}`;
    const headers = req.headers.set('Authorization', authorization);
    const authorizationReq = req.clone({ headers });
    return authorizationReq;
  }
}
