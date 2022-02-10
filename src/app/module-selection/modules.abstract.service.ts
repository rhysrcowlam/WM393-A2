import { Observable } from 'rxjs';
import { BoardSelection, ModuleSelection } from './modules.interface';

export abstract class AbstractModuleService {
    public abstract getModules(): Observable<ModuleSelection[]>;
    public abstract getModule(title: string): Observable<ModuleSelection | undefined>;
    public abstract getModuleBoard(id: string): Observable<BoardSelection | undefined>;
} 