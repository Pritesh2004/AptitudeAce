import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 

  user: any = {
    username: '',
    fullName: '',
    email: '',
  }

  userRole:any;

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.userRole = this.loginService.getUserRole();
    this.user = this.loginService.getUser();
    console.log(this.user.fullName)
  }
}
