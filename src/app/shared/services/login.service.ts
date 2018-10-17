import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * make login
   *
   * @param email user email
   * @param password user password
   */
  login$(email: string, password: string): Observable<any> {
    return this.http
      .post('/#/login', { email, password });
  }

}
