import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ResultDataComponent} from './result-data/result-data.component';
import {QuestionsComponent} from './questions/questions.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'questions/:id',
    component: QuestionsComponent,
  },
  {
    path: 'result-data',
    component: ResultDataComponent
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
  HomeComponent,
  ResultDataComponent,
  QuestionsComponent,
  PageNotFoundComponent];
