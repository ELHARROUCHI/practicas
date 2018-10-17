import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

export const getState = createFeatureSelector<AppState>('userLoginState');
