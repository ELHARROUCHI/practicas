import { ActionReducerMap } from '@ngrx/store';

import { filmReducer } from './film/film.reducer';
import { FilmState } from './film/film.state';

import { loginReducer } from './login/login.reducer';
import { UserLoginState } from './login/login.state';

export interface AppState {

  filmState: FilmState;
  userLoginState: UserLoginState;

}

export const AppReducers: ActionReducerMap<AppState> = {

  filmState: filmReducer,
  userLoginState: loginReducer

};
