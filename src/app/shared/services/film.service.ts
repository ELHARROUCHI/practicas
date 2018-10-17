import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Film } from '../../shared/models/film.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private API_KEY = 'f12ba140';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * searching films by keyword
   */
  getFilmsByTitle$(keyword: string): Observable<Film[]> {
    const url = `http://www.omdbapi.com/?apikey=${this.API_KEY}&s=${keyword}`;
    return this.http
      .get<Film[]>(url)
      .pipe(
        map((result: any) => result.Search)
      );
  }

}
