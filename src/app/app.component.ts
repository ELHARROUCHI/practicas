import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from './shared/store';
import { Router } from '@angular/router';

@Component({
  selector: 'zh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLogged = false;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store
      .subscribe(
        (state: AppState) => this.isLogged = !!state.userLoginState.user,
        (error: any) => this.isLogged = false
      );
  }

}
