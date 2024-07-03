import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit{

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

  deleteQuiz(qid:any){

    Swal.fire({
      icon:'info',
      title:"Are you sure?",
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        
        this.quizService.deleteQuiz(qid).subscribe(
          ()=>{
    
            //to reload the quizzes so to show only those that are present
            this.quizzes = this.quizzes.filter((quiz:any)=>quiz.qId != qid)
            
            console.log("Quiz deleted successfully");
            this.snack.open('Quiz with id '+qid+' deleted successfully','ok',{
              verticalPosition:'top'
            });
    
          },
          error=>{
            console.log(error);
            this.snack.open('Error while deleting quiz','ok',{
              verticalPosition:'top'
            });
          }
    
        )
      }
    })
    
  }


}
