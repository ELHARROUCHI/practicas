import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../../store/app-state';
import { LoadFilmsByTitle } from '../../store/film.action';

@Component({
  selector: 'zh-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  /**
   * find movies by title
   *
   * @param title movie title
   */
  findByTitle(title: string) {
    const action = new LoadFilmsByTitle(title);
    this.store.dispatch(action);
  }

}
