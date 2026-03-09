import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);

  jobs: string[] = [
    'Frontend Developer',
    'Backend Developer'
  ];

  diplomas: string[] = [
    'Angular Certificate',
    'Python Certificate'
  ];

  yearsExperience: number = 3.4567;

  private githubUrl = 'https://api.github.com/users/MiguelCuevasss/repos';

  getRepos(): Observable<any[]> {
    return this.http.get<any[]>(this.githubUrl);
  }
}