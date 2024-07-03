import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  
  isLoggedIn = false;
  user = null;
  isRoleAdmin = false;
  categories:any=[];


  constructor(private loginService: LoginService, private router: Router, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggenIn();
    this.user = this.loginService.getUser();
  
    if (this.loginService.getUserRole() === "ADMIN") {
      this.isRoleAdmin = true;
    }
  
    this.loginService.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedIn = this.loginService.isLoggenIn();
      this.user = this.loginService.getUser();
      if (this.loginService.getUserRole() === "ADMIN") {
        this.isRoleAdmin = true;
      } else {
        this.isRoleAdmin = false;
      }
  
      // Fetch categories if user is logged in
      if (this.isLoggedIn) {
        this.loadCategories();
      }
    });
  
    // Fetch categories if user is logged in
    if(this.user != null && this.isLoggedIn) {
      this.loadCategories();
    }
  }
  
  loadCategories() {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  

  openHome() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.loginService.logout();
    this.loginService.loginStatusSubject.next(false);
    this.categories=null;
this.router.navigate(['/login'])  }
}
