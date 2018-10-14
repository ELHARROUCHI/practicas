import { ActionReducerMap } from '@ngrx/store';

import { FilmState } from './film/film.state';
import { FilmReducer } from './film/film.reducer';

export interface AppState {

  filmsState: FilmState;

}

export const AppReducers: ActionReducerMap<AppState> = {

  filmsState: FilmReducer

};
