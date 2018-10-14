import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { first, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { AppState } from '../../shared/store/app.reducer';
import { Film } from '../../shared/models/film.model';
import { getFilmsState } from '../../shared/store/film/film.selector';
import { FilmState } from 'src/app/shared/store/film/film.state';

@Component({
  selector: 'zh-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  film: Film;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.route
      .params
      .pipe(
        map((param: any) => param.id),
        switchMap((id: string) => this.store
          .select(getFilmsState)
          .pipe(
            first(),
            map((filmState: FilmState) => filmState.films.filter((film: Film) => film.imdbID === id)),
            switchMap((films: Film[]) => of(films[0]))
          )
        )
      ).subscribe((film: Film) => this.film = film);
  }

}
