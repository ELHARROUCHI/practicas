import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class FakeLoginService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/login') && req.method === 'POST') {
      const { email, password } = req.body;

      if (email === 'zouhair@mail.com' && password === 'pass') {
        const body = {
          id: 1,
          name: 'Zouhair',
          email
        };
        return of(new HttpResponse({ status: 200, body }));
      } else {
        return throwError({
          error: {
            message: 'incorrect username or password'
          }
        });
      }
    }

    return next.handle(req);
  }

}
