import { AppState } from './app-state';
import {
  LOAD_FILMS_BY_TITLE,
  LOAD_FILMS_BY_TITLE_SUCCESS,
  FilmActions,
  LOAD_FILMS_BY_TITLE_FAIL
} from './film.action';
import { initialState } from './app-state';

export const FilmReducer = (state: AppState = initialState, action: FilmActions): AppState => {

  switch (action.type) {
    case LOAD_FILMS_BY_TITLE:
      return {
        ...state,
        loading: true
      };
    case LOAD_FILMS_BY_TITLE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        films: [...action.films]
      };
    case LOAD_FILMS_BY_TITLE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };
    default:
      return state;
  }

}
