import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit{

  quiz= {
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    subCategoryId:0
  };

  id = 0;
  constructor(private route : ActivatedRoute,private quizService: QuizService, private categoryService: CategoryService, private snack: MatSnackBar){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  }

  createQuiz(){
    
    this.quiz.subCategoryId = this.id;
    console.log(this.quiz);
    this.quizService.addQuiz(this.quiz).subscribe(
      data=>{
        console.log(data);
        this.snack.open('Quiz create successfully','ok',{
          verticalPosition:'top'
        });
      },
      error=>{
        this.snack.open('Error while creating quiz','ok',{
          verticalPosition:'top'
        });
        console.log(error);
      }
    )
  }

 
}
