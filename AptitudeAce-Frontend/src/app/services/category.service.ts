import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { Category } from '../component/interfaces/Category';
import { SubCategory } from '../component/interfaces/SubCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8888'; //Spring boot url

  constructor(private http: HttpClient, private loginService: LoginService) { }

  
  //Category
  public getCategories() {
    return this.http.get<Category[]>(`${this.baseUrl}/categories/getAll`);
  }

  getCategoryById(cId: any) {
    return this.http.get(`${this.baseUrl}/categories/getById/${cId}`);
  }

  public addCategory(category:any){
    const url = `${this.baseUrl}/categories/add`;
    // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.loginService.getToken());
    return this.http.post<any>(url, category);

  }

  public deleteCategory(id: any) {
    return this.http.delete(`${this.baseUrl}/categories/delete/${id}`);
  }

  getSubCategoriesByCategoryId(cId: any) {
    return this.http.get<SubCategory[]>(`${this.baseUrl}/categories/getSubCategories/${cId}`);
  }



  //SubCategory
  public getSubCategories() {
    return this.http.get(`${this.baseUrl}/subCategories/getAll`);
  }

  getSubCategoryById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/subCategories/getById/${id}`);
  }

  public addSubCategory(subCategory:any){
    const url = `${this.baseUrl}/subCategories/add`;
    // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.loginService.getToken());
    return this.http.post<any>(url, subCategory);

  }

  public deleteSubCategory(id: any) {
    return this.http.delete(`${this.baseUrl}/subCategories/delete/${id}`);
  }
}
