import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
 
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8888'; //Spring boot url

  getQuestionsOfQuiz(qid: any) {
    return this.http.get(`${this.baseUrl}/question/quiz/${qid}`);
  }

  addQuestion(question:any) {
    return this.http.post(`${this.baseUrl}/question/`, question);
  }

  deleteQuestion(quesId: any) {
    return this.http.delete(`${this.baseUrl}/question/${quesId}`);
  }

  evaluateQuiz(questions:any) {
    return this.http.post(`${this.baseUrl}/question/eval-quiz`, questions);
  }
}
