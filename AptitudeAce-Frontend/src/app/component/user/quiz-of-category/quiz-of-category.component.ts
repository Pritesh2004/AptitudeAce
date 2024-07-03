import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-of-category',
  templateUrl: './quiz-of-category.component.html',
  styleUrls: ['./quiz-of-category.component.css']
})
export class QuizOfCategoryComponent implements OnInit {

  quizzes: any = [];
  cid: number = 0;
  noQuizzes: boolean = false;

  constructor(private quizService: QuizService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cid = +params['cid']; // The '+' converts the string to a number
      console.log(this.cid);

      this.loadQuizzes();
    });
  }

  loadQuizzes(): void {
    this.quizService.getQuizzesOfCategory(this.cid).subscribe(
      data => {
        this.quizzes = data;
        console.log(this.quizzes);
        this.noQuizzes = this.quizzes.length === 0;
        console.log(this.noQuizzes);
      },
      error => {
        console.log(error);
      }
    );
  }
}
