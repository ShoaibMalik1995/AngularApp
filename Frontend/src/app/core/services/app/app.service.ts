import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AppService{

  private currentModuleSource = new Subject<string>();
  currentModule$ = this.currentModuleSource.asObservable();

  updateCurrentModule(currentModule: string) {
    this.currentModuleSource.next(currentModule);
  }

}
