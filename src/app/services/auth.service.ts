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

  static LoginSuccess(token){
    localStorage.setItem("isLogedIn", "true");
    localStorage.setItem("access_token", token);
  }

  static Logout(){
    localStorage.removeItem("isLogedIn");
    localStorage.removeItem("access_token");
  }
}
