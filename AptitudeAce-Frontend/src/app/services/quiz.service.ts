import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../component/interfaces/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8888/quiz'; //Spring boot url

  public getQuizzes() {
    return this.http.get(`${this.baseUrl}/getAll`);
  }

  public getQuizzesOfCategory(cid:any) {
    return this.http.get<Quiz[]>(`${this.baseUrl}/getBySubCategory/${cid}`);
  }

  public addQuiz(quiz:any){
    return this.http.post(`${this.baseUrl}/`,quiz)
  }

  public deleteQuiz(qid: any) {
    return this.http.delete(`${this.baseUrl}/${qid}`);
  }

  public getQuiz(qid: number) {
    return this.http.get(`${this.baseUrl}/getById/${qid}`);
  }

  public updateQuiz(quiz: any) {
    return this.http.put(`${this.baseUrl}/quiz/`, quiz);
  }

}
