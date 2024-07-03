import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-instructions',
  templateUrl: './quiz-instructions.component.html',
  styleUrls: ['./quiz-instructions.component.css']
})
export class QuizInstructionsComponent implements OnInit {

  qId = 0;

  quiz: any = {
    title: '',
    description: '',
    numberOfQuestions: '',
    maxMarks: ''
  }

  constructor(private quizService: QuizService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    this.qId = this.route.snapshot.params['qId'];
    console.log(this.qId)
    this.quizService.getQuiz(this.qId).subscribe(
      data => {
        this.quiz = data;

      },
      error => {
        console.log(error)
      }
    )
  }

  startQuiz() {

    Swal.fire({
      icon: 'info',
      title: "Are you sure?",
      confirmButtonText: 'Yes',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {

      this.router.navigate(['/start-quiz/'+this.qId]);
        
      }
    })
  }

}
