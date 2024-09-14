import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartingPageComponent } from './component/starting-page/starting-page.component';
import { UserHomeComponent } from './component/user/user-home/user-home.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminGuard } from './services/authGuards/admin.guard';
import { NormalUserGuard } from './services/authGuards/normal-user.guard';
import { CreateQuizComponent } from './component/admin/create-quiz/create-quiz.component';
import { AddCategoriesComponent } from './component/admin/add-categories/add-categories.component';
import { CategoriesComponent } from './component/admin/categories/categories.component';
import { QuizzesComponent } from './component/admin/quizzes/quizzes.component';
import { UpdateQuizComponent } from './component/admin/update-quiz/update-quiz.component';
import { QuestionsComponent } from './component/admin/questions/questions.component';
import { AddQuestionsComponent } from './component/admin/add-questions/add-questions.component';
import { UserProfileComponent } from './component/user/user-profile/user-profile.component';
import { AdminProfileComponent } from './component/admin/admin-profile/admin-profile.component';
import { AllQuizzesComponent } from './component/user/all-quizzes/all-quizzes.component';
import { QuizOfCategoryComponent } from './component/user/quiz-of-category/quiz-of-category.component';
import { QuizInstructionsComponent } from './component/user/quiz-instructions/quiz-instructions.component';
import { StartQuizComponent } from './component/user/start-quiz/start-quiz.component';
import { CanDeactivateGuard } from './services/authGuards/can-deactivate-guard.service';
import { UserCategoriesComponent } from './component/user/user-categories/user-categories.component';
import { AddSubCategoriesComponent } from './component/admin/add-sub-categories/add-sub-categories.component';
import { SubCategoriesComponent } from './component/admin/sub-categories/sub-categories.component';
import { UserSubCategoryComponent } from './component/user/user-sub-category/user-sub-category.component';
import { SubCategoriesOfCategoryComponent } from './component/user/sub-categories-of-category/sub-categories-of-category.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [

  {
    path: '',
    component: StartingPageComponent,

  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'userHome',
    component: UserHomeComponent,
    canActivate: [NormalUserGuard],
    children: [
      {
        path: 'user-profile',
        component: UserProfileComponent
      }
    ]
  },
  {
    path: 'user-categories',
    component : UserCategoriesComponent
  },
  {
    path: 'user-subCategory/:id',
    component : UserSubCategoryComponent
  },
  {
    path: 'subCategories/:id/:title',
    component : SubCategoriesOfCategoryComponent
  },

  {
    path: 'all-quizzes',
    component: AllQuizzesComponent
  }, {
    path: 'quiz/:cid',
    component: QuizOfCategoryComponent
  }
  , {
    path: 'instructions/:qId',
    component: QuizInstructionsComponent
  },

  {
    path: 'start-quiz/:qId',
    component: StartQuizComponent,
    // canActivate: [NormalUserGuard],
    canDeactivate: [CanDeactivateGuard]
  },

  {
    path: 'adminHome',
    component: AdminHomeComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'admin-profile',
        component: AdminProfileComponent
      },
      {
        path: 'createQuiz/:id',
        component: CreateQuizComponent,
      },
      {
        path: 'addCategories',
        component: AddCategoriesComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'addSubCategories/:cId',
        component: AddSubCategoriesComponent,
      },
      {
        path: 'subCategories/:id',
        component: SubCategoriesComponent,
      },
      {
        path: 'quizzes',
        component: QuizzesComponent,
      },
      {
        path: 'quiz/:qId',
        component: UpdateQuizComponent
      },
      {
        path: 'questions/:qId/:title',
        component: QuestionsComponent
      },
      {
        path: 'add-question/:qId/:title',
        component: AddQuestionsComponent
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
