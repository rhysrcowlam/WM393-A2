import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractModuleService } from './modules.abstract.service';
import { BoardSelection, ModuleSelection } from './modules.interface';

@Injectable({
  providedIn: 'root'
})
export class MockModuleService implements AbstractModuleService {
  // Mock data of modules on the system.
  private modules: ModuleSelection[] = [
    {
      id: "1",
      moduleId: "SDLC",
      moduleTitle: "WM393: Software Development Life Cycle",
      boards: [
        "1",
        "2",
        "3"
      ]
    },
    {
      id: "2",
      moduleId: "MI",
      moduleTitle: "WM275: Machine Intelligence",
      boards: [
        "1",
        "4",
        "5"
      ]
    }
  ]

  // Mock data of boards on the system.
  private boards: BoardSelection[] = [
    {
      id: "1",
      title: "Quiz"
    },
    {
      id: "2",
      title: "Resources"
    },
    {
      id: "3",
      title: "Q and A"
    },
    {
      id: "4",
      title: "Discussions"
    },
    {
      id: "5",
      title: "Feedback"
    },
  ]

  // Retrieve a list of all of the available modules.
  public getModules(): Observable<ModuleSelection[]> {
    return of(this.modules)
  }

  // Retrieve one specific module from the array of modules.
  public getModule(title: string): Observable<ModuleSelection | undefined> {
    const module = this.modules.find(x => x.moduleId == title);
    if (module) {
      return of(module)
    }
    return of(undefined)
  }

  // Retrieve one specific board from the array of boards.
  public getModuleBoard(id: string): Observable<BoardSelection | undefined> {
    const board = this.boards.find(x => x.id == id);
    if (board) {
      return of(board)
    }
    return of(undefined)
  }
} 