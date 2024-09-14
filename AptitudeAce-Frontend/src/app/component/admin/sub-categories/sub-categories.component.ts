import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {

  subCategory: any = {};  // Initialize as an empty object
  id = 0;

  constructor(
    private categoryService: CategoryService, 
    private route: ActivatedRoute, 
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.categoryService.getSubCategoryById(this.id).subscribe(data => {
      this.subCategory = data;
      if (this.subCategory && this.subCategory.cid) {
        this.quizService.getQuizzesOfCategory(this.subCategory.cid).subscribe((quizzes: any) => {
          this.subCategory.quizzes = quizzes;
        });
      }
    },
    error => {
      console.log(error);
    });
  }

  deleteQuiz(qId: any) {
    this.quizService.deleteQuiz(qId).subscribe(data => {
      console.log(data);
      alert("Quiz deleted successfully");
      location.reload();
    }, error => {
      console.log(error);
    });
  }
}
