import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Repos } from '../../shared/models/repos';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  protected readonly httpClient = inject(HttpClient);

  loadRepo(): Observable<Repos[]> {
    return this.httpClient.get<Repos[]>(
      `${environment.apiUrl}users/angular/repos`,
    );
  }
}
