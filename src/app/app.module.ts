import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppGuard } from './app-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { FakeLoginService } from './shared/services/fake-login.service';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { FilmComponent } from './components/film/film.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './shared/services/login.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { environment } from '../environments/environment';

import * as fromStore from './shared/store';
import { FilmService } from './shared/services/film.service';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    FilmComponent,
    FilmListComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(fromStore.AppReducers),
    EffectsModule.forRoot([...fromStore.effects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      logOnly: environment.production
    })
  ],
  providers: [
    AppGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeLoginService,
      multi: true
    },
    LoginService,
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
