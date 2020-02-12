import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ResultDataComponent} from './result-data/result-data.component';
import {QuestionsComponent} from './questions/questions.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule
} from '@angular/material';
import {AppRoutingModule, routingComponents} from './app-routing-module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MenuComponent} from './menu/menu.component';
import {BottomNavComponent} from './bottom-nav/bottom-nav.component';
import {LogoComponent} from './logo/logo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HintDialogComponent} from './hint-dialog/hint-dialog.component';
import {ProjectOverviewComponent} from './project-overview/project-overview.component';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultDataComponent,
    QuestionsComponent,
    PageNotFoundComponent,
    routingComponents,
    MenuComponent,
    BottomNavComponent,
    LogoComponent,
    HintDialogComponent,
    ProjectOverviewComponent,
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
    MatDialogModule,
    MatRadioModule,
    FormsModule,
    MatListModule
  ],
  entryComponents: [
    HintDialogComponent,
    ProjectOverviewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
