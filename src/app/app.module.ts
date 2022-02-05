import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AbstractQuizService } from './quiz/quiz.abstract.service';
import { MockQuizService } from './quiz/quiz.mock.service';
import { AbstractLoginService } from './home/home-page/login.abstract.service';
import { MockLoginService } from './home/home-page/login.mock.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ModuleSelectionComponent } from './module-selection/module-selection.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizComponent } from './quiz/quiz.component';
import { DisplayQuestionComponent } from './quiz/display-question/display-question.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { BoardSelectionComponent } from './board-selection/board-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ModuleSelectionComponent,
    QuizSelectionComponent,
    QuizComponent,
    DisplayQuestionComponent,
    QuizResultsComponent,
    BoardSelectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: AbstractQuizService, useClass: MockQuizService },
    { provide: AbstractLoginService, useClass: MockLoginService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
