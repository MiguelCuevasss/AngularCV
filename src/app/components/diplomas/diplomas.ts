import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-diplomas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diplomas.html',
  styleUrl: './diplomas.css'
})
export class Diplomas {

  diplomas: string[] = [];

  constructor(private dataService: DataService) {
    this.diplomas = this.dataService.diplomas;
  }

}