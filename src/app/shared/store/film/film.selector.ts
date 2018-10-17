import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
import { FilmState } from './film.state';

export const getState = createFeatureSelector<AppState>('state');
export const getFilmState = createSelector(getState, (state: AppState): FilmState => state.filmState);
