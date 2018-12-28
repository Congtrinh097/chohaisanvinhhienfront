import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private toastService: ToastService) { }

  ngOnInit() {
  }

  addNewUser(user: User){
    this.userService.addUser(user).subscribe(()=>{this.router.navigate(['/users']); this.toastService.showSuccess("Added successfuly!")});
  }

}
