import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppGuard } from './app-guard.service';
import { AppReducers } from './shared/store/app.reducer';
import { AppRoutingModule } from './app-routing.module';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { FilmComponent } from './components/film/film.component';
import { FilmEffect } from './shared/store/film/film.effect';
import { FilmListComponent } from './components/film-list/film-list.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmListComponent,
    NavbarComponent,
    FavoriteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot([FilmEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      logOnly: environment.production
    })
  ],
  providers: [
    AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
