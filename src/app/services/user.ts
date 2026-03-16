import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = '/api/randomuser/api/';

  getUser(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}