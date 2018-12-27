import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service'
import { User } from '../models/User';
import { BlockUiService } from '../services/block-ui.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService,  private router: Router, private blockUiService: BlockUiService,) { }
  
  getUsers(): void {
    this.blockUiService.blockUi();
    this.userService.getUsers().subscribe(users=>{ 
        this.users = users;
        this.blockUiService.unBlockUi(); 
      });
  }

  ngOnInit() {
    this.getUsers();
  }

  delete(user: User): void {
    this.userService.deleteUser(user).subscribe((user)=>this.getUsers());
  }

  detail(id: String): void {
    this.router.navigate(["/users/detail/"+id]);
  }
}
