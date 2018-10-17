import { FilmState } from './film.state';
import {
  LOAD_FILMS_BY_TITLE,
  LOAD_FILMS_BY_TITLE_SUCCESS,
  FilmActions,
  LOAD_FILMS_BY_TITLE_FAIL
} from './film.action';
import { initialState } from './film.state';

export function filmReducer(filmState: FilmState = initialState, action: FilmActions) {

  switch (action.type) {
    case LOAD_FILMS_BY_TITLE:
      return {
        ...filmState,
        loading: true
      };
    case LOAD_FILMS_BY_TITLE_SUCCESS:
      return {
        ...filmState,
        loading: false,
        loaded: true,
        films: [...action.films]
      };
    case LOAD_FILMS_BY_TITLE_FAIL:
      return {
        ...filmState,
        loading: false,
        loaded: false,
        error: action.payload
      };
    default:
      return filmState;
  }

}
