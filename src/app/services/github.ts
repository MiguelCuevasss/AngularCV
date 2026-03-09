import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);

  private apiUrl = 'https://api.github.com/users/MiguelCuevasss/repos';

  getRepos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}