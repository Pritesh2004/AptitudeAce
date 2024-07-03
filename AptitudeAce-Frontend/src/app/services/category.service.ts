import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8888'; //Spring boot url

  constructor(private http: HttpClient) { }

  public getCategories() {
    return this.http.get(`${this.baseUrl}/category/`);
  }

  public addCategory(category:any){
    return this.http.post(`${this.baseUrl}/category/`,category)
  }
}
