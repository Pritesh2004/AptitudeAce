import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  admin: any = {
    username: '',
    fullName: '',
    email: '',
  }

  userRole:any;

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.userRole = this.loginService.getUserRole();
    this.admin = this.loginService.getUser();
    console.log(this.admin.fullName)
  }

}
