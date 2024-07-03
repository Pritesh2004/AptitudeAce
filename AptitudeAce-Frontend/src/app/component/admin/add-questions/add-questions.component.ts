import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit{

    // public Editor = ClassicEditor;


  qId = 0;
  title='';

  question = {
    quiz: { qId: 0 },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  };

  constructor(
    private questionService: QuestionService,
    private snack: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qId'];
    this.title = this.route.snapshot.params['title'];

    this.question.quiz.qId = this.qId;
  }

  addQuestion(form: NgForm): void {
    if (form.invalid) {
      this.snack.open('Please fill all fields', 'OK', { verticalPosition: 'top' });
      return;
    }

    this.questionService.addQuestion(this.question).subscribe({
      next: (response) => {
        console.log('Question added successfully', response);
        this.snack.open('Question added successfully', 'OK', { verticalPosition: 'top' });
        form.resetForm();
      },
      error: (error) => {
        console.error('Error adding question', error);
        this.snack.open('Error while adding question', 'OK', { verticalPosition: 'top' });
      }
    });
  }
}