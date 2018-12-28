import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastr: ToastrManager) {}
 
        showSuccess( text: string, title?: string) {
            this.toastr.successToastr(text, title || 'Success!');
        }
 
        showError( text: string, title?: string) {
            this.toastr.errorToastr(text, title || 'Oops!');
        }
 
        showWarning(text: string, title?: string) {
            this.toastr.warningToastr(text, title || 'Alert!');
        }
 
        showInfo(text: string, title?: string) {
            this.toastr.infoToastr(text, title || 'Info');
        }
 
        showCustom(html: string) {
            this.toastr.customToastr(html,
            null,
            { enableHTML: true }
            );
        }
 
        showToast(position: any = 'top-left', text: string, title?: string, type?: 'success'|'info'|'warning'|'error') {
          switch(type){
            case 'success':
               this.toastr.successToastr(text, title || 'Success', {
                position: position
               });
               break;
            case 'info':
              this.toastr.infoToastr(text, title || 'Info', {
              position: position
              });
              break;
            case 'warning':
              this.toastr.warningToastr(text, title || 'Alert', {
              position: position
              });
              break;
            case 'error':
              this.toastr.errorToastr(text, title || 'Oops!', {
              position: position
              });
              break;
          }
        }
           
}
