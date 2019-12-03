import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ResultDataComponent} from './result-data/result-data.component';
import {QuestionsComponent} from './admin/questions/questions.component';
import {AdminAuthGuardService} from './admin-auth-guard.service';
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
    path: 'result-data',
    component: ResultDataComponent
  },
  {
    path: 'admin/questions',
    component: QuestionsComponent,
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
  QuestionsComponent,
  PageNotFoundComponent];
