import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubCategoryComponent } from './user-sub-category.component';

describe('UserSubCategoryComponent', () => {
  let component: UserSubCategoryComponent;
  let fixture: ComponentFixture<UserSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
