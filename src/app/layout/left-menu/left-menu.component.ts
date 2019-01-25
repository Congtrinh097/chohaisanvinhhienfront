import { Component, OnInit } from '@angular/core';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor( 
    private sweetAlertService: SweetAlertService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
    ) { }

  ngOnInit() {
  }

  logOut() {
    this.sweetAlertService.confirmPopup("Do you want to logout this account?", ``,"warning",(result: boolean)=>{
      if(result) {
        AuthService.Logout();
        this.router.navigate(['login']);
        console.log("Loged Out");
      }
    }); 
  }

  fullScreenMode(){
    var isInFullScreen = ((this.document as any).fullscreenElement &&(this.document as any).fullscreenElement !== null) ||
    ((this.document as any).webkitFullscreenElement && (this.document as any).webkitFullscreenElement !== null) ||
    ((this.document as any).mozFullScreenElement && (this.document as any).mozFullScreenElement !== null) ||
    ((this.document as any).msFullscreenElement && (this.document as any).msFullscreenElement !== null);
    console.log("Full screen mode");
    var elem:any = document.getElementById("wrapper");
    if (!isInFullScreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen();
      } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
      }
  } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if ((this.document as any).webkitExitFullscreen) {
        (this.document as any).webkitExitFullscreen();
      } else if ((this.document as any).mozCancelFullScreen) {
        (this.document as any).mozCancelFullScreen();
      } else if ((this.document as any).msExitFullscreen) {
        (this.document as any).msExitFullscreen();
      }
  }
  }

}
