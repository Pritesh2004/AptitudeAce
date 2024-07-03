import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOfCategoryComponent } from './quiz-of-category.component';

describe('QuizOfCategoryComponent', () => {
  let component: QuizOfCategoryComponent;
  let fixture: ComponentFixture<QuizOfCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizOfCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizOfCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
