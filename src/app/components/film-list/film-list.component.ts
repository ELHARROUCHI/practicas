import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { Film } from '../../shared/models/film.model';
import { getFilmsState } from '../../shared/store/film/film.selector';
import { FilmState } from 'src/app/shared/store/film/film.state';

@Component({
  selector: 'zh-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  films: Film[];

  constructor(
    private router: Router,
    private store: Store<FilmState>
  ) { }

  ngOnInit() {
    this.store
    .pipe(
      select(getFilmsState)
    )
      .subscribe((filmState: FilmState) => this.films = filmState.films);
  }

  /**
   * view details
   *
   * @param filmId movie id
   */
  viewDetals(filmId: string): void {
    const commands: any[] = ['/films', filmId];
    this.router.navigate(commands);
  }

  /**
   * save film as favorite
   *
   * @param film film object
   */
  save(film: Film): void {
    localStorage.setItem(film.imdbID, JSON.stringify(film));
  }

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
