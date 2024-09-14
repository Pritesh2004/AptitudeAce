import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import { Category } from '../../interfaces/Category';
import { SubCategory } from '../../interfaces/SubCategory';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.css']
})
export class UserCategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService, 
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => {
        this.categories = data;
        this.loadSubCategories();
        console.log(this.categories);
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  loadSubCategories(): void {
    this.categories.forEach((category: Category) => {
      this.categoryService.getSubCategoriesByCategoryId(category.id).subscribe(
        (subCategories: SubCategory[]) => {
          category.subCategories = subCategories;
        },
        (error) => {
          console.error(`Error loading subcategories for category ${category.id}:`, error);
        }
      );
    });
  }

  // Uncomment and adjust if needed
  // quizzes: Quiz[] = [];
  // noQuizzes: boolean = false;

  // loadQuizzes(cid: number): void {
  //   this.quizService.getQuizzesOfCategory(cid).subscribe(
  //     (data: Quiz[]) => {
  //       this.quizzes = data;
  //       console.log(this.quizzes);
  //       this.noQuizzes = this.quizzes.length === 0;
  //       console.log(this.noQuizzes);
  //     },
  //     (error) => {
  //       console.error('Error loading quizzes:', error);
  //     }
  //   );
  // }

}
