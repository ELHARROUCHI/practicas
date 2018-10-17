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
        const obj = JSON.parse(localStorage.getItem(key));
        if ('Title' in  obj) {
          films.push(obj);
        }
      }
    }

    return films;
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

}
