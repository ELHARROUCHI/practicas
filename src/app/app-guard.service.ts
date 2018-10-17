import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';

import { AppState } from './shared/store';
import { getLoginState } from './shared/store/login/login.selector';
import { UserLoginState } from './shared/store/login/login.state';

@Injectable()
export class AppGuard implements CanActivate {

  constructor(private store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store
      .pipe(
        select(getLoginState),
        switchMap((loginState: UserLoginState) => of(!!loginState.user))
      );
  }

}
