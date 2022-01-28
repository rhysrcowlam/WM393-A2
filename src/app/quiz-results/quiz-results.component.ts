import { Component } from '@angular/core';
import { SenderService } from '../sender.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent {


  constructor(
    private service: SenderService,
  ) { }

  test = (this.service.variable1);
}

