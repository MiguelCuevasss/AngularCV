import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  courses: string[] = [
    'Matematicas',
    'Programacion',
    'Economia'
  ];

  skills: string[] = [
    'Typing Avanzado',
    'Bueno en Matematica',
    'Fast Learning'
  ];

  achievements: string[] = [
    'Puesto No.1 en Torneos de Matematica',
    'Diploma de Matematica Avanzada',
    'Diploma de liderazgo'
  ];

  coursesFiltrados: string[] = [...this.courses];
  skillsFiltrados: string[] = [...this.skills];
  achievementsFiltrados: string[] = [...this.achievements];

  filtrarHabilidades(event: any) {

    const texto = event.target.value.toLowerCase();

    this.coursesFiltrados = this.courses.filter(item =>
      item.toLowerCase().includes(texto)
    );

    this.skillsFiltrados = this.skills.filter(item =>
      item.toLowerCase().includes(texto)
    );

    this.achievementsFiltrados = this.achievements.filter(item =>
      item.toLowerCase().includes(texto)
    );

  }

}