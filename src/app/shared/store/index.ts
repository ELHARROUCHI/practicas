import { LoginEffect } from './login/login.effect';
import { FilmEffect } from './film/film.effect';

export * from './app.reducer';

export const effects = [
  LoginEffect,
  FilmEffect
];
