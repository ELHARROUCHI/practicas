import { Film } from '../../models/film.model';

/**
 * film state
 */
export interface FilmState {
  films: Film[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialState: FilmState = {
  films: [],
  loaded: false,
  loading: false,
  error: undefined,
};
