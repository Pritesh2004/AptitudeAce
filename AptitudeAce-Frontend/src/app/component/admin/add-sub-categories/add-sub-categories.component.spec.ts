import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubCategoriesComponent } from './add-sub-categories.component';

describe('AddSubCategoriesComponent', () => {
  let component: AddSubCategoriesComponent;
  let fixture: ComponentFixture<AddSubCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
