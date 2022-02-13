import { Observable } from 'rxjs';
import { BoardSelection, ModuleSelection } from './modules.interface';

export abstract class AbstractModuleService {
    public abstract getModules(): Observable<ModuleSelection[]>;
    public abstract getModule(title: string): Observable<ModuleSelection | undefined>;
    public abstract getModuleBoard(id: string): Observable<BoardSelection | undefined>;
    public abstract sdlcSetCurrentModule(): void;
    public abstract miSetCurrentModule(): void;
    public abstract sdlcCurrentModule(): boolean;
    public abstract miCurrentModule(): boolean;
    public abstract resetModule(): void;
}