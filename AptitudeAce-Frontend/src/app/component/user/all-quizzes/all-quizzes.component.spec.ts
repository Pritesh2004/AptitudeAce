import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuizzesComponent } from './all-quizzes.component';

describe('AllQuizzesComponent', () => {
  let component: AllQuizzesComponent;
  let fixture: ComponentFixture<AllQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllQuizzesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
