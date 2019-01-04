import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  alert(title?: string, text?: string, type: string = "success") {
    if(title) {
      swal(title, text, type);
    }else {
      swal(text, {
        icon: "success",
      });
    }
  }

  confirmPopup(title: string, text?: string, type: string = "warning", callback?: any) {
    swal({
      title: title || "Are you sure?",
      text: text || "",
      icon: type,
      buttons:{
        "bt1": {
          text: "OK",
          value: true,
        },
        "bt2": {
          text: "Cancel",
          value: false,
          
        }
    },
      dangerMode: true,
    })
    .then((res) => {
      callback(res);
    });
  }
}
