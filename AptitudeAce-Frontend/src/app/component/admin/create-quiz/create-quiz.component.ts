import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    category : {
      cid:'',
    },
  };

  categories:any=[];

  constructor(private quizService: QuizService, private categoryService: CategoryService, private snack: MatSnackBar){}

  ngOnInit(): void {
    
    this.categoryService.getCategories().subscribe(
      data=>{
        this.categories=data;
      },
      error=>{
        console.log(error);
      } 
    )
  }

  createQuiz(){
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
