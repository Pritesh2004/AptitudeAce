import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCategoriesComponent } from './user-categories.component';

describe('UserCategoriesComponent', () => {
  let component: UserCategoriesComponent;
  let fixture: ComponentFixture<UserCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
