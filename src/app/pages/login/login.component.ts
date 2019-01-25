import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/app/services/authorize.service';
import { HttpResponse } from 'src/app/models/HttpResponse';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password: string;
  error = '';
  block = false;
  constructor(
    private authService: AuthorizeService,
    private router: Router,
    ) { }
  ngOnInit() {
  }
  onSubmit(f) {
    this.block = true;
    console.log(f.value);
    this.authService.login(f.value).subscribe((result: HttpResponse) => {
      console.log(result);
      if (result.code === 200) {
        AuthService.LoginSuccess();
        this.router.navigate(['/home/dashboard']);
      } else {
        this.error = result.message;
        this.block = false;
      }
    });
  }
}
