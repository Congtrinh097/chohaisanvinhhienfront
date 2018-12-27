import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlockUiService {
  public isBlocking: boolean = false;
  constructor() { }

  blockUi(){
    this.isBlocking = true;
  }

  unBlockUi(){
    this.isBlocking = false;
  }
}
