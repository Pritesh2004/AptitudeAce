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


    },
    (error)=>{
      console.log(error);
    }
  );
  }

  

}
