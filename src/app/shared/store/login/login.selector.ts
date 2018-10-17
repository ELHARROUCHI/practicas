import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

export const getLoginState = createFeatureSelector<AppState>('userLoginState');
