import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FilmComponent } from './components/film/film.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
