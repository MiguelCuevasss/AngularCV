import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  skills: string[] = ['Angular', 'TypeScript', 'CSS'];

  jobs: string[] = ['Frontend Dev', 'Backend Dev', 'Fullstack Dev'];

  constructor() { }

}