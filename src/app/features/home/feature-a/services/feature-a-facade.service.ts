import {inject} from '@angular/core';
import {Observable} from "rxjs";
import {Repos} from "../../../../shared/models/repos";
import {ApiService} from "../../../../core/services/api.service";

export class FeatureAFacadeService {

  private saluto: string = 'cià cià';
  protected readonly apiService = inject(ApiService);

  constructor() { }

  loadGitHubRepo(): Observable<Repos[]>{
    this.pippo();
    return this.apiService.loadRepo();
  }

  unsafeReturn(): unknown {
    return "Hello";
  }

  pippo() {
    /*const foo = '5.5' + 5;
    const result: string = this.unsafeReturn();
    console.log(this.saluto, foo)*/
  }

  empty() {

  }

}
