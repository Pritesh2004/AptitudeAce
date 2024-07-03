import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  // questions = [
  //   {
  //     question: 'What is the capital of France?',
  //     options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
  //     answer: 'Paris'
  //   },
  //   {
  //     question: 'What is the largest planet in our solar system?',
  //     options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
  //     answer: 'Jupiter'
  //   },
  //   // Add more questions as needed
  // ];

  quizStarted = false;
  quizEnded = false;
  questions: any = [];
  qId: any;
  timeLeft: number = 600; // Example total time in seconds
  totalTime: number = 600; // Total quiz time in seconds
  
  constructor(private locationSt: LocationStrategy, private questionService: QuestionService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {

    this.preventBackButton();
    this.qId = this.route.snapshot.params['qId'];
    this.questionService.getQuestionsOfQuiz(this.qId).subscribe(
      data => {
        this.questions = data;
        console.log(this.questions);
      },
      error => {
        console.log(error);
      }
    );

    this.quizStarted = true;
    
    this.selectedOptions = new Array(this.questions.length).fill(null);
    this.startTimer();
  }
  


 
  currentQuestionIndex = 0;
  selectedOptions: string[] = [];
  timer: any;
  
 
  
  selectOption(option: string): void {
    this.selectedOptions[this.currentQuestionIndex] = option;
  }
  
  nextQuestion(): void {
   
  
    if (this.currentQuestionIndex === this.questions.length - 1) {
      const answeredQuestions = this.selectedOptions.filter(option => option !== null).length;
      Swal.fire({
        icon: 'info',
        title: 'Quiz Ended',
        text: `You have answered ${answeredQuestions} out of ${this.questions.length} questions.`,
        confirmButtonText: 'Yes',
        showCancelButton: true
      }).then(result => {
        if (result.isConfirmed) {
          this.endQuiz();
        }
      });
    } else {
      this.currentQuestionIndex++;
    }
  }
  
  prevQuestion(): void {
    this.currentQuestionIndex--;
  }
  
  startTimer() {
    setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        
        this.endQuiz();
      }
    }, 1000);
  }

  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }
  

  formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const secs: number = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  getTimePercentage(): number {
    return (this.timeLeft / this.totalTime) * 100;
  }
  
  canDeactivate(): Observable<boolean> | boolean {
    if (!this.quizEnded) {
      return confirm('Are you sure you want to leave the quiz? Your progress will be lost.');
    }
    return true;
  }
  
  endQuiz(): void {
    this.quizEnded = true;
    // Any cleanup, calculations, or navigation logic goes here
  }
}  