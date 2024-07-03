import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent {

  category={
    title:'',
    description:''
  }

  constructor(private categoryService: CategoryService, private snack: MatSnackBar){}

  addCategory(){
    this.categoryService.addCategory(this.category).subscribe(
      data => {
      console.log(data);
      this.snack.open("Category added successfully",'ok',{
        verticalPosition:'top'
      },
      );
    },
    error=>{
      console.log(error);
    }
  );
  }
}
