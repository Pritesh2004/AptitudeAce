import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  private baseUrl = 'http://localhost:8888'; //Spring boot url

  constructor(private http: HttpClient) { }

  public generateToken(userRequest:any){
    return this.http.post(`${this.baseUrl}/generate-token`, userRequest);
  }

  public getLoggedInUser() {
    return this.http.get(`${this.baseUrl}/current-user`);
  }

  public userLogin(token:any){
    localStorage.setItem("token",token);
    return true;
  }

  public isLoggenIn(){
    let token = localStorage.getItem("token");

    if(token=='' || token==undefined || token==null){
      return false;
    }
    return true;
  }

  public logout(){

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;

  }

  public getToken(){
    return localStorage.getItem("token");
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let user = localStorage.getItem("user");
    if(user!=null){
      return JSON.parse(user);
    }
    else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser();
    if(user!=null){
      return user.authorities[0].authority;
    }
  }

}
