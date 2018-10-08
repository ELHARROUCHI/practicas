import { Film } from './../models/film.model';

/**
 * application state
 */
export interface AppState {
  films: Film[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialState: AppState = {
  films: [],
  loaded: false,
  loading: false,
  error: undefined,
};
