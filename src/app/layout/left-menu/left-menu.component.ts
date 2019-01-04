import { Component, OnInit } from '@angular/core';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor( private sweetAlertService: SweetAlertService) { }

  ngOnInit() {
  }

  logOut() {
    this.sweetAlertService.confirmPopup("Do you want to logout this account?", ``,"warning",(result: boolean)=>{
      if(result) {
        console.log("Loged Out");
      }
    });
  }

}
