import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list'; // Import MatListModule
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatOptionModule } from '@angular/material/core'; // Import MatOptionModule
import { MatInputModule } from '@angular/material/input';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartingPageComponent } from './component/starting-page/starting-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserHomeComponent } from './component/user/user-home/user-home.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorProviders } from './services/auth.interceptor';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CreateQuizComponent } from './component/admin/create-quiz/create-quiz.component';
import { CategoriesComponent } from './component/admin/categories/categories.component';
import { QuizzesComponent } from './component/admin/quizzes/quizzes.component';
import { AddCategoriesComponent } from './component/admin/add-categories/add-categories.component';
import { UpdateQuizComponent } from './component/admin/update-quiz/update-quiz.component';
import { QuestionsComponent } from './component/admin/questions/questions.component';
import { AddQuestionsComponent } from './component/admin/add-questions/add-questions.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { UserProfileComponent } from './component/user/user-profile/user-profile.component';
import { AdminProfileComponent } from './component/admin/admin-profile/admin-profile.component';
import { AllQuizzesComponent } from './component/user/all-quizzes/all-quizzes.component';
import { QuizOfCategoryComponent } from './component/user/quiz-of-category/quiz-of-category.component';
import { QuizInstructionsComponent } from './component/user/quiz-instructions/quiz-instructions.component';
import { StartQuizComponent } from './component/user/start-quiz/start-quiz.component';
import { CanDeactivateGuard } from './services/authGuards/can-deactivate-guard.service';
import { QuizSummaryComponent } from './component/user/quiz-summary/quiz-summary.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    StartingPageComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    AdminHomeComponent,
    NavbarComponent,
    CreateQuizComponent,
    CategoriesComponent,
    QuizzesComponent,
    AddCategoriesComponent,
    UpdateQuizComponent,
    QuestionsComponent,
    AddQuestionsComponent,
    SideBarComponent,
    UserProfileComponent,
    AdminProfileComponent,
    AllQuizzesComponent,
    QuizOfCategoryComponent,
    QuizInstructionsComponent,
    StartQuizComponent,
    QuizSummaryComponent
  ],
  imports: [
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatInputModule,
    CKEditorModule,
    MatRadioModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    MatOptionModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
