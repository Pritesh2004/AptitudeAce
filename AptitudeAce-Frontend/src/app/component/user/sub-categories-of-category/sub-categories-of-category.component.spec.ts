import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriesOfCategoryComponent } from './sub-categories-of-category.component';

describe('SubCategoriesOfCategoryComponent', () => {
  let component: SubCategoriesOfCategoryComponent;
  let fixture: ComponentFixture<SubCategoriesOfCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoriesOfCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategoriesOfCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
