import { Component, OnInit } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractModuleService } from '../module-selection/modules.abstract.service';
import { BoardSelection, ModuleSelection } from '../module-selection/modules.interface';

@Component({
  selector: 'app-board-selection',
  templateUrl: './board-selection.component.html',
  styleUrls: ['./board-selection.component.css']
})
export class BoardSelectionComponent implements OnInit {
  public loginStatus: boolean = this.loginService.getLogInStatus();
  public user: string = "";
  public moduleId: string = "";
  public modules: ModuleSelection[] = [];
  public boards: BoardSelection[] = [];

  constructor(
    public loginService: AbstractLoginService,
    public moduleService: AbstractModuleService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const user = paramMap.get('userid');
      if (user) {
        this.user = user;
      }
    });

    this.route.paramMap.subscribe(paramMap => {
      const title = paramMap.get('module');
      if (title) {
        this.moduleId = title;
      }
    })

    let moduleBoards: string[] = [];

    this.moduleService.getModule(this.moduleId)
      .subscribe(module => {
        if (module) {
          moduleBoards = module.boards;
        }
      });

    moduleBoards.forEach(board =>
      this.moduleService.getModuleBoard(board)
        .subscribe(board => {
          if (board) {
            this.boards.push(board);
          }
        })
    );
  }

  public handleNavigation(module: string, boardName: string) {
    if (boardName == "Quiz") {
      this.router.navigate(['QuizSelection/', this.user, module]);
    }
  }
}
