import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data'
@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studies.html',
  styleUrl: './studies.css'
})
export class Studies {

  jobs: string[] = [];

  constructor(private dataService: DataService) {
    this.jobs = this.dataService.jobs;
  }

}