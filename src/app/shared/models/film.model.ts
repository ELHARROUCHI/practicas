import { MovieType } from './movie-type.enum';

/**
 *
 */
export interface Film {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MovieType;
  Poster: string;
}
