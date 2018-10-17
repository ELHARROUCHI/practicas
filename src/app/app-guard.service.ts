import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';

import { AppState } from './shared/store';

@Injectable()
export class AppGuard implements CanActivate {

  constructor(private store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store
      .pipe(
        switchMap((mState: AppState) => of(!!mState.userLoginState.user))
      );
  }

}
