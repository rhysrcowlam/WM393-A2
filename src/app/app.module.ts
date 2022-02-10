import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AbstractQuizService } from './quiz/quiz.abstract.service';
import { MockQuizService } from './quiz/quiz.mock.service';
import { AbstractLoginService } from './home/home-page/login.abstract.service';
import { MockLoginService } from './home/home-page/login.mock.service';
import { AbstractQuizResultsService } from './quiz-results/quiz-results.abstract.service';
import { MockQuizResultsService } from './quiz-results/quiz-results.mock.service';

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
import { QuizStatisticsComponent } from './quiz-statistics/quiz-statistics.component';
import { AbstractModuleService } from './module-selection/modules.abstract.service';
import { MockModuleService } from './module-selection/modules.mock.service';
import { AbstractQuizSelectionService } from './quiz-selection/quiz-selection.abstract.service';
import { MockQuizSelectionService } from './quiz-selection/quiz-selection.mock.service';
import { BarChartVerticalComponent } from './quiz-statistics/bar-chart-vertical/bar-chart-vertical/bar-chart-vertical.component';


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
    QuizStatisticsComponent,
    BarChartVerticalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: AbstractQuizService, useClass: MockQuizService },
    { provide: AbstractLoginService, useClass: MockLoginService },
    { provide: AbstractQuizResultsService, useClass: MockQuizResultsService },
    { provide: AbstractModuleService, useClass: MockModuleService},
    { provide: AbstractQuizSelectionService, useClass: MockQuizSelectionService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
