import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmComponent } from './components/film/film.component';
import { FilmListComponent } from './components/film-list/film-list.component';

const routes: Routes = [
  { path: 'films/:id', component: FilmComponent },
  { path: 'films', component: FilmListComponent },
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
