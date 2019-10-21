import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResultDataComponent } from './result-data/result-data.component';
import {RouterModule} from '@angular/router';
import { QuestionsComponent } from './admin/questions/questions.component';
import {AdminAuthGuardService} from './admin-auth-guard.service';
import { QuestionSetComponent } from './admin/question-set/question-set.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ResultDataComponent,
    QuestionsComponent,
    QuestionSetComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
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
        path: 'admin/questions-set',
        component: QuestionSetComponent,
        canActivate: [AdminAuthGuardService]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
