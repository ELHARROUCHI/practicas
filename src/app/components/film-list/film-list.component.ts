import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { Film } from '../../shared/models/film.model';
import { AppState } from '../../shared/store';
import { getFilmState } from '../../shared/store/film/film.selector';
import { FilmState } from 'src/app/shared/store/film/film.state';
import { switchMap, filter, toArray, flatMap, map } from 'rxjs/operators';

@Component({
  selector: 'zh-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  films: Film[];

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store
      .pipe(
        select(getFilmState),
        filter((filmState: FilmState) => !!filmState.films && !!filmState.films.length)
      )
      .subscribe((state: any) => this.films = state.films );
  }

  /**
   * view details
   *
   * @param filmId movie id
   */
  viewDetails(filmId: string): void {
    const commands: any[] = ['/films', filmId];
    this.router.navigate(commands);
  }

  /**
   * save film as favorite
   *
   * @param film film object
   */
  save(film: Film): void {
    if (!localStorage.hasOwnProperty(film.imdbID)) {
      localStorage.setItem(film.imdbID, JSON.stringify(film));
    }
  }

  /**
   *
   * @param film movie
   */
  remove(film: Film): void {
    localStorage.removeItem(film.imdbID);
  }

  /**
   * check if it favorate
   *
   * @param film film
   */
  isFavorate(film: Film): boolean {
    return Object.keys(localStorage)
      .filter((id: string) => film.imdbID === id).length > 0;
  }

}
