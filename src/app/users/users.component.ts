import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service'
import { User } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }
  
  getUsers(): void {
    this.userService.getUsers().subscribe(users=>this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }

  delete(user: User): void {
    this.userService.deleteUser(user).subscribe((user)=>this.getUsers());
  }

}
