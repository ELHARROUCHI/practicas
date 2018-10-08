import { Action } from '@ngrx/store';
import { Film } from '../models/film.model';

export const LOAD_FILMS_BY_TITLE = '[Get Films] obtain films by title';
export const LOAD_FILMS_BY_TITLE_SUCCESS = '[Get Films] obtain films by title, success';
export const LOAD_FILMS_BY_TITLE_FAIL = '[Get Films] obtain films by title, fail';

export class LoadFilmsByTitle implements Action {
  readonly type = LOAD_FILMS_BY_TITLE;
  constructor(public title: string) { }
}

export class LoadFilmsByTitleSeccess implements Action {
  readonly type = LOAD_FILMS_BY_TITLE_SUCCESS;
  constructor(public films: Film[]) { }
}

export class LoadFilmsByTitleFail implements Action {
  readonly type = LOAD_FILMS_BY_TITLE_FAIL;
  constructor(public payload: any) { }
}

export type FilmActions = LoadFilmsByTitle |
  LoadFilmsByTitleSeccess |
  LoadFilmsByTitleFail;
