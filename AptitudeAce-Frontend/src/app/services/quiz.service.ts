import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8888'; //Spring boot url

  public getQuizzes() {
    return this.http.get(`${this.baseUrl}/quiz/`);
  }

  public getQuizzesOfCategory(cid:any) {
    return this.http.get(`${this.baseUrl}/quiz/category/${cid}`);
  }

  public addQuiz(quiz:any){
    return this.http.post(`${this.baseUrl}/quiz/`,quiz)
  }

  public deleteQuiz(qid: any) {
    return this.http.delete(`${this.baseUrl}/quiz/${qid}`);
  }

  public getQuiz(qid: number) {
    return this.http.get(`${this.baseUrl}/quiz/${qid}`);
  }

  public updateQuiz(quiz: any) {
    return this.http.put(`${this.baseUrl}/quiz/`, quiz);
  }

}
