import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, filter } from 'rxjs/operators';

import { USER_LOGIN, UserLogin, UserLoginSeccess, UserLoginFail } from './login.action';
import { LoginService } from '../../services/login.service';

@Injectable()
export class LoginEffect {

  @Effect()
  public userLogin$ = this.actions$
    .pipe(
      ofType(USER_LOGIN),
      map((action: UserLogin): any => {
        return {
          email: action.email,
          password: action.password
        };
      }),
      switchMap((login: any) => this.loginSrv
        .login$(login.email, login.password)
        .pipe(
          filter((user: any) => !!user),
          switchMap((user: any) => of(new UserLoginSeccess(user))),
          catchError((error: any) => of(new UserLoginFail(error)))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private loginSrv: LoginService
  ) { }

}
