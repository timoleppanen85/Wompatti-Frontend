import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResultDataComponent } from './result-data/result-data.component';
import { QuestionsComponent } from './questions/questions.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatProgressBarModule} from '@angular/material';
import {AppRoutingModule, routingComponents} from './app-routing-module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { LogoComponent } from './logo/logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ResultDataComponent,
    QuestionsComponent,
    PageNotFoundComponent,
    routingComponents,
    MenuComponent,
    BottomNavComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
