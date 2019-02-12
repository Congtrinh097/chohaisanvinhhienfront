import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cate } from  '../models/Cate';
import { environment } from '../../environments/environment'

var httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = environment.baseUrl + "/api/v1/cates";
  constructor(private http: HttpClient) { 
    let token = localStorage.getItem('access_token');
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
  }
  /** GET: get cate from database */
  getCates (): Observable<Cate[]> {
    return this.http.get<Cate[]>(this.url, httpOptions);
  }

  /** POST: add the cate to the server */
  addCate(cate: Cate): Observable<Cate> {
    return this.http.post<Cate>(this.url, cate, httpOptions);
  }

  /** PUT: update the cate to the server */
  updateCate(cate: Cate): Observable<Cate> {
    const data = {id: cate._id, name: cate.name, description: cate.description};
    return this.http.put<Cate>(this.url, data, httpOptions);
  }

  /** DELETE: delete the cate from the server */
  deleteCate (cate: Cate | string): Observable<Cate> {
    const id = typeof cate === 'string' ? cate : cate._id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Cate>(url, httpOptions);
  }
  /** GET: Get the cate from the server */
  getCate(id: string): Observable<Cate> {
    const url = `${this.url}/${id}`;
    return this.http.get<Cate>(url, httpOptions);
  }
}
