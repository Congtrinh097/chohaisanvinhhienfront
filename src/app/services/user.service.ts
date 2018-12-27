import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from  '../models/User';
import { environment } from '../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private url = environment.baseUrl + "/api/v1/users";

  constructor(private http: HttpClient) { }
  /** GET: get user from database */
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.url, httpOptions);
  }

  /** POST: add the user to the server */
  addUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.url, user, httpOptions);
  }

  /** DELETE: delete the user from the server */
  deleteUser (user: User | string): Observable<User> {
    const id = typeof user === 'string' ? user : user._id;
    const url = `${this.url}/${id}`;

    return this.http.delete<User>(url, httpOptions);
  }
  
}
