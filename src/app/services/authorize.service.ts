import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/User';
import { environment } from '../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
  private url = environment.baseUrl + '/api/v1';

  constructor(private http: HttpClient) { }

  /** Post: login by user name and passowrd */
  login(user: User): Observable<Object> {
    const url = `${this.url}/login`;
    return this.http.post<User>(url, user, httpOptions);
  }
}
