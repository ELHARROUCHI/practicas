import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { AppState } from '../../shared/store/app-state';
import { Film } from '../../shared/models/film.model';
import { getFilms } from '../../shared/store/film.selector';

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
      .select(getFilms)
      .subscribe((films: Film[]) => this.films = films);
  }

  /**
   * view details
   *
   * @param filmId movie id
   */
  viewDetals(filmId: string) {
    const commands: any[] = ['/films', filmId];
    this.router.navigate(commands);
  }

}
