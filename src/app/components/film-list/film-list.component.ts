import { Component, OnInit } from '@angular/core';

import { FilmService } from '../services/film.service';

@Component({
  selector: 'zh-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  constructor(private filmSrv: FilmService) { }

  ngOnInit() {
  }



}
