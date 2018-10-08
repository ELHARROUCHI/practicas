import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app-state';

export const getState = createFeatureSelector<AppState>('state');

export const getFilms = createSelector(getState, (state: AppState) => state.films);

