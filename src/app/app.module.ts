import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmComponent } from './components/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FilmComponent]
})
export class AppModule { }
