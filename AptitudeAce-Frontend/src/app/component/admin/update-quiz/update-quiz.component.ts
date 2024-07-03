import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit{

  qId = 0;

  quiz:any= {
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active: false,
    category : {
      cid:'',
    },
  };

  constructor(private route : ActivatedRoute, private quizService: QuizService, private snack: MatSnackBar){}

  ngOnInit(): void {

    this.qId = this.route.snapshot.params['qId'];

    this.quizService.getQuiz(this.qId).subscribe(
      data => {
        this.quiz = data;
        console.log(this.quiz);
      },
      error => {
        console.log('Error fetching quiz:', error);
      }
    );
  }


  updateQuiz() {
    this.quizService.updateQuiz(this.quiz).subscribe(
      updatedQuiz => {
        console.log('Quiz updated successfully:', updatedQuiz);
        this.snack.open('Quiz updated successfully','ok',{
          verticalPosition:'top'
        });
        // Handle success response as needed
      },
      error => {
        console.log('Error updating quiz:', error);
        this.snack.open('Error updating Quiz','ok',{
          verticalPosition:'top'
        });
        // Handle error response as needed
      }
    );
  }

}
