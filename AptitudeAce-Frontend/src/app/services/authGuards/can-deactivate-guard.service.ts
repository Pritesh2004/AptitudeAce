import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { StartQuizComponent } from 'src/app/component/user/start-quiz/start-quiz.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<StartQuizComponent> {
  canDeactivate(component: StartQuizComponent): Observable<boolean> | boolean {
    return component.canDeactivate();
  }
}
