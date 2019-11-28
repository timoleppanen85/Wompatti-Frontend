import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ResultDataComponent} from './result-data/result-data.component';
import {QuestionsComponent} from './admin/questions/questions.component';
import {AdminAuthGuardService} from './admin-auth-guard.service';
import {QuestionSetComponent} from './admin/question-set/question-set.component';
import {QuestionSetsComponent} from './question-sets/question-sets.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'question-sets',
    component: QuestionSetsComponent
  },
  {
    path: 'result-data',
    component: ResultDataComponent
  },
  {
    path: 'admin/questions',
    component: QuestionsComponent,
    canActivate: [AdminAuthGuardService]
  },
  {
    path: 'admin/questions-set',
    component: QuestionSetComponent,
    canActivate: [AdminAuthGuardService]
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

export const routingComponents = [
  LoginComponent,
  HomeComponent,
  ResultDataComponent,
  QuestionSetComponent,
  QuestionsComponent,
  PageNotFoundComponent];
