import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { CapitalizePipe } from '../../pipes/capitalize-pipe';

@Component({
  selector: 'app-diplomas',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './diplomas.html',
  styleUrl: './diplomas.css'
})
export class Diplomas {

  diplomas: string[] = [];
  yearsExperience!: number;

  constructor(private dataService: DataService) {
    this.diplomas = this.dataService.diplomas;
    this.yearsExperience = this.dataService.yearsExperience;
  }
}