import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoriteComponent } from './components/favorite/favorite.component';
import { FilmComponent } from './components/film/film.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { AppGuard } from './app-guard.service';

const routes: Routes = [
  { path: 'films/:id', component: FilmComponent, canActivate: [AppGuard] },
  { path: 'films', component: FilmListComponent, canActivate: [AppGuard] },
  { path: 'favorite', component: FavoriteComponent, canActivate: [AppGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'films' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
