import { createFeatureSelector } from '@ngrx/store';

import { FilmState } from './film.state';

export const getFilmsState = createFeatureSelector<FilmState>('filmsState');


