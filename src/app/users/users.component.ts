import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service'
import { User } from '../models/User';
import { BlockUiService } from '../services/block-ui.service';
import { SweetAlertService } from '../services/sweet-alert.service';
import { ToastService } from '../services/toast.service';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(
    private userService: UserService,  
    private router: Router, 
    private blockUiService: BlockUiService,
    private sweetAlertService: SweetAlertService,
    private toastService: ToastService,
    private gnservice: GeneralService
    ) { }
  
  getUsers(): void {
    this.blockUiService.blockUi();
    this.userService.getUsers().subscribe(users=>{ 
        this.users = users;
        this.blockUiService.unBlockUi(); 
      },err =>{
        console.log('Error Getting Users');  
        this.blockUiService.unBlockUi(); 
      });
    
  }

  ngOnInit() {
    this.gnservice.updateHeaderTitle("Users");
    this.getUsers();
  }

  delete(user: User): void {

   this.sweetAlertService.confirmPopup("Warning", `Do you want to delete user ${user.username}`,"warning",(result: boolean)=>{
    if(result) {
      this.userService.deleteUser(user).subscribe((user)=>{
        this.toastService.showInfo(`Successful delete user ${user.username}`);
        this.getUsers();
      });
    }
   });
  }

  detail(id: String): void {
    this.router.navigate(["/home/users/detail/"+id]);
  }
}
