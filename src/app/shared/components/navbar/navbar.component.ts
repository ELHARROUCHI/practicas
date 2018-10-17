import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.reducer';
import { LoadFilmsByTitle } from '../../store/film/film.action';

@Component({
  selector: 'zh-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() { }

  /**
   * find movies by title
   *
   * @param title movie title
   */
  findByTitle(title: string) {
    const action = new LoadFilmsByTitle(title);
    this.store.dispatch(action);
    this.router.navigate(['/films']);
  }

}
