import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { AppState } from '../../shared/store/app.reducer';
import { Film } from '../../shared/models/film.model';

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
    let imdbID: string;
    this.route
      .params
      .pipe(
        map((param: any): string => {
          imdbID = param.id;
          return imdbID;
        }),
        switchMap((id: string) => this.store
          .pipe(
            map((state: AppState) => state.filmState.films.filter((film: Film) => film.imdbID === id)),
            switchMap((films: Film[]) => {
              if (films[0]) {
                return of(films[0]);
              } else if (imdbID && localStorage.hasOwnProperty(imdbID)) {
                return of(JSON.parse(localStorage.getItem(imdbID)));
              }
            })
          )
        )
      ).subscribe((film: Film) => this.film = film);
  }

}
