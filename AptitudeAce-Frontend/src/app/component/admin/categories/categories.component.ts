import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categories:any=[];

  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {

    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
      this.categories.forEach((category: { id: any; subCategories: any; }) => {
        this.categoryService.getSubCategoriesByCategoryId(category.id).subscribe((subCategories: any) => {
          category.subCategories = subCategories;
        });
      });
    },
    (error)=>{
      console.log(error);
    }
    );
  }

  deleteCategory(id: any) {
    this.categoryService.deleteCategory(id).subscribe(data => {
      console.log(data);
      alert("Category deleted successfully");
      location.reload();
    }, error => {
      console.log(error);
    });
  }

  deleteSubCategory(id: any) {
    this.categoryService.deleteSubCategory(id).subscribe(data => {
      console.log(data);
      alert("Sub Category deleted successfully");
      location.reload();
    }, error => {
      console.log(error);
    });
  }

}
