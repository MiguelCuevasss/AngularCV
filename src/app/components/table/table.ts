import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {

  education = [
    {
      year: '2025-2026',
      institution: 'Universidad Francisco Marroquin',
      title: 'Diploma de Liderazgo'
    },
    {
      year: '2024-2025',
      institution: 'Centro Escolar El Roble',
      title: 'Bachiller Internacional'
    },
    {
      year: '2024-2025',
      institution: 'Centro Escolar El Roble',
      title: 'Diploma de Matematica Avanzada'
    },
    {
      year: '2023-2024',
      institution: 'Centro Escolar El Roble',
      title: 'Ganador del Olimpiadas Burger King'
    },
    {
      year: '2022-2021',
      institution: 'Centro Escolar El Roble',
      title: 'Ganador de Olimpiada de Programacion'
    },
    {
      year: '2020-2021',
      institution: 'Centro Escolar El Roble',
      title: 'Titulo de Primer Puesto TOEFL'
    }
  ];

}