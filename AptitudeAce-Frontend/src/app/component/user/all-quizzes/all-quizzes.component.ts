import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-all-quizzes',
  templateUrl: './all-quizzes.component.html',
  styleUrls: ['./all-quizzes.component.css']
})
export class AllQuizzesComponent implements OnInit{
  
  quizzes:any =[];

  constructor(private quizService : QuizService, private snack: MatSnackBar){}

  ngOnInit(): void {

    this.quizService.getQuizzes().subscribe(
      data=>{
        this.quizzes = data;
    },
    error =>{
      console.log(error);
    }
  )
  }
}
