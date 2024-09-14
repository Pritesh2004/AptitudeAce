import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import { SubCategory } from '../../interfaces/SubCategory';

@Component({
  selector: 'app-sub-categories-of-category',
  templateUrl: './sub-categories-of-category.component.html',
  styleUrls: ['./sub-categories-of-category.component.css']
})
export class SubCategoriesOfCategoryComponent implements OnInit {

  subCategories: SubCategory[] = [];
  id = 0;
  title = '';

  constructor(
    private categoryService: CategoryService,
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.title = params['title'];
      this.loadSubCategories();
    });
  }

  loadSubCategories(): void {
    this.categoryService.getSubCategoriesByCategoryId(this.id).subscribe(
      (data: SubCategory[]) => {
        this.subCategories = data;
        this.loadQuizzes();
        console.log(this.subCategories);
      },
      (error) => {
        console.error('Error loading subcategories:', error);
      }
    );
  }

  loadQuizzes(): void {
    this.subCategories.forEach((subCategory: SubCategory) => {
      this.quizService.getQuizzesOfCategory(subCategory.cid).subscribe(
        (quizzes) => {
          subCategory.quizzes = quizzes;
        },
        (error) => {
          console.error(`Error loading quizzes for subcategory ${subCategory.cid}:`, error);
        }
      );
    });
  }

}
