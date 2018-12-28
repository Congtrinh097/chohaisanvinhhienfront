import { Component, OnInit, Input} from '@angular/core';
import { User } from 'src/app/models/User';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  @Input() user: User;
  constructor(  
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private sweetAlertService: SweetAlertService,
    private toastService: ToastService
    ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user=>this.user = user);
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
