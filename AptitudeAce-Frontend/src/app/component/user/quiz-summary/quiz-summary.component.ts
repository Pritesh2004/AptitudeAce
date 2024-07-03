import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-summary',
  templateUrl: './quiz-summary.component.html',
  styleUrls: ['./quiz-summary.component.css']
})
export class QuizSummaryComponent {
  @Input() questions: any[] = [];
  @Input() selectedOptions: string[] = [];

  correctAnswers: boolean[] = [];
  score=0;

  constructor() { }

  ngOnInit(): void {
   
    this.calculateResults();
  }

  calculateResults(): void {
    this.questions.forEach((question, index) => {
      if (this.selectedOptions[index] === this.questions[index].answer) {
        this.score++;
      }
      const correctAnswer = question.answer;
      const selectedOption = this.selectedOptions[index];
      this.correctAnswers.push(correctAnswer === selectedOption);
    });
  }

  printResult(){
    window.print();
  }

}
