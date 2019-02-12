import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from  '../models/Product';
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
export class ProductService {

  private url = environment.baseUrl + "/api/v1/products";
  constructor(private http: HttpClient) { 
    let token = localStorage.getItem('access_token');
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
  }
  /** GET: get product from database */
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, httpOptions);
  }

  /** POST: add the product to the server */
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product, httpOptions);
  }

  /** PUT: update the product to the server */
  updateProduct(product: Product): Observable<Product> {
    const data = {id: product._id, name: product.name, description: product.description};
    return this.http.put<Product>(this.url, data, httpOptions);
  }

  /** DELETE: delete the product from the server */
  deleteProduct(product: Product | string): Observable<Product> {
    const id = typeof product === 'string' ? product : product._id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Product>(url, httpOptions);
  }
  /** GET: Get the product from the server */
  getProduct(id: string): Observable<Product> {
    const url = `${this.url}/${id}`;
    return this.http.get<Product>(url, httpOptions);
  }
}
