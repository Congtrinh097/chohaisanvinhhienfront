import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }
  private header_title = 'Dashboard';

  getHeaderTitle(){
    return this.header_title;
  }

  updateHeaderTitle(title){
    this.header_title = title;
  }


}
