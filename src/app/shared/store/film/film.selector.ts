import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '..';

export const getFilmState = createFeatureSelector<AppState>('filmState');
