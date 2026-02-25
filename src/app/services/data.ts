import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  jobs: string[] = [
    'Frontend Developer',
    'Backend Developer'
  ];

  diplomas: string[] = [
    'Angular Certificate',
    'Python Certificate'
  ];

  yearsExperience: number = 3.4567;

}