import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';
import { ModuleSelectionComponent } from './module-selection/module-selection.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { QuizComponent } from './quiz/quiz.component';
import { BoardSelectionComponent } from './board-selection/board-selection.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'HomePage', pathMatch: 'full'},
  { path: 'HomePage', component: HomePageComponent },
  { path: 'ModuleSelection', component: ModuleSelectionComponent},
  { path: 'BoardSelection', component: BoardSelectionComponent},
  { path: 'QuizSelection', component: QuizSelectionComponent},
  { path: 'Quiz', component: QuizComponent },
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
