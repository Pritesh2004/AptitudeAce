import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = null;
  isRoleAdmin = false;
  categories:any=[];

  

  constructor(private loginService: LoginService, private router: Router, private categoryService: CategoryService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof PopStateEvent) {
        window.scrollTo(0, 0);
      }
    });
  }

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
      (data:any) => {
        this.categories = data;
      },
      (error:any) => {
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
