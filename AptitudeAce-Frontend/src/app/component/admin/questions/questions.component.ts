import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  qId = 0;
  title = '';
  questions: any = [];

  constructor(private questionService: QuestionService, private snack: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qId'];
    this.title = this.route.snapshot.params['title'];

    this.questionService.getQuestionsOfQuiz(this.qId).subscribe(
      data => {
        this.questions = data;
        console.log(this.questions);

      },
      error => {
        console.log(error);
      }
    )
  }

  deleteQuestion(quesId: number): void {

    Swal.fire({
      icon: 'info',
      title: "Are you sure?",
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.questionService.deleteQuestion(quesId).subscribe(() => {

          this.questions = this.questions.filter((question: any) => question.quesId != quesId)

          console.log('Question deleted successfully');
          this.snack.open('Question deleted successfully', 'ok', {
            verticalPosition: 'top'
          });
        }, error => {
          console.error('Error deleting question:', error);
          this.snack.open('Error while deleting question', 'ok', {
            verticalPosition: 'top'
          });
        });
      }
    })
  }

}
