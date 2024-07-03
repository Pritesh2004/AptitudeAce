import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-starting-page',
  templateUrl: './starting-page.component.html',
  styleUrls: ['./starting-page.component.css']
})
export class StartingPageComponent implements OnInit {
 
  isLoggedIn = false;
  user = {
    username: '',
    fullName: '',
    email: '',
    password: '',
    };
  isRoleAdmin = false;
  fullName ='';

  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggenIn();
    this.user = this.loginService.getUser();
    if(this.user){
      this.fullName = this.user.fullName;
    }
  
    if (this.loginService.getUserRole() === "ADMIN") {
      this.isRoleAdmin = true;
    }
  }
  
}
