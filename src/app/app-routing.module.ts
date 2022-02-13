import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';
import { ModuleSelectionComponent } from './module-selection/module-selection.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { QuizComponent } from './quiz/quiz.component';
import { BoardSelectionComponent } from './board-selection/board-selection.component';
import { QuizStatisticsComponent } from './quiz-statistics/quiz-statistics.component';

// Defines the routes used throughout the application.
const appRoutes: Routes = [
  { path: '', redirectTo: 'HomePage', pathMatch: 'full'},
  { path: 'HomePage', component: HomePageComponent },
  { path: 'ModuleSelection/:userid', component: ModuleSelectionComponent},
  { path: 'BoardSelection/:userid/:module', component: BoardSelectionComponent},
  { path: 'QuizSelection/:userid/:module', component: QuizSelectionComponent},
  { path: 'QuizStatistics/:userid/:module/:quizid', component: QuizStatisticsComponent},
  { path: 'Quiz/:userid/:module/:quizid', component: QuizComponent },
  { path: 'QuizResults', component: QuizResultsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
