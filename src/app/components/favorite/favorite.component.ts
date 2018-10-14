import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Film } from 'src/app/shared/models/film.model';

@Component({
  selector: 'zh-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  public films: Film[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.films = this.loadFilmsFromLocalStorage();
  }

  /**
   *
   */
  private loadFilmsFromLocalStorage(): Film[] {
    const films: Film[] = [];

    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        films.push(JSON.parse(localStorage.getItem(key)));
      }
    }

    return films;
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

}
