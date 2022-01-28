import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { SdlcQuiz1Component } from './sdlc-quiz1/sdlc-quiz1.component';

const appRoutes: Routes = [
  { path: 'HomePage', component: HomePageComponent },
  { path: 'sdlcQuiz1', component: SdlcQuiz1Component },
  { path: 'QuizResults', component: QuizResultsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
