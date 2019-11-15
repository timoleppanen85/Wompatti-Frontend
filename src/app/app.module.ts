import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResultDataComponent } from './result-data/result-data.component';
import { QuestionsComponent } from './admin/questions/questions.component';
import { QuestionSetComponent } from './admin/question-set/question-set.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule} from '@angular/material';
import {AppRoutingModule, routingComponents} from './app-routing-module';
import { QuestionSetsComponent } from './question-sets/question-sets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ResultDataComponent,
    QuestionsComponent,
    QuestionSetComponent,
    QuestionSetsComponent,
    PageNotFoundComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
