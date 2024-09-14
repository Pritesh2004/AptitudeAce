import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-sub-categories',
  templateUrl: './add-sub-categories.component.html',
  styleUrls: ['./add-sub-categories.component.css']
})
export class AddSubCategoriesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CategoryService) { }

  subCategory = {
    title: '',
    description: '',
    category :  {
      id:0,
    },
  };

  cId = 0;
  ngOnInit(): void {
    this.cId = this.route.snapshot.params['cId'];
  }

  // private loadCategories(): void {
  //   this.service.getCategories().subscribe(data => {
  //     this.categories = data;
  //   }, error => {
  //     console.error('Error loading categories:', error);
  //   });
  // }
  // Method to handle form submission
  addSubCategory(): void {
    this.subCategory.category.id = this.cId;
    this.service.addSubCategory(this.subCategory).subscribe(response => {
      console.log('SubCategory added successfully:', response);
      // Handle success (e.g., redirect, show a message, etc.)
    }, error => {
      console.error('Error adding subcategory:', error);
      // Handle error (e.g., show an error message)
    });
  }
}

