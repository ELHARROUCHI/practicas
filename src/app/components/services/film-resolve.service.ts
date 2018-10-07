import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { Film } from './../../shared/models/film.model';
import { FilmService } from './film.service';

/**
 * 
 */
@Injectable()
export class FilmResoveService implements Resolve<Film[]> {

  constructor(private filmSrv: FilmService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Film[]> {
    return this.filmSrv.getFilms$(route.params['keyword']);
  }

}
