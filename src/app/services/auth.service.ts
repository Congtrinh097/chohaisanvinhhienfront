import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  static isAuthenticated(): boolean {
    let isLoginIn = localStorage.getItem("isLogedIn");
    if (isLoginIn != null && isLoginIn != undefined && isLoginIn != "") 
      return true;
    return false;
  }

  static LoginSuccess(){
    localStorage.setItem("isLogedIn", "true");
  }

  static Logout(){
    localStorage.removeItem("isLogedIn");
  }
}
