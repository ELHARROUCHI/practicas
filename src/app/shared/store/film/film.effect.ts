import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, filter } from 'rxjs/operators';

import { FilmService } from '../../../components/services/film.service';
import { LOAD_FILMS_BY_TITLE, LoadFilmsByTitle, LoadFilmsByTitleSeccess, LoadFilmsByTitleFail } from './film.action';
import { Film } from '../../models/film.model';

@Injectable()
export class FilmEffect {

  @Effect()
  public getFilmsByTitle$ = this.actions$
    .pipe(
      ofType(LOAD_FILMS_BY_TITLE),
      map((action: LoadFilmsByTitle) => action.title),
      filter((title: string) => title !== undefined),
      switchMap((title: string) => this.filmSrv
        .getFilmsByTitle$(title)
        .pipe(
          map((films: Film[]) => new LoadFilmsByTitleSeccess(films)),
          catchError((error: any) => of(new LoadFilmsByTitleFail(error)))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private filmSrv: FilmService
  ) { }

}
