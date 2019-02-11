import { Component, OnInit, Input} from '@angular/core';
import { User } from 'src/app/models/User';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { BlockUiService } from 'src/app/services/block-ui.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  user: User;
  constructor(  
    private route: ActivatedRoute,
    private blockUiService: BlockUiService,
    private userService: UserService,
    private location: Location,
    private sweetAlertService: SweetAlertService,
    private toastService: ToastService
    ) {
      this.user = {
        username:'',
        password: ''
      }
     }

  ngOnInit() { 
    this.getUser();
  }

  getUser() {
    const id = this.route.snapshot.paramMap.get('id');
    this.blockUiService.blockUi();
    this.userService.getUser(id).subscribe(user=>{
      this.user = user;
      this.blockUiService.unBlockUi();
    },err =>{
      console.log('Error Getting Users');  
      this.blockUiService.unBlockUi(); 
    });
  }  


  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.sweetAlertService.confirmPopup("Confirm", `Do you want to update user ?`,"warning",(result: boolean)=>{
      if(result) {
        this.userService.updateUser(this.user)
        .subscribe(() =>{
          this.toastService.showInfo(`User info is updated !`);
          this.goBack()
        });
      }
    });
  }
}
